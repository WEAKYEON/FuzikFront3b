export default defineEventHandler((event) => {

    const { email } = getQuery(event);

    var path = "https://fuzik03.tetraserver.com/jam2s";

    if (email == undefined) {

    } else {
      path = 'https://fuzik03.tetraserver.com/musician2_detail?email=' + email;
    }
    
    const response = fetch(path);    
    return response;
  }) 