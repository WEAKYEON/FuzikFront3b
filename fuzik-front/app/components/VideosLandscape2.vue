<template>
  <!--
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1">
  -->  
  <div class="py-0 sm:py-2">

      <div
        class="relative aspect-w-16 aspect-h-9 bg-slate-100 rounded-lg"
        :class="{ 'opacity-50': play.void === '1' }"
      >
        <VideoThumbnail
          :to="video_link"
          :preview="play.preview"
          :title="play.video_title"
        />

        <div
          v-if="play.void === '1'"
          class="absolute bottom-2 right-2"
        >
          <span class="bg-black/70 text-white px-3 py-1 rounded-lg font-bold">
            UNPUBLISHED
          </span>
        </div>

        <div v-if="is_artist" class="absolute top-0 left-0 right-0 w-24 h-24 ">          
          <img :src="artist_image" alt="">
        </div>
        
      </div>
    </div>
      <div class="space-x-2">
        
        <div class="flex text-gray-400 dark:text-gray-400">
        <img class="w-10 h-10 rounded-full border-black border-2 bg-white" id="profile_icon"
                                        :src='profile_image'
                                        alt="user photo">
        &nbsp;{{ play.video_title }}</div>
        
        <div class="flex flex-col text-gray-400 text-xs lg:text-sm dark:text-gray-400">
          <div>{{ play.musician_name }}</div>
          <div class="tooltip"> {{ video_view_count }} views • {{ durationTime(play.created_time) }} <span class="tooltiptext">{{ adjustDate(play.created_time) }}</span></div>
        </div>
      </div>
    
  <!--
  </div>
-->
</template>

<script setup lang="ts">
const { play } = defineProps(['play']);

//console.log( play.musician_profile_pic.length )

var profile_image = 'https://media05.fuzikapp.com/app/music_staff.png';

if (play.musician_profile_pic.length != 0 ) {
  profile_image = 'https://media05.fuzikapp.com/' + play.musician_profile_pic
}

const video_link = ref('/webapp/watch/' + play.url)

const video_view_count = ref("-");

let intervalId:any;
onMounted(async () => {
  //premium_coin.value = await get_token(premium_coin_realm_id, props.email);
  
  intervalId = setInterval(async () => {
      //count.value++; // Access and update the value of the ref
      //fuzik_token.value = count.value.toString();
      video_view_count.value = await get_view(play.url);

  }, 3000); // Update every 10000 milliseconds (10 second) - 9 minutes
});

onUnmounted(() => {
  clearInterval(intervalId);
});

  
async function get_view(url:string) {

  var uri = '/api/get_play2_count?p=' + encodeURIComponent(String(url));
  //console.log("uri: " + uri);

  var output;
  var data_token: any;

  try {
    
    const response = await fetch(uri);

    
    const view = await response.json();

    //console.log("view:" + view);
    output = '' + view[0].view_count;

    } catch (error) {
        output = 'Error';
    }
    return output;
}

var artist_image = 'https://media05.fuzikapp.com/app/artist_icon_240.png';
var is_artist = false;
if (play.artist == 'Yes') {
  is_artist = true;
}

function adjustDate(dateString:string) {
  const date = new Date(Date.parse(dateString));
  const d = new Date()
  let diff = d.getTimezoneOffset();

  const new_date = new Date(date.getTime() + ((diff / -60) * 3600 * 1000));
  return (new_date.toUTCString()).substring(0,16) + ' ' + new_date.toLocaleTimeString();
  //return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

}

function durationTime(dateString:string) {
  // Server is UTC +0000
  const date = new Date(Date.parse(dateString));
  //console.log(date);
  const d = new Date()
  let diff = d.getTimezoneOffset();

  const now = Date.now() + ((diff / 60) * 3600 * 1000);
  //document.write('now: ' + now);
  //document.write('date: ' + date);

  //console.log(date.getTime());
  //console.log(now);
  
  var duration = now - date.getTime();
  //console.log(duration);
  //document.write('duration: ' + duration);
  var str_time = '';

  const year_val = (1000 * 60 * 60 * 24 * 365); //31536000000;
  const month_val = (1000 * 60 * 60 * 24 * 30); //2592000000;
  const day_val = (1000 * 60 * 60 * 24); //86400000;
  const hour_val = (1000 * 60 * 60); //3600000
  const min_val = (1000 * 60); //60000

  //document.write('year_val: ' + year_val);
  var year_num = 0;
  if (duration > year_val) {
    year_num = Math.floor(duration / year_val);
    //duration = duration - (year_num  * year_val);
    //document.write('year_num:' + year_num);
    if (year_num <= 1) {
      str_time = 'one year ago';
    } else {
      str_time = year_num + ' years ago';
    }
  } else if (duration > month_val) {
    var month_num = Math.floor(duration / month_val);
    if (month_num <= 1) {
      str_time = 'one month ago';
    } else {
      str_time = month_num + ' months ago';
    }
  } else if (duration > day_val) {
    var day_num = Math.floor(duration / day_val);
    if (day_num <= 1) {
      str_time = 'one day ago';
    } else {
      str_time = day_num + ' days ago';
    }
  } else if (duration > hour_val) {
    var hour_num = Math.floor(duration / hour_val);
    if (hour_num <= 1) {
      str_time = 'one hour ago';
    } else {
      str_time = hour_num + ' hours ago';
    }
  } else if (duration > min_val) {
    var min_num = Math.floor(duration / min_val);
    if (min_num <= 1) {
      str_time = 'one minute ago';
    } else {
      str_time = min_num + ' minutes ago';
    }
  } else {
    str_time = 'just now';
  }
  //console.log(str_time);
  return str_time;
}



/*
const props = defineProps({
    video_location: String,

    musician_name: String,
    //profile_pic: String,

    title: String,
    views: Number,
    prop_is_fans: Boolean,

    prop_is_liked: Boolean,
    desc: String,
    url: String,

    updated_time: String,
    created_time: String,

})
*/

//const video_link = ref("watch/" + props['video_location'])
//const video_link = ref("watch/" + play.url)



</script>
<style scoped>

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; *//* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 180px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>