export const SITE_ORIGIN = 'https://mero-player-feedback.lightgem1024.chatgpt.site';
export const base = import.meta.env.BASE_URL;
export const pageUrl = (path = '') => base + path;
export const apiUrl = (path: string) => SITE_ORIGIN + path;
