
<template>
  <div class="">
    <div id="orientation-message" class="orientation-message">
        <img :src="video_message"  >
        <p>For a better experience, please rotate your device to landscape mode.</p>
    </div>
    <div class="block sm:block md:block lg:hidden xl:hidden 2xl:hidden text-center text-black font-bold bg-yellow-300 p-4">
      <p>Your screen is too small to use this application.</p>
    </div>  
    <div class="hidden sm:hidden md:hidden lg:block xl:block 2xl:block" >
      <div v-if="collab_code?.localeCompare('4_01')==0">
        <Collab_4_01_02>
        </Collab_4_01_02>
      </div>
      <div v-if="collab_code?.localeCompare('3_03')==0">
        <Collab_3_03_02>
        </Collab_3_03_02>
      </div>
      <div v-if="collab_code?.localeCompare('3_02')==0">
        <Collab_3_02_02>
        </Collab_3_02_02>
      </div>      
      <div v-if="collab_code?.localeCompare('3_01')==0">
        <Collab_3_01_02>
        </Collab_3_01_02>
      </div>      
      <div v-if="collab_code?.localeCompare('2_04')==0">
        <Collab_2_04_02>
        </Collab_2_04_02>
      </div>      
      <div v-if="collab_code?.localeCompare('2_03')==0">
        <Collab_2_03_02>
        </Collab_2_03_02>
      </div>      
      <div v-if="collab_code?.localeCompare('2_02')==0">
        <Collab_2_02_02>
        </Collab_2_02_02>
      </div>  
      <div v-if="collab_code?.localeCompare('2_01')==0">
        <Collab_2_01_02>
        </Collab_2_01_02>
      </div>  

    </div>
  </div>

</template>

<script setup lang="ts">

const cookie_collab_code = useCookie("collab_code");
const collab_code = computed(() => cookie_collab_code.value ?? '');
 
var video_message = "https://media04.tetraserver.com/app/rotate_your_phone.gif";

definePageMeta({
    layout: "empty",
    alias: ['/collaboration03']
});

const display = ref('')

const client = useSupabaseClient();

//const { data, error } = await client.auth.refreshSession()
//const { data, error } = await client.auth.refreshSession()
//const { session, user } = data
const user = await client.auth.getUser();

var email = '';

if (user.data.user?.email != undefined) {
    email = user.data.user?.email;    
        //console.log(email)
}


var allowed = true;

//var email = user?.email;
if (email == '') {
  allowed = false;
}

if (!allowed) {
  display.value = 'Direct access not allowed'
  navigateTo('/webapp/login')
}

</script>

<style scoped>

.orientation-message {
  display: none; /* Initially hidden */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent overlay */
  text-align: center;
  color: white;
  font-size: 1.2rem;
  padding: 20px;
}

.page-content {
    display: block;
}

@media (orientation: portrait) {
  .orientation-message {
    display: block; /* Show message in portrait mode */
  }
  .page-content {
    display: none;
  }
}

</style>
