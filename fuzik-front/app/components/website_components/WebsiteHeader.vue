<template>
  <div class="website-header-shell bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
    <nav id="navbar" class="fixed inset-x-0 top-0 z-50 w-full bg-black py-4">
      <div class="container mx-auto w-full max-w-full px-4 sm:px-6">
        <div class="flex items-center justify-between gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <a href="/" class="basis-0 flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2 lg:col-start-1">
            <img
              src="/images/logo/FuzikLogo.png"
              alt="Fuzik Collaborate Logo"
              class="h-7 w-auto shrink-0 object-contain sm:h-10"
            />
            <span class="min-w-0 truncate text-sm font-bold text-fuzik-light-gray sm:text-2xl"
              >Fuzik Collaborate</span
            >
          </a>

          <div class="hidden lg:col-start-2 lg:flex items-center justify-center gap-8">
            <a
              v-for="link in links[locale]"
              :key="link.href"
              :href="link.href"
              class="nav-link-hover-effect text-lg font-medium"
              >{{ link.label }}</a
            >
          </div>

          <div class="flex shrink-0 items-center gap-2 sm:gap-4 lg:col-start-3 lg:justify-self-end">
            <Menu as="div" class="relative inline-block">
              <MenuButton
                class="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-x-1.5 rounded-md bg-[#111111] p-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-600 sm:h-auto sm:w-auto sm:px-3"
              >
                <img src="/images/icons/language_white.png" class="h-6 w-6" alt="Language" />
                <ChevronDownIcon
                  class="-mr-1 hidden size-5 text-gray-400 sm:inline"
                  aria-hidden="true"
                />
              </MenuButton>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="bg-gray-600 absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-black shadow-lg outline-1 outline-black/5"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        @click.prevent="changeLanguage('en')"
                        :class="[
                          active ? 'bg-[#111111]' : '',
                          !$route.path.endsWith('-th')
                            ? 'text-[#fff600]'
                            : 'text-white hover:text-[#fff600]',
                          'block px-4 py-2 text-sm outline-hidden transition-colors',
                        ]"
                      >
                        English
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        @click.prevent="changeLanguage('th')"
                        :class="[
                          active ? 'bg-[#111111]' : '',
                          $route.path.endsWith('-th')
                            ? 'text-[#fff600]'
                            : 'text-white hover:text-[#fff600]',
                          'block px-4 py-2 text-sm outline-hidden transition-colors',
                        ]"
                      >
                        ภาษาไทย
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <a
              href="/webapp"
              target="_blank"
              class="hidden rounded-full bg-[#fff600] px-6 py-2 font-semi-bold text-black visited:text-[#111111] lg:inline-flex"
            >
              <template v-if="locale === 'en'"
                >Launch<span class="text-[#fff600]">_</span>App</template
              ><span v-else>เริ่มใช้งาน</span>
            </a>

          <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#f8f9fa] hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fff600] lg:hidden"
              :aria-expanded="mobileMenuOpen"
              aria-controls="website-mobile-navigation"
              :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
              @click="toggleMobileMenu"
            >
              <span class="sr-only">{{ mobileMenuOpen ? 'Close menu' : 'Open menu' }}</span>
              <span class="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span class="h-0.5 w-full rounded bg-current"></span>
                <span class="h-0.5 w-full rounded bg-current"></span>
                <span class="h-0.5 w-full rounded bg-current"></span>
              </span>
            </button>
          </div>
        </div>

        <div v-if="mobileMenuOpen" class="navigation-backdrop lg:hidden" @click="closeMobileMenu">
          <aside
            id="website-mobile-navigation"
            class="navigation-panel"
            :class="{ 'navigation-panel--tablet': isTablet }"
            aria-label="Mobile navigation"
            @click.stop
          >
            <div class="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <a href="/" class="flex min-w-0 items-center gap-2" @click="closeMobileMenu">
                <img
                  src="/images/logo/FuzikLogo.png"
                  alt="Fuzik Collaborate Logo"
                  class="h-8 w-auto shrink-0 object-contain"
                />
                <span class="truncate text-lg font-bold text-[#f8f9fa]">Fuzik Collaborate</span>
              </a>
              <button
                type="button"
                class="inline-flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[#f8f9fa] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fff600]"
                :aria-label="locale === 'en' ? 'Close navigation menu' : 'ปิดเมนู'"
                @click="closeMobileMenu"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <nav class="flex flex-col" :aria-label="locale === 'en' ? 'Mobile navigation' : 'เมนูนำทาง'">
            <a
              v-for="link in links[locale]"
              :key="link.href"
              :href="link.href"
              class="nav-link-hover-effect border-b border-white/10 py-4 text-lg font-medium last:border-b-0"
              @click="closeMobileMenu"
              >{{ link.label }}</a
            >
            </nav>
            <div class="mobile-language-options mt-5 border-t border-white/10 pt-4">
              <p class="mb-2 text-sm font-semibold text-gray-400">{{ locale === 'en' ? 'Language' : 'ภาษา' }}</p>
              <div class="flex gap-3">
                <button type="button" class="rounded-md px-3 py-2 text-sm hover:bg-white/10" @click="changeLanguage('en')">English</button>
                <button type="button" class="rounded-md px-3 py-2 text-sm hover:bg-white/10" @click="changeLanguage('th')">ภาษาไทย</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)
const isTablet = ref(false)
let tabletQuery: MediaQueryList | undefined

const updateTabletState = () => {
  isTablet.value = tabletQuery?.matches ?? false
  syncPageScrollLock()
  if (import.meta.client && window.innerWidth >= 1024) closeMobileMenu()
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value ? closeMobileMenu() : (mobileMenuOpen.value = true)
}

const handleMenuKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMobileMenu()
}

const syncPageScrollLock = () => {
  if (!import.meta.client) return
  document.documentElement.classList.toggle(
    'navigation-open',
    mobileMenuOpen.value && !isTablet.value,
  )
}

watch(mobileMenuOpen, (isOpen) => {
  if (!import.meta.client) return
  syncPageScrollLock()
  if (isOpen) window.addEventListener('keydown', handleMenuKeydown)
  else window.removeEventListener('keydown', handleMenuKeydown)
})

onMounted(() => {
  tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
  updateTabletState()
  tabletQuery.addEventListener('change', updateTabletState)
})

onBeforeUnmount(() => {
  tabletQuery?.removeEventListener('change', updateTabletState)
  window.removeEventListener('keydown', handleMenuKeydown)
  document.documentElement.classList.remove('navigation-open')
})

const changeLanguage = (lang: 'en' | 'th') => {
  mobileMenuOpen.value = false
  let currentPath = route.path

  if (currentPath.startsWith('/blog/') || currentPath.startsWith('/blog-th/')) {
    if (lang === 'th') {
      router.push('/blog-th')
    } else {
      router.push('/blog')
    }
    return
  }

  if (currentPath === '/' && lang === 'th') {
    router.push('/index-th')
    return
  }
  if (currentPath === '/index-th' && lang === 'en') {
    router.push('/')
    return
  }

  if (lang === 'th') {
    if (!currentPath.endsWith('-th')) {
      router.push(`${currentPath}-th`)
    }
  } else if (lang === 'en') {
    if (currentPath.endsWith('-th')) {
      const newPath = currentPath.replace(/-th$/, '')
      router.push(newPath)
    }
  }
}

withDefaults(defineProps<{ locale?: 'en' | 'th' }>(), { locale: 'en' })
const links = {
  en: [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/aboutus',
      label: 'About',
    },
    {
      href: '/feature',
      label: 'Features',
    },
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/faq',
      label: 'FAQ',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ],
  th: [
    {
      href: '/index-th',
      label: 'หน้าหลัก',
    },
    {
      href: '/aboutus-th',
      label: 'เกี่ยวกับเรา',
    },
    {
      href: '/feature-th',
      label: 'ฟีเจอร์',
    },
    {
      href: '/pricing-th',
      label: 'ราคา',
    },
    {
      href: '/faq-th',
      label: 'คำถามที่พบบ่อย',
    },
    {
      href: '/blog-th',
      label: 'บล็อก',
    },
    {
      href: '/contact-th',
      label: 'ติดต่อเรา',
    },
  ],
}
</script>
<style scoped src="~/assets/css/typography.css"></style>
<style scoped src="~/assets/css/links.css"></style>
<style>
.website-header-shell {
  position: relative;
  z-index: 50;
  height: 72px;
}

#navbar {
  height: auto;
}

html.navigation-open,
html.navigation-open body {
  overflow: hidden;
}

.navigation-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  background: rgb(0 0 0 / 35%);
}

.navigation-panel {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: max(1.25rem, env(safe-area-inset-top)) 1.5rem max(1.5rem, env(safe-area-inset-bottom));
  background: #080808;
  color: #e2e8f0;
  animation: navigation-panel-in 180ms ease-out;
}

.navigation-panel--tablet {
  width: min(22rem, 82vw);
  box-shadow: -12px 0 32px rgb(0 0 0 / 35%);
}

@keyframes navigation-panel-in {
  from { transform: translateX(1rem); opacity: .7; }
  to { transform: translateX(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .navigation-panel { animation: none; }
}
</style>