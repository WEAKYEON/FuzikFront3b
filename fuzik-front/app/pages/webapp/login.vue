<template>
    <div class="flex justify-center items-center h-screen bg-indigo-600" style="background-image: linear-gradient(115deg, #FDFD33, #000000)">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="index03"><img :src="logo2"  alt="Fuzik Logo" /></NuxtLink></div>
        <form id="main_form" action="login_success" method="post"
                  @submit.prevent="signIn" >    
            <div class="w-96 p-6 shadow-lg text-black bg-white rounded-md">
                <h1 class="text-2xl block text-center font-semibold"><i class="fa-solid fa-user"></i>Fuzik Collaboration Login</h1>
                <hr class="mt-3">
                <div class="mt-3">
                    <label for="txt_username" class="block text-base mb-2">Email</label>
                    <input type="text" id="txt_username"  v-model="email"  class="border w-full txtinput text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
                </div>
                <div class="mt-3">
                    <label for="txt_password" class="block text-base mb-2">Password</label>
                    <input type="password" id="txt_password"  v-model="password"  class="border w-full txtinput text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <!-- <input type="checkbox">
                        <label>Remember Me</label> -->
                    </div>
                    <div>
                        <NuxtLink to="reset_password" class="text-yellow-800 font-semibold">Forgot Password?</NuxtLink>
                    </div>
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
    
                    </div>
                    <div>
                        <NuxtLink to="register" class="text-yellow-800 font-semibold">Sign up</NuxtLink>
                    </div>
                </div>
                <div class="mt-5">
                    <button class="border-2 border-yellow-400 bg-yellow-300 text-black py-1 w-full rounded-md hover:bg-transparent hover:text-yellow-400 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                </div>
                <p class="text-red-700" id="error_message">{{ errorMsg }}</p>
                <p class="text-black" id="success_message">{{ successMsg }}</p>
            </div>
        </form>
    </div>
    </template>
    
    <script setup lang="ts">
    
    //import { createClient } from '@supabase/supabase-js'
    
    const email = ref('');
    const password = ref('');
    
    const errorMsg = ref('');
    const successMsg = ref('');
    
    const client = useSupabaseClient();

    //const { error } = await client.auth.signOut()
    
    const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png')
    
    async function signIn() {
      //alert(isAlphanumeric(first_name.value));
    
      //console.log('Email: ' + email.value);
    
        if(await check_input()) {
            try {
                const { data, error } = await client.auth.signInWithPassword({
                    email: email.value,
                    password: password.value,
                });
                if (error) {
                    errorMsg.value = error.message;
                    successMsg.value = "";
                    //alert(error.message);
                    throw error;
                }
                successMsg.value = "Logged in";
                errorMsg.value = "";
    
                await navigateTo('/webapp/login_success');
    
            } catch ( error ) {
                //alert(errorMsg);
                errorMsg.value = error instanceof Error ? error.message : 'Unable to sign in. Please try again.';
            }
        }
    
    }
    
    async function check_input() {
        var allowed = false;
     
        if (email.value.length == 0) {
            errorMsg.value = "Email cannot be blank.";  
            allowed = false;
        } else if (password.value.length == 0) {    
            errorMsg.value = "Password cannot be blank.";
            allowed = false;
        } else {
            allowed = true;
            errorMsg.value = "";
        }
        return allowed;
    }

    definePageMeta({
        layout: "empty"
    })

    
    
    </script>
    
    <style scoped>
    
    </style>