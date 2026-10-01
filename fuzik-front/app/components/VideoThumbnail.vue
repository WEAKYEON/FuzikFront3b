<template>
  <component
    :is="!videoId && to ? NuxtLink : 'div'"
    :to="!videoId ? to : undefined"
    class="relative block w-full h-full overflow-hidden rounded-lg"
  >
    <iframe
      v-if="playing && videoId"
      :key="videoId"
      ref="player"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`"
      :title="title || 'YouTube video player'"
      class="absolute inset-0 z-20 w-full h-full border-0 bg-black"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <!-- Preserve the thumbnail dimensions while the player is open. -->
    <img
    :src="source"
    :alt="title || 'Video thumbnail'"
    class="w-full h-full object-center rounded-lg"
    :class="[portrait && usingYouTube ? 'object-contain bg-black' : 'object-cover', { invisible: playing }]"
    loading="lazy"
    decoding="async"
    @error="useFallback"
    >
    <span v-if="usingYouTube && !playing" class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <svg class="w-[44px] h-[31px] drop-shadow-sm" viewBox="0 0 68 48" focusable="false">
        <path fill="#ff0033" d="M66.52 7.74a8 8 0 0 0-5.63-5.66C55.92.75 34 .75 34 .75S12.08.75 7.11 2.08a8 8 0 0 0-5.63 5.66C.15 12.73.15 24 .15 24s0 11.27 1.33 16.26a8 8 0 0 0 5.63 5.66C12.08 47.25 34 47.25 34 47.25s21.92 0 26.89-1.33a8 8 0 0 0 5.63-5.66C67.85 35.27 67.85 24 67.85 24s0-11.27-1.33-16.26Z" />
        <path fill="#fff" d="m27 34 18-10-18-10Z" />
      </svg>
    </span>
    <slot v-if="!playing" />
    <button
      v-if="videoId && !playing"
      type="button"
      class="absolute inset-0 z-10 w-full h-full cursor-pointer rounded-lg border-0 bg-transparent focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
      :aria-label="`Play ${title || 'YouTube video'}`"
      @click="startPlayback"
    />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { getYouTubeVideoId } from '~/utils/youtube';

const props = defineProps<{
  to?: string;
  youtubeUrl?: string | null;
  preview?: string | null;
  title?: string;
  portrait?: boolean;
}>();

const playing = ref(false);
const player = ref<HTMLIFrameElement | null>(null);
const failedYouTube = ref(false);
const failedPreview = ref(false);
const videoId = computed(() => getYouTubeVideoId(props.youtubeUrl));
const usingYouTube = computed(() => !!videoId.value && !failedYouTube.value);
const source = computed(() => {
  if (usingYouTube.value) return `https://i.ytimg.com/vi/${videoId.value}/hqdefault.jpg`;
  if (props.preview && !failedPreview.value) return props.preview;
  return '/video_thumbnail.webp';
});

watch(() => [props.youtubeUrl, props.preview], () => {
  failedYouTube.value = false;
  failedPreview.value = false;
});

watch(() => [props.youtubeUrl, props.to], () => {
  playing.value = false;
});

async function startPlayback() {
  if (!videoId.value) return;
  playing.value = true;
  await nextTick();
  player.value?.focus();
}

function useFallback() {
  if (usingYouTube.value) failedYouTube.value = true;
  else failedPreview.value = true;
}
</script>