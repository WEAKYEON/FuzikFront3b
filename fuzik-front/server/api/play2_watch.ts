export default defineEventHandler((event) => {

    const { p } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/play2_watch?p=' + p;

    const response = fetch(path);
    
    return response;
})