export const PUBLIC_ROUTES = ['/', '/startups', '/features', '/use-cases', '/sponsors', '/demo', '/login', '/signup'];
export const WORKSPACE_ROUTES = ['/canvas', '/dashboard', '/templates', '/settings'];
export const ACCOUNT_ROUTES = ['/users'];

export function normalizePath(path) {
  return path && path !== '#' ? path : '/';
}

export function getRouteMeta(path) {
  const normalizedPath = normalizePath(path);

  if (WORKSPACE_ROUTES.includes(normalizedPath)) {
    return { path: normalizedPath, layout: 'workspace', requiresAuth: false };
  }
  if (ACCOUNT_ROUTES.includes(normalizedPath)) {
    return { path: normalizedPath, layout: 'account', requiresAuth: true };
  }
  if (PUBLIC_ROUTES.includes(normalizedPath)) {
    return { path: normalizedPath, layout: 'public', requiresAuth: false };
  }

  return { path: normalizedPath, layout: 'not-found', requiresAuth: false };
}
