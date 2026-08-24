<template>
    <div>
      <div class="flex flex-col space-y-2 pt-4 pb-40 px-3 lg:px-0">
        <div class="text-lg text-white dark:text-white">Select your layout for jamming this play.</div>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
            <div v-for="l in layouts">
              <Layout1
                :layout="l"
                :video01_p = "video01_url"
              />
            </div>
          </div>
        </div>           
    </div>
</template>

<script setup lang="ts">

var url = '/api/layouts';

const { dimension, video01_url } = defineProps(['dimension', 'video01_url']);

if (dimension != undefined) {
  if (dimension.localeCompare('P')==0) {
    url = url + '?p_dimension=P';
  } else {
    url = url + '?p_dimension=L';
  }
} else {
  url = url + '';
}


const { data: layouts } = await useFetch(url);

</script>

<style scoped>

</style>