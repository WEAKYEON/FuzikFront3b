<template>
    <div class="bg-black text-white h-screen text-center">
        {{ errorMsg || (complete ? 'You have successfully logged out.' : 'Logging out...') }}
        <br />
        <div class="flex justify-center items-center mt-6">            
            <NuxtImg class="text-center max-w-48 max-h-48" :src="loading_image" />
        </div>
    </div>
</template>

<script setup lang="ts">



const client = useSupabaseClient();

const errorMsg = ref('');
const complete = ref(false);
const musician = useState('current-musician');
useHead(() => ({ meta: complete.value ? [{ 'http-equiv': 'refresh', content: '1;url=/' }] : [] }));
onMounted(async () => {
    const { error } = await client.auth.signOut();
    if (error) {
        errorMsg.value = error.message;
        return;
    }
    musician.value = null;
    complete.value = true;
});

var loading_image = 'https://media05.fuzikapp.com/app/loading.gif';


definePageMeta({
  layout: "empty"
})

</script>

<style scoped>

</style>