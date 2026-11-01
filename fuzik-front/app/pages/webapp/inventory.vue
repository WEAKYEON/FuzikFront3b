<template>
 <div class="lg:container lg:mx-auto px-2">
    
    <div class="w-full max-w-[608px] mx-auto pt-2.5 pb-6 lg:pb-10">
      <form ref="search_form" target="_self" >
        <div class="inventory-tabs">
          <NuxtLink to="/webapp/inventory" class="inventory-tab inventory-tab--active" aria-current="page">Solo</NuxtLink>
          <NuxtLink to="/webapp/inventory02" class="inventory-tab">Collaboration</NuxtLink>
        </div>
        <div class="inventory-search-row">
          <input
            v-model="q_input_bar"
            name="q"
            placeholder="Song name or artist name"
            type="search"
            aria-label="Search by song or artist"
          >
          <button id="btn_submit" type="submit">Search</button>
        </div>
        <div class="mt-6 text-center text-4xl text-yellow-300 dark:text-yellow-300">
        {{ inventory_name }}
        </div>
      </form>
    </div>

    <div class="flex flex-col space-y-2">
      <div  v-show="show_landscape"  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1">
        <div v-for="p in my_plays">
          <VideosLandscape2 :play="p"/>
        </div>
      </div>
      <div class="text-right"><button class="btn" @click="togglePortrait" v-show="show_landscape_only_button"> {{ landscape_button }}</button></div>

      <div  v-show="show_portrait"  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-1">
        <div v-for="p in my_plays_p">
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
    <div class="text-white dark:text-white text-center">
    {{ empty_message }}    
    </div>
    
    <div class="text-center" v-show="show_button"  @click="scrollToTop">
      <div class=" btn">Back to top</div>
    </div>

  </div>
</template>

<script setup lang="ts">

  //const cookie_form_visible = ref(true);
  const cookie_consent_form = useCookie("visitor");
  cookie_consent_form.value = cookie_consent_form.value || ('No');
    
  if (cookie_consent_form.value.localeCompare('Yes')==0) {
      //cookie_form_visible.value = false;
      // Do nothing
  } else {
      navigateTo('/');
  }

  //const current_mode = ref('Solo');

  const search_form = ref<HTMLFormElement>()
  const q_input_bar = ref('');
  const route = useRoute();

  var q_address_bar = route.query.q?.toString();

  const is_auth = ref(false);
  //const profile_image = ref('images\music_staff.png');

  const client = useSupabaseClient();
  const { data: { user } } = await client.auth.getUser()

  var email = user?.email;
  var data_musician: any;

  var display_name = '';
  
  var allowed = true;

  var email = user?.email;
  if (email == null) {
    allowed = false;
  }

  if (!allowed) {
    //display.value = 'Direct access not allowed'
    navigateTo('/webapp/login')
  }

  if (q_address_bar == undefined) {
    q_address_bar = '';
  } else {
    q_input_bar.value = q_address_bar;
  }


  if (email == null) {
    is_auth.value = false;
  
  } else {

    const url = '';
    const { data: musician, pending, error, refresh } = await useFetch('/api/musician2_detail/?email=' + encodeURIComponent(String(email)));
    
    data_musician = musician

    is_auth.value = true;

    var raw_value = data_musician.value[0];
    //console.log(raw_value)
    
    display_name = raw_value.display_name;    

  }

  var inventory_name = display_name + "'s inventory";

  const show_portrait = ref(true);
  const show_landscape = ref(true);
  const show_portrait_only_button = ref(true);
  const show_landscape_only_button = ref(true);

  const { data: plays } = await useFetch('/api/play2s_l/?limit=12&musician=' + encodeURIComponent(String(display_name)) + '&q=' + encodeURIComponent(String(q_address_bar)))
  const { data: plays_p } = await useFetch('/api/play2s_p/?musician=' + encodeURIComponent(String(display_name)) + '&q=' + encodeURIComponent(String(q_address_bar)))
  const { data: plays_cont } = await useFetch('/api/play2s_l/?start=13&musician=' + encodeURIComponent(String(display_name)) + '&q=' + encodeURIComponent(String(q_address_bar)));
  const { data: my_plays } = await useFetch('/api/my_play2s_l/?musician2_email=' + encodeURIComponent(String(email)))
  const { data: my_plays_p } = await useFetch('/api/my_play2s_p/?musician2_email=' + encodeURIComponent(String(email)))

  var landscape_button = "Landscape videos only";
  var portrait_button = "Portrait videos only";

  var empty_message = 'Your video(s) will appear here.';
  var plays_empty = false;
  var plays_p_empty = false;

  var show_button = true;

  if (typeof(plays.value) === 'object') {
      if (plays.value != null) {
        const isEmptyArray = plays.value && (plays.value as Array<any>)?.length === 0;
        if (isEmptyArray) {
          plays_empty = true;
        }
      }      
    }

  if (typeof(plays_p.value) === 'object') {
    if (plays_p.value != null) {
      const isEmptyArray = plays_p.value && (plays_p.value as Array<any>)?.length === 0;
      if (isEmptyArray) {
        plays_p_empty = true;
      }
    }      
  }

  if (plays_empty && plays_p_empty) {
    // Both empty
    var show_button = false;
  } else {
    // At leasyt 1 video
    empty_message = "";
    var show_button = true;
  }

  if (!show_button) {
    show_portrait_only_button.value = false;
    show_landscape_only_button.value = false;
  }

  definePageMeta({
    layout: "main"
  });

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
    if (!show_button) {
      show_portrait_only_button.value = false;
      show_landscape_only_button.value = false;
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
    if (!show_button) {
      show_portrait_only_button.value = false;
      show_landscape_only_button.value = false;
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
.inventory-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 3px;
  height: 36px;
  padding: 3px;
  color: #fff;
  background: #000;
  border: 2px solid #fff;
  border-radius: 12px;
}

.inventory-tab {
  display: grid;
  height: 26px;
  place-items: center;
  color: #ffe000;
  border-radius: 8px;
  text-decoration: none;
}

.inventory-tab--active {
  color: #000;
  background: #ffe044;
}

.inventory-search-row {
  display: flex;
  gap: 8px;
  margin: 16px 8px 0;
}

.inventory-search-row input {
  min-width: 0;
  height: 33px;
  flex: 1;
  padding: 0 14px;
  color: #111827;
  background: #fff;
  border: 2px solid #f4d000;
  border-radius: 12px;
  outline: none;
}

.inventory-search-row input:focus {
  border-color: #fff600;
  box-shadow: 0 0 0 2px rgb(255 246 0 / 20%);
}

.inventory-search-row button {
  height: 33px;
  padding: 0 14px;
  color: #000;
  background: #ffd91a;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
}

@media (max-width: 639px) {
  .inventory-search-row {
    margin-inline: 0;
  }
}
</style>