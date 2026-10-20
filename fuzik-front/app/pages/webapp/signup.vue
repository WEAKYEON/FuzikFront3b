<template>
  <div>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '~/components/auth/SignupForm.vue'
export default {
  components: { SignupForm },
}
</script>

<style>

</style>
<script setup>
definePageMeta({ redirect: "/webapp/register" });
</script>
