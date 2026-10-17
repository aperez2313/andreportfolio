/* Builds the URL of a file in public/, including the site's base path (see vite.config.ts). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
