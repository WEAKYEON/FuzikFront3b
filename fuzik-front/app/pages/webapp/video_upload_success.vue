<template>
  <div class="text-center bg-black text-gray-200">
    <form>
      {{ display }}
      <!--
      <video class="watch" id="my_video" width="100%" controls onended="finish()">
        <source :src="video_source" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    -->
    
      <NuxtImg :src="preview_source2" id="image01" hidden="true"  @load="hello()" >
      </NuxtImg>
      <!--
      <img v-bind:src=preview_source2 id="image01" hidden="true" @load="hello()" /> 
      -->

      <!--

      <button class="btn btn-blue" @click="hello()" type="button">Test</button>
      -->
    </form>

  </div>
</template>

<script setup lang="ts">

const display = ref('')
//import nuxtStorage from 'nuxt-storage'

const cookie_video_location = useCookie("video_location");
const cookie_upload_width = useCookie("upload_width");
const cookie_upload_height = useCookie("upload_height");

console.log('video_location');
console.log(cookie_video_location.value);

/*
export default {
  methods: {
    async handleImageLoaded(img: HTMLImageElement) {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      // Use the width and height here
    },
  },
};*/

//var this_video = document.getElementById('my_video')

//alert('Height: ' + this_video.videoHeight)

//var preview_source = 'https://media04.tetraserver.com/uploads/videos/1702955307_01-piano.png';

//const cookie_video_location = useCookie("video_location");

//var video_location = nuxtStorage.localStorage.getData('video_location');
var video_location = '';

if (cookie_video_location.value != undefined) {
  video_location = cookie_video_location.value;
}

//console.log(video_location)
if ((video_location == null) || (video_location.length==0)) {
  display.value = 'Direct access is not allowed'
  navigateTo('/index02')

} else {
  display.value = 'Upload success';

}

var preview_source2= '';

var extention = video_location.substring(video_location.length - 4, video_location.length); 

if (extention.localeCompare('.mp4') == 0) {
  preview_source2= 'https://media04.tetraserver.com/' + video_location.replace('.mp4','.png') 
}

if (extention.localeCompare('.mov') == 0) {
  preview_source2= 'https://media04.tetraserver.com/' + video_location.replace('.mov','.png') 
}
//uploads/videos/1703490031_VID_20230228_214520.png'
//var video_source = 'https://media04.tetraserver.com/uploads/videos/1702955307_01-piano.mp4'
//var this_video = document.getElementById('my_video')

console.log('preview_source2');
console.log(preview_source2);

//if (imageExists(preview_source2)) {
//  // Do nothing
//} else {
  // Alert
//}


function hello() {
 //console.log('Hello')
  var img: any = document.getElementById('image01');

  //const img = useImage();
  //var image_file = img.getSizes(preview_source, { })
  console.log('width: ' + img.width)
  console.log('height: ' + img.height)

  cookie_upload_width.value = img.width;
  cookie_upload_height.value = img.height;

  //nuxtStorage.localStorage.setData('upload_width', img.width);
  //nuxtStorage.localStorage.setData('upload_height', img.height);
  
  navigateTo('/video_upload_info')

}

function imageExists(image_url):boolean{

  var http = new XMLHttpRequest();

  http.open('HEAD', image_url, false);
  http.send();

  return http.status != 404;

}

definePageMeta({
  layout: "empty"
})
</script>

<style scoped>
@reference "tailwindcss";

.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
