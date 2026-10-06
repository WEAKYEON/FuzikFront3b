<script setup lang="ts">
withDefaults(defineProps<{ locale?: 'en' | 'th' }>(), { locale: 'en' })
// Shared showcase videos for both website languages.
const videoIds = ref([
  'KzYq0T5ur0s',
  'c1VWzb_o_-M',
  'DrILeGU-BEw',
  'WsnFdLQsnsM',
  'kbvhGo8kfFY',
  'tXvd3IUJ6oc',
  'jomFkAWR6zw',
])

const currentIndex = ref(0)

const nextVideo = () => {
  if (currentIndex.value < videoIds.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to start
  }
}

const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = videoIds.value.length - 1 // Loop to end
  }
}
</script>

<template>
  <div class="container mx-auto h-full">
    <div class="w-full h-fullitems-center">
      <div class="w-full bg-black rounded-xl overflow-hidden shadow-2xl">
        <!-- Video Container -->
        <div class="relative aspect-video">
          <iframe
            class="absolute inset-0 w-full h-full"
            :src="`https://www.youtube.com/embed/${videoIds[currentIndex]}`"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-between p-6 bg-gray-800">
          <button
            @click="prevVideo"
            class="px-6 py-2 bg-yellow-300 hover:bg-[#fff600] text-[#111111] transition rounded-full font-semibold"
          >
            {{ locale === 'th' ? 'ก่อนหน้า' : 'Previous' }}
          </button>

          <div class="text-sm font-mono">
            {{ locale === 'th' ? 'วิดีโอ' : 'Video' }} {{ currentIndex + 1 }}
            {{ locale === 'th' ? 'จากทั้งหมด' : 'of' }} {{ videoIds.length }}
          </div>

          <button
            @click="nextVideo"
            class="px-6 py-2 bg-yellow-300 hover:bg-[#fff600] text-[#111111] transition rounded-full font-semibold"
          >
            {{ locale === 'th' ? 'ถัดไป' : 'Next' }}
          </button>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(id, index) in videoIds"
            :key="id"
            @click="currentIndex = index"
            :class="[
              'w-3 h-3 rounded-full transition-all',
              currentIndex === index ? 'bg-[#fff600] scale-125' : 'bg-gray-600',
            ]"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
