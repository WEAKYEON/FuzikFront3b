export default defineEventHandler((event) => {

    const { email } = getQuery(event);
  

    var path = "https://engine01.fuzikapp.com/musician_check_email?email=" +
    email;
    
    const response = fetch(path);
    
    return response;
}) 