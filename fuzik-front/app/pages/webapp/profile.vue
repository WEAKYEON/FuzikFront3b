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

    <h1 class="text-3xl font-bold pb-10 px-2 text-white">Profile Setting</h1>

    <form novalidate @submit.prevent="saveChanges">
      <div class="flex flex-col lg:flex-row justify-start items-start gap-6">
        <div class="w-1/2 sm:w-1/5 mx-auto flex flex-col">
          <div v-if="previewUrl" class="profile-picture-preview">
            <img :src="previewUrl" alt="New profile picture preview">
            <span class="profile-picture-preview__label">Preview</span>
          </div>
          <div v-else-if="hasCurrentPicture" class="profile-picture-preview">
            <img :src="currentPictureUrl" alt="Current profile picture">
          </div>

          <label
            class="drop-zone"
            :class="{ 'drop-zone--active': isDragging }"
            @dragenter.prevent="isDragging = true"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="selectDroppedFile"
          >
            <span>Drop your photo</span>
            <span class="material-symbols-outlined text-5xl" aria-hidden="true">place_item</span>
            <span>or</span>
            <span class="select-file-button">Select File</span>
            <input
              ref="fileInput"
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              class="sr-only"
              @change="selectFile"
            >
          </label>

          <button
            v-if="selectedImage"
            type="button"
            class="secondary-button mt-3"
            @click="discardSelectedImage"
          >
            Cancel new picture
          </button>
          <button
            v-else-if="hasCurrentPicture && !removePicture"
            type="button"
            class="secondary-button mt-3"
            @click="removePicture = true"
          >
            Remove picture
          </button>
          <button
            v-else-if="removePicture"
            type="button"
            class="secondary-button mt-3"
            @click="removePicture = false"
          >
            Keep current picture
          </button>

          <p v-if="imageError" class="field-error text-center mt-2">{{ imageError }}</p>

          <div class="flex flex-row justify-center items-center py-4">
            <div class="relative flex flex-row justify-start items-center text-sm bg-black rounded-full pl-6 pr-4">
              <div class="absolute -left-3 w-8 h-8">
                <img src="https://media04.tetraserver.com/app/rank_performer.png" alt="">
              </div>
              <div class="flex flex-wrap justify-center items-center space-x-2">
                <span class="text-white">Rank:</span>
                <span class="text-yellow-200">Musician</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-4/6 mx-auto flex flex-col px-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
            <ProfileField v-model="form.first_name" label="First Name" placeholder="Your first name" required :error="errors.first_name" />
            <ProfileField v-model="form.last_name" label="Last Name" placeholder="Your last name" required :error="errors.last_name" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
            <ProfileField v-model="form.email" label="Email" placeholder="Your email" readonly />
            <ProfileField v-model="form.tel" label="Phone Number" placeholder="Phone number" :error="errors.tel" />
          </div>

          <div class="pb-4">
            <ProfileField v-model="form.display_name" label="Display Name" placeholder="Your display name" required :error="errors.display_name" />
          </div>
          <div class="pb-4">
            <ProfileField v-model="form.music_genre" label="Music Genre" placeholder="Your music genre" required :error="errors.music_genre" />
          </div>
          <div class="pb-4">
            <ProfileField v-model="form.music_inst" label="Musical Instruments" placeholder="Your musical instruments" required :error="errors.music_inst" />
          </div>

          <div class="flex justify-end pt-4">
            <button
              type="submit"
              class="save-button"
              :disabled="!isDirty || isSaving"
            >
              <span v-if="isSaving" class="save-button__spinner" aria-hidden="true"></span>
              {{ isSaving ? 'Saving…' : 'Save Changes' }}
            </button>
          </div>
        </div>
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
    if (
      form.display_name.trim() !== savedForm.value.display_name &&
      !await isDisplayNameAvailable(form.display_name.trim())
    ) {
      errors.display_name = 'This display name is already in use.'
      showToast('error', errors.display_name)
      return
    }

    let uploadedPicture: string | undefined
    if (selectedImage.value) uploadedPicture = await uploadProfileImage(selectedImage.value)

    const fields: Array<[EditableProfileField, string]> = [
      ['first_name', form.first_name.trim()],
      ['last_name', form.last_name.trim()],
      ['display_name', form.display_name.trim()],
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
.drop-zone { display:flex; flex-direction:column; align-items:center; gap:.35rem; width:100%; padding:1.25rem .75rem; color:#fff; border:4px dashed #facc15; border-radius:1.5rem; cursor:pointer; transition:.2s ease; }
.drop-zone:hover,.drop-zone--active { background:rgb(250 204 21 / 12%); border-color:#fde047; }
.select-file-button,.secondary-button,.save-button { color:#000; background:#fde047; border:2px solid #e5e7eb; border-radius:.5rem; font-weight:700; }
.select-file-button { padding:.5rem 1.5rem; }
.secondary-button { align-self:center; padding:.45rem 1rem; font-size:.875rem; }
.profile-picture-preview { position:relative; width:100%; aspect-ratio:1; margin-bottom:1rem; overflow:hidden; background:#111827; border:2px solid #facc15; border-radius:1.5rem; }
.profile-picture-preview img { width:100%; height:100%; object-fit:cover; }
.profile-picture-preview__label { position:absolute; right:.5rem; bottom:.5rem; padding:.2rem .55rem; color:#000; background:#fde047; border-radius:999px; font-size:.75rem; font-weight:700; }
.save-button { display:flex; min-width:150px; min-height:44px; align-items:center; justify-content:center; gap:.5rem; padding:.65rem 1.5rem; transition:.2s ease; }
.save-button:not(:disabled):hover { background:#facc15; transform:translateY(-1px); }
.save-button:disabled { cursor:not-allowed; opacity:.45; }
.save-button__spinner { width:1rem; height:1rem; border:2px solid rgb(0 0 0 / 25%); border-top-color:#000; border-radius:50%; animation:spin .7s linear infinite; }
.field-error { color:#fca5a5; font-size:.8rem; }
.profile-toast { position:fixed; top:5.5rem; right:1rem; z-index:100; display:flex; max-width:min(420px,calc(100vw - 2rem)); align-items:center; gap:.65rem; padding:.85rem 1rem; color:#fff; border:1px solid; border-radius:.75rem; box-shadow:0 12px 35px rgb(0 0 0 / 45%); }
.profile-toast--success { color:#000; background:#fde047; border-color:#facc15; }
.profile-toast--error { background:#991b1b; border-color:#f87171; }
.profile-toast button { margin-left:auto; padding:0 .25rem; font-size:1.5rem; line-height:1; }
@keyframes spin { to { transform:rotate(360deg); } }
</style>
