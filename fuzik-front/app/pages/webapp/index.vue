<template>
  <div class="lg:container lg:mx-auto px-2 py-2 ">

    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-3/5 2xl:w-2/5 mx-auto py-6 lg:py-10  ">
      <form ref="search_form" target="_self">
        <div
          class="flex flex-row justify-center items-center gap-1  bg-black p-1 rounded-xl divide divide-white text-white border-2 border-white">

          <div @click="" class="flex-1 text-center rounded-lg cursor-pointer text-yellow-300 bg-black">
            <NuxtLink to="/index02">Solo</NuxtLink>

          </div>

          <div @click="" class="flex-1 text-center rounded-lg cursor-pointer text-black bg-yellow-300">
            <NuxtLink to="/">
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
      </form>
    </div>

    <div class="flex flex-col space-y-2">

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
        <div v-for="j in jams">
          <Jam :jam="j" />
        </div>
        <div class="dark:text-white text-white text-center">{{ empty_message }}</div>
      </div>
    </div>

    <div class="text-center" @click="scrollToTop">
      <div class=" btn">Back to top</div>
    </div>

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
const cookie_consent_form = useCookie("visitor",{ maxAge:  60 * 60 * 24 * 30 });
cookie_consent_form.value = cookie_consent_form.value || ('No');
  
if (cookie_consent_form.value.localeCompare('Yes')==0) {
    accept();
    
} else {
    //navigateTo('/');
    cookie_form_visible.value = true;
    // Do nothing
}
// Search function

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
//console.log(q_address_bar);

const { data: jams } = await useFetch('/api/jam2s/?q=' + q_address_bar);

//const isEmptyArray = jams.value && jams.value.length === 0;

if (typeof (jams.value) === 'object') {
  if (jams.value != null) {
    const isEmptyArray = jams.value && (jams.value as Array<any>)?.length === 0;
    if (!isEmptyArray) {
      empty_message = "";
    }
  }
}

//console.log(typeof (jams.value));



definePageMeta({
  layout: "main"
});

function accept() {
  //console.log("AAA");
  var max_age = 'max-age=' + (60 * 60 * 24 * 30);
  const cookie = useCookie('visitor');
  cookie_consent_form.value = 'Yes';
  cookie_form_visible.value = false;

  //document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
}

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