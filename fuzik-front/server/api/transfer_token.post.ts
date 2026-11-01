import { serverSupabaseUser } from '#supabase/server'
import { randomUUID } from 'node:crypto'
import { createJamDownloadTicket } from '../utils/jamDownloadTicket'

// Reference flow from the earlier backend: master26 has /transfer instead of
// /debit_fz and returns a different transfer ID. Keep the feature flag off
// until the charge contract and duplicate-charge protection are agreed.

interface JamRecord {
  status?: string
  file_location?: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  if (String(config.public.jamDownloadDebitEnabled) !== 'true') {
    throw createError({ statusCode: 503, statusMessage: 'Token debit is not available yet' })
  }

  const claims = await serverSupabaseUser(event)
  const customerEmail = typeof claims?.email === 'string' ? claims.email.trim() : ''
  if (!customerEmail) {
    throw createError({ statusCode: 401, statusMessage: 'Sign in to continue' })
  }

  const debitApiKey = String(config.fzDebitApiKey || '')
  const signingKey = String(config.jamDownloadSigningKey || '')
  if (debitApiKey.length < 32 || signingKey.length < 32) {
    throw createError({ statusCode: 503, statusMessage: 'Token debit is not fully configured' })
  }

  const body = await readBody<{ jamUrl?: unknown }>(event)
  if (typeof body?.jamUrl !== 'string' || !/^[A-Za-z0-9_-]{6,128}$/.test(body.jamUrl)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid Jam URL' })
  }

  const engineBaseUrl = String(config.engineBaseUrl).replace(/\/$/, '')
  const records = await $fetch<JamRecord[]>(`${engineBaseUrl}/jam2_watch/`, {
    query: { j: body.jamUrl }, retry: 0, timeout: 15000
  })
  const jam = Array.isArray(records) ? records[0] : undefined
  if (jam?.status !== 'finished' || typeof jam.file_location !== 'string') {
    throw createError({ statusCode: 404, statusMessage: 'Finished Jam video not found' })
  }
  const mediaUrl = new URL(jam.file_location, 'https://media05.fuzikapp.com/')
  const code = mediaUrl.searchParams.get('code')
  if (mediaUrl.origin !== 'https://media05.fuzikapp.com' || mediaUrl.pathname !== '/stream/jam_stream.php' ||
      mediaUrl.searchParams.size !== 1 || !code || !/^[A-Za-z0-9_-]{6,512}$/.test(code)) {
    throw createError({ statusCode: 502, statusMessage: 'Jam video source is unavailable' })
  }
  const mediaCheck = await fetch(mediaUrl, {
    method: 'HEAD', redirect: 'error',
    headers: { Referer: `https://www.fuzikapp.com/webapp/jam_watch/${body.jamUrl}` }
  })
  if (!mediaCheck.ok || !mediaCheck.headers.get('content-type')?.toLowerCase().startsWith('video/mp4')) {
    throw createError({ statusCode: 502, statusMessage: 'Jam video is not ready for download' })
  }

  // The engine enforces one charge per user and Jam, even if this request is retried.
  const response = await $fetch<{ result?: string, transfer_id?: string }>(
    `${engineBaseUrl}/debit_fz`,
    {
      method: 'POST',
      headers: { 'X-Fuzik-Debit-Key': debitApiKey },
      body: {
        email_account: customerEmail,
        jam_url: body.jamUrl,
        request_id: randomUUID()
      },
      retry: 0,
      timeout: 15000
    }
  )
  if (response?.result !== 'Success' || !response.transfer_id || !/^FZ[A-F0-9]{18}$/.test(response.transfer_id)) {
    throw createError({ statusCode: 502, statusMessage: 'Transfer was not confirmed; check the ledger before retrying' })
  }

  const ticket = createJamDownloadTicket(signingKey, body.jamUrl, customerEmail, response.transfer_id)
  const downloadUrl = `/api/download_jam?${new URLSearchParams({ j: body.jamUrl, ticket })}`
  return { transferId: response.transfer_id, downloadUrl }
})
