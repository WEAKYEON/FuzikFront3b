<template>
    <div class="flex justify-center items-center h-screen bg-indigo-600" style="background-image: linear-gradient(115deg, #FDFD33, #555555)">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="index03"><img :src="logo2"  alt="Fuzik Logo" /></NuxtLink></div>
        <form id="main_form" action="login_success" method="post"
                  @submit.prevent="changePassword" >    
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-2xl block text-center font-semibold text-yellow-600"><i class="fa-solid fa-user"></i>Reset account password</h1>
                <hr class="mt-3">
                <div class="mt-3">
                    <label for="txt_password" class="block text-base mb-2 text-yellow-600">New password</label>
                    <input type="password" id="txt_password" @keyup ="validate"  v-model="new_password"  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter new password." />
                </div>
                <div class="mt-3">
                    <label for="txt_password_confirm" class="block text-base mb-2 text-yellow-600">New password confirmation</label>
                    <input type="password" id="txt_password_confirm" @keyup ="validate"  v-model="new_password_confirm"  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Confirm new password." />
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <!-- <input type="checkbox">
                        <label>Remember Me</label> -->
                    </div>
                   
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
    
                    </div>
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

    const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png');

    const new_password = ref('');
    const new_password_confirm = ref('');
    
    const errorMsg = ref('');
    const successMsg = ref('');


    const client = useSupabaseClient();
    //await client.auth.refreshSession();

    const route = useRoute();
    //console.log('route');
    //console.log(route.query);

    const router = useRouter();
    //console.log('router');
    //console.log(router.getRoutes)

    var code = route.query.code?.toString();

    //console.log("code");
    //console.log(code)

    if (code != null) {
        //await client.auth.refreshSession();

        const { data, error } = await client.auth.getSession();
        const { session } = data;

        //console.log('session');
        //console.log(session);

        var email = "";

        if (session != null) {
            if (session.user.email != undefined) {
                email = session.user.email;
            }
        }

        //console.log('email');
        //console.log(email);

        console.log(error);
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
    navigateTo("/forget_password2");
}

    
definePageMeta({
    layout: "empty",
})

</script>

<style scoped>

</style>