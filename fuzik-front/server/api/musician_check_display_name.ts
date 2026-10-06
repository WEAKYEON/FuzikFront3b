export default defineEventHandler((event) => {

    const { display_name } = getQuery(event);
  

    var path = useRuntimeConfig(event).engineBaseUrl + '/musician_check_display_name?display_name=' + encodeURIComponent(String(display_name));
    
    const response = fetch(path);
    
    return response;
}) 