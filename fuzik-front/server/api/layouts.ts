export default defineEventHandler((event) => {

    const { p_dimension } = getQuery(event);

    var path = 'https://engine01.fuzikapp.com/layouts?q=a';

    if (p_dimension==undefined) {

    } else {
        path = path + '&p_dimension=' + p_dimension;
    }

    const response = fetch(path);
    return response;

}) 