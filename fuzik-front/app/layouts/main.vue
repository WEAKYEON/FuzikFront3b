<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />


    <div class="bg-black">
        <nav class="app-header fixed top-0 z-50 w-full border-b bg-black border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">                    
                    <div class="flex items-center justify-start rtl:justify-end">
                        
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar" type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                            <span class="sr-only">Open sidebar</span>
                            <span class="material-symbols-outlined">menu_open</span>
                        </button> 
                        <NuxtLink to="/webapp" class="flex ms-2 md:me-24">
                            <img src="/logo.webp" class="h-8 me-3" alt="Fuzik Logo" />
                            <span
                                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"></span>
                        </NuxtLink>
                    </div>
                    <div class="flex items-center">
                        <div v-if="!is_auth">

                        </div>
                        <div v-else class="flex items-center ms-3">
                            <PretzelleCoin :email="email" />
                            <FuzikToken :email="email" />
                        </div>
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
                            <ProfileDropdown
                                :display-name="display_name"
                                :full-name="`${first_name} ${last_name}`.trim()"
                                :email="email"
                                :profile-image="profile_image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar"
            class="app-sidebar fixed top-0 left-0 z-40 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 bg-black border-gray-700"
            aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-black">
                <ul class="space-y-2 font-medium">
                    <li>
                        <NuxtLink to="/webapp"
                            class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">empty_dashboard</span>
                            <span class="ms-3">Dashboard</span>
                        </NuxtLink>
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
                        <NuxtLink to="/webapp/collaboration"
                            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                            <span class="material-symbols-outlined">
                                interpreter_mode
                            </span>
                            <span class="flex-1 ms-3 whitespace-nowrap">Collaboration</span>
                        </NuxtLink>
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

        <main class="app-main bg-black">
            
            <div class="p-4  mt-14">
                <slot class="w-full" />
                <!-- <a href="https://www.flaticon.com/free-icons/sing" title="sing icons">Sing icons created by Freepik - Flaticon</a>
                -->

            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
// Check Cookie


//import nuxtStorage from 'nuxt-storage'

const is_auth = ref(false);
//const profile_image = ref('images\music_staff.png');

const client = useSupabaseClient();

//const { data, error } = await client.auth.refreshSession();
const { data, error } = await client.auth.getSession();
const { session } = data;

var data_musician: any;

var display_name = '';
var first_name = '';
var last_name = '';

var profile_image = 'https://media04.tetraserver.com/app/music_staff.png';
var your_video = 'inventory'

//const user = await client.auth.getUser();
//console.log('session');
//console.log(session);

var email = '';
//var is_link_from_email = false;
is_auth.value = false;


if (session == null) {
    console.log('No user session');
} else {
    //console.log('is_auth3');
//console.log(is_auth);

    const user = await client.auth.getUser();
    // User login
    if (user.data.user?.email != undefined) {
        email = user.data.user?.email;    
        //console.log(email)
    }

    if (email == '') {
        is_auth.value = false;
    //} else if (is_link_from_email) {
        // Link from email
    //    is_auth.value = true;

    } else {        
        const url = '/api/musician2_detail?email=' + email;
        //console.log('url')
        //console.log(url)

        const { data: musician, pending, error, refresh } = await useFetch(url, {
            server: true,
        });
        data_musician = musician

        //console.log('email')
        //console.log(email)
        //console.log('data_musician')
        //console.log(data_musician)
        //console.log('data_musician.value')
        //console.log(data_musician.value)

        if (data_musician.value == null) {
            // Link from email
            //console.log('Hello');
            //nuxtStorage.localStorage.setData('current_user_email', email);
            navigateTo('/webapp/login_success')

        } else {

            //console.log(data_musician.value[0]['profile_pic']);
            var picture_file = data_musician.value[0]['profile_pic'];

            if ((picture_file.localeCompare('')!=0)&&(picture_file.localeCompare('stream/image_stream.php?code=U537BBBB')!=0)) {
                profile_image = 'https://media04.tetraserver.com/' + picture_file;
            }

            display_name = data_musician.value[0]['display_name'];
            first_name = data_musician.value[0]['first_name'];
            last_name = data_musician.value[0]['last_name'];
        }
        //nuxtStorage.localStorage.setData('current_user_email', email);
        
        is_auth.value = true;

        //try {
        //    var raw_value = JSON.parse(JSON.stringify(data_musician))._rawValue[0];

        //    if (raw_value.profile_pic != '') {
        //        profile_image = 'https://media04.tetraserver.com/' + raw_value.profile_pic;
        //    }
        //} catch(err) {
        //    if (err instanceof Error) console.log(err.message)

        //}
    }
    //console.log('is_auth2');
    //fuzik_token.value = await get_token(fuzik_token_realm_id, email);
    //premium_coin.value = await get_token(premium_coin_realm_id, email);
}

</script>

<style scoped>
.app-header {
    min-height: 72px;
}

.app-sidebar {
    width: 184px;
}

.app-main {
    min-height: 100vh;
    padding: 16px;
}

@media (min-width: 640px) {
    .app-main {
        margin-left: 184px;
    }
}
</style>
