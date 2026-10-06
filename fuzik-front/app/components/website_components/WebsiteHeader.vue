<template>
  <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
    <nav id="navbar" class="w-full py-4 bg-black z-50">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center space-x-2">
            <img
              src="/images/logo/FuzikLogo.png"
              alt="Fuzik Collaborate Logo"
              class="h-10 w-auto"
            />
            <span class="text-2xl font-bold text-fuzik-light-gray"
              >Fuzik Collaborate</span
            >
          </a>

          <div class="hidden md:flex items-center space-x-8">
            <a
              v-for="link in links[locale]"
              :key="link.href"
              :href="link.href"
              class="nav-link-hover-effect text-lg font-medium"
              >{{ link.label }}</a
            >
          </div>

          <div class="flex items-center space-x-4">
            <Menu as="div" class="relative inline-block">
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#111111] px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-600"
              >
                <img src="/images/icons/language_white.png" class="w-6 h-6" />
                <ChevronDownIcon
                  class="-mr-1 size-5 text-gray-400"
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
              class="bg-[#fff600] text-black visited:text-[#111111] font-semi-bold rounded-full px-6 py-2"
            >
              <template v-if="locale === 'en'"
                >Launch<span class="text-[#fff600]">_</span>App</template
              ><span v-else>เริ่มใช้งาน</span>
            </a>
          </div>
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

const changeLanguage = (lang: 'en' | 'th') => {
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
