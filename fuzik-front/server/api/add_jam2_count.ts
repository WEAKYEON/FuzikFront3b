export default defineEventHandler((event) => {

    const { j } = getQuery(event);
    const { email } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/add_jam2_count?j=' + j + '&email=' + email;

    const response = fetch(path);
    
    return response;
})