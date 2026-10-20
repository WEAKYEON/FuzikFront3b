export default defineEventHandler((event) => {

    const { p } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/play2_watch?p=' + encodeURIComponent(String(p));

    const response = fetch(path);
    
    return response;
})