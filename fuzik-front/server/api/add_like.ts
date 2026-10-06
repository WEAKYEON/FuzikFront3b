export default defineEventHandler((event) => {

    const { play2_url } = getQuery(event);
    const { user_email } = getQuery(event);
    const { like } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/add_like?q=a';

    if (play2_url==undefined) {

    } else {
        path = path + '&play2_url=' + encodeURIComponent(String(play2_url));
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + encodeURIComponent(String(user_email));
    }

    if (like==undefined) {

    } else {
        path = path + '&like=' + encodeURIComponent(String(like));
    }

    const response = fetch(path);
    
    return response;
  }) 