export default defineEventHandler((event) => {

    const { p } = getQuery(event);
    
    
    var path = 'https://fuzik03.tetraserver.com/get_play2_count';

    if (p==undefined) {

    } else {
        path = path + '?p=' + p;
    }

    const response = fetch(path);
    
    return response;
  }) 