<template>
    <div>
        <div :hidden="hide_alert" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold">Please select the 3 videos</p>
                <p class="text-sm">Click a number panel on the left, then click a video on the right to select.</p>
                </div>
            </div> 
        </div>
        <form @submit.prevent="proceed" target="_self" action="/webapp/collaboration03" id="main_form" ref="myForm">

            <div class="sm:flex sm:flex-row sm:gap-1 md:flex md:flex-row md:gap-2 lg:flex lg:flex-row lg:h-screen lg:gap-2 xl:flex xl:flex-row xl:gap-2 xl:h-screen 2xl:flex 2xl:flex-row 2xl:gap-8 2xl:h-screen" >
                
                <div class="border border-yellow-300 grid grid-cols-2 p-4 sm:h-64 sm:gap-0 sm:w-158 md:h-72 md:gap-0 md:w-118 lg:gap-0 lg:w-158 lg:h-88 xl:gap-0 xl:w-2xl xl:h-88 2xl:gap-0 2xl:w-178 2xl:h-96 ">
                    
                    <div class="my-4 row-span-2 col-span-2 relative w-full h-48 md:h-64 lg:h-72 xl:h-80 border border-white bg-black overflow-hidden">
                        
                        <div class="absolute inset-0 flex items-center justify-center cursor-pointer transition-all overflow-hidden p-2"
                            :class="activeSlot === 1 ? 'border-4 border-yellow-400 ring-2 ring-yellow-400 z-20' : 'border-2 border-transparent z-10'"
                            @click="setActiveSlot(1)">
                            <div class="dark:text-white text-white m-8 content-center text-6xl md:text-8xl xl:text-9xl z-20 pointer-events-none">
                                {{ number1 }}
                            </div>
                            <!-- เว้นระยะภาพพรีวิวไม่ให้บังขอบไฮไลต์ -->
                            <div class="absolute inset-1.5 overflow-hidden flex items-center justify-center">
                                <img :src="source_image1" :hidden="hidden1" class="w-full h-full object-contain bg-black" />
                            </div>
                        </div>

                        <div class="absolute bottom-4 left-4 w-7/12 flex flex-row gap-2 z-30">
                            <div class="w-1/2 aspect-video flex items-center justify-center bg-gray-800 cursor-pointer transition-all shadow-xl relative overflow-hidden p-1"
                                :class="activeSlot === 2 ? 'border-4 border-yellow-400 ring-2 ring-yellow-400' : 'border-2 border-white'"
                                @click.stop="setActiveSlot(2)">
                                <div class="dark:text-white text-white content-center text-3xl md:text-4xl lg:text-5xl z-20 pointer-events-none">
                                    {{ number2 }}
                                </div>
                                <div class="absolute inset-1 overflow-hidden flex items-center justify-center">
                                    <img :src="source_image2" :hidden="hidden2" class="w-full h-full object-contain bg-black" />
                                </div>
                            </div>

                            <div class="w-1/2 aspect-video flex items-center justify-center bg-gray-800 cursor-pointer transition-all shadow-xl relative overflow-hidden p-1"
                                :class="activeSlot === 3 ? 'border-4 border-yellow-400 ring-2 ring-yellow-400' : 'border-2 border-white'"
                                @click.stop="setActiveSlot(3)">
                                <div class="dark:text-white text-white content-center text-3xl md:text-4xl lg:text-5xl z-20 pointer-events-none">
                                    {{ number3 }}
                                </div>
                                <div class="absolute inset-1 overflow-hidden flex items-center justify-center">
                                    <img :src="source_image3" :hidden="hidden3" class="w-full h-full object-contain bg-black" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="flex items-stretch">
                        <input type="button"
                            class="mx-auto sm:mt-1 sm:w-36 sm:h-full sm:text-sm md:text-md md:w-36 md:h-full h-12 md:text-lg md:mt-1 bg-yellow-300 lg:pt-1 xl:pt-3 2xl:pt-3 lg:h-14 lg:mt-6 xl:mt-8 2xl:h-14 2xl:mt-8 border-2 border-black text-black text-lg font-bold lg:py-2 lg:px-4 xl:py-2 xl:px-4 2xl:py-2 2xl:px-4 rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 hover:bg-slate-300 cursor-pointer"
                            value="Reset" @click="reset" />
                    </div>
                    <div class="flex items-stretch">
                        <input type="button"
                            class="mx-auto sm:mt-1 sm:w-36 sm:h-full sm:text-sm md:text-md md:w-36 md:h-full h-12 md:text-lg md:mt-1 bg-yellow-300 lg:pt-1 xl:pt-3 2xl:pt-3 lg:h-14 lg:mt-6 xl:mt-8 2xl:h-14 2xl:mt-8 border-2 border-black text-black text-lg font-bold lg:py-2 lg:px-4 xl:py-2 xl:px-4 2xl:py-2 2xl:px-4 rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 hover:bg-slate-300 cursor-pointer"
                            value="Proceed -->" @click="proceed" />
                    </div>
                    
                </div>
                
                <div class="overflow-auto border border-yellow-300 flex flex-col p-4 sm:grow md:grow lg:grow xl:grow 2xl:w-178 h-[calc(100vh-100px)]">
                    <div class="py-4 flex flex-row items-center gap-x-2 h-16">
                        <input id="radio_landscape" type="radio" value="Landscape" v-model="play_type" name="radio01" 
                            class="mt-1 w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500 cursor-pointer" 
                            @change="radio_landscape_click">
                        <label for="radio_landscape" class="mt-1 text-gray-200 cursor-pointer text-sm">Landscape</label>

                        <input id="radio_portrait" type="radio" value="Portrait" v-model="play_type" name="radio01" 
                            class="mt-1 w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500 cursor-pointer" 
                            @change="radio_portrait_click">
                        <label for="radio_portrait" class="mt-1 text-gray-200 cursor-pointer text-sm">Portrait</label>

                        <input :placeholder="q_input_bar_placeholder" type="text"
                            class="flex-1 outline-none rounded-xl px-4 py-2 border-2 border-yellow-400 text-base text-white bg-gray-800 placeholder-gray-400 focus:border-yellow-300"
                            v-model="q_input_bar" @keyup.enter="search_play2clip" :name="q_name"/>

                        <button type="button" @click="search_play2clip"
                            class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl transition duration-150 cursor-pointer text-sm whitespace-nowrap">
                            Search
                        </button>
                    </div>
                    
                    <div class="text-center">{{ instruction }}</div>

                    <div v-if="landscape_show" class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
                        <div v-for="p in plays" :key="'L-' + p.id" class="cursor-pointer relative" @click="handleVideoClick(p, 'L')">
                            <CollaborationSelectionCardLandscape :play='p'></CollaborationSelectionCardLandscape>
                            
                            <div v-if="selectedVideos[1] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">1</div>
                            <div v-if="selectedVideos[2] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">2</div>
                            <div v-if="selectedVideos[3] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">3</div>
                        </div>
                    </div>
                    
                    <div v-if="portrait_show" class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4">
                        <div v-for="p in plays2" :key="'P-' + p.id" class="cursor-pointer relative" @click="handleVideoClick(p, 'P')">
                            <CollaborationSelectionCardPortrait :play='p'></CollaborationSelectionCardPortrait>
                            
                            <div v-if="selectedVideos[1] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">1</div>
                            <div v-if="selectedVideos[2] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">2</div>
                            <div v-if="selectedVideos[3] === p.url" class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center z-10">3</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { PlayVideo } from '~/types/play-video'

const q_input_bar_placeholder = ref('Song name or artist name');
const q_input_bar = ref('');
const instruction = ref('Instructions: Search and Drag videos to the number panels.');

const plays = ref<any>(await $fetch('/api/play2s_l/?limit=20&ready=1'));  
const plays2 = ref<any>(await $fetch('/api/play2s_p/?limit=20&ready=1'));

var staff = 'https://media05.fuzikapp.com/app/music_staff.png';

const activeSlot = ref(1); 
const selectedVideos = ref<Record<number, string | null>>({ 1: null, 2: null, 3: null});

const number1 = ref('1');
const hidden1 = ref(true);
const source_image1 = ref(staff);

const number2 = ref('2');
const hidden2 = ref(true);
const source_image2 = ref(staff);

const number3 = ref('3');
const hidden3 = ref(true);
const source_image3 = ref(staff);

const number4 = ref('4');
const hidden4 = ref(true);
const source_image4 = ref(staff);

const play2_url1 = ref('');
const play2_url2 = ref('');
const play2_url3 = ref('');
const play2_url4 = ref('');
const play2_url5 = ref('');

const hide_alert = ref(true);

const cookie_collab_code = useCookie("collab_code");
cookie_collab_code.value = '3_02';

var q_name = makeid(5);

const play_type = ref('Landscape');

const radio_landscape = ref(true);
const radio_portrait = ref(false);

const landscape_show = ref(true);
const portrait_show = ref(false);

async function search_play2clip() {
    var q_address_bar = q_input_bar.value.trim();

    /*
    play_type.value = "Landscape";
    if (play_type.value.localeCompare("Landscape")==0) { 
    */
    
        var location = '/api/play2s_l/?limit=3&ready=1';

        if (q_address_bar.length != 0) {
            location = '/api/play2s_l/?limit=60&ready=1&q=' + encodeURIComponent(q_address_bar);  
            instruction.value = '';
        } else {
            // 
            instruction.value = 'Instructions: Click a number panel on the left, then click a video on the right to select.';
            location = '/api/play2s_l/?limit=20&ready=1';
        }

        // if (play2_url1.value.length > 0) {
        //     location += '&ex1=' + play2_url1.value;
        // }

        // if (play2_url2.value.length > 0) {
        //     location += '&ex2=' + play2_url2.value;
        // }
        
        /* 
        if (play2_url3.value.length > 0) {
            location += '&ex3=' + encodeURIComponent(String(play2_url3.value));
        }
        if (play2_url4.value.length > 0) {
            location += '&ex4=' + encodeURIComponent(String(play2_url4.value));
        }
        */

        // 
        plays.value = await $fetch(location);
        
    // } 

    /*
    if (play_type.value.localeCompare("Portrait")==0) { 
    */
      
        var location2 = '/api/play2s_p/?limit=3&ready=1';

        if (q_address_bar.length != 0) {
            location2 = '/api/play2s_p/?limit=60&ready=1&q=' + encodeURIComponent(q_address_bar);  
            instruction.value = '';
        } else {
            // 
            instruction.value = 'Instructions: Click a number panel on the left, then click a video on the right to select.';
            location2 = '/api/play2s_p/?limit=20&ready=1';
        }

        // if (play2_url1.value.length > 0) {
        //     location2 += '&ex1=' + play2_url1.value;
        // }

        // if (play2_url2.value.length > 0) {
        //     location2 += '&ex2=' + play2_url2.value;
        // }
        
        /* 
        if (play2_url3.value.length > 0) {
            location2 += '&ex3=' + encodeURIComponent(String(play2_url3.value));
        }
        if (play2_url4.value.length > 0) {
            location2 += '&ex4=' + encodeURIComponent(String(play2_url4.value));
        }
        */
        
        // 
        plays2.value = await $fetch(location2);  
        
    //
}

/*
function my_drop(event) {
    var data = event.dataTransfer.getData("video_url");
    console.log("data");
    console.log(data);

}

function allowDrop(ev) {
  ev.preventDefault();
}
*/

// async function drop(ev:any, number:any) {

// ev.preventDefault();
// var data = ev.dataTransfer.getData("text");
// console.log('data =' + data);

// // prevent dragging between left panel
// if (data.substring(0,5).localeCompare("https")==0) {
//     return;
// }

// if (data.substring(0,5).localeCompare("http:")==0) {
//     return;
// }

// // Get rid of the selected one
// // Landscape
// if (typeof plays === "object" ) {
//     if (plays != null) {
//         if (plays.constructor == Array) {
//             console.log(plays);

//             var my_plays = plays as any;
//             //console.log(plays.length);
//             var new_arr = [] as any;
//             for (var i = 0; i < my_plays.length; i++) {
//                 if (my_plays[i].url.localeCompare(data) != 0) {
//                     new_arr.push(my_plays[i]);
//                 }
//             }
//             plays = new_arr;
//         }
//     }
// }

// // Portrait
// if (typeof plays2 === "object" ) {
//     if (plays2 != null) {
//         if (plays2.constructor == Array) {
//             console.log(plays2);

//             var my_plays = plays2 as any;
//             //console.log(plays.length);
//             var new_arr = [] as any;
//             for (var i = 0; i < my_plays.length; i++) {
//                 if (my_plays[i].url.localeCompare(data) != 0) {
//                     new_arr.push(my_plays[i]);
//                 }
//             }
//             plays2 = new_arr;
//         }
//     }
// }

// if  (number == 1) {
// if (data.length > 0) {
//     play2_url1.value = data;
//     var play_data = await getPicture(data);
//     var dimension = await getDimension(data);
//     //var preview = await getPreview(data);

//     //console.log('play_data = ' + play_data);
//     // number1.value = '';
//     // hidden1.value = false;

//     if (typeof play_data === "object" ) {
//         // message gets narrowed to string!
//         if (play_data != null) {
//             //alert(source_image1);

//             //if(play_data[0].dimension.localeCompare('P') == 0 ) {
//             if(dimension.localeCompare('P') == 0 ) {

//                 // only Portrait
//                 number1.value = '';
//                 hidden1.value = false;

//                 source_image1.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
//             }
//         }
//     }
//     //plays[0] = '';

// }
// } else if ( number == 2) {
// if (data.length > 0) {
//     play2_url2.value = data;

//     //number2.value = '';
//     var play_data = await getPicture(data);
//     //alert(play_data);
//     //hidden2.value = false;

//     if (typeof play_data === "object" ) {
//         // message gets narrowed to string!
//         if (play_data != null) {
//             //alert(source_image1);
//             if(play_data[0].dimension.localeCompare('L') == 0 ) {
//             // only Landscape
//             number2.value = '';
//             hidden2.value = false;

//             source_image2.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
//             }
//         }
//     }

// }
// } /*else if ( number == 3) {
// if (data.length > 0) {
//     play2_url3.value = data;

//     //number3.value = '';
//     var play_data = await getPicture(data);
//     //alert(play_data);
//     //hidden3.value = false;

//     if (typeof play_data === "object" ) {
//         // message gets narrowed to string!
//         if (play_data != null) {
//             //alert(source_image1);
//             if(play_data[0].dimension.localeCompare('L') == 0 ) {
//                 number3.value = '';
//                 hidden3.value = false;

//                 source_image3.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
//             }
//         }
//     }

// }
// } else if ( number == 4) {
// if (data.length > 0) {
//     play2_url4.value = data;

//     number4.value = '';

//     var play_data = await getPicture(data);

//     //alert(play_data);

//     hidden4.value = false;

//     if (typeof play_data === "object" ) {
//         // message gets narrowed to string!
//         if (play_data != null) {
//             //alert(source_image1);
//             source_image4.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
//         }

//     }

// }
// } */

// var allowed = true;
// if(play2_url1.value.length ==0) {
//     allowed = false;
// }
// if(play2_url2.value.length ==0) {
//     allowed = false;
// }
// /*
// if(play2_url3.value.length ==0) {
//     allowed = false;
// }

// if(play2_url4.value.length ==0) {
//     allowed = false;
// }*/

// if (allowed) {
//     hide_alert.value = true;
// }


// //ev.target.appendChild(document.getElementById(data));
// }

async function setActiveSlot(slotNumber: number) {
    activeSlot.value = slotNumber;
    await radio_landscape_click();
}

function deselectSlot(slot: number) {
    if (slot === 1) {
        play2_url1.value = '';
        number1.value = '1';
        hidden1.value = true;
        source_image1.value = staff;
        selectedVideos.value[1] = null;
        setActiveSlot(1);
    } else if (slot === 2) {
        play2_url2.value = '';
        number2.value = '2';
        hidden2.value = true;
        source_image2.value = staff;
        selectedVideos.value[2] = null;
        setActiveSlot(2);
    } else if (slot === 3) {
        play2_url3.value = '';
        number3.value = '3';
        hidden3.value = true;
        source_image3.value = staff;
        selectedVideos.value[3] = null;
        setActiveSlot(3);
    }
    checkValidation();
}

async function handleVideoClick(play: any, type: string) {
    const data = play.url;
    console.log('Clicked video object:', play); 

    if (!data) return;

    if (selectedVideos.value[1] === data) {
        deselectSlot(1);
        return;
    }
    if (selectedVideos.value[2] === data) {
        deselectSlot(2);
        return;
    }
    if (selectedVideos.value[3] === data) {
        deselectSlot(3);
        return;
    }

    // if (data.substring(0,5).localeCompare("https")==0 || data.substring(0,5).localeCompare("http:")==0) {
    //     return;
    // }

    const dimension = type;
    // const preview = play.preview;

    if (activeSlot.value === 1) {  
        if (dimension === 'L') { 
            play2_url1.value = data;         
            number1.value = '';
            
            var play_data = await $fetch<PlayVideo[]>('/api/play2_watch?p=' + encodeURIComponent(String(data))).catch(() => null);
            if (play_data && play_data[0] && play_data[0].preview) {
                source_image1.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
                hidden1.value = false;
            }
            
            selectedVideos.value[1] = data;
            
            if (!selectedVideos.value[2]) {
                setActiveSlot(2);
            } else if (!selectedVideos.value[3]) {
                setActiveSlot(3);
            }
        } else {
            alert("Slot 1 requires a Landscape video");
        }
    } else if (activeSlot.value === 2) {
        if (dimension === 'L') { 
            play2_url2.value = data;
            number2.value = '';
            
            var play_data = await $fetch<PlayVideo[]>('/api/play2_watch?p=' + encodeURIComponent(String(data))).catch(() => null);
            if (play_data && play_data[0] && play_data[0].preview) {
                source_image2.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
                hidden2.value = false;
            }
            
            selectedVideos.value[2] = data; 
            
            if (!selectedVideos.value[3]) {
                setActiveSlot(3);
            } else if (!selectedVideos.value[1]) {
                setActiveSlot(1);
            }
        } else {
            alert("Slot 2 requires a Landscape video");
        }
    } else if (activeSlot.value === 3) {
        if (dimension === 'L') { 
            play2_url3.value = data;
            number3.value = '';
            
            var play_data = await $fetch<PlayVideo[]>('/api/play2_watch?p=' + encodeURIComponent(String(data))).catch(() => null);
            if (play_data && play_data[0] && play_data[0].preview) {
                source_image3.value = 'https://media05.fuzikapp.com/' + play_data[0].preview;
                hidden3.value = false;
            }
            
            selectedVideos.value[3] = data; 
            
            if (!selectedVideos.value[1]) {
                setActiveSlot(1);
            } else if (!selectedVideos.value[2]) {
                setActiveSlot(2);
            }
        } else {
            alert("Slot 3 requires a Landscape video");
        }
    }

    checkValidation();
}

async function getDimension(url:any) {
    try {
        var request_url = '/api/play2_watch?p=' + encodeURIComponent(String(url));
        const html = await $fetch<string>(request_url)
        
        // Regex to locate the dimension key/value
        const match = html.match(/dimension["']?\s*[:=]\s*["']?([^"'\s,}]*)["']?/)
        
        // Explicitly enforce that the value is a string
        const dimensionValue: string = match?.[1] ?? 'not_found'
        
        return dimensionValue;
    } catch (err) {
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch external data',
        })
    }
}

async function getPicture(url:any) {
    var request_url = '/api/play2_watch?p=' + encodeURIComponent(String(url));

    const data = await fetch(request_url);

    return data;

}

async function reset() {
    var empty = true;

    number1.value = '1';
    hidden1.value = true;
    source_image1.value = staff;
    play2_url1.value = '';
    
    number2.value = '2';
    hidden2.value = true;
    source_image2.value = staff;
    play2_url2.value = '';
    
    number3.value = '3';
    hidden3.value = true;
    source_image3.value = staff;
    play2_url3.value = '';
    
    number4.value = '4';
    hidden4.value = true;
    source_image4.value = staff;
    play2_url4.value = '';
    
    q_input_bar.value = '';
    q_input_bar_placeholder.value = 'Please search again';

    activeSlot.value = 1;
    selectedVideos.value = { 1: null, 2: null , 3: null };
    hide_alert.value = true;
    await radio_landscape_click();
}

function checkValidation(): boolean {
    const isValid = play2_url1.value.length > 0 && play2_url2.value.length > 0 && play2_url3.value.length > 0;
    if (isValid) {
        hide_alert.value = true;
    }
    return isValid;
}

function proceed() {
    const cookie_collab_url1 = useCookie("collab_url1");
    const cookie_collab_url2 = useCookie("collab_url2");
    const cookie_collab_url3 = useCookie("collab_url3");
    const cookie_collab_url4 = useCookie("collab_url4");

    var allowed = checkValidation();
    if(play2_url1.value.length == 0) {
        allowed = false;
    } else {
        cookie_collab_url1.value = play2_url1.value;
    }

    if(play2_url2.value.length == 0) {
        allowed = false;
    } else {
        cookie_collab_url2.value = play2_url2.value;
    }
    
    if(play2_url3.value.length == 0) {
        allowed = false;
    } else {
        cookie_collab_url3.value = play2_url3.value;
    }

    /*
    if(play2_url4.value.length ==0) {
        allowed = false;
    } else {
        cookie_collab_url4.value = play2_url4.value;
    }
    */

    if (allowed) {
        hide_alert.value = true;
        var main_form = <HTMLFormElement>document.getElementById('main_form');
    
        main_form.submit();

    } else {
        hide_alert.value = false;
    }

    return allowed;
}

function makeid(length:any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

async function radio_landscape_click() {
    play_type.value = "Landscape";
    //alert(play_type.value);
    console.log('Landscape');
    portrait_show.value = false;
    landscape_show.value = true;

    await search_play2clip();

    //alert(radio_landscape.value)
}

async function radio_portrait_click() { 
    play_type.value = "Portrait"; 
    console.log('Portrait')
    //alert(play_type.value);
    portrait_show.value = true;
    landscape_show.value = false;

    await search_play2clip();  
    //alert(radio_portrait.value)
}

</script>
