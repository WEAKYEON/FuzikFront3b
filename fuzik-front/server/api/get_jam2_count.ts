export default defineEventHandler((event) => {

    const { j } = getQuery(event);
    
    
    var path = 'https://engine01.fuzikapp.com/get_jam2_count';

    if (j==undefined) {

    } else {
        path = path + '?j=' + j;
    }

    const response = fetch(path);
    
    return response;
  }) 