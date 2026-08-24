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
                        <BackToWebsiteButton class="ms-2 md:me-24" />
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
const is_auth = ref(false);
const client = useSupabaseClient();
const { musician, profileImage: profile_image, refresh } = useCurrentUser();
const { data } = await client.auth.getSession();
const { session } = data;
const email = computed(() => session?.user.email || '');
const display_name = computed(() => musician.value?.display_name || '');
const first_name = computed(() => musician.value?.first_name || '');
const last_name = computed(() => musician.value?.last_name || '');

if (email.value) {
    try {
        if (!musician.value || musician.value.email !== email.value) {
            await refresh(email.value);
        }
        is_auth.value = true;
    } catch {
        await navigateTo('/webapp/login_success');
    }
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
