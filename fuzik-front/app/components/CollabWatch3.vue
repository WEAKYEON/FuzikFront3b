<template>
    <div>
      <div class="layout-selection">
        <div class="text-lg text-white dark:text-white">Select your layout for jamming this play.</div>
          <div class="layout-selection__grid">
            <div v-for="l in layouts" :key="l.layout_name">
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
.layout-selection {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0 160px;
}

.layout-selection__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 1279px) {
  .layout-selection__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .layout-selection__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .layout-selection {
    padding-inline: 12px;
  }

  .layout-selection__grid {
    grid-template-columns: 1fr;
  }
}
</style>
