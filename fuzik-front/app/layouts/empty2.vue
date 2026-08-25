<template>
    <div>
        <slot class="w-full" />
    </div>
</template>

<script setup lang="ts">

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