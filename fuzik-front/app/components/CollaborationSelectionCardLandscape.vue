<template>
  <div class="m-2 ">
    <div class="py-0 sm:py-2">

      <div class="aspect-w-16 aspect-h-9 bg-slate-100 rounded-lg" 
      

        >
        <img :src="`${play.preview}`" class="w-full object-cover object-center rounded-lg"
        draggable="true"
        
        @dragstart="drag($event, play.url)"
        >
      </div>

    </div>
    <div class="space-x-2">

      <div class="flex flex-row-reverse dark:text-white text-white">
        <img class="w-10 h-10 rounded-full border-black border-2  bg-white text-grey-400 " id="profile_icon"
        :src='profile_image' 
        alt="user photo">
        {{ play.music_title }}
        &nbsp;
        </div>

      <div class="flex flex-col text-gray-400 text-xs lg:text-sm">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { play } = defineProps(['play']);

var profile_image = 'https://media04.tetraserver.com/app/music_staff.png';

//console.log('profile_pic');
//console.log(play.musician_profile_pic);

if (play.musician_profile_pic.length > 0 ) {
  profile_image = 'https://media04.tetraserver.com/' + play.musician_profile_pic
} else {
  profile_image = 'https://media04.tetraserver.com/app/music_staff.png';
}

function test() {
  console.log('test');
}

function allowDrop(ev:any) {
  ev.preventDefault();
}


function drag(ev:any, url:any) {
ev.dataTransfer.setData("text", url);


  //ev.dataTransfer.setData("text", ev.target.id);

  //console.log('Drag ');
  //event.dataTransfer.setData("video_url",url);
  //console.log('Drag ' + url);
}


function test_click() {
  console.log("Test Click");
}


</script>

<style scoped></style>