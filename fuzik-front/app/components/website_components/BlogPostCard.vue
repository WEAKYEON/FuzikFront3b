<script setup lang="ts">
defineProps<{
  post: {
    imageUrl: string
    title: string
    author: string
    date: string
    slug: string
    excerpt: string
    tags: string[]
  }
  basePath: string
}>()
</script>

<template>
  <article
    class="flex flex-col bg-[#2a2a2a] rounded-2xl border-2 border-[#fff600] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
  >
    <div class="overflow-hidden aspect-video bg-gray-100">
      <img
        :src="post.imageUrl"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
      />
    </div>

    <div class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 text-sm text-gray-100 mb-3">
          <span>By {{ post.author }}</span>
          <span>•</span>
          <time>{{ post.date }}</time>
        </div>

        <h2
          class="text-2xl font-bold text-white group-hover:text-[#fff600] transition-colors line-clamp-2"
        >
          <NuxtLink :to="`${basePath}/${post.slug}`">
            {{ post.title }}
          </NuxtLink>
        </h2>

        <p class="mt-3 text-[#f8f9fa] line-clamp-3 text-sm leading-relaxed">
          {{ post.excerpt }}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
        <span
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          class="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md"
        >
          #{{ tag }}
        </span>
        <span
          v-if="post.tags.length > 3"
          class="text-xs text-gray-400 self-center"
        >
          +{{ post.tags.length - 3 }} more
        </span>
      </div>
    </div>
  </article>
</template>
