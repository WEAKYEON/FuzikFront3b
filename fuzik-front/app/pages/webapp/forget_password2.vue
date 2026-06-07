<template>
    <meta http-equiv="refresh" content="2;url=/webapp/login" />
    <div class="bg-black text-white h-screen text-center">
        Update password success
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient();

const { data, error } = await client.auth.refreshSession()
const { session, user } = data

client.auth.signOut();

definePageMeta({
  layout: "empty"
})

</script>

<style scoped>

</style>