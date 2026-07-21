<template>
    <div>
      <div class="flex flex-col space-y-2 pt-4 pb-40 px-3 lg:px-0">
        <div class="text-lg text-white dark:text-white">Select your layout for jamming this play.</div>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
            <div v-for="l in layouts">
              <Layout3
                :layout="l"
                :video01_p = "video01_url"
                :video02_p = "video02_url"
                :video03_p = "video03_url"
                :video04_p = "video04_url"
              />
            </div>
          </div>
        </div>           
    </div>
</template>

<script setup lang="ts">

var url = '/api/layouts2?q=a';

const { jam_url, video01_url, video02_url, video03_url, video04_url, layout_l_num, layout_p_num } = defineProps(['jam_url', 'video01_url', 'video02_url', 'video03_url', 'video04_url', 'layout_l_num', 'layout_p_num']);

if (layout_l_num != undefined) {
  url = url + '&l_layout=' + layout_l_num;  
} 

if (layout_p_num != undefined) {
  url = url + '&p_layout=' + layout_p_num;  
}

const { data: layouts } = await useFetch(url);

</script>

<style scoped>

</style>