  <template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1">
      <NuxtLink
        v-for="(video, i) in videos"
        :key="i"
        :to="`/watch?mode=${currentMode}&p=${video.url}`"
        class="flex flex-col space-y-2 rounded-xl transition-all duration-500 hover:sm:bg-black hover:sm:text-white hover:sm:font-bold px-0 sm:px-2 pb-4"
      > 
        <!-- Video Thumbnail -->
        <div class="py-0 sm:py-2">
          <div class="aspect-w-16 aspect-h-9 bg-slate-100 rounded-lg">
            <img :src="`${video.preview}`" class="w-full object-cover object-center rounded-lg">
          </div>
        </div>

        <div class="flex flex-row items-start space-x-2">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="flex flex-col">
            <div v-if="mode == `solo`" class="line-clamp-2">{{ video.video_title }}</div>
            <div v-if="mode == `collab`" class="line-clamp-2">{{ video.description }}</div>
            <div class="flex flex-col text-gray-400 text-xs lg:text-sm">
              <div v-if="mode == `solo`">Created by {{video.musician_name}}</div>
              <div v-if="mode == `collab`">Created by {{video.owner_name}}</div>
              <div> {{ video.view_count }} views • {{ durationTime(video.created_time) }}</div>
            </div>
          </div>
        </div>

      </NuxtLink>
    </div>
  </template>

  <script>
  export default {
    props: ["mode", "videos"],

    computed: {
      currentMode() {
        return this.mode
      }
    },

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

      getElapsedTime(dateString) {

        const date = new Date(dateString);
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

      }
    }
  }
  </script>

  <style>

  </style>