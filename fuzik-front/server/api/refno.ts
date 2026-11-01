export default defineEventHandler(async (event) => {

    const path = useRuntimeConfig(event).engineBaseUrl + '/refno';

    try {
        const response = await $fetch(path);
        return response;
    } catch (error) {
        return { result: 'Failure', remark: 'Refno request failed' };
    }
});
