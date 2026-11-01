import { serverSupabaseUser } from '#supabase/server'
import { isValidJamDownloadTicket } from '../utils/jamDownloadTicket'

interface JamDownloadRecord {
  file_location?: string
  status?: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const claims = await serverSupabaseUser(event)
  if (!claims?.email) {
    throw createError({ statusCode: 401, statusMessage: 'Sign in to download a Jam' })
  }

  const jamId = getQuery(event).j
  if (typeof jamId !== 'string' || !/^[A-Za-z0-9_-]{6,128}$/.test(jamId)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid Jam ID' })
  }
  if (String(config.public.jamDownloadDebitEnabled) === 'true' &&
      !isValidJamDownloadTicket(String(config.jamDownloadSigningKey || ''), getQuery(event).ticket, jamId, claims.email)) {
    throw createError({ statusCode: 403, statusMessage: 'A confirmed FZ transfer is required to download this Jam' })
  }

  const engineBaseUrl = String(config.engineBaseUrl).replace(/\/$/, '')
  const records = await $fetch<JamDownloadRecord[]>(
    `${engineBaseUrl}/jam2_watch/?j=${encodeURIComponent(jamId)}`,
    { retry: 0, timeout: 15000 }
  )
  const jam = Array.isArray(records) ? records[0] : undefined
  if (jam?.status !== 'finished' || typeof jam.file_location !== 'string') {
    throw createError({ statusCode: 404, statusMessage: 'Finished Jam video not found' })
  }

  const mediaUrl = new URL(jam.file_location, 'https://media05.fuzikapp.com/')
  const code = mediaUrl.searchParams.get('code')
  if (mediaUrl.origin !== 'https://media05.fuzikapp.com' ||
      mediaUrl.pathname !== '/stream/jam_stream.php' ||
      mediaUrl.searchParams.size !== 1 ||
      !code || !/^[A-Za-z0-9_-]{6,512}$/.test(code)) {
    throw createError({ statusCode: 502, statusMessage: 'Jam video source is unavailable' })
  }

  const video = await fetch(mediaUrl, {
    redirect: 'error',
    headers: { Referer: `https://www.fuzikapp.com/webapp/jam_watch/${jamId}` }
  })
  if (!video.ok || !video.body || !video.headers.get('content-type')?.toLowerCase().startsWith('video/mp4')) {
    throw createError({ statusCode: 502, statusMessage: 'Jam video could not be downloaded' })
  }

  const headers = new Headers({
    'Content-Type': 'video/mp4',
    'Content-Disposition': `attachment; filename="fuzik-jam-${jamId}.mp4"`,
    'Cache-Control': 'private, no-store',
    'X-Content-Type-Options': 'nosniff'
  })
  const contentLength = video.headers.get('content-length')
  if (contentLength && /^\d+$/.test(contentLength)) {
    headers.set('Content-Length', contentLength)
  }
  return new Response(video.body, { status: 200, headers })
})
