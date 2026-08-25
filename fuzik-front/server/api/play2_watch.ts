export default defineEventHandler((event) => {

    const { p } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/play2_watch?p=' + p;

    const response = fetch(path);
    
    return response;
})