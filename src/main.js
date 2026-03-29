import '../style.css';
import { renderCanvas } from './canvas/canvas.js';
import { renderDashboard } from './dashboard/dashboard.js';
import { svgIcon } from './icons.js';
import { renderAuthPage } from './pages/auth.js';
import { renderMarketingPage, renderDemoPage } from './pages/marketing.js';
import { renderSettings } from './pages/settings.js';
import { renderTemplates } from './pages/templates.js';
import { renderUsersPage } from './pages/users.js';
import { ACCOUNT_ROUTES, getRouteMeta, PUBLIC_ROUTES, WORKSPACE_ROUTES } from './routes.js';
import { NAV_LINKS } from './site-data.js';
import { isAuthenticated, logout, saveState, state } from './state.js';
import { applyTheme, getThemeLabel, toggleTheme } from './theme.js';

let currentRoute = null;

applyTheme(state.theme);

function getInitialPath() {
  return window.location.hash.slice(1) || '/';
}

function navigate(path, { replace = false } = {}) {
  const target = path || '/';
  if (target === currentRoute && !replace) return;
  currentRoute = target;
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({ path: target }, '', `#${target}`);
  renderRoute(target);
}

window.navigate = navigate;

function createLogo() {
  return `
    <button class="brand-lockup" data-nav="/">
      <span class="logo-icon">${svgIcon('zap')}</span>
      <span class="logo-text">FlowForge<span>AI</span></span>
    </button>
  `;
}

function renderPublicShell(path) {
  const currentUser = state.currentUser;
  return `
    <div class="public-shell">
      <div class="public-shell-bg">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
      </div>
      <header class="marketing-header">
        <div class="marketing-header-row">
          ${createLogo()}
          <nav class="marketing-nav">
            ${NAV_LINKS.map(
              (link) => `
                <button class="marketing-nav-link ${path === link.path ? 'active' : ''}" data-nav="${link.path}">
                  ${link.label}
                </button>
              `,
            ).join('')}
          </nav>
          <div class="marketing-header-actions">
            <button class="btn btn-ghost" id="theme-toggle">${getThemeLabel()}</button>
            ${
              currentUser
                ? `
                  <button class="btn btn-secondary" data-nav="/users">${svgIcon('user')} ${currentUser.name}</button>
                  <button class="btn btn-primary" data-logout>Log out</button>
                `
                : `
                  <button class="btn btn-ghost" data-nav="/login">Login</button>
                  <button class="btn btn-primary" data-nav="/signup">Sign up</button>
                `
            }
          </div>
        </div>
      </header>
      <main id="main-content" class="public-content"></main>
    </div>
  `;
}

function renderWorkspaceShell(path) {
  const currentUser = state.currentUser;
  const userName = currentUser?.name || 'Guest Builder';
  const userPlan = currentUser ? 'Local Demo Account' : 'Launch Preview';
  return `
    <div class="layout-app">
      <aside class="sidebar">
        <div class="sidebar-brand">
          ${createLogo()}
        </div>
        <nav class="sidebar-nav">
          <span class="nav-section-label">Workspace</span>
          ${WORKSPACE_ROUTES.map((route) => {
            const labels = {
              '/canvas': ['Canvas Editor', 'gitMerge'],
              '/dashboard': ['Dashboard', 'layoutDashboard'],
              '/templates': ['Templates', 'library'],
              '/settings': ['Settings', 'settings'],
            };
            const [label, icon] = labels[route];
            return `
              <button class="nav-link ${path === route ? 'active' : ''}" data-nav="${route}">
                ${svgIcon(icon)} ${label}
              </button>
            `;
          }).join('')}
          <div class="sidebar-divider"></div>
          <span class="nav-section-label">Account</span>
          <button class="nav-link ${path === '/users' ? 'active' : ''}" data-nav="/users">
            ${svgIcon('user')} Users
          </button>
        </nav>
        <div class="sidebar-footer">
          <button class="theme-toggle" id="theme-toggle">${getThemeLabel()}</button>
          <div class="sidebar-user">
            <div class="user-avatar">${userName.slice(0, 1).toUpperCase()}</div>
            <div class="user-info">
              <div class="user-name">${userName}</div>
              <div class="user-plan">${userPlan}</div>
            </div>
          </div>
          <div class="workspace-footer-actions">
            ${
              currentUser
                ? `<button class="btn btn-secondary btn-sm" data-logout>Log out</button>`
                : `<button class="btn btn-secondary btn-sm" data-nav="/login">Log in</button>`
            }
          </div>
        </div>
      </aside>
      <div id="main-content" class="page-content"></div>
    </div>
  `;
}

function renderAccountShell(path) {
  return `
    <div class="public-shell account-shell">
      <div class="public-shell-bg">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
      </div>
      <header class="marketing-header">
        <div class="marketing-header-row">
          ${createLogo()}
          <div class="marketing-header-actions">
            <button class="btn btn-ghost" data-nav="/dashboard">Workspace</button>
            <button class="btn btn-ghost ${path === '/users' ? 'active-nav-action' : ''}" data-nav="/users">Users</button>
            <button class="btn btn-ghost" id="theme-toggle">${getThemeLabel()}</button>
            <button class="btn btn-primary" data-logout>Log out</button>
          </div>
        </div>
      </header>
      <main id="main-content" class="public-content"></main>
    </div>
  `;
}

function bindSharedActions(app) {
  app.querySelectorAll('[data-nav]').forEach((element) => {
    element.addEventListener('click', () => navigate(element.dataset.nav));
  });

  app.querySelectorAll('[data-logout]').forEach((element) => {
    element.addEventListener('click', () => {
      logout();
      saveState();
      navigate('/login');
    });
  });

  const themeButton = app.querySelector('#theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      toggleTheme();
      renderRoute(currentRoute || getInitialPath());
    });
  }
}

function renderPage(path, main) {
  switch (path) {
    case '/':
      renderMarketingPage(main, navigate, 'home');
      break;
    case '/startups':
      renderMarketingPage(main, navigate, 'startups');
      break;
    case '/features':
      renderMarketingPage(main, navigate, 'features');
      break;
    case '/use-cases':
      renderMarketingPage(main, navigate, 'use-cases');
      break;
    case '/sponsors':
      renderMarketingPage(main, navigate, 'sponsors');
      break;
    case '/demo':
      renderDemoPage(main, navigate);
      break;
    case '/login':
      renderAuthPage(main, navigate, 'login');
      break;
    case '/signup':
      renderAuthPage(main, navigate, 'signup');
      break;
    case '/users':
      renderUsersPage(main, navigate);
      break;
    case '/canvas':
      renderCanvas(main, navigate);
      break;
    case '/dashboard':
      renderDashboard(main, navigate);
      break;
    case '/templates':
      renderTemplates(main, navigate);
      break;
    case '/settings':
      renderSettings(main, navigate);
      break;
    default:
      main.innerHTML = `
        <div class="not-found-page">
          <h1>Page not found</h1>
          <p>The route <code>${path}</code> does not exist yet.</p>
          <button class="btn btn-primary" data-nav="/">Return home</button>
        </div>
      `;
      main.querySelector('[data-nav]')?.addEventListener('click', () => navigate('/'));
  }
}

function renderRoute(path) {
  const app = document.getElementById('app');
  const meta = getRouteMeta(path);

  if (meta.requiresAuth && !isAuthenticated()) {
    navigate('/login', { replace: true });
    return;
  }

  if (meta.layout === 'workspace') {
    app.innerHTML = renderWorkspaceShell(path);
  } else if (meta.layout === 'account') {
    app.innerHTML = renderAccountShell(path);
  } else {
    app.innerHTML = renderPublicShell(PUBLIC_ROUTES.includes(path) ? path : '/');
  }

  bindSharedActions(app);
  renderPage(path, app.querySelector('#main-content'));
}

window.addEventListener('popstate', () => {
  const path = getInitialPath();
  currentRoute = path;
  renderRoute(path);
});

currentRoute = getInitialPath();
renderRoute(currentRoute);
