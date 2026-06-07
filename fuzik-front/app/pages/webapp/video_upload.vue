<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div class="container rounded mt-5 mb-5 text-white dark:text-white">
        {{ display }}
        <div class="row" :hidden="upload_panel_hidden">
            <div class="p-3 w-full md:w-auto ">
                <form id="mainForm">
                <div id="drop_file_zone" class=" border-dashed border-2 border-yellow-400 h-max text-lg content-center"
                    ondragover="return false" @drop="upload_file">
                    <div class="p-3 py-5 content-center ">
                        <div id="drag_upload_file" >
                            <p class="mx-auto">Drop music playing videos</p>
                            <p><span class="material-symbols-outlined">
                                    place_item
                                </span></p>
                            <p>or</p>
                            <p>
                                <input type="button"
                                    class="mx-auto bg-yellow-300 border-2 border-black text-black text-lg font-bold py-2 px-4 rounded-lg transition-all duration-500 hover:sm:bg-yellow-400"
                                    value="Select Video files" @click="file_explorer" />
                            </p>
                            <input type="File" id="selectfile" style="display:none">
                        </div>
                        <div class="img-content" onclick="open_picture_dropzone"></div>
                        <input type="hidden" id="video_location" name="video_location" value="">

                    </div> 
                    
                </div>
                
                <div class="row mt-1">
                    <div class="video_process" id="file_process_button"></div>
                </div>
            </form>
            </div>

        </div>
        <div id="popup-modal" tabindex="-1" :hidden="dialog_hidden" class="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-max">
                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>                        
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-left">
                        <span class="p-4 material-symbols-outlined2">Service agreement</span>
                        <h3 class="p-4 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 leading-loose">                            
                            To use our file upload service, please adhere to the following guidelines:<br />
                            <span class="p-4">1. <b>Content:</b> Upload only music-playing video clips.</span><br />
                            <span class="p-4">2. <b>Ownership:</b> Ensure that you own the rights to the performance or have obtained explicit consent from the performer.</span><br />
                            <span class="p-4">3. <b>Music Type:</b> Limit uploads to classical music or music that is in the public domain.</span><br />
                            <span class="p-4">4. <b>Video Length:</b> The video length should be between 30 seconds and 15 minutes.</span><br />
                        </h3>
                        <button data-modal-hide="popup-modal" @click="click_agree" type="button" class="text-black bg-yellow-300 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-400 dark:focus:bg-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            I agree
                        </button>
                        <button data-modal-hide="popup-modal" @click="click_no" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel that</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>     
</template>

<script setup lang="ts">

//const cookie_form_visible = ref(true);
const cookie_consent_form = useCookie("visitor");
cookie_consent_form.value = cookie_consent_form.value || ('No');
  
if (cookie_consent_form.value.localeCompare('Yes')==0) {
    //cookie_form_visible.value = false;
    // Do nothing
} else {
    navigateTo('/');
}

const upload_panel_hidden = ref(true);
const dialog_hidden = ref(false);


definePageMeta({
    layout: "main"
});

const cookie_video_location = useCookie("video_location");

const display = ref('')

const is_auth = ref(false);
//const profile_image = ref('images\music_staff.png');

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

const video_location = ref('')

//nuxtStorage.localStorage.setData('video_location', video_location.value);


var fileobj;

// var uploading_icon = 'icons/uploading2.gif';

//import nuxtStorage from 'nuxt-storage'
//nuxtStorage.localStorage.setData('video_location', video_location.value);

cookie_video_location.value = '';


/*
async function test() {
var element_drop_file_zone = <HTMLFormElement>document.getElementById("drop_file_zone");
    var element_drag_upload_file = <HTMLFormElement>document.getElementById('drag_upload_file');

    if (element_drop_file_zone != null) {
        addEventListener("drop", (event) => {
            console.log('Test test');
            element_drag_upload_file.innerHTML = '<br /><p>Uploading...</p>';
        fileobj = event.dataTransfer?.files[0];
        ajax_file_upload(fileobj);
        });
    }
}*/


/*
const file_upload_patch = document
    .getElementById('drag_upload_file')
    ?.addEventListener('dragover', () => {
    var element_drag_upload_file = <HTMLFormElement>document.getElementById('drag_upload_file');

    if (element_drag_upload_file != null) {
        element_drag_upload_file.innerHTML = '<br /><p>Uploading...</p>';
        fileobj = e.dataTransfer.files[0];
        ajax_file_upload(fileobj);
    }
    }
) */

/*
const element_drop_file_zone = <HTMLFormElement>document.getElementById('drop_file_zone');


    if (element_drop_file_zone) {
        element_drop_file_zone.addEventListener('drag', upload_file());
}
*/

async function drag_over_cancel() {
    return false;
}

async function upload_file(e:DragEvent) {
    //console.log("upload_file01");
    e.preventDefault();
    var element_drag_upload_file = <HTMLFormElement>document.getElementById('drag_upload_file');
        
    if (element_drag_upload_file != null) {
        //element_drag_upload_file.innerHTML = "<br /><p>Uploading...</p><p><img :src='uploading_icon'></p>";
        element_drag_upload_file.innerHTML = "<img width='250' src='https://media04.tetraserver.com/app/QU3H.gif' class='object-center'>";
        
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
    if(file_obj != undefined) {
            var form_data = new FormData();
            form_data.append('file', file_obj);
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://media04.tetraserver.com/ajax_video.php", true);
            xhttp.onload = function(event) {

                var oOutput = <HTMLFormElement>document.getElementById('drop_file_zone')
                if (xhttp.status == 200) {
                    //oOutput.innerHTML = '<img width="180" height="180" src="https://media04.tetraserver.com/' + this.responseText + '" alt="Profile picture" />';
                    oOutput.innerHTML='Processing'

                    console.log("this.responseText");
                    console.log(this.responseText);

                    var success = true;

                    if (this.responseText.length==0) {
                        success = false;
                    }

                    if (this.responseText.localeCompare("No video processing")==0) {
                        success = false;
                    }

                    if (this.responseText.localeCompare("false")==0) {
                        success = false;
                    }

                    if (success) {
                        video_location.value = this.responseText;
                        cookie_video_location.value = video_location.value;

                        //nuxtStorage.localStorage.setData('video_location', video_location.value);

                        //console.log(nuxtStorage.localStorage.getData('video_location'))

                        //console.log('cookie_video_location');
                            //console.log(cookie_video_location);
                    
                        navigateTo('/video_upload_success')
                    } else {
                        navigateTo('/video_upload_error')
                    }
                    
                    //var element_location = <HTMLFormElement>document.getElementById('video_location');
                    //if (element_profile_pic != null) {
                    //    element_profile_pic.value = this.responseText;
                    //}
                } else {
                    oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
                }
                
            }

            xhttp.send(form_data);
        }
}

function click_agree() {
    upload_panel_hidden.value = false;
    dialog_hidden.value = true;    
}

async function click_no() {
    await navigateTo('/')
}

</script>

<style scoped>
#drop_file_zone {
    background-color: #1f201e;
}

#drag_upload_file {
    margin: 0 auto;
    background-color: #1f201e;

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}

#drag_upload_file p {
    text-align: center;
}

.material-symbols-outlined {
    font-size: 48px;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}
</style>