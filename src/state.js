const memoryStorage = (() => {
  const store = new Map();
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
  };
})();

function getStorage(storage = globalThis.localStorage) {
  return storage ?? memoryStorage;
}

function readJSON(storage, key, fallback) {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function createUserSession(user) {
  if (!user) return null;
  const { password, ...safeUser } = user;
  return safeUser;
}

export const FLOWFORGE_STORAGE_KEYS = {
  apiKey: 'ff_api_key',
  featherlessKey: 'ff_featherless_key',
  aiProvider: 'ff_ai_provider',
  workflows: 'ff_workflows',
  execHistory: 'ff_exec_history',
  theme: 'ff_theme',
  users: 'ff_users',
  currentUser: 'ff_current_user',
};

export function createInitialState(storage = getStorage()) {
  return {
    currentRoute: '/',
    apiKey: storage.getItem(FLOWFORGE_STORAGE_KEYS.apiKey) || '',
    get geminiKey() {
      return this.apiKey;
    },
    set geminiKey(value) {
      this.apiKey = value;
    },
    featherlessKey: storage.getItem(FLOWFORGE_STORAGE_KEYS.featherlessKey) || '',
    aiProvider: storage.getItem(FLOWFORGE_STORAGE_KEYS.aiProvider) || 'gemini',
    workflows: readJSON(storage, FLOWFORGE_STORAGE_KEYS.workflows, []),
    activeWorkflowId: null,
    execHistory: readJSON(storage, FLOWFORGE_STORAGE_KEYS.execHistory, []),
    theme: storage.getItem(FLOWFORGE_STORAGE_KEYS.theme) || 'dark',
    users: readJSON(storage, FLOWFORGE_STORAGE_KEYS.users, []),
    currentUser: readJSON(storage, FLOWFORGE_STORAGE_KEYS.currentUser, null),
  };
}

export function createStateManager(state, storage = getStorage()) {
  const persistCoreState = () => {
    storage.setItem(FLOWFORGE_STORAGE_KEYS.apiKey, state.apiKey);
    storage.setItem(FLOWFORGE_STORAGE_KEYS.featherlessKey, state.featherlessKey);
    storage.setItem(FLOWFORGE_STORAGE_KEYS.aiProvider, state.aiProvider);
    storage.setItem(FLOWFORGE_STORAGE_KEYS.workflows, JSON.stringify(state.workflows));
    storage.setItem(FLOWFORGE_STORAGE_KEYS.execHistory, JSON.stringify(state.execHistory));
    storage.setItem(FLOWFORGE_STORAGE_KEYS.theme, state.theme);
    storage.setItem(FLOWFORGE_STORAGE_KEYS.users, JSON.stringify(state.users));
    if (state.currentUser) {
      storage.setItem(FLOWFORGE_STORAGE_KEYS.currentUser, JSON.stringify(state.currentUser));
    } else {
      storage.removeItem(FLOWFORGE_STORAGE_KEYS.currentUser);
    }
  };

  return {
    saveState: persistCoreState,
    isAuthenticated() {
      return Boolean(state.currentUser?.id);
    },
    signUp({ name, email, password }) {
      const normalizedEmail = (email || '').trim().toLowerCase();
      const trimmedName = (name || '').trim();
      const trimmedPassword = (password || '').trim();

      if (!trimmedName || !normalizedEmail || !trimmedPassword) {
        return { ok: false, error: 'Name, email, and password are required.' };
      }
      if (state.users.some((user) => user.email.toLowerCase() === normalizedEmail)) {
        return { ok: false, error: 'An account with this email already exists.' };
      }

      const user = {
        id: crypto.randomUUID(),
        name: trimmedName,
        email: normalizedEmail,
        password: trimmedPassword,
        createdAt: new Date().toISOString(),
      };

      state.users.unshift(user);
      state.currentUser = createUserSession(user);
      persistCoreState();
      return { ok: true, user: state.currentUser };
    },
    login({ email, password }) {
      const normalizedEmail = (email || '').trim().toLowerCase();
      const trimmedPassword = (password || '').trim();
      const user = state.users.find(
        (entry) => entry.email.toLowerCase() === normalizedEmail && entry.password === trimmedPassword,
      );
      if (!user) {
        return { ok: false, error: 'Invalid email or password.' };
      }

      state.currentUser = createUserSession(user);
      persistCoreState();
      return { ok: true, user: state.currentUser };
    },
    logout() {
      state.currentUser = null;
      persistCoreState();
    },
    updateProfileName(name) {
      const trimmedName = (name || '').trim();
      if (!state.currentUser) {
        return { ok: false, error: 'You need to log in first.' };
      }
      if (!trimmedName) {
        return { ok: false, error: 'Name cannot be empty.' };
      }

      state.currentUser = { ...state.currentUser, name: trimmedName };
      state.users = state.users.map((user) =>
        user.id === state.currentUser.id ? { ...user, name: trimmedName } : user,
      );
      persistCoreState();
      return { ok: true, user: state.currentUser };
    },
    clearAppData({ includeAccounts = false } = {}) {
      const keys = [
        FLOWFORGE_STORAGE_KEYS.apiKey,
        FLOWFORGE_STORAGE_KEYS.featherlessKey,
        FLOWFORGE_STORAGE_KEYS.aiProvider,
        FLOWFORGE_STORAGE_KEYS.workflows,
        FLOWFORGE_STORAGE_KEYS.execHistory,
        FLOWFORGE_STORAGE_KEYS.theme,
      ];
      if (includeAccounts) {
        keys.push(FLOWFORGE_STORAGE_KEYS.users, FLOWFORGE_STORAGE_KEYS.currentUser);
      }
      keys.forEach((key) => storage.removeItem(key));
    },
  };
}

export const state = createInitialState();
export const stateManager = createStateManager(state);

export function saveState() {
  stateManager.saveState();
}

export function isAuthenticated() {
  return stateManager.isAuthenticated();
}

export function signUp(credentials) {
  return stateManager.signUp(credentials);
}

export function login(credentials) {
  return stateManager.login(credentials);
}

export function logout() {
  return stateManager.logout();
}

export function updateProfileName(name) {
  return stateManager.updateProfileName(name);
}

export function clearFlowForgeData(options) {
  return stateManager.clearAppData(options);
}

export function saveWorkflow(id, title, nodes, connections) {
  const existing = state.workflows.findIndex((workflow) => workflow.id === id);
  const workflow = {
    id: id || crypto.randomUUID(),
    title: title || 'Untitled Workflow',
    nodes: JSON.parse(JSON.stringify(nodes)),
    connections: JSON.parse(JSON.stringify(connections)),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? state.workflows[existing].createdAt : new Date().toISOString(),
  };

  if (existing >= 0) {
    state.workflows[existing] = workflow;
  } else {
    state.workflows.push(workflow);
  }
  saveState();
  return workflow.id;
}

export function loadWorkflow(id) {
  return state.workflows.find((workflow) => workflow.id === id) || null;
}

export function deleteWorkflow(id) {
  state.workflows = state.workflows.filter((workflow) => workflow.id !== id);
  saveState();
}

export function addExecRecord(workflowTitle, nodeCount, duration, success) {
  state.execHistory.unshift({
    id: crypto.randomUUID(),
    title: workflowTitle,
    nodeCount,
    duration,
    success,
    timestamp: new Date().toISOString(),
  });
  if (state.execHistory.length > 50) {
    state.execHistory = state.execHistory.slice(0, 50);
  }
  saveState();
}
