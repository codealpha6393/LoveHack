# 🚀 FlowForge AI — Visual Workflow Automation Studio

> **LovHack Season 2 Submission** — Build a real product in 7 days.

FlowForge AI is a visual, AI-powered workflow automation studio that lets anyone build, test, and deploy intelligent automations using **plain English**. Think Zapier meets ChatGPT — but open, visual, and built in 7 days.

---

## 🎥 Demo Video

> [Watch the demo →](#) *(Add your Loom/YouTube link here)*

---

## 🧠 The Problem

- 80% of small businesses waste 10+ hrs/week on repetitive tasks
- Existing tools (Zapier, Make) are expensive and confusing
- AI has the power to make automation accessible — but nobody has built the bridge

## ✅ The Solution

A visual canvas where you **describe what you want in plain English**, and an AI agent builds the workflow, connects the tools and logic, and executes it — all in a beautiful, real-time interface.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **Dual AI Engine** | Gemini AI (primary) + Featherless AI (open-source alternative). Toggle between providers. |
| 🎨 **Visual Canvas Editor** | Drag-and-drop nodes, Bezier SVG connections, pan, zoom, and grid. |
| ⚡ **Real-time Execution** | Run workflows with animated status indicators and live execution logs. |
| 💾 **Workflow Persistence** | Save/load workflows to localStorage. Export/import as JSON. |
| ⚙️ **Node Configuration** | Click any node to configure its properties (endpoints, conditions, AI prompts, etc.). |
| 📊 **Live Dashboard** | Real execution history, success rates, and saved workflow management. |
| 📋 **Starter Templates** | Pre-built workflows: Email Auto-Responder, Slack Alert Pipeline, Data Sync, Customer Onboarding. |
| 🌓 **Dark/Light Mode** | Full theme toggle with premium glassmorphism aesthetic. |
| ⌨️ **Keyboard Shortcuts** | `Ctrl+S` save, `Delete` remove node, mouse wheel zoom. |
| 📤 **Export & Import** | Download workflows as JSON, import from file, bulk export from Settings. |

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────┐
│              FlowForge AI                   │
├──────────┬──────────┬──────────┬───────────┤
│ Landing  │ Canvas   │Dashboard │ AI Panel  │
│  Page    │ Editor   │ & Logs   │(Assistant)│
├──────────┴──────────┴──────────┴───────────┤
│            Workflow Engine (JS)              │
│  ┌──────────┐ ┌──────────┐ ┌─────────────┐│
│  │ Node Mgr │ │ Edge Mgr │ │ Exec Engine ││
│  └──────────┘ └──────────┘ └─────────────┘│
├────────────────────────────────────────────┤
│            AI Integration Layer             │
│  ┌──────────────┐  ┌────────────────────┐  │
│  │  Gemini AI   │  │  Featherless AI    │  │
│  │  (primary)   │  │  (open-source alt) │  │
│  └──────────────┘  └────────────────────┘  │
├────────────────────────────────────────────┤
│        localStorage / IndexedDB             │
└────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Vanilla JS** | Core application logic (zero framework overhead) |
| **Vite** | Lightning-fast dev server and build tool |
| **CSS** | Hand-crafted design system with glassmorphism and animations |
| **Google Gemini AI** | Primary AI engine for workflow generation (SDK: `@google/generative-ai`) |
| **Featherless AI** | Open-source AI alternative via HuggingFace-compatible API |
| **Stitch AI (MCP)** | UI design screen generation via Google MCP during development |

---

## 🏆 Sponsor Tool Usage

| Sponsor | How We Used It |
|---|---|
| **Gemini AI** | Primary AI engine: natural language → workflow node generation with model auto-fallback |
| **Featherless AI** | Alternative AI backend using `Qwen2.5-Coder-32B` via HuggingFace inference API |
| **Stitch AI** | Generated UI screen designs during development via Google MCP tools |
| **DevSwarm** | Collaborative development environment during hackathon build |
| **gen.xyz** | Domain registration for deployment |
| **n8n** | Architectural inspiration for workflow node types and execution model |
| **Nodebase** | Local data persistence layer inspiration |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/flowforge-ai.git
cd flowforge-ai

# Install
npm install

# Run dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Configuration

1. Navigate to **Settings** in the sidebar
2. Add your **Gemini API Key** (get one free at [aistudio.google.com](https://aistudio.google.com/app/apikey))
3. Optionally add a **Featherless AI API Key** (from [featherless.ai](https://featherless.ai))
4. Select your preferred AI provider

---

## 📂 Project Structure

```
LoveHack/
├── index.html              # Entry point
├── style.css               # Full design system (2200+ lines)
├── package.json            # Dependencies
├── .env.example            # API key template
├── LICENSE                 # MIT License
├── README.md               # This file
├── FEATURES.md             # Detailed feature guide
├── src/
│   ├── main.js             # SPA router, theme toggle, app shell
│   ├── state.js            # Global state, workflow CRUD, exec history
│   ├── icons.js            # Inline SVG icon library
│   ├── ai/
│   │   └── panel.js        # Dual AI panel (Gemini + Featherless)
│   ├── canvas/
│   │   └── canvas.js       # Visual editor with save/load/export
│   ├── dashboard/
│   │   └── dashboard.js    # Live analytics from real executions
│   └── pages/
│       ├── landing.js      # Landing page
│       ├── templates.js    # Pre-built workflow templates
│       └── settings.js     # AI config, export/import, data mgmt
```

---

## 📊 Judging Criteria Alignment

| Criteria | Weight | Our Approach |
|---|---|---|
| **Execution** | 50% | Working canvas, real dual AI, smooth UX, 6+ sponsor tools |
| **Presentation** | 30% | Premium dark-mode UI, clear demo, smooth animations |
| **Idea** | 20% | Solves a real problem: automation is too hard for non-devs |

---

## 📝 License

MIT — see [LICENSE](LICENSE)

---

**Built with ❤️ for LovHack Season 2**
