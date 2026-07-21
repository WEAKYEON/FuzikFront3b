<template>
  <div class="w-full flex flex-col justify-start items-start px-4 lg:px-0">
    
    <form 
      @submit.prevent="submitVideo"
      class="w-full flex flex-col justify-center items-center lg:items-start space-y-6 border-4 border-dashed border-gray-200 rounded-xl py-10 px-10 md:px-24 lg:px-48"
    >
    
      <div class="text-xl lg:text-3xl font-bold">
        Video Information
      </div>

      <div class="aspect-video w-full lg:w-1/2 mx-auto">
        <img :src="video_thumbnail">
      </div>

      <div class="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
        <div class="w-full flex flex-col space-y-1">
          <div class="font-bold">Video title</div>
          <input 
            v-model="txtVideoTitle"
            type="text" 
            placeholder="Add a title that describes your video."
            class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
          >
        </div>
        <div class="w-full flex flex-col space-y-1">
          <div class="font-bold">Instrument(s)</div>
          <input 
            v-model="txtInstruments"
            type="text" 
            class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
          >
        </div>
      </div>

      <div class="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
        <div class="w-full flex flex-col space-y-1">
          <div class="font-bold">Song Title</div>
          <input 
            v-model="txtSongTitle"
            type="text" 
            placeholder="Add song title."
            class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
          >
        </div>
      </div>

      <div class="w-full flex flex-row space-x-4">
        <div class="w-full flex flex-col space-y-1">
          <div class="font-bold">Description</div>
          <textarea 
            v-model="txtDescription"
            rows="10"
            placeholder="Tell viewers about your video."
            class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
          ></textarea>
        </div>
      </div>


      <button 
        type="submit"
        class="w-max mx-auto bg-yellow border-2 border-yellow font-bold py-2 px-8 rounded-lg transition-all duration-500 hover:sm:bg-yellow/20"
      >
        Submit Video
      </button>
    </form>

  </div>
</template>

<script>
export default {

  data() {
    return {
      file: null,
      video_thumbnail: "/video_thumbnail.webp",

      txtVideoTitle: "",
      txtInstruments: [],
      txtSongTitle: "",
      txtDescription: "",
    }
  },

  methods: {

    async submitVideo() {

      if(this.txtVideoTitle == ""){

        this.$swal.fire(
          "",
          "กรุณากรอกชื่อวิดีโอ",
          "warning"
        )

      } else if (this.txtInstruments.length <= 0) {

        this.$swal.fire(
          "",
          "กรุณาเลือกเครื่องดนตรี",
          "warning"
        )

      } else if(this.txtSongTitle == "") {

        this.$swal.fire(
          "",
          "กรุณากรอกชื่อเพลง",
          "warning"
        )

      } else if(this.txtDescription == "") {

        this.$swal.fire(
          "",
          "กรุณากรอกคำอธิบาย",
          "warning"
        )

      } else {

        this.$swal.fire({
          title: "",
          text: "ต้องการบันทึกข้อมูล",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ตกลง",
          cancelButtonText: "ยกเลิก",
        }).then(async(resSwal) => {

          if(resSwal.isConfirmed){

            this.$swal.fire({
              title: "",
              text: "บันทึกข้อมูลเรียบร้อย",
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "ตกลง",
            }).then(async(resSwal) => {
              
              // to store video information
              this.$router.push(`/`)

            });
          } 
          
        });
      } 

    }
  }


}
</script>

<style>

</style>