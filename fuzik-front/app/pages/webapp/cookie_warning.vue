<template>
<div class="min-h-screen py-40 text-gray-900" style="background-image: linear-gradient(115deg, #FDFD33, #FFFFFF)">

    <div class="container mx-auto">
        <div class="absolute left-5 top-5 h-24 w-24">
            <NuxtLink to="/"><img :src="logo2" alt="Fuzik Logo" /></NuxtLink>
        </div>

        <div class="mx-4">
            <div>

<p class="font-bold text-xl">To create an account and log in, we need you to accept our cookies. </p> 
<p class="font-bold text-xl">They are necessary to remember your login information and preferences.</p>
</div>
</div>
</div>
</div>
</template>

<script setup lang="ts">

useHead({ meta: [{ 'http-equiv': 'refresh', content: '5;url=/' }] });
const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png')

definePageMeta({
  layout: "empty2"
});


</script>

<style scoped>

</style>