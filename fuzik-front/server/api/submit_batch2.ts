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
    
    var path = useRuntimeConfig(event).engineBaseUrl + '/submit_batch2?email=' + encodeURIComponent(String(email)) +
    '&layout_code=' + encodeURIComponent(String(layout_code)) +
    '&clip1=' + encodeURIComponent(String(clip1)) +
    '&clip2=' + encodeURIComponent(String(clip2)) +
    '&clip3=' + encodeURIComponent(String(clip3)) +
    '&clip4=' + encodeURIComponent(String(clip4)) +
    '&clips_num=' + encodeURIComponent(String(clips_num)) +
    '&code01=' + encodeURIComponent(String(code01)) +
    '&code02=' + encodeURIComponent(String(code02)) +
    '&code03=' + encodeURIComponent(String(code03)) +
    '&code04=' + encodeURIComponent(String(code04)) +
    '&bar01=' + encodeURIComponent(String(bar01)) +
    '&bar02=' + encodeURIComponent(String(bar02)) +
    '&bar03=' + encodeURIComponent(String(bar03)) +
    '&bar04=' + encodeURIComponent(String(bar04)) +
    '&audio01=' + encodeURIComponent(String(audio01)) +
    '&audio02=' + encodeURIComponent(String(audio02)) +
    '&audio03=' + encodeURIComponent(String(audio03)) +
    '&audio04=' + encodeURIComponent(String(audio04));

    //console.log("path=" + path);
    
    const response = $fetch(path);
    
    return response;
})