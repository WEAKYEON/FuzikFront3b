export default defineEventHandler(async (event) => {

    const { realm_id, from_email, to_email, amount, remark } = getQuery(event);

    var path = useRuntimeConfig(event).engineBaseUrl + '/transfer?q=a';

    if (realm_id == undefined) {

    } else {
        path = path + '&realm_id=' + encodeURIComponent(String(realm_id));
    }

    if (from_email == undefined) {

    } else {
        path = path + '&from_email=' + encodeURIComponent(String(from_email));
    }

    if (to_email == undefined) {

    } else {
        path = path + '&to_email=' + encodeURIComponent(String(to_email));
    }

    if (amount == undefined) {

    } else {
        path = path + '&amount=' + encodeURIComponent(String(amount));
    }

    if (remark == undefined) {

    } else {
        path = path + '&remark=' + encodeURIComponent(String(remark));
    }

    try {
        const response = await $fetch(path);
        return response;
    } catch (error) {
        return { result: 'Failure', remark: 'Transfer request failed' };
    }
});
