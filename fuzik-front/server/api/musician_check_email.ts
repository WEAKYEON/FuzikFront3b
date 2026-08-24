export default defineEventHandler((event) => {

    const { email } = getQuery(event);
  

    var path = "https://fuzik03.tetraserver.com/musician_check_email?email=" +
    email;
    
    const response = fetch(path);
    
    return response;
}) 