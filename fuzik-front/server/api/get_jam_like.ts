export default defineEventHandler((event) => {

    const { jam2_url } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/get_jam_like?q=a';

    if (jam2_url==undefined) {

    } else {
        path = path + '&jam2_url=' + jam2_url;
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + user_email;
    }


    const response = fetch(path);
    
    return response;
  }) 