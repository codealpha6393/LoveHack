import assert from 'node:assert/strict';

import {
  getRouteMeta,
  PUBLIC_ROUTES,
  WORKSPACE_ROUTES,
} from '../src/routes.js';

export function runRouteTests() {
  assert.equal(PUBLIC_ROUTES.includes('/demo'), true);
  assert.deepEqual(getRouteMeta('/demo'), {
    path: '/demo',
    layout: 'public',
    requiresAuth: false,
  });

  assert.deepEqual(getRouteMeta('/users'), {
    path: '/users',
    layout: 'account',
    requiresAuth: true,
  });

  assert.equal(WORKSPACE_ROUTES.includes('/canvas'), true);
  assert.deepEqual(getRouteMeta('/canvas'), {
    path: '/canvas',
    layout: 'workspace',
    requiresAuth: false,
  });
}
