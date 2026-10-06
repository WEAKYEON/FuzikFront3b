export default defineEventHandler((event) => {

    const { j } = getQuery(event);
    const { email } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/add_jam2_count?j=' + encodeURIComponent(String(j)) + '&email=' + encodeURIComponent(String(email));

    const response = fetch(path);
    
    return response;
})