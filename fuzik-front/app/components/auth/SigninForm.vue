<template>
  <div class="flex flex-row justify-center items-center py-0 lg:py-16 px-0 lg:px-24">

    <div class="flex flex-col lg:flex-row justify-center items-center rounded-xl lg:border border-gray-200 lg:shadow-xl">

      <div class="hidden lg:flex w-full lg:w-1/2">
        <div class="max-h-screen overflow-hidden lg:rounded-l-xl">
          <img src="https://media05.fuzikapp.com/app/sing_banner.png" class="object-center">
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <form @submit.prevent="doSignIn()">
          <div class="w-full lg:w-3/5 mx-auto flex flex-col justify-start items-center space-y-6 pt-2 pb-10 px-4 lg:px-10">

            <div class="text-2xl font-bold px-20 py-10">
              <img src="https://media05.fuzikapp.com/app/logo_round.png">
            </div>

            <div class="w-full flex flex-col space-y-2">
              <div class="w-full flex flex-col space-y-1">
                <div class="font-bold">E-mail</div>
                <input 
                  v-model="txtEmail"
                  type="email" 
                  placeholder="name@domain.com"
                  class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
                >
              </div>

              <div class="w-full flex flex-col space-y-1">
                <div class="font-bold">Password</div>
                <input 
                  v-model="txtPassword"
                  type="password" 
                  placeholder="at least 8 characters"
                  class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
                >
              </div>
            </div>

            <div class="hidden">
              <NuxtLink to="/">I forgot password.</NuxtLink>
            </div>

            <button 
              class="w-full flex flex-row justify-center items-center py-3 bg-yellow rounded-xl cursor-pointer transition-all hover:bg-yellow/90"
            >
              <div class="text-lg font-bold text-center">Login</div>
            </button>

            <div class="w-full relative flex flex-row justify-between space-x-2">
              <div class="w-full border-t mt-3"></div>
              <div class="flex flex-row space-x-2">
                <div class="text-slate-400">or</div>
                <div class="">
                  <NuxtLink to="/signup">Register</NuxtLink>
                </div>
              </div>
              <div class="w-full border-t mt-3"></div>
            </div>

          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      txtEmail: "",
      txtPassword: "",
    }
  },
    
  computed: {
    isAuth() {
      return false;// this.$store.state.auth.is_auth
    }
  }, 

  mounted() {
    if (this.isAuth) {
      this.$router.push("/")
    }
  },

  methods: {

    doSignIn() {
      const data = {
        email: this.txtEmail,
        password: this.txtPassword,
      }
      //this.$store.commit(`auth/SET_AUTH`)

      this.$swal.fire(
        "",
        "เข้าสู่ระบบเรียบร้อย",
        "success"
      ).then(() => {
        // window.location.reload()
        this.$router.push("/")
      })

    },

  }
}
</script>

<style>

</style>