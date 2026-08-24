export default defineEventHandler((event) => {

    const { p } = getQuery(event);
    const { email } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/add_play2_count?p=' + p + '&email=' + email;

    const response = fetch(path);
    
    return response;
})