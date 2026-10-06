export default defineEventHandler((event) => {

    const { play2_url } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/get_like?q=a';

    if (play2_url==undefined) {

    } else {
        path = path + '&play2_url=' + encodeURIComponent(String(play2_url));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + encodeURIComponent(String(user_email));
    }

    const response = fetch(path);
    
    return response;
  }) 