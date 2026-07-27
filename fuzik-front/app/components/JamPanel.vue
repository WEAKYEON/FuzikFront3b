<template>
    <div class="jam-player">
      <video 
          :src="file_location" 
          controls
          autoplay
          controlsList="nodownload"
          oncontextmenu="return false;" 
          class="jam-player__video"
      ></video>
  
  </div>
  </template>
  
  <script setup lang="ts">
  
  defineProps({
    file_location: String,
  })
  </script>
  
  <style scoped>
.jam-player {
  display: flex;
  width: 100%;
  min-height: 384px;
  align-items: flex-start;
  justify-content: flex-start;
}

.jam-player__video {
  width: auto;
  max-width: 100%;
  height: 384px;
  object-fit: contain;
  background: #303030;
  border: 2px solid #f4d000;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 30%);
}

@media (max-width: 639px) {
  .jam-player {
    min-height: 0;
  }

  .jam-player__video {
    width: 100%;
    height: auto;
    max-height: 70vh;
    border-radius: 0;
  }
}
  </style>
