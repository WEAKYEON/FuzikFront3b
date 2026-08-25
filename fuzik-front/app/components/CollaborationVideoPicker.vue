<template>
  <form class="video-picker" @submit.prevent="handleSubmit">
    <section class="video-picker__selection" aria-label="Selected collaboration videos">
      <div class="video-picker__slots">
        <button
          v-for="(slot, index) in selectedSlots"
          :key="index"
          type="button"
          class="video-picker__slot"
          :aria-label="slot ? `Replace video ${index + 1}` : `Video slot ${index + 1}`"
          @dragenter.prevent
          @dragover.prevent
          @drop="drop($event, index)"
          @click="slot && clearSlot(index)"
        >
          <img v-if="slot" :src="slot.preview" alt="">
          <span v-else>{{ index + 1 }}</span>
        </button>
      </div>

      <p v-if="errorMessage" class="video-picker__error" role="alert">{{ errorMessage }}</p>

      <div class="video-picker__actions">
        <button type="button" @click="reset">Reset</button>
        <button type="button" @click="proceed">Proceed --&gt;</button>
      </div>
    </section>

    <section class="video-picker__library" aria-label="Available videos">
      <div class="video-picker__search">
        <input
          v-model="searchTerm"
          type="search"
          placeholder="Song name or artist name"
          aria-label="Search by song or artist"
          @input="queueSearch"
        >
      </div>

      <p v-if="loading" class="video-picker__status">Loading videos…</p>
      <p v-else-if="!availablePlays.length" class="video-picker__status">No videos found.</p>

      <div v-else class="video-picker__results">
        <CollaborationSelectionCardLandscape
          v-for="play in availablePlays"
          :key="play.url"
          :play="play"
          @select="selectNext"
        />
      </div>
    </section>
  </form>
</template>

<script setup lang="ts">
interface CollaborationPlay {
  url: string
  preview: string
  music_title?: string
  musician_profile_pic?: string
}

interface SelectedPlay extends CollaborationPlay {
  preview: string
}

const props = defineProps<{
  code: string
  initialVideo?: string
}>()

const searchTerm = ref('')
const loading = ref(false)
const errorMessage = ref('')
const plays = ref<CollaborationPlay[]>([])
const selectedSlots = ref<Array<SelectedPlay | null>>([null, null])
let searchTimer: ReturnType<typeof setTimeout> | undefined
let searchRequest = 0

const collabCodeCookie = useCookie<string>('collab_code')
const collabUrl1Cookie = useCookie<string>('collab_url1')
const collabUrl2Cookie = useCookie<string>('collab_url2')

collabCodeCookie.value = props.code

const availablePlays = computed(() => {
  const selectedUrls = new Set(selectedSlots.value.filter(Boolean).map(play => play!.url))
  return plays.value.filter(play => !selectedUrls.has(play.url))
})

async function fetchPlays(query = '') {
  const requestId = ++searchRequest
  loading.value = true

  try {
    const params = new URLSearchParams({ limit: query ? '60' : '20', ready: '1' })
    if (query) {
      params.set('q', query)
    }

    const result = await $fetch<CollaborationPlay[]>(`/api/play2s_l/?${params}`)
    if (requestId === searchRequest) {
      plays.value = Array.isArray(result) ? result : []
    }
  } catch {
    if (requestId === searchRequest) {
      plays.value = []
      errorMessage.value = 'Videos could not be loaded. Please try again.'
    }
  } finally {
    if (requestId === searchRequest) {
      loading.value = false
    }
  }
}

async function lookupPlay(url: string): Promise<SelectedPlay | null> {
  const existing = plays.value.find(play => play.url === url)
  if (existing) {
    return existing
  }

  try {
    const result = await $fetch<any[]>(`/api/play2_watch?p=${encodeURIComponent(url)}`)
    const play = result?.[0]
    if (!play) {
      return null
    }

    return {
      ...play,
      url,
      preview: play.preview?.startsWith('http')
        ? play.preview
        : `https://media05.fuzikapp.com/${play.preview}`
    }
  } catch {
    return null
  }
}

async function setSlot(index: number, url: string) {
  if (!url || selectedSlots.value.some((play, slotIndex) => slotIndex !== index && play?.url === url)) {
    return
  }

  const play = await lookupPlay(url)
  if (play) {
    selectedSlots.value[index] = play
    errorMessage.value = ''
  }
}

function selectNext(play: CollaborationPlay) {
  const index = selectedSlots.value.findIndex(slot => slot === null)
  void setSlot(index === -1 ? 0 : index, play.url)
}

function drop(event: DragEvent, index: number) {
  const url = event.dataTransfer?.getData('text/plain') || event.dataTransfer?.getData('text') || ''
  void setSlot(index, url)
}

function clearSlot(index: number) {
  selectedSlots.value[index] = null
  errorMessage.value = ''
}

function reset() {
  selectedSlots.value = [null, null]
  searchTerm.value = ''
  errorMessage.value = ''
  void fetchPlays()
}

function queueSearch() {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
  searchTimer = setTimeout(() => void fetchPlays(searchTerm.value.trim()), 250)
}

async function proceed() {
  const [first, second] = selectedSlots.value
  if (!first || !second) {
    errorMessage.value = 'Please select two videos before proceeding.'
    return
  }

  collabCodeCookie.value = props.code
  collabUrl1Cookie.value = first.url
  collabUrl2Cookie.value = second.url
  await navigateTo('/webapp/collaboration03')
}

async function handleSubmit() {
  if (searchTerm.value.trim().toLowerCase() === 'proceed') {
    if (searchTimer) {
      clearTimeout(searchTimer)
      searchTimer = undefined
    }

    if (availablePlays.value.length < 2) {
      await fetchPlays()
    }

    const emptyIndexes = selectedSlots.value
      .map((slot, index) => slot ? -1 : index)
      .filter(index => index >= 0)

    for (const index of emptyIndexes) {
      const nextPlay = availablePlays.value[0]
      if (!nextPlay) {
        break
      }
      await setSlot(index, nextPlay.url)
    }

    await proceed()
    return
  }
  await fetchPlays(searchTerm.value.trim())
}

onMounted(async () => {
  await fetchPlays()
  if (props.initialVideo) {
    await setSlot(0, props.initialVideo)
  }
})

onBeforeUnmount(() => {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
})
</script>

<style scoped>
.video-picker {
  display: grid;
  min-height: calc(100vh - 104px);
  grid-template-columns: minmax(520px, 38%) minmax(0, 1fr);
  color: #fff;
}

.video-picker__selection,
.video-picker__library {
  border: 1px solid #ffe000;
}

.video-picker__selection {
  padding: 111px 16px 24px;
}

.video-picker__slots {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: 177px;
}

.video-picker__slot {
  display: grid;
  min-width: 0;
  place-items: center;
  overflow: hidden;
  color: #fff;
  background: #000;
  border: 1px solid #fff;
  font-size: clamp(72px, 7vw, 128px);
  cursor: pointer;
}

.video-picker__slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-picker__error {
  min-height: 24px;
  margin: 10px 0 -34px;
  color: #ffe044;
  text-align: center;
}

.video-picker__actions {
  display: flex;
  justify-content: space-around;
  gap: 24px;
  padding-top: 130px;
}

.video-picker__actions button {
  min-width: 140px;
  height: 54px;
  padding: 0 18px;
  color: #000;
  background: #ffe044;
  border: 2px solid #000;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.video-picker__actions button:hover,
.video-picker__actions button:focus-visible {
  background: #fff07a;
  outline: 2px solid #fff;
}

.video-picker__library {
  height: calc(100vh - 104px);
  padding: 32px 16px 24px;
  overflow-y: auto;
}

.video-picker__search {
  padding-bottom: 54px;
}

.video-picker__search input {
  width: 100%;
  height: 33px;
  padding: 0 16px;
  color: #111827;
  background: #fff;
  border: 2px solid #f4d000;
  border-radius: 12px;
  outline: none;
}

.video-picker__search input:focus {
  border-color: #fff600;
  box-shadow: 0 0 0 2px rgb(255 246 0 / 20%);
}

.video-picker__results {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px 16px;
}

.video-picker__status {
  padding: 40px;
  color: #d1d5db;
  text-align: center;
}

@media (max-width: 1399px) {
  .video-picker {
    grid-template-columns: minmax(460px, 42%) minmax(0, 1fr);
  }

  .video-picker__results {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .video-picker {
    display: block;
  }

  .video-picker__selection {
    padding-top: 32px;
  }

  .video-picker__actions {
    padding-top: 56px;
  }

  .video-picker__library {
    height: auto;
    min-height: 50vh;
  }
}

@media (max-width: 639px) {
  .video-picker__slots {
    grid-template-columns: 1fr;
  }

  .video-picker__slot {
    aspect-ratio: 16 / 9;
    font-size: 72px;
  }

  .video-picker__actions {
    justify-content: space-between;
    gap: 10px;
  }

  .video-picker__actions button {
    min-width: 0;
    flex: 1;
    font-size: 16px;
  }

  .video-picker__results {
    grid-template-columns: 1fr;
  }
}
</style>
