<template>
  <div class="w-full flex flex-col justify-start items-start px-4 lg:px-0">

    <div class="w-full flex flex-col justify-center items-start space-y-10 border-4 border-dashed border-gray-200 rounded-xl p-4 lg:p-10"> 

      <div class="flex flex-row items-center space-x-4 text-xl lg:text-3xl font-bold">
        <div>Edit Video</div>
        <div
          class="cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </div>
      </div>
    
      <div class="w-full flex flex-col justify-start items-center space-y-10">

        <div class="w-full flex flex-row justify-center items-center">
          <div class="w-full sm:w-1/2 mx-auto">
            <img :src="video_thumbnail" class="w-full">
          </div>
        </div>

        <div class="w-full flex flex-col space-y-6 sm:space-y-2 px-2 sm:px-48">

          <div 
            v-for="number in Array.from({length: amount}, (_, i) => i)" 
            :key="number"
            class="w-full flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-4 sm:space-y-0 py-6 sm:py-0"
          >
            <div class="w-full sm:w-1/12 bg-yellow rounded-lg">
              <div class="h-full flex flex-row justify-center items-center text-lg sm:text-4xl font-bold">
                <div>{{ parseInt(number) + 1 }}</div>
              </div>
            </div>
            <div class="w-full sm:w-9/12">
              <div class="flex flex-row justify-center items-center bg-gray-200 rounded-xl py-16">
                
              </div>
            </div>
            <div class="w-full sm:w-2/12">
              <div class="h-full flex flex-col justify-start space-y-4">
                <div class="flex flex-col space-y-1">
                  <div class="flex flex-row justify-start items-center space-x-1">
                    <div>
                      <!-- <input 
                        type="number"
                        :value="delays[number]"
                        min="-1000"
                        max="1000"
                        class="w-20 border outline-none text-center"
                      > -->
                      {{ delays[number] }}
                    </div>
                    <div>ms</div>
                  </div>
                  <input 
                    v-model="delays[number]"
                    type="range" 
                    min="-1000"
                    max="1000"
                    class="w-full h-4 rounded-full bg-gray-200 cursor-pointer appearance-none outline-none"
                  >
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex flex-row justify-start items-center space-x-1">
                    <div>
                      <!-- <input 
                        type="number"
                        :value="volumns[number]"
                        min="0"
                        max="200"
                        class="w-20 border outline-none text-center"
                      > -->
                      {{ volumns[number] }}
                    </div>
                    <div>%</div>
                  </div>
                  <input 
                    v-model="volumns[number]"
                    type="range" 
                    min="0"
                    max="200"
                    class="w-full h-4 rounded-full bg-gray-200 cursor-pointer appearance-none outline-none"
                  >
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div class="flex flex-row justify-center items-center space-x-4">
          <div 
            @click="showPreview()"
            class="w-max mx-auto bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg cursor-pointer transition-all duration-500 hover:sm:bg-yellow/20"
          >
            Preview
          </div>
          <div
            @click="submitVideo()"
            class="w-max mx-auto bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg cursor-pointer transition-all duration-500 hover:sm:bg-yellow/20"
          >
            Submit
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      file: null,
      video_thumbnail: "/video_thumbnail.webp",
      delays: [],
      volumns: [],
    }
  },

  computed: {
    amount() {
      return this.$route.query.amount
    }
  },
  
  mounted() {
    this.delays = Array.from({length: this.amount}, () => 0);
    this.volumns = Array.from({length: this.amount}, () => 100);
  },  
  
  methods: {

    showPreview() {
      console.log("show modal")
    },

    submitVideo() {
      this.$swal.fire({
        title: "",
        text: "Sucessfully",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "ตกลง",
      }).then(async(resSwal) => {
        
        // to store video information
        this.$router.push(`/`)

      });
    }
  }


}
</script>

<style>

</style>