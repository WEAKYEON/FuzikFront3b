<template>
  <div class="w-full flex flex-col justify-start items-start px-4 lg:px-0">

    <div class="w-full flex flex-col justify-center items-start space-y-4 lg:space-y-10 border-4 border-dashed border-gray-200 rounded-xl p-4 lg:p-10"> 

      <div class="flex flex-row items-center space-x-4 text-xl lg:text-3xl font-bold">
        <div>Select Layout and Video</div>
        <div
          class="cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </div>
      </div>

      <div class="w-full flex flex-col justify-start items-center space-y-10">

        <!-- display area -->
        <div class="relative w-full lg:w-4/5 aspect-w-3 aspect-h-2 sm:aspect-w-2 sm:aspect-h-1 bg-gray-500 rounded-xl">

          <div class="absolute sm:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <!-- <div>{{ selected_layout }}</div> -->

            <div 
              v-if="selected_layout == '1'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '2'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <LandscapeLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '3'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <LandscapeLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '4'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <PortraitLayout :no="2"/>
            </div>
            
            <div 
              v-if="selected_layout == '5'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <div class="flex flex-col space-y-2">
                <LandscapeLayout :no="2"/>
                <LandscapeLayout :no="3"/>
              </div>
            </div>
            
            <div 
              v-if="selected_layout == '6'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="1"/>
                <LandscapeLayout :no="2"/>
              </div>
              <LandscapeLayout :no="3"/>
            </div>
            
            <div 
              v-if="selected_layout == '7'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <PortraitLayout :no="2"/>
              <PortraitLayout :no="3"/>
            </div>
            
            <div 
              v-if="selected_layout == '8'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="1"/>
                <LandscapeLayout :no="2"/>
              </div>
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="3"/>
                <LandscapeLayout :no="4"/>
              </div>
            </div>

          </div>

          <div class="hidden sm:block">
            <div 
              v-if="selected_layout == '1'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '2'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <LandscapeLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '3'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <LandscapeLayout :no="1"/>
              <LandscapeLayout :no="2"/>
            </div>

            <div 
              v-if="selected_layout == '4'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <PortraitLayout :no="2"/>
            </div>
            
            <div 
              v-if="selected_layout == '5'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <div class="flex flex-col space-y-2">
                <LandscapeLayout :no="2"/>
                <LandscapeLayout :no="3"/>
              </div>
            </div>
            
            <div 
              v-if="selected_layout == '6'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="1"/>
                <LandscapeLayout :no="2"/>
              </div>
              <LandscapeLayout :no="3"/>
            </div>
            
            <div 
              v-if="selected_layout == '7'"
              class="h-full flex flex-row justify-center items-center space-x-1 sm:space-x-4"
            >
              <PortraitLayout :no="1"/>
              <PortraitLayout :no="2"/>
              <PortraitLayout :no="3"/>
            </div>
            
            <div 
              v-if="selected_layout == '8'"
              class="h-full flex flex-col justify-center items-center space-y-2"
            >
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="1"/>
                <LandscapeLayout :no="2"/>
              </div>
              <div class="flex flex-row space-x-1 sm:space-x-4">
                <LandscapeLayout :no="3"/>
                <LandscapeLayout :no="4"/>
              </div>
            </div>

          </div>
        </div>
        
        <div class="flex flex-wrap justify-center items-center px-0 lg:px-40 gap-2 lg:gap-4">
          <div 
            v-for="(layout, i) in layouts"
            :key="i"
            @click="selectLayout(layout.key)"
            class="border-2 rounded-md cursor-pointer transition-all hover:sm:border-yellow"
            :class="selected_layout === layout.key ? `border-yellow brightness-90` : `border-transparent` "
          >
            <img :src="layout.src">
          </div>
        </div>

        <button 
          @click="doProcessVideo()"
          class="w-max mx-auto bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg transition-all duration-500 hover:sm:bg-yellow/20"
        >
          Process collaboration video
        </button>

      </div>
    </div>

  </div>
</template>

<script>

import LandscapeLayout from "~/components/collaboration/LandscapeLayout.vue"
import PortraitLayout from "~/components/collaboration/PortraitLayout.vue"

export default {

  components: { LandscapeLayout, PortraitLayout },

  data() {
    return {

      selected_layout: "1",
      selected_amount: 2,
      layouts: [
        { key: "1", src: "/video_layouts/layout-1.webp", amount: 2 },
        { key: "2", src: "/video_layouts/layout-2.webp", amount: 2 },
        { key: "3", src: "/video_layouts/layout-3.webp", amount: 2 },
        { key: "4", src: "/video_layouts/layout-4.webp", amount: 2 },
        { key: "5", src: "/video_layouts/layout-5.webp", amount: 3 },
        { key: "6", src: "/video_layouts/layout-6.webp", amount: 3 },
        { key: "7", src: "/video_layouts/layout-7.webp", amount: 3 },
        { key: "8", src: "/video_layouts/layout-8.webp", amount: 4 },
      ]
    }

  },

  methods: {
    selectLayout(key) {
      this.selected_layout = key
      this.selected_amount = this.layouts.filter( e => e.key == key)[0].amount
      // const data = {
      //   amount: this.layouts.filter( e => e.key == key)[0].amount
      // }
      // this.$store.commit("video/SET_AMOUNT", data)
    },

    doProcessVideo() {

      this.$swal.fire({
        title: "",
        text: "Sucessfully",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "ตกลง",
      }).then(async(resSwal) => {
        
        // to store video information
        this.$router.push(`/collaboration?step=edit_video&amount=${this.selected_amount}`)

      });
    }
    
  }


}
</script>

<style>

</style>