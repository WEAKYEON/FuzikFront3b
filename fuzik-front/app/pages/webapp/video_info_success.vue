<template>
    <div class="text-center">
        {{ display }}
    </div>
</template>

<script setup lang="ts">

const cookie_current_url = useCookie<string>('current_url');
const current_url = cookie_current_url.value;
const display = ref('Information updated');

if (!current_url) {
  display.value = 'Direct access not allowed';
  await navigateTo('/');
} else {
  await navigateTo('/webapp/watch/' + encodeURIComponent(current_url));
}

definePageMeta({
  layout: "empty"
})
</script>

<style scoped>

</style>