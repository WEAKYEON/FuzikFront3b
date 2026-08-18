<template>
    <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
        <nav id="navbar" class="w-full py-4 bg-black z-50">
            <div class="container mx-auto px-6">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center space-x-2">
                        <img src="/images/logo/FuzikLogo.png" alt="Fuzik Collaborate Logo" class="h-10 w-auto">
                        <span class="text-2xl font-bold text-fuzik-light-gray">Fuzik Collaborate</span>
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/index-th" class="nav-link-hover-effect text-lg font-medium">หน้าหลัก</a>
                        <a href="/aboutus-th" class="nav-link-hover-effect text-lg font-medium">เกี่ยวกับเรา</a>
                        <a href="/feature-th" class="nav-link-hover-effect text-lg font-medium">ฟีเจอร์</a>
                        <a href="/pricing-th" class="nav-link-hover-effect text-lg font-medium">ราคา</a>
                        <a href="/faq-th" class="nav-link-hover-effect text-lg font-medium">คำถามที่พบบ่อย</a>
                        <a href="/blog-th" class="nav-link-hover-effect text-lg font-medium">บล็อก</a>
                        <a href="/contact-th" class="nav-link-hover-effect text-lg font-medium">ติดต่อเรา</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">                       
                        <Menu as="div" class="relative inline-block">
                            <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#111111] px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-600">
                                <img src="/images/icons/language_white.png" class="w-6 h-6" >
                                <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="bg-gray-600 absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-black shadow-lg outline-1 outline-black/5">
                                <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" 
                                    @click.prevent="changeLanguage('en')" 
                                    :class="[
                                        active ? 'bg-[#111111]' : '', 
                                        !$route.path.endsWith('-th') ? 'text-[#fff600]' : 'text-white hover:text-[#fff600]', 
                                        'block px-4 py-2 text-sm outline-hidden transition-colors'
                                    ]">
                                    English
                                    </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" 
                                    @click.prevent="changeLanguage('th')" 
                                    :class="[
                                        active ? 'bg-[#111111]' : '', 
                                        $route.path.endsWith('-th') ? 'text-[#fff600]' : 'text-white hover:text-[#fff600]', 
                                        'block px-4 py-2 text-sm outline-hidden transition-colors'
                                    ]">
                                    ภาษาไทย
                                    </a>
                                </MenuItem>
                                </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                    

                        <a href="/webapp" target="_blank" class="bg-[#fff600] text-black visited:text-[#111111] font-semi-bold rounded-full px-6 py-2">
                            <span>เริ่มใช้งาน</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <slot />  
    </div>
    <BackToTop />
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

    const items = [
    [{
        label: 'aaa',
        disabled: true

    },
    {
        label: 'bbbb',
        disabled: true
    },
    {
        label: 'Dashboard',
        icon: 'i-heroicons-home-modern-20-solid',
        shortcuts: ['D'],
        to: '/'
    }], 
    [{
        label: 'Profile',
        icon: 'i-heroicons-clipboard-document-list-solid',
        shortcuts: ['P'],
        to: 'profile'

    }, 
    {
        label: 'Change password',
        icon: 'i-heroicons-key-20-solid',
        to: 'check_recent_login'
    }], 
    [{
        label: 'Inventory',
        icon: 'i-heroicons-musical-note-solid',
        shortcuts: ['I'],
        to: 'inventory'
    }],
    [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-right-start-on-rectangle-20-solid',
        to: 'logout'
    }]
    ]

</script>

<style scoped>

    /* Cannot use var()   */
    :root {
        --fuzik-yellow: #FFF600;
        --fuzik-dark: #1a1a1a;
        --fuzik-gray: #2a2a2a;
        --fuzik-medium-gray: #2a2a2a;
        --fuzik-light-gray: #f8f9fa;
        --fuzik-black: #111111;
        --text-default-gray: #e2e8f0; /* Default text color for body, links */
    }
    
    /* Apply Inter font globally and enable smoother font rendering */
    * {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
 /* --- Hover Underline and Color for Nav/Footer Links --- */
    .nav-link-hover-effect {
        position: relative;
        display: inline-block;
        text-decoration: none;
        transition: color 0.3s ease-out;
        color: #e2e8f0;; /* Default text color for links */
    }

    .nav-link-hover-effect::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #FFF600;
        transform-origin: bottom center;
        transition: transform 0.3s ease-out;
    }

    .nav-link-hover-effect:hover {
        color: #FFF600; /* Change color on hover */
    }

    .nav-link-hover-effect:hover::after {
        transform: scaleX(1); /* Expand on hover */
    }

    /* Active link state for current page */
    .nav-link-active {
        color: #FFF600;
        font-weight: 600;
    }
    
    .nav-link-active::after {
        transform: scaleX(1);
    }



</style>