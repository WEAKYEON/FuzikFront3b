<template>
  <div class="collaboration-feed">

    <div class="collaboration-feed__search">
      <form @submit.prevent="submitSearch">
        <div
          class="collaboration-feed__tabs">

          <NuxtLink to="/webapp/index02" class="collaboration-feed__tab">Solo</NuxtLink>
          <NuxtLink to="/webapp" class="collaboration-feed__tab collaboration-feed__tab--active">
            Collaboration
          </NuxtLink>

        </div>
        <div class="collaboration-feed__search-row">
          <input
            v-model="q_input_bar"
            name="q"
            placeholder="Song name or artist name"
            type="search"
            aria-label="Search by song or artist"
          >

          <button id="btn_submit" type="submit">Search</button>
        </div>
      </form>
    </div>

    <div>
      <div class="collaboration-feed__grid">
        <div v-for="j in jams">
          <Jam :jam="j" />
        </div>
        <div v-if="empty_message" class="collaboration-feed__empty">{{ empty_message }}</div>
      </div>
    </div>

    <div class="collaboration-feed__back" @click="scrollToTop">
      <button type="button" class="btn">Back to top</button>
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
    //navigateTo('/');
    cookie_form_visible.value = true;
    // Do nothing
}
const q_input_bar = ref('');
const route = useRoute();

var empty_message = 'Jamming session will appear here.';

var q_address_bar = route.query.q?.toString();

if (q_address_bar == undefined) {
  q_address_bar = '';
} else {
  q_input_bar.value = q_address_bar;
}
//console.log(q_address_bar);

const { data: jams } = await useFetch('/api/jam2s/?q=' + encodeURIComponent(String(q_address_bar)));

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

async function submitSearch() {
  await navigateTo({
    path: '/webapp',
    query: q_input_bar.value.trim() ? { q: q_input_bar.value.trim() } : {}
  })
}

</script>

<style scoped>
.collaboration-feed {
  width: 100%;
  padding: 0 0 24px;
}

.collaboration-feed__search {
  width: min(608px, 100%);
  margin: 0 auto;
  padding: 10px 0 62px;
}

.collaboration-feed__tabs {
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

.collaboration-feed__tab {
  display: grid;
  height: 26px;
  place-items: center;
  color: #ffe000;
  border-radius: 8px;
  text-decoration: none;
}

.collaboration-feed__tab--active {
  color: #000;
  background: #ffe044;
}

.collaboration-feed__search-row {
  display: flex;
  gap: 8px;
  margin: 16px 8px 0;
}

.collaboration-feed__search-row input {
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

.collaboration-feed__search-row input:focus {
  border-color: #fff600;
  box-shadow: 0 0 0 2px rgb(255 246 0 / 20%);
}

.collaboration-feed__search-row button {
  height: 33px;
  padding: 0 14px;
  color: #000;
  background: #ffd91a;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
}

.collaboration-feed__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px 4px;
}

.collaboration-feed__empty {
  grid-column: 1 / -1;
  color: #fff;
  text-align: center;
}

.collaboration-feed__back {
  padding-top: 24px;
  text-align: center;
}

@media (max-width: 1279px) {
  .collaboration-feed__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }
}

@media (max-width: 899px) {
  .collaboration-feed__search {
    padding-bottom: 32px;
  }

  .collaboration-feed__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .collaboration-feed {
    padding-top: 6px;
  }

  .collaboration-feed__search {
    padding-bottom: 22px;
  }

  .collaboration-feed__search-row {
    margin-inline: 0;
  }

  .collaboration-feed__grid {
    grid-template-columns: 1fr;
  }
}
</style>
