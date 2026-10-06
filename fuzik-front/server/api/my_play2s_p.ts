export default defineEventHandler((event) => {

    const { musician2_email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/my_play2s_p/';

    if (musician2_email == undefined) {

    } else {
      path = path + '?musician2_email=' + encodeURIComponent(String(musician2_email))
    }

    const response = fetch(path);

    return response;
  })
