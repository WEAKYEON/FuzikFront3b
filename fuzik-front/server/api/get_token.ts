export default defineEventHandler((event) => {

    const { realm_id } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/check_balance?q=a';

    if (realm_id==undefined) {

    } else {
        path = path + '&realm_id=' + encodeURIComponent(String(realm_id));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&email_account=' + encodeURIComponent(String(user_email));
    }

    const response = $fetch(path);
    //console.log("response: " + response);
    return response;
  });