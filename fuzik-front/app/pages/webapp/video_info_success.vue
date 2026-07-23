<template>
    <div class="text-center">
        {{ display }}
    </div>
</template>

<script setup lang="ts">

//import nuxtStorage from 'nuxt-storage'
const cookie_current_url = useCookie("current_url");

import { routerKey } from 'vue-router';
var current_url = '';

const display = ref('Information updated');

if (cookie_current_url.value != undefined) {
  current_url = cookie_current_url.value;
}

if ((current_url == null) || (current_url == '')) {
  display.value = 'Direct access not allowed';
  navigateTo('/');
}

//var current_url = await nuxtStorage.localStorage.getData('current_url');
//var current_url = await nuxtStorage.localStorage.getData('current_url');



var target = 'watch/' + current_url;
//console.log(target)
//navigateTo(target)


const router = useRouter();

router.push(target);

//await navigateTo('watch02', {
//  'p': 'abc'
//}

definePageMeta({
  layout: "empty"
})
</script>

<style scoped>

</style>