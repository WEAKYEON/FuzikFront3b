export default defineEventHandler((event) => {

    const { display_name } = getQuery(event);
    const { email } = getQuery(event);
    const { first_name } = getQuery(event);
    const { last_name } = getQuery(event);
    const { genre } = getQuery(event);
    const { instrument } = getQuery(event);
    const { tel } = getQuery(event);

    var path = "https://engine01.fuzikapp.com/create_musician2?display_name=" +
    display_name + 
    "&email=" + email +
    "&first_name=" + first_name +
    "&last_name=" + last_name + 
    "&genre=" + genre +
    "&instrument=" + instrument +
    "&tel=" + tel;

    const response = $fetch(path);
    
    return response;
}) 