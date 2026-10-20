<template>
    <div class="ms-3 flex flex-row justify-center items-center space-x-2 text-black bg-blue-300 px-4 lg:px-4 py-1 rounded-xl cursor-pointer transition-all hover:bg-yellow/90" @click="navigateTo('/webapp/wallet')">
        FZ {{ fuzik_token }}/200
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    email: {type: String, required: true}
});

var fuzik_token_realm_id = 'REALM00000002';

const fuzik_token = ref('waiting');

let intervalId:any;
onMounted(async () => {
    await refreshFuzikToken();

    intervalId = setInterval(refreshFuzikToken, 10000); // Update every 10000 milliseconds (10 second)
});

onUnmounted(() => {
    clearInterval(intervalId);
});

async function refreshFuzikToken() {
    const balance = await get_token(fuzik_token_realm_id, props.email);
    if (balance !== null) fuzik_token.value = balance;
}

async function get_token(realm_id:string, user_email:string) {
    try {
        const result = await $fetch<{ balance: number | string }>('/api/get_token', {
            query: { realm_id, user_email }
        });
        return String(result.balance);
    } catch {
        return null;
    }
}

</script>

<style scoped>

</style>