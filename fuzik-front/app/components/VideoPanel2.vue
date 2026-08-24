<template>
  <div class="aspect-video ">
    <video 
        :src="video_location" 
        controls
        autoplay
        controlsList="nodownload"
        oncontextmenu="return false;" 
        class="video-panel rounded-none lg:rounded-xl xl:h-96 shadow-md border"
    >
    </video>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  video_location: String,
})
</script>

<style scoped>

</style>