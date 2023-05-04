/**
 * Gets the current app url. Works on production and developement
 * @param route The pathname that will be attached at the end of the base route
 * @example

 * getURL("/sign-in")
 * // returns http://localhost:3000/sign-in/ in developement
 * // returns http://{realApplicationDomain}/sign-in/ in production
 */
export function getURL(route: string) {
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    return `http://localhost:3000${route}/`;
  } else {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${route}/`;
  }
}

/**
 * Gets a range of values based on pagination number
 */
export function getPagination(page: number) {
  const size = 4;
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size : size;

  return { from, to };
}
