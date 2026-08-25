<template>
  <div class="w-full flex flex-col justify-start items-start px-4 lg:px-0">
    
    <form 
      @submit.prevent="uploadFile"
      class="w-full flex flex-col justify-center items-center space-y-10 border-4 border-dashed border-gray-200 rounded-xl p-10"
    >
      <div class="w-2/3 sm:w-1/3 lg:w-1/4 mx-auto py-4">
        <img src="https://media05.fuzikapp.com/app/upload.png">
      </div>
      
      <div class="flex flex-col items-center">
        <div class="font-bold">Drag and drop video files to upload</div>
        <div class="text-sm">Your videos will be private until you publish them.</div>
      </div>
      
      <input 
        type="file" 
        ref="fileInput"  
        @change="file = $event.target.files[0]"
        class="hidden"
      />

      <button 
        @click="openFileDialog"
        type="submit"
        class="w-max mx-auto bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg transition-all duration-500 hover:sm:bg-yellow/20"
      >
        Select File
      </button>
    </form>

  </div>
</template>

<script>
export default {

  data() {
    return {
      file: null
    }
  },

  methods: {

    openFileDialog() {
      // this.$refs.fileInput.click()
    },

    async uploadFile() {

      this.$router.push(`/upload?step=video_information`)
      // Make sure a file was selected
      // if (!this.file) {
      //   return
      // }


      // Create a FormData object to store the file
      const formData = new FormData()
      formData.append('file', this.file)
      
      try {
        // Send the file to the server
        // const response = await axios.post('/server/upload', formData)
        // console.log(response)

        console.log(formData)

        // this.$router.push(`/`)

      } catch (error) {
        console.error(error)
      }
    }
  }


}
</script>

<style>

</style>