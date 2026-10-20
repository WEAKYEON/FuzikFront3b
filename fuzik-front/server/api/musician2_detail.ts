export default defineEventHandler((event) => {

    const { email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/jam2s';

    if (email == undefined) {

    } else {
      path = useRuntimeConfig(event).engineBaseUrl + '/musician2_detail?email=' + encodeURIComponent(String(email));
    }
    
    const response = fetch(path);    
    return response;
  }) 