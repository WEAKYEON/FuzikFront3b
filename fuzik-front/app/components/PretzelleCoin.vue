<template>
    <div class="ms-3 flex flex-row justify-center items-center space-x-2 text-black bg-blue-300 px-4 lg:px-4 py-1 rounded-xl cursor-pointer transition-all hover:bg-yellow/90" @click="navigateTo('/webapp/wallet')">
        PR {{premium_coin}}/&#x221E;
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    email: {type: String, required: true}
});

var premium_coin_realm_id = 'REALM00000002';

const premium_coin = ref('waiting'); //await get_coin(realm_id, email);
//premium_coin.value = await get_token(premium_coin_realm_id, props.email);

let intervalId:any;
onMounted(async () => {
    //premium_coin.value = await get_token(premium_coin_realm_id, props.email);
    
    intervalId = setInterval(async () => {
        //count.value++; // Access and update the value of the ref
        //fuzik_token.value = count.value.toString();
        premium_coin.value = await get_token(premium_coin_realm_id, props.email);

    }, 10000); // Update every 10000 milliseconds (10 second) - 9 minutes
});

onUnmounted(() => {
    clearInterval(intervalId);
});

async function get_token(realm_id:string, user_email:string) {

  var uri = '/api/get_token?realm_id=' + encodeURIComponent(String(realm_id)) + '&user_email=' + encodeURIComponent(String(user_email));
  //console.log("uri: " + uri);

  var output;
  var data_token: any;

  try {
    /*
    //var raw_value = JSON.parse(JSON.stringify(account_data.value))._rawValue[0];
    //console.log("raw_value: " + raw_value);
    //output = raw_value.balance;
    //console.log("output: " + output);
    const { data: get_token, pending, error, refresh } = await useFetch(uri,  {
    //server: false,
    
    }) 

    //const response2 = await fetch(url_count);
    data_token = get_token;

    //console.log(data_token);
    //console.log(data_token._rawValue.balance);
    //var raw_value = JSON.parse(JSON.stringify(data_token))._rawValue[0];
    //raw_value

    //console.log(data_view_count)
    //console.log('res2' + raw_value.view_count)
    output = data_token._rawValue.balance;
    */
    const response = await fetch(uri);
    //console.log("account_data: " + account_data.value);
    //console.log(output);
    
    const token = await response.json();
    output = '' + token.balance;

    } catch (error) {
        output = 'Error';
    }
    return output;
}

</script>

<style scoped>

</style>