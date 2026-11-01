export default defineEventHandler(async (event) => {

    const { from_email, amount, refno } = getQuery(event);

    const path = useRuntimeConfig(event).engineBaseUrl + '/transfer?to_email=' + encodeURIComponent('omiesensei@gmail.com') +
        '&from_email=' + encodeURIComponent(String(from_email)) +
        '&amount=' + encodeURIComponent(String(amount)) +
        '&remark=' + encodeURIComponent('Deposit-' + String(refno)) +
        '&realm_id=REALM00000001' +
        '&void=1';

    try {
        const response = await $fetch(path);
        return response;
    } catch (error) {
        return { result: 'Failure', remark: 'Deposit transfer request failed' };
    }
});
