export default defineEventHandler(async (event) => {
  const {
    p,
    musician2_email
  } = getQuery(event);

  const params = new URLSearchParams();

  if (p !== undefined) {
    params.append('p', String(p));
  }

  if (musician2_email !== undefined) {
    params.append('musician2_email', String(musician2_email));
  }

  const response = await fetch(
    useRuntimeConfig(event).engineBaseUrl + '/unpublish_playvideo2?' + params.toString()
  );

  const text = await response.text();


  return {
    status: response.status,
    response: text,
  };
});