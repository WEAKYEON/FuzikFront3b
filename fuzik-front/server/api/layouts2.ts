export default defineEventHandler((event) => {

    const { l_layout } = getQuery(event);
    const { p_layout } = getQuery(event);    

    //var path = 'https://fuzik03.tetraserver.com/layouts?q=a';
    var path = 'https://engine01.fuzikapp.com/layouts2?q=a';
    
    if (l_layout==undefined) {

    } else {
        path = path + '&l_layout=' + l_layout;
    }

    if (p_layout==undefined) {

    } else {
        path = path + '&p_layout=' + p_layout;
    }

    const response = fetch(path);
    return response;

}) 