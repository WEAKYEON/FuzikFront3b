export default defineEventHandler(async (event) => {

    const path = useRuntimeConfig(event).engineBaseUrl + '/confirm_all';

    try {
        const response = await $fetch(path);
        return response;
    } catch (error) {
        return [{ result: 'Failure' }];
    }
});
