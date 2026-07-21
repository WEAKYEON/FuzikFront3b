<template>
  <div class="flex flex-col divide-y divide-slate-200">
    
    <div class="flex flex-col justify-start items-start space-y-4 py-6 px-3 lg:px-0">
      <div class="text-xl">{{title}}</div>

      <div class="flex flex-col lg:flex-row justify-start items-start space-y-4 lg:space-y-0 space-x-0 lg:space-x-20">

        <div class="flex flex-row justify-start items-center space-x-4">
          <div class="w-12 h-12">
            <img :src="profile_pic">
          </div>
          <div class="flex flex-col justify-between items-start">
            <div>Created by {{ musician_name }}</div>
            <!-- Edited by Ohm 31 May 2023 -->
            <div class="text-gray-400">{{ views }} views • {{ durationTime(created_time) }}</div>            
          </div>
        </div>

        <div class="flex flex-row justify-end items-center space-x-2">
          <div 
            @click="toggleFans()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-white hover:lg:fill-white"
          >
            <div v-if="!isFans" class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 96 100"><path d="M76.3 1c-3.1 1.3-4.9 5.5-5.6 13.1-.3 3.6-1.4 8.6-2.3 11-2.4 6-8.4 15.1-9.8 14.6-.6-.2-1.4-3.1-1.8-6.5-.4-3.4-1.6-8.1-2.7-10.6-2.8-6.4-10.2-14-16.4-16.7-18.5-8.1-46 6.3-35.4 18.7 2 2.3 3.7 2.9 11.2 4 8.4 1.2 17.7 4.8 22.9 8.9 3 2.3.5 4.1-7.7 5.4-12.1 2-21.3 8.6-26.1 19C1 65.5.5 68.4.6 75c0 9.7 2.2 15.5 8 21.7 3.1 3.3 3.8 3.5 7.5 3 6.4-.8 7.9-3.1 9-12.8 1-8.6 4.4-17.8 8.6-22.9 3-3.5 4.9-1.5 5.6 5.9 1.9 21.5 21.1 34.4 41.6 28.2 13.5-4.1 19.1-13.2 12.3-20-2.3-2.3-3.8-2.9-9.7-3.4-3.9-.3-9.5-1.5-12.4-2.6-5.3-2-13.1-6.8-13.1-8 0-.4 1.3-2 2.8-3.7 2.2-2.4 3.9-3.2 7.9-3.7 10-1.2 19.3-8 24-17.5 2.4-4.9 2.8-6.9 2.8-14.2-.1-7.3-.5-9.3-3-14.3C87.9 1.4 82.8-1.6 76.3 1zm7.6 6.1c3.9 4.3 6.4 11.1 6.5 17.9.2 11.9-7.2 22.3-18.1 25.6-7.1 2.1-8.1 1.9-9.2-2.2-.9-3.4-.7-4 2.3-7.8C71.6 33 76 21.6 76 13.1 76 8.6 78 5 80.6 5c.7 0 2.2 1 3.3 2.1zm-47.4 4.3c8.1 3.8 13.2 10.9 15 20.8l.7 3.8h-4.5c-3.7 0-5.7-.8-10.3-4-7.3-5.1-15.2-8-23.7-8.7-6-.5-7-.9-7.9-2.9-1.4-3.1.9-5.8 7.7-9 6.9-3.3 16.1-3.3 23 0zM55.3 45c2.9 3.2 3.6 8.4 1.7 12.1-1.2 2.2-6.1 4.9-8.9 4.9-8.2 0-13-10-8-16.4 4.3-5.4 10.5-5.7 15.2-.6zm-22.7 7.2c.1 3.4-.7 5.3-4.2 10.5C23.5 69.9 20 80 20 87c0 3.1-.6 5.4-1.6 6.4-3.2 3.3-6.1 1.4-10-6.4-2.3-4.4-2.8-6.8-2.8-12.5 0-7.3 1.3-10.8 6-17.2 2.8-3.7 13.5-9.3 17.8-9.3 3 0 3.1.2 3.2 4.2zm25 18.3c7.3 5.6 17.9 9.5 26.1 9.5 4.2 0 7.3 1.9 7.3 4.5 0 3.6-8.9 8.8-17.2 10-13.4 2-26.8-8.7-29.3-23.3l-.7-4.2h4.6c3.7 0 5.5.7 9.2 3.5z"/></svg>
            </div>

            <div v-else class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 96 100"><path d="M76.3 1c-3.1 1.3-4.9 5.5-5.6 13.1-.3 3.6-1.4 8.6-2.3 11-2.4 6-8.4 15.1-9.8 14.6-.6-.2-1.4-3.1-1.8-6.5-.4-3.4-1.6-8.1-2.7-10.6-2.8-6.4-10.2-14-16.4-16.7-18.5-8.1-46 6.3-35.4 18.7 2 2.3 3.7 2.9 11.2 4 8.4 1.2 17.7 4.8 22.9 8.9 3 2.3.5 4.1-7.7 5.4-12.1 2-21.3 8.6-26.1 19C1 65.5.5 68.4.6 75c0 9.7 2.2 15.5 8 21.7 3.1 3.3 3.8 3.5 7.5 3 6.4-.8 7.9-3.1 9-12.8 1-8.6 4.4-17.8 8.6-22.9 3-3.5 4.9-1.5 5.6 5.9 1.9 21.5 21.1 34.4 41.6 28.2 13.5-4.1 19.1-13.2 12.3-20-2.3-2.3-3.8-2.9-9.7-3.4-3.9-.3-9.5-1.5-12.4-2.6-5.3-2-13.1-6.8-13.1-8 0-.4 1.3-2 2.8-3.7 2.2-2.4 3.9-3.2 7.9-3.7 10-1.2 19.3-8 24-17.5 2.4-4.9 2.8-6.9 2.8-14.2-.1-7.3-.5-9.3-3-14.3C87.9 1.4 82.8-1.6 76.3 1zm-21 44c2.9 3.2 3.6 8.4 1.7 12.1-1.2 2.2-6.1 4.9-8.9 4.9-8.2 0-13-10-8-16.4 4.3-5.4 10.5-5.7 15.2-.6z"/></svg>
            </div>
            <div>Fans</div>
          </div>
          <div 
            @click="toggleLike()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-white hover:lg:fill-white"
          >
            <div v-if="!isLiked" class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
            </div>

            <div v-else class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
              </svg>
            </div>

            <div>Like</div>
          </div>

          <div 
            @click="showModal()"
            class="flex flex-row justify-center items-center space-x-2 px-4 py-2 bg-gray-200 rounded-xl cursor-pointer trasition-all duration-500 hover:lg:bg-black hover:lg:text-white hover:lg:fill-white"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </div>
            <div>Share</div>
          </div>
        </div>

      </div>
    </div>

    <div class="flex flex-col space-y-2 pt-4 pb-40 px-3 lg:px-0">
      <div class="text-lg">Description</div>
      <div class="w-2/3 text-gray-400">
        {{ desc }}
      </div>
    </div>
    <!--
    <modal 
      name="share-modal" 
      width="100%"
      height="auto" 
      scrollable
      class="flex justify-center items-start py-6 px-4 lg:px-48 xl:px-96"
      v-show="visibleModal"
    >
      <div class="modal-content px-6 py-4">
        
        <div class="flex flex-row justify-between items-center">
          <div class="text-xl">Share</div>
          <div 
            @click="closeModal()"
            class="cursor-pointer text-2xl transition-all hover:lg:text-yellow"
          >&#10005;</div>
        </div>

        <div class="w-full flex flex-col space-y-4 pt-4 pb-10">

          <div class="flex flex-wrap justify-start items-center">

            <NuxtLink 
              to="#"
              target="_blank"
              class="w-12 h-12 lg:w-16 lg:h-16 m-2 bg-gray-200 rounded-full relative"
            >
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                &lt;&nbsp;/&nbsp;&gt;
              </div>
            </NuxtLink>

            <NuxtLink
              v-for="(logo, i) in social_logos"
              :key="i"
              :to="`#`"
              target="_blank"
              class="w-12 h-12 lg:w-16 lg:h-16 m-2"
            >
              <img :src="logo.img">
            </NuxtLink>
          </div>

          <div class="flex flex-row justify-between items-center bg-gray-200 border border-gray-300 rounded-xl p-1 md:p-2">
            <div class="w-full pl-2 md:pl-4 pr-1 md:pr-10">
              <div class="w-full bg-transparent text-base md:text-xl font-bold leading-5 md:leading-8 tracking-wider line-clamp-1">
                {{ currentUrl }}
              </div>
            </div>
            <div 
              @click="toCopy()"
              class="bg-blue-600 border-2 border-blue-600 text-white text-sm md:text-lg px-1 md:px-4 py-0 md:py-1 rounded-full cursor-pointer transition-all duration-500 hover:lg:md:bg-transparent hover:lg:md:text-blue-600"
            >
              Copy
            </div>
          </div>
        </div>
        
      </div>
    </modal>
  -->
  </div>
</template>

<script>
export default {
  props: [ 
    "video_location",
    "musician_name",
    "profile_pic",
    
    "title",
    "views",
    "is_fans",

    "is_liked",
    "desc",
    "url",

    "updated_time",
    "created_time",
  ],
  data() {
    return {
      visibleModal: false,
      isFans: false,
      isLiked: false,
      social_logos: [
        { url: `/watch?p=${this.url}`, img: "/icons/facebook.webp" },
        { url: `/watch?p=${this.url}`, img: "/icons/instagram.webp" },
        { url: `/watch?p=${this.url}`, img: "/icons/line.webp" },
        { url: `/watch?p=${this.url}`, img: "/icons/messenger.webp" },
        { url: `/watch?p=${this.url}`, img: "/icons/twitter.webp" },
      
      ],
      duration_time: durationTime(this.created_time),

    }
  },
/*
  computed: {
    currentUrl() {
      return `${process.env.baseURL}/watch?p=${this.url}`
    }
  },

  mounted() {
    // this.showModal()
  },
*/
  methods: {

    durationTime(dateString) {
            const date = new Date(Date.parse(dateString));
            const now = Date.now();
            //document.write('now: ' + now);
            //document.write('date: ' + date);
            
            var duration = now - date;
            //document.write('duration: ' + duration);
            var str_time = '';

            const year_val = (1000 * 60 * 60 * 24 * 365); //31536000000;
            const month_val = (1000 * 60 * 60 * 24 * 30); //2592000000;
            const day_val = (1000 * 60 * 60 * 24); //86400000;
            const hour_val = (1000 * 60 * 60); //3600000
            const min_val = (1000 * 60); //60000
            
            //document.write('year_val: ' + year_val);
            var year_num = 0;
            if (duration > year_val) {
                year_num = Math.floor(duration / year_val);
                //duration = duration - (year_num  * year_val);
                //document.write('year_num:' + year_num);
                if (year_num <= 1) {
                    str_time = 'one year ago';
                } else  {
                    str_time = year_num + ' years ago';
                }
            } else if (duration > month_val ) {
                var month_num = Math.floor(duration / month_val);
                if (month_num <= 1) {
                    str_time = 'one month ago';
                } else {
                    str_time = month_num + ' months ago';
                }
            } else if (duration > day_val ) {
                var day_num = Math.floor(duration / day_val);
                if (day_num <= 1) {
                    str_time = 'one day ago';
                } else {
                    str_time = day_num + ' days ago';
                }
            } else if (duration > hour_val ) {
                var hour_num = Math.floor(duration / hour_val);
                if (hour_num <= 1) {
                    str_time = 'one hour ago';
                } else {
                    str_time = hour_num + ' hours ago';
                }
            } else if (duration > min_val ) {
                var min_num = Math.floor(duration / min_val);
                if (min_num <= 1) {
                    str_time = 'one minute ago';
                } else {
                    str_time = min_num + ' minutes ago';
                }
            } else { 
                str_time = 'just now';
            } 
            return str_time;
    },
/*
    getElapsedTime(dateString) {
      const date = new Date(Date.parse(dateString));
      const now = Date.now();
      const elapsed = now - date;

      if (elapsed < 1000) {
        return 'just now';
      } else if (elapsed < 60 * 1000) {
        const seconds = Math.floor(elapsed / 1000);
        return `${seconds} second${seconds == 1 ? '' : 's'} ago`;
      } else if (elapsed < 60 * 60 * 1000) {
        const minutes = Math.floor(elapsed / (1000 * 60));
        return `${minutes} minute${minutes == 1 ? '' : 's'} ago`;
      } else if (elapsed < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        return `${hours} hour${hours == 1 ? '' : 's'} ago`;
      } else if (elapsed < 30 * 24 * 60 * 60 * 1000) {
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        return `${days} day${days == 1 ? '' : 's'} ago`;
      } else if (elapsed < 365 * 24 * 60 * 60 * 1000) {
        const months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
        return `${months} month${months == 1 ? '' : 's'} ago`;
      } else {
        const years = now.getFullYear() - date.getFullYear();
        return `${years} year${years == 1 ? '' : 's'} ago`;
      }
    },
*/
    toggleFans() {
      // to toggle fans
      this.isFans = !this.isFans
    },

    toggleLike() {
      // to toggle like
      this.isLiked = !this.isLiked
    },

    showModal() {
      /*
      this.visibleModal = true
      this.$modal.show('share-modal')
      */
    },

    closeModal() {
      /*
      this.visibleModal = false
      this.$modal.hide('share-modal')
      */
    },

    async toCopy() {

      await this.$copyText(this.currentUrl);

      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        customClass: {
          popup: "colored-toast"
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false
      })

      await Toast.fire({
        icon: "success",
        title: "Copied!"
      })
    },

  }

}
</script>

<style>

</style>