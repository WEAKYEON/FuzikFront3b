export default defineEventHandler((event) => {

    const { email } = getQuery(event);

    var path = "https://engine01.fuzikapp.com/jam2s";

    if (email == undefined) {

    } else {
      path = 'https://engine01.fuzikapp.com/musician2_detail?email=' + email;
    }
    
    const response = fetch(path);    
    return response;
  }) 