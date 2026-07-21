<template>
  <div class="flex flex-col text-xs sm:text-base font-noto transition-all">

    <NavMenu
      :notices="notices"
    />

    <SideMenu 
      :menus="menus" 
    />

    <div class="lg:container lg:mx-auto flex flex-row items-start px-0 lg:px-10">
      <slot class="w-full" />
    </div>

  </div>
</template>

<script>
/*
export default {
 
  data() {
    return {

      menus: [
        { 
          id:"index", 
          url: "/", 
          name: "Home", 
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
            </svg>
          ` 
        },
        { 
          id:"upload", 
          url: "/upload?step=select_file", 
          name: "Upload", 
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
          ` 
        },
        { 
          id:"collaboration", 
          url: "/collaboration?step=select_layout", 
          name: "Collaboration", 
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          ` 
        },
        { 
          id:"video", 
          url: "/videos", 
          name: "Your Videos", 
          icon: `
            <svg viewBox="0 0 24 24" class="w-6 h-6">
              <path fill="currentColor" d="M4,2H14V4H4V14H2V4C2,2.89 2.89,2 4,2M8,6H18V8H8V18H6V8C6,6.89 6.89,6 8,6M12,10H20C21.11,10 22,10.89 22,12V20C22,21.11 21.11,22 20,22H12C10.89,22 10,21.11 10,20V12C10,10.89 10.89,10 12,10M14,12V20L20,16L14,12Z" />
            </svg>
          ` 
        },
      ],

      notices: [],
    }
  },

  computed: {

    routeName() {
      return this.$route.name
    },

  },

  async fetch() {

    // console.log("routeName is => " + this.routeName)

    this.notices = [
      { 
        id: 1, 
        userid: 1, 
        profile: null, 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        thumbnail: "/video_thumbnail.webp", 
      },
      { 
        id: 2, 
        userid: 1, 
        profile: "/rank_artist.webp", 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        thumbnail: "/video_thumbnail.webp", 
      },
      { 
        id: 3, 
        userid: 1, 
        profile: null, 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        thumbnail: "/video_thumbnail.webp", 
      },
    ]

  },

}
*/
</script>

<style>

</style>