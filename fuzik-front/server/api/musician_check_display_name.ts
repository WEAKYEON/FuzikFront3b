export default defineEventHandler((event) => {

    const { display_name } = getQuery(event);
  

    var path = "https://fuzik03.tetraserver.com/musician_check_display_name?display_name=" +
    display_name;
    
    const response = fetch(path);
    
    return response;
}) 