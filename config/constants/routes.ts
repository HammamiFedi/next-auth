/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const PUBLIC_ROUTES = ["/"];

/**
 * An array of routes that are use for authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const AUTH_ROUTES = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for the API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_ROUTE_PREFIX = "/api/auth";

/**
 * The default route to redirect to after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
