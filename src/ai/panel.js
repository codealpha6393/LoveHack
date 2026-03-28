import { svgIcon } from '../icons.js';
import { state, saveState } from '../state.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

let provider = state.aiProvider || 'gemini';
let chatHistory = [];

// ── Get current workflow data from canvas (for workflow-aware chat)
function getCanvasWorkflowJSON() {
  try {
    // Import canvas data dynamically
    const canvasModule = window.__flowforge_canvas;
    if (canvasModule && canvasModule.nodes && canvasModule.nodes.length > 0) {
      return {
        nodes: canvasModule.nodes.map(n => ({ id: n.id, type: n.type, label: n.subLabel, desc: n.desc, config: n.config })),
        connections: canvasModule.connections.map(c => ({ from: c.from, to: c.to })),
      };
    }
  } catch (e) { }
  return null;
}

export function renderAIPanel(container, onGenerate) {
  provider = state.aiProvider || 'gemini';

  container.innerHTML = `
    <div class="ai-panel">
      <div class="ai-panel-header">
        <div class="ai-panel-title">
          ${svgIcon('bot')}
          <h2>AI Assistant</h2>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="ai-provider-toggle" id="ai-toggle-provider" title="Switch AI Provider">
            <span class="ai-badge" id="ai-badge">${provider === 'gemini' ? 'GEMINI' : 'FEATHERLESS'}</span>
          </button>
          <button class="btn btn-ghost btn-sm" id="ai-close-btn" title="Close AI Panel" style="padding:4px;min-width:24px;">
            ${svgIcon('x')}
          </button>
        </div>
      </div>

      <!-- Action bar: workflow-aware features -->
      <div class="ai-action-bar" style="display:flex;gap:6px;padding:8px 14px;border-bottom:1px solid rgba(255,255,255,0.06);">
        <button class="btn btn-secondary btn-sm" id="ai-share-wf" title="Send current workflow to AI for analysis">
          ${svgIcon('workflow')} Analyze Workflow
        </button>
        <button class="btn btn-secondary btn-sm" id="ai-explain-btn" title="Ask AI what this workflow does">
          ${svgIcon('bot')} Explain
        </button>
        <button class="btn btn-secondary btn-sm" id="ai-optimize-btn" title="Ask AI to optimize workflow">
          ${svgIcon('sparkles')} Optimize
        </button>
      </div>

      <div class="ai-messages" id="ai-messages">
        <div class="ai-message ai">
          <div class="ai-message-avatar ai">${svgIcon('bot')}</div>
          <div class="ai-message-bubble">
            👋 Hi! I'm powered by <strong>${provider === 'gemini' ? 'Gemini' : 'Featherless AI'}</strong>. I can:
            <br/>• <strong>Generate workflows</strong> from plain English
            <br/>• <strong>Analyze</strong> your current canvas workflow
            <br/>• <strong>Explain</strong> what each node does
            <br/>• <strong>Optimize</strong> your workflow for better performance
            <br/><br/>Try: <em>"Build an email pipeline that checks spam, classifies, and auto-replies."</em>
          </div>
        </div>
      </div>

      <div class="ai-input-area">
        <div class="ai-input-wrap">
          <textarea id="ai-textarea" class="ai-textarea" placeholder="Describe your workflow..." rows="2"></textarea>
          <button class="ai-send-btn" id="ai-send" title="Send">
            ${svgIcon('sendHorizonal')}
          </button>
        </div>
        <div class="ai-input-hint">Press Enter to send · Shift+Enter for newline · Using ${provider === 'gemini' ? 'Gemini' : 'Featherless AI'}</div>
      </div>
    </div>
  `;

  const messagesEl = container.querySelector('#ai-messages');
  const textarea = container.querySelector('#ai-textarea');

  // ── Close button
  container.querySelector('#ai-close-btn').addEventListener('click', () => {
    container.style.display = 'none';
    container.innerHTML = '';
    // Re-enable AI Generate button text
    const btn = document.querySelector('#btn-ai-panel');
    if (btn) btn.innerHTML = `${svgIcon('sparkles')} AI Generate`;
  });

  // ── Toggle provider
  container.querySelector('#ai-toggle-provider').addEventListener('click', () => {
    provider = provider === 'gemini' ? 'featherless' : 'gemini';
    state.aiProvider = provider;
    saveState();
    container.querySelector('#ai-badge').textContent = provider === 'gemini' ? 'GEMINI' : 'FEATHERLESS';
    container.querySelector('.ai-input-hint').textContent = `Press Enter to send · Shift+Enter for newline · Using ${provider === 'gemini' ? 'Gemini' : 'Featherless AI'}`;
    addBotMessage(messagesEl, `Switched to <strong>${provider === 'gemini' ? 'Gemini AI' : 'Featherless AI (Qwen2.5-Coder-32B)'}</strong>.`);
  });

  // ── Workflow-aware buttons
  container.querySelector('#ai-share-wf').addEventListener('click', () => {
    const wf = getCanvasWorkflowJSON();
    if (!wf) { addBotMessage(messagesEl, '⚠️ No workflow on canvas. Add some nodes first, then I can analyze it.'); return; }
    addUserMessage(messagesEl, `[Shared workflow: ${wf.nodes.length} nodes, ${wf.connections.length} connections]`);
    const prompt = `Analyze this workflow and tell me: what it does, any issues, and suggestions for improvement.\n\nWorkflow JSON:\n${JSON.stringify(wf, null, 2)}`;
    sendToAI(prompt, messagesEl, null);
  });

  container.querySelector('#ai-explain-btn').addEventListener('click', () => {
    const wf = getCanvasWorkflowJSON();
    if (!wf) { addBotMessage(messagesEl, '⚠️ No workflow on canvas to explain.'); return; }
    addUserMessage(messagesEl, `Explain what my workflow does step by step.`);
    const prompt = `Explain this workflow step by step in simple terms. Describe what each node does and how they connect:\n\n${JSON.stringify(wf, null, 2)}`;
    sendToAI(prompt, messagesEl, null);
  });

  container.querySelector('#ai-optimize-btn').addEventListener('click', () => {
    const wf = getCanvasWorkflowJSON();
    if (!wf) { addBotMessage(messagesEl, '⚠️ No workflow on canvas to optimize.'); return; }
    addUserMessage(messagesEl, `Optimize my workflow.`);
    const prompt = `Suggest optimizations for this workflow. Consider: removing redundant steps, adding error handling, improving performance, and adding missing steps:\n\n${JSON.stringify(wf, null, 2)}\n\nReturn ONLY a JSON array of optimized nodes like: [{"type":"trigger|action|condition|aiAgent|output","label":"Name","desc":"Description"}]`;
    sendToAI(prompt, messagesEl, onGenerate);
  });

  // ── Send button + Enter
  container.querySelector('#ai-send').addEventListener('click', () => handleSend(textarea, messagesEl, onGenerate));
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(textarea, messagesEl, onGenerate); }
  });
}

function handleSend(textarea, messagesEl, onGenerate) {
  const text = textarea.value.trim();
  if (!text) return;
  textarea.value = '';
  addUserMessage(messagesEl, text);

  const systemPrompt = `You are FlowForge AI, a workflow automation assistant. When the user describes a workflow, return ONLY a JSON array of nodes like: [{"type":"trigger|action|condition|aiAgent|output","label":"Name","desc":"Description"}]. For questions or analysis, respond in plain text. Be concise.`;
  const prompt = `${systemPrompt}\n\nUser: ${text}`;
  sendToAI(prompt, messagesEl, onGenerate);
}

async function sendToAI(prompt, messagesEl, onGenerate) {
  const thinkingEl = addThinking(messagesEl);

  try {
    let responseText;
    if (provider === 'gemini') {
      responseText = await callGemini(prompt);
    } else {
      responseText = await callFeatherless(prompt);
    }
    thinkingEl.remove();

    // Try parsing as JSON for node generation
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (jsonMatch && onGenerate) {
      try {
        const nodes = JSON.parse(jsonMatch[0]);
        if (Array.isArray(nodes) && nodes.length > 0 && nodes[0].type) {
          onGenerate(nodes);
          addBotMessage(messagesEl, `✅ Generated <strong>${nodes.length} nodes</strong> on canvas! Click "Run" to execute.`);
          return;
        }
      } catch (e) { /* not JSON, show as text */ }
    }
    addBotMessage(messagesEl, responseText);
  } catch (err) {
    thinkingEl.remove();
    addBotMessage(messagesEl, `⚠️ Error: ${err.message || 'Unknown error'}. Check your API key in Settings.`);
  }
}

// ── Gemini API with fallback chain
async function callGemini(prompt) {
  const apiKey = state.geminiKey;
  if (!apiKey) throw new Error('No Gemini API key. Add one in Settings.');

  const MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-flash-latest', 'gemini-pro-latest'];
  const genAI = new GoogleGenerativeAI(apiKey);
  let lastErr;

  for (const modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (e) {
      lastErr = e;
      if (e.message?.includes('429') || e.message?.includes('quota')) continue;
      if (e.message?.includes('404') || e.message?.includes('not found')) continue;
      throw e;
    }
  }
  throw lastErr;
}

// ── Featherless AI API
async function callFeatherless(prompt) {
  const apiKey = state.featherlessKey;
  if (!apiKey) throw new Error('No Featherless API key. Add one in Settings.');

  const res = await fetch('https://api.featherless.ai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Featherless API error ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response.';
}

// ── Lightweight Markdown → HTML
function mdToHtml(text) {
  if (!text) return '';
  let html = text
    // Escape HTML tags (but allow our own)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Code blocks (```...```)
    .replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) =>
      `<pre style="background:rgba(0,0,0,0.3);padding:10px;border-radius:8px;overflow-x:auto;font-size:12px;margin:8px 0;"><code>${code.trim()}</code></pre>`)
    // Inline code (`...`)
    .replace(/`([^`]+)`/g, '<code style="background:rgba(99,102,241,0.15);padding:2px 6px;border-radius:4px;font-size:12px;">$1</code>')
    // Headers
    .replace(/^### (.+)$/gm, '<h4 style="margin:12px 0 4px;font-size:14px;color:#818cf8;">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 style="margin:14px 0 6px;font-size:15px;color:#818cf8;">$1</h3>')
    .replace(/^# (.+)$/gm, '<h2 style="margin:16px 0 8px;font-size:16px;color:#818cf8;">$1</h2>')
    // Bold + Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:12px 0;">')
    // Numbered lists
    .replace(/^\d+\.\s+(.+)$/gm, '<li style="margin:3px 0;padding-left:4px;">$1</li>')
    // Bullet lists
    .replace(/^[\-\*]\s+(.+)$/gm, '<li style="margin:3px 0;padding-left:4px;">$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li[^>]*>.*<\/li>\s*)+)/g, '<ul style="margin:6px 0;padding-left:18px;list-style:disc;">$1</ul>')
    // Line breaks (double newline = paragraph, single = <br>)
    .replace(/\n\n/g, '</p><p style="margin:8px 0;">')
    .replace(/\n/g, '<br>');

  return `<p style="margin:0;">${html}</p>`;
}

// ── UI Helpers
function addUserMessage(messagesEl, text) {
  const div = document.createElement('div');
  div.className = 'ai-message user';
  div.innerHTML = `<div class="ai-message-avatar user">${svgIcon('user')}</div><div class="ai-message-bubble">${text}</div>`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addBotMessage(messagesEl, html) {
  const div = document.createElement('div');
  div.className = 'ai-message ai';
  // If it looks like raw markdown (has ** or # or - bullets), render it
  const rendered = (html.includes('**') || html.includes('# ') || html.match(/^[\-\*]\s/m) || html.includes('```'))
    ? mdToHtml(html) : html;
  div.innerHTML = `<div class="ai-message-avatar ai">${svgIcon('bot')}</div><div class="ai-message-bubble">${rendered}</div>`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addThinking(messagesEl) {
  const div = document.createElement('div');
  div.className = 'ai-message ai';
  div.innerHTML = `<div class="ai-message-avatar ai">${svgIcon('bot')}</div><div class="ai-message-bubble"><div class="ai-thinking"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}
