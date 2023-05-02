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
