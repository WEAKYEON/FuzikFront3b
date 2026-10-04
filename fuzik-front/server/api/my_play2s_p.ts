export default defineEventHandler((event) => {

    const { musician2_email } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/my_play2s_p/';

    if (musician2_email == undefined) {

    } else {
      path = path + '?musician2_email=' + musician2_email
    }

    const response = fetch(path);

    return response;
  })
