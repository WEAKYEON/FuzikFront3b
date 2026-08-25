<template>
  <div>
    <div 
      @click="toggleSideMenu()"
      :class="showSideMenu ? 'scroll-none bg-black fixed inset-0 z-50 opacity-40 visible' : 'hidden opacity-0'"
    ></div>

    <div
      class="bg-white z-50"
      :class="showSideMenu ? 
        'fixed mx-auto inset-y-0 duration-300 transition-left overflow-scroll left-0 w-3/6 md:w-2/6 lg:w-1/6' : 
        'fixed mx-auto inset-y-0 duration-300 transition-left overflow-scroll -left-full w-3/6 md:w-2/6 lg:w-1/6'
      "
    >
      <div 
        class="flex flex-col py-2 px-2 space-y-1 border-b border-slate-400"
      >
        <div 
          @click="toggleSideMenu()"
          class="flex flex-row justify-end items-center py-2 px-4 cursor-pointer text-xl font-bold"
        >
          &#10005;
        </div>

        <!-- for profile -->
        <NuxtLink
          to="/profile"
          :class="currentMenu === `profile` ? `bg-black text-white` : ``"
      >
          <div
            @click="toggleSideMenu()"
            class="flex flex-row items-center py-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
          >
            <div
              class="w-10 flex flex-row justify-center"
              :class="currentMenu === `profile` ? ` text-yellow` : ``"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="px-1">
              Profile
            </div>
          </div>
        </NuxtLink>

        <!-- for main menus -->
        <NuxtLink
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.url"
          :class="currentMenu === menu.id ? `bg-black text-white` : ``"
        >
          <div
            @click="toggleSideMenu()"
            class="flex flex-row items-center py-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
          >
            <div
              class="w-10 flex flex-row justify-center"
              :class="currentMenu === menu.id ? ` text-yellow` : ``"
            >
              <div v-html="menu.icon"></div>
            </div>
            <div class="px-1">
              {{menu.name}}
            </div>
          </div>

        </NuxtLink>
      </div>
    </div>

    <div
      class="hidden lg:block fixed mx-auto inset-y-0 duration-300 transition-left overflow-scroll left-0 px-1 bg-black text-white z-40"
    >
      <div class="flex flex-col space-y-1">

        <div class="flex flex-row">
          <div 
            @click="toggleDesktopSideMenu()"
            class="w-20 flex flex-row justify-center items-center cursor-pointer py-5"
          >
            <img src="https://media05.fuzikapp.com/app/menu_icon.png" class="w-5 mx-auto">
          </div>


          
        </div>

        <!-- for main menus -->
        <NuxtLink
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.url"
          :class="currentMenu === menu.id ? `bg-black text-white` : ``"
        >
          <div
            class="flex items-center py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
            :class="showDesktopSideMenu ? `flex-row text-base px-2` : `flex-col text-xs` "
          >
            <div
              class="w-10 flex flex-row justify-center"
              :class="currentMenu === menu.id ? ` text-yellow` : ``"
            >
              <div v-html="menu.icon"></div>
            </div>
            <div 
              v-if="showDesktopSideMenu"
              class="px-1"
            >
              {{menu.name}}
            </div>
          </div>

        </NuxtLink>

      </div>
    </div>


  </div>

</template>

<script>

export default {

  props: ["menus"],

  data() {
    return {
      currentIcon: "",
      currentMenu: "home",
    }
  },

  computed: {
    isAuth() {
    //  return this.$store.state.auth.is_auth
    },   
    
    showSideMenu() {
    //  return this.$store.state.menu.toggleSideMenu
    },

    showDesktopSideMenu() {
    //  return this.$store.state.menu.toggleDesktopSideMenu
    },
  },

  methods: {
    toggleSideMenu(){
    //  this.$store.commit(`menu/TOGGLE_SIDE_MENU`)
    },

    toggleDesktopSideMenu(){
    //  this.$store.commit(`menu/TOGGLE_DESKTOP_SIDE_MENU`)
    },
  } 
  
}
</script>

<style>

</style>