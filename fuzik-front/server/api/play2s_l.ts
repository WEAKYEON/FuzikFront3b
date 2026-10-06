export default defineEventHandler((event) => {

    const { limit } = getQuery(event);
    const { q } = getQuery(event);
    const { start } = getQuery(event);
    const { musician } = getQuery(event);
    const { ready } = getQuery(event);
    const { ex1 } = getQuery(event);
    const { ex2 } = getQuery(event);
    const { ex3 } = getQuery(event);
    const { ex4 } = getQuery(event);
    const { ex5 } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/play2s_l/';

    if (start == undefined) {
      path = path + '?start=1'
    } else {
      path = path + '?start=' + encodeURIComponent(String(start))
    }
    
    if (limit == undefined) {
      path = path + '&limit=120'
    } else {
      path = path + '&limit=' + encodeURIComponent(String(limit))
    }

    if (musician == undefined) {

    } else {
      path = path + '&musician=' + encodeURIComponent(String(musician))
    }

    if (q == undefined) {
      
    } else {
      path = path + '&q=' + encodeURIComponent(String(q))
    }

    if (ready == undefined) {

    } else {
      path = path + '&ready=' + encodeURIComponent(String(ready))
    }

    if (ex1 == undefined) {
      
    } else {
      path = path + '&ex1=' + encodeURIComponent(String(ex1))
    }

    if (ex2 == undefined) {
      
    } else {
      path = path + '&ex2=' + encodeURIComponent(String(ex2))
    }

    if (ex3 == undefined) {
      
    } else {
      path = path + '&ex3=' + encodeURIComponent(String(ex3))
    }

    if (ex4 == undefined) {
      
    } else {
      path = path + '&ex4=' + encodeURIComponent(String(ex4))
    }

    if (ex5 == undefined) {
      
    } else {
      path = path + '&ex5=' + encodeURIComponent(String(ex5))
    }

    const response = fetch(path);
    
    return response;
  })