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
const { data, error } = await client.auth.getSession();
const { session } = data;

const logo2 = ref('https://media04.tetraserver.com/app/fuzik_logo04_01.png')

var display_message1 = 'Checking ...';
var display_message2 = '';

console.log('check_recent');

if ((await check_last_login()) >= 300) {
    display_message1 = "Attention!";
    display_message2 = "Due to security reasons, your session has been active for more than 5 minutes. To ensure the best security practices, you'll need to log out and log back in to change your password.";
    // by Gemini
} else {
    navigateTo("/change_password");
}


async function goback() {
    
    router.back();
    //navigateTo("/");
}

async function signout() {

    

    client.auth.signOut();
    navigateTo("/");
}




async function check_last_login() {
    // return number of seconds since the user has logged in
    var time_spend = 0.0;    

    const client = useSupabaseClient();

    var session = await client.auth.getSession();

    //console.log('session');
    //console.log(session);

    //console.log('last signin');
    let data = session!.data;
    let data_session = data!.session;
    let user = data_session!.user;
    let last_sign_in_at = user!.last_sign_in_at;

    //console.log(typeof(last_sign_in_at));

    const timeString = '' + last_sign_in_at;

    // Pass the ISO 8601 formatted string to the Date constructor
    const dateObject = new Date(timeString);

    let dateTime = new Date()
    time_spend = (dateTime.getTime() - dateObject.getTime())/1000;

    //console.log('time_spend');
    //console.log(time_spend);
   
    return time_spend;
}

definePageMeta({
  layout: "empty"
})



</script>

<style scoped>

</style>