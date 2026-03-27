import { svgIcon } from '../icons.js';

export function renderLanding(navigate) {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="landing-page">
      <!-- Background orbs -->
      <div class="landing-bg">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
      </div>

      <!-- Navbar -->
      <nav class="landing-navbar">
        <div class="landing-navbar-logo">
          <div class="logo-icon">${svgIcon('zap')}</div>
          <span class="logo-text">FlowForge<span>AI</span></span>
        </div>
        <div class="landing-navbar-actions">
          <button class="btn btn-ghost" id="nav-github">GitHub</button>
          <button class="btn btn-primary" id="nav-start">
            Start Building ${svgIcon('arrowRight')}
          </button>
        </div>
      </nav>

      <!-- Hero -->
      <section class="landing-hero">
        <div class="hero-badge">${svgIcon('sparkles')} LovHack Season 2 — AI & Productivity</div>
        <h1 class="hero-title">
          Automate anything with<br/>
          <span class="hero-title-glow">plain English.</span>
        </h1>
        <p class="hero-desc">
          The visual workflow studio that builds itself. Describe what you want to automate and watch as AI connects the tools, logic, and APIs — all in real-time.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" style="font-size:16px;padding:13px 28px;" id="hero-launch">
            ${svgIcon('wand')} Launch AI Canvas
          </button>
          <button class="btn btn-secondary" style="font-size:16px;padding:13px 28px;" id="hero-dashboard">
            ${svgIcon('layoutDashboard')} View Dashboard
          </button>
        </div>
      </section>

      <!-- How It Works -->
      <section class="how-it-works-section">
        <p class="section-title">How It Works</p>
        <h2 class="section-heading">From idea to automation in 3 steps</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Describe</h3>
            <p>Tell our AI assistant what you want to automate using plain English. No coding, no documentation reading.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Build</h3>
            <p>AI generates a visual workflow on the canvas. Drag, drop, and connect nodes to refine your automation logic.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Execute</h3>
            <p>Run your workflow with one click. Watch data flow through each node in real-time with live execution logs.</p>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="features-section">
        <p class="section-title">Why FlowForge AI</p>
        <h2 class="section-heading">Everything you need to ship automations fast</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon bg-indigo color-purple">${svgIcon('bot')}</div>
            <h3>Dual AI Engine</h3>
            <p>Powered by <strong>Gemini AI</strong> and <strong>Featherless AI</strong>. Auto-generates workflows from natural language with intelligent model fallback.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-blue color-blue">${svgIcon('workflow')}</div>
            <h3>Visual Canvas Editor</h3>
            <p>Drag, drop, and connect nodes on an infinite canvas. See your logic come to life visually with animated Bezier connections.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-green color-green">${svgIcon('zapFast')}</div>
            <h3>Real-time Execution</h3>
            <p>Watch data flow through your workflow in real-time with animated status indicators and a live execution log.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-yellow color-yellow">${svgIcon('layoutTemplate')}</div>
            <h3>Starter Templates</h3>
            <p>Jump-start with pre-built workflow templates for email automation, Slack alerts, data pipelines, and customer onboarding.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-purple color-purple">${svgIcon('database')}</div>
            <h3>Save, Export & Import</h3>
            <p>Persistent local storage with workflow save/load, JSON export, and import. Your data never leaves your device.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-cyan color-cyan">${svgIcon('activity')}</div>
            <h3>Live Analytics Dashboard</h3>
            <p>Real execution history, success rates, and performance stats powered by actual workflow run data.</p>
          </div>
        </div>
      </section>

      <!-- Sponsors -->
      <section class="sponsors-section">
        <p class="section-title">Built With</p>
        <h2 class="section-heading">Powered by sponsor tools & cutting-edge AI</h2>
        <div class="sponsors-strip">
          <div class="sponsor-card">
            <div class="sponsor-card-icon bg-indigo color-purple">${svgIcon('sparkles')}</div>
            <h4>Gemini AI</h4>
            <p>Primary AI engine for natural language workflow generation</p>
          </div>
          <div class="sponsor-card">
            <div class="sponsor-card-icon bg-green color-green">${svgIcon('wand')}</div>
            <h4>Featherless AI</h4>
            <p>Alternative AI backend with open-source models</p>
          </div>
          <div class="sponsor-card">
            <div class="sponsor-card-icon bg-blue color-blue">${svgIcon('layoutDashboard')}</div>
            <h4>Stitch AI</h4>
            <p>UI/UX design generation via Google MCP</p>
          </div>
          <div class="sponsor-card">
            <div class="sponsor-card-icon bg-yellow color-yellow">${svgIcon('gitNetwork')}</div>
            <h4>DevSwarm</h4>
            <p>Collaborative development and deployment</p>
          </div>
        </div>
        <div class="sponsors-pills-row">
          ${['gen.xyz', 'Miro', 'n8n', 'Nodebase', 'CREAO', 'CodeCrafters'].map(s =>
    `<span class="sponsor-pill">${s}</span>`).join('')}
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <h2>Ready to automate?</h2>
        <p>Start building your first AI-powered workflow in under 60 seconds.</p>
        <button class="btn btn-primary" style="font-size:16px;padding:14px 32px;" id="cta-start">
          ${svgIcon('zap')} Get Started — It's Free
        </button>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <p>Built for <strong>LovHack Season 2</strong> · Open Source under MIT License</p>
      </footer>
    </div>
  `;

  // Wire buttons
  main.querySelector('#nav-start').addEventListener('click', () => navigate('/canvas'));
  main.querySelector('#hero-launch').addEventListener('click', () => navigate('/canvas'));
  main.querySelector('#hero-dashboard').addEventListener('click', () => navigate('/dashboard'));
  main.querySelector('#cta-start').addEventListener('click', () => navigate('/canvas'));
}
