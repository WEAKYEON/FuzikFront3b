<template>
    <div class="py-0 sm:py-2">
        <NuxtLink :to="target" >
            <div class="layout-card bg-slate-100 rounded-lg">
                <img :src="layout_image" class="w-full object-cover object-center rounded-lg" :alt="description" data-tooltip-placement="bottom" :data-tooltip-target="description_id" data-tooltip-style="light">
                <div :id="description_id" role="tooltip" class="max-h-10 text-center absolute z-10  invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ description }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { layout, video01_p, video02_p, video03_p } = defineProps(['layout', 'video01_p',  'video02_p', 'video03_p']);

var layout_image = 'https://media04.tetraserver.com/' + layout.layout_file_location;

var  description = layout.description
const target = {
    path: '/webapp/collaboration02',
    query: {
        code: layout.layout_name,
        video01: video01_p,
        video02: video02_p,
        video03: video03_p
    }
};

var description_id = "desc_" + layout.layout_file_location;

</script>

<style scoped>
.layout-card {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.layout-card img {
    height: 100%;
}
</style>
