export const JAM_DOWNLOAD_FEE = 150

export interface TransferResult {
  success: boolean
  alreadyCharged?: boolean
  balance?: string
  error?: string
}

interface DebitFzResponse {
  result: string
  error?: string
  transfer_id?: string
  amount?: string
  balance?: string
  already_charged?: boolean
}

export function useJamDownload() {
  const { public: { jamDownloadDebitEnabled } } = useRuntimeConfig()

  async function transferDownloadFee(downloaderEmail: string, jamUrl: string): Promise<TransferResult> {
    try {
      const response = await $fetch<DebitFzResponse>('/api/debit_fz', {
        method: 'POST',
        body: { email_account: downloaderEmail, jam_url: jamUrl }
      })

      if (response.result !== 'Success') {
        return {
          success: false,
          error: response.error || 'Unable to complete the charge. Please check your FZ balance and try again.'
        }
      }

      return { success: true, alreadyCharged: response.already_charged, balance: response.balance }
    } catch (err: any) {
      return {
        success: false,
        error: err?.data?.error || 'Unable to reach the token service. Please try again.'
      }
    }
  }

  // TODO (Later): once the engine exposes a signed-link endpoint, call it here
  // and return the real download URL instead of null.
  async function requestDownloadLink(jamUrl: string): Promise<string | null> {
    return null
  }

  return { transferDownloadFee, requestDownloadLink, isEnabled: jamDownloadDebitEnabled, JAM_DOWNLOAD_FEE }
}
