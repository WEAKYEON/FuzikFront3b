export type EditableProfileField =
  | 'first_name'
  | 'last_name'
  | 'display_name'
  | 'tel'
  | 'music_genre'
  | 'music_inst'
  | 'profile_pic'

export async function uploadProfileImage(file: File): Promise<string> {
  const body = new FormData()
  body.append('file', file)

  const response = await fetch('https://media05.fuzikapp.com/ajax.php', {
    method: 'POST',
    body
  })
  const path = (await response.text()).trim()

  if (!response.ok || !path || path.toLowerCase().startsWith('error')) {
    throw new Error(path || 'The profile image could not be uploaded.')
  }

  return path
}

export async function updateProfileField(
  email: string,
  field: EditableProfileField,
  value: string
) {
  await $fetch('/api/modify_musician2', {
    query: { email, field, new_value: value }
  })
}

export async function isDisplayNameAvailable(displayName: string): Promise<boolean> {
  const result = await $fetch<Array<{ result?: string }>>('/api/musician_check_display_name', {
    query: { display_name: displayName }
  })
  const status = result?.[0]?.result
  return status !== 'Found' && status !== 'Not allowed!!'
}
