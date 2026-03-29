# 🏆 FlowForge AI — Hackathon Submission

> **LovHack Season 2** — Build a real product in 7 days.

---

## 1. Project Description

### What We Built

**FlowForge AI** is a visual, AI-powered workflow automation studio that lets anyone build, test, and deploy intelligent automations using **plain English**. It is an open-source, browser-based application with zero backend — everything runs on the client.

### The Problem It Solves

Workflow automation is broken for non-developers. Existing tools like Zapier and Make are expensive ($20+/month), have steep learning curves, and are not visually intuitive. Meanwhile, millions of small businesses and solo creators waste **10+ hours per week** on repetitive digital tasks — copying data, triaging inboxes, sending follow-ups.

**AI has the power to make automation accessible to everyone — FlowForge AI is the bridge.**

### How It Works

FlowForge AI works in a simple 3-step loop:

1.  **Describe** — The user opens the AI panel and describes a workflow in plain English.
    > *Example: "When a customer submits a form, validate the data, use AI to generate a personalized welcome email, and log the event to a database."*

2.  **Build** — The AI engine (Google Gemini or Featherless AI) parses the description and generates a visual workflow of connected nodes on an interactive drag-and-drop canvas. The user can then:
    - Rearrange, add, or delete nodes.
    - Click any node to configure its properties (endpoint URLs, conditions, AI prompts).
    - Connect nodes with Bezier curves by clicking output → input ports.

3.  **Execute** — The user clicks "Run". Each node executes in sequence with animated status indicators (🟡 Running → 🟢 Success / 🔴 Failed) and a live execution log. The run is automatically saved to the Dashboard for analytics.

### Key Differentiators

| | Zapier / Make | FlowForge AI |
|---|---|---|
| **Cost** | $20+/month | Free & Open Source |
| **AI Integration** | Add-on | Core feature — AI builds the entire workflow |
| **Visual Editing** | List-based | Full drag-and-drop canvas with zoom & pan |
| **Data Privacy** | Cloud-stored | 100% local (`localStorage`) — nothing leaves the browser |
| **AI Providers** | Single (if any) | Dual: Gemini + Featherless AI with one-click toggle |

---

## 2. Demo Video Script

> **Recommended length:** 2–3 minutes. Below is the step-by-step script to speak while screen-recording.

---

### 🎬 SCENE 1: The Hook (0:00 – 0:20)

**[Show the Landing Page]**

> *"Hi, I'm [Your Name], and this is **FlowForge AI** — the visual workflow automation studio where you describe what you want to automate in plain English, and AI builds it for you in seconds.*
>
> *We built this in 7 days for LovHack Season 2. Let me show you how it works."*

**[Click "Launch AI Canvas" to enter the app]**

---

### 🎬 SCENE 2: AI-Powered Generation (0:20 – 1:00)

**[On the Canvas page, click "AI Generate" to open the AI panel]**

> *"Let's say I want to build a customer support automation. I'll just type it in plain English."*

**[Type into the AI panel:]** *"When a support ticket arrives via webhook, use AI to classify its severity, if it's low priority auto-reply with a helpful message, otherwise escalate to the team via Slack and log the ticket to the database."*

**[Click Send / Generate]**

> *"And just like that, FlowForge AI uses **Google Gemini** to generate a full workflow — a Trigger node, an AI Agent node, a Condition for severity branching, an Action to send a reply, and an Output to log it. All connected and ready to go."*

**[Pan and zoom the canvas to show the generated nodes and connections]**

---

### 🎬 SCENE 3: Configuration & Execution (1:00 – 1:40)

**[Click on a node to show the Config Panel]**

> *"I can click any node to configure it — set webhook URLs, edit AI prompts, change condition logic. Everything is customizable."*

**[Close the config panel, then click "Run"]**

> *"Now let's run it. Watch — each node executes in real-time with animated status indicators. Green means success."*

**[Wait for execution to complete, show the execution log at the bottom]**

> *"The execution log shows every step with timestamps. And all of this is automatically saved to the Dashboard."*

---

### 🎬 SCENE 4: Dashboard & Features (1:40 – 2:20)

**[Navigate to Dashboard via the sidebar]**

> *"The Dashboard shows live analytics — total executions, success rate, and a full execution history. This is real data from actual runs, not mocked."*

**[Navigate to Templates]**

> *"We also have pre-built templates — Email Auto-Responder, Slack Alert Pipeline, Data Sync, and Customer Onboarding. One click to load them onto the canvas."*

**[Navigate to Settings, show the AI Provider toggle and the Featherless option]**

> *"And here's a killer feature — you can switch between **Gemini AI** and **Featherless AI** in one click. Featherless runs the open-source `Qwen2.5-Coder-32B` model, so you always have an alternative AI provider."*

---

### 🎬 SCENE 5: The Close (2:20 – 2:40)

**[Toggle dark/light mode to show both themes]**

> *"FlowForge AI is fully open-source, runs entirely in the browser with zero backend, uses **7+ sponsor tools**, and was built from scratch in 7 days.*
>
> *This is FlowForge AI — automation for everyone. Thank you."*

**[End on the Landing Page hero section]**

---

## 3. Tools Used

### Core Technologies

| Technology | Purpose |
|---|---|
| **Vanilla JavaScript (ES Modules)** | Core application logic — zero framework overhead |
| **Vite 5** | Dev server & production build tool |
| **CSS (Hand-crafted, 2200+ lines)** | Complete design system with glassmorphism, gradients, and micro-animations |
| **HTML5** | Semantic entry point and structure |
| **Google Fonts (Inter, JetBrains Mono)** | Premium typography |

### Sponsor Tools

| Sponsor Tool | Integration Details |
|---|---|
| **Google Gemini AI** | Primary AI engine via `@google/generative-ai` SDK. Powers workflow generation, analysis, explanation, and optimization. Uses model auto-fallback chain: `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-flash-latest` → `gemini-pro-latest`. |
| **Featherless AI** | Open-source AI alternative using `Qwen2.5-Coder-32B-Instruct` via HuggingFace-compatible REST endpoint. Users can switch between Gemini and Featherless in one click. |
| **Stitch AI (Google MCP)** | Used during development to generate high-fidelity UI screen designs. Inspired the glassmorphism design system. |
| **DevSwarm** | Collaborative development environment used during the 7-day build week. |
| **gen.xyz** | Domain registration for the production deployment URL. |
| **n8n** | Architectural reference for node types (Trigger, Action, Condition, AI Agent, Output) and the sequential execution model. |
| **Nodebase** | Inspired the local-first data persistence model using `localStorage`. |

---

*Built with ❤️ for LovHack Season 2*
