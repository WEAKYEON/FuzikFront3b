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
  <div class="layout-page">
      <div class="layout-page__grid">
        <div v-for="l in layouts" :key="l.layout_name">
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

<style scoped>
.layout-page__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 1279px) {
  .layout-page__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .layout-page__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .layout-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
