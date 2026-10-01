/** The catalog currently stores IDs; also accept standard YouTube share URLs. */
export function getYouTubeVideoId(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const input = value.trim();
  const isId = (id: string) => /^[a-zA-Z0-9_-]{11}$/.test(id);
  if (isId(input)) return input;

  try {
    const url = new URL(input);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    const host = url.hostname.toLowerCase();
    let id: string | null = null;
    if (host === 'youtu.be') {
      id = url.pathname.slice(1);
    } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com', 'youtube-nocookie.com'].includes(host)) {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else id = url.pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)\/?$/)?.[1] ?? null;
    }
    return id && isId(id) ? id : null;
  } catch {
    return null;
  }
}