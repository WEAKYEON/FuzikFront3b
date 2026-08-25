<template>
    <div>
        <div class=" rounded-lg bg-white">
            <NuxtLink :to="target">
                <img :src="layout_image" class="object-cover object-center rounded-lg" data-tooltip-placement="bottom"   data-tooltip-style="light">
                <div role="tooltip" class="max-h-10 text-center absolute z-10  invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ description }}
                <div class="tooltip-arrow" data-popper-arrow></div>
            
            </div>
            </NuxtLink>
            </div>

    </div>
</template>

<script setup lang="ts">


const { layout2 } = defineProps(['layout2']);
/*
const { layout_name } = defineProps(['layout_name']);
const { layout_file_location } = defineProps(['layout_file_location']);
const { description } = defineProps(['description']);
const { l_videos_num } = defineProps(['l_videos_num']);
const { p_videos_num } = defineProps(['p_videos_num']);

//const layout_name = ref('');
//    const layout_file_location = ref('');
//    const description = ref('');
//    const l_videos_num = ref(0);
//    const p_videos_num = ref(0);
  */  

var layout_image = 'https://media05.fuzikapp.com/' + layout2.layout_file_location;
var description = layout2.description
var target = "/collaboration03?code=" + layout2.layout_name 


useHead({
    script: [{
                src: 'https://media05.fuzikapp.com/app/flowbite.min.js',
            }],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://media05.fuzikapp.com/app/flowbite.min.css',

        }
    ]
});


</script>

<style scoped>

</style>