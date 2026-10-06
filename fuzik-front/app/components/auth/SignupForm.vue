<template>

  
  <div class="flex flex-row justify-center items-center py-0 lg:py-16 px-0 lg:px-24">
    <div class="flex flex-col lg:flex-row justify-center items-center rounded-xl lg:border border-gray-200 lg:shadow-xl">

      <div class="hidden lg:flex w-full lg:w-1/2">
        <div class="max-h-screen overflow-hidden">
          <img src="https://media05.fuzikapp.com/app/sing_banner.png" class="object-center">
        </div>
      </div>
  
      <div class="w-full lg:w-1/2">
        <form @submit.prevent="doSignup()">
          <div class="w-full lg:w-3/5 mx-auto flex flex-col justify-start items-center space-y-6 pt-2 pb-10 px-4 lg:px-10">
  
            <div class="text-2xl font-bold px-20 py-10">
              <img src="https://media05.fuzikapp.com/app/logo_round.png">
            </div>
  
            <div class="w-full flex flex-col space-y-2">
              <div class="w-full flex flex-col space-y-1">
                <div class="font-bold">E-mail</div>
                <input 
                  v-model="txtEmail"
                  @keyup="checkEmailFormat()"
                  type="email" 
                  placeholder="name@domain.com"
                  class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
                >
              </div>
  
              <div class="w-full flex flex-col space-y-1">
                <div class="font-bold">Display Name</div>
                <input 
                  v-model="txtDisplayName"
                  type="text" 
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
  
              <div class="w-full flex flex-col space-y-1">
                <div class="font-bold">Confirm password</div>
                <input 
                  v-model="txtConfirmPassword"
                  type="password" 
                  placeholder="enter password again"
                  class="w-full outline-none rounded-lg py-1 px-4 text-base border border-slate-300"
                >
              </div>
  
              <div class="w-full flex flex-row space-x-2">
                <input 
                  v-model="checkbox"
                  type="checkbox" 
                  class="w-5 h-5"
                >
                <div class="text-sm">Lorem Ipsum is simply dummy text of the typesetting industry.</div>
              </div>
            </div>
  
            <button 
              class="w-full flex flex-row justify-center items-center py-3 bg-yellow rounded-xl cursor-pointer transition-all hover:bg-yellow/90"
            >
              <div class="text-lg font-bold text-center">Register</div>
            </button>
  
            <div class="w-full relative flex flex-row justify-between space-x-2">
              <div class="w-full border-t mt-3"></div>
              <div class="flex flex-row space-x-2">
                <div class="text-slate-400">or</div>
                <div class="">
                  <NuxtLink to="/webapp/signin">Login</NuxtLink>
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
      txtDisplayName: "",
      txtPassword: "",
      txtConfirmPassword: "",
      checkbox: false,
      validatedEmail: false,
    }
  },
    
  computed: {
    isAuth() {
      return this.$store.state.auth.is_auth
    }
  }, 

  mounted() {
    if (this.isAuth) {
      this.$router.push("/")
    }
  },

  methods: {

    checkEmailFormat() {

      var email_format = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if(this.txtEmail.toLowerCase().match(email_format)){
        this.validatedEmail = true
      } else {
        this.validatedEmail = false
      }

    },

    doSignup() {

      if(this.txtEmail == "" || !this.validatedEmail) {

        if(this.txtEmail == "") {
          this.$swal.fire(
            "",
            "กรุณากรอกอีเมล์",
            "warning"
          )

        } else if(!this.validatedEmail) {
          this.$swal.fire(
            "",
            "กรุณากรอกอีเมล์ให้ถูกต้อง",
            "warning"
          )

        }

      } if(this.txtDisplayName == "") {
          this.$swal.fire(
            "",
            "กรุณากรอก Display Name",
            "warning"
          )

      } if(this.txtPassword == "") {
          this.$swal.fire(
            "",
            "กรุณากรอกรหัสผ่าน",
            "warning"
          )

      } else if (this.checkbox) { 

        const form_data = {
          "email": this.txtEmail,
          "password": this.txtPassword,
        }

        // do something to store auth data
        
        this.$swal.fire(
          "",
          "บันทึกข้อมูลเรียบร้อย",
          "success"
        ).then(() => {
          // window.location.reload()
          this.$router.push("/signin")
        })
      }
    },

  }
}
</script>

<style>

</style>