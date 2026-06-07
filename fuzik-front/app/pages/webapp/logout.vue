<template>
    <meta http-equiv="refresh" content="1;url=/" />
    <div class="bg-black text-white h-screen text-center">
        You have successfully logged out.
        <br />
        <div class="flex justify-center items-center mt-6">            
            <NuxtImg class="text-center max-w-48 max-h-48" :src="loading_image" />
        </div>
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient();

const { error } = await client.auth.signOut();

var loading_image = 'https://media04.tetraserver.com/app/loading.gif';


definePageMeta({
  layout: "empty"
})

</script>

<style scoped>

</style>