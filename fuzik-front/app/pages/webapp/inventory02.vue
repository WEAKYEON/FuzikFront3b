<template>
  <div class="lg:container lg:mx-auto px-2 py-4">

    <div class="w-3/5 lg:w-2/5 mx-auto py-6 lg:py-10">
      <form ref="search_form" target="_self">
        <div
          class="flex flex-row justify-center items-center  bg-black p-1 rounded-xl divide divide-white text-white border-2 border-white">
          <div @click="" class="flex-1 text-center rounded-lg cursor-pointer bg-black text-yellow-300">
            <NuxtLink to="/webapp/inventory">
              Solo
            </NuxtLink>
          </div>
          <div @click="" class="flex-1 text-center rounded-lg cursor-pointer bg-yellow-300 text-black">
            <NuxtLink to="/webapp/inventory02">
              Collaboration
            </NuxtLink>
          </div>
        </div>
        <div class="py-4 flex flex-row-reverse gap-2 m-2 h-16 ">
          <button id="btn_submit" type="submit" @keyup.enter="search_enter"
            class="flex-none bg-yellow-400 text-black px-3 py-0.5 rounded-xl">Search</button>

          <input placeholder="Song name or artist name" type="text"
            class="w-20 sm:w-max md:w-max lg:w-max xl:w-max 2xl:w-max flex-1 outline-none rounded-xl pl-4 pr-8 border-2 border-yellow-400 text-base dark:text-black"
            v-model="q_input_bar" @keypress="" name="q">


        </div>
        <div class="text-center text-4xl text-yellow-300 dark:text-yellow-300">
          {{ inventory_name }}
        </div>
      </form>
    </div>

    <div class="flex flex-col space-y-2">
      <div v-show="show_landscape" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1">
        <div v-for="j in jams">
          <Jam :jam="j" />
        </div>
      </div>
    </div>
    <div class="text-white dark:text-white text-center">      
      {{ empty_message }}      
    </div>

    <div class="text-center" v-show="show_button" @click="scrollToTop">
      <br />      
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
const { q } = useRoute().params

var empty_message = 'Jamming session will appear here.';

var q_address_bar = route.query.q?.toString();

if (q_address_bar == undefined) {
  q_address_bar = '';
} else {
  q_input_bar.value = q_address_bar;
}

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


if (email == null) {
  is_auth.value = false;

} else {

  const url = '';
  const { data: musician, pending, error, refresh } = await useFetch('/api/musician2_detail?email=' + encodeURIComponent(String(email)));
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

const { data: jams } = await useFetch('/api/jam2s/?q=' + encodeURIComponent(String(q_address_bar)) + '&musician=' + encodeURIComponent(String(display_name)));

//const isEmptyArray = jams.value && jams.value.length === 0;

if (typeof (jams.value) === 'object') {
  if (jams.value != null) {
    const isEmptyArray = jams.value && (jams.value as Array<any>)?.length === 0;
    if (!isEmptyArray) {
      empty_message = "";
    }
  }
}

//var landscape_button = "Landscape videos only";
//var portrait_button = "Portrait videos only";


var empty_message = 'Your video(s) will appear here.';
//var plays_p_empty = false;
//var empty_message = 'Your video(s) will appear here.';
var plays_empty = false;
var plays_p_empty = false;

var show_button = true;

if (typeof(jams.value) === 'object') {
      if (jams.value != null) {
        const isEmptyArray = jams.value && (jams.value as Array<any>)?.length === 0;
        if (isEmptyArray) {
          plays_empty = true;
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

function search_enter() {
  //const search_form = ref<HTMLFormElement>()
  if (search_form.value != undefined) {
    search_form.value.submit();
  }
}


</script>

<style scoped></style>
