export interface CurrentMusician {
  email: string
  first_name: string
  last_name: string
  display_name: string
  tel: string
  music_genre: string
  music_inst: string
  profile_pic: string
}

export const DEFAULT_PROFILE_IMAGE = 'https://media05.fuzikapp.com/app/music_staff.png'
export const PROFILE_IMAGE_BASE_URL = 'https://media05.fuzikapp.com/'

export function useCurrentUser() {
  const musician = useState<CurrentMusician | null>('current-musician', () => null)

  const profileImage = computed(() => {
    const picture = musician.value?.profile_pic
    if (!picture || picture === 'None' || picture === 'stream/image_stream.php?code=U537BBBB') {
      return DEFAULT_PROFILE_IMAGE
    }

    return `${PROFILE_IMAGE_BASE_URL}${picture}`
  })

  async function refresh(email: string) {
    const result = await $fetch<CurrentMusician[]>('/api/musician2_detail', {
      query: { email }
    })

    if (!Array.isArray(result) || !result[0]) {
      throw new Error('Unable to load the latest profile information.')
    }

    musician.value = result[0]
    return musician.value
  }

  return { musician, profileImage, refresh }
}
