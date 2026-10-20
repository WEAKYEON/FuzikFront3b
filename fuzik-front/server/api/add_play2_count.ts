export default defineEventHandler((event) => {

    const { p } = getQuery(event);
    const { email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/add_play2_count?p=' + encodeURIComponent(String(p)) + '&email=' + encodeURIComponent(String(email));

    const response = fetch(path);
    
    return response;
})