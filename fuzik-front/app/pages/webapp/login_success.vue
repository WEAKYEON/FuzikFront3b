<template>
    <div class="bg-black text-white h-screen text-center">
        <p v-if="errorMsg">{{ errorMsg }} <NuxtLink to="/webapp/login">Login</NuxtLink></p>
        <p v-else>Welcome, <ClientOnly>{{ user?.email }}</ClientOnly></p>
        <br />
        <div class="flex justify-center items-center mt-6">            
            <NuxtImg class="text-center max-w-48 max-h-48" :src="loading_image" />
        </div>
    </div>
    
</template>

<script setup lang="ts">



const client = useSupabaseClient();

const user = useSupabaseUser();
const errorMsg = ref('');
let redirectTimer: ReturnType<typeof setTimeout> | undefined;
// The browser client processes confirmation codes before getSession resolves.
onMounted(async () => {
    const { data, error } = await client.auth.getSession();
    if (error || !data.session) {
        errorMsg.value = error?.message || 'No active session. Please log in again.';
        return;
    }
    redirectTimer = setTimeout(() => navigateTo('/webapp'), 1000);
});
onBeforeUnmount(() => clearTimeout(redirectTimer));

var loading_image = 'https://media05.fuzikapp.com/app/loading.gif';

definePageMeta({
    layout: "empty"
})
</script>

<style scoped>



</style>