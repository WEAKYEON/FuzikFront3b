<template>
  <div>
    <SigninForm />
  </div>
</template>

<script>
import SigninForm from '~/components/auth/SigninForm.vue'
export default {
  components: { SigninForm },
}
</script>

<style>

</style>
<script setup>
definePageMeta({ redirect: "/webapp/login" });
</script>
