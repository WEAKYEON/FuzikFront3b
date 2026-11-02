<template>
  <section class="jam-download">
    <button type="button" class="jam-download__button" :disabled="busy || !!paidDownloadUrl" @click="openDialog">
      Download Jam video
    </button>
    <a v-if="paidDownloadUrl" class="jam-download__button jam-download__retry" :href="paidDownloadUrl">Download again</a>

    <p v-if="notice" class="jam-download__notice" role="status">{{ notice }}</p>

    <dialog ref="dialog" class="jam-download__dialog" aria-labelledby="jam-download-title">
      <h2 id="jam-download-title">Download Jam video</h2>
      <p>Do you want to download this music jamming video clip?</p>
      <p v-if="debitEnabled" class="jam-download__cost">Cost: 150 FZ Token</p>
      <p class="jam-download__disclaimer" v-if="!debitEnabled"></p>
      <p class="jam-download__disclaimer" v-else>The video download starts after the 150 FZ transfer is confirmed.</p>
      <div class="jam-download__actions">
        <button type="button" class="jam-download__cancel" @click="closeDialog">Cancel</button>
        <button type="button" class="jam-download__confirm" :disabled="busy" @click="confirmDownload">
          {{ busy ? 'Processing…' : debitEnabled ? 'Confirm 150 FZ' : 'Confirm download' }}
        </button>
      </div>
    </dialog>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ email?: string, jamUrl?: string }>()
const dialog = ref<HTMLDialogElement | null>(null)
const notice = ref('')
const busy = ref(false)
const paidDownloadUrl = ref('')
const debitEnabled = String(useRuntimeConfig().public.jamDownloadDebitEnabled) === 'true'
const { transferDownloadFee } = useJamDownload()

function openDialog() {
  notice.value = ''
  if (dialog.value && !dialog.value.open) dialog.value.showModal()
}

function closeDialog() {
  dialog.value?.close()
}

function startDownload(downloadUrl: string) {
  const link = document.createElement('a')
  link.href = downloadUrl
  document.body.appendChild(link)
  link.click()
  link.remove()
}

async function confirmDownload() {
  if (busy.value) return
  if (!debitEnabled) {
    if (!props.email || props.email === 'unregistered' || !props.jamUrl) {
      notice.value = 'Please sign in before downloading.'
      closeDialog()
      return
    }
    closeDialog()
    startDownload(`/api/download_jam?j=${encodeURIComponent(props.jamUrl)}`)
    return
  }
  if (!props.email || props.email === 'unregistered' || !props.jamUrl) {
    notice.value = 'Please sign in before downloading.'
    closeDialog()
    return
  }

  busy.value = true
  try {
    const receipt = await transferDownloadFee(props.jamUrl)
    paidDownloadUrl.value = receipt.downloadUrl
    startDownload(receipt.downloadUrl)
    window.dispatchEvent(new Event('fuzik:wallet-changed'))
  } catch {
    notice.value = 'Transfer status is unclear. Check your wallet before trying again.'
  } finally {
    busy.value = false
    closeDialog()
  }
}
</script>

<style scoped>
.jam-download {
  flex-shrink: 0;
}

.jam-download__button {
  background: #e5e7eb;
  border: 0;
  border-radius: 12px;
  color: #d97706;
  cursor: pointer;
  padding: 8px 16px;
}

.jam-download__retry {
  display: inline-block;
  margin-left: 8px;
  text-decoration: none;
}

.jam-download__confirm {
  background: #facc15;
  border: 0;
  border-radius: 10px;
  color: #111;
  cursor: pointer;
  font-weight: 700;
  padding: 10px 16px;
}

.jam-download__button:disabled,
.jam-download__confirm:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.jam-download__dialog {
  position: fixed;
  inset: 0;
  margin: auto;
  background: #374151;
  border: 1px solid #facc15;
  border-radius: 14px;
  color: #fff;
  max-width: min(420px, calc(100vw - 32px));
  padding: 24px;
}

.jam-download__dialog::backdrop {
  background: rgb(0 0 0 / 65%);
}

.jam-download__dialog h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.jam-download__dialog p {
  margin-bottom: 12px;
}

.jam-download__cost {
  color: #facc15;
  font-weight: 700;
}

.jam-download__disclaimer,
.jam-download__notice {
  color: #d1d5db;
  font-size: 14px;
}

.jam-download__notice {
  margin-top: 8px;
  max-width: 220px;
}

.jam-download__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 20px;
}

.jam-download__cancel {
  background: #1f2937;
  border: 1px solid #6b7280;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  padding: 10px 16px;
}
</style>
