<template>
    <div class="aspect-video">
      <video 
          :src="file_location" 
          controls
          autoplay
          controlsList="nodownload"
          oncontextmenu="return false;" 
          class="video-panel border-yellow-300 rounded-none lg:rounded-xl xl:h-96 shadow-md border-4"
      ></video>
  
  </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    file_location: String,
  })
  </script>
  
  <style scoped>
  
  </style>