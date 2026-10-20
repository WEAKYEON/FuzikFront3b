export default defineEventHandler((event) => {

    const { email } = getQuery(event);
  

    var path = useRuntimeConfig(event).engineBaseUrl + '/musician_check_email?email=' + encodeURIComponent(String(email));
    
    const response = fetch(path);
    
    return response;
}) 