export default defineEventHandler((event) => {

    const { email } = getQuery(event);
    const { field } = getQuery(event);
    const { new_value } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/modify_musician2?email=' + email + '&field=' + field + '&new_value=' + new_value;

    const response = fetch(path);
    
    return response;
  }) 