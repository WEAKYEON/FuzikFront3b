export default defineEventHandler((event) => {

    var url = getRequestURL(event);
    

    var path = 'https://media04.tetraserver.com/app/music_staff.png';

    const response = fetch(path);
    
    return response;
  })