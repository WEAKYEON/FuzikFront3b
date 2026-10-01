<template>
  <div class="wallet">
    <h1 class="wallet__title">Wallet</h1>
    <p class="wallet__subtitle">Manage your coins, see ways to earn, and check your activity history.</p>

    <div class="wallet-summary">
      <div class="wallet-card">
        <div class="wallet-card__top">
          <span class="wallet-pill wallet-pill--free">FZ</span>
          <span class="wallet-card__label">Free coins</span>
        </div>
        <div class="wallet-card__value">{{ freeBalanceDisplay }}</div>
        <div class="wallet-card__hint">Next coin in {{ nextFreeCoinDisplay }}</div>
      </div>

      <div class="wallet-card">
        <div class="wallet-card__top">
          <span class="wallet-pill wallet-pill--paid">PR</span>
          <span class="wallet-card__label">Paid coins</span>
        </div>
        <div class="wallet-card__value">{{ paidBalanceDisplay }}</div>
        <a href="#buy-coins" class="wallet-card__link" @click.prevent="scrollToPacks">See packs below ↓</a>
      </div>
    </div>

    <h2 id="buy-coins" ref="packsSection" class="wallet__section-title">Buy coins</h2>

    <div class="wallet-packs">
      <div
        v-for="pack in packs"
        :key="pack.code"
        class="wallet-pack"
        :class="{ 'wallet-pack--featured': pack.featured }"
      >
        <span v-if="pack.featured" class="wallet-pack__badge">Best value</span>
        <p class="wallet-pack__name">{{ pack.name }}</p>
        <p class="wallet-pack__coins">
          {{ pack.baseCoins }}<span v-if="pack.bonusCoins" class="wallet-pack__bonus"> + {{ pack.bonusCoins }}</span> Coins
        </p>
        <p class="wallet-pack__price">
          <span class="wallet-pack__price-amount">฿{{ pack.price }}</span>
          <span class="wallet-pack__price-currency">THB</span>
        </p>
        <NuxtLink :to="{ path: '/webapp/wallet/paysolution', query: { pack: pack.code } }" class="wallet-pack__button">
          Buy {{ pack.name.split(' ')[0] }}
        </NuxtLink>
      </div>
    </div>
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

const client = useSupabaseClient()
const packsSection = ref<HTMLElement | null>(null)

const email = ref('')
const freeBalance = ref<number | null>(null)
const freeCap = ref<number | null>(null)
const nextFreeCoinSeconds = ref<number | null>(null)
const paidBalance = ref<number | null>(null)

const packs = ref<CoinPack[]>([
  { code: 'test', name: 'Test Pack', baseCoins: 1, bonusCoins: 0, price: 2 },
  { code: 'adagio', name: 'Adagio Pack', baseCoins: 50, bonusCoins: 0, price: 99 },
  { code: 'allegro', name: 'Allegro Pack', baseCoins: 90, bonusCoins: 10, price: 169 },
  { code: 'presto', name: 'Presto Pack', baseCoins: 170, bonusCoins: 30, price: 269, featured: true }
])

const freeBalanceDisplay = computed(() => {
  if (freeBalance.value === null || freeCap.value === null) return '—'
  return `${freeBalance.value} / ${freeCap.value}`
})

const paidBalanceDisplay = computed(() => paidBalance.value === null ? '—' : `${paidBalance.value}`)

const nextFreeCoinDisplay = computed(() => {
  if (nextFreeCoinSeconds.value === null) return '—'
  const minutes = Math.floor(nextFreeCoinSeconds.value / 60)
  const seconds = nextFreeCoinSeconds.value % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})

async function loadWalletSummary() {
  if (!email.value) return
  try {
    const [freeResult, paidResult] = await Promise.all([
      $fetch<{ balance: number | string }>('/api/get_token', {
        query: { realm_id: 'REALM00000001', user_email: email.value }
      }),
      $fetch<{ balance: number | string }>('/api/get_token', {
        query: { realm_id: 'REALM00000002', user_email: email.value }
      })
    ])

    freeBalance.value = Number(freeResult.balance)
    freeCap.value = 200
    paidBalance.value = Number(paidResult.balance)
  } catch {
  }
}

async function loadPacks() {
  try {
    const result = await $fetch<CoinPack[]>('/api/coin_packages')
    if (Array.isArray(result) && result.length) packs.value = result
  } catch {
  }
}

function scrollToPacks() {
  packsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

let countdownTimer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  countdownTimer = setInterval(() => {
    if (nextFreeCoinSeconds.value !== null && nextFreeCoinSeconds.value > 0) {
      nextFreeCoinSeconds.value -= 1
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (countdownTimer) clearInterval(countdownTimer)
})

const { data: authData } = await client.auth.getSession()
if (!authData.session?.user.email) {
  await navigateTo('/webapp/login')
} else {
  email.value = authData.session.user.email
  await Promise.all([loadWalletSummary(), loadPacks()])
}
</script>

<style scoped>
.wallet { width:100%; max-width:960px; margin:0 auto; padding:1.5rem clamp(.25rem,2vw,1.5rem) 4rem; }
.wallet__title { margin:0 0 .35rem; color:#fde047; font-size:clamp(1.9rem,4vw,2.5rem); font-weight:800; }
.wallet__subtitle { margin:0 0 1.75rem; color:#9ca3af; }

.wallet-summary { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1rem; margin-bottom:2rem; }
.wallet-card { padding:1.25rem 1.5rem; background:#111214; border-radius:1.25rem; }
.wallet-card__top { display:flex; align-items:center; justify-content:space-between; margin-bottom:.75rem; }
.wallet-pill { padding:.15rem .6rem; border-radius:9999px; font-size:.7rem; font-weight:700; }
.wallet-pill--free { color:#fde047; background:rgb(133 77 14 / 45%); }
.wallet-pill--paid { color:#c7d2fe; background:rgb(55 48 163 / 55%); }
.wallet-card__label { color:#9ca3af; font-size:.8rem; }
.wallet-card__value { color:#fff; font-size:1.9rem; font-weight:800; }
.wallet-card__hint { margin-top:.3rem; color:#fde047; font-size:.8rem; }
.wallet-card__link { display:inline-block; margin-top:.3rem; color:#60a5fa; font-size:.8rem; text-decoration:none; }
.wallet-card__link:hover { text-decoration:underline; }

.wallet__section-title { margin:0 0 1rem; color:#fff; font-size:1.15rem; font-weight:700; }
.wallet-packs { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1rem; }
.wallet-pack { position:relative; display:flex; flex-direction:column; align-items:center; gap:.3rem; padding:1.75rem 1.25rem; text-align:center; background:#111214; border:1px solid transparent; border-radius:1.25rem; }
.wallet-pack--featured { border-color:#fde047; }
.wallet-pack__badge { position:absolute; top:-.7rem; padding:.2rem .65rem; color:#000; background:#fde047; border-radius:9999px; font-size:.7rem; font-weight:700; }
.wallet-pack__name { margin:0; color:#fde047; font-weight:700; }
.wallet-pack__coins { margin:0; color:#fff; font-size:1.15rem; font-weight:800; }
.wallet-pack__bonus { color:#4ade80; }
.wallet-pack__price { margin:0 0 .75rem; }
.wallet-pack__price-amount { color:#fde047; font-weight:800; }
.wallet-pack__price-currency { color:#9ca3af; font-size:.8rem; }
.wallet-pack__button { display:inline-block; min-width:130px; padding:.55rem 1.25rem; color:#000; background:#fde047; border-radius:9999px; font-weight:700; text-align:center; text-decoration:none; }
.wallet-pack__button:hover { background:#facc15; }

@media (max-width:900px) {
  .wallet-packs { grid-template-columns:repeat(2,minmax(0,1fr)); }
}

@media (max-width:639px) {
  .wallet-summary,
  .wallet-packs { grid-template-columns:1fr; }
}
</style>