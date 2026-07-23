<template>
  <div>

    <div class="flex flex-col">

      <div class="text-3xl font-bold pb-10 px-2 dark:text-white text-white">Profile Setting</div>

      <div class="flex flex-col lg:flex-row justify-start items-start space-y-6">

        <div class="w-1/2 sm:w-1/5 mx-auto  flex flex-col">
         
          <div id="picture_holder" >
            
          </div>


          <div id="drop_file_zone"
            class="border-4 border-dashed rounded-3xl w-fullborder-2 border-yellow-400 text-base"
            ondragover="return false" @drop="upload_file">
            <div class="p-3 py-5 dark:text-white text-white">              
              <div class="text-center text-xl" id="drag_upload_file">
                <p>Drop your photo</p>
                <p><span class="material-symbols-outlined" style="font-size:48px">
                    place_item
                  </span></p>
                <p>or</p>
                <p>
                  <input type="button"
                    class="w-max mx-auto text-black bg-yellow-300 border-2 border-gray-200 text-base font-bold py-2 px-6 rounded-lg transition-all duration-500 hover:sm:bg-yellow-400"
                    value="Select File" @click="file_explorer" />
                </p>
                <input type="File" id="selectfile" style="display:none">
              </div>
              <div class="img-content" onclick="open_picture_dropzone"></div>


            </div>
          </div>
          <input type="hidden" id="profile_pic" name="profile_pic" v-model="profile_pic">
          <br />
          <input type="button"
            class="w-max mx-auto text-black dark:text-black bg-yellow-300 border-2 border-gray-200 text-base font-bold py-2 px-6 rounded-lg transition-all duration-500 hover:sm:bg-yellow-400"
            value="Remove picture" id="reset_button" @click="reset" hidden="true">

          <div class="flex flex-row justify-center items-center py-4">
            <div class="relative flex flex-row justify-start items-center text-sm bg-black rounded-full pl-6 pr-4">
              <div class="absolute -left-3">
                <div class="w-8 h-8">
                  <img src="https://media04.tetraserver.com/app/rank_performer.png">
                </div>
              </div>
              <div class="flex flex-wrap justify-center items-center space-x-2">
                <div class="text-white">Rank:</div>
                <div class="text-yellow-200">Musician</div>                
              </div>              
            </div>
          </div>
        </div>

        <div class="w-full lg:w-4/6 mx-auto flex flex-col px-2">
           <div v-if="current_pic_display" class="h-24 w-24" >
            <img class="h-24" :src="old_picture_location" alt="">
          </div> 

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-1/2 flex flex-col justify-start space-y-1 pr-4  lg:pr-8">
              <div class="font-bold dark:text-white text-white">First Name</div>
              <div class="w-full">
                <input type="text" v-model="first_name" @change="change_musician2_data('first_name')"
                  placeholder="Your first name" autocomplete="off"
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
            <div class="w-1/2 flex flex-col justify-start space-y-1">
              <div class="font-bold dark:text-white text-white">Last Name</div>
              <div class="w-full">
                <input type="text" v-model="last_name" @change="change_musician2_data('last_name')"
                  placeholder="Your last name" autocomplete="off"
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-1/2 flex flex-col justify-start space-y-1 pr-4  lg:pr-8">
              <div class="font-bold dark:text-white text-white">Email</div>
              <div class="w-full">
                <input type="text" v-model="email" placeholder="Your email" autocomplete="off" readonly
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
            <div class="w-1/2 flex flex-col justify-start space-y-1">
              <div class="font-bold dark:text-white text-white">Phone Number</div>
              <div class="w-full">
                <input type="text" v-model="tel" @change="change_musician2_data('tel')" placeholder="Phone number"
                  autocomplete="off" class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold dark:text-white text-white">Display Name</div>
              <div class="w-full">
                <input type="text" v-model="display_name" placeholder="Your display name" autocomplete="off" readonly
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold dark:text-white text-white">Music Genre</div>
              <div class="w-full">
                <input type="text" v-model="music_genre" @change="change_musician2_data('music_genre')"
                  placeholder="Your music genre" autocomplete="off"
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>

            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold dark:text-white text-white">Musical Instruments</div>
              <div class="w-full">
                <input type="text" v-model="instrument" @change="change_musician2_data('music_inst')"
                  placeholder="Your musical instruments" autocomplete="off"
                  class="w-full outline-none rounded-xl px-3 py-2 txtinput2">
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script setup lang="ts">

const cookie_form_visible = ref(true);
const cookie_consent_form = useCookie("visitor");
cookie_consent_form.value = cookie_consent_form.value || ('No');
  
if (cookie_consent_form.value.localeCompare('Yes')==0) {
    //cookie_form_visible.value = false;
    // Do nothing
} else {
    navigateTo('/');
}
// Search function

const is_auth = ref(false);

const client = useSupabaseClient();

const { data, error } = await client.auth.getSession()
const { session } = data

var email = '';

const user = await client.auth.getUser();
// User login
if (user.data.user?.email != undefined) {
    email = user.data.user?.email;    
    //console.log(email)
}

var data_musician: any;

//console.log(email)
if (session == null) {
  navigateTo('/')
}

//console.log('Email: ' + email)

if (email == '') {
  is_auth.value = false;
} else {

  const url = '';
  const { data: musician } = await useFetch('/api/musician2_detail?email=' + email);
  data_musician = musician

  is_auth.value = true;

}

const first_name = ref('')
const last_name = ref('')
const display_name = ref('')
const instrument = ref('')
const music_genre = ref('')
const tel = ref('')

const profile_pic = ref('')

var raw_value = data_musician.value[0];
//console.log(raw_value.display_name)

first_name.value = raw_value.first_name
last_name.value = raw_value.last_name
display_name.value = raw_value.display_name
tel.value = raw_value.tel
music_genre.value = raw_value.music_genre
instrument.value = raw_value.music_inst

//console.log(raw_value.profile_pic);

const current_pic_display = ref(false);
const old_profile_pic = ref('');
const old_picture_location = ref('');

if (raw_value.profile_pic.length == 0 ) {

} else {
  old_profile_pic.value = raw_value.profile_pic;
  old_picture_location.value = 'https://media04.tetraserver.com/' + old_profile_pic.value;
  //current_pic_display.value = true;
}
/*
if (process.client) {
  //alert(window);
  //window.addEventListener("load", function(){
  update_pic(raw_value.profile_pic);
  //});

}*/

//const profile_pic_hidden = ref(true);
//const current_piture_holder = ref('');

// Upload profile's picture
var fileobj;


async function drag_over_cancel() {
  return false;
}

async function reset(event: Event) {
  //alert('Hello');
  //var element_profile_pic = <HTMLFormElement>document.getElementById('profile_pic');
  //element_profile_pic.value = '';
  var element_drop_file_zone = <HTMLFormElement>document.getElementById('drop_file_zone');
  element_drop_file_zone.hidden = false;

  var element_picture_holder = <HTMLFormElement>document.getElementById('picture_holder');
  element_picture_holder.hidden = true;

  var element_reset_button = <HTMLFormElement>document.getElementById('reset_button');
  element_reset_button.hidden = true;

  profile_pic.value = 'None';
  //console.log('pic: ' + profile_pic.value);
  change_musician2_data('profile_pic');
  //console.log('pic2: ' + profile_pic.value);
  

}

async function upload_file(e: DragEvent) {
  //console.log("upload_file01");
  e.preventDefault();
  var element_drag_upload_file = <HTMLFormElement>document.getElementById('drag_upload_file');

  if (element_drag_upload_file != null) {
    //element_drag_upload_file.innerHTML = '<br /><p>Uploading...</p>';

    fileobj = e.dataTransfer?.files[0];
    //console.log("upload_file02");
    ajax_file_upload(fileobj);
  }

}

function file_explorer() {
  var element_selectfile = <HTMLFormElement>document.getElementById('selectfile');
  //console.log('file_explorer');
  if (element_selectfile != null) {
    element_selectfile.click();
    element_selectfile.onchange = function () {
      fileobj = element_selectfile?.files[0];
      ajax_file_upload(fileobj);
    };
  }
}

function ajax_file_upload(file_obj: any) {
  if (file_obj != undefined) {
    var form_data = new FormData();
    form_data.append('file', file_obj);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://media04.tetraserver.com/ajax.php", true);
    xhttp.onload = function (event) {

      //var oOutput = <HTMLFormElement>document.getElementById('drop_file_zone');
      var oOutput = <HTMLFormElement>document.getElementById('picture_holder');
      var element_reset_button = <HTMLFormElement>document.getElementById('reset_button');

      //holder.hidden = false;
      oOutput.hidden = false;

      if (xhttp.status == 200) {
        oOutput.innerHTML = '<div>'
          + '<img class = "aspect-ratio:square" src="https://media04.tetraserver.com/' + this.responseText + '" alt="Profile picture"  />';
        + '</div>';

        //oOutput.innerHTML += '<div class="material-symbols-outlined w-7 h-7 justify-center items-center text-center rounded-full border-2 border-black bg-black text-white cursor-pointer transition-all duration-500 hover:lg:bg-transparent hover:lg:backdrop-blur hover:lg:text-black" @click="reset"> '
        //  + 'refresh'
        //  + '</div>';   

        element_reset_button.hidden = false;

        //console.log(oOutput.innerHTML);
        var element_profile_pic = <HTMLFormElement>document.getElementById('profile_pic');
        if (element_profile_pic != null) {
          //element_profile_pic.value = this.responseText;
          profile_pic.value = this.responseText;

          //alert(element_profile_pic.value);
          var element_drop_file_zone = <HTMLFormElement>document.getElementById('drop_file_zone');
          element_drop_file_zone.hidden = true;

          //console.log(profile_pic.value)
          
          change_musician2_data('profile_pic')

        }
      } else {
        oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
      }
    }

    xhttp.send(form_data);
  }
}

async function change_musician2_data(field: string) {
  var valid_field = ['first_name','last_name','tel','music_genre','music_inst','profile_pic'];
  var new_value = '';

  if (field == 'first_name') {
    new_value = first_name.value;
  } else if (field == 'last_name') {
    new_value = last_name.value;
  } else if (field == 'tel') {
    new_value = tel.value;
  } else if (field == 'music_genre') {
    new_value = music_genre.value;
  } else if (field == 'music_inst') {
    new_value = instrument.value;
  } else if (field == 'profile_pic') {
    new_value = profile_pic.value;
  } 

  if (valid_field.includes(field)) {
    if (new_value.trim().length > 0) {
      try {
        if (email != null) {
          var url = "/api/modify_musician2?email=" +
            email.trim() +

            "&field=" + field +
            "&new_value=" + new_value.trim();

          const response = await fetch(url);
          const movies = await response.json();
          //console.log(movies);
        }
      } catch (error) {
        alert(error);
        //console.log(error);
      }
    }
  }
}

async function update_pic(pic:string) {
  console.log('pic: ' + pic);
  if ((pic.localeCompare('') != 0) && (pic.localeCompare('stream/image_stream.php?code=U537BBBB') != 0)) {
    //console.log('profile_pic');
    console.log(pic);
    
    var oOutput = <HTMLFormElement>document.getElementById('picture_holder');
    var element_reset_button = <HTMLFormElement>document.getElementById('reset_button');

      /*
    current_picture_holder.value = "https://media04.tetraserver.com/" + pic;
    profile_pic_hidden.value = false;

    element_reset_button.hidden = false;
    profile_pic.value = pic;
    var element_drop_file_zone = <HTMLFormElement>document.getElementById('drop_file_zone');
    element_drop_file_zone.hidden = true;
    */
    //holder.hidden = false;
    console.log("test2");
    if (oOutput != null) {
      console.log("test");
      oOutput.hidden = false;

      //if (xhttp.status == 200) {
      oOutput.innerHTML = '<div>'
      + '<img class = "aspect-ratio:square" src="https://media04.tetraserver.com/' + pic + '" alt="Profile picture"  />';
      + '</div>';

      //oOutput.innerHTML += '<div class="material-symbols-outlined w-7 h-7 justify-center items-center text-center rounded-full border-2 border-black bg-black text-white cursor-pointer transition-all duration-500 hover:lg:bg-transparent hover:lg:backdrop-blur hover:lg:text-black" @click="reset"> '
      //  + 'refresh'
      //  + '</div>';   

      element_reset_button.hidden = false;
      profile_pic.value = pic;
      var element_drop_file_zone = <HTMLFormElement>document.getElementById('drop_file_zone');
      element_drop_file_zone.hidden = true;
    }
  
  }

}

definePageMeta({
  layout: "main"
})

onMounted(() => {
  update_pic(old_profile_pic.value);
});


</script>

<style scoped></style>
