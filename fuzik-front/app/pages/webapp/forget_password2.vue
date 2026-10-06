<template>
    <div class="bg-black text-white h-screen text-center">
        {{ errorMsg || 'Update password success' }}
    </div>
</template>

<script setup lang="ts">



const client = useSupabaseClient();

const errorMsg = ref('');
const complete = ref(false);
const musician = useState('current-musician');
useHead(() => ({ meta: complete.value ? [{ 'http-equiv': 'refresh', content: '2;url=/webapp/login' }] : [] }));
onMounted(async () => {
    const { error } = await client.auth.signOut();
    if (error) {
        errorMsg.value = error.message;
        return;
    }
    musician.value = null;
    complete.value = true;
});

definePageMeta({
  layout: "empty"
})

</script>

<style scoped>

</style>