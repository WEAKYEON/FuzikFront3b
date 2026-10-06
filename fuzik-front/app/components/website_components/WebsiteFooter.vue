<script setup lang="ts">
import {
  websiteContent,
  type WebsiteLocale,
  type FooterColumn,
} from './content'
const props = withDefaults(
  defineProps<{
    locale?: WebsiteLocale
    contained?: boolean
    headingClass?: string
    cookieTitleClass?: string
    homeHref?: string
    columns?: readonly FooterColumn[]
    socialCircles?: boolean
    optionalCookies?: boolean
  }>(),
  {
    locale: 'en',
    contained: true,
    headingClass: 'text-[#fff600]',
    cookieTitleClass: 'text-[#f8f9fa]',
    homeHref: '/',
    socialCircles: true,
    optionalCookies: true,
  },
)
const copy = computed(() => websiteContent[props.locale].footer)
</script>

<template>
  <div class="bg-black py-16" :class="{ 'social-circles': socialCircles }">
    <div :class="[contained ? 'container' : '', 'mx-auto px-6']">
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <a :href="homeHref" class="flex items-center space-x-2 mb-4">
            <img
              src="/images/logo/FuzikLogo.png"
              alt="Fuzik Collaborate Logo"
              class="h-10 w-auto"
            />
            <span class="text-2xl font-bold text-[#f8f9fa]"
              >Fuzik Collaborate</span
            >
          </a>
          <p class="text-gray-400 text-sm mb-6">{{ copy.description }}</p>
          <div class="flex space-x-4">
            <a
              href="https://discord.gg/US2hz9FvsV"
              target="_blank"
              class="footer-social-icon"
            >
              <img
                src="/images/icons/Discord-Symbol-White.png"
                class="w-12 px-2 py-4"
              />
            </a>
            <a
              href="https://www.facebook.com/fuzikcollaboration"
              target="_blank"
              class="footer-social-icon"
            >
              <img
                src="/images/icons/Facebook_Logo_Primary.png"
                class="w-12 px-2 py-4"
              />
            </a>
            <a
              href="https://www.instagram.com/fuzikmusiccollaboration/?fbclid=IwY2xjawLQ4BlleHRuA2FlbQIxMQBicmlkETFFSWFvdmFUWHBoWDZKSUUzAR4gMnSxq6J0Et494YOLIXkFBcFRXuzNzUzUA9IOjXjgx35lKgKVSUWqPgfW3ALQ_aem_sQYkD7FbPk-RJEMRy7VyWQ"
              target="_blank"
              class="footer-social-icon"
            >
              <img
                src="/images/icons/Instagram_icon.png"
                class="w-12 px-2 py-4"
              />
            </a>
            <a
              href="https://www.youtube.com/@fuzikapplication"
              target="_blank"
              class="footer-social-icon"
            >
              <img
                src="/images/icons/yt_icon_red_digital.png"
                class="w-20 px-2 py-2"
              />
            </a>
          </div>
        </div>

        <div v-for="column in columns ?? copy.columns" :key="column.title">
          <h4 class="font-semibold text-lg mb-5" :class="headingClass">
            {{ column.title }}
          </h4>
          <ul class="space-y-3 text-gray-400">
            <li v-for="link in column.links" :key="link.label">
              <a
                :href="link.href"
                :target="'target' in link ? link.target : undefined"
                class="nav-link-hover-effect"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-[#aaaaaa] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
      >
        <p>{{ copy.copyright }}</p>
        <p class="mt-2 md:mt-0">{{ copy.tagline }}</p>
      </div>
    </div>

    <CookieConsent
      :locale="locale"
      :optional-cookies="optionalCookies"
      :title-class="cookieTitleClass"
    />
  </div>
</template>
<style scoped src="~/assets/css/links.css"></style>

<style scoped>
.social-circles .footer-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #f8f9fa;
}

.social-circles .footer-social-icon:hover {
  background-color: #fff600;
  color: #111111;
  transform: translateY(-3px);
}
</style>
