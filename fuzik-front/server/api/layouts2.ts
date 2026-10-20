export default defineEventHandler((event) => {

    const { l_layout } = getQuery(event);
    const { p_layout } = getQuery(event);    

    //var path = useRuntimeConfig(event).engineBaseUrl + '/layouts?q=a';
    var path = useRuntimeConfig(event).engineBaseUrl + '/layouts2?q=a';
    
    if (l_layout==undefined) {

    } else {
        path = path + '&l_layout=' + encodeURIComponent(String(l_layout));
    }

    if (p_layout==undefined) {

    } else {
        path = path + '&p_layout=' + encodeURIComponent(String(p_layout));
    }

    const response = fetch(path);
    return response;

}) 