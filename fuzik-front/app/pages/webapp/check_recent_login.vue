<template>
    <div class="flex justify-center items-center h-screen bg-indigo-600" style="background-image: linear-gradient(115deg, #FDFD33, #000000)">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="index03"><img :src="logo2"  alt="Fuzik Logo" /></NuxtLink></div>
            
            
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <div class="font-bold text-center text-red-900">
                    {{ display_message1 }}
                </div>
                <div class="text-justify text-black">
                    {{ display_message2 }}
                </div>
                <div class="mt-5 flex flex-row">
                    <button  id="goback_button" @click="goback" class="m-4 w-40 bg-yellow-500 py-3 rounded-lg text-center text-black">Go back</button>
                    <button  id="logout_button" @click="signout" class="m-4 w-40 bg-yellow-500 py-3 rounded-lg text-center text-black">Log out</button>
                </div>
            </div>
        
    </div>
</template>

<script setup lang="ts">

const router = useRouter();
const client = useSupabaseClient();
const { data: { session } } = await client.auth.getSession();
const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png');
const display_message1 = ref('Checking ...');
const display_message2 = ref('');

if (!session) {
    await navigateTo('/webapp/login');
} else {
    const lastSignIn = Date.parse(session.user.last_sign_in_at || '');
    const elapsedSeconds = (Date.now() - lastSignIn) / 1000;
    if (!Number.isFinite(elapsedSeconds) || elapsedSeconds >= 300) {
        display_message1.value = 'Attention!';
        display_message2.value = "Due to security reasons, your session has been active for more than 5 minutes. To ensure the best security practices, you'll need to log out and log back in to change your password.";
    } else {
        await navigateTo('/webapp/change_password');
    }
}

function goback() {
    router.back();
}

async function signout() {
    const { error } = await client.auth.signOut();
    if (error) {
        display_message2.value = error.message;
        return;
    }
    await navigateTo('/');
}

definePageMeta({
  layout: "empty"
})



</script>

<style scoped>

</style>