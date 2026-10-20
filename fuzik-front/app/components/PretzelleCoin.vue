<template>
    <div class="ms-3 flex flex-row justify-center items-center space-x-2 text-black bg-yellow-300 px-4 lg:px-4 py-1 rounded-xl cursor-pointer transition-all hover:bg-yellow/90" @click="navigateTo('/webapp/wallet')">
        PR {{premium_coin}}/&#x221E;
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    email: {type: String, required: true}
});

var premium_coin_realm_id = 'REALM00000001';

const premium_coin = ref('waiting');

let intervalId:any;
onMounted(async () => {
    await refreshPremiumCoin();

    intervalId = setInterval(refreshPremiumCoin, 10000); // Update every 10000 milliseconds (10 second)
});

onUnmounted(() => {
    clearInterval(intervalId);
});

async function refreshPremiumCoin() {
    const balance = await get_token(premium_coin_realm_id, props.email);
    if (balance !== null) premium_coin.value = balance;
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