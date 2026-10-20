export default defineEventHandler((event) => {

    const { jam2_url } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/get_jam_like?q=a';

    if (jam2_url==undefined) {

    } else {
        path = path + '&jam2_url=' + encodeURIComponent(String(jam2_url));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + encodeURIComponent(String(user_email));
    }


    const response = fetch(path);
    
    return response;
  }) 