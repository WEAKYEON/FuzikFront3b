<template>
 <div class="lg:container lg:mx-auto px-2 py-2 ">

    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-3/5 2xl:w-2/5 mx-auto py-6 lg:py-10  ">
      <form ref="search_form" target="_self"
            
          >
        <div class="flex flex-row justify-center items-center gap-1  bg-black p-1 rounded-xl divide divide-white text-white border-2 border-white">
          
        <div
        @click=""
        class="flex-1 text-center rounded-lg cursor-pointer bg-yellow-300 text-black"
        >
        <NuxtLink to="/webapp/index02">
          Solo
        </NuxtLink>
        </div>
          
          
        <div
        @click=""
        class="flex-1 text-center rounded-lg cursor-pointer bg-black text-yellow-300"
        >
        <NuxtLink to="/webapp">
        Collaboration
        </NuxtLink>
        </div>        
        
        </div>      
        <div class="py-4 flex flex-row-reverse gap-2 m-2 h-16 ">
              <button id="btn_submit" type="submit" @keyup.enter="search_enter" class="flex-none bg-yellow-400 text-black px-3 py-0.5 rounded-xl" >Search</button>
      
              <input 
                placeholder="Song name or artist name"
                type="text" 
                class="w-20 sm:w-max md:w-max lg:w-max xl:w-max 2xl:w-max flex-1 outline-none rounded-xl pl-4 pr-8 border-2 border-yellow-400 dark:border-yellow-400 text-base dark:text-black"
                v-model="q_input_bar" @keypress="" name="q"
              >
        </div>
      </form> 
    </div>
    <form ref="display_form" target="" @submit.prevent="" >
    <div class="flex flex-col space-y-2">
      
      <div v-show="show_landscape" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
        <div v-for="p in plays" >
          <VideosLandscape2 :play="p"/>
        </div>
      </div>
  <div class="text-right"><button class="btn" @click="togglePortrait" v-show="show_landscape_only_button"> {{ landscape_button }}</button></div>      

      <div v-show="show_portrait" id="videos_p" class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  gap-2 sm:gap-1 " > 
        <div v-for="p in plays_p">
          <VideosPortrait2 :play="p"/>
        </div>        
      </div>
      <div class="text-right"><button class="btn" @click="toggleLandscape" v-show="show_portrait_only_button" >{{ portrait_button }}</button></div>

      <div v-show="show_landscape" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
        <div v-for="p in plays_cont">
          <VideosLandscape2 :play="p"/>
        </div>
      </div>
    </div> 
    </form>

    <div class="text-center"  @click="scrollToTop">
      <div class=" btn">Back to top</div>
    </div>

    <div id="consent_form" v-show="cookie_form_visible" class="fixed w-3/4 bottom-4 right-1 lg:right-4 p-4 bg-white border-t-4 shadow-lg">
	    <h2 class="text-lg lg:text-xl mb-4 block font-bold leading-tight text-gray-600">Cookie Policy</h2>
	    <div class="lg:flex lg:space-x-5">
		    <p class="mb-5 font-medium text-gray-600">
          We collect cookies to analyze our website traffic and performance. This website use cookies to help you have a superior and more relevant browsing experience. To find out more about the cookies we use, check out our <a href="/webapp/cookie" target="_blank"><u>Cookie Policy</u></a> and <a href="/webapp/privacy" target="_blank"><u>Privacy Policy</u></a>.
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
  const cookie_consent_form = useCookie("visitor",{ maxAge:  60 * 60 * 24 * 30 });
  cookie_consent_form.value = cookie_consent_form.value || ('No');
  
  if (cookie_consent_form.value.localeCompare('Yes')==0) {
    accept();
    
  } else {
    cookie_form_visible.value = true;
  }


  
  function accept() {
    //console.log("AAA");
    var max_age = 'max-age=' + (60 * 60 * 24 * 30);
    const cookie = useCookie('visitor');
    cookie_consent_form.value = 'Yes';
    cookie_form_visible.value = false;

    //document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
  }

  // end consent dialo

  // Search function

  const search_form = ref<HTMLFormElement>();
  const q_input_bar = ref('');
  const route = useRoute();
  //const { q }  = useRoute();
  //const { mode }  = useRoute();

  var q_address_bar = route.query.q?.toString();

  const show_portrait = ref(true);
  const show_landscape = ref(true);
  const show_portrait_only_button = ref(true);
  const show_landscape_only_button = ref(true);

  /*
  console.log("mode:" + mode);

  if (mode.localeCompare('Horizontal')) {
    show_landscape = true;
    show_portrait = false;
  } else if (mode.localeCompare('Vertical')) {
    show_landscape = false;
    show_portrait = true;
  }
  */

  if (q_address_bar == undefined) {
    q_address_bar = '';
  } else {
    q_input_bar.value = q_address_bar;
  }
  //console.log(q_address_bar);


  const { data: plays } = await useFetch('/api/play2s_l/?limit=8&q=' + q_address_bar); 
  
  const { data: plays_p } = await useFetch('/api/play2s_p/?limit=6&q=' + q_address_bar);

  const { data: plays_cont } = await useFetch('/api/play2s_l/?start=9&q=' + q_address_bar);

  //  var lanscape_button = "Horizontal & Vertical";
  var landscape_button = "Landscape videos only";
  var portrait_button = "Portrait videos only";

 

  definePageMeta({
    layout: "main"
  })


  const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  function togglePortrait() {    
    show_portrait.value = !show_portrait.value;
    if (!show_portrait.value) {
      show_portrait_only_button.value = false;
      //if (show_landscape) {
        landscape_button = "Landscape and Portrait videos"          
      //}
    } else {
      show_portrait_only_button.value = true;
      //if (show_landscape) {
        landscape_button = "Landscape videos only"  
      //}
    }
  }

  function toggleLandscape() {    
    show_landscape.value = !show_landscape.value;
    if (!show_landscape.value) {
      show_landscape_only_button.value = false;
      portrait_button = "Portrait and Landscape videos"
    } else {
      show_landscape_only_button.value = true;
      portrait_button = "Portrait videos only"
    }
    
  }

  function search_enter() {
    //const search_form = ref<HTMLFormElement>()
    if (search_form.value != undefined) {
      search_form.value.submit();
    }
  }
  


</script>

<style scoped>

</style>