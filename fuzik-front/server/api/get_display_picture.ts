export default defineEventHandler((event) => {

    const { musician_name } = getQuery(event);
    
    
    var path = 'https://engine01.fuzikapp.com/get_display_picture';

    if (musician_name==undefined) {

    } else {
        path = path + '?musician_name=' + musician_name;
    }

    const response = fetch(path);
    
    return response;
  }) 