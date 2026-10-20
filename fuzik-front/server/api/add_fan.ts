export default defineEventHandler((event) => {

    const { musician_email } = getQuery(event);
    const { user_email } = getQuery(event);
    const { fan } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/add_fan?q=a';

    if (musician_email==undefined) {

    } else {
        path = path + '&musician_email=' + encodeURIComponent(String(musician_email));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + encodeURIComponent(String(user_email));
    }

     if (fan==undefined) {

    } else {
        path = path + '&fan=' + encodeURIComponent(String(fan));
    }


    const response = fetch(path);
    
    return response;
  }) 