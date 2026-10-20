  <template>
    <div class="lg:container lg:mx-auto px-0 lg:px-2 py-0 lg:py-4">  
      <ClientOnly>
        <VideoPanel2 :video_location="video_location" :youtube-url="youtube_url" :preview="preview" :title="video_title" />
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
          :is-published="isPublished"
          @modify="modifyVideo"
        />
      </ClientOnly>

      <div
        v-if="showModifyForm"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <div class="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-lg p-6 text-white">

        <div class="text-lg font-semibold mb-4">
          Modify Video
        </div>


        <div class="space-y-4">

          <div>
            <label class="block text-sm text-gray-400 mb-1">
              Video title
            </label>
            <input
              v-model="modifyTitle"
              type="text"
              class="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">
              Description
            </label>
            <textarea
              v-model="modifyDescription"
              rows="4"
              class="w-full px-3 py-2 rounded bg-gray-800 text-white"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">
              Music title
            </label>
            <input
              v-model="modifyMusicTitle"
              type="text"
              class="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">
              Original performer
            </label>
            <input
              v-model="modifyOriginal"
              type="text"
              class="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-1">
              Instrument
            </label>
            <input
              v-model="modifyInstrument"
              type="text"
              class="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div class="flex gap-2">
            <button
              type="button"
              @click="showModifyForm = false"
              class="px-4 py-2 bg-gray-600 rounded"
            >
              Cancel
            </button>

            <button
              type="button"
              @click="saveModifyVideo"
              class="px-4 py-2 bg-yellow-300 text-gray-900 rounded"
            >
              Save
            </button>
          </div>

        </div>
        </div>
      </div>

      <CollabWatch 
        :dimension="dimension"
        :video01_url="video01_url" >
      </CollabWatch>


      <div id="consent_form" v-show="cookie_form_visible" class="fixed w-3/4 bottom-4 right-1 lg:right-4 p-4 bg-white border-t-4 shadow-lg">
        <h2 class="text-lg lg:text-xl mb-4 block font-bold leading-tight text-gray-600">Cookie Policy</h2>
        <div class="lg:flex lg:space-x-5">
          <p class="mb-5 font-medium text-gray-600">
            We collect cookies to analyze our website traffic and performance. This website use cookies to help you have a superior and more relevant browsing experience. To find out more about the cookies we use, check out our <a href="/cookie" target="_blank"><u>Cookie Policy</u></a> and <a href="/webapp/privacy" target="_blank"><u>Privacy Policy</u></a>.
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

      <div v-if="showToast"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-gray-900 text-white px-5 py-3 rounded-lg shadow-lg"
      >
        {{ toastMessage }}
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

  var app_location = 'https://www.fuzikapp.com/webapp/';
  var media_location = 'https://media05.fuzikapp.com/';


    definePageMeta({
       layout: "main"
    })
   
   const video_location = ref('')
   const youtube_url = ref('')

   const video_title = ref('')
   const musician_name = ref('')
   //const profile_pic = ref('https://media05.fuzikapp.com/app/music_staff.png')

   //const view_count = ref(0)
   const is_fans= ref(true)
   const is_liked = ref(false)
   const desc = ref('')
   const url = ref('')

   const preview = ref('')
   
   const updated_time = ref('')
   const created_time = ref('')

   const resized = ref(false);

   const showModifyForm = ref(false);
   const isPublished = ref(true);

   const music_title = ref('');
   const original_performer = ref('');
   const instrument = ref('');

   const modifyTitle = ref('');
   const modifyDescription = ref('');
   const modifyMusicTitle = ref('');
   const modifyOriginal = ref('');
   const modifyInstrument = ref('');

   const showToast = ref(false);
   const toastMessage = ref('');

   function showToastMessage(message: string) {
    toastMessage.value = message;
    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }

   function modifyVideo() {
    console.log('EDIT CLICKED');

    modifyTitle.value = video_title.value;
    modifyDescription.value = desc.value;
    modifyMusicTitle.value = music_title.value;
    modifyOriginal.value = original_performer.value;
    modifyInstrument.value = instrument.value;

    showModifyForm.value = true;
  }

   async function saveModifyVideo() {
    console.log('SAVE CLICKED');

    const params = new URLSearchParams();

    params.append('p', url.value);
    params.append('musician2_email', musician_email);
    params.append('video_title', modifyTitle.value);
    params.append('description', modifyDescription.value);
    params.append('music_title', modifyMusicTitle.value);
    params.append('original', modifyOriginal.value);
    params.append('instrument', modifyInstrument.value);

    try {
      const result = await $fetch('/api/modify_playvideo2?' + params.toString());

      console.log('Modify result:', result);

      if (result.status === 200) {
        let backendResult;

        try {
          backendResult = JSON.parse(result.response);
        } catch {
          console.log('Backend returned non-JSON response:', result.response);
          showToastMessage('Failed to update video. Please try again.');
          return;
        }

        console.log('Backend result:', backendResult);

        if (backendResult[0]?.result === 'Success') {
          showToastMessage('Video updated successfully!');

          video_title.value = modifyTitle.value;
          desc.value = modifyDescription.value;
          music_title.value = modifyMusicTitle.value;
          original_performer.value = modifyOriginal.value;
          instrument.value = modifyInstrument.value;

          showModifyForm.value = false;
        } else {
          console.log('Backend modify failed:', backendResult);
          showToastMessage('Failed to update video. Please try again.');
        }
      } else {
        console.log(
          'Modify API failed:',
          result.status,
          result.response
        );

        showToastMessage('Failed to update video. Please try again.');
      }
    } catch (error) {
      console.error('Modify request error:', error);
      showToastMessage('Failed to update video.');
    }
  }
   
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

   var uri = '/api/play2_watch?p=' +  encodeURIComponent(String(p))
  
   var video2_url = '';
   var video01_url = p;

   try {
  const response = await fetch(uri);
  const song = await response.json();

  let videoData = song?.[0];

    if (!videoData && current_user_email !== 'unregistered') {
      const landscapeResponse = await fetch(
        '/api/my_play2s_l/?musician2_email=' +
        encodeURIComponent(current_user_email)
      );

      const portraitResponse = await fetch(
        '/api/my_play2s_p/?musician2_email=' +
        encodeURIComponent(current_user_email)
      );

      const landscapeVideos = await landscapeResponse.json();
      const portraitVideos = await portraitResponse.json();

      const inventoryVideos = [
        ...(Array.isArray(landscapeVideos) ? landscapeVideos : []),
        ...(Array.isArray(portraitVideos) ? portraitVideos : [])
      ];

      videoData = inventoryVideos.find(
        (video) => video.url === p
      );
    }

    if (!videoData) {
      throw new Error('Video not found');
    }
  

  
  //const { data: song } = await useFetch(uri)
  
  // const response = await fetch(url);
  //const song = await response.json();
  
  //console.log(uri);
    //console.log(song[0]);

  
  //var data_song:any;

  //data_song = song

  video_location.value = videoData.video_location || ''
  youtube_url.value = videoData.youtube_url || ''
  musician_name.value = videoData.musician_name

  //console.log(musician_name.value)
  video_title.value = videoData.video_title
  //view_count.value = song[0].view_count //song2[0].view_count
  desc.value =videoData.description

  music_title.value = videoData.music_title
  original_performer.value = videoData.original_performer
  instrument.value = videoData.instrument

  musician_email = videoData.musician_email;
  //console.log(view_count.value);

  url.value = videoData.url || p;
  video2_url = videoData.url || p;

  updated_time.value = videoData.updated_time
  created_time.value = videoData.created_time

  if (videoData.resized?.localeCompare('1') === 0) {
      resized.value = true;
    }

  //console.log('song[0].resized');
  //console.log(song[0].resized);

  //console.log('resized');
  //console.log(resized.value);

  preview.value = videoData.preview || '';
  
  dimension.value = videoData.dimension || '';
  //console.log("dimension: " + dimension.value);

  
  isPublished.value = videoData.void !== '1';

  if (isPublished.value) {

  //setTimeout(count_view,5000);
    var url_add_count = '/api/add_play2_count?p=' + encodeURIComponent(String(video2_url)) + '&email=' + encodeURIComponent(String(current_user_email))
  //const response2 = await fetch(url_count);
  
    const { data, pending, error, refresh } = await useFetch(url_add_count,  {
    server: false
    });
  }
  } catch (error) {
    console.error('Failed to load video:', error);
    //navigateTo('/')
  }

//const video_view_count = ref(0);
/*
var data_view_count: any;

try {
  var url_count = '/api/get_play2_count?p=' + encodeURIComponent(String(video2_url))
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