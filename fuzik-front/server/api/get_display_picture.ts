export default defineEventHandler((event) => {

    const { musician_name } = getQuery(event);
    
    
    var path = useRuntimeConfig(event).engineBaseUrl + '/get_display_picture';

    if (musician_name==undefined) {

    } else {
        path = path + '?musician_name=' + encodeURIComponent(String(musician_name));
    }

    const response = fetch(path);
    
    return response;
  }) 