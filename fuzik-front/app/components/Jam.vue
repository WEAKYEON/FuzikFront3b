<template>
    <!--
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1">
    -->  
    <div class="py-0">
      <NuxtLink :to="video_link">
        <div v-if="not_empty" class="jam-thumbnail bg-black rounded-lg border border-yellow-400">
          <img :src="jam_preview" class="w-full object-cover object-center rounded-lg" loading="lazy">
        </div>
        <div v-else class="jam-thumbnail bg-black rounded-lg border border-yellow-400">
          <video class="w-full object-cover object-center rounded-lg"
          :src="fuzik_animation" 
          autoplay muted 
          ></video>
        </div>
      </NuxtLink>
      </div>
  
          
      
      
        <div class="space-x-2">
          
          <div class="flex text-gray-400 dark:text-gray-400">
          <img class="w-10 h-10 rounded-full border-white border-2 bg-white" id="profile_icon"
                                          :src='profile_image'
                                          alt="user photo">
          &nbsp; {{ short_desc }}</div>
          
          <div class="flex flex-col text-gray-400 text-xs lg:text-sm dark:text-gray-400">
            <div>{{ jam.owner_name }}</div>
            <div class="tooltip"> {{ video_view_count }} views • {{ durationTime(jam.updated_time) }} <span class="tooltiptext">{{ adjustDate(jam.created_time) }}</span></div>
          </div>
        </div>
      
    <!--
    </div>
  -->
  </template>
  
  <script setup lang="ts">
  const { jam } = defineProps(['jam']);
  
  //console.log( play.musician_profile_pic.length )
  
  var profile_image = 'https://media05.fuzikapp.com/app/music_staff.png';
  
  if (jam.profile_pic?.length) {
    profile_image = 'https://media05.fuzikapp.com/' + jam.profile_pic
  }
  
  const video_link = ref('/webapp/jam_watch/' + jam.url)
  const fuzik_animation = 'https://media05.fuzikapp.com/uploads/jam/FuzikAppAnimation.mp4';
  var not_empty = true;

  if (jam.url.localeCompare('')==0) {
    video_link.value = '';
    not_empty = false;
  }

  var jam_preview = 'https://media05.fuzikapp.com/' + jam.preview;

  
  const video_view_count = ref("-");

  let intervalId: ReturnType<typeof setInterval> | undefined;
  onMounted(async () => {
    //premium_coin.value = await get_token(premium_coin_realm_id, props.email);
    
    intervalId = setInterval(async () => {
        //count.value++; // Access and update the value of the ref
        //fuzik_token.value = count.value.toString();
        video_view_count.value = await get_view(jam.url);

    }, 3000); // Update every 10000 milliseconds (10 second) - 9 minutes
  });

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  
async function get_view(url) {

  var uri = '/api/get_jam2_count?j=' + url;
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
 
    
  // find the second space
  var trim_desc = jam.description.trim();
  var location = 15;
  var space_num = countSpaces(trim_desc);

  if (space_num < 2) {
    if (space_num == 1) {
      location = trim_desc.indexOf(' ');
    } 
  } else {
    // second space --- stop here
    var len = trim_desc.length;
    var space_count = 0;
    for (var i = 0; i < len; i++) {
      if (trim_desc.charAt(i) == ' ') {
        space_count += 1;
        if (space_count == 2) {
          location = i;
        }
      }
    }    
  }

  var short_desc = jam.description.substring(0,location) + "...(Jamming)";
  
  function adjustDate(dateString) {
    const date = new Date(Date.parse(dateString));
    const d = new Date()
    let diff = d.getTimezoneOffset();
  
    const new_date = new Date(date.getTime() + ((diff / -60) * 3600 * 1000));
    return (new_date.toUTCString()).substring(0,16) + ' ' + new_date.toLocaleTimeString();
    //return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  
  }
  
  function durationTime(dateString) {
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

  function countSpaces(str) {
    return str.match(/\s/g)?.length ?? 0;
  }
  
  
  </script>
  <style scoped>
  
  /* Tooltip container */
.jam-thumbnail {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.jam-thumbnail img,
.jam-thumbnail video {
  width: 100%;
  height: 100%;
}

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
