import assert from 'node:assert/strict';

import {
  createInitialState,
  createStateManager,
  FLOWFORGE_STORAGE_KEYS,
} from '../src/state.js';

function createMemoryStorage(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    dump() {
      return Object.fromEntries(store.entries());
    },
  };
}

export function runStateTests() {
  {
    const storage = createMemoryStorage();
    const state = createInitialState(storage);
    const manager = createStateManager(state, storage);

    const result = manager.signUp({
      name: 'Sandeep',
      email: 'sandeep@example.com',
      password: 'launch123',
    });

    assert.equal(result.ok, true);
    assert.equal(state.currentUser?.name, 'Sandeep');
    assert.equal(state.users.length, 1);

    const persisted = storage.dump();
    assert.ok(persisted[FLOWFORGE_STORAGE_KEYS.users]);
    assert.ok(persisted[FLOWFORGE_STORAGE_KEYS.currentUser]);
  }

  {
    const users = JSON.stringify([
      { id: 'user-1', name: 'Builder', email: 'builder@example.com', password: 'secret123' },
    ]);
    const storage = createMemoryStorage({
      [FLOWFORGE_STORAGE_KEYS.users]: users,
    });
    const state = createInitialState(storage);
    const manager = createStateManager(state, storage);

    const result = manager.login({
      email: 'builder@example.com',
      password: 'wrong-pass',
    });

    assert.equal(result.ok, false);
    assert.match(result.error, /invalid/i);
    assert.equal(state.currentUser, null);
  }

  {
    const currentUser = { id: 'user-1', name: 'Builder', email: 'builder@example.com' };
    const users = JSON.stringify([{ ...currentUser, password: 'secret123' }]);
    const storage = createMemoryStorage({
      [FLOWFORGE_STORAGE_KEYS.users]: users,
      [FLOWFORGE_STORAGE_KEYS.currentUser]: JSON.stringify(currentUser),
    });
    const state = createInitialState(storage);
    const manager = createStateManager(state, storage);

    const result = manager.updateProfileName('Launch Team');

    assert.equal(result.ok, true);
    assert.equal(state.currentUser?.name, 'Launch Team');

    const persistedUsers = JSON.parse(storage.getItem(FLOWFORGE_STORAGE_KEYS.users));
    assert.equal(persistedUsers[0].name, 'Launch Team');
  }
}
