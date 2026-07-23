<template>
    <div class="flex justify-center items-center h-screen bg-indigo-600" style="background-image: linear-gradient(115deg, #FDFD33, #000000)">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="index03"><img :src="logo2"  alt="Fuzik Logo" /></NuxtLink></div>
        <form id="main_form" action="login_success" method="post"
            @submit.prevent="check_email">    
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-2xl block text-center text-orange-800 font-semibold"><i class="fa-solid fa-user"></i>Reset your password</h1>
                <hr class="mt-3">
                <div class="mt-3">
                    <input type="text" id="txt_username"  v-model="email" class="border w-full text-base px-2 py-1  shadow-lg text-black bg-white rounded-md focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter your registered email address." />
                </div>
                <div class="mt-5">
                    <button  id="signup_button" class="w-full bg-yellow-500 py-3 text-center text-black">Send instructions</button>
                </div>
                <p class="text-red-700" id="error_message">{{ errorMsg }}</p>
                <p class="text-black" id="success_message">{{ successMsg }}</p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

const email = ref('');
    
const errorMsg = ref('');
const successMsg = ref('');
    
const logo2 = ref('https://media04.tetraserver.com/app/fuzik_logo04_01.png');    

//const client = useSupabaseClient();

//var email = 'omiesensei@outlook.com'

/*
const { data, error } = await client.auth.resetPasswordForEmail(email, {
  redirectTo: 'http://localhost:3000/update_password',
})

navigateTo("/reset_password2");
*/

async function check_email() {
    var allowed = false;
    if(email.value.length == 0 ){
        errorMsg.value = "Please input a registered email address."
        allowed = false;

    } else {
        if (validateEmail(email.value)) {
            var url_check = "/api/musician_check_email?email=" + email.value;
            var respone = await fetch(url_check);
            const result = await respone.json();

            var result1 = "none";

            if (result.length > 0) {
                result1 = result[0].result;
            }

            if (result1.localeCompare("Found")==0) {
                errorMsg.value = ""
                allowed = true;
            } else {                
                errorMsg.value = "Email: " + email.value + " did not exists.";
                allowed = false;
            }
            
        } else {
            errorMsg.value = "Please input a valid email address";
            allowed = false;
        }
    }

    if (allowed) {
        //(document.getElementById('signup_button') as HTMLButtonElement)!.disabled = false;
        //(document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-yellow-500 py-3 text-center text-black";
        successMsg.value = "Please check your email";
        const client = useSupabaseClient();

        const { data, error } = await client.auth.resetPasswordForEmail(email.value, {
            redirectTo: 'http://localhost:3000/forget_password',
        })

        navigateTo("/reset_password2");

    } else {
        //(document.getElementById('signup_button') as HTMLButtonElement)!.disabled = true;
        //(document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";
        return false;
    }
}

function validateEmail(email:string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
  // todo, validate email and trim
}

definePageMeta({
    layout: "empty",
})

</script>

<style scoped></style>