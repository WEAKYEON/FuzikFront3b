<script setup lang="ts">
import { marked } from 'marked'
import type { WebsiteLocale } from './content'
const props = withDefaults(
  defineProps<{
    locale?: WebsiteLocale
    post?: {
      imageUrl: string
      title: string
      author: string
      date: string
      tags: string[]
      content: string
    }
  }>(),
  { locale: 'en' },
)
// Content comes from the existing local blog datasets.
const cleanContent = computed(() =>
  props.post ? marked.parse(props.post.content) : '',
)
</script>

<template>
  <div v-if="post" class="max-w-4xl mx-auto">
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 text-xl font-medium text-white hover:text-[#fff600] mb-8 group transition-colors"
    >
      <span class="group-hover:-translate-x-1 transition-transform"
        >&larr;</span
      >
      {{ locale === 'th' ? 'กลับไปหน้าบล็อก' : 'Back to articles' }}
    </NuxtLink>

    <article class="">
      <div class="rounded-2xl overflow-hidden mb-8 shadow-sm aspect-video">
        <img
          :src="post.imageUrl"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
      </div>

      <header class="mb-8 bg-[#1a1a1a]">
        <h1
          class="text-3xl sm:text-4xl font-black text-[#fff600] tracking-tight leading-tight"
        >
          {{ post.title }}
        </h1>

        <div
          class="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-100 border-b border-gray-200 pb-6"
        >
          <div class="flex items-center gap-2">
            <span
              class="w-8 h-8 rounded-full bg-[#fff600] text-black flex items-center justify-center font-bold text-xs"
              >FZ</span
            >
            <span class="font-semibold text-gray-200">{{ post.author }}</span>
          </div>
          <span>•</span>
          <span>Published on {{ post.date }}</span>
        </div>
      </header>

      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-sm font-medium text-white bg-black border-3 border-yellow-300 px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <div
        v-html="cleanContent"
        class="text-gray-200 text-lg leading-relaxed space-y-6 prose prose-invert max-w-none [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#fff600] [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#fff600] [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:font-bold [&_strong]:text-white"
      ></div>
    </article>
  </div>

  <div
    v-else
    class="text-center py-24 bg-white rounded-2xl border border-gray-200 shadow-xs max-w-lg mx-auto mt-10"
  >
    <span class="text-4xl">⚠️</span>
    <h2 class="text-2xl font-black text-[#1a1a1a] mt-4">
      {{ locale === 'th' ? 'ไม่มีบทความ' : 'Article Not Found' }}
    </h2>
    <p class="text-gray-600 mt-2 px-6">
      {{
        locale === 'th'
          ? 'ไม่มีเนื้อหาในส่วนนี้'
          : "We couldn't find the collaborative journal post matching that address link option."
      }}
    </p>
    <NuxtLink
      :to="locale === 'th' ? '/index-th' : '/'"
      class="mt-6 inline-block px-5 py-2.5 bg-yellow-300 text-black rounded-xl font-medium hover:bg-yellow-700 transition-colors shadow-xs"
    >
      {{ locale === 'th' ? 'กลับหน้าหลัก' : 'Return to front page' }}
    </NuxtLink>
  </div>
</template>
