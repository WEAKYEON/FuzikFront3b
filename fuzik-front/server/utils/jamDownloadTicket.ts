import { createHmac, timingSafeEqual } from 'node:crypto'

interface DownloadTicket {
  jamId: string
  email: string
  transferId: string
  expiresAt: number
}

function signature(secret: string, payload: string) {
  return createHmac('sha256', secret).update(payload).digest('hex')
}

export function createJamDownloadTicket(secret: string, jamId: string, email: string, transferId: string) {
  if (secret.length < 32) throw new Error('Jam download signing key is not configured')
  const ticket: DownloadTicket = {
    jamId,
    email: email.trim().toLowerCase(),
    transferId,
    expiresAt: Date.now() + 60 * 60 * 1000
  }
  const payload = Buffer.from(JSON.stringify(ticket)).toString('base64url')
  return `${payload}.${signature(secret, payload)}`
}

export function isValidJamDownloadTicket(secret: string, token: unknown, jamId: string, email: string) {
  if (secret.length < 32 || typeof token !== 'string' || token.length > 2048) return false
  const parts = token.split('.')
  if (parts.length !== 2 || !/^[A-Za-z0-9_-]+$/.test(parts[0]) || !/^[a-f0-9]{64}$/.test(parts[1])) return false
  const actual = Buffer.from(parts[1], 'hex')
  const expected = Buffer.from(signature(secret, parts[0]), 'hex')
  if (!timingSafeEqual(actual, expected)) return false
  try {
    const ticket = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8')) as DownloadTicket
    return ticket.jamId === jamId &&
      ticket.email === email.trim().toLowerCase() &&
      /^FZ[A-F0-9]{18}$/.test(ticket.transferId) &&
      Number.isFinite(ticket.expiresAt) &&
      ticket.expiresAt > Date.now()
  } catch {
    return false
  }
}
