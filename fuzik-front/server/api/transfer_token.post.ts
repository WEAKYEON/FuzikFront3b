import { serverSupabaseUser } from '#supabase/server'
import { createJamDownloadTicket } from '../utils/jamDownloadTicket'

const DOWNLOAD_FEE = 150
const ACTIVITIES_ACCOUNT_EMAIL = 'ohm@tetrasolution.com'
const FZ_REALM_ID = 'REALM00000002'

// Per the engine's accounting spec, downloads are charged via the public /transfer
// endpoint (remark=Purchase), not /debit_fz. Known engine-side gaps (flagged to
// Ohm/Tanat separately, not fixable from here): the Purchase/Withdraw branch of
// _transfer checks the recipient's (Activities account) balance instead of the
// customer's, and /transfer has no duplicate-charge protection like /debit_fz did.

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

  const signingKey = String(config.jamDownloadSigningKey || '')
  if (signingKey.length < 32) {
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

  const response = await $fetch<{ result?: string, transfer_id?: string }>(`${engineBaseUrl}/transfer`, {
    query: {
      to_email: ACTIVITIES_ACCOUNT_EMAIL,
      from_email: customerEmail,
      amount: DOWNLOAD_FEE,
      remark: 'Purchase',
      realm_id: FZ_REALM_ID,
      void: 0
    },
    retry: 0,
    timeout: 15000
  })
  if (response?.result !== 'Success' || !response.transfer_id || !/^NLB\d{8}$/.test(response.transfer_id)) {
    throw createError({ statusCode: 502, statusMessage: 'Transfer was not confirmed; check the ledger before retrying' })
  }

  const ticket = createJamDownloadTicket(signingKey, body.jamUrl, customerEmail, response.transfer_id)
  const downloadUrl = `/api/download_jam?${new URLSearchParams({ j: body.jamUrl, ticket })}`
  return { transferId: response.transfer_id, downloadUrl }
})
