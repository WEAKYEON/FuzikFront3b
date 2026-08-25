<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="w-max p-3">
                <form id="mainForm">
                <div id="drop_file_zone" class="bg-gray-200 border-dashed border-2 border-yellow-400 w-96 h-max text-lg"
                    ondragover="return false" @drop="upload_file"> 
                    <div class="p-3 py-5">
                        <div id="drag_upload_file">
                            <p>Drop profile's picture</p>
                            <p><span class="material-symbols-outlined">
                                    place_item
                                </span></p>
                            <p>or</p>
                            <p>
                                <input type="button"
                                    class="w-max mx-auto bg-yellow-300 border-2 border-gray-200 text-lg font-bold py-2 px-8 rounded-lg transition-all duration-500 hover:sm:bg-yellow-400"
                                    value="Select File" @click="file_explorer" />
                            </p>
                            <input type="File" id="selectfile" style="display:none">
                        </div>
                        <div class="img-content" onclick="open_picture_dropzone"></div>
                        <input type="hidden" id="profile_pic" name="profile_pic" value="">

                    </div>
                </div>
                <div class="row mt-1">
                    <div class="video_process" id="file_process_button"></div>
                </div>
            </form>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

var fileobj;

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
        element_drag_upload_file.innerHTML = '<br /><p>Uploading...</p>';
        
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
            xhttp.open("POST", "https://media05.fuzikapp.com/ajax.php", true);
            xhttp.onload = function(event) {

                var oOutput = <HTMLFormElement>document.getElementById('drop_file_zone')
                if (xhttp.status == 200) {
                    oOutput.innerHTML = '<img width="180" height="180" src="https://media05.fuzikapp.com/' + this.responseText + '" alt="Profile picture" />';
                    var element_profile_pic = <HTMLFormElement>document.getElementById('profile_pic');
                    if (element_profile_pic != null) {
                        element_profile_pic.value = this.responseText;
                    }
                } else {
                    oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
                }
            }

            xhttp.send(form_data);
        }
}

definePageMeta({
    layout: "empty"
})
</script>

<style scoped>
#drag_upload_file {
    width: 50%;
    margin: 0 auto;
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