<template>
  <div class="paysolution">
    <NuxtLink to="/webapp/wallet" class="paysolution__back">
      <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
      Payment
    </NuxtLink>

    <div class="paysolution-card">
      <div class="paysolution-row">
        <span class="paysolution-row__label">Reference No.</span>
        <span class="paysolution-row__value">{{ refno }}</span>
      </div>
      <div class="paysolution-row">
        <span class="paysolution-row__label">Product</span>
        <span class="paysolution-row__value">{{ pack?.name }}</span>
      </div>
      <div class="paysolution-row">
        <span class="paysolution-row__label">Coins</span>
        <span class="paysolution-row__value">
          {{ pack?.baseCoins }}<span v-if="pack?.bonusCoins" class="paysolution-row__bonus"> + {{ pack?.bonusCoins }}</span> Coins
        </span>
      </div>
      <div class="paysolution-row paysolution-row--total">
        <span class="paysolution-row__label">Amount</span>
        <span class="paysolution-row__amount">฿{{ pack?.price }} THB</span>
      </div>
    </div>

    <button type="button" class="paysolution-confirm" :disabled="submitting" @click="submitPayment">
      {{ submitting ? 'Redirecting…' : 'Confirm Purchase' }}
    </button>

    <p class="paysolution__disclaimer">
      Coins are added to your PR balance instantly after payment. Purchases are non-refundable.
    </p>

    <form ref="paymentForm" method="post" action="https://payments.paysolutions.asia/payment">
      <input type="hidden" name="customeremail" :value="customerEmail">
      <input type="hidden" name="productdetail" :value="productDetail">
      <input type="hidden" name="refno" :value="refno">
      <input type="hidden" name="merchantid" :value="merchantId">
      <input type="hidden" name="cc" :value="currencyCode">
      <input type="hidden" name="total" :value="pack?.price">
      <input type="hidden" name="lang" :value="lang">
    </form>
  </div>
</template>

<script setup lang="ts">
interface CoinPack {
  code: string
  name: string
  baseCoins: number
  bonusCoins: number
  price: number
  featured?: boolean
}

definePageMeta({ layout: 'main' })

const merchantId = '68347300'
const currencyCode = '00'
const lang = 'EN'

const client = useSupabaseClient()
const route = useRoute()

const packs: CoinPack[] = [
  { code: 'test', name: 'Test Pack', baseCoins: 1, bonusCoins: 0, price: 2 },
  { code: 'adagio', name: 'Adagio Pack', baseCoins: 50, bonusCoins: 0, price: 99 },
  { code: 'allegro', name: 'Allegro Pack', baseCoins: 90, bonusCoins: 10, price: 169 },
  { code: 'presto', name: 'Presto Pack', baseCoins: 170, bonusCoins: 30, price: 269, featured: true }
]

function generateRefno() {
  const timestamp = Date.now().toString().slice(-9)
  const random = Math.floor(100 + Math.random() * 900).toString()
  return `${timestamp}${random}`.slice(-12).padStart(12, '0')
}

const packCode = route.query.pack?.toString() ?? ''
const pack = packs.find(p => p.code === packCode) ?? null

const customerEmail = ref('')
const productDetail = pack ? `coin-pack-${pack.code}` : ''
const refno = generateRefno()
const submitting = ref(false)
const paymentForm = ref<HTMLFormElement | null>(null)

function submitPayment() {
  if (!pack || submitting.value) return
  submitting.value = true
  paymentForm.value?.submit()
}

const { data: authData } = await client.auth.getSession()
if (!authData.session?.user.email) {
  await navigateTo('/webapp/login')
} else if (!pack) {
  await navigateTo('/webapp/wallet')
} else {
  customerEmail.value = authData.session.user.email
}
</script>

<style scoped>
.paysolution { width:100%; max-width:420px; margin:0 auto; padding:1.5rem clamp(.25rem,2vw,1.5rem) 4rem; }
.paysolution__back { display:flex; align-items:center; gap:.5rem; margin-bottom:1.5rem; color:#fff; font-size:1.4rem; font-weight:800; text-decoration:none; }

.paysolution-card { padding:1.4rem 1.5rem; margin-bottom:1.5rem; background:#111214; border:1px solid #27272a; border-radius:1.25rem; }
.paysolution-row { display:flex; align-items:center; justify-content:space-between; padding:.6rem 0; border-bottom:1px solid #27272a; }
.paysolution-row:last-child { border-bottom:0; }
.paysolution-row__label { color:#9ca3af; font-size:.85rem; }
.paysolution-row__value { color:#fff; font-weight:700; }
.paysolution-row__bonus { color:#4ade80; }
.paysolution-row--total { padding-top:.9rem; }
.paysolution-row--total .paysolution-row__label { color:#fff; font-weight:700; }
.paysolution-row__amount { color:#fde047; font-size:1.2rem; font-weight:800; }

.paysolution-confirm { display:block; width:100%; padding:.9rem; color:#000; background:#fde047; border-radius:9999px; font-size:1.05rem; font-weight:800; text-align:center; text-decoration:none; border:0; cursor:pointer; }
.paysolution-confirm:hover { background:#facc15; }
.paysolution-confirm:disabled { opacity:.6; cursor:not-allowed; }
.paysolution__disclaimer { margin-top:1rem; color:#71717a; font-size:.75rem; text-align:center; }
</style>