export default defineEventHandler((event) => {

    const { display_name } = getQuery(event);
    const { email } = getQuery(event);
    const { first_name } = getQuery(event);
    const { last_name } = getQuery(event);
    const { genre } = getQuery(event);
    const { instrument } = getQuery(event);
    const { tel } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/create_musician2?display_name=' + encodeURIComponent(String(display_name)) +
    "&email=" + encodeURIComponent(String(email)) +
    "&first_name=" + encodeURIComponent(String(first_name)) +
    "&last_name=" + encodeURIComponent(String(last_name)) +
    "&genre=" + encodeURIComponent(String(genre)) +
    "&instrument=" + encodeURIComponent(String(instrument)) +
    "&tel=" + encodeURIComponent(String(tel));

    const response = $fetch(path);
    
    return response;
}) 