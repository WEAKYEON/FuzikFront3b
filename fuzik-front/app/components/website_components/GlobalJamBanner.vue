<script setup lang="ts">
import { websiteContent, type WebsiteLocale } from './content'
const props = withDefaults(
  defineProps<{
    locale?: WebsiteLocale
    contained?: boolean
    titleClass?: string
    themeBorder?: boolean
  }>(),
  {
    locale: 'en',
    contained: true,
    titleClass: 'text-[#111111]',
    themeBorder: false,
  },
)
const copy = computed(() => websiteContent[props.locale].banner)
</script>

<template>
  <section class="section-padding bg-[#fff600] text-black text-center">
    <div :class="[contained ? 'container' : '', 'mx-auto px-6']">
      <h2 :class="['text-5xl font-bold mb-6', titleClass]">
        {{ copy.title }}<span class="text-[#1a1a1a]">{{ copy.highlight }}</span>
      </h2>
      <p class="text-xl mb-8 opacity-90">{{ copy.description }}</p>
      <a
        href="/webapp"
        target="_blank"
        class="btn-primary btn-final-cta pulse-yellow"
        :class="{ 'theme-border': themeBorder }"
      >
        <img src="/images/icons/rocket_launch_256.png" class="w-16 px-4" />{{
          copy.button
        }}
      </a>
    </div>
  </section>
</template>
<style scoped src="~/assets/css/buttons.css"></style>

<style scoped>
.section-padding {
  padding: 100px 0;
}
.btn-final-cta {
  background-color: #111111 !important;
  color: #fff600 !important;
  font-weight: 800;
  text-shadow: 0 0 3px rgba(255, 246, 0, 0.2);
  border: 2px solid #fff600 !important;
}

.btn-final-cta:hover {
  background-color: #fff600 !important;
  color: #111111 !important;
  text-shadow: none !important;
  transform: translateY(-3px) scale(1.03);
}
.pulse-yellow {
  animation: pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
}

@keyframes pulse-yellow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 0 25px rgba(255, 246, 0, 0);
  }
}

/* Preserve the blog listings’ existing theme-variable border. */
.btn-final-cta.theme-border {
  border: 2px solid var(--fuzik-yellow) !important;
}
</style>
