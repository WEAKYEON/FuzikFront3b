export default defineEventHandler((event) => {

    const { musician_email } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/get_fan?q=a';

    if (musician_email==undefined) {

    } else {
        path = path + '&musician_email=' + musician_email;
    }

    if (user_email==undefined) {

    } else {
        path = path + '&user_email=' + user_email;
    }


    const response = fetch(path);
    
    return response;
  }) 