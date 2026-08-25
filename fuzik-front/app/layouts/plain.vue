<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div>
        <nav class="fixed top-0 z-50 w-full border-b  bg-black border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar" type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                </path>
                            </svg>
                        </button>
                        <a href="" class="flex ms-2 md:me-24">
                            <img src="https://media05.fuzikapp.com/app/fuzik_logo03_02.png" class="h-8 me-3" alt="Fuzik Logo" />
                            <span
                                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"></span>
                        </a>
                    </div>
                    <div class="flex items-center">
                        <div v-if="!is_auth" class="px-2 flex">
                            <NuxtLink to="/webapp/login"
                                class="flex flex-row justify-center items-center space-x-2 text-black bg-yellow-300 px-2 lg:px-4 py-1 rounded-xl cursor-pointer transition-all hover:bg-yellow/90">
                                <div class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div class="text-xs sm:text-sm">
                                    Login/Register
                                </div>
                            </NuxtLink>
                        </div>
                        <div v-else class="flex items-center ms-3">
                            <div>
                                <button type="button"
                                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600 "
                                    aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span class="sr-only">Open user menu</span>
                                    <!-- <NuxtImg class="w-8 h-8 rounded-full bg-white"
                                        
                                    src={{ profile_image.value }}

                                        alt="user photo"></NuxtImg>
                                    -->
                                    
                                    
                                    <img class="w-8 h-8 rounded-full bg-white" id="profile_icon"
                                        :src="profile_image"
                                        alt="user photo">
                                    
                                    <div class="mx-5 mt-1 align-middle text-white inline" v-for="m in data_musician"> {{
                                        m.display_name }} </div>
                                </button>

                            </div>
                            <div class="z-50 hidden my-4 text-base list-none  divide-y  rounded shadow bg-gray-700 divide-gray-600"
                                id="dropdown-user">
                                <div class="px-4 py-3" role="none">
                                    
                                    <div class="inline" v-for="m in data_musician">
                                        <p class="text-sm text-white" role="none">
                                        {{ m.first_name }} {{ m.last_name }}
                                        </p>
                                    </div>
                                    <div class="inline" v-for="m in data_musician"> 
                                        <p class="text-sm font-medium  truncate text-gray-300" role="none">
                                        {{ m.email }}
                                        </p>
                                    </div>
                                </div>
                                <ul class="py-1" role="none">
                                    <li>
                                        <a href="/webapp/"
                                            class="block px-4 py-2 text-sm text-gray-300   hover:bg-gray-600 hover:text-white"
                                            role="menuitem">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="/webapp/profile"
                                            class="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                                            role="menuitem">Musician profiles</a>
                                    </li>
                                    <li>
                                        <a href="/webapp/inventory"
                                            class="block px-4 py-2 text-sm   text-gray-300 hover:bg-gray-600 hover:text-white"
                                            role="menuitem">Your videos</a>
                                    </li>
                                    <li>
                                        <a href="/webapp/logout"
                                            class="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 hover:text-white"
                                            role="menuitem">Log out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


        <aside id="logo-sidebar"
            class="fixed top-0 left-0 z-40 -48 h-screen pt-20 transition-transform -translate-x-full  border-r  sm:translate-x-0 bg-gray-800 border-gray-700"
            aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="/webapp/"
                            class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">empty_dashboard</span>
                            <span class="ms-3">Dashboard</span>
                        </a>
                    </li>
                    
                    <li>
                        <NuxtLink to="/webapp/video_upload"
                        
                            class="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">

                            <span class="material-symbols-outlined">upload</span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Upload</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/webapp/inventory"
                        
                            class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">

                            <span class="material-symbols-outlined">view_compact_alt</span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Your inventory</span>
                        </NuxtLink>
                    </li>
                    
                    <li>
                        <a href="#"
                            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">
                                interpreter_mode
                            </span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Collaboration</span>
                        </a>
                    </li>
                    <div v-if="!is_auth">
                    <li>
                        <NuxtLink to="/webapp/login"
                            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">
                                login
                            </span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Log in</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/webapp/register"
                            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">
                                artist
                            </span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Register</span>
                        </NuxtLink>
                    </li>
                </div>
                </ul>
            </div>
        </aside>

        <div class="p-4 sm:ml-48 bg-white">
            
            <div class="p-4 border-2 border-white border-dashed rounded-lg dark:border-gray-700 mt-14">
                <slot class="w-full" />
                <!-- <a href="https://www.flaticon.com/free-icons/sing" title="sing icons">Sing icons created by Freepik - Flaticon</a>
                -->

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const is_auth = ref(false);
//const profile_image = ref('images\music_staff.png');

const client = useSupabaseClient();

//const { data, error } = await client.auth.getSession()
//const { session, user } = data
const user = await client.auth.getUser();

//import nuxtStorage from 'nuxt-storage'

/*
interface MusicianType {
    email: string,
    display_name: string,
    first_name: string,
    last_name: string,
    music_genre: string,
    music_inst: string,
    profile_pic: string,
    tel: string,
    status:  string,
    comment: string
} */
var email = '';

if (user.data.user?.email != undefined) {
        email = user.data.user?.email;    
        //console.log(email)
    }
var data_musician: any;

var profile_image = 'https://media05.fuzikapp.com/app/music_staff.png';
var your_video = 'inventory'

if (email == '') {
    is_auth.value = false;
} else {

    const url = '';
    const { data: musician, pending, error, refresh } = await useFetch('/api/musician2_detail?email=' + email);
    data_musician = musician

    //nuxtStorage.localStorage.setData('current_user_email', email);
    

    is_auth.value = true;

    var raw_value = data_musician.value[0];

    if (raw_value.profile_pic != '') {
        profile_image = 'https://media05.fuzikapp.com/' + raw_value.profile_pic;
    }
    //console.log(profile_image);

}



</script>

<style scoped></style>
