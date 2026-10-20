export default defineEventHandler((event) => {

    const { p } = getQuery(event);
    
    
    var path = useRuntimeConfig(event).engineBaseUrl + '/get_play2_count';

    if (p==undefined) {

    } else {
        path = path + '?p=' + encodeURIComponent(String(p));
    }

    const response = fetch(path);
    
    return response;
  }) 