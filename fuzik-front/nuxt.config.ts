// https://nuxt.com/docs/api/configuration/nuxt-config
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)


export default defineNuxtConfig({
  runtimeConfig: {
    engineBaseUrl: 'https://engine01.fuzikapp.com',
    fzDebitApiKey: '',
    jamDownloadSigningKey: '',
    public: {
      jamDownloadDebitEnabled: false,
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [
    { path: '~/components/website_components', pathPrefix: false },
    '~/components',
  ],
  modules: ['@nuxtjs/supabase', '@nuxt/image','@nuxt/ui'],
  supabase: {
    redirect: false // Disables global redirects
  },
  app: {
    head: {
      title: "Fuzik Collaborate - Your Global Jam Session Starts Now!",
      link: [
        { rel: 'icon', type: 'image/x-icon', href : '/favicon.ico' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      bodyAttrs: {
        class: "bg-black",
    },

  },
},
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/input.css',
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/20/solid',
        '@heroicons/vue/24/outline',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },



})
