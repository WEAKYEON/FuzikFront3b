<template>
  <div>
    <form id="main_form" action="/video_info_success" method="POST" @submit.prevent="send_data()">
      {{ display }}
      <div class="flex gap-2">
        <div class="flex-initial max-h-96">
          <video id="my_video" controls onended="" class="max-h-96">
            <source :src="video_source" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="flex-initial max-h-96">
          <div class="grid grid-cols-1 gap-2">
            <input type="text" id="video_title" v-model="video_title" placeholder="Video Title"
              class="w-full border border-gray-400 rounded-xl py-2 px-2 text-black dark:text-black">
            <textarea placeholder="Description" v-model="description" rows="4"
              class="w-full border border-gray-400  rounded-xl py-2 px-2 text-black dark:text-black"></textarea>
            <input type="text" v-model="music_title" placeholder="Music Title"
              class="w-full border border-gray-400 rounded-xl py-2 px-2 text-black dark:text-black">
            <input type="text" v-model="original" placeholder="Original Writer/Performer"
              class="w-full border border-gray-400 rounded-xl py-2 px-2 text-black dark:text-black">

            <input type="text" v-model="instrument" placeholder="Instrument"
              class="w-full border border-gray-400 rounded-xl py-2 px-2 text-black dark:text-black">
            <div class="flex items-center gap-1">
              <input id="agree-chk" v-model="is_agree" type="checkbox" value="" @change="agree()"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"> <label
                for="link-checkbox" class="ms-2 text-sm font-medium text-white ">I confirm that I have read and accept the terms of this User Agreement.
              </label>
            </div>
            <div class="flex items-center gap-1">
              <input id="agree-chk" v-model="is_agree" type="checkbox" value="" @change="agree()"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"> <label
                for="link-checkbox" class="ms-2 text-sm font-medium text-white ">I hereby declare that the song is in
                the public domain. 
              </label>
            </div>
          </div>
          <div class="align-bottom py-1 mt-auto gap-2">
            <button id="btn_submit" type="submit" class="btn btn-disabled w-100%" disabled="true">Save video's
              information</button>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script setup lang="ts">

const is_auth = ref(false);
//const profile_image = ref('images\music_staff.png');

const client = useSupabaseClient();

//const { data, error } = await client.auth.refreshSession()
//const { session, user } = data

const display = ref('')

const video_title = ref('')
const description = ref('')
const music_title = ref('')
const original = ref('')
const instrument = ref('')


const is_agree = ref(false)
//const is_rotate = ref(false)

//import nuxtStorage from 'nuxt-storage'

const cookie_video_location = useCookie("video_location");
const cookie_upload_width = useCookie("upload_width");
const cookie_upload_height = useCookie("upload_height");

const cookie_current_url = useCookie("current_url");

//var video_location = nuxtStorage.localStorage.getData('video_location');
//var upload_width = nuxtStorage.localStorage.getData('upload_width');
//var upload_height = nuxtStorage.localStorage.getData('upload_height');

var video_location = '';

var video_location_display = '';

var upload_width = '';
var upload_height = '';

if (cookie_video_location.value != undefined) { 
  video_location = cookie_video_location.value; 
}

if (cookie_upload_width.value != undefined) {
  upload_width = cookie_upload_width.value;
}

if (cookie_upload_height.value != undefined) {
  upload_height = cookie_upload_height.value;
}

var allowed = true;

var dimension = '';

if ((video_location == null) || (video_location == '')) {
  allowed = false
} else if ((upload_width == null) || (upload_width == '')) {
  allowed = false
} else if ((upload_height == null) || (upload_height == '')) {
  allowed = false
}

var email = '';

const user = await client.auth.getUser();
  // User login
  if (user.data.user?.email != undefined) {
      email = user.data.user?.email;    
      //console.log(email)
  }

if (email == '') {
  allowed = false;
}

if (!allowed) {
  display.value = 'Direct access not allowed'
  navigateTo('/')
} else {
  //console.log('width: ' + upload_width)
  if (upload_width >= upload_height) {
    dimension = 'L'
  } else {
    dimension = 'P'
  }
}

//console.log('dimension #1: ' + dimension)

//console.log('file_location: ' + video_location.replace('uploads/videos/',''));
/*
const rotate_value = await check_rotaion(video_location.replace('uploads/videos/',''));
console.log('Rotate value: ' + rotate_value);

if (rotate_value.localeCompare('Rotate')==0) {
  console.log('Should Rotate');

    if (dimension.localeCompare('L') == 0) {
      dimension = 'P';
    } else if (dimension.localeCompare('P') == 0) {
      dimension = 'L';
    }
}*/

//console.log('dimension #2: ' + dimension)


/*
var lll = display_name.value.trim() + 
        "&email=" + email.value.trim() +
        "&first_name=" + first_name.value.trim() +
        "&last_name=" + last_name.value.trim() + 
        "&genre=" + genre.value.trim() +
        "&instrument=" + instrument.value.trim() +
        "&tel=" + tel.value.trim();
*/

//var this_video = document.getElementById('my_video')

//alert('Height: ' + this_video.videoHeight)

var video_source2 = 'https://media05.fuzikapp.com/uploads/videos/1702955307_01-piano.mp4';
//var preview_source2= 'https://media05.fuzikapp.com/uploads/videos/1703490031_VID_20230228_214520.png'
var video_source = 'https://media05.fuzikapp.com/' + await encrypt_video_location(video_location);
//' 'uploads/videos/1702955307_01-piano.mp4'
//var this_video = document.getElementById('my_video')

//display.value = video_source

async function agree() {
  const checkbox = document.getElementById('agree-chk',
  ) as HTMLInputElement | null;
  const btn_submit = document.getElementById('btn_submit',
  ) as HTMLButtonElement | null;


  if (checkbox != undefined) {
    if (btn_submit != null) {
      if (is_agree.value) {
        btn_submit.disabled = false;

        //console.log('A')
        btn_submit.classList.remove("btn-disabled");
        btn_submit.classList.add("btn-yellow");
      } else {
        btn_submit.disabled = true;
        //console.log('B')

        btn_submit.classList.add("btn-disabled");
        btn_submit.classList.remove("btn-yellow");
      }
    }
    //console.log('Clicking')
    //console.log(is_agree.value)
  }
}

async function send_data() {
  //alert('Send data')
  var allowed = await check_input()

  var accept = 'N';
  var public_domain = 'N';

  if (is_agree.value) {
    accept = 'Y';
    public_domain = 'Y';
  }

  var main_form = <HTMLFormElement>document.getElementById('main_form');
  if (main_form != null) {

    if (allowed) {
      var input = '?video_title=' + video_title.value +
        '&description=' + description.value +
        '&music_title=' + music_title.value +
        '&video_location=' + video_location +
        '&original=' + original.value +
        '&instrument=' + instrument.value +
        '&musician2_email=' + email +
        '&dimension=' + dimension +
        '&width=' + upload_width +
        '&height=' + upload_height +
        '&accept=' + accept +
        '&public_domain=' + public_domain;

      //alert(input);
      var url = '/api/upload_playvideo2' + input;
      //console.log(url);
      //alert(url);

      const response = await fetch(url);
      const song = await response.json();
      //console.log(song);
      //alert(song[0].result)

      //[{"result": "Success", "description": "?video_title=10-second Canon in D - Piano&description=Test software function&music_title=Canon in D&video_location=uploads/videos/1704730601_01-Piano.mp4&original=Pachelbel&instrument=Piano&musician2_email=omiemacbook@gmail.com&dimension=L&width=1280&height=720&accept=Y&public_domain=Y"}]
      // --> Success
      if (song[0].result == 'Success') {
        cookie_current_url.value = song[0].description;

        //nuxtStorage.localStorage.setData('current_url', song[0].description);
        //alert(song[0].description)
        main_form.submit();  
      }
      
    } else {
      //alert('')
    }
  }
}

async function check_input() {
  var allowed = true;
  var errorMsg = ref('');
 
  if (allowed) {
    if (video_title.value.length == 0) {
      errorMsg.value = "Video title cannot be blank.";
      allowed = false;
    } else if (description.value.length == 0) {
      errorMsg.value = "Description cannot be blank.";
      allowed = false;
    } else if (music_title.value.length == 0) {
      errorMsg.value = "Music title cannot be blank.";
      allowed = false;
    } else if (original.value.length == 0) {
      errorMsg.value = "Original performer cannot be blank.";
      allowed = false;
    } else if (instrument.value.length == 0) {
      errorMsg.value = "Musical instrument cannot be blank, you can put'General'.";
      allowed = false;
    } else {
      allowed = true;
    }

    /*
    if (!isAlphanumeric(video_title.value)) {
      errorMsg.value = "Only alphabet and number are allowed in video title's field.";  
      allowed = false;
    } else if (!isAlphanumeric(description.value)) {    
      errorMsg.value = "Only alphabet and number are allowed in description's field.";
      allowed = false;
    } else if (!isAlphanumeric(music_title.value)) {
      errorMsg.value = "Only alphabet and number are allowed in music title's field.";
      allowed = false;
    } else if (!isAlphanumeric(original.value)) {
      errorMsg.value = "Only alphabet and number are allowed in original performer's field.";
      allowed = false;   
    } else if (!isAlphanumeric(instrument.value)) {  
      errorMsg.value = "Only alphabet and number are allowed in musical instrument's field.";
      allowed = false;
    } else {
      allowed = true;
    }*/
  }

  if (!allowed) {
    alert(errorMsg.value);
  }
  return allowed;
}

function isAlphanumeric(str: string) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

async function encrypt_video_location(original_location:string) {
  var result = '';

  //need to match with media server Scaramouche!!
  var caesar1 = 'MUbzFknEOsjG7HaKgYov.62d9VlRZfpyWcq_1D0PS3QT45LNiIAmCBx8teJrhX-uw'
  var caesar2 = 'sY6ndv30.jHQVNBmEo5eLXKSGcFZ8R1bpDAa_iMlTuw9t2IUxgqO4kzrC7JyhWP-f'

  var location = original_location.replace('uploads/videos/','');

  var location_len = location.length;

  var code ='';

  for (let i = 0; i < location_len; i++) {

    let pos = caesar1.indexOf(location[i]);

    code += caesar2[pos];

  }
  
  result = 'stream/video_stream.php?code=' + code;

  return result;
}

async function check_rotaion(file_location) {

  const response_text = ref('');
  var url = 'https://media05.fuzikapp.com/rotation_check.php?video_location=' + file_location;
      //console.log('check rotation: ' + url);
      //alert(url);

  const response = await fetch(url);
 
  await response.text().then(function (text) {
    //console.log(text);
    if (response_text.value.length ==0 ){
      response_text.value = '' + text;
    }
    
  });
  //console.log("response_text" + response_text.value.trim());

  return response_text.value.trim();
 
}

definePageMeta({
  layout: "main"
})
</script>

<style scoped>
@reference "tailwindcss";

.btn {
  @apply font-bold py-2 px-4 w-full rounded-xl;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}

.btn-yellow {
  @apply bg-yellow-500 text-white;
}

.btn-disabled {
  @apply bg-gray-500 text-black;
}


.btn-yellow:hover {
  @apply bg-yellow-700;
}
</style>
