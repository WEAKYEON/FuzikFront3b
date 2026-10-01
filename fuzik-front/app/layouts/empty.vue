<template>
    <div>
        <slot class="w-full" />
    </div>
</template>

<script setup lang="ts">

const cookie_form_visible = ref(true);
const cookie_consent_form = useCookie("visitor");
cookie_consent_form.value = cookie_consent_form.value || ('No');
  
if (cookie_consent_form.value.localeCompare('Yes')==0) {
    //cookie_form_visible.value = false;
    // Do nothing
} else {
    navigateTo('/webapp/cookie_warning');
}

useHead({
    script: [{
                src: 'https://media05.fuzikapp.com/app/flowbite.min.js',
            }],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://media05.fuzikapp.com/app/flowbite.min.css',


        }
    ]
})


</script>

<style scoped>

</style>