<template>
<!--
  <div class="py-10">

    <div class="flex flex-row space-x-1 pb-4 px-4 sm:px-0">
      <div>Collaboration > Select Layout and Video</div>
      <div
        v-if="step == 'edit_video'"
      >
        &gt; Edit Video
      </div>
    </div>

    <div
      v-if="step === 'select_layout'"
      class="flex flex-col"
    >
      <SelectLayout />
    </div>

    <div
      v-if="step === 'edit_video'" 
      class="flex flex-col"
    >
      <EditVideo />
    </div>
    
  </div>
-->
  <div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-1">
        <div v-for="l in layouts">
          <Layout :layout="l"/>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">

const cookie_consent_form = useCookie("visitor");
cookie_consent_form.value = cookie_consent_form.value || ('No');
  
if (cookie_consent_form.value.localeCompare('Yes')==0) {
    // cookie_form_visible.value = false;
    // Do nothing
} else {
    navigateTo('/');
}
/*
import SelectLayout from "~/components/collaboration/SelectLayout"
import EditVideo from "~/components/collaboration/EditVideo"
 
export default {
  components: { SelectLayout, EditVideo },

  computed: {
    step() {
      return this.$route.query.step
    }
  }
}
*/
  const { data: layouts } = await useFetch('/api/layouts');

  definePageMeta({
    layout: "main",
    app: {
    head: {
      bodyAttrs: {
        class: 'bg-white',
      },
    }
  }
  })


</script>

<style>

</style>