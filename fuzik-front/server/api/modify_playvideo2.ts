export default defineEventHandler(async (event) => {
  const {
    p,
    musician2_email,
    video_title,
    description,
    music_title,
    original,
    instrument
  } = getQuery(event);

  const params = new URLSearchParams();

  if (p !== undefined) {
    params.append('p', String(p));
  }

  if (musician2_email !== undefined) {
    params.append('musician2_email', String(musician2_email));
  }

  if (video_title !== undefined) {
    params.append('video_title', String(video_title));
  }

  if (description !== undefined) {
    params.append('description', String(description));
  }

  if (music_title !== undefined) {
    params.append('music_title', String(music_title));
  }

  if (original !== undefined) {
    params.append('original', String(original));
  }

  if (instrument !== undefined) {
    params.append('instrument', String(instrument));
  }

  const response = await fetch(
    'https://engine01.fuzikapp.com/modify_playvideo2?' + params.toString()
  );

  const text = await response.text();

  console.log('Backend status:', response.status);
  console.log('Backend response:', text);

  return {
    status: response.status,
    response: text,
  };
});