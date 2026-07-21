<template>
    <div>
        <div :hidden="hide_alert" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold">Please select 3 videos</p>
                <p class="text-sm">Drag and drop videos from the right-hand side panel.</p>
                </div>
            </div> 
        </div>
        <form @submit.prevent="proceed" target="_self" action="/collaboration03" id="main_form" ref="myForm">

            <div class="sm:flex sm:flex-row sm:gap-1 md:flex md:flex-row md:gap-2 lg:flex lg:flex-row lg:h-screen lg:gap-2 xl:flex xl:flex-row xl:gap-2 xl:h-screen 2xl:flex 2xl:flex-row 2xl:gap-8 2xl:h-screen" >
                
                <div class="border border-yellow-300 grid grid-cols-2 p-4 sm:h-64 sm:gap-0 sm:w-158 md:h-72 md:gap-0 md:w-118 lg:gap-0 lg:w-158 lg:h-88 xl:gap-0 xl:w-168 xl:h-88 2xl:gap-0 2xl:w-178 2xl:h-96 ">
                    
                    <div class="border border-white sm:w-full sm:h-24 md:w-full md:h-32 lg:w-full lg:h-40 xl:w-full xl:h-40 2xl:w-full 2xl:h-44 flex items-center justify-center" 
                    @dragenter.prevent
                    @dragover.prevent
                    @drop="drop($event, 1)"
                
                    >
                        
                        <div class="dark:text-white text-white m-8 content-center md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
                            {{ number1 }}
                            <img :src="source_image1" :hidden="hidden1" />
                        </div>
                        
                    </div>

                    <div class="border border-white sm:w-full sm:h-24 md:w-full md:h-32 lg:w-full lg:h-40  xl:w-full xl:h-40 2xl:w-full 2xl:h-44 flex items-center justify-center"
                    @dragenter.prevent
                    @dragover.prevent
                    @drop="drop($event, 2)"
                    >
                    <div class="dark:text-white text-white m-8 content-center md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
                            {{ number2 }}
                            <img :src="source_image2" :hidden="hidden2" />
                        </div>
                    </div>

                    <div class= "col-span-2 flex items-center justify-center">
                        <div class="border border-white sm:w-1/2 sm:h-24 md:w-1/2 md:h-32 lg:w-1/2 lg:h-40  xl:w-1/2 xl:h-40 2xl:w-1/2 2xl:h-44 flex items-center justify-center"
                        @dragenter.prevent
                        @dragover.prevent
                        @drop="drop($event, 3)"
                        >
                        <div class="dark:text-white text-white m-8 content-center md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
                                {{ number3 }}
                                <img :src="source_image3" :hidden="hidden3" />
                            </div>
                        </div>

                        <!-- 
                            <div class=" invisible border border-white sm:w-full sm:h-24 md:w-full md:h-32 lg:w-full lg:h-40  xl:w-full xl:h-40 2xl:w-full 2xl:h-44 flex items-center justify-center"
                            @dragenter.prevent
                            @dragover.prevent
                            @drop="drop($event, 4)"
                            >
                                <div class="dark:text-white text-white m-8 content-center md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
                                {{ number4 }}
                                <img :src="source_image4" :hidden="hidden4" />
                                </div>
                            </div>
                        -->
                    </div>
                    <div class="flex items-stretch">
                    <input type="button"
                        class="mx-auto sm:mt-1 sm:w-36 sm:h-full sm:text-sm md:text-md md:w-36 md:h-full h-12 md:text-lg md:mt-1 bg-yellow-300 lg:pt-1 xl:pt-3 2xl:pt-3 lg:h-14 lg:mt-6 xl:mt-8 2xl:h-14 2xl:mt-8 border-2 border-black text-black text-lg font-bold lg:py-2 lg:px-4 xl:py-2 xl:px-4 2xl:py-2 2xl:px-4 rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 hover:bg-slate-300"
                        value="Reset" @click="reset" />
                    </div>
                    <div class="flex items-stretch">
                    <input type="button"
                        class="mx-auto sm:mt-1 sm:w-36 sm:h-full sm:text-sm md:text-md md:w-36 md:h-full h-12 md:text-lg md:mt-1 bg-yellow-300 lg:pt-1 xl:pt-3 2xl:pt-3 lg:h-14 lg:mt-6 xl:mt-8 2xl:h-14 2xl:mt-8 border-2 border-black text-black text-lg font-bold lg:py-2 lg:px-4 xl:py-2 xl:px-4 2xl:py-2 2xl:px-4 rounded-lg transition-all duration-500 hover:2xl:bg-grey-400 hover:bg-slate-300"
                        value="Proceed -->" @click="proceed" />
                    </div>
                    

                </div>
                
                
                <div class="overflow-auto border border-yellow-300 flex flex-col p-4 sm:grow md:grow lg:grow xl:grow 2xl:w-178 h-[calc(100vh-100px)]">
                    <!-- <div class="flex justify-center  w-full">
                        <input id="btn_collaborate" type="button" 
                            class=" bg-yellow-400 text-black px-3 py-0.5 rounded-xl" value="Start collaboration" />
                    </div> -->
                    <div class="py-4 flex flex-row-reverse gap-x-2 h-16">
                        <!--
                        <input id="btn_search" type="submit" @keyup.enter="search_play2clip"
                            class="flex-none bg-yellow-400 text-black px-3 py-0.5 rounded-xl" value="Search" /> -->

                        <input :placeholder="q_input_bar_placeholder" type="text"
                            class="flex-1 sm:w-4/5 outline-none rounded-xl pl-4 pr-8 border-2 border-yellow-400 dark:border-yellow-400 text-base dark:text-black text-black "
                            v-model="q_input_bar"  @keyup="search_play2clip" :name="q_name"/>
                    </div>
                    <div class="text-center">{{ instruction }}</div>
                    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                        <div v-for="p in plays" class="">
                            <CollaborationSelectionCardLandscape :play='p' ></CollaborationSelectionCardLandscape>
                        </div>
                    </div>
                </div>
                
            </div>
        </form>


    </div>
</template>

<script setup lang="ts">

const q_input_bar_placeholder = ref('Song name or artist name');
const q_input_bar = ref('');
const instruction = ref('Instructions: Search and Drag videos to the number panels.');

var init_location = '/api/play2s_l/?limit=10&ready=1'
var plays = await $fetch(init_location);  

var staff = 'https://media04.tetraserver.com/app/music_staff.png';

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

async function search_play2clip() {
    var q_address_bar = q_input_bar.value;
    var location = '/api/play2s_l/?limit=3&ready=1';

    if (q_address_bar.length != 0) {
        location = '/api/play2s_l/?limit=60&ready=1&q=' + q_address_bar;  
        // $fetch is for interaction

        instruction.value = '';

        //console.log('data');
        //console.log(plays);

    } else {
        instruction.value = 'Instructions: Search and Drag videos to the number panels.';
        location = '/api/play2s_l/?limit=20&ready=1';
    }

    if (play2_url1.value.length > 0) {
        location += '&ex1=' + play2_url1.value;
    }

    if (play2_url2.value.length > 0) {
        location += '&ex2=' + play2_url2.value;
    }

    if (play2_url3.value.length > 0) {
        location += '&ex3=' + play2_url3.value;
    }

    if (play2_url4.value.length > 0) {
        location += '&ex4=' + play2_url4.value;
    }

    //console.log('location');
    //console.log(location);

    
    plays = await $fetch(location);  

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

async function drop(ev, number) {

    ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  if (data.substring(0,5).localeCompare("https")==0) {
    return;
  }

  if (data.substring(0,5).localeCompare("http:")==0) {
    return;
  }


    if (typeof plays === "object" ) {
        if (plays != null) {
            if (plays.constructor == Array) {
                console.log(plays);

                var my_plays = plays as any;
                //console.log(plays.length);
                var new_arr = [] as any;
                for (var i = 0; i < my_plays.length; i++) {
                    if (my_plays[i].url.localeCompare(data) != 0) {
                        new_arr.push(my_plays[i]);
                    }
                }
                plays = new_arr;
            }
        }
    }
 
  if  (number == 1) {  
    if (data.length > 0) { 
        play2_url1.value = data; 
        
        number1.value = '';

        var play_data = await getPicture(data);

        //alert(play_data);

        hidden1.value = false;

        if (typeof play_data === "object" ) {
            // message gets narrowed to string!
            if (play_data != null) { 
                //alert(source_image1);
                source_image1.value = 'https://media04.tetraserver.com/' + play_data[0].preview; 
                

            }

        }

        //plays[0] = '';

    } 
  } else if ( number == 2) {
    if (data.length > 0) {  
        play2_url2.value = data;

        number2.value = '';

        var play_data = await getPicture(data);

        //alert(play_data);

        hidden2.value = false;

        if (typeof play_data === "object" ) {
            // message gets narrowed to string!
            if (play_data != null) { 
                //alert(source_image1);
                source_image2.value = 'https://media04.tetraserver.com/' + play_data[0].preview; 
            }

        }

    } 
  } else if ( number == 3) {
    if (data.length > 0) {  
        play2_url3.value = data;

        number3.value = '';

        var play_data = await getPicture(data);

        //alert(play_data);

        hidden3.value = false;

        if (typeof play_data === "object" ) {
            // message gets narrowed to string!
            if (play_data != null) { 
                //alert(source_image1);
                source_image3.value = 'https://media04.tetraserver.com/' + play_data[0].preview; 
            }

        }

    } 
  } /* else if ( number == 4) {
    if (data.length > 0) {  
        play2_url4.value = data;

        number4.value = '';

        var play_data = await getPicture(data);

        //alert(play_data);

        hidden4.value = false;

        if (typeof play_data === "object" ) {
            // message gets narrowed to string!
            if (play_data != null) { 
                //alert(source_image1);
                source_image4.value = 'https://media04.tetraserver.com/' + play_data[0].preview; 
            }

        }

    }
  }*/

    var allowed = true;
    if(play2_url1.value.length ==0) {
        allowed = false;
    }
    if(play2_url2.value.length ==0) {
        allowed = false;
    }
    if(play2_url3.value.length ==0) {
        allowed = false;
    }
    //if(play2_url4.value.length ==0) {
    //    allowed = false;
    //}

    if (allowed) {
        hide_alert.value = true;
    }

                
  //ev.target.appendChild(document.getElementById(data));
}

async function getPicture(url) {
    var request_url = '/api/play2_watch?p=' + url;

    const data = await $fetch(request_url);  
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
}

function proceed() {
    const cookie_collab_url1 = useCookie("collab_url1");
    const cookie_collab_url2 = useCookie("collab_url2");
    const cookie_collab_url3 = useCookie("collab_url3");
    const cookie_collab_url4 = useCookie("collab_url4");

    var allowed = true;
    if(play2_url1.value.length ==0) {
        allowed = false;
    } else {
        cookie_collab_url1.value = play2_url1.value;
    }

    if(play2_url2.value.length ==0) {
        allowed = false;
    } else {
        cookie_collab_url2.value = play2_url2.value;
    }

    if(play2_url3.value.length ==0) {
        allowed = false;
    } else {
        cookie_collab_url3.value = play2_url3.value;
    }

    //if(play2_url4.value.length ==0) {
    //    allowed = false;
    //} else {
    //    cookie_collab_url4.value = play2_url4.value;
    //}

    if (allowed) {
        hide_alert.value = true;
        var main_form = <HTMLFormElement>document.getElementById('main_form');
    
        main_form.submit();

    } else {
        hide_alert.value = false;
    }



    return allowed;
}

function makeid(length) {
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


</script>

<style scoped>
	
</style>