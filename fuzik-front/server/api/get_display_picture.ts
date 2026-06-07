export default defineEventHandler((event) => {

    const { musician_name } = getQuery(event);
    
    
    var path = 'https://fuzik03.tetraserver.com/get_display_picture';

    if (musician_name==undefined) {

    } else {
        path = path + '?musician_name=' + musician_name;
    }

    const response = fetch(path);
    
    return response;
  }) 