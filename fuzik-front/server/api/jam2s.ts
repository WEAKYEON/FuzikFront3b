export default defineEventHandler((event) => {

    const { q } = getQuery(event);
    const { musician } = getQuery(event);
    
    var path = 'https://engine01.fuzikapp.com/jam2s?b=a';

    if (q==undefined) {

    } else {
        path = path + '&q=' + q;
    }

    if (musician==undefined) {

    } else {
        path = path + '&musician=' + musician;
    }
    const response = fetch(path);
    
    return response;
  }) 