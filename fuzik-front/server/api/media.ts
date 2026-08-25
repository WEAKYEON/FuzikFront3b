export default defineEventHandler((event) => {

    var url = getRequestURL(event);
    

    var path = 'https://media05.fuzikapp.com/app/music_staff.png';

    const response = fetch(path);
    
    return response;
  })