<template>
    <div>

    </div>
</template>

<script setup lang="ts">

const is_auth = ref(false);
//const profile_image = ref('images\music_staff.png');

const client = useSupabaseClient();


const { data, error } = await client.auth.getSession()
/*
const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token
  })
*/
//const { session, user } = data

//import nuxtStorage from 'nuxt-storage'

//var email = user?.email;

//console.log(data);

definePageMeta({
    layout: "empty"
})

</script>

<style scoped>

</style>