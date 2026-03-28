<p align="center">
  <h1 align="center">🚀 FlowForge AI — Visual Workflow Automation Studio</h1>
  <p align="center">
    <strong>Describe. Build. Automate.</strong><br>
    An AI-powered, no-code workflow builder that turns plain English into visual automations.
  </p>
  <p align="center">
    <a href="#-demo-video">Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-sponsor-tool-usage">Sponsor Tools</a>
  </p>
</p>

> **LovHack Season 2 Submission** — Built from scratch in 7 days.

---

## 🧠 The Problem

Small businesses and solo developers waste **10+ hours/week** on repetitive digital tasks — copying data between apps, sending follow-ups, triaging alerts. Existing automation tools like Zapier and Make are powerful but:

- **Expensive** — Paid plans start at $20+/month for basic automations.
- **Complex** — Non-technical users struggle with their configuration UIs.
- **Opaque** — You can't "see" your automation logic at a glance.

**AI should make automation accessible to everyone, not just developers.**

## ✅ The Solution: FlowForge AI

FlowForge AI is an **open-source, visual workflow automation studio**. Users describe what they want to automate in **plain English**, and a dual AI engine (Google Gemini + Featherless AI) instantly generates a visual, editable workflow on an interactive canvas.

**How it works in 3 steps:**

1.  **Describe** → Tell the AI what you want: *"When a new email arrives, check if it's spam, auto-reply, and log it."*
2.  **Build** → The AI generates a visual workflow with connected nodes on a drag-and-drop canvas. Tweak and configure every node.
3.  **Execute** → Click "Run" and watch each node execute in real-time with animated status indicators and live logs.

---

## 🎥 Demo Video

> [▶ Watch the Demo →](#) *(Add your Loom/YouTube link here)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **Dual AI Engine** | Google Gemini (primary) + Featherless AI (open-source). Toggle between providers anytime. |
| 🎨 **Visual Canvas Editor** | Drag-and-drop nodes, Bezier SVG connections, pan, zoom, and snap-to-grid. |
| ⚡ **Real-time Execution** | Run workflows with animated node-by-node status indicators and a live execution log. |
| 💾 **Workflow Persistence** | Save/load workflows to `localStorage`. Export/import as JSON. |
| ⚙️ **Node Configuration** | Click any node to configure its properties (endpoints, conditions, AI prompts, etc.). |
| 📊 **Live Dashboard** | Real execution history, success rates, and saved workflow management. |
| 📋 **Starter Templates** | 4 pre-built workflows: Email Auto-Responder, Slack Alert Pipeline, Data Sync, Customer Onboarding. |
| 🌓 **Dark/Light Mode** | Full theme toggle with a premium glassmorphism aesthetic. |
| ⌨️ **Keyboard Shortcuts** | `Ctrl+S` save, `Delete` remove node, mouse wheel zoom. |
| 📤 **Export & Import** | Download workflows as JSON, import from file, bulk export all from Settings. |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────┐
│                   FlowForge AI                    │
├──────────┬───────────┬───────────┬───────────────┤
│ Landing  │  Canvas   │ Dashboard │  AI Assistant  │
│  Page    │  Editor   │  & Logs   │   (Chat)       │
├──────────┴───────────┴───────────┴───────────────┤
│               Workflow Engine (JS)                 │
│  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │
│  │ Node Mgr │  │ Edge Mgr │  │  Exec Engine   │  │
│  └──────────┘  └──────────┘  └────────────────┘  │
├──────────────────────────────────────────────────┤
│              AI Integration Layer                  │
│  ┌───────────────┐    ┌────────────────────────┐  │
│  │   Gemini AI   │    │   Featherless AI       │  │
│  │  (SDK direct) │    │  (REST via HF API)     │  │
│  └───────────────┘    └────────────────────────┘  │
├──────────────────────────────────────────────────┤
│        Persistence (localStorage / JSON)           │
└──────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Vanilla JavaScript** | Core application logic — zero framework overhead for maximum performance. |
| **Vite** | Lightning-fast dev server and optimized production builds. |
| **CSS (Hand-crafted)** | Custom design system with glassmorphism, gradients, and micro-animations (2,200+ lines). |
| **Google Gemini AI** | Primary AI engine via the official `@google/generative-ai` SDK. Model fallback chain: `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-flash-latest`. |
| **Featherless AI** | Open-source AI alternative using `Qwen2.5-Coder-32B-Instruct` via HuggingFace-compatible REST API. |
| **Inter & JetBrains Mono** | Typography from Google Fonts for a premium, readable interface. |

---

## 🏆 Sponsor Tool Usage

| Sponsor | How We Used It |
|---|---|
| **Gemini AI** | Primary AI engine — natural language → workflow node generation with automatic model fallback for quota resilience. Powers "Generate", "Analyze", "Explain", and "Optimize" features in the AI panel. |
| **Featherless AI** | Alternative open-source AI backend using `Qwen2.5-Coder-32B-Instruct`. Users can switch between Gemini and Featherless in one click, providing AI redundancy and choice. |
| **Stitch AI (MCP)** | Used during development to generate high-fidelity UI screen designs via Google MCP tools. Inspired the glassmorphism design system. |
| **DevSwarm** | Collaborative development environment used throughout the hackathon build week. |
| **gen.xyz** | Domain registration for the production deployment URL. |
| **n8n** | Architectural reference — our node types (Trigger, Action, Condition, AI Agent, Output), execution model, and workflow concept are inspired by n8n's open-source workflow engine. |
| **Nodebase** | Inspired our local-first persistence model using `localStorage` — all user data stays on the client device. |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **npm**

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/flowforge-ai.git
cd flowforge-ai

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Configuration

1.  Navigate to **Settings** in the sidebar.
2.  Enter your **Gemini API Key** → Get one free at [aistudio.google.com](https://aistudio.google.com/app/apikey).
3.  *(Optional)* Enter a **Featherless AI API Key** → Get one at [featherless.ai](https://featherless.ai).
4.  Select your preferred AI provider and start building.

> **Note:** The canvas, templates, save/load, and dashboard work **without** an API key. You only need a key for the AI generation features.

---

## 📂 Project Structure

```
LoveHack/
├── index.html              # Entry point
├── style.css               # Main design system (dark mode)
├── light-theme.css         # Light mode theme overrides
├── package.json            # Dependencies & scripts
├── .env.example            # API key template
├── LICENSE                 # MIT License
├── README.md               # This file
├── FEATURES.md             # Detailed feature guide
├── USE_CASES.md            # Real-world use cases & full usage guide
└── src/
    ├── main.js             # SPA router, theme toggle, app shell
    ├── app.js              # Application initialization
    ├── router.js           # Client-side routing
    ├── state.js            # Global state, workflow CRUD, exec history
    ├── icons.js            # Inline SVG icon library
    ├── ai/
    │   └── panel.js        # Dual AI panel (Gemini + Featherless)
    ├── canvas/
    │   └── canvas.js       # Visual editor with save/load/export
    ├── dashboard/
    │   └── dashboard.js    # Live analytics from real executions
    └── pages/
        ├── landing.js      # Landing page with hero & sponsors
        ├── templates.js    # Pre-built workflow templates
        └── settings.js     # AI config, export/import, data mgmt
```

---

## 📊 Judging Criteria Alignment

| Criteria | Weight | Our Approach |
|---|---|---|
| **Execution** | 50% | Fully working canvas with real dual AI integration, smooth UX, 7+ sponsor tool integrations, and local persistence. |
| **Presentation** | 30% | Premium glassmorphism UI with dark/light mode, animated gradients, micro-animations, and a polished landing page. |
| **Idea** | 20% | Solves a real problem: workflow automation is too expensive and complex for non-developers. FlowForge AI makes it visual, AI-driven, and free. |

---

## ❓ FAQ

**Q: Do I need an API key to use the app?**
A: No. The canvas, templates, save/load, and dashboard all work without a key. You only need one for the AI-powered features.

**Q: Is my data stored on a server?**
A: No. Everything is stored in your browser's `localStorage`. Nothing is sent to any server except AI prompts (to the Gemini or Featherless API).

**Q: Can I use both AI providers?**
A: Yes! Switch between Gemini and Featherless instantly via the toggle in the AI panel or in Settings.

**Q: What happens when I "Run" a workflow?**
A: Each node executes in sequence with simulated processing. Status indicators animate live, and the run is logged to your Dashboard for analytics.

---

## 📝 License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  <strong>Built with ❤️ for LovHack Season 2</strong>
</p>
