<template>
  <article
    class="selection-card"
    role="button"
    tabindex="0"
    :aria-label="`Select ${play.music_title || 'video'}`"
    @click="emit('select', play)"
    @keydown.enter.prevent="emit('select', play)"
    @keydown.space.prevent="emit('select', play)"
  >
    <div class="selection-card__media">
        <img :src="`${play.preview}`" :alt="play.music_title || 'Collaboration video'"
        draggable="true"
        
        @dragstart="drag($event, play.url)"
        >
    </div>

    <div class="selection-card__title">
        <span>{{ play.music_title }}</span>
        <img class="selection-card__avatar"
        :src='profile_image' 
        alt="">
    </div>
  </article>
</template>

<script setup lang="ts">
const { play } = defineProps(['play']);
const emit = defineEmits<{
  select: [play: any]
}>()

var profile_image = 'https://media05.fuzikapp.com/app/music_staff.png';

//console.log('profile_pic');
//console.log(play.musician_profile_pic);

if (play.musician_profile_pic?.length) {
  profile_image = 'https://media05.fuzikapp.com/' + play.musician_profile_pic
} else {
  profile_image = 'https://media05.fuzikapp.com/app/music_staff.png';
}

function drag(ev:any, url:any) {
  ev.dataTransfer?.setData("text/plain", url);
}

</script>

<style scoped>
.selection-card {
  min-width: 0;
  color: #fff;
  cursor: pointer;
  outline: none;
}

.selection-card:focus-visible .selection-card__media {
  box-shadow: 0 0 0 2px #fff600;
}

.selection-card__media {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #111;
  border-radius: 8px;
}

.selection-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.selection-card__title {
  display: flex;
  min-height: 38px;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 3px;
  font-size: 16px;
  text-align: right;
}

.selection-card__title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selection-card__avatar {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  object-fit: cover;
  background: #fff;
  border: 2px solid #000;
  border-radius: 9999px;
}
</style>
