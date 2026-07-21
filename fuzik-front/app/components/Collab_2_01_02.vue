
<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <!-- <canvas id="myCanvas"></canvas> w-28 - 112 -->
    <div class="p-2">        
        <img :src="verticle_line_location" alt="Image description" id="floating-image">
        <div id="wavepanel" class="align-bottom p-2 pt-2 pr-4 grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 sm:gap-2 md:gap-2 gap-4 rounded-lg border-4 border-white  sm:border-red-300 md:border-blue-300  lg:border-green-300 xl:border-red-800  2xl:border-yellow-300 container mx-auto">
            <div class="text-white dark:text-white border-white border-4 sm:row-span-4 md:row-span-4 lg:row-span-4 xl:row-span-4 2xl:row-span-4 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 xl2:col-span-3 rounded-lg">
                    <form action="" target="_self">
                        <input class="mx-2 focus:ring-yellow-500 dark:focus:ring-yellow-600  text-yellow-300" type="checkbox"  v-model="ruler_checked" @click="show_ruler" />Ruler<br />
                        <img :src="layout_2_01_location" class="sm:ml-5 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 border-2 border-yellow-300 m-2" >
                        <div class="sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 border-0 mx-2 border-blue-300 flex justify-center flex-1">
                            <div class="mx-2 sm:w-fit md:w-40 w-48 border-2 border-yellow-300">
                                <svg height="15" xmlns="http://www.w3.org/2000/svg">
                                    <line :x1="line1_x1" y1="10" :x2="line1_x2" y2="10" style="stroke:#E85663;stroke-width:2" />
                                </svg>
                                <svg height="20" xmlns="http://www.w3.org/2000/svg">
                                    <line :x1="line2_x1" y1="10" :x2="line2_x2" y2="10" style="stroke:#566AE8;stroke-width:2" />
                                </svg>
                                <!--
                                <svg height="20" width="95%" xmlns="http://www.w3.org/2000/svg">
                                    <line :x1="line3_x1" y1="10" :x2="line3_x2" y2="10" style="stroke:#E8C656;stroke-width:2" />
                                </svg>
                                
                                <svg height="20" width="95%" xmlns="http://www.w3.org/2000/svg">
                                    <line :x1="line4_x1" y1="10" :x2="line4_x2" y2="10" style="stroke:#56E878;stroke-width:2" />
                                </svg>
                                -->
                            </div>
                        </div>
                        <br />

                        <input type="button"
                        class="mx-2 my-2 text-md w-11/12 sm:text-base md:text-base font-medium bg-yellow-300 border-2 border-black text-black rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 disabled:text-gray-600 disabled:bg-slate-50"
                        value=" Generate 20s preview " @click="generate_preview" :disabled="!generate_button_enabled" />
                        
                        <p class="mx-2 ">Preview</p>
                        
                        <div v-if="!loading" class="border-2 w-11/12 h-36 border-yellow-300 mx-2 my-2 text-center align-middle"><br />Not available
                        </div>
                        <div v-else class="border-2 w-11/12 h-36 border-yellow-300 mx-2 my-2 text-center align-middle flex justify-center">
                            <div v-if="!finished" role="status">
                            <br />
                            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                            <video v-else controls  ><source :src="preview_location" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>                            
                        </div>
                        <!-- <video controls width="90%" class="border-2 border-yellow-300 mx-2 my-2" ><source :src="preview_location" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> -->

                        <input data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button"
                        class="mx-2 my-2 text-md sm:col-span-2 w-11/12 font-medium bg-yellow-300 border-2 border-black text-black rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 disabled:text-gray-600 disabled:bg-slate-50"
                        value="Send to Queue" @click="" :disabled="!send_to_queue_enabled" />
                    </form>
            </div>
            
            <div class="lg:col-span-2 xl:col-span-2 2xl:col-span-2 text-base 2xl:text-lg object-cover rounded-lg border-4 border-white bg-white dark:bg-white text-red-600 dark:text-red-600 pl-2 ml-10 2xl:ml-20"  >
            
                <img class="border-2 border-white h-32" :src="pic1">{{ text01 }}                
                <input type="text" id="text01_id" ref="text01_element" v-model="text01_input" :hidden="text01_input_hidden" @blur="textinput01_blur" @keyup.enter.native="textinput01_blur" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 h-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <button @click="textinput01_edit" :hidden="text01_edit_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 text-md" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        edit
                    </span>
                </button>
                <button @click="textinput01_backward" :hidden="text01_backward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_backward
                    </span>
                </button>
                <button @click="textinput01_forward" :hidden="text01_forward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 " type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_forward
                    </span>
                </button>
            
            </div>
            <div class="rounded-lg border-4 lg:col-span-7 xl:col-span-7 2xl:col-span-7 align-top flex flex-row mr-2"><div ref="waveform01_ref" id="waveform01" class="border-0 w-full bg-white dark:bg-white "></div>
                <input id="volume01" type="range" orient="vertical" v-model="slide01_val" step="1" min="0" max="10" @input="slide01_change" class="accent-red-600 sm:h-20 md:h-20 lg:h-24 xl:h-fit 2xl:h-fit" data-tooltip-target="tooltip-volume01" />
                <div id="tooltip-volume01" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ slide01_tooltip }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>  
               
            </div>

            <div class="lg:col-span-2 xl:col-span-2 2xl:col-span-2 text-lg object-cover rounded-lg border-4 border-white bg-white dark:bg-white text-blue-800 dark:text-blue-800"    >
                <img class="border-2 border-white h-32" :src="pic2">{{ text02 }}
                <input type="text" id="text02_id" ref="text02_element" v-model="text02_input" :hidden="text02_input_hidden" @blur="textinput02_blur" @keyup.enter.native="textinput02_blur" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 h-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">               
                <button @click="textinput02_edit" :hidden="text02_edit_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 text-md" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        edit
                    </span>
                </button>
                <button @click="textinput02_backward" :hidden="text02_backward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_backward
                    </span>
                </button>
                <button @click="textinput02_forward" :hidden="text02_forward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 " type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_forward
                    </span>
                </button>
            </div>
            <div class="rounded-lg border-4 lg:col-span-7 xl:col-span-7 2xl:col-span-7 align-top flex flex-row mr-2"><div id="waveform02" class="border-0 w-full bg-white dark:bg-white"></div>
            <input id="volume02" type="range" orient="vertical" v-model="slide02_val" step="1" min="0" max="10" @input="slide02_change" class="accent-blue-800 sm:h-20 md:h-20 lg:h-24 xl:h-fit 2xl:h-fit"  data-tooltip-target="tooltip-volume02" />
                <div id="tooltip-volume02" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ slide02_tooltip }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>            
            </div>
       
            <!--
            <div class="lg:col-span-2 xl:col-span-2 2xl:col-span-2 text-lg object-cover rounded-lg border-4 border-white bg-white dark:bg-white text-yellow-600 dark:text-yellow-600">
                <img class="border-2 border-white h-32" :src="pic3">{{ text03 }}
                <input type="text" id="text03_id" ref="text03_element" v-model="text03_input" :hidden="text03_input_hidden" @blur="textinput03_blur" @keyup.enter.native="textinput03_blur" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 h-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">               
                <button @click="textinput03_edit" :hidden="text03_edit_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 text-md" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        edit
                    </span>
                </button>
                <button @click="textinput03_backward" :hidden="text03_backward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_backward
                    </span>
                </button>
                <button @click="textinput03_forward" :hidden="text03_forward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 " type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_forward
                    </span>
                </button>         
            </div>
            <div class="rounded-lg border-4 lg:col-span-7 xl:col-span-7 2xl:col-span-7 align-top flex flex-row mr-2"><div id="waveform03" class="border-0 w-full bg-white dark:bg-white"></div>
            <input id="volume03" type="range" orient="vertical" v-model="slide03_val" step="1" min="0" max="10" @input="slide03_change" class="accent-yellow-700 sm:h-20 md:h-20 lg:h-24 xl:h-fit 2xl:h-fit"  data-tooltip-target="tooltip-volume03" />
                <div id="tooltip-volume03" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ slide03_tooltip }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>            
            </div>         

            
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2  sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg object-cover rounded-lg border-4 border-white bg-white dark:bg-white text-green-600 dark:text-green-600"  >
                <img class="border-2 border-white" :src="pic4">{{ text04 }}
                <input type="text" id="text04_id" ref="text04_element" v-model="text04_input" :hidden="text04_input_hidden" @blur="textinput04_blur" @keyup.enter.native="textinput04_blur" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 h-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">               
                <button @click="textinput04_edit" :hidden="text04_edit_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 text-md" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        edit
                    </span>
                </button>
                <button @click="textinput04_backward" :hidden="text04_backward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800" type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_backward
                    </span>
                </button>
                <button @click="textinput04_forward" :hidden="text04_forward_button_hidden" class="bg-white dark:bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none  rounded-lg text-xs text-center  dark:hover:bg-gray-400 dark:focus:ring-gray-800 " type="button">
                    <span class="material-symbols-outlined my_material-icons">
                        chevron_forward
                    </span>
                </button>
            </div>
            
            <div class="rounded-lg border-4 sm:col-span-9 md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7  align-top flex flex-row mr-2"><div id="waveform04" class="border-0 w-full bg-white dark:bg-white"></div>
            <input id="volume04" type="range" orient="vertical" v-model="slide04_val" step="1" min="0" max="10" @input="slide04_change" class="accent-green-700 sm:h-20 md:h-20  bg-white dark:bg-white lg:h-24 xl:h-fit 2xl:h-fit"  data-tooltip-target="tooltip-volume04" />
                <div id="tooltip-volume04" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ slide04_tooltip }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>        
            </div>  
            -->                    
        </div>   

        <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>                        
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <span class="material-symbols-outlined2">audio_file</span>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to submit this jam into a queue?</h3>
                        <button data-modal-hide="popup-modal" @click="send_to_queue" type="button" class="text-black bg-yellow-300 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yes, I'm sure
                        </button>
                        <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                    </div>
                </div>
            </div>
        </div>    
        
    </div>

</template>

<script setup lang="ts">

import { _scrollMargin, _scrollPadding } from '#tailwind-config/theme';
import { _scroll } from '#tailwind-config/theme/willChange';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

var pic1 = '';
var pic2 = '';
var pic3 = '';
var pic4 = '';

const cookie_collab_url1 = useCookie("collab_url1");
const cookie_collab_url2 = useCookie("collab_url2");
const cookie_collab_url3 = useCookie("collab_url3");
const cookie_collab_url4 = useCookie("collab_url4");

var file_location_1 = '';
var file_location_2 = '';
var file_location_3 = '';
var file_location_4 = '';


var file_location_1_120 = '';
var file_location_2_120 = '';
var file_location_3_120 = '';
var file_location_4_120 = '';

var verticle_line_location = 'https://media04.tetraserver.com/' + 'app/vertical_line01.png';
//var vertical_line_hidden = true;
var ruler_checked = false;

//console.log('cookie_collab_url1');
//console.log(cookie_collab_url1.value);

var request_url = '/api/play2_watch?p=' + cookie_collab_url1.value;

const data = await $fetch(request_url);  
var play_data1 = data;

//alert(play_data);
//hidden1.value = false;

if (typeof play_data1 === "object" ) {
    // message gets narrowed to string!
    if (play_data1 != null) { 
        //alert(source_image1);
        file_location_1_120 = play_data1[0].video_location_120; 
        file_location_1 = play_data1[0].video_location; 
        pic1 = 'https://media04.tetraserver.com/' + play_data1[0].preview;

        //console.log('file_location_1_120');
        //console.log(file_location_1_120);

    }
}

var request_url2 = '/api/play2_watch?p=' + cookie_collab_url2.value;
const data2 = await $fetch(request_url2);  
var play_data2 = data2;
if (typeof play_data2 === "object" ) {
    // message gets narrowed to string!
    if (play_data2 != null) { 
        //alert(source_image1);
        file_location_2_120 = play_data2[0].video_location_120; 
        file_location_2 = play_data2[0].video_location; 
        pic2 = 'https://media04.tetraserver.com/' + play_data2[0].preview;
    }
}

var layout_2_01_location = 'https://media04.tetraserver.com/' + 'uploads/layout/2_01_NUM.png';

const text01 = ref('-0.00s');
const text02 = ref('-0.00s');
const text03 = ref('-0.00s');
const text04 = ref('-0.00s');

const text01_input = ref('');
const text01_input_hidden = ref(true);
const text01_edit_button_hidden = ref(false);
const text01_temp = ref('0.00');
const text01_backward_button_hidden = ref(false);
const text01_forward_button_hidden = ref(false);

const text02_input = ref('');
const text02_input_hidden = ref(true);
const text02_edit_button_hidden = ref(false);
const text02_temp = ref('0.00');
const text02_backward_button_hidden = ref(false);
const text02_forward_button_hidden = ref(false);

const text03_input = ref('');
const text03_input_hidden = ref(true);
const text03_edit_button_hidden = ref(false);
const text03_temp = ref('0.00');
const text03_backward_button_hidden = ref(false);
const text03_forward_button_hidden = ref(false);

const text04_input = ref('');
const text04_input_hidden = ref(true);
const text04_edit_button_hidden = ref(false);
const text04_temp = ref('0.00');
const text04_backward_button_hidden = ref(false);
const text04_forward_button_hidden = ref(false);

const wave01_duration = ref(0.0);
const wave02_duration = ref(0.0);
const wave03_duration = ref(0.0);
const wave04_duration = ref(0.0);

const wave01_scroll_till_end = ref(false);
const wave02_scroll_till_end = ref(false);
const wave03_scroll_till_end = ref(false);
const wave04_scroll_till_end = ref(false);

const line1_x1 = ref(5);
const line1_x2 = ref(40);

const line2_x1 = ref(5);
const line2_x2 = ref(40);

const line3_x1 = ref(5);
const line3_x2 = ref(40);

const line4_x1 = ref(5);
const line4_x2 = ref(40);

const preview_location = ref(''); // ref('https://media04.tetraserver.com/uploads/jam/Omie_06102022135409.mp4');
const loading = ref(false);
const finished = ref(false);

const generate_button_enabled = ref(true);
const send_to_queue_enabled = ref(false);

const slide01_tooltip = ref("100%");
const slide02_tooltip = ref("100%");
const slide03_tooltip = ref("100%");
const slide04_tooltip = ref("100%");

const slide01_val = ref(10);
const slide02_val = ref(10);
const slide03_val = ref(10);
const slide04_val = ref(10);

var my_wavesurfer01 = Object.create(WaveSurfer);
var my_wavesurfer02 = Object.create(WaveSurfer);
var my_wavesurfer03 = Object.create(WaveSurfer);
var my_wavesurfer04 = Object.create(WaveSurfer);

//const ruler_hidden = ref(true);

const client = useSupabaseClient();
const user = await client.auth.getUser();

var email = '';
if (user.data.user?.email != undefined) {
    email = user.data.user?.email;    
    //console.log(email)
}

/*
WaveSurfer.create({
  container: '#waveform',
  waveColor: '#4F4A85',
  progressColor: '#383351',
  url: 'https://media04.tetraserver.com/uploads/jam/Omie_06102022135409.mp4',
});*/

onMounted(() => {

    //console.log('hello');
    let width = window.innerWidth;
    console.log("window width: " + width);
    var wave_height = 0;
    if (width >= 1536) {
        wave_height = 144;
    } else if (width >= 1280)  {
        wave_height = 128;
    } else if (width >= 1024) {
        wave_height = 100;
    } else if (width >= 768) {
        wave_height = 96;
    } else if (width >= 640) {
        wave_height = 108;
    }

    // Create a timeline plugin instance with custom options 4 times
    const topTimeline01 = TimelinePlugin.create({
    height: 20,
    insertPosition: 'beforebegin',
    timeInterval: 0.2,
    primaryLabelInterval: 5,
    
    secondaryLabelInterval: 1,
    style: {
        fontSize: '16px',
        color: '#2D5B88',
    },
    })

    const topTimeline02 = TimelinePlugin.create({
    height: 20,
    insertPosition: 'beforebegin',
    timeInterval: 0.2,
    primaryLabelInterval: 5,
    secondaryLabelInterval: 1,
    style: {
        fontSize: '16px',
        color: '#2D5B88',
    },
    })

    const topTimeline03 = TimelinePlugin.create({
    height: 20,
    insertPosition: 'beforebegin',
    timeInterval: 0.2,
    primaryLabelInterval: 5,
    secondaryLabelInterval: 1,
    style: {
        fontSize: '16px',
        color: '#2D5B88',
    },
    })

    const topTimeline04 = TimelinePlugin.create({
    height: 20,
    insertPosition: 'beforebegin',
    timeInterval: 0.2,
    primaryLabelInterval: 5,
    secondaryLabelInterval: 1,
    style: {
        fontSize: '16px',
        color: '#2D5B88',
    },
    })


    // Create a second timeline
    const bottomTimeline = TimelinePlugin.create({
    height: 10,
    timeInterval: 0.1,
    primaryLabelInterval: 1,
    style: {
        fontSize: '10px',
        color: '#6A3274',
    },
    })

    const wavesurfer01 = WaveSurfer.create({
        container: '#waveform01',
        autoplay: false,
        waveColor: '#E85663',
        height: wave_height,
        progressColor: 'purple',
        // Set a bar width
        barWidth: 2,
        // Optionally, specify the spacing between bars
        barGap: 1,
        // And the bar radius
        barRadius: 2,
        minPxPerSec: 100,
        dragToSeek: {
                debounceTime: 10,       
            },
        plugins: [topTimeline01],
        url: file_location_1_120,        

    });
    if (my_wavesurfer01 != null) {
        my_wavesurfer01 = wavesurfer01;
    }
    //wavesurfer01.setTime(20);

    wavesurfer01.on('scroll', (visibleStartTime, visibleEndTime) => {
        //scroll01();
        //var first = document.getElementById('waveform01');
        //console.log('start');
        //console.log(first?.scrollWidth);
        //console.log(first?.offsetWidth);
        //console.log(first?.offsetLeft);
        var num = (Math.round(visibleStartTime * 100) / 100).toFixed(2);

        text01.value = '-' + num + 's';
        var visible_duration = visibleEndTime - visibleStartTime;
        //console.log('visible_duration');
        //console.log(visible_duration);

        var progress = visibleStartTime/ (wave01_duration.value - visible_duration)
        progress = progress * 120

        line1_x1.value = progress + 5;
        line1_x2.value = progress + 40;

        //console.log('wave01_duration.value');
        //console.log(wave01_duration.value );
        //console.log('Scroll', visibleStartTime + 's', visibleEndTime + 's')
        //console.log("visibleEndTime");
        //console.log(visibleEndTime);

        if (visibleEndTime.toFixed(2) == wave01_duration.value.toFixed(2)) {
            wave01_scroll_till_end.value = true;
        } else {
            wave01_scroll_till_end.value = false;
        }        
    });

    wavesurfer01.on('decode', (duration) => {
        //console.log('Decode', duration + 's');
        wave01_duration.value = duration;
    });

    wavesurfer01.on('click', () => {
        if (wavesurfer01.isPlaying()) {
            wavesurfer01.playPause();
        } else {
            wavesurfer01.play();    
        }
        //wavesurfer01.play();

        //setTimeout(() => {
            //console.log("we waited 204586560000 ms to run this code, oh boy wowwoowee!");
          //  wavesurfer01.playPause();
        //}, 10000);
    });

    const wavesurfer02 = WaveSurfer.create({
        container: '#waveform02',
        autoplay: false,
        waveColor: '#566AE8',
        height: wave_height,
        progressColor: 'purple',
        // Set a bar width
        barWidth: 2,
        // Optionally, specify the spacing between bars
        barGap: 1,
        // And the bar radius
        barRadius: 2,
        minPxPerSec: 100,
        plugins: [topTimeline02],
        url: file_location_2_120,
    });
    if (my_wavesurfer02 != null) {
        my_wavesurfer02 = wavesurfer02;
    }

    wavesurfer02.on('scroll', (visibleStartTime, visibleEndTime) => {
        var num = (Math.round(visibleStartTime * 100) / 100).toFixed(2);
        text02.value = '-' + num + 's';

        var visible_duration = visibleEndTime - visibleStartTime;
        var progress = visibleStartTime/ (wave02_duration.value - visible_duration)
        progress = progress * 120

        line2_x1.value = progress + 5;
        line2_x2.value = progress + 40;
    })

    wavesurfer02.on('decode', (duration) => {
        //console.log('Decode', duration + 's');
        wave02_duration.value = duration;
    });

    wavesurfer02.on('click', () => {
        if (wavesurfer02.isPlaying()) {
            wavesurfer02.playPause();
        } else {
            wavesurfer02.play();    
        }       
    });
/*
    const wavesurfer03 = WaveSurfer.create({
        container: '#waveform03',
        autoplay: false,
        waveColor: '#E8C656',
        height: wave_height,
        progressColor: 'purple',
        // Set a bar width
        barWidth: 2,
        // Optionally, specify the spacing between bars
        barGap: 1,
        // And the bar radius
        barRadius: 2,
        minPxPerSec: 100,
        plugins: [topTimeline03],
        url: file_location_3_120,
    });
    if (my_wavesurfer03 != null) {
        my_wavesurfer03 = wavesurfer03;
    }

    wavesurfer03.on('scroll', (visibleStartTime, visibleEndTime) => {
        var num = (Math.round(visibleStartTime * 100) / 100).toFixed(2);
        text03.value = '-' + num + 's';
        var visible_duration = visibleEndTime - visibleStartTime;
        var progress = visibleStartTime/ (wave03_duration.value - visible_duration)
        progress = progress * 120

        line3_x1.value = progress + 5;
        line3_x2.value = progress + 40;
    });

    wavesurfer03.on('decode', (duration) => {
        //console.log('Decode', duration + 's');
        wave03_duration.value = duration;
    });

    wavesurfer03.on('click', () => {
        if (wavesurfer03.isPlaying()) {
            wavesurfer03.playPause();
        } else {
            wavesurfer03.play();    
        }       
    });

    const wavesurfer04 = WaveSurfer.create({
        container: '#waveform04',
        autoplay: false,
        waveColor: '#56E878',
        height: wave_height,
        progressColor: 'purple',
        // Set a bar width
        barWidth: 2,
        // Optionally, specify the spacing between bars
        barGap: 1,
        // And the bar radius
        barRadius: 2,
        minPxPerSec: 100,
        plugins: [topTimeline04],
        url: file_location_4_120,
    });
    if (my_wavesurfer04 != null) {
        my_wavesurfer04 = wavesurfer04;
    }

    wavesurfer04.on('scroll', (visibleStartTime, visibleEndTime) => {
        var num = (Math.round(visibleStartTime * 100) / 100).toFixed(2);
        text04.value = '-' + num + 's';
        var visible_duration = visibleEndTime - visibleStartTime;
        var progress = visibleStartTime/ (wave04_duration.value - visible_duration)
        progress = progress * 120

        line4_x1.value = progress + 5;
        line4_x2.value = progress + 40;
    });

    wavesurfer04.on('decode', (duration) => {
        //console.log('Decode', duration + 's');
        wave04_duration.value = duration;
    });

    wavesurfer04.on('click', () => {
        if (wavesurfer04.isPlaying()) {
            wavesurfer04.playPause();
        } else {
            wavesurfer04.play();    
        }       
    });

    
  
    if (wavesurfer04.options.plugins != undefined) {
        console.log('wavesurfer04');
        console.log(wavesurfer04.getDuration);
        
    }*/

    /*
    console.log('waveform1 width');
    console.log(document.getElementById('waveform01')?.clientWidth);
    console.log('waveform2 width');
    console.log(document.getElementById('waveform02')?.clientWidth);
    console.log('waveform3 width');
    console.log(document.getElementById('waveform03')?.clientWidth);
    console.log('waveform4 width');
    console.log(document.getElementById('waveform04')?.clientWidth);

    console.log('waveform1 x');
    console.log(document.getElementById('waveform01')?.getClientRects);
    console.log('waveform2 x');
    console.log(document.getElementById('waveform02')?.getClientRects);
    console.log('waveform3 x');
    console.log(document.getElementById('waveform03')?.getBoundingClientRect().x);
    console.log('waveform4 x');
    console.log(document.getElementById('waveform04')?.getBoundingClientRect().x);
    */

    var line = document.getElementById('floating-image');
    var x = 0;

    var waveform1 = document.getElementById('waveform01');
    if (waveform1 != null) {
        var rect = waveform1.getBoundingClientRect();
        x = rect.x;    
        console.log('x = ' + x);
    }

    if (line != null) {
        line.style.left = (x + 250) + "px";        
    }

    window.addEventListener("resize", () => {
        console.log("Browser window size changed.");
        //location.reload();
        //window.alert("Window's size changed, Reloading");

    })

    /*
    var canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext('2d');
    ctx.beginPath(); 
    // Staring point (10,45)
    ctx.moveTo(10,45);
    // End point (180,47)
    ctx.lineTo(180,47);
    // Make the line visible
    ctx.stroke();
    */

    //var x1 = 50, y1 = 50,
    //x2 = 250, y2 = 150;
    
});

function show_ruler() {
    //console.log('ruler_checked');
    //console.log(ruler_checked);
    var line = document.getElementById("floating-image");
    //ruler_hidden.value = false;    

    if (line != null) {
        if (ruler_checked) {
            line.style.opacity = '0.05';
        } else {
            line.style.opacity = '1';
            var x,y = 0;
            var waveform1 = document.getElementById('waveform01');
            if (waveform1 != null) {
                var rect = waveform1.getBoundingClientRect();
                x = rect.x;    
                y = rect.y;
            }

            let width = window.innerWidth;
            console.log("window width: " + width);
            if (width >= 1536) {
                // 2xl
                line.style.left = (x + 450) + "px";
                line.style.top = (y - 20) + "px";            
                line.style.height = "720px";
            } else if (width >= 1280) {
                line.style.left = (x + 450) + "px";
                line.style.top = (y - 20) + "px";            
                line.style.height = "680px";
            } else if (width >= 1024) {
                line.style.left = (x + 450) + "px";
                line.style.top = (y - 20) + "px";            
                line.style.height = "640px";
            } else if (width >= 768) {
                line.style.left = (x + 260) + "px";
                line.style.top = (y - 20) + "px";            
                line.style.height = "540px";
            } else {
                line.style.left = (x + 220) + "px";
                line.style.top = (y - 20) + "px";            
                line.style.height = "510px";
            }
        }
    }
}

function scroll01() {
    console.log('moving');
}

function slide01_change() {
    if (slide01_val.value == 10) {
        my_wavesurfer01.setVolume(1.0);
        slide01_tooltip.value = '100%'
    } else if (slide01_val.value == 9) {
        my_wavesurfer01.setVolume(0.9);
        slide01_tooltip.value = '90%'
    } else if (slide01_val.value == 8) {
        my_wavesurfer01.setVolume(0.8);
        slide01_tooltip.value = '80%'
    } else if (slide01_val.value == 7) {
        my_wavesurfer01.setVolume(0.7);
        slide01_tooltip.value = '70%'
    } else if (slide01_val.value == 6) {
        my_wavesurfer01.setVolume(0.6);
        slide01_tooltip.value = '60%'
    } else if (slide01_val.value == 5) {
        my_wavesurfer01.setVolume(0.5);
        slide01_tooltip.value = '50%'
    } else if (slide01_val.value == 4) {
        my_wavesurfer01.setVolume(0.4);
        slide01_tooltip.value = '40%'
    } else if (slide01_val.value == 3) {
        my_wavesurfer01.setVolume(0.3);
        slide01_tooltip.value = '30%'
    } else if (slide01_val.value == 2) {
        my_wavesurfer01.setVolume(0.2);
        slide01_tooltip.value = '20%'
    } else if (slide01_val.value == 1) {
        my_wavesurfer01.setVolume(0.1);
        slide01_tooltip.value = '10%'
    } else if (slide01_val.value == 0) {
        my_wavesurfer01.setVolume(0.0);
        slide01_tooltip.value = '0%'
    }

    //var tooltip01 = document.getElementById('tooltip-volume01') as HTMLDivElement;
    //if (tooltip01 != null) {
    //    tooltip01.hidden = false;    
    //}
    

    //slide01_tooltip.value = slide01_val.value;
    //console.log('slide01_tooltip.value');
    //console.log(slide01_tooltip.value);
    //console.log('slide01_val.value');
    //console.log(slide01_val.value);
}

function slide02_change() {
    if (slide02_val.value == 10) {
        my_wavesurfer02.setVolume(1.0);
        slide02_tooltip.value = '100%'
    } else if (slide02_val.value == 9) {
        my_wavesurfer02.setVolume(0.9);
        slide02_tooltip.value = '90%'
    } else if (slide02_val.value == 8) {
        my_wavesurfer02.setVolume(0.8);
        slide02_tooltip.value = '80%'
    } else if (slide02_val.value == 7) {
        my_wavesurfer02.setVolume(0.7);
        slide02_tooltip.value = '70%'
    } else if (slide02_val.value == 6) {
        my_wavesurfer02.setVolume(0.6);
        slide02_tooltip.value = '60%'
    } else if (slide02_val.value == 5) {
        my_wavesurfer02.setVolume(0.5);
        slide02_tooltip.value = '50%'
    } else if (slide02_val.value == 4) {
        my_wavesurfer02.setVolume(0.4);
        slide02_tooltip.value = '40%'
    } else if (slide02_val.value == 3) {
        my_wavesurfer02.setVolume(0.3);
        slide02_tooltip.value = '30%'
    } else if (slide02_val.value == 2) {
        my_wavesurfer02.setVolume(0.2);
        slide02_tooltip.value = '20%'
    } else if (slide02_val.value == 1) {
        my_wavesurfer02.setVolume(0.1);
        slide02_tooltip.value = '10%'
    } else if (slide02_val.value == 0) {
        my_wavesurfer02.setVolume(0.0);
        slide02_tooltip.value = '0%'
    }
}
/*
function slide03_change() {
    if (slide03_val.value == 10) {
        my_wavesurfer03.setVolume(1.0);
        slide03_tooltip.value = '100%'
    } else if (slide03_val.value == 9) {
        my_wavesurfer03.setVolume(0.9);
        slide03_tooltip.value = '90%'
    } else if (slide03_val.value == 8) {
        my_wavesurfer03.setVolume(0.8);
        slide03_tooltip.value = '80%'
    } else if (slide03_val.value == 7) {
        my_wavesurfer03.setVolume(0.7);
        slide03_tooltip.value = '70%'
    } else if (slide03_val.value == 6) {
        my_wavesurfer03.setVolume(0.6);
        slide03_tooltip.value = '60%'
    } else if (slide03_val.value == 5) {
        my_wavesurfer03.setVolume(0.5);
        slide03_tooltip.value = '50%'
    } else if (slide03_val.value == 4) {
        my_wavesurfer03.setVolume(0.4);
        slide03_tooltip.value = '40%'
    } else if (slide03_val.value == 3) {
        my_wavesurfer03.setVolume(0.3);
        slide03_tooltip.value = '30%'
    } else if (slide03_val.value == 2) {
        my_wavesurfer03.setVolume(0.2);
        slide03_tooltip.value = '20%'
    } else if (slide03_val.value == 1) {
        my_wavesurfer03.setVolume(0.1);
        slide03_tooltip.value = '10%'
    } else if (slide03_val.value == 0) {
        my_wavesurfer03.setVolume(0.0);
        slide03_tooltip.value = '0%'
    }
}

function slide04_change() {
    if (slide04_val.value == 10) {
        my_wavesurfer04.setVolume(1.0);
        slide04_tooltip.value = '100%'
    } else if (slide04_val.value == 9) {
        my_wavesurfer04.setVolume(0.9);
        slide04_tooltip.value = '90%'
    } else if (slide04_val.value == 8) {
        my_wavesurfer04.setVolume(0.8);
        slide04_tooltip.value = '80%'
    } else if (slide04_val.value == 7) {
        my_wavesurfer04.setVolume(0.7);
        slide04_tooltip.value = '70%'
    } else if (slide04_val.value == 6) {
        my_wavesurfer04.setVolume(0.6);
        slide04_tooltip.value = '60%'
    } else if (slide04_val.value == 5) {
        my_wavesurfer04.setVolume(0.5);
        slide04_tooltip.value = '50%'
    } else if (slide04_val.value == 4) {
        my_wavesurfer04.setVolume(0.4);
        slide04_tooltip.value = '40%'
    } else if (slide04_val.value == 3) {
        my_wavesurfer04.setVolume(0.3);
        slide04_tooltip.value = '30%'
    } else if (slide04_val.value == 2) {
        my_wavesurfer04.setVolume(0.2);
        slide04_tooltip.value = '20%'
    } else if (slide04_val.value == 1) {
        my_wavesurfer04.setVolume(0.1);
        slide04_tooltip.value = '10%'
    } else if (slide04_val.value == 0) {
        my_wavesurfer04.setVolume(0.0);
        slide04_tooltip.value = '0%'
    }
}
*/

async function generate_preview() {
    loading.value = true;
    finished.value = false;

    generate_button_enabled.value = false;

    //var preview_location = "";
    var preview_disabled = true;

    var media_location = "https://media04.tetraserver.com/";

    //Jazz
    var video_filename01 = file_location_1.replace("https://media04.tetraserver.com/stream/video_stream.php?code=",""); //"1709263790_Jazz-01-Piano.mp4";
    var video_filename02 = file_location_2.replace("https://media04.tetraserver.com/stream/video_stream.php?code=",""); //"1709264086_Jazz-02-Drum.mp4";
    //var video_filename03 = file_location_3.replace("https://media04.tetraserver.com/stream/video_stream.php?code=",""); //"1708352056_Jazz-03-Saxophone.mp4";
    //var video_filename04 = file_location_4.replace("https://media04.tetraserver.com/stream/video_stream.php?code=",""); //"1709264537_Jazz-04-DoubleBass.mp4";

    var clip1 = "L";
    var clip2 = "L";
    var clip3 = "L";
    var clip4 = "L";

    var temp_bar01 = 1000 * parseFloat(text01.value.replace('-','').replace('s',''));
    var temp_bar02 = 1000 * parseFloat(text02.value.replace('-','').replace('s',''));
    var temp_bar03 = 1000 * parseFloat(text03.value.replace('-','').replace('s',''));
    var temp_bar04 = 1000 * parseFloat(text04.value.replace('-','').replace('s',''));

    //var bar_max = Math.max(temp_bar01, temp_bar02, temp_bar03, temp_bar04);
    var bar_max = Math.max(temp_bar01, temp_bar02, temp_bar03);
    
    
    var bar01 = Math.round(bar_max - temp_bar01);
    var bar02 = Math.round(bar_max - temp_bar02);
    var bar03 = Math.round(bar_max - temp_bar03);
    var bar04 = Math.round(bar_max - temp_bar04);

    //var min = Math.min(bar01, bar02, bar03, bar04);
    
    var audio01 = slide01_val.value/10.0;
    var audio02 = slide02_val.value/10.0;
    var audio03 = slide03_val.value/10.0;
    var audio04 = slide04_val.value/10.0;

    var min = 1000000000.0;
    if (audio01 > 0.0) {
        if (min > temp_bar01) {
            min = temp_bar01 + bar01;
        }
    } 
    
    if (audio02 > 0.0) {
        if (min > temp_bar02) {
            min = temp_bar02  + bar02;
        }
    } 

    if (min == 1000000000.0) {
        min = 0.0;
    }

    var start_time = min/10;
    //var layout_name = "4_01";
    //var clips_num = 4;
    var layout_name = "2_01";
    var clips_num = 3;

//    var preview = media_location + "ajax_preview2.php?layout_name=" + layout_name
//            + "&clip1=" + clip1 + "&clip2=" + clip2 + "&clip3=" + clip3 + "&clip4=" + clip4 + "&clips_num=" + clips_num
//            + "&video01_file=" + video_filename01 + "&video02_file=" + video_filename02 + "&video03_file=" + video_filename03 + "&video04_file=" + video_filename04 + "&bar01=" + bar01 + "&bar02=" + bar02 + "&bar03=" + bar03 + "&bar04=" + bar04
//            + "&audio01=" + audio01 + "&audio02=" + audio02 + "&audio03=" + audio03 + "&audio04=" + audio04 + "&start_time=" + start_time;

    var preview = media_location + "ajax_preview2.php?layout_name=" + layout_name
            + "&clip1=" + clip1 + "&clip2=" + clip2 + "&clips_num=" + clips_num
            + "&video01_file=" + video_filename01 + "&video02_file=" + video_filename02 + "&bar01=" + bar01 + "&bar02=" + bar02    
            + "&audio01=" + audio01 + "&audio02=" + audio02 + "&start_time=" + start_time;
            
    console.log(preview);
    //const { data } = await useFetch(preview);
    //var result = data.value;

    var result = await $fetch(preview);

    var media = "https://media04.tetraserver.com/";
    //console.log('result');
    //console.log(result);

    preview_location.value = media + result;
    //loading.value = false;
    finished.value = true;
    generate_button_enabled.value = true;

    send_to_queue_enabled.value = true;
    
}

function textinput01_edit() {
    /*
    alert('Hey');


    console.log('text01_input');
    console.log(text01_input);

    if (hasTwoDecimals(text01_input)) {
        console.log('Yeah');
    } else {
        console.log('Oh no');
    }*/

    //console.log('text01');
    //console.log(text01.value);

    text01_temp.value = text01.value;

    text01_input.value = text01.value.replace('-','').replace('s','');

    text01.value = '';
    text01_input_hidden.value = false;
    text01_edit_button_hidden.value = true;
    text01_backward_button_hidden.value = true;
    text01_forward_button_hidden.value = true;

    //this.$ref.text01_element.value.$el.focus();
    //this.$ref.text01_element.value.$el.select();

    const input = document.getElementById("text01_id") as HTMLInputElement;
    if (input != null) {
        input.focus();
        //console.log('input.value');
        //console.log(input.value);
        

        //input.select(); 
        //input.setSelectionRange(0,input.value.length);
    }    
}

async function textinput01_blur() {
    //alert(text01_input.value);
    var input = text01_input.value;
    //alert(input);
    if (await hasTwoDecimals(input)) {
        // return to normal
        //alert('Okay');
        text01_temp.value = '-' + input + 's';
        var time01 = parseFloat(text01_input.value);
        //this.$ref.waveform01_ref.wavesurfer01.setTime(time01);
        my_wavesurfer01.setScrollTime(time01);

    } else {
        // alert and focus;
        alert("Enter 2 decimal number");
        //text01_input.value = text01_temp.value.replace('+','').replace('s','');
        // return old value

    }

    text01_input_hidden.value = true;
    text01.value = text01_temp.value;
    text01_edit_button_hidden.value = false;
    text01_backward_button_hidden.value = false;
    text01_forward_button_hidden.value = false;

} 

async function textinput01_backward() {    
    console.log('text01');
    console.log(text01.value);

    text01_temp.value = text01.value;
    text01_input.value = text01.value.replace('-','').replace('s','');

    var input = text01_input.value;
    if (hasTwoDecimals(input)) {                
        var time01 = parseFloat(input);
        if (time01 >= 0.01) {
            time01 -= 0.01;
            my_wavesurfer01.setScrollTime(time01);
        }
        text01.value = "-" + time01.toFixed(2) + "s";
    } else {
        text01.value = text01_temp.value
    }   
}

async function textinput01_forward() {    
    
    //console.log('wave01 duration');
    //console.log(wave01_duration.value);

    if (!wave01_scroll_till_end.value) {
        //alert('Hello');
        text01_temp.value = text01.value;
        text01_input.value = text01.value.replace('-','').replace('s','');

        var input = text01_input.value;
        console.log('input');
        console.log(input);
        if (hasTwoDecimals(input)) {                
            var time01 = parseFloat(input);
            if (time01 >= 0.00) {
                time01 += 0.01;
                my_wavesurfer01.setScrollTime(time01);
            }
            text01.value = "-" + time01.toFixed(2) + "s";
        } else {
            text01.value = text01_temp.value
        }   
    }
    /*
    text01_temp.value = text01.value;
    text01_input.value = text01.value.replace('+','').replace('s','');

    var input = text01_input.value;
    if (await hasTwoDecimals(input)) {                
        var time01 = parseFloat(input);
        if (time01 >= 0.01) {
            time01 -= 0.01;
            my_wavesurfer01.setScrollTime(time01);
        }
        text01.value = "+" + time01.toFixed(2) + "s";
    } else {
        text01.value = text01_temp.value
    }   */
}

function hasTwoDecimals(text) {
  // Check if the input is a number
  if (isNaN(text)) {
    //console.log('Y');
    return false;
  }

  //console.log('X');
  //console.log('text');
  //console.log(text);

  // Convert the text to a number to use split method
  const number = parseFloat(text);

  var fraction = number - Math.floor(number);

  if (fraction == 0) {
    return true;
  }

  // Split the number into an array by the decimal point
  const parts = number.toString().split(".");

  //console.log('parts.length');
  //console.log(parts.length);
  
  //console.log('parts[1].length');
  //console.log(parts[1].length);
  
  return parts.length === 2 && (parts[1].length <= 2);
}

function textinput02_edit() {    
    console.log('text02');
    console.log(text02.value);

    text02_temp.value = text02.value;
    text02_input.value = text02.value.replace('-','').replace('s','');

    text02.value = '';
    text02_input_hidden.value = false;
    text02_edit_button_hidden.value = true;
    text02_backward_button_hidden.value = true;
    text02_forward_button_hidden.value = true;

    const input = document.getElementById("text02_id") as HTMLInputElement;
    if (input != null) {
        input.focus();
        console.log('input.value');
        console.log(input.value);
        
    }    
}
async function textinput02_blur() {    
    var input = text02_input.value;
    
    if (await hasTwoDecimals(input)) {        
        text02_temp.value = '-' + input + 's';
        var time02 = parseFloat(text02_input.value);
        my_wavesurfer02.setScrollTime(time02);

    } else {
        alert("Enter 2 decimal number");
    }

    text02_input_hidden.value = true;
    text02.value = text02_temp.value;
    text02_edit_button_hidden.value = false;
    text02_backward_button_hidden.value = false;
    text02_forward_button_hidden.value = false;
    
}

async function textinput02_backward() {    
    console.log('text02');
    console.log(text02.value);

    text02_temp.value = text02.value;
    text02_input.value = text02.value.replace('-','').replace('s','');

    var input = text02_input.value;
    if (hasTwoDecimals(input)) {                
        var time02 = parseFloat(input);
        if (time02 >= 0.01) {
            time02 -= 0.01;
            my_wavesurfer02.setScrollTime(time02);
        }
        text02.value = "-" + time02.toFixed(2) + "s";
    } else {
        text02.value = text02_temp.value
    }       
}

async function textinput02_forward() {    
    if (!wave02_scroll_till_end.value) {
        text02_temp.value = text02.value;
        text02_input.value = text02.value.replace('-','').replace('s','');

        var input = text02_input.value;
        if (hasTwoDecimals(input)) {                
            var time02 = parseFloat(input);
            if (time02 >= 0.00) {
                time02 += 0.01;
                my_wavesurfer02.setScrollTime(time02);
            }
            text02.value = "-" + time02.toFixed(2) + "s";
        } else {
            text02.value = text02_temp.value
        }   
    }
}
/*
function textinput03_edit() {    
    console.log('text03');
    console.log(text03.value);

    text03_temp.value = text03.value;
    text03_input.value = text03.value.replace('-','').replace('s','');

    text03.value = '';
    text03_input_hidden.value = false;
    text03_edit_button_hidden.value = true;
    text03_backward_button_hidden.value = true;
    text03_forward_button_hidden.value = true;

    const input = document.getElementById("text03_id") as HTMLInputElement;
    if (input != null) {
        input.focus();
        console.log('input.value');
        console.log(input.value);        
    }    
}
async function textinput03_blur() {    
    var input = text03_input.value;    
    if (await hasTwoDecimals(input)) {        
        text03_temp.value = '-' + input + 's';
        var time03 = parseFloat(text03_input.value);
        my_wavesurfer03.setScrollTime(time03);

    } else {
        alert("Enter 2 decimal number");
    }
    text03_input_hidden.value = true;
    text03.value = text03_temp.value;
    text03_edit_button_hidden.value = false;
    text03_backward_button_hidden.value = false;
    text03_forward_button_hidden.value = false;
}

async function textinput03_backward() {    
    console.log('text03');
    console.log(text03.value);

    text03_temp.value = text03.value;
    text03_input.value = text03.value.replace('-','').replace('s','');

    var input = text03_input.value;
    if (hasTwoDecimals(input)) {                
        var time03 = parseFloat(input);
        if (time03 >= 0.01) {
            time03 -= 0.01;
            my_wavesurfer03.setScrollTime(time03);
        }
        text03.value = "-" + time03.toFixed(2) + "s";
    } else {
        text03.value = text03_temp.value
    }   
}

async function textinput03_forward() {    
    if (!wave03_scroll_till_end.value) {
        text03_temp.value = text03.value;
        text03_input.value = text03.value.replace('-','').replace('s','');

        var input = text03_input.value;
        if (hasTwoDecimals(input)) {                
            var time03 = parseFloat(input);
            if (time03 >= 0.00) {
                time03 += 0.01;
                my_wavesurfer03.setScrollTime(time03);
            }
            text03.value = "-" + time03.toFixed(2) + "s";
        } else {
            text03.value = text03_temp.value
        }   
    }
}


function textinput04_edit() {    
    console.log('text04');
    console.log(text04.value);

    text04_temp.value = text04.value;
    text04_input.value = text04.value.replace('-','').replace('s','');

    text04.value = '';
    text04_input_hidden.value = false;
    text04_edit_button_hidden.value = true;
    text04_backward_button_hidden.value = true;
    text04_forward_button_hidden.value = true;

    const input = document.getElementById("text04_id") as HTMLInputElement;
    if (input != null) {
        input.focus();
        console.log('input.value');
        console.log(input.value);        
    }    
}
async function textinput04_blur() {    
    var input = text04_input.value;    
    if (await hasTwoDecimals(input)) {        
        text04_temp.value = '-' + input + 's';
        var time04 = parseFloat(text04_input.value);
        my_wavesurfer04.setScrollTime(time04);

    } else {
        alert("Enter 2 decimal number");
    }
    text04_input_hidden.value = true;
    text04.value = text04_temp.value;
    text04_edit_button_hidden.value = false;
    text04_backward_button_hidden.value = false;
    text04_forward_button_hidden.value = false;
}
async function textinput04_backward() {    
    text04_temp.value = text04.value;
    text04_input.value = text04.value.replace('-','').replace('s','');

    var input = text04_input.value;
    if (hasTwoDecimals(input)) {                
        var time04 = parseFloat(input);
        if (time04 >= 0.01) {
            time04 -= 0.01;
            my_wavesurfer04.setScrollTime(time04);
        }
        text04.value = "-" + time04.toFixed(2) + "s";
    } else {
        text04.value = text04_temp.value
    }   
}
async function textinput04_forward() {    
    if (!wave04_scroll_till_end.value) {
        text04_temp.value = text04.value;
        text04_input.value = text04.value.replace('-','').replace('s','');

        var input = text04_input.value;
        if (hasTwoDecimals(input)) {                
            var time04 = parseFloat(input);
            if (time04 >= 0.00) {
                time04 += 0.01;
                my_wavesurfer04.setScrollTime(time04);
            }
            text04.value = "-" + time04.toFixed(2) + "s";
        } else {
            text04.value = text04_temp.value
        }   
    }
}
*/

async function send_to_queue() {
    //loading.value = true;
    //finished.value = false;

    //generate_button_enabled.value = false;

    //var preview_location = "";
    //var preview_disabled = true;
        
    var code01 = cookie_collab_url1.value;
    var code02 = cookie_collab_url2.value;
    var code03 = cookie_collab_url3.value;
    var code04 = cookie_collab_url4.value;

    //var clip1 = "L";
    //var clip2 = "L";
    //var clip3 = "L";
    //var clip4 = "L";

    var temp_bar01 = 1000 * parseFloat(text01.value.replace('-','').replace('s',''));
    var temp_bar02 = 1000 * parseFloat(text02.value.replace('-','').replace('s',''));
    var temp_bar03 = 1000 * parseFloat(text03.value.replace('-','').replace('s',''));
    var temp_bar04 = 1000 * parseFloat(text04.value.replace('-','').replace('s',''));

    //var bar_max = Math.max(temp_bar01, temp_bar02, temp_bar03, temp_bar04);
    var bar_max = Math.max(temp_bar01, temp_bar02);

    var bar01 = bar_max - temp_bar01;
    var bar02 = bar_max - temp_bar02;
    var bar03 = bar_max - temp_bar03;
    var bar04 = bar_max - temp_bar04;

    //var min = Math.min(bar01, bar02, bar03, bar04);
    
    var audio01 = slide01_val.value/10.0;
    var audio02 = slide02_val.value/10.0;
    var audio03 = slide03_val.value/10.0;
    var audio04 = slide04_val.value/10.0;

    var layout_name = "2_01";
    var clips_num = 2;

    var script = '/api/submit_batch2?email=' + email + 
    '&layout_code=' + layout_name + '&clip1=P&clip2=L&clip3=L&clip4=L&clips_num=' + clips_num + '&code01=' + code01 + 
    '&code02=' + code02 + '&code03=' + code03 + '&code04=' + code04 + 
    '&bar01=' + bar01 + '&bar02=' + bar02 + '&bar03=' + bar03 + '&bar04=' + bar04 + 
    '&audio01=' + audio01 + '&audio02=' + audio02 + '&audio03=' + audio03 + '&audio04=' + audio04;

    console.log("script=" + script);
    
    var result = await $fetch(script);

    console.log("result=" + result);

    await navigateTo('/inventory02');

}



</script>

<style scoped>
#floating-image {
  float: left; /* Or float: right; for right-sided float */
  position: absolute; /* Enables further positioning */
  top: 0px; /* Adjust vertical position as needed */
  left: 50px; /* Adjust horizontal position as needed */
  opacity: 0.05;
  height: 560px;
  z-index: 1;
}


::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #ae1111;
}

input[type=range][orient=vertical] {
    writing-mode: vertical-lr;
    direction: rtl;    
    width: 16px;
    /* height: 100px; */
    vertical-align: bottom;
    margin: 8px;
}

.range2xl[type=range][orient=vertical] {
    height: 140px;
}

input[type='range']::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;   
    margin-top: -1px;
}
    
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* -moz-appearance: none; */
    -webkit-border-radius: 5px;
    /*16x16px adjusted to be same as 14x14px on moz*/
    height: 16px;
    width: 16px;
    border-radius: 5px;
    background: #e7e7e7;
    border: 1px solid #c5c5c5;
}

.my_material-icons {

  font-size: 20px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.material-symbols-outlined2 {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 112px;
}

</style>

 