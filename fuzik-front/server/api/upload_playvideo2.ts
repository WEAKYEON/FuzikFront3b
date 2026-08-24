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



    var path = "https://fuzik03.tetraserver.com/upload_playvideo2?video_title=" +
    video_title + 
    "&description=" + description +
    "&music_title=" + music_title +
    "&video_location=" + video_location + 
    "&original=" + original +
    "&instrument=" + instrument +
    "&musician2_email=" + musician2_email +
    "&dimension=" + dimension +
    "&width=" + width +
    "&height=" + height +
    "&accept=" + accept +
    "&public_domain=" + public_domain;


    const response = fetch(path);
    
    return response;
}) 
