<template>
  <!-- Video Thumbnail -->
  <div class="py-0 sm:py-2">
    <div class="w-36 sm:w-96 aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-xl">

      <div class="flex flex-col justify-between items-center py-6">
        <div></div>
        <div class="flex flex-row justify-center items-center text-xl sm:text-4xl font-bold">
          {{ no }}
        </div>
        <div class="">
          <button 
            @click="openFileDialog"
            class="hidden sm:block bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg transition-all duration-500 hover:sm:bg-yellow/20"
          >
            Select video
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  props: ["no"],

  methods: {
    openFileDialog() {
      // this.$refs.fileInput.click()
    },
  }
}
</script>

<style>

</style>