export default defineEventHandler((event) => {

    const { j } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/jam2_watch?j=' + encodeURIComponent(String(j));

    const response = fetch(path);
    
    return response;
})