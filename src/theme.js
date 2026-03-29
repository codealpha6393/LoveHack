import { saveState, state } from './state.js';

export function applyTheme(theme = state.theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function getThemeLabel(theme = state.theme) {
  return theme === 'dark' ? 'Light mode' : 'Dark mode';
}

export function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme(state.theme);
  return state.theme;
}
