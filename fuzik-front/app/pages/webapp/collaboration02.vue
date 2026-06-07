<template>
  <div class="">
    {{ display }}
    <div id="orientation-message" class="orientation-message">
        <img :src="video_message"  >
        <p>For a better experience, please rotate your device to landscape mode.</p>
    </div>  
    <div class="page-content" >
      <div v-if="collab_code?.localeCompare('4_01')==0">
        <Collab_4_01_01 
          :collab_video01="collab_video01" 
          :collab_video02="collab_video02" 
          :collab_video03="collab_video03" 
        />
      </div>      
      <div v-if="collab_code?.localeCompare('3_03')==0">
        <Collab_3_03_01>
        </Collab_3_03_01>  
      </div>
      <div v-if="collab_code?.localeCompare('3_02')==0">
        <Collab_3_02_01>
        </Collab_3_02_01>  
      </div>
      <div v-if="collab_code?.localeCompare('3_01')==0">
        <Collab_3_01_01>
        </Collab_3_01_01>  
      </div>
      <div v-if="collab_code?.localeCompare('2_04')==0">
        <Collab_2_04_01>
        </Collab_2_04_01>  
      </div>
      <div v-if="collab_code?.localeCompare('2_03')==0">
        <Collab_2_03_01>
        </Collab_2_03_01>  
      </div>
      <div v-if="collab_code?.localeCompare('2_02')==0">
        <Collab_2_02_01>
        </Collab_2_02_01>  
      </div>
      <div v-if="collab_code?.localeCompare('2_01')==0">
        <Collab_2_01_01>
        </Collab_2_01_01>  
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
const { code, video01 }  = useRoute().params

var collab_code = route.query.code?.toString();

var collab_video01 = route.query.video01?.toString();
var collab_video02 = route.query.video02?.toString();
var collab_video03 = route.query.video03?.toString();


if (collab_video01 == null) {
  collab_video01 = '';
}

console.log("collab_video01 " + collab_video01);
 
var video_message = "https://media04.tetraserver.com/app/rotate_your_phone.gif";
//var main_page_show = true;

definePageMeta({
    layout: "top"
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


useHead({
    script: [
      {
        src: 'https://media04.tetraserver.com/app/DragDropTouch.js',
      }]

})

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