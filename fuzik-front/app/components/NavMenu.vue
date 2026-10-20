<template>
  <div>
    <div class="bg-black">
      <div class="flex flex-row justify-between items-center px-0 lg:px-2">

        <!-- Left -->
        <div class="flex flex-row">
          <div 
            @click="toggleSideMenu()"
            class="w-10 lg:w-20 flex flex-row justify-center items-center cursor-pointer"
          >
            <img src="https://media05.fuzikapp.com/app/menu_icon.png" class="w-5 mx-auto py-4">
          </div>

          <div class="py-2">
            <NuxtLink to="/"><img src="https://media05.fuzikapp.com/app/logo.png" class="w-20"></NuxtLink>
          </div>
        </div>
        
        <!-- Center -->
        <div 
          class="hidden sm:block w-2/5 sm:w-1/3 relative"
        >
          <form 
            @submit.prevent="doSearch()"
          >
            <input 
              v-model="txtSearch"
              type="text" 
              class="w-full outline-none rounded-xl pl-4 pr-8 text-base"
            >
          </form>
          <div 
            @click="doSearch()"
            id="searchIcon" 
            class="absolute top-1 right-2 cursor-pointer transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        
        <!-- Right  -->
        <div class="flex flex-row justify-end items-center space-x-2 text-white">

          <!-- SearchInput -->
          <div
            @click="toggleSearchInput()"
            class="flex lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div
            class="w-full text-black bg-white z-50"
            :class="showSearchInput ? 
              'fixed mx-auto duration-500 transition-bottom overflow-scroll top-0 w-full' : 
              'fixed mx-auto duration-500 transition-bottom overflow-scroll -top-24 w-full'
            "
          >
            <div class="flex flex-row justify-between items-center bg-white px-6 py-2 border-b border-gray-200">
              <div
                @click="toggleSearchInput()"
                class="flex flex-row justify-end cursor-pointer"
              >
                <div class="text-4xl lg:text-5xl">&times;</div>
              </div>
              <div class="w-full flex flex-row">
                <input 
                  v-model="txtSearch"
                  type="text" 
                  class="w-full outline-none rounded-xl pl-4 pr-8 text-base"
                >
                <div 
                  @click="doSearch()"
                  id="searchIcon" 
                  class="cursor-pointer transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- without Auth -->
          <div 
            v-if="!isAuth"
            class="px-2"
          >
            <NuxtLink 
              to="signin"
              class="flex flex-row justify-center items-center space-x-2 text-black bg-yellow px-2 lg:px-4 py-1 rounded-xl cursor-pointer transition-all hover:bg-yellow/90"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="text-xs sm:text-sm">
                Login/Register
              </div>
            </NuxtLink>
          </div>

          <!-- with Auth -->
          <div
            v-else
            class="flex flex-row space-x-4 text-white px-2 py-1"  
          >
            <div
              @click="toggleNotification()"
              class="transition-all duration-300 hover:text-yellow"
            >
              <div class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>

              <div 
                v-if="showNotification"              
                class="w-full absolute top-12 left-0 z-40 text-black"
              >
                <div class="flex flex-row justify-end items-center px-4">
                  <div class="w-full lg:w-1/2 flex flex-col divide-y divide-slate-300 rounded-lg shadow-xl bg-white border border-slate-200 px-4 pb-4">

                    <div class="text-lg font-bold p-4">Notifications</div>
                    <div class="flex flex-col"> 
                      <!--
                      <div
                        v-for="(notice, i) in notices"
                        :key="i"
                        class="flex flex-row justify-between items-center px-2 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-yellow text-sm"
                      >

                        <div class="flex flex-row justify-start items-center space-x-4">
                          <div 
                            v-if="notice"
                            class="flex flex-row justify-between items-center"  
                          >
                            <div class="w-12 h-12 lg:w-16 lg:h-16">
                              
                              <img 
                                src="notice"
                                class="object-cover object-center"
                              >
                            </div>
                          </div>
                          <div 
                            v-else
                            class="flex flex-row justify-between items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 lg:w-16 lg:h-16">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>

                          <div class="flex flex-col pr-2 text-xs sm:text-base">
                            <div>Lorem Ipsum uploaded :</div>
                            <div>{{notice}}</div>
                          </div>
                        </div>

                        <div class="aspect-video w-36">
                          
                          <img src="notice" class="object-cover object-center">
                          
                        </div>

                      </div>
                    -->
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div 
              @click="toggleProfile()"
              class="transition-all duration-300 hover:text-yellow"
            >
              <div class="relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="absolute bottom-0 right-0">
                  <img src="" class="w-3 h-3">
                </div>
              </div>

              <div 
                v-if="showProfile"              
                class="w-full absolute top-12 left-0 z-40 text-black "
              >
                <div class="flex flex-row justify-end items-center px-4">
                  <div class="w-full md:w-2/4 lg:w-1/4 flex flex-col divide-y divide-slate-300 rounded-lg shadow-xl bg-white border border-slate-200 px-4 pb-4">

                    <div class="flex flex-row justify-start items-center space-x-6 py-4">

                      <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 lg:w-20 lg:h-20">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div class="absolute bottom-0 right-0">
                          <img src="" cladss="w-8 h-8">
                        </div>
                      </div>

                      <div class="flex flex-col space-y-2">
                        <div class="text-xl font-bold px-4">{{username}}</div>
                        <div class="flex flex-row justify-center items-center space-x-2 bg-black px-4 py-1 text-white rounded-full text-sm">
                          <div>Rank: </div>
                          <div class="text-yellow">{{rank}}</div>
                        </div>
                      </div>

                    </div>

                    <div class="flex flex-col pt-4"> 
                      <NuxtLink 
                        to="/webapp/profile"
                        class="flex flex-row space-x-4 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-yellow"
                      >
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          Profile Settings
                        </div>
                      </NuxtLink>
                      <div 
                        @click="doSignOut()"
                        class="flex flex-row space-x-4 p-2 rounded-lg cursor-pointer  transition-all duration-300 hover:bg-yellow">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                          </svg>
                        </div>
                        <div>
                          Sign Out
                        </div>
                      </div>
                      <div class="flex flex-row space-x-4 p-2 rounded-lg cursor-pointer  transition-all duration-300 hover:bg-yellow">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                          </svg>
                        </div>
                        <div>
                          Contact Us
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >

withDefaults(defineProps<{ notices?: Noti[] }>(), { notices: () => [] });

const showSearchInput = ref(false);
const showNotification = ref(false);
const showProfile = ref(false);
const currentIcon = ref("");
const currentMenu = ref("home");
const txtSearch = ref("");

interface Noti {
  desc: String,
  profile: String,
  thumbnail: String
}



/*

const props = defineProps({
  notices: [],
})
*/

/*
export default ({

  props: ["notices"],

  data() {
    return {
      showSearchInput: false,
      showNotification: false,
      showProfile: false,
      currentIcon: "",
      currentMenu: "home",
      txtSearch: "",
    }
  },
}*/

var isAuth = false; 

async function check_auth() {
  //return this.$store.state.auth.is_auth

  //return false;
}

//  computed: {
  /*
async function isAuth() {
  //return this.$store.state.auth.is_auth
  return false;
}*/

async function rank_icon() {
  //return this.$store.state.auth.rank_icon
  return '';
}

async function rank() {
  //return this.$store.state.auth.rank
  return '';
}

async function username() {
  //return this.$store.state.auth.username
}

//  },


async function toggleSearchInput() {
  /*
  this.showSearchInput = !this.showSearchInput
  this.showProfile = false
  this.showNotification = false
  this.txtSearch = ""
  */
}

async function toggleNotification() {
  /*
    this.showNotification = !this.showNotification
    this.showProfile = false*/
}
    
async function  toggleProfile() {
  /*  
  this.showProfile = !this.showProfile
    this.showNotification = false
    */
}

async function  doSearch() {
  // console.log(this.txtSearch)
  /*
  if (this.showSearchInput) {
    this.showSearchInput = !this.showSearchInput
    this.txtSearch = ""
  }
  */
}

async function  doSignOut() {
  /*
  //this.$store.commit(`auth/SIGN_OUT`)
  window.location.reload() */
}

async function toggleSideMenu(){
  /*
  this.showProfile = false
  this.showNotification = false */
  //this.$store.commit(`menu/TOGGLE_SIDE_MENU`)
}

</script>

<style>

</style>