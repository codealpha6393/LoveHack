import '../style.css';
import { renderLanding } from './pages/landing.js';
import { renderCanvas } from './canvas/canvas.js';
import { renderDashboard } from './dashboard/dashboard.js';
import { renderTemplates } from './pages/templates.js';
import { renderSettings } from './pages/settings.js';
import { svgIcon } from './icons.js';
import { state, saveState } from './state.js';

let currentRoute = null;

// ── Apply theme on boot
document.documentElement.setAttribute('data-theme', state.theme);

// ── Sidebar HTML (app routes only)
function sidebarHTML() {
  return `
    <aside class="sidebar">
      <a class="sidebar-logo" href="#/canvas">
        <div class="logo-icon">${svgIcon('zap')}</div>
        <span class="logo-text">FlowForge<span>AI</span></span>
      </a>
      <nav class="sidebar-nav">
        <span class="nav-section-label">Workspace</span>
        <button class="nav-link" data-route="/canvas">
          ${svgIcon('gitMerge')} Canvas Editor
        </button>
        <button class="nav-link" data-route="/dashboard">
          ${svgIcon('layoutDashboard')} Dashboard
        </button>
        <button class="nav-link" data-route="/templates">
          ${svgIcon('library')} Templates
        </button>
        <div class="sidebar-divider"></div>
        <span class="nav-section-label">Account</span>
        <button class="nav-link" data-route="/settings">
          ${svgIcon('settings')} Settings
        </button>
      </nav>
      <div class="sidebar-footer">
        <button class="theme-toggle" id="theme-toggle" title="Toggle light/dark mode">
          ${state.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <div class="sidebar-user">
          <div class="user-avatar">B</div>
          <div class="user-info">
            <div class="user-name">Builder</div>
            <div class="user-plan">LovHack S2</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function navigate(path) {
  if (path === currentRoute) return;
  currentRoute = path;
  window.history.pushState({ path }, '', `#${path}`);
  renderRoute(path);
}
window.navigate = navigate;

function renderRoute(path) {
  const app = document.getElementById('app');
  const isLanding = path === '/' || path === '';

  if (isLanding) {
    app.innerHTML = '<div id="main-content"></div>';
    renderLanding(navigate);
    return;
  }

  app.innerHTML = `
    <div class="layout-app">
      ${sidebarHTML()}
      <div id="main-content" class="page-content"></div>
    </div>
  `;

  // Wire nav
  app.querySelectorAll('.nav-link[data-route]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.route));
    if (btn.dataset.route === path) btn.classList.add('active');
  });

  // Wire theme toggle
  const themeBtn = app.querySelector('#theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      saveState();
      document.documentElement.setAttribute('data-theme', state.theme);
      themeBtn.textContent = state.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }

  // Render page
  const main = document.getElementById('main-content');
  switch (path) {
    case '/canvas': renderCanvas(main, navigate); break;
    case '/dashboard': renderDashboard(main, navigate); break;
    case '/templates': renderTemplates(main, navigate); break;
    case '/settings': renderSettings(main); break;
    default:
      main.innerHTML = `<div style="display:flex;height:100%;align-items:center;justify-content:center;color:rgba(255,255,255,0.4)">Page not found</div>`;
  }
}

// ── Boot
function getInitialPath() {
  return window.location.hash.slice(1) || '/';
}

window.addEventListener('popstate', () => renderRoute(getInitialPath()));
renderRoute(getInitialPath());
