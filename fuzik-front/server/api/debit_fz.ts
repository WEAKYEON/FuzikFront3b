import { randomUUID } from 'node:crypto'

export default defineEventHandler(async (event) => {
    if (getMethod(event) !== 'POST') {
        throw createError({ statusCode: 405, statusMessage: 'POST required' })
    }

    const body = await readBody(event)
    const email_account = body?.email_account
    const jam_url = body?.jam_url

    if (typeof email_account !== 'string' || typeof jam_url !== 'string') {
        throw createError({ statusCode: 400, statusMessage: 'Missing email_account or jam_url.' })
    }

    const config = useRuntimeConfig(event)

    if (!config.fzDebitApiKey) {
        throw createError({ statusCode: 503, statusMessage: 'FZ debit is not configured.' })
    }

    try {
        return await $fetch(config.engineBaseUrl + '/debit_fz', {
            method: 'POST',
            headers: { 'X-Fuzik-Debit-Key': config.fzDebitApiKey },
            body: { email_account, jam_url, request_id: randomUUID() }
        })
    } catch (error: any) {
        return {
            result: 'Failure',
            error: error?.data?.error || error?.statusMessage || 'Unable to reach the token service.'
        }
    }
})
