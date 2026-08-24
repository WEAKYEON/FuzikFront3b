<template>
   <div class="lg:container lg:mx-auto px-0 lg:px-2 py-0 lg:py-4">  
    <ClientOnly>
      <VideoPanel2 :video_location="video_location" />
      <VideoDescription2
        :video_location="video_location"
        :title="video_title"
        :musician_name="musician_name"
      
        :desc="desc"
        :url="url"
        :updated_time="updated_time"

        :musician_email="musician_email"
        :user_email="current_user_email"

        :created_time="created_time"
        :resized="resized"
    />
    </ClientOnly>  
    <CollabWatch 
      :dimension="dimension"
      :video01_url="video01_url" >
    </CollabWatch>


    <div id="consent_form" v-show="cookie_form_visible" class="fixed w-3/4 bottom-4 right-1 lg:right-4 p-4 bg-white border-t-4 shadow-lg">
	    <h2 class="text-lg lg:text-xl mb-4 block font-bold leading-tight text-gray-600">Cookie Policy</h2>
	    <div class="lg:flex lg:space-x-5">
		    <p class="mb-5 font-medium text-gray-600">
          We collect cookies to analyze our website traffic and performance. This website use cookies to help you have a superior and more relevant browsing experience. To find out more about the cookies we use, check out our <a href="/cookie" target="_blank"><u>Cookie Policy</u></a> and <a href="/privacy" target="_blank"><u>Privacy Policy</u></a>.
        </p>
		    <button @click="accept()" 
		      class="w-full lg:w-48 px-3 py-1 bg-yellow-300 hover:bg-gray-200 hover:underline rounded text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs font-bold">
			    Accept
		    </button>
        <!-- 
        <button @click="decline()"
		      class="w-full lg:w-48 px-3 py-1 bg-gray-300 hover:bg-gray-200 hover:underline rounded text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs font-bold">
			    Decline
		    </button>
        -->
	    </div>
    </div>

  
   
   </div>
</template>
   
<script setup lang="ts">

  const cookie_form_visible = ref(true);
  // consent dialog

  const cookie_consent_form = useCookie("visitor",{ maxAge:  60 * 60 * 24 * 30 });
  cookie_consent_form.value = cookie_consent_form.value || ('No');
    
  if (cookie_consent_form.value.localeCompare('Yes')==0) {
      cookie_form_visible.value = false;
  } else {
      // Do nothing
  }

  function accept() {
    //console.log("AAA");
    //var max_age = 'max-age=' + (60 * 60 * 24 * 30);
    //const cookie = useCookie('visitor');
    cookie_consent_form.value = 'Yes';
    cookie_form_visible.value = false;

    //document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
  }

  //import { NuxtLayout } from '#build/components';

  //import nuxtStorage from 'nuxt-storage'

  var app_location = 'https://www.fuzikapp.com/';
  var media_location = 'https://media04.tetraserver.com/';


    definePageMeta({
       layout: "main"
    })
   
   const video_location = ref('')

   const video_title = ref('')
   const musician_name = ref('')
   //const profile_pic = ref('https://media04.tetraserver.com/app/music_staff.png')

   //const view_count = ref(0)
   const is_fans= ref(true)
   const is_liked = ref(false)
   const desc = ref('')
   const url = ref('')

   const preview = ref('')
   
   const updated_time = ref('')
   const created_time = ref('')

   const resized = ref(false);
   
   var current_user_email = 'unregistered';
   var musician_email = '';

   const dimension = ref('');
   //var video01_url = '';

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
   
   const { p }  = useRoute().params

   var uri = '/api/play2_watch?p=' +  p
  
   var video2_url = '';
   var video01_url = p;

   try {
  const response = await fetch(uri);
  const song = await response.json();
  

  
  //const { data: song } = await useFetch(uri)
  
  // const response = await fetch(url);
  //const song = await response.json();
  
  //console.log(uri);
    //console.log(song[0]);

  
  //var data_song:any;

  //data_song = song

  video_location.value = song[0].video_location
  musician_name.value = song[0].musician_name

  //console.log(musician_name.value)
  video_title.value = song[0].video_title
  //view_count.value = song[0].view_count //song2[0].view_count
  desc.value =song[0].description

  musician_email = song[0].musician_email;
  //console.log(view_count.value);

  url.value = song[0].url

  video2_url = song[0].url

  updated_time.value = song[0].updated_time
  created_time.value = song[0].created_time

  if (song[0].resized.localeCompare('1')==0) {
    resized.value = true;
  }

  //console.log('song[0].resized');
  //console.log(song[0].resized);

  //console.log('resized');
  //console.log(resized.value);

  preview.value = song[0].preview;

  dimension.value = song[0].dimension;
  //console.log("dimension: " + dimension.value);

  //setTimeout(count_view,5000);
  var url_add_count = '/api/add_play2_count?p=' + video2_url + '&email=' + current_user_email
  //const response2 = await fetch(url_count);
  
  const { data, pending, error, refresh } = await useFetch(url_add_count,  {
  server: false
  });

   } catch (error) {
    //navigateTo('/')
   }

//const video_view_count = ref(0);
/*
var data_view_count: any;

try {
  var url_count = '/api/get_play2_count?p=' + video2_url
  //const response2 = await fetch(url_count);
  
  const { data: get_view, pending, error, refresh } = await useFetch(url_count,  {
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

const title = ref(video_title.value + ' - Fuzik collaboration')
//const description = ref('My App Description')

const page_description = ref('Fuzik collaboration - ' + video_title.value);
const og_preview = ref(media_location + preview.value);

// This will be reactive when you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: desc
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

</script>
   
<style scoped>
   
</style>