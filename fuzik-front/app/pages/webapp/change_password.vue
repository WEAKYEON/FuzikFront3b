<template>
    <div class="flex justify-center items-center h-screen bg-indigo-600" style="background-image: linear-gradient(115deg, #FDFD33, #000000)">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="index03"><img :src="logo2"  alt="Fuzik Logo" /></NuxtLink></div>
        <form id="main_form" action="login_success" method="post"
            @submit.prevent="changePassword">    
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-2xl block text-center text-orange-800 font-semibold"><i class="fa-solid fa-user"></i>Change your password</h1>
                <hr class="mt-3">
                <div class="mt-3">
                    <label for="txt_email" class="block text-base mb-2 text-yellow-600">Email</label>
                    <input type="text" id="display_name"  v-model="email" disabled  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 txtinput" placeholder="Your email address" />
                </div>
                
                <div class="mt-3">
                    <label for="txt_password" class="block text-base mb-2 text-yellow-600">New password</label>
                    <input type="password" id="txt_password" @keyup ="validate"  v-model="new_password"  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 txtinput" placeholder="Enter new password." />
                </div>
                <div class="mt-3">
                    <label for="txt_password_confirm" class="block text-base mb-2 text-yellow-600">New password confirmation</label>
                    <input type="password" id="txt_password_confirm" @keyup ="validate"  v-model="new_password_confirm"  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 txtinput" placeholder="Confirm new password." />
                </div>
                <div class="mt-5">
                    <button id="change_password" disabled class="w-full bg-gray-500 py-3 text-center text-white"><i class="fa-solid fa-right-to-bracket"></i>Change password</button>
                </div>
                <p class="text-red-700" id="error_message">{{ errorMsg }}</p>
                <p class="text-black" id="success_message">{{ successMsg }}</p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient();


const logo2 = ref('https://media04.tetraserver.com/app/fuzik_logo04_01.png');

const email = ref('');

const new_password = ref('');
const new_password_confirm = ref('');


const errorMsg = ref('');
const successMsg = ref('');

const { data, error } = await client.auth.getSession();

const { session } = data;

if (session != null) {
    if (session.user.email != undefined) {
        email.value = session.user.email;
    }
}


async function validate() {
    var allowed = false;

if (new_password.value.length == 0 ) {
    errorMsg.value = "Password cannot be blank.";
    (document.getElementById('change_password') as HTMLButtonElement)!.disabled = true;
    (document.getElementById('change_password') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";
    allowed = false;
} else {
    allowed = true;
}

if (allowed) {
    if (new_password.value.localeCompare(new_password_confirm.value) == 0 ) {
        allowed = true;
        errorMsg.value = "";
        (document.getElementById('change_password') as HTMLButtonElement)!.disabled = false;
        (document.getElementById('change_password') as HTMLButtonElement)!.className="w-full bg-yellow-500 py-3 text-center text-black";

    } else {
        allowed = false;
        errorMsg.value = "Password and Confirm password does not match!!";
        (document.getElementById('change_password') as HTMLButtonElement)!.disabled = true;
        (document.getElementById('change_password') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";

    }
}
return allowed;
}

async function changePassword() {
    const { data, error } = await client.auth.updateUser({
            password: new_password.value
    });
    navigateTo("/change_password2");
}

definePageMeta({
    layout: "empty",
})
</script>

<style scoped>

</style>