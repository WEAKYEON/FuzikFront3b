export default defineEventHandler((event) => {

    const { musician_email } = getQuery(event);
    const { user_email } = getQuery(event);
    const { fan } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/add_fan?q=a';

    if (musician_email==undefined) {

    } else {
        path = path + '&musician_email=' + musician_email;
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + user_email;
    }

     if (fan==undefined) {

    } else {
        path = path + '&fan=' + fan;
    }


    const response = fetch(path);
    
    return response;
  }) 