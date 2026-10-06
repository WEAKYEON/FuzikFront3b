<template>
    <div class="min-h-screen py-40 text-gray-900" style="background-image: linear-gradient(115deg, #FDFD33, #FFFFFF)">
        <div class="container mx-auto">
                <div class="absolute left-5 top-5 h-24 w-24">
                    <NuxtLink to="/"><img :src="logo2" alt="Fuzik Logo" /></NuxtLink>
                </div>

                <div class="mx-4">
                <p class="text-2xl">Error!!</p>
                <br />
                <p class="text-xl">We encountered an issue uploading your file. Here are some tips:</p>
                <br />

                <ul class="ml-5 text-xl list-decimal">
                    <!-- <li class="">File format: Make sure your file is in a supported format like "mp4/mov".</li> -->
                    <li class="">File format: Make sure your file is in a supported format like "mp4".</li>
                    <li class="">File size: The file might be too large. The maximum file size is 300 MB or 12 minutes, whichever is less.
                    </li>
                    <li class="">If you're still having trouble, you can
                        simply send an email to: <br />
                        <br />
                        <a href="mailto:support@fuzik.co">support@fuzik.co</a>
                        <br />
                        <br /> 
                        We will be happy
                        to solve the problem for you.</li>
                    <li class="list-none"><br /><NuxtLink to="/webapp/video_upload">Click <u>here</u> to upload again</NuxtLink><br /></li>
                </ul>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">

const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png')

definePageMeta({
    layout: "empty",
})

</script>

<style scoped>

</style>