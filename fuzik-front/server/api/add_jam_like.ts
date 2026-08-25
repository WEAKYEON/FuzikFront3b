export default defineEventHandler((event) => {

    const { jam2_url } = getQuery(event);
    const { like_value } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/add_fan?q=a';

    if (like_value==undefined) {

    } else {
        path = path + '&like_value=' + like_value;
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + user_email;
    }

    if (jam2_url==undefined) {

    } else {
        path = path + '&jam2_url=' + jam2_url;
    }



    const response = fetch(path);
    
    return response;
  }) 