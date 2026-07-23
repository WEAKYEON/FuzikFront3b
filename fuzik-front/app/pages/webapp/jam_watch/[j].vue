<template>
    <div class="lg:container lg:mx-auto px-0 lg:px-2 py-0 lg:py-4">
      <ClientOnly>
        <JamPanel :file_location="file_location" />        
        <JamDescription :owner_display_name="owner_display_name"
            
            :video01_inst="video01_inst"
            :video02_inst="video02_inst"
            :video03_inst="video03_inst"
            :video04_inst="video04_inst"

            :description="description"
            :url="url" :updated_time="updated_time" 
            :musician_email="musician_email"
            :user_email="current_user_email" 
            :created_time="created_time" />
      </ClientOnly>
      <CollabWatch3 

        :jam_url="jam_url"
        :layout_l_num="layout_l_num"
        :layout_p_num="layout_p_num"
        
        :video01_url="video01_url" 
        :video02_url="video02_url" 
        :video03_url="video03_url" 
        :video04_url="video04_url" 

      >
      </CollabWatch3>
    </div>
</template>

<script setup lang="ts">
//import { NuxtLayout } from '#build/components';

//import nuxtStorage from 'nuxt-storage'

var app_location = 'https://www.fuzikapp.com/';
var media_location = 'https://media04.tetraserver.com/';

definePageMeta({
    layout: "mainyellow"
})

const file_location = ref('');
const owner_display_name = ref('');
const owner_display_pic = ref('');

//const profile_pic = ref('https://media04.tetraserver.com/app/music_staff.png')

//const view_count = ref(0)
const is_fans = ref(true)
const is_liked = ref(false)
const description = ref('')
const url = ref('')

const preview = ref('')

const video01_inst = ref('');
const video02_inst = ref('');
const video03_inst = ref('');
const video04_inst = ref('');

var video01_url = '';
var video02_url = '';
var video03_url = '';
var video04_url = '';

var layout = '';

var layout_l_num = '';
var layout_p_num = '';

const updated_time = ref('')
const created_time = ref('')

//const resized = ref(false);

var current_user_email = 'unregistered';
var musician_email = '';

const client = useSupabaseClient();

//const { data, error } = await client.auth.refreshSession();
const { data, error } = await client.auth.getSession();
const { session } = data;

if (session == null) {
    // do nothing
} else {
    const user = await client.auth.getUser();
    // User login
    if (user.data.user?.email != undefined) {
        current_user_email = user.data.user?.email;
        //console.log(email)
    }
}

//   if (nuxtStorage.localStorage.getData('current_user_email') != undefined) {
//    current_user_email = nuxtStorage.localStorage.getData('current_user_email');
//   }

const route = useRoute();

const { j } = useRoute().params

var uri = '/api/jam2_watch?j=' + j;

var jam_url = j;
//var video2_url = ''

try {
    const response = await fetch(uri);
    const song = await response.json();

    file_location.value = media_location + song[0].file_location
    owner_display_name.value = song[0].owner_display_name

    owner_display_pic.value = 'https://media04.tetraserver.com/app/music_staff.png';
    if (song[0].owner_display_pic.length > 0) {
        owner_display_pic.value = media_location + song[0].owner_display_pic;
    }

    //console.log(musician_name.value)
    //video_title.value = song[0].video_title
    //view_count.value = song[0].view_count //song2[0].view_count
    description.value = song[0].description;
    musician_email = song[0].musician_email;
    //console.log(view_count.value);

    url.value = song[0].url

    //video2_url = song[0].url
    video01_inst.value = song[0].video01_instrument;
    video02_inst.value = song[0].video02_instrument;
    video03_inst.value = song[0].video03_instrument;
    video04_inst.value = song[0].video04_instrument;    

    layout = song[0].layout_name;

    video01_url = song[0].video01_url;
    video02_url = song[0].video02_url;
    video03_url = song[0].video03_url;
    video04_url = song[0].video04_url;

    layout_l_num = song[0].layout_l_num;
    layout_p_num = song[0].layout_p_num;
    
    //console.log("layout_name: " + layout);

    updated_time.value = song[0].updated_time;
    created_time.value = song[0].created_time;

    //if (song[0].resized.localeCompare('1') == 0) {
    //    resized.value = true;
    //}

    preview.value = song[0].preview

    //setTimeout(count_view,5000);
    var url_add_count = '/api/add_jam2_count?j=' + j + '&email=' + current_user_email
    //const response2 = await fetch(url_count);


    const { data, pending, error, refresh } = await useFetch(url_add_count, {
        server: false
    });

} catch (error) {
    //navigateTo('/')
    console.log(error);
}

/*
const video_view_count = ref(0)
var data_view_count: any;


try {
    var url_count = '/api/get_jam2_count?j=' + j;
    //const response2 = await fetch(url_count);

    const { data: get_view, pending, error, refresh } = await useFetch(url_count, {
        //server: false,

    })

    //const response2 = await fetch(url_count);
    data_view_count = get_view

    //console.log(url_count)
    //console.log(data_view_count)
    var raw_value = JSON.parse(JSON.stringify(data_view_count))._rawValue[0];
    //raw_value

    //console.log(data_view_count)
    //console.log('res2' + raw_value.view_count)
    video_view_count.value = raw_value.view_count

} catch (error) {
    console.log(error)
    video_view_count.value = 0
}

view_count.value = video_view_count.value;
*/


/*
window.addEventListener('load', (event) => {
console.log('page is fully loaded');
})
;
*/

//}
var instrument_list = '';

if (layout.localeCompare("4_01")) {
  instrument_list = '';
}

const title = ref('Jam by ' + owner_display_name.value + ' ' + adjustDate(created_time.value) + ' - Fuzik collaboration')

//const description = ref('My App Description')

const page_description = ref('Fuzik collaboration - ' + description.value);
const og_preview = ref(media_location + preview.value);

// This will be reactive when you change title/description above
useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    },
    {
        property: 'og:image',
        content: og_preview.value
    },
    {
        property: 'og:image:secure_url',
        content: og_preview.value
    },
    {
        property: 'og:image:type',
        content: 'image/png'
    },
    {
        property: 'og:image:width',
        content: '1280'
    },
    {
        property: 'og:image:height',
        content: '720'
    },
    {
        property: 'og:title',
        content: title.value
    },
    {
        property: 'og:url',
        content: app_location + 'watch/' + url.value
    },
    {
        property: 'og:site_name',
        content: 'Fuzik collaboration'
    },
    {
        property: 'og:description',
        content: page_description
    },
    {
        property: 'og:type',
        content: 'profile'
    },
    {
        property: 'fb:app_id',
        content: '1145239953178500'
    },
    ],

});

function adjustDate(dateString) {
  const date = new Date(Date.parse(dateString));
  const d = new Date()
  let diff = d.getTimezoneOffset();

  const new_date = new Date(date.getTime() + ((diff / -60) * 3600 * 1000));
  return (new_date.toUTCString()).substring(0, 16) + ' ' + new_date.toLocaleTimeString();
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

</script>

<style scoped></style>