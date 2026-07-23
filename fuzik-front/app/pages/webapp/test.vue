<template>
  <div>    
    <div id="consent_form" v-show="cookie_form_visible" class="fixed bottom-4 right-1 lg:right-4 p-4 bg-white border-t-4 shadow-lg">
	    <h2 class="text-lg lg:text-xl mb-4 block font-bold leading-tight text-gray-600">Cookie Policy</h2>
	    <div class="lg:flex lg:space-x-5">
		    <p class="mb-5 font-medium text-gray-600">
          We collect cookies to analyze our website traffic and performance; we never collect any personal data. Cookies help us display personalized product recommendations and ensure you have great shopping experience.
        </p>
		    <button @click="accept()" 
		      class="w-full lg:w-48 px-3 py-1 bg-blue-300 hover:bg-gray-200 hover:underline rounded text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs font-bold">
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
      cookie_form_visible.value = false;
  } else {
      // Do nothing
  }


  onMounted(() => {
    /*
    if (document.cookie.includes("codinglab")) {
      consent_form = document.getElementById('consent_form');
      consent_form.visible = false;
    }*/

  });

  useHead({
    title:'Popup Cookie Consent Box',

    script: [{
                src: 'https://media04.tetraserver.com/app/flowbite.min.js',
            }],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://media04.tetraserver.com/app/flowbite.min.css',

        }
    ]
  });

  definePageMeta({
    layout: "empty"    
  });

  function accept() {
    console.log("AAA");
    //var max_age = 'max-age=' + (60 * 60 * 24 * 30);
    //const cookie = useCookie('visitor');
    cookie_consent_form.value = 'Yes';
    cookie_form_visible.value = false;

    //document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
  }

  function decline() {

  }

</script>

<style scoped>


</style>