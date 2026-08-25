<template>
    <meta http-equiv="refresh"  />
    <div class="min-h-screen py-40 text-gray-900" style="background-image: linear-gradient(115deg, #FDFD33, #FFFFFF)">
        <div class="container mx-auto">
                <div class="absolute left-5 top-5 h-24 w-24">
                    <NuxtLink to="/"><img :src="logo2" alt="Fuzik Logo" /></NuxtLink>
                </div>

                <div class="mx-4">
                <p class="text-2xl">Thank you for using with Fuzik - Music collaboration.</p>
                <br />
                <p class="text-xl">You can reset the password by clicking the link in the email we just sent you.</p>
                <br />

                <h2 class="text-xl">In case you cannot find the email:</h2>
                <ul class="ml-5 text-xl">
                    <li class="list-disc">Be sure to check your <u>spam</u> or <u>junk mail</u> folder.</li>
                    <li class="list-disc">You can also try searching for "Fuzik - Music collaboration" or "Reset Your Password" in your inbox.
                    </li>
                    <li class="list-disc">If you still cannot find the password resetting email after a few minutes, you can
                        simply send an email to: <br />
                        <br />
                        <a href="mailto:support@fuzik.co">support@fuzik.co</a>
                        <br />
                        <br /> 
                        We will be happy
                        to resend it for you.</li>
                    <li><br /></li>
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