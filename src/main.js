import { initRouter } from './router.js';
import { setupSidebar } from './app.js';
import { renderLanding } from './pages/landing.js';

// Application State
export const state = {
  currentRoute: '/',
  workflows: [],
  activeWorkflowId: null
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('FlowForge AI Initialized');
  
  // Create App Layout Map
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
    <div id="sidebar-container" class="hidden"></div>
    <main id="main-content" class="flex-1 overflow-hidden relative"></main>
    <div id="ai-panel-container" class="hidden"></div>
  `;

  // Initialize Core Systems
  initRouter();
  
  // Determine initial state based on route
  const path = window.location.hash || '#/';
  if (path === '#/') {
    renderLanding();
  } else {
    setupSidebar();
  }
});
