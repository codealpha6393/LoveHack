# 📘 FlowForge AI — Complete Usage Guide & Use Cases

Everything you need to know to use FlowForge AI, from first launch to advanced features.

---

## 🚀 Getting Started

### Step 1: Install & Run
```bash
cd LoveHack
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 2: Set Up API Keys
1. Click **Settings** in the sidebar
2. Enter your **Gemini API Key** (free from [aistudio.google.com](https://aistudio.google.com/app/apikey))
3. Optionally enter a **Featherless AI API Key** (from [featherless.ai](https://featherless.ai))
4. Choose your preferred AI provider (Gemini or Featherless)

### Step 3: Build Your First Workflow
- **Option A — Manual:** Drag nodes from the palette onto the canvas. Connect them via ports.
- **Option B — AI:** Click **"AI Generate"**, type: *"When a new email arrives, check if it's spam, then auto-reply and log to database"* → AI builds the workflow instantly.

---

## 🎨 UI Overview

| Area | What It Does |
|---|---|
| **Sidebar** | Navigation: Canvas, Dashboard, Templates, Settings |
| **Node Palette** | Drag node types: Trigger, Action, Condition, AI Agent, Output |
| **Canvas** | Visual workspace — drag, connect, zoom, pan |
| **Toolbar** | Save, Export, Import, Clear, AI Generate, Run |
| **AI Panel** | Chat with AI, analyze/explain/optimize workflows |
| **Exec Log** | Real-time execution output (bottom of canvas) |
| **Dashboard** | Analytics from real workflow runs |

---

## 🔧 Feature-by-Feature Guide

### 1. Drag & Drop Nodes
- Drag any node from the left palette onto the canvas
- **Node types:**
  - ⚡ **Trigger** — Starts the workflow (webhook, cron schedule)
  - ▶️ **Action** — HTTP request, send email, etc.
  - 🔀 **Condition** — If/else branching logic
  - 🤖 **AI Agent** — Gemini or Featherless AI processing step
  - ☁️ **Output** — Slack notify, database write, email

### 2. Connect Nodes
1. Click the **right port (output)** of node A
2. Click the **left port (input)** of node B
3. A Bezier curve connection appears

### 3. Configure Nodes
- **Click** a node to open its config panel (bottom-right)
- Edit label, description, and type-specific fields:
  - Trigger: URL/Cron expression
  - Action: Endpoint URL, HTTP Method
  - Condition: JS expression
  - AI Agent: Custom prompt
  - Output: Destination (Slack, email, DB)
- Click **"Apply Changes"**

### 4. AI Assistant (Chat Panel)
Click **"AI Generate"** on the toolbar to open. Features:
- **Generate Workflows** — Type in plain English, AI creates nodes
- **Analyze Workflow** — Share your canvas with AI for analysis
- **Explain** — AI explains what each node does step-by-step
- **Optimize** — AI suggests improvements and can regenerate nodes
- **Provider Toggle** — Switch between Gemini and Featherless AI live
- **Close** — Click the ✕ button in the panel header

### 5. Run Workflows
- Click **"Run"** in the toolbar
- Each node executes sequentially with animated status indicators:
  - 🟡 Yellow = Running
  - 🟢 Green = Success
  - 🔴 Red = Failed
- Execution log shows real-time timestamps
- Results are saved to Dashboard history automatically

### 6. Save / Load / Export / Import
- **Ctrl+S** or click **Save** → Saves to browser localStorage
- Saved workflows appear in the left sidebar under "Saved Workflows"
- **Export** → Downloads as `.json` file
- **Import** → Upload a `.json` file to load a workflow
- **Settings > Export All** → Bulk export all saved workflows

### 7. Zoom & Pan
- **Mouse wheel** → Zoom in/out
- **Click + drag** on empty canvas → Pan
- **Zoom controls** (top-right) → +, −, Reset, percentage display

### 8. Keyboard Shortcuts
| Key | Action |
|---|---|
| `Ctrl + S` | Save workflow |
| `Delete` | Remove selected node |
| `Mouse wheel` | Zoom in/out |
| `Click + drag` on canvas | Pan |

### 9. Dark / Light Mode
- Toggle via button in the sidebar footer
- Theme persists across sessions

### 10. Dashboard
- **Total Executions** — Live count from real runs
- **Saved Workflows** — Count of saved workflows
- **Success Rate** — Calculated from real execution data
- **Execution History** — Timeline of all runs with time-ago
- **Saved Workflows List** — Quick access to all saved workflows

### 11. Templates
4 pre-built templates ready to use:
- 📧 **Email Auto-Responder** — 4 nodes (Trigger → AI → Send → Log)
- 🔔 **Slack Alert Pipeline** — 3 nodes (Webhook → Filter → Notify)
- 🗄️ **Data Sync Pipeline** — 4 nodes (Cron → API → Transform → DB)
- 👤 **Customer Onboarding** — 5 nodes (Signup → Validate → Profile → Personalize → Email)

### 12. Settings
- **AI Provider** — Choose Gemini or Featherless as default
- **API Keys** — Enter/update Gemini and Featherless keys
- **Model Info** — See the active model chain (Gemini) or model (Featherless)
- **Data Management** — Export all, import, or clear all data

---

## 📋 Real-World Use Cases

### Use Case 1: Automated Customer Support
**Problem:** Support team is overwhelmed with repetitive questions.
**Workflow:**
1. **Trigger** — Webhook receives support ticket
2. **AI Agent (Gemini)** — Analyze ticket, classify severity & intent
3. **Condition** — If severity is "low", auto-reply; else escalate
4. **Action** — Send auto-reply via email API
5. **Output** — Log ticket + AI response to database

### Use Case 2: Social Media Content Pipeline
**Problem:** Need to post daily content across platforms.
**Workflow:**
1. **Trigger** — Cron schedule (daily at 9 AM)
2. **AI Agent (Featherless)** — Generate post ideas based on trending topics
3. **Action** — Format content for each platform
4. **Output** — Post to Slack #marketing channel for approval
5. **Output** — Log to content calendar DB

### Use Case 3: E-commerce Order Processing
**Problem:** Manual order verification takes too long.
**Workflow:**
1. **Trigger** — Webhook from Shopify/Stripe
2. **Condition** — Check payment status = "confirmed"
3. **Action** — Call inventory API to check stock
4. **Condition** — If in stock → fulfill; else → backorder
5. **AI Agent** — Generate personalized confirmation email
6. **Output** — Send confirmation email

### Use Case 4: Data Pipeline with AI Enrichment
**Problem:** Raw data needs to be cleaned and enriched before dashboarding.
**Workflow:**
1. **Trigger** — Schedule (hourly)
2. **Action** — Fetch data from REST API
3. **AI Agent** — Normalize, deduplicate, and categorize data
4. **Condition** — Filter out invalid records
5. **Output** — Write clean data to database

### Use Case 5: Incident Response
**Problem:** Production alerts need immediate triage.
**Workflow:**
1. **Trigger** — Webhook from monitoring tool (PagerDuty/Grafana)
2. **AI Agent** — Analyze error logs, suggest root cause
3. **Condition** — Critical? → Page on-call, Low → create ticket
4. **Action** — Send Slack message to #incidents
5. **Output** — Create Jira/Linear ticket automatically

---

## 🏆 Hackathon Sponsor Tool Usage

| Sponsor Tool | How It's Used in FlowForge AI |
|---|---|
| **Gemini AI** | Primary AI engine — generates workflows from text prompts, analyzes existing workflows, explains steps, optimizes pipelines. Uses model fallback chain: `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-flash-latest` → `gemini-pro-latest` |
| **Featherless AI** | Alternative open-source AI backend using `Qwen2.5-Coder-32B-Instruct` via HuggingFace-compatible REST API. Users can switch providers anytime. |
| **Stitch AI** | Used during development to generate UI screen designs via Google MCP tools. Design system inspiration for the glassmorphism theme. |
| **DevSwarm** | Collaborative development environment used during the hackathon build week. |
| **gen.xyz** | Domain registration for the deployment URL (flowforge.xyz) |
| **n8n** | Architectural reference — our node types, execution model, and workflow concept are inspired by n8n's open-source workflow engine |
| **Nodebase** | Inspired our local-first persistence model using localStorage (data stays on user's device) |
| **Miro** | Visual canvas concept — our drag-and-drop, zoom, pan interface draws from collaborative whiteboard patterns |
| **CREAO** | Builder tool philosophy — FlowForge AI is designed as a no-code builder for workflow automation |
| **CodeCrafters** | Coding craft principles applied — clean architecture, modular JS, zero-framework approach |

---

## 🏗️ Technical Architecture

```
┌────────────────────────────────────────────────┐
│                  FlowForge AI                   │
├─────────┬──────────┬───────────┬───────────────┤
│ Landing │  Canvas  │ Dashboard │  AI Assistant  │
│  Page   │  Editor  │  & Logs   │   (Chat)      │
├─────────┴──────────┴───────────┴───────────────┤
│              Workflow Engine (JS)                │
│  ┌──────────┐ ┌──────────┐ ┌────────────────┐  │
│  │ Node Mgr │ │ Edge Mgr │ │  Exec Engine   │  │
│  └──────────┘ └──────────┘ └────────────────┘  │
├─────────────────────────────────────────────────┤
│             AI Integration Layer                 │
│  ┌───────────────┐  ┌─────────────────────────┐ │
│  │   Gemini AI   │  │   Featherless AI        │ │
│  │  (SDK direct) │  │  (REST via HF endpoint) │ │
│  └───────────────┘  └─────────────────────────┘ │
├─────────────────────────────────────────────────┤
│       Persistence (localStorage / JSON)          │
└─────────────────────────────────────────────────┘
```

---

## ❓ FAQ

**Q: Do I need an API key to use the app?**
A: The canvas, templates, save/load, and dashboard work without an API key. You only need an API key for the AI Generate/Analyze features.

**Q: Is my data stored on a server?**
A: No. Everything is stored in your browser's localStorage. Nothing is sent to any server except AI prompts (to Gemini or Featherless API).

**Q: Can I use both Gemini and Featherless?**
A: Yes! Toggle between them in Settings or directly in the AI panel header.

**Q: What happens when I "Run" a workflow?**
A: Each node executes in sequence with simulated processing time. Status indicators light up, and the execution is logged to your Dashboard for analytics.

**Q: Can the AI analyze my running workflow?**
A: Yes! Click "Analyze Workflow" in the AI panel — it sends your current canvas state to the AI for real-time analysis, explanation, or optimization suggestions.
