<template>

  <div class="lg:container lg:mx-auto px-2 py-4">
    <div class="flex flex-col space-y-10">
      
      <MyVideo 
        :videosData="videosData"
      />

    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {
      videosData: [
        {
          url: "zxWv84usH5",
          genre: "pop",
          orientation: "landscape", // landscape : portrait
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 44,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
        {
          url: "NtKA8AYoQC",
          genre: "rock",
          orientation: "landscape",
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 68,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
        {
          url: "agLJmCjvHa",
          genre: "rock",
          orientation: "landscape",
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 25,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
        {
          url: "fF5qOZiC99",
          genre: "hiphop",
          orientation: "landscape",
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 1561,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
        {
          url: "ReV3OEry1q",
          genre: "pop",
          orientation: "landscape",
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 441165,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
        {
          url: "y38WHEMBlt",
          genre: "rock",
          orientation: "landscape",
          preview: "/video_thumbnail.webp",
          video_title: "Lorem Ipsum is simply dummy text of the printing is fine",
          music_title: "FIRE BOY",
          views: 4265831,
          musician_name: "Lorem Ipsum",
          created_at: "Fri Mar 25 2022 07:00:00 GMT+0700 (Indochina Time)",
        },
      ],
    }
  },

}
</script>

<style>

</style>