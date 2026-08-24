<template>
  <div class="aspect-video">

    <video 
      :src="video_location" 
      controls
      autoplay
      class="video-panel rounded-none lg:rounded-xl shadow-md"
    ></video>
    
  </div>
</template>

<script>
export default {

  props: ["video_location"]
}
</script>

<style>

.video-panel {
  width: 100%;
  padding: 0;
  margin: 0;
  object-fit: fill;
}

</style>