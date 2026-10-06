export default defineEventHandler((event) => {

    const { p_dimension } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/layouts?q=a';

    if (p_dimension==undefined) {

    } else {
        path = path + '&p_dimension=' + encodeURIComponent(String(p_dimension));
    }

    const response = fetch(path);
    return response;

}) 