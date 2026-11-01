<template>
  <div class="profile-settings">
    <div
      v-if="toast"
      class="profile-toast"
      :class="toast.type === 'success' ? 'profile-toast--success' : 'profile-toast--error'"
      role="status"
      aria-live="polite"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        {{ toast.type === 'success' ? 'check_circle' : 'error' }}
      </span>
      <span>{{ toast.message }}</span>
      <button type="button" aria-label="Dismiss notification" @click="toast = null">&times;</button>
    </div>

    <h1 class="profile-settings__title">Profile Setting</h1>

    <form novalidate @submit.prevent="saveChanges">
      <div class="profile-settings__layout">
        <section class="profile-picture-section" aria-label="Profile picture">
          <label
            class="profile-picture"
            :class="{ 'drop-zone--active': isDragging }"
            @dragenter.prevent="isDragging = true"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="selectDroppedFile"
          >
            <img :src="previewUrl || currentPictureUrl" alt="Profile picture">
            <span class="profile-picture__edit material-symbols-outlined" aria-hidden="true">edit</span>
            <span class="sr-only">Select a new profile picture</span>
            <input
              ref="fileInput"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              class="sr-only"
              @change="selectFile"
            >
          </label>

          <p v-if="selectedImage" class="picture-status">New photo selected</p>
          <p class="profile-email">{{ form.email }}</p>

          <div class="picture-actions">
            <button v-if="selectedImage" type="button" @click="discardSelectedImage">Cancel new photo</button>
            <button v-else-if="hasCurrentPicture && !removePicture" type="button" @click="removePicture = true">Remove photo</button>
            <button v-else-if="removePicture" type="button" @click="removePicture = false">Keep current photo</button>
          </div>

          <p v-if="imageError" class="field-error">{{ imageError }}</p>

          <div class="rank-badge">
            <img src="https://media05.fuzikapp.com/app/rank_performer.png" alt="">
            <span>Rank: <strong>Musician</strong></span>
          </div>
        </section>

        <section class="profile-fields">
          <div class="profile-fields__grid">
            <ProfileField v-model="form.first_name" label="First Name" placeholder="Your first name" required :error="errors.first_name" />
            <ProfileField v-model="form.last_name" label="Last Name" placeholder="Your last name" required :error="errors.last_name" />
            <div class="profile-display-name">
              <ProfileField v-model="form.display_name" label="Display Name" placeholder="Your display name" required readonly :error="errors.display_name" />
              <p class="profile-display-name__note">Display name cannot be changed.</p>
            </div>
            <ProfileField v-model="form.tel" label="Phone Number" placeholder="Phone number" :error="errors.tel" />
            <ProfileField v-model="form.music_genre" label="Music Genre" placeholder="Your music genre" required :error="errors.music_genre" />
            <ProfileField v-model="form.music_inst" label="Instrument" placeholder="Your musical instruments" required :error="errors.music_inst" />
          </div>

          <div class="profile-fields__footer">
            <button
              type="submit"
              class="save-button"
              :disabled="!isDirty || isSaving"
            >
              <span v-if="isSaving" class="save-button__spinner" aria-hidden="true"></span>
              {{ isSaving ? 'Saving…' : 'Save Changes' }}
            </button>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ProfileField from '~/components/ProfileField.vue'
import { isDisplayNameAvailable, updateProfileField, uploadProfileImage, type EditableProfileField } from '~/services/profile'

definePageMeta({ layout: 'main' })

interface ProfileForm {
  email: string
  first_name: string
  last_name: string
  display_name: string
  tel: string
  music_genre: string
  music_inst: string
}

type Toast = { type: 'success' | 'error', message: string }

const client = useSupabaseClient()
const { musician, profileImage, refresh } = useCurrentUser()
const fileInput = ref<HTMLInputElement | null>(null)
const selectedImage = ref<File | null>(null)
const previewUrl = ref('')
const removePicture = ref(false)
const isDragging = ref(false)
const isSaving = ref(false)
const imageError = ref('')
const toast = ref<Toast | null>(null)
const errors = reactive<Partial<Record<keyof ProfileForm, string>>>({})
const form = reactive<ProfileForm>({
  email: '', first_name: '', last_name: '', display_name: '', tel: '', music_genre: '', music_inst: ''
})
const savedForm = ref<ProfileForm>({ ...form })
let toastTimer: ReturnType<typeof setTimeout> | undefined

const currentPictureUrl = computed(() => removePicture.value ? DEFAULT_PROFILE_IMAGE : profileImage.value)
const hasCurrentPicture = computed(() => Boolean(musician.value?.profile_pic && musician.value.profile_pic !== 'None'))
const isDirty = computed(() =>
  selectedImage.value !== null ||
  removePicture.value ||
  Object.keys(savedForm.value).some((key) => form[key as keyof ProfileForm] !== savedForm.value[key as keyof ProfileForm])
)

function applyMusicianToForm() {
  if (!musician.value) return
  const values: ProfileForm = {
    email: musician.value.email || form.email,
    first_name: musician.value.first_name || '',
    last_name: musician.value.last_name || '',
    display_name: musician.value.display_name || '',
    tel: musician.value.tel || '',
    music_genre: musician.value.music_genre || '',
    music_inst: musician.value.music_inst || ''
  }
  Object.assign(form, values)
  savedForm.value = { ...values }
}

function showToast(type: Toast['type'], message: string) {
  toast.value = { type, message }
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = null }, 5000)
}

function validate() {
  Object.keys(errors).forEach(key => delete errors[key as keyof ProfileForm])
  if (!form.first_name.trim()) errors.first_name = 'First name is required.'
  if (!form.last_name.trim()) errors.last_name = 'Last name is required.'
  if (!form.display_name.trim()) errors.display_name = 'Display name is required.'
  if (!form.music_genre.trim()) errors.music_genre = 'Music genre is required.'
  if (!form.music_inst.trim()) errors.music_inst = 'Musical instruments are required.'
  if (form.tel.trim() && !/^[+\d][\d\s().-]{5,24}$/.test(form.tel.trim())) {
    errors.tel = 'Enter a valid phone number.'
  }
  return Object.keys(errors).length === 0
}

function setSelectedImage(file?: File) {
  imageError.value = ''
  if (!file) return
  if (!file.type.startsWith('image/')) {
    imageError.value = 'Please select a valid image file.'
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    imageError.value = 'Profile pictures must be 5 MB or smaller.'
    return
  }
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  selectedImage.value = file
  previewUrl.value = URL.createObjectURL(file)
  removePicture.value = false
}

function selectFile(event: Event) {
  setSelectedImage((event.target as HTMLInputElement).files?.[0])
}

function selectDroppedFile(event: DragEvent) {
  isDragging.value = false
  setSelectedImage(event.dataTransfer?.files[0])
}

function discardSelectedImage() {
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = ''
  selectedImage.value = null
  if (fileInput.value) fileInput.value.value = ''
}

function errorMessage(error: unknown) {
  if (error && typeof error === 'object') {
    const value = error as { data?: { message?: string }, message?: string, statusMessage?: string }
    return value.data?.message || value.statusMessage || value.message || 'Profile update failed.'
  }
  return typeof error === 'string' ? error : 'Profile update failed.'
}

async function saveChanges() {
  if (!isDirty.value || isSaving.value) return
  if (!validate()) {
    showToast('error', 'Please correct the highlighted fields.')
    return
  }

  isSaving.value = true
  try {
    const displayName = form.display_name.trim()
    const savedDisplayName = savedForm.value.display_name.trim()
    if (displayName !== savedDisplayName && !await isDisplayNameAvailable(displayName)) {
      errors.display_name = 'This display name is already in use.'
      showToast('error', errors.display_name)
      return
    }

    let uploadedPicture: string | undefined
    if (selectedImage.value) uploadedPicture = await uploadProfileImage(selectedImage.value)

    const fields: Array<[EditableProfileField, string]> = [
      ['first_name', form.first_name.trim()],
      ['last_name', form.last_name.trim()],
      ['display_name', displayName],
      ['tel', form.tel.trim()],
      ['music_genre', form.music_genre.trim()],
      ['music_inst', form.music_inst.trim()]
    ]
    const changedFields = fields.filter(([field, value]) => value !== savedForm.value[field as keyof ProfileForm])
    if (uploadedPicture !== undefined) changedFields.push(['profile_pic', uploadedPicture])
    else if (removePicture.value) changedFields.push(['profile_pic', 'None'])

    for (const [field, value] of changedFields) {
      await updateProfileField(form.email, field, value)
    }

    await refresh(form.email)
    applyMusicianToForm()
    discardSelectedImage()
    removePicture.value = false
    showToast('success', 'Profile updated successfully.')
  } catch (error) {
    showToast('error', errorMessage(error))
  } finally {
    isSaving.value = false
  }
}

function warnBeforeUnload(event: BeforeUnloadEvent) {
  if (!isDirty.value) return
  event.preventDefault()
  event.returnValue = ''
}

onBeforeRouteLeave(() => {
  if (!isDirty.value) return true
  return window.confirm('You have unsaved changes. Are you sure you want to leave?')
})

onMounted(() => window.addEventListener('beforeunload', warnBeforeUnload))
onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', warnBeforeUnload)
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  if (toastTimer) clearTimeout(toastTimer)
})

const { data: authData } = await client.auth.getSession()
if (!authData.session) {
  await navigateTo('/')
} else {
  const email = authData.session.user.email
  if (!email) await navigateTo('/')
  else {
    if (!musician.value || musician.value.email !== email) await refresh(email)
    applyMusicianToForm()
  }
}
</script>

<style scoped>
.profile-settings { width:100%; max-width:1220px; margin:0 auto; padding:2rem clamp(.25rem,2vw,1.5rem) 4rem; }
.profile-settings__title { margin:0 0 2.25rem; color:#fde047; font-size:clamp(2rem,4vw,2.75rem); font-weight:800; line-height:1.1; }
.profile-settings__layout { display:grid; grid-template-columns:minmax(220px,300px) minmax(0,1fr); align-items:start; gap:clamp(3rem,7vw,7rem); }
.profile-picture-section { display:flex; min-width:0; flex-direction:column; align-items:center; }
.profile-picture { position:relative; display:block; width:min(100%,260px); aspect-ratio:1; cursor:pointer; }
.profile-picture > img { width:100%; height:100%; object-fit:cover; background:#fff; border:3px solid #fde047; border-radius:50%; transition:filter .2s ease, box-shadow .2s ease; }
.profile-picture:hover > img,.drop-zone--active > img { filter:brightness(.9); box-shadow:0 0 0 6px rgb(253 224 71 / 18%); }
.profile-picture__edit { position:absolute; right:3%; bottom:3%; display:grid; width:58px; height:58px; place-items:center; color:#000; background:#fde047; border:4px solid #000; border-radius:50%; font-size:1.9rem; font-variation-settings:'FILL' 1; }
.picture-status { margin-top:1rem; color:#fde047; font-size:.8rem; font-weight:700; }
.profile-email { width:100%; margin-top:1.15rem; overflow-wrap:anywhere; color:#fff; text-align:center; font-size:.95rem; font-weight:600; }
.picture-actions { display:flex; justify-content:center; margin-top:.6rem; }
.picture-actions button { color:#fde047; text-decoration:underline; text-underline-offset:3px; font-size:.8rem; }
.picture-actions button:hover { color:#facc15; }
.rank-badge { display:flex; align-items:center; justify-content:center; gap:.5rem; margin-top:1.3rem; color:#fff; font-size:1rem; font-weight:700; }
.rank-badge img { width:34px; height:34px; object-fit:contain; }
.rank-badge strong { color:#fde047; }
.profile-fields { min-width:0; padding-top:3.2rem; }
.profile-display-name__note { margin:.5rem 0 0; color:#d1d5db; font-size:.8rem; }
.profile-fields__grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:clamp(3rem,8vw,7rem); row-gap:4.25rem; }
.profile-fields__footer { display:flex; justify-content:center; padding-top:5rem; }
.save-button { display:flex; min-width:170px; min-height:50px; align-items:center; justify-content:center; gap:.5rem; padding:.75rem 1.5rem; color:#000; background:#fde047; border-radius:.7rem; box-shadow:0 0 18px rgb(250 204 21 / 45%); font-size:1.05rem; font-weight:800; transition:.2s ease; }
.save-button:not(:disabled):hover { background:#facc15; box-shadow:0 0 24px rgb(250 204 21 / 65%); transform:translateY(-1px); }
.save-button:disabled { cursor:not-allowed; opacity:.45; }
.save-button__spinner { width:1rem; height:1rem; border:2px solid rgb(0 0 0 / 25%); border-top-color:#000; border-radius:50%; animation:spin .7s linear infinite; }
.field-error { margin-top:.5rem; color:#fca5a5; text-align:center; font-size:.8rem; }
.profile-toast { position:fixed; top:5.5rem; right:1rem; z-index:100; display:flex; max-width:min(420px,calc(100vw - 2rem)); align-items:center; gap:.65rem; padding:.85rem 1rem; color:#fff; border:1px solid; border-radius:.75rem; box-shadow:0 12px 35px rgb(0 0 0 / 45%); }
.profile-toast--success { color:#fff; background:#16a34a; border-color:#4ade80; }
.profile-toast--error { background:#991b1b; border-color:#f87171; }
.profile-toast button { margin-left:auto; padding:0 .25rem; font-size:1.5rem; line-height:1; }
@keyframes spin { to { transform:rotate(360deg); } }

@media (max-width:900px) {
  .profile-settings__layout { grid-template-columns:1fr; gap:1rem; }
  .profile-picture { width:min(64vw,240px); }
  .profile-fields { width:100%; padding-top:2rem; }
}

@media (max-width:640px) {
  .profile-settings { padding-top:1.25rem; }
  .profile-settings__title { margin-bottom:1.75rem; }
  .profile-picture__edit { width:50px; height:50px; font-size:1.6rem; }
  .profile-fields__grid { grid-template-columns:1fr; row-gap:2.25rem; }
  .profile-fields__footer { padding-top:3rem; }
  .save-button { width:100%; }
}
</style>
