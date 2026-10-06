<template>
  <div>
    <div class="min-h-screen py-20" style="background-image: linear-gradient(115deg, #FDFD33, #000000)">
      <div class="container mx-auto">
        <div class="absolute left-5 top-5 h-24 w-24"><NuxtLink to="/"><img :src="logo2" alt="Fuzik Logo" /></NuxtLink></div>
        <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center " style="background-image: url('images/guitar01.jpg');">
            <h1 class="text-white text-3xl mb-3 text-center">Fuzik Collaboration: <br />Welcome new musician</h1>
            <div>
              <p class="text-white">Play and Jam with musicians around the globe. Fuzik collaboration is a platform to mix and share your music performance.<br /><br />You only need 3 easy steps:<br />1. Upload<br />2. Mix<br />3. Get the jamming video and share in your own channel.<br /><a href="#" class="text-yellow-500 font-semibold">Learn more</a></p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2  class="text-3xl mb-4 text-black">Register</h2>
            <p class="mb-4 text-black">
              Create your account. It’s free and only take a minute
            </p>
            <form id="main_form"  action="register_confirm" method="post"
              @submit.prevent="signUp" >
              
              <div class="grid grid-cols-2 gap-5 ">
                <input type="text" v-model="first_name" placeholder="Firstname" class="border border-gray-400 py-1 px-2 txtinput">
                <input type="text" v-model="last_name" placeholder="Lastname" class="border border-gray-400 py-1 px-2 txtinput">
              </div>
              <div class="tooltip mt-5">
                <span class="tooltiptext">Display name cannot be changed later.</span>
                <input type="text" v-model="display_name" placeholder="Display name" @change="check_input" class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>

              <div class="mt-5">  
                <input type="text" v-model="tel" placeholder="Telephone" @change="check_input"  class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>

              <div class="tooltip mt-5">
                <span class="tooltiptext">Email cannot be changed later.</span>
                <input type="text" v-model="email" placeholder="Email" @change="check_input" class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>
              <div class="mt-5">
                <input type="password" v-model="password" placeholder="Password" @change="check_input"  class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>
              <div class="mt-5">
                <input type="password" v-model="password_confirm" placeholder="Confirm Password" @change="check_input"  class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>
              <div class="mt-5">
                <input type="text"  v-model="genre"  placeholder="Music genre" @change="check_input"  class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>
              <div class="mt-5">
                <input type="text"  v-model="instrument"  placeholder="Musical instruments" @change="check_input"  class="border border-gray-400 py-1 px-2 w-full txtinput">
              </div>
              <div class="mt-5">                
                <input type="checkbox" v-model="accept_agreement" @change="check_input" class="form-checkbox ">
                <span class="text-black">
                  I accept the <a href="#" class="text-yellow-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-yellow-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div class="mt-5">
              
                <button  id="signup_button" disabled="true" class="w-full bg-gray-500 py-3 text-center text-white">Register Now</button>
              </div>
              <div class="mt-5">  
              
                <p class="text-black text-center">Already has an account? <NuxtLink to="/webapp/login" >Login</NuxtLink></p>
              </div>
              <div class="mt-5 border-0 h-24">  
                <p class="text-red-300">{{ errorMsg }}</p>
                <p class="text-black" id="success_message">{{ successMsg }}</p>  

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

//import { createClient } from '@supabase/supabase-js'
const email = ref('');
const password = ref('');
const password_confirm = ref('');
const accept_agreement = ref('');
const display_name = ref('');
const tel = ref('');
//const signup_button = ref('');

//var test_value = ref(false);
const first_name = ref('');
const last_name = ref('');
const genre = ref('');
const instrument = ref('');

const errorMsg = ref('');
const successMsg = ref('');

const logo2 = ref('https://media05.fuzikapp.com/app/fuzik_logo04_01.png')
    
const client = useSupabaseClient();

const requestURL = useRequestURL();

async function signUp() {
  //alert(isAlphanumeric(first_name.value));

  //console.log('Email: ' + email.value);

  if(await check_input()) {
    try {

      const { data,  error } = await client.auth.signUp ({
        email: email.value,
        password: password.value,
        options: {
          emailRedirectTo: new URL('/webapp/login_success', requestURL.origin).href
        }

      });
      if (error) {
        errorMsg.value = error.message;
        alert(error.message);
        throw error;
      }
      //alert(data.user?.email);
      
      errorMsg.value ="";
      successMsg.value = "Your confirmation email has been sent. Please check your inbox, and if you do not see it, look in your Junk or Spam folder.";
      //alert("Check your email to confirm your account.");
      var main_form = <HTMLFormElement>document.getElementById('main_form');
      if (main_form != null) {
        var url = "/api/create_musician2?display_name=" + encodeURIComponent(String(display_name.value.trim())) +
        "&email=" + encodeURIComponent(String(email.value.trim())) +
        "&first_name=" + encodeURIComponent(String(first_name.value.trim())) +
        "&last_name=" + encodeURIComponent(String(last_name.value.trim())) +
        "&genre=" + encodeURIComponent(String(genre.value.trim())) +
        "&instrument=" + encodeURIComponent(String(instrument.value.trim())) +
        "&tel=" + encodeURIComponent(String(tel.value.trim()));

        const response = await $fetch(url);
        //const movies = await response.json();
        //console.log(movies);

        await navigateTo('/webapp/register_confirm');
      }
        
    } catch ( error ) {
      errorMsg.value = error instanceof Error ? error.message : 'Unable to complete registration. Please try again.';
      successMsg.value = '';
      //console.log(errorMsg);
    }
  }
}

async function check_input() {
  var allowed = true;

  // Fist name
  if (first_name.value.length == 0) {
      errorMsg.value = "Firstname cannot be blank.";  
      allowed = false;
  } /* else if (!isAlphanumeric(first_name.value)) {
        errorMsg.value = "Only alphabet and number are allowed in first name's field.";  
        allowed = false;
  }*/

  // Last name
  if (allowed) {
    if (last_name.value.length == 0) {    
      errorMsg.value = "Lastname cannot be blank.";
      allowed = false;
    }/* else if (!isAlphanumeric(last_name.value)) {    
      errorMsg.value = "Only alphabet and number are allowed in last name's field.";
      allowed = false;
    }*/
  }
  // Display name
  if (allowed) {
    if (display_name.value.length == 0) {
      errorMsg.value = "Display name cannot be blank.";
      allowed = false;
    } /*else if (!isAlphanumeric(display_name.value)) {
      errorMsg.value = "Only alphabet and number are allowed in display name's field.";
      allowed = false;
    } */else {
      allowed = await check_display_name();
    }
  }
  // Telephone
  if (allowed) {
    
    
  }
  // Email
  if (allowed) {
    if (email.value.length == 0) {    
        errorMsg.value = "Email cannot be blank.";
        allowed = false;
      } else if (!validateEmail(email.value)) {
        errorMsg.value = "Please input valid email address.";
        allowed = false;
      } else if (hasCapitalLetterRegExpTest(email.value)) {
        errorMsg.value = "Email address cannot contain Capital Letter.";
        allowed = false;
      } else {
        allowed = await check_email();
      }
  }

  // Password
  if (allowed) {

    if (password.value.length == 0) {
      errorMsg.value = "Password cannot be blank.";
      allowed = false;
    } else if (password.value.localeCompare(password_confirm.value) != 0) {
      errorMsg.value = "Password and Confirm password does not match!!";
      
      (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = true;
      (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";
      allowed = false;
    } else {
      errorMsg.value = "";
      if (accept_agreement.value) {
        //console.log('Agree');
        (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = false;
        (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-yellow-500 py-3 text-center text-black";
      } else {
        //console.log('Not Agree');
        (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = true;
        (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";
      }
    }
  }
  // Genre
  if (allowed) {
    if (genre.value.length == 0) {
      errorMsg.value = "Music genre cannot be blank, you can put 'General'.";
      allowed = false;   
    } //else if (!isAlphanumeric2(genre.value)) {
      //errorMsg.value = "Only alphabet and number are allowed in genre's field.";
      //allowed = false;   
    //}
  }
  // Instrument
  if (allowed) {
    if (instrument.value.length == 0) {  
      errorMsg.value = "Musical instruments cannot be blank, you can put 'Vocal'.";
      allowed = false;
    }/*else if (!isAlphanumeric2(instrument.value)) {  
      errorMsg.value = "Only alphabet and number are allowed in instrument's field.";
      allowed = false;
    }*/
  }

/*
    if (allowed) {
      if (first_name.value.length == 0) {
        errorMsg.value = "Firstname cannot be blank.";  
        allowed = false;
      } else if (last_name.value.length == 0) {    
        errorMsg.value = "Lastname cannot be blank.";
        allowed = false;
      } else if (display_name.value.length == 0) {
        errorMsg.value = "Display name cannot be blank.";
        allowed = false;
      } else if (email.value.length == 0) {    
        errorMsg.value = "Email cannot be blank.";
        allowed = false;
      } else if (genre.value.length == 0) {
        errorMsg.value = "Music genre cannot be blank, you can put'General'.";
        allowed = false;   
      } else if (instrument.value.length == 0) {  
        errorMsg.value = "Musical instruments cannot be blank, you can put 'Vocal'.";
        allowed = false;
      } else {
        allowed = true;
      }

      if (!isAlphanumeric(first_name.value)) {
        errorMsg.value = "Only alphabet and number are allowed in first name's field.";  
        allowed = false;
      } else if (!isAlphanumeric(last_name.value)) {    
        errorMsg.value = "Only alphabet and number are allowed in last name's field.";
        allowed = false;
      } else if (!isAlphanumeric(display_name.value)) {
        errorMsg.value = "Only alphabet and number are allowed in display name's field.";
        allowed = false;
      } else if (!isAlphanumeric(genre.value)) {
        errorMsg.value = "Only alphabet and number are allowed in genre's field.";
        allowed = false;   
      } else if (!isAlphanumeric(instrument.value)) {  
        errorMsg.value = "Only alphabet and number are allowed in instrument's field.";
        allowed = false;
      } else {
        allowed = true;
      }
    }
    */
    return allowed;
}
/*
async function check_password() {
  //console.log(display_name.value);
  //console.log('Len:' + first_name.value.length);
 var allowed = await check_input();

  if (allowed) {
    if (password.value.localeCompare(password_confirm.value) != 0) {
      errorMsg.value = "Password and Confirm password does not match!!";
      
      (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = true;
      (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";
      allowed = false;
    } else {
      errorMsg.value = "";
      if (accept_agreement.value) {
        //console.log('Agree');
        (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = false;
        (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-yellow-500 py-3 text-center text-black";

      } else {
        //console.log('Not Agree');
        (document.getElementById('signup_button') as HTMLButtonElement)!.disabled = true;
        (document.getElementById('signup_button') as HTMLButtonElement)!.className="w-full bg-gray-500 py-3 text-center text-white";

      }
    }
  }
  
}
*/

function isAlphanumeric(str:string) {
  return /^[a-zA-Z0-9-_]+$/.test(str);
}

function isAlphanumeric2(str:string) {
  return /^[a-zA-Z0-9\-\,\s_]+$/.test(str);
}

async function check_display_name() {
  var allowed = false;

  if (display_name.value.length == 0) {
    return false;
  }
  //check display name
  var url_check_display_name = "/api/musician_check_display_name?display_name=" + encodeURIComponent(String(display_name.value));
  var respone_display_name = await fetch(url_check_display_name);
  const result_display_name = await respone_display_name.json();


  //type Result1 = {
  //  result: string;
  //  email: string;

  //}
  //let result_1 = JSON.parse(result_display_name);
  var result1 = "none";
  //console.log(result_display_name);
  if (result_display_name.length > 0) {
    result1 = result_display_name[0].result;
  }

  if (result1.localeCompare("Found")==0) {
    errorMsg.value = "Display name: " + display_name.value + " already exists.";
  } else if (result1.localeCompare("Not allowed!!")==0) {
    errorMsg.value = "Please change the display name.";
    //display_name.value = "";
  } else {
    errorMsg.value = ""
    allowed = true;
  }
  return allowed;

}

async function check_email() {
  var allowed = false;
  //check display name
  var url_check = "/api/musician_check_email?email=" + encodeURIComponent(String(email.value));
  var respone = await fetch(url_check);
  const result = await respone.json();

  var result1 = "none";
  //console.log(result);
  if (result.length > 0) {
    result1 = result[0].result;
  }

  if (result1.localeCompare("Found")==0) {
    errorMsg.value = "Email: " + email.value + " already exists.";
  } else {
    errorMsg.value = ""
    allowed = true;
  }
  return allowed;

}

function validateEmail(email:string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
  // todo, validate email and trim
}

function hasCapitalLetterRegExpTest(str:string) {
  return /[A-Z]/.test(str);
}


definePageMeta({
    layout: "empty"
});

</script>

<style scoped>
/* Tooltip container */
.tooltip {
    position: relative; 
    /* display: inline-block; */
    /*border-bottom: 1px dotted black; */ /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 260px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 30%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 1s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}



</style>
