export default defineEventHandler((event) => {

    const { j } = getQuery(event);
    
    
    var path = useRuntimeConfig(event).engineBaseUrl + '/get_jam2_count';

    if (j==undefined) {

    } else {
        path = path + '?j=' + encodeURIComponent(String(j));
    }

    const response = fetch(path);
    
    return response;
  }) 