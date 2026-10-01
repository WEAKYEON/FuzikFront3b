<template>
  <div class="w-full flex justify-center items-center">
    <div
      v-if="youtubeVideoId"
      class="w-full aspect-video max-h-[70vh] overflow-hidden rounded-none lg:rounded-xl shadow-md border bg-black"
    >
      <VideoThumbnail :youtube-url="youtubeVideoId" :preview="preview" :title="title" />
    </div>
    <video
        v-else
        :src="video_location" 
        controls
        autoplay
        controlsList="nodownload"
        oncontextmenu="return false;" 
        class="w-auto max-w-full max-h-[70vh] rounded-none lg:rounded-xl shadow-md border bg-black"
    >
    </video>
  </div>
</template>

<script setup lang="ts">

import { getYouTubeVideoId } from '~/utils/youtube';

const props = defineProps({
  video_location: String,
  youtubeUrl: String,
  preview: String,
  title: String,
})

const youtubeVideoId = computed(() =>
  getYouTubeVideoId(props.youtubeUrl) || getYouTubeVideoId(props.video_location)
);
</script>

<style scoped>

</style>