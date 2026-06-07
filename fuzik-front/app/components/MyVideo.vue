<template>
  <div>
    <div class="flex flex-row justify-start items-center space-x-10">
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-24 h-24 lg:w-60 lg:h-60 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div class="absolute bottom-2 right-2 lg:bottom-4 lg:right-4">
          <img :src="rank_icon" class="w-5 h-5 lg:w-16 lg:h-16">
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-2xl font-bold">{{ username }}</div>
        <div class="text-gray-400">{{ rank }}</div>
        <div class="text-gray-400">{{ fans }} Fans</div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center lg:items-start space-y-2 lg:space-y-4 pt-6 lg:pt-0">

      <div class="flex flex-row font-bold text-xl lg:text-3xl">
        Your Videos
      </div>

      <div class="w-full flex flex-row justify-center lg:justify-start items-center space-x-6 border-b">
        <div
          @click="onSelectMode('solo')"
          class="text-center text-base lg:text-xl cursor-pointer"
          :class="currentMode == `solo` ? `font-bold border-b-2 border-yellow` : `` "
        >
          Solo
        </div>
        <div
          @click="onSelectMode('colab')"
          class="text-center text-base lg:text-xl cursor-pointer"
          :class="currentMode == `colab` ? `font-bold border-b-2 border-yellow` : `` "
        >
          Collaboration
        </div>
      </div>
    
    </div>

    <div class="flex flex-col space-y-2">
      <div 
        class="flex flex-col divide-y"
        v-if="currentMode == `solo`"
      >
        <VideosLandscape :videos="videos" v-if="videos" class="pb-10" />
        <VideosPortrait :videos="videos" v-if="videos" class="py-10" />
      </div>
      <div v-else>
        <VideosLandscape :videos="videos" v-if="videos" />
      </div>
    </div> 

  </div>
</template>

<script>
export default {

  props: ["videosData"],

  data() {
    return {
      currentMode: "solo",
      videos: null,
    }
  },

  computed: {
    
    username() {
      return this.$store.state.auth.username
    },

    rank_icon() {
      return this.$store.state.auth.rank_icon
    },

    rank() {
      return this.$store.state.auth.rank
    },

    fans() {
      return this.$store.state.auth.fans
    },
  },

  mounted() {
    this.videos = this.videosData
  },  

  methods: {

    async onSelectMode(mode) {
      this.currentMode = mode

      if (mode == `solo`) {
        
      }

      if (mode == `colab`) {
        
      }
    },

  }
}
</script>

<style>

</style>