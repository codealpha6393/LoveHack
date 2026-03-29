import { svgIcon } from '../icons.js';
import { DEMO_STEPS, FEATURES, SPONSORS, STARTUPS, USE_CASES } from '../site-data.js';

function featureCards(limit = FEATURES.length) {
  return FEATURES.slice(0, limit)
    .map(
      (feature) => `
        <article class="marketing-card feature-tile">
          <div class="feature-tile-icon ${feature.accent}">${svgIcon('sparkles')}</div>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </article>
      `,
    )
    .join('');
}

function useCaseCards(limit = USE_CASES.length) {
  return USE_CASES.slice(0, limit)
    .map(
      (useCase) => `
        <article class="marketing-card use-case-card">
          <span class="eyebrow">Use case</span>
          <h3>${useCase.title}</h3>
          <p>${useCase.summary}</p>
        </article>
      `,
    )
    .join('');
}

function sponsorCards(limit = SPONSORS.length) {
  return SPONSORS.slice(0, limit)
    .map(
      (sponsor) => `
        <article class="marketing-card sponsor-showcase-card">
          <div class="logo-badge">${sponsor.name}</div>
          <h3>${sponsor.role}</h3>
          <p>${sponsor.detail}</p>
        </article>
      `,
    )
    .join('');
}

function startupTabs() {
  const tabButtons = STARTUPS.map(
    (startup, index) => `
      <button class="startup-tab ${index === 0 ? 'active' : ''}" data-startup-tab="${startup.id}">
        ${startup.name}
      </button>
    `,
  ).join('');

  const panels = STARTUPS.map(
    (startup, index) => `
      <article class="startup-panel ${index === 0 ? 'active' : ''}" data-startup-panel="${startup.id}">
        <div class="startup-panel-header">
          <div class="logo-badge large">${startup.logo}</div>
          <div>
            <h3>${startup.name}</h3>
            <p>${startup.tagline}</p>
          </div>
        </div>
        <div class="startup-panel-grid">
          <div class="marketing-card startup-detail-card">
            <span class="eyebrow">What they built</span>
            <p>${startup.built}</p>
          </div>
          <div class="marketing-card startup-detail-card">
            <span class="eyebrow">FlowForge angle</span>
            <p>${startup.angle}</p>
          </div>
        </div>
      </article>
    `,
  ).join('');

  return `
    <section class="marketing-section startup-showcase">
      <div class="section-copy">
        <span class="eyebrow">Domain Leaders</span>
        <h2>Startup references that shaped this product space</h2>
        <p>Explore the companies that built automation, workflow, and AI operations products in this domain, then see how FlowForge positions itself alongside them.</p>
      </div>
      <div class="startup-tabs">${tabButtons}</div>
      <div class="startup-panels">${panels}</div>
    </section>
  `;
}

function homePage() {
  return `
    <section class="hero-surface">
      <div class="hero-copy">
        <span class="hero-pill">${svgIcon('sparkles')} AI workflow automation, packaged like a real product</span>
        <h1>Build, demo, and launch AI-powered workflows from one polished surface.</h1>
        <p>FlowForge AI combines prompt-driven workflow generation, visual editing, execution feedback, startup-style storytelling, and local auth to feel launch ready from the first click.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" data-nav="/signup">${svgIcon('arrowRight')} Create account</button>
          <button class="btn btn-secondary" data-nav="/demo">${svgIcon('play')} Watch the demo flow</button>
        </div>
      </div>
      <div class="hero-preview marketing-card">
        <div class="preview-window-header">
          <span>FlowForge AI Launch Preview</span>
          <div class="preview-dots"><span></span><span></span><span></span></div>
        </div>
        <div class="preview-workflow">
          <div class="preview-step">
            <strong>Prompt</strong>
            <p>"When a new lead arrives, score it, notify sales, and create a follow-up."</p>
          </div>
          <div class="preview-nodes">
            <span>Trigger</span>
            <span>AI Score</span>
            <span>Condition</span>
            <span>Notify</span>
            <span>CRM Update</span>
          </div>
          <div class="preview-metrics">
            <div><strong>94%</strong><span>success rate</span></div>
            <div><strong>12s</strong><span>avg. run time</span></div>
            <div><strong>2 AI</strong><span>provider options</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="marketing-section">
      <div class="section-copy">
        <span class="eyebrow">Why it matters</span>
        <h2>A better first impression for your workflow product</h2>
        <p>The landing experience now explains the AI story, showcases use cases, compares the market, highlights sponsors, and gives users clear paths into demo, signup, and the builder workspace.</p>
      </div>
      <div class="marketing-grid three-col">${featureCards(3)}</div>
    </section>

    <section class="marketing-section">
      <div class="section-copy">
        <span class="eyebrow">Use Cases</span>
        <h2>Built for teams who want automation without the maze</h2>
      </div>
      <div class="marketing-grid two-col">${useCaseCards(4)}</div>
    </section>

    ${startupTabs()}

    <section class="marketing-section sponsor-band">
      <div class="section-copy">
        <span class="eyebrow">Sponsors</span>
        <h2>Backed by the tools that helped shape the build</h2>
      </div>
      <div class="marketing-grid sponsor-grid">${sponsorCards(5)}</div>
    </section>

    <section class="marketing-section cta-banner">
      <div>
        <span class="eyebrow">Launch Next</span>
        <h2>Explore the demo, create an account, or jump straight into the canvas.</h2>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" data-nav="/demo">${svgIcon('playCircle')} Open demo page</button>
        <button class="btn btn-secondary" data-nav="/canvas">${svgIcon('zap')} Go to canvas</button>
      </div>
    </section>
  `;
}

function featuresPage() {
  return `
    <section class="marketing-section page-intro">
      <span class="eyebrow">Features</span>
      <h1>What makes FlowForge AI feel product-ready</h1>
      <p>Everything in this release is aimed at making the app look and behave like a startup-ready automation platform while preserving the existing builder experience.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid three-col">${featureCards()}</div>
    </section>
  `;
}

function useCasesPage() {
  return `
    <section class="marketing-section page-intro">
      <span class="eyebrow">Use Cases</span>
      <h1>Where this workflow product shines</h1>
      <p>Use these scenarios to explain the product in demos, pitches, or sponsor submissions.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid two-col">${useCaseCards()}</div>
    </section>
  `;
}

function sponsorsPage() {
  return `
    <section class="marketing-section page-intro">
      <span class="eyebrow">Sponsors</span>
      <h1>The stack and supporters behind the launch story</h1>
      <p>Instead of a small footer mention, sponsors now have a proper showcase area that feels intentional in both dark and light mode.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid sponsor-grid">${sponsorCards()}</div>
    </section>
  `;
}

function startupsPage() {
  return `
    <section class="marketing-section page-intro">
      <span class="eyebrow">Startup Landscape</span>
      <h1>Companies that built in this domain</h1>
      <p>These examples help users immediately understand FlowForge’s market category, inspiration, and differentiation.</p>
    </section>
    ${startupTabs()}
  `;
}

export function renderMarketingPage(container, navigate, page = 'home') {
  const markup =
    page === 'features'
      ? featuresPage()
      : page === 'use-cases'
        ? useCasesPage()
        : page === 'sponsors'
          ? sponsorsPage()
          : page === 'startups'
            ? startupsPage()
            : homePage();

  container.innerHTML = `<div class="marketing-page">${markup}</div>`;

  container.querySelectorAll('[data-nav]').forEach((button) => {
    button.addEventListener('click', () => navigate(button.dataset.nav));
  });

  container.querySelectorAll('[data-startup-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      const startupId = button.dataset.startupTab;
      container.querySelectorAll('[data-startup-tab]').forEach((entry) => entry.classList.remove('active'));
      container.querySelectorAll('[data-startup-panel]').forEach((entry) => entry.classList.remove('active'));
      button.classList.add('active');
      container.querySelector(`[data-startup-panel="${startupId}"]`)?.classList.add('active');
    });
  });
}

export function renderDemoPage(container, navigate) {
  container.innerHTML = `
    <div class="marketing-page">
      <section class="marketing-section page-intro">
        <span class="eyebrow">Demo</span>
        <h1>A guided product walkthrough before users enter the builder</h1>
        <p>This page gives FlowForge a real product-demo layer instead of dropping visitors directly onto the canvas.</p>
      </section>

      <section class="demo-grid marketing-section">
        <article class="marketing-card demo-story-card">
          <span class="eyebrow">Flow</span>
          <h2>From prompt to workflow to execution</h2>
          <div class="demo-story-steps">
            ${DEMO_STEPS.map(
              (step) => `
                <div class="demo-story-step">
                  <strong>${step.label}</strong>
                  <p>${step.detail}</p>
                </div>
              `,
            ).join('')}
          </div>
        </article>

        <article class="marketing-card demo-screen-card">
          <div class="preview-window-header">
            <span>Live Product Preview</span>
            <div class="preview-dots"><span></span><span></span><span></span></div>
          </div>
          <div class="demo-screen-content">
            <div class="demo-screen-column">
              <span class="eyebrow">Prompt</span>
              <p>Watch FlowForge transform a plain-language request into a connected workflow in seconds.</p>
            </div>
            <div class="demo-screen-column">
              <span class="eyebrow">Execution</span>
              <p>Each node reports status, creating a much stronger “this is real” feeling for launches and pitches.</p>
            </div>
          </div>
        </article>
      </section>

      <section class="marketing-section cta-banner">
        <div>
          <span class="eyebrow">Next step</span>
          <h2>Try the canvas or create a local account to personalize the experience.</h2>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" data-nav="/canvas">${svgIcon('zap')} Try canvas</button>
          <button class="btn btn-secondary" data-nav="/signup">${svgIcon('user')} Create account</button>
        </div>
      </section>
    </div>
  `;

  container.querySelectorAll('[data-nav]').forEach((button) => {
    button.addEventListener('click', () => navigate(button.dataset.nav));
  });
}
