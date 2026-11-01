export const JAM_DOWNLOAD_FEE = 150

export function useJamDownload() {
  async function transferDownloadFee(jamUrl: string): Promise<{ transferId: string, downloadUrl: string }> {
    return await $fetch<{ transferId: string, downloadUrl: string }>('/api/transfer_token', {
      method: 'POST',
      body: { jamUrl },
      retry: 0
    })
  }

  // A signed download link will be added when the media service supports it.
  async function requestDownloadLink(_jamUrl: string): Promise<string | null> {
    return null
  }

  return { transferDownloadFee, requestDownloadLink, JAM_DOWNLOAD_FEE }
}
