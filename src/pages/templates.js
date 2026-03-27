import { svgIcon } from '../icons.js';

const TEMPLATES = [
    {
        icon: 'mail', iconClass: 'bg-blue color-blue',
        title: 'Email Auto-Responder',
        desc: 'Automatically reply to new emails with a personalized message using AI, then log to a database.',
        steps: 4, category: 'Productivity',
        nodes: [
            { type: 'trigger', label: 'Email Trigger', desc: 'Watch inbox for new messages' },
            { type: 'aiAgent', label: 'AI Compose', desc: 'Generate personalized reply' },
            { type: 'action', label: 'Send Reply', desc: 'Dispatch the email response' },
            { type: 'output', label: 'Log to DB', desc: 'Record sent emails to database' },
        ]
    },
    {
        icon: 'slack', iconClass: 'bg-purple color-purple',
        title: 'Slack Alert Pipeline',
        desc: 'Monitor a webhook endpoint and send filtered alerts to Slack channels based on event severity.',
        steps: 3, category: 'Monitoring',
        nodes: [
            { type: 'trigger', label: 'Webhook', desc: 'Receive event via HTTP POST' },
            { type: 'condition', label: 'Severity Check', desc: 'Filter high severity events' },
            { type: 'output', label: 'Slack Notify', desc: 'Post alert to #alerts channel' },
        ]
    },
    {
        icon: 'database', iconClass: 'bg-green color-green',
        title: 'Data Sync Pipeline',
        desc: 'Schedule a daily data sync that fetches from an API, transforms the payload, and writes to DB.',
        steps: 4, category: 'Data',
        nodes: [
            { type: 'trigger', label: 'Cron Schedule', desc: 'Run daily at 8:00 AM' },
            { type: 'action', label: 'Fetch API', desc: 'GET data from remote API' },
            { type: 'aiAgent', label: 'Transform', desc: 'Normalize and enrich data' },
            { type: 'output', label: 'Write DB', desc: 'Insert records into database' },
        ]
    },
    {
        icon: 'user', iconClass: 'bg-yellow color-yellow',
        title: 'Customer Onboarding',
        desc: 'When a new user signs up, validate their data, send a welcome email, and create their profile.',
        steps: 5, category: 'CRM',
        nodes: [
            { type: 'trigger', label: 'Signup Webhook', desc: 'New user registered event' },
            { type: 'condition', label: 'Validate Email', desc: 'Check valid email format' },
            { type: 'action', label: 'Create Profile', desc: 'Insert user in database' },
            { type: 'aiAgent', label: 'Personalize', desc: 'Generate welcome message' },
            { type: 'output', label: 'Welcome Email', desc: 'Send onboarding email' },
        ]
    },
];

export function renderTemplates(container, navigate) {
    container.innerHTML = `
    <div class="templates-page">
      <div class="page-header">
        <h1>Templates</h1>
        <p>Jump-start with pre-built workflow templates. Click any card to load it on the canvas.</p>
      </div>
      <div class="templates-grid">
        ${TEMPLATES.map((t, i) => `
          <div class="template-card" data-idx="${i}">
            <div class="template-card-icon ${t.iconClass}">${svgIcon(t.icon)}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <div class="template-card-footer">
              <span class="template-steps">${t.steps} nodes · ${t.category}</span>
              <button class="btn btn-primary btn-sm" data-idx="${i}">
                Use Template ${svgIcon('arrowRight')}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    // Load template onto canvas
    container.querySelectorAll('[data-idx]').forEach(el => {
        el.addEventListener('click', e => {
            const idx = parseInt(el.dataset.idx);
            const tmpl = TEMPLATES[idx];
            if (!tmpl) return;
            // Store template in sessionStorage and go to canvas
            sessionStorage.setItem('ff_load_template', JSON.stringify(tmpl.nodes));
            navigate('/canvas');
        });
    });
}
