export const JAM_DOWNLOAD_FEE = 150
export const JAM_DOWNLOAD_REALM_ID = 'REALM00000002' // FZ token realm
export const JAM_DOWNLOAD_RECIPIENT_EMAIL = 'omiejung@gmail.com' // fixed cash-in-hand account on engine01
// The engine only allows a transfer through when remark is 'Purchase' or 'Withdraw' (see musicapp/views.py:transfer) - any other value is rejected.
export const JAM_DOWNLOAD_REMARK = 'Withdraw'

export interface TransferResult {
  success: boolean
  error?: string
}

interface TransferResponse {
  result: string
  remark?: string
  transfer_id?: string
}

export function useJamDownload() {
  async function transferDownloadFee(downloaderEmail: string): Promise<TransferResult> {
    try {
      const response = await $fetch<TransferResponse>('/api/transfer_token', {
        query: {
          realm_id: JAM_DOWNLOAD_REALM_ID,
          from_email: downloaderEmail,
          to_email: JAM_DOWNLOAD_RECIPIENT_EMAIL,
          amount: JAM_DOWNLOAD_FEE,
          remark: JAM_DOWNLOAD_REMARK
        }
      })

      if (response.result !== 'Success') {
        return {
          success: false,
          error: 'Unable to complete the transfer. Please check your FZ balance and try again.'
        }
      }

      return { success: true }
    } catch {
      return {
        success: false,
        error: 'Unable to reach the token service. Please try again.'
      }
    }
  }

  // TODO (Later): once the engine exposes a signed-link endpoint, call it here
  // and return the real download URL instead of null.
  async function requestDownloadLink(jamUrl: string): Promise<string | null> {
    return null
  }

  return { transferDownloadFee, requestDownloadLink, JAM_DOWNLOAD_FEE }
}
