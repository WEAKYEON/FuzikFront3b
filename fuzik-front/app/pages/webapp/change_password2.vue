<template>
    <meta http-equiv="refresh" content="2;url=/" />
    <div class="bg-black text-white h-screen text-center">
        Password changed
        <br />
        <div class="flex justify-center items-center mt-6">            
            <NuxtImg class="text-center max-w-48 max-h-48" :src="loading_image" />
        </div>
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient();

const { data, error } = await client.auth.refreshSession()
const { session, user } = data

var loading_image = 'https://media05.fuzikapp.com/app/loading.gif';

//client.auth.signOut();

definePageMeta({
  layout: "empty"
})

</script>

<style scoped>

</style>