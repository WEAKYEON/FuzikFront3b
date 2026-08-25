export default defineEventHandler((event) => {

    const { j } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/jam2_watch?j=' + j;

    const response = fetch(path);
    
    return response;
})