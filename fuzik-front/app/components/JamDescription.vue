<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

  <div class="flex flex-col divide-y divide-slate-200">

    <div class="flex flex-col justify-start items-start space-y-4 py-6 px-3 lg:px-0 text-white dark:text-white">
      <div class="text-xl">{{ title }}</div>

      <div class="flex flex-col lg:flex-row justify-start items-start space-y-4 lg:space-y-0 space-x-0 lg:space-x-20">

        <div class="flex flex-row justify-start items-center space-x-4 ">
          <div class="w-12 h-12">
            <!-- <img :src="profile_pic"> 
            -->
            <img class="w-8 h-8 rounded-full bg-white" id="profile_icon"
              :src="profile_pic"
            alt="user photo">
          </div>
          <div class="flex flex-col justify-between items-start">
            <div>Created by {{ owner_display_name }}</div>
            
            <div class="tooltip2">
              <span class="text-gray-400">
                {{ this_views }} views • {{ formatted_created_time }}
              </span>
              <span class="tooltiptext2">{{ adjustDate(this_created_time) }}</span>
            </div>
            
       

            
          </div>
        </div>

        <div class="flex flex-row justify-end items-center space-x-2">
          <div @click="toggleFan()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2 text-yellow-600 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-yellow-600 hover:lg:fill-white">
            <div v-if="!is_fan" class="w-6 h-6">              
                <span class="material-symbols-outlined">
                Remove
                </span>              
              <!-- 
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 96 100">
                <path
                  d="M76.3 1c-3.1 1.3-4.9 5.5-5.6 13.1-.3 3.6-1.4 8.6-2.3 11-2.4 6-8.4 15.1-9.8 14.6-.6-.2-1.4-3.1-1.8-6.5-.4-3.4-1.6-8.1-2.7-10.6-2.8-6.4-10.2-14-16.4-16.7-18.5-8.1-46 6.3-35.4 18.7 2 2.3 3.7 2.9 11.2 4 8.4 1.2 17.7 4.8 22.9 8.9 3 2.3.5 4.1-7.7 5.4-12.1 2-21.3 8.6-26.1 19C1 65.5.5 68.4.6 75c0 9.7 2.2 15.5 8 21.7 3.1 3.3 3.8 3.5 7.5 3 6.4-.8 7.9-3.1 9-12.8 1-8.6 4.4-17.8 8.6-22.9 3-3.5 4.9-1.5 5.6 5.9 1.9 21.5 21.1 34.4 41.6 28.2 13.5-4.1 19.1-13.2 12.3-20-2.3-2.3-3.8-2.9-9.7-3.4-3.9-.3-9.5-1.5-12.4-2.6-5.3-2-13.1-6.8-13.1-8 0-.4 1.3-2 2.8-3.7 2.2-2.4 3.9-3.2 7.9-3.7 10-1.2 19.3-8 24-17.5 2.4-4.9 2.8-6.9 2.8-14.2-.1-7.3-.5-9.3-3-14.3C87.9 1.4 82.8-1.6 76.3 1zm7.6 6.1c3.9 4.3 6.4 11.1 6.5 17.9.2 11.9-7.2 22.3-18.1 25.6-7.1 2.1-8.1 1.9-9.2-2.2-.9-3.4-.7-4 2.3-7.8C71.6 33 76 21.6 76 13.1 76 8.6 78 5 80.6 5c.7 0 2.2 1 3.3 2.1zm-47.4 4.3c8.1 3.8 13.2 10.9 15 20.8l.7 3.8h-4.5c-3.7 0-5.7-.8-10.3-4-7.3-5.1-15.2-8-23.7-8.7-6-.5-7-.9-7.9-2.9-1.4-3.1.9-5.8 7.7-9 6.9-3.3 16.1-3.3 23 0zM55.3 45c2.9 3.2 3.6 8.4 1.7 12.1-1.2 2.2-6.1 4.9-8.9 4.9-8.2 0-13-10-8-16.4 4.3-5.4 10.5-5.7 15.2-.6zm-22.7 7.2c.1 3.4-.7 5.3-4.2 10.5C23.5 69.9 20 80 20 87c0 3.1-.6 5.4-1.6 6.4-3.2 3.3-6.1 1.4-10-6.4-2.3-4.4-2.8-6.8-2.8-12.5 0-7.3 1.3-10.8 6-17.2 2.8-3.7 13.5-9.3 17.8-9.3 3 0 3.1.2 3.2 4.2zm25 18.3c7.3 5.6 17.9 9.5 26.1 9.5 4.2 0 7.3 1.9 7.3 4.5 0 3.6-8.9 8.8-17.2 10-13.4 2-26.8-8.7-29.3-23.3l-.7-4.2h4.6c3.7 0 5.5.7 9.2 3.5z" />
              </svg> -->
            </div>

            <div v-else class="w-6 h-6">              
              <span class="material-symbols-outlined">
                toys_fan
              </span>
              <!--
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 96 100">
                <path
                  d="M76.3 1c-3.1 1.3-4.9 5.5-5.6 13.1-.3 3.6-1.4 8.6-2.3 11-2.4 6-8.4 15.1-9.8 14.6-.6-.2-1.4-3.1-1.8-6.5-.4-3.4-1.6-8.1-2.7-10.6-2.8-6.4-10.2-14-16.4-16.7-18.5-8.1-46 6.3-35.4 18.7 2 2.3 3.7 2.9 11.2 4 8.4 1.2 17.7 4.8 22.9 8.9 3 2.3.5 4.1-7.7 5.4-12.1 2-21.3 8.6-26.1 19C1 65.5.5 68.4.6 75c0 9.7 2.2 15.5 8 21.7 3.1 3.3 3.8 3.5 7.5 3 6.4-.8 7.9-3.1 9-12.8 1-8.6 4.4-17.8 8.6-22.9 3-3.5 4.9-1.5 5.6 5.9 1.9 21.5 21.1 34.4 41.6 28.2 13.5-4.1 19.1-13.2 12.3-20-2.3-2.3-3.8-2.9-9.7-3.4-3.9-.3-9.5-1.5-12.4-2.6-5.3-2-13.1-6.8-13.1-8 0-.4 1.3-2 2.8-3.7 2.2-2.4 3.9-3.2 7.9-3.7 10-1.2 19.3-8 24-17.5 2.4-4.9 2.8-6.9 2.8-14.2-.1-7.3-.5-9.3-3-14.3C87.9 1.4 82.8-1.6 76.3 1zm-21 44c2.9 3.2 3.6 8.4 1.7 12.1-1.2 2.2-6.1 4.9-8.9 4.9-8.2 0-13-10-8-16.4 4.3-5.4 10.5-5.7 15.2-.6z" />
              </svg>
              -->
            </div>
            <div class="tooltip text-yellow-600">Fans<span class="tooltiptext" :hidden="fan_button_tooltip_hidden" >{{ fan_button_tooltip_text }}</span></div>
          </div>

          <div @click="toggleLike()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2  text-yellow-600 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-yellow-600 hover:lg:fill-white">
            <div v-if="!is_liked" class="w-6 h-6">
              <span class="material-symbols-outlined">
                Remove
              </span>
              <!--
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg> -->
            </div>

            <div v-else class="w-6 h-6">
              <span class="material-symbols-outlined">
                thumb_up
              </span>
              <!--
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                <path
                  d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
              </svg> -->
            </div>

            <div class="tooltip text-yellow-600">Like<span class="tooltiptext" :hidden="like_button_tooltip_hidden">{{ like_button_tooltip_text }}</span></div>
          </div>

          <div @click="showModal()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2 text-yellow-600 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-yellow-600 hover:lg:fill-white">
            <div class="w-6 h-6">
              <span class="material-symbols-outlined">
                Share
              </span>
              <!--
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              -->
            </div>
            <div>Share</div>
          </div>
          <JamDownloadPreview :email="current_user_email" :jam-url="url" />
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2 pt-4 pb-40 px-3 lg:px-0">
      <div class="text-lg text-white dark:text-white">Description</div>
      <div class="w-2/3 text-gray-400">
        This collaboration consists of: <br />
        <pre class="font-sans">{{ desc5 }}</pre>
      </div>
    </div>
    
    <div class="flex flex-col">
        <!-- <div class="line-clamp-2">{{ play.video_title }}</div>
      
        <div class="line-clamp-2">{{ desc }}</div> -->
      <!--
        <div class="flex flex-col text-gray-400 text-xs lg:text-sm">
          <div>Created by {{ play.musician_name }}</div>
          <div class="tooltip"> {{ play.view_count }} views • {{ durationTime(play.created_time) }} <span class="tooltiptext">{{ adjustDate(play.created_time) }}</span></div>
        </div>
      -->
      
    </div>
    <UModal v-model:open="isOpen" :overlay="false" title="Share video" description="Copy the video link to share it.">
      <template #body>
        <p class="text-center text-white">{{ shareMessage }}</p>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  
  owner_display_name: String,
  //profile_pic: String,

  //views: Number,

  description: String,
  url: String,

  musician_email: String,
  user_email: String,

  video01_inst: String,
  video02_inst: String,
  video03_inst: String,
  video04_inst: String,

  updated_time: String,
  created_time: String,

  resized: Boolean,

  musician_name: String,

})

//const video_location = ref('')
//const musician_name = ref('')
const profile_pic = await get_profile_pic(props['musician_name']);
//console.log(profile_pic)
//const title = ref('')
//const views = ref('')
const is_fan = ref(false)

const is_liked = ref(false)
//const desc = ref('')
//const url = ref('')

//const updated_time = ref('')
//const created_time = ref('')

// Share
const isOpen = ref(false);
const shareMessage = ref('');
//const display_time = ref('')

//const display_time = durationTime(props['updated_time']);
//console.log(await Promise.resolve(durationTime(props['updated_time'])));

// Like and fan

var current_user_email = props['user_email'];
var musician_email = props['musician_email'];
var this_created_time = props['created_time'];
const this_views = ref('-');
var formatted_created_time = durationTime(this_created_time);

var url = props['url'];

var video01_inst = props['video01_inst'];
var video02_inst = props['video02_inst'];
var video03_inst = props['video03_inst'];
var video04_inst = props['video04_inst'];

//console.log('current_user_email');
//console.log(current_user_email);
const fan_button_tooltip_text = ref('');
const like_button_tooltip_text = ref('');

const fan_button_tooltip_hidden = ref(false);
const like_button_tooltip_hidden = ref(false);

is_fan.value = await get_fan(musician_email, current_user_email);
is_liked.value = await get_jam_like(url, current_user_email);
//console.log("is_liked");
//console.log(is_liked.value);

var is_login = false;

var desc2 = props['description']?.replace('\\n','\n');
var desc3 = desc2?.replace('\\n','\n');
var desc4 = desc3?.replace('\\n','\n');
var desc5 = desc4?.replace('\\n','\n');



var title = "4-piece collaboration - " + video01_inst + ", " + video02_inst + ", " + video03_inst + " and " + video04_inst + ".";



if (current_user_email != undefined) {
  if (current_user_email.localeCompare('unregistered')==0) {
    // set tooltips  
    fan_button_tooltip_text.value = 'Login to be a fan!!';    
    like_button_tooltip_text.value = 'Login to like this video!!';
    is_login = false;
  } else {
    is_login = true;
    if (!is_fan.value) {
      fan_button_tooltip_hidden.value = false;
      fan_button_tooltip_text.value = 'Become a fan!!'; 
    } else {
      fan_button_tooltip_hidden.value = true;
    }

    if (!is_liked.value) {
      like_button_tooltip_hidden.value = false;
      like_button_tooltip_text.value = 'Like this video!!';
    } else {
      like_button_tooltip_hidden.value = true;
    }
  }
}


let intervalId: any;
  onMounted(async () => {
    //premium_coin.value = await get_token(premium_coin_realm_id, props.email);
    
    intervalId = setInterval(async () => {
        //count.value++; // Access and update the value of the ref
        //fuzik_token.value = count.value.toString();
        this_views.value = await get_view(url);

    }, 3000); // Update every 10000 milliseconds (10 second) - 9 minutes
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  
async function get_view(url: any) {

  var uri = '/api/get_jam2_count?j=' + encodeURIComponent(String(url));
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

async function toggleFan() {
  // to toggle fans
  if (!is_login) {
    navigateTo('/webapp/login');
  } else {
    var fan_val = '';
    if (is_fan.value) {
      // swap
      fan_val = 'No';
      fan_button_tooltip_hidden.value = false;
      fan_button_tooltip_text.value = 'Become a fan!!'; 
    } else {
      fan_val = 'Yes';
      fan_button_tooltip_hidden.value = true;
    }

    is_fan.value = !is_fan.value
    add_fan(musician_email, current_user_email,fan_val);
  }
}

async function toggleLike() {
  // to toggle like
  if (!is_login) {
    navigateTo('/webapp/login');
  } else {
    var like_val = '';
    if (is_liked.value) {
      // swap
      like_val = 'No';
      like_button_tooltip_hidden.value = false;
      like_button_tooltip_text.value = 'Like this video!!'; 
    } else {
      like_val = 'Yes';
      like_button_tooltip_hidden.value = true;
    }

    is_liked.value = !is_liked.value
    add_jam_like(url, current_user_email, like_val);
  }
}

async function showModal() {
  const shareUrl = new URL('/webapp/jam_watch/' + encodeURIComponent(String(url)), window.location.origin).href;
  try {
    await navigator.clipboard.writeText(shareUrl);
    shareMessage.value = "The video's url is copied to clipboard.";
  } catch {
    shareMessage.value = 'Unable to access the clipboard. Copy this link: ' + shareUrl;
  }
  isOpen.value = true;
}

async function closeModal() {
  /*
  this.visibleModal = false
  this.$modal.hide('share-modal')
  */
}

async function get_profile_pic(musician_display_name: any) {

  var uri = '/api/get_display_picture?musician_name=' + encodeURIComponent(String(musician_display_name))

  var default_image = 'https://media05.fuzikapp.com/app/music_staff.png';

  try {
    const response = await fetch(uri);
    const pic = await response.json();
    //const { data: song } = await useFetch(uri)

    // const response = await fetch(url);
    //const song = await response.json();
    if (pic.length > 0) {
      if (pic[0].profile_pic.length > 0) {
        return 'https://media05.fuzikapp.com/' + pic[0].profile_pic
      } else {
        return default_image;
      }
    } else {
      return default_image;
    }
  } catch (error) {
    return default_image;
  }
}

async function get_fan(musician_email: any, user_email: any) {

  var uri = '/api/get_fan?musician_email=' + encodeURIComponent(String(musician_email)) + '&user_email=' + encodeURIComponent(String(user_email))


  try {
    const response = await fetch(uri);
    const fan = await response.json();

    if (fan.length > 0) {
      if (fan[0].result.length > 0) {
        if (fan[0].result.localeCompare("Yes")==0) {
          //console.log("Hello1");
          return true;
        } else {
          //console.log("Hello2");
          return false;
        }      
      } else {
        //console.log("Hello3");
        return false;
      }
    } else {
      //console.log("Hello4");
      return false;
    }
  } catch (error) {
    //console.log("Hello5");
    return false;
  }
}

async function add_fan(musician_email: any, user_email: any, fan_value: any) {

  var uri = '/api/add_fan?musician_email=' + encodeURIComponent(String(musician_email)) + '&user_email=' + encodeURIComponent(String(user_email)) + '&fan=' + encodeURIComponent(String(fan_value))

  try {
    const response = await fetch(uri);
    const fan = await response.json();
    //const { data: song } = await useFetch(uri)

    //console.log("fan");
    //console.log(fan);
    // const response = await fetch(url);
    //const song = await response.json();
    if (fan.length > 0) {
      if (fan[0].result.length > 0) {
        //console.log("fan_result");
        //console.log(fan[0].result);
        
        // The operation is successful regardless the result.
        return true;
        
      } else {
        //console.log("Hello3");
        return false;
      }
    } else {
      //console.log("Hello4");
      return false;
    }
  } catch (error) {
    //console.log("Hello5");
    return false;
  }
}

async function get_jam_like(jam2_url: any, user_email: any) {

  var uri = '/api/get_jam_like?jam2_url=' + encodeURIComponent(String(jam2_url)) + '&user_email=' + encodeURIComponent(String(user_email))

  try {
    const response = await fetch(uri);
    const fan = await response.json();

    if (fan.length > 0) {
      if (fan[0].result.length > 0) {
        if (fan[0].result.localeCompare("Yes")==0) {
          //console.log("Hello1");
          return true;
        } else {
          //console.log("Hello2");
          return false;
        }      
      } else {
        //console.log("Hello3");
        return false;
      }
    } else {
      //console.log("Hello4");
      return false;
    }
  } catch (error) {
    //console.log("Hello5");
    return false;
  }
}


async function add_jam_like(jam2_url: any, user_email: any, like_value: any) {

var uri = '/api/add_jam_like?jam2_url=' + encodeURIComponent(String(jam2_url)) + '&user_email=' + encodeURIComponent(String(user_email)) + '&like=' + encodeURIComponent(String(like_value))

try {
  const response = await fetch(uri);
  const fan = await response.json();
  //const { data: song } = await useFetch(uri)

  //console.log("fan");
  //console.log(fan);
  // const response = await fetch(url);
  //const song = await response.json();
  if (fan.length > 0) {
    if (fan[0].result.length > 0) {
      //console.log("fan_result");
      //console.log(fan[0].result);
      
      // The operation is successful regardless the result.
      return true;
      
    } else {
      //console.log("Hello3");
      return false;
    }
  } else {
    //console.log("Hello4");
    return false;
  }
} catch (error) {
  //console.log("Hello5");
  return false;
}
}


function adjustDate(dateString: any) {
  const date = new Date(Date.parse(dateString));
  const d = new Date()
  let diff = d.getTimezoneOffset();

  const new_date = new Date(date.getTime() + ((diff / -60) * 3600 * 1000));
  return (new_date.toUTCString()).substring(0, 16) + ' ' + new_date.toLocaleTimeString();
  //return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

}

function durationTime(dateString: any) {
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

// run after page load
/*
onMounted(() => {
if (process.client) {
  //alert('Component just got mounted')
  //console.log(durationTime(props['updated_time']));
}
})
*/

/*
useHead({
    script: [{
                src: 'https://media05.fuzikapp.com/app/flowbite.min.js',
            }],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://media05.fuzikapp.com/app/flowbite.min.css',

        }
    ]
}); */


</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
  /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 220px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 200%;
  left: 50%;
  margin-left: -350%; 
  

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


.tooltip2 {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
  /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip2 .tooltiptext2 {
  visibility: hidden;
  width: 220px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 200%;
  left: 50%;
  margin-left: -5px; 
  
  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip2 .tooltiptext2::after {
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
.tooltip2:hover .tooltiptext2 {
  visibility: visible;
  opacity: 1;
}

</style>
