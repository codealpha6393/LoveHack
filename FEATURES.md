# 📖 FlowForge AI — Feature Guide

A complete walkthrough of every feature in FlowForge AI.

---

## 1. Landing Page

The landing page is the first thing users see. It includes:
- **Hero Section** — Animated gradient background orbs, glowing headline, and CTA buttons
- **How It Works** — 3-step guide (Describe → Build → Execute)
- **Feature Cards** — 6 cards showcasing Dual AI, Visual Canvas, Execution, Templates, Save/Export, and Dashboard
- **Sponsor Section** — Cards highlighting Gemini AI, Featherless AI, Stitch AI, and DevSwarm with attribution pills for other sponsors
- **Call to Action** — Bottom section encouraging immediate use
- **Footer** — LovHack Season 2 attribution

**Navigate:** Click "Launch AI Canvas" or "Get Started" to enter the app.

---

## 2. Canvas Editor

The core of FlowForge AI. A visual drag-and-drop workflow builder.

### Adding Nodes
- **Drag & Drop** — Drag any node type from the left sidebar palette onto the canvas
- **AI Generation** — Click "AI Generate" to describe a workflow in plain English; AI creates nodes automatically

### Node Types
| Type | Icon | Purpose | Configurable Fields |
|---|---|---|---|
| **Trigger** | ⚡ | Starts a workflow (webhook, schedule) | Trigger URL / Cron expression |
| **Action** | ▶ | Performs an operation (email, HTTP) | Endpoint URL, HTTP Method |
| **Condition** | 🔀 | Evaluates a rule (if/else) | Condition expression |
| **AI Agent** | 🤖 | AI-powered step (Gemini/Featherless) | AI Prompt |
| **Output** | ☁️ | Sends results (Slack, email, DB) | Destination |

### Connecting Nodes
1. Click an **output port** (right side) of a source node
2. Click an **input port** (left side) of a target node
3. A Bezier curve connection is drawn

### Configuring Nodes
- **Single click** a node to select it and open the configuration panel
- **Double click** to open the config panel directly
- Edit display name, description, and type-specific properties
- Click "Apply Changes" to save

### Executing Workflows
- Click **"Run"** to simulate execution
- Each node lights up sequentially with status animations
- Execution log at the bottom shows real-time timestamps
- After completion, results are saved to your Dashboard history

### Saving & Loading
- **Ctrl+S** or click "Save" — Saves the current workflow with its title
- Saved workflows appear in the sidebar under "Saved Workflows"
- Click any saved workflow to load it back onto the canvas

### Export & Import
- **Export** — Downloads the current workflow as a `.json` file
- **Import** — Click "Import" and select a `.json` file to load a workflow

### Zoom & Pan
- **Mouse wheel** — Zoom in/out
- **Click + drag** on empty canvas — Pan around
- **Zoom controls** (top-right) — +/−/Reset buttons with percentage display

### Keyboard Shortcuts
| Shortcut | Action |
|---|---|
| `Ctrl + S` | Save workflow |
| `Delete` | Delete selected node |
| `Mouse wheel` | Zoom in/out |
| `Click + drag` | Pan canvas |

---

## 3. AI Assistant Panel

Click **"AI Generate"** on the canvas toolbar to open the AI panel.

### How It Works
1. Type a workflow description in plain English (e.g., "When a form is submitted, validate the data and send a confirmation email")
2. The AI generates a JSON array of workflow nodes
3. Nodes are automatically placed on the canvas with connections

### AI Providers
- **Gemini AI** (default) — Uses Google's Gemini models with auto-fallback: `gemini-2.5-flash` → `gemini-2.0-flash` → `gemini-flash-latest`
- **Featherless AI** — Open-source alternative using `Qwen2.5-Coder-32B-Instruct` via the Featherless AI API

### Switching Providers
- Click the **provider badge** in the panel header to toggle between Gemini and Featherless
- Or change the default in **Settings > AI Provider**

---

## 4. Dashboard

Displays **real data** from your actual workflow executions.

### Stats Cards
- **Total Executions** — Number of times you've run workflows
- **Saved Workflows** — Count of saved workflows in your library
- **Success Rate** — Percentage of successful executions

### Execution History
- Shows each run with: workflow title, node count, duration, status (success/failed), and timestamp
- Data persists across sessions via localStorage

### Saved Workflows
- Lists all saved workflows with node and connection counts
- Click any workflow to navigate to the canvas and load it

---

## 5. Templates

Pre-built workflow templates to get started quickly.

| Template | Nodes | Category |
|---|---|---|
| Email Auto-Responder | 4 | Productivity |
| Slack Alert Pipeline | 3 | Monitoring |
| Data Sync Pipeline | 4 | Data |
| Customer Onboarding | 5 | CRM |

Click "Use Template →" to load the template onto the canvas with pre-connected nodes.

---

## 6. Settings

### AI Provider
- Toggle between **Gemini** and **Featherless AI** as the default AI engine

### Gemini Configuration
- Enter your Gemini API key
- View the model fallback chain

### Featherless AI Configuration
- Enter your Featherless AI API key
- Displays the active open-source model

### Data Management
- **Export All Workflows** — Download all saved workflows as a single JSON
- **Import Workflows** — Load workflows from an exported JSON file
- **Clear All Data** — Reset everything (workflows, history, API keys)

### About
- Version info, technology stack, and hackathon sponsor attributions

---

## 7. Dark/Light Mode

Toggle the theme using the button in the sidebar footer. The theme persists across sessions.

---

## 8. Technical Details

### State Management
- All state is managed via a central `state.js` module
- Workflows, execution history, API keys, and theme are persisted to `localStorage`

### AI Integration
- **Gemini**: Uses the official `@google/generative-ai` SDK with automatic model fallback for quota issues
- **Featherless AI**: Direct REST API calls to the HuggingFace-compatible Featherless endpoint

### No External Frameworks
- Zero UI frameworks (no React, Vue, Svelte)
- Hand-crafted CSS design system with glassmorphism, gradients, and micro-animations
- Inline SVG icon system (no external icon libraries)
