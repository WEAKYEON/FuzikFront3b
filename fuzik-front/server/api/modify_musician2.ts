const editableFields = new Set([
  'first_name', 'last_name', 'display_name', 'tel', 'music_genre', 'music_inst', 'profile_pic'
])

export default defineEventHandler(async (event) => {
  const { email, field, new_value: newValue } = getQuery(event)

  if (typeof email !== 'string' || typeof field !== 'string' || typeof newValue !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Missing profile update information.' })
  }
  if (!editableFields.has(field)) {
    throw createError({ statusCode: 400, statusMessage: 'This profile field cannot be updated.' })
  }

  try {
    return await $fetch(useRuntimeConfig(event).engineBaseUrl + '/modify_musician2', {
      query: { email, field, new_value: newValue }
    })
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 502,
      statusMessage: error?.data?.message || error?.statusMessage || 'The profile service could not save your changes.'
    })
  }
})
