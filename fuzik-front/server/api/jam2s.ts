export default defineEventHandler((event) => {

    const { q } = getQuery(event);
    const { musician } = getQuery(event);
    
    var path = useRuntimeConfig(event).engineBaseUrl + '/jam2s?b=a';

    if (q==undefined) {

    } else {
        path = path + '&q=' + encodeURIComponent(String(q));
    }

    if (musician==undefined) {

    } else {
        path = path + '&musician=' + encodeURIComponent(String(musician));
    }
    const response = fetch(path);
    
    return response;
  }) 