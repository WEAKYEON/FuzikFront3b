export default defineEventHandler((event) => {

    const { video_title } = getQuery(event);
    const { description } = getQuery(event);
    const { music_title } = getQuery(event);
    const { video_location } = getQuery(event);
    const { original } = getQuery(event);
    const { instrument } = getQuery(event);
    const { musician2_email } = getQuery(event);
    const { dimension } = getQuery(event);
    const { width } = getQuery(event);
    const { height } = getQuery(event);
    const { accept } = getQuery(event);
    const { public_domain } = getQuery(event);



    var path = useRuntimeConfig(event).engineBaseUrl + '/upload_playvideo2?video_title=' + encodeURIComponent(String(video_title)) +
    "&description=" + encodeURIComponent(String(description)) +
    "&music_title=" + encodeURIComponent(String(music_title)) +
    "&video_location=" + encodeURIComponent(String(video_location)) +
    "&original=" + encodeURIComponent(String(original)) +
    "&instrument=" + encodeURIComponent(String(instrument)) +
    "&musician2_email=" + encodeURIComponent(String(musician2_email)) +
    "&dimension=" + encodeURIComponent(String(dimension)) +
    "&width=" + encodeURIComponent(String(width)) +
    "&height=" + encodeURIComponent(String(height)) +
    "&accept=" + encodeURIComponent(String(accept)) +
    "&public_domain=" + encodeURIComponent(String(public_domain));


    const response = fetch(path);
    
    return response;
}) 
