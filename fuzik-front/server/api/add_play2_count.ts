export default defineEventHandler((event) => {

    const { p } = getQuery(event);
    const { email } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/add_play2_count?p=' + p + '&email=' + email;

    const response = fetch(path);
    
    return response;
})