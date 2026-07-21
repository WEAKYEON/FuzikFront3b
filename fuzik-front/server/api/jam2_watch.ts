export default defineEventHandler((event) => {

    const { j } = getQuery(event);

    var path = 'https://fuzik03.tetraserver.com/jam2_watch?j=' + j;

    const response = fetch(path);
    
    return response;
})