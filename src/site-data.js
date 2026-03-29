export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/startups', label: 'Startups' },
  { path: '/features', label: 'Features' },
  { path: '/use-cases', label: 'Use Cases' },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/demo', label: 'Demo' },
];

export const FEATURES = [
  {
    title: 'Prompt-to-workflow generation',
    description: 'Turn plain English into connected workflow steps with an AI assistant that understands triggers, conditions, actions, and outputs.',
    accent: 'purple',
  },
  {
    title: 'Visual editing that stays fast',
    description: 'Refine flows with drag-and-drop nodes, editable labels, live connections, and workspace controls that keep the product demo-ready.',
    accent: 'blue',
  },
  {
    title: 'Execution feedback in real time',
    description: 'Watch workflows run step by step with status indicators, logs, and dashboard metrics that make the product feel alive.',
    accent: 'green',
  },
  {
    title: 'Local-first persistence',
    description: 'Workflows, auth sessions, theme preferences, and account updates persist in the browser for an instant no-backend demo.',
    accent: 'yellow',
  },
  {
    title: 'Dual AI provider story',
    description: 'Show buyers and judges a resilient product narrative with Gemini and Featherless AI available inside one experience.',
    accent: 'cyan',
  },
  {
    title: 'Launch-oriented UX polish',
    description: 'Dedicated public pages, demo flows, strong CTAs, and clear value props make the app feel like a startup, not a prototype.',
    accent: 'purple',
  },
];

export const USE_CASES = [
  {
    title: 'Customer support triage',
    summary: 'Route inbound issues, summarize context with AI, and trigger the right follow-up without switching tools.',
  },
  {
    title: 'Lead qualification',
    summary: 'Collect inbound submissions, score them, personalize responses, and push high-intent leads into your CRM flow.',
  },
  {
    title: 'Internal ops automation',
    summary: 'Use workflows for recurring reporting, Slack alerts, approval routing, and AI-assisted decision support.',
  },
  {
    title: 'Developer incident response',
    summary: 'Listen to webhooks, filter severity, generate summaries, and notify the right team with clean, structured execution logs.',
  },
];

export const SPONSORS = [
  {
    name: 'Gemini AI',
    role: 'Primary generation engine',
    detail: 'Turns user prompts into workflow structure, reasoning, and assistive product copy.',
  },
  {
    name: 'Featherless AI',
    role: 'Open model fallback',
    detail: 'Gives the product a second AI path and a stronger reliability story during demos.',
  },
  {
    name: 'Stitch AI',
    role: 'Interface inspiration',
    detail: 'Influenced premium UI direction, layout thinking, and faster iteration on product presentation.',
  },
  {
    name: 'DevSwarm',
    role: 'Build workflow support',
    detail: 'Supported rapid iteration and multi-surface product assembly during the hackathon build.',
  },
  {
    name: 'gen.xyz',
    role: 'Launch identity',
    detail: 'Represents the path from hackathon build to public-facing product branding and launch presence.',
  },
];

export const STARTUPS = [
  {
    id: 'zapier',
    name: 'Zapier',
    logo: 'ZAPIER',
    tagline: 'Automation for mainstream SaaS operations',
    built: 'Popularized app-to-app automation with triggers, actions, and broad business connectivity.',
    angle: 'FlowForge feels lighter and more visual for users who want AI-assisted flow creation instead of a dense integration catalog first.',
  },
  {
    id: 'make',
    name: 'Make',
    logo: 'MAKE',
    tagline: 'Scenario-based automation with visual mapping',
    built: 'Brought a more visual operations style to multi-step automations and scenario modeling.',
    angle: 'FlowForge pushes further into prompt-driven workflow generation and an approachable launch story for AI-native teams.',
  },
  {
    id: 'n8n',
    name: 'n8n',
    logo: 'n8n',
    tagline: 'Developer-friendly open workflow automation',
    built: 'Made extensible workflow automation popular with self-hosting, custom nodes, and technical teams.',
    angle: 'FlowForge complements that world with a polished AI-first layer designed for faster onboarding and product demos.',
  },
  {
    id: 'pipedream',
    name: 'Pipedream',
    logo: 'PIPEDREAM',
    tagline: 'Code-friendly event workflows',
    built: 'Connected APIs, serverless steps, and event-driven automation for builders who want flexibility.',
    angle: 'FlowForge presents the same space through a more guided product shell, clearer marketing narrative, and visual workflow UX.',
  },
  {
    id: 'retool-ai',
    name: 'Retool AI',
    logo: 'RETOOL AI',
    tagline: 'Internal tools and AI-powered ops',
    built: 'Showed how AI layers can accelerate operations, internal tooling, and workflow-oriented product experiences.',
    angle: 'FlowForge narrows in on visual workflow building with a sharper automation identity and demo-ready public experience.',
  },
];

export const DEMO_STEPS = [
  { label: '1. Describe the outcome', detail: 'Type a natural-language request such as qualifying leads or routing incidents.' },
  { label: '2. Generate the flow', detail: 'AI proposes triggers, logic, and outputs as an editable visual workflow.' },
  { label: '3. Review and launch', detail: 'Inspect execution status, save the workflow, and refine it with templates or manual edits.' },
];
