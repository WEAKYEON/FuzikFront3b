<template>
  <div class="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center items-center gap-2">
    <div
      v-for="(category, i) in categories"
      :key="i"
      @click="onSelectCategory(category.q)"
      class="px-2 py-1 rounded-xl cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
      :class="currentCategory == category.q ? `bg-black text-white` : `bg-gray-300` "
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {

  props: ["categories"],

  data() {
    return {
      currentCategory: "all",
    }
  },

  mounted() {
    if (Object.keys(this.$route.query).length > 0) {
      this.currentCategory = this.$route.query.q
    }
    // this.onSelectCategory(this.currentCategory) 
  },

  methods: {

    onSelectCategory(category) {
      this.currentCategory = category
      this.$router.push(`/?q=${category}`)
      // window.location.reload()
    },

  }
 
}
</script>

<style>

</style>