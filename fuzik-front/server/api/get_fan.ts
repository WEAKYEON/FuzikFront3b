export default defineEventHandler((event) => {

    const { musician_email } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/get_fan?q=a';

    if (musician_email==undefined) {

    } else {
        path = path + '&musician_email=' + encodeURIComponent(String(musician_email));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + encodeURIComponent(String(user_email));
    }


    const response = fetch(path);
    
    return response;
  }) 