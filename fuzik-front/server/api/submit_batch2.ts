export default defineEventHandler((event) => {

    const { email } = getQuery(event);
    const { layout_code } = getQuery(event);
    const { clip1 } = getQuery(event);
    const { clip2 } = getQuery(event);
    const { clip3 } = getQuery(event);
    const { clip4 } = getQuery(event);
    const { clips_num } = getQuery(event);
    const { code01 } = getQuery(event);
    const { code02 } = getQuery(event);
    const { code03 } = getQuery(event);
    const { code04 } = getQuery(event);
    const { bar01 } = getQuery(event);
    const { bar02 } = getQuery(event);
    const { bar03 } = getQuery(event);
    const { bar04 } = getQuery(event);
    const { audio01 } = getQuery(event);
    const { audio02 } = getQuery(event);
    const { audio03 } = getQuery(event);
    const { audio04 } = getQuery(event);
    
    var path = 'https://fuzik03.tetraserver.com/submit_batch2?email=' +
    email +
    '&layout_code=' + layout_code +
    '&clip1=' + clip1 +
    '&clip2=' + clip2 +
    '&clip3=' + clip3 +
    '&clip4=' + clip4 +
    '&clips_num=' + clips_num +
    '&code01=' + code01 +
    '&code02=' + code02 +
    '&code03=' + code03 +
    '&code04=' + code04 +
    '&bar01=' + bar01 +
    '&bar02=' + bar02 +
    '&bar03=' + bar03 +
    '&bar04=' + bar04 +
    '&audio01=' + audio01 +
    '&audio02=' + audio02 +
    '&audio03=' + audio03 +
    '&audio04=' + audio04;

    //console.log("path=" + path);
    
    const response = $fetch(path);
    
    return response;
})