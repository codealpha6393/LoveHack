import { svgIcon } from '../icons.js';
import { renderAIPanel } from '../ai/panel.js';
import { state, saveWorkflow, loadWorkflow, addExecRecord } from '../state.js';

// ═══════════════════════════════════════════
//  NODE TYPE DEFINITIONS
// ═══════════════════════════════════════════
const NODE_TYPES = {
  trigger: { label: 'Trigger', icon: 'zapFast', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)', desc: 'Starts the workflow' },
  action: { label: 'Action', icon: 'play', color: '#6366f1', bg: 'rgba(99,102,241,0.15)', desc: 'Performs an operation' },
  condition: { label: 'Condition', icon: 'filterX', color: '#06b6d4', bg: 'rgba(6,182,212,0.15)', desc: 'Evaluates a rule' },
  aiAgent: { label: 'AI Agent', icon: 'bot', color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)', desc: 'AI-powered step' },
  output: { label: 'Output', icon: 'cloud', color: '#10b981', bg: 'rgba(16,185,129,0.15)', desc: 'Sends results' },
};

const PALETTE_ITEMS = [
  { type: 'trigger', subLabel: 'Webhook', desc: 'HTTP request trigger' },
  { type: 'trigger', subLabel: 'Schedule', desc: 'Cron/time trigger' },
  { type: 'action', subLabel: 'Send Email', desc: 'Dispatch an email' },
  { type: 'action', subLabel: 'HTTP Request', desc: 'Call an API endpoint' },
  { type: 'condition', subLabel: 'If / Else', desc: 'Branch on condition' },
  { type: 'aiAgent', subLabel: 'Gemini AI', desc: 'AI inference step' },
  { type: 'aiAgent', subLabel: 'Featherless', desc: 'Open-source AI step' },
  { type: 'output', subLabel: 'Slack Notify', desc: 'Post to Slack' },
  { type: 'output', subLabel: 'Database', desc: 'Write to DB' },
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let nodes = [];
let connections = [];
let nodeId = 1;
let selectedId = null;
let dragging = null;
let connectingFrom = null;
let panOffset = { x: 0, y: 0 };
let panning = false;
let panStart = null;
let aiPanelOpen = false;
let currentWorkflowId = null;
let currentWorkflowTitle = 'Untitled Workflow';
let zoomLevel = 1;

// ═══════════════════════════════════════════
//  RENDER CANVAS
// ═══════════════════════════════════════════
export function renderCanvas(container, navigate) {
  // Reset state for fresh canvas
  nodes = [];
  connections = [];
  nodeId = 1;
  selectedId = null;
  panOffset = { x: 0, y: 0 };
  zoomLevel = 1;

  container.innerHTML = `
    <div class="canvas-layout">
      <!-- Left palette sidebar -->
      <div class="canvas-sidebar">
        <div class="canvas-sidebar-header">Node Palette</div>
        ${PALETTE_ITEMS.map(item => {
    const t = NODE_TYPES[item.type];
    return `
            <div class="node-palette-item" 
                 draggable="true"
                 data-type="${item.type}"
                 data-sublabel="${item.subLabel}"
                 data-desc="${item.desc}">
              <div class="node-palette-icon" style="background:${t.bg};color:${t.color}">
                ${svgIcon(t.icon)}
              </div>
              <div>
                <div class="node-palette-label">${item.subLabel}</div>
                <div class="node-palette-sub">${item.desc}</div>
              </div>
            </div>`;
  }).join('')}

        <!-- Saved Workflows Manager -->
        <div class="canvas-sidebar-header" style="margin-top:16px;">Saved Workflows</div>
        <div id="saved-workflows-list" class="saved-workflows-list"></div>
      </div>

      <!-- Main canvas area -->
      <div class="canvas-main">
        <div class="canvas-toolbar">
          <div class="canvas-title-group">
            <span class="canvas-title" id="wf-title" contenteditable="true" spellcheck="false">${currentWorkflowTitle}</span>
            <span class="canvas-status-badge" id="wf-status">Draft</span>
          </div>
          <div class="canvas-toolbar-actions">
            <button class="btn btn-secondary btn-sm" id="btn-save" title="Ctrl+S">
              ${svgIcon('database')} Save
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-export" title="Export JSON">
              ${svgIcon('arrowRight')} Export
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-import" title="Import JSON">
              ${svgIcon('cloud')} Import
            </button>
            <input type="file" id="import-wf-file" accept=".json" style="display:none" />
            <button class="btn btn-secondary btn-sm" id="btn-clear-canvas">
              ${svgIcon('trash')} Clear
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-ai-panel">
              ${svgIcon('sparkles')} AI Generate
            </button>
            <button class="btn btn-primary btn-sm" id="btn-run">
              ${svgIcon('play')} Run
            </button>
          </div>
        </div>

        <!-- Zoom controls -->
        <div class="zoom-controls" id="zoom-controls">
          <button class="zoom-btn" id="zoom-in" title="Zoom In">+</button>
          <span class="zoom-level" id="zoom-label">100%</span>
          <button class="zoom-btn" id="zoom-out" title="Zoom Out">−</button>
          <button class="zoom-btn" id="zoom-reset" title="Reset">⟲</button>
        </div>

        <div class="canvas-viewport" id="canvas-vp">
          <div class="canvas-grid"></div>
          <svg id="canvas-svg"></svg>
          <div id="canvas-hint" class="canvas-empty-hint">
            ${svgIcon('gitNetwork')}
            <h3>Your canvas is empty</h3>
            <p>Drag nodes from the palette, or click<br/>"AI Generate" to auto-build a workflow</p>
          </div>
          <div id="nodes-layer"></div>
        </div>

        <!-- Node Config Panel (hidden by default) -->
        <div class="node-config-panel" id="node-config" style="display:none;">
          <div class="node-config-header">
            <h3 id="config-node-title">Configure Node</h3>
            <button class="node-config-close" id="config-close">${svgIcon('x')}</button>
          </div>
          <div class="node-config-body" id="config-body"></div>
        </div>

        <!-- Execution Log -->
        <div class="exec-log" id="exec-log">
          <div class="exec-log-line info">[FlowForge] Ready. Add nodes or use AI to generate a workflow.</div>
        </div>
      </div>

      <!-- AI panel (initially hidden) -->
      <div id="ai-panel-slot" style="display:none"></div>
    </div>
  `;

  initCanvasEvents(container, navigate);
  renderSavedWorkflows(container, navigate);
  loadTemplateIfPresent(container);

  // Expose canvas state so AI panel can read current workflow for analysis
  window.__flowforge_canvas = { get nodes() { return nodes; }, get connections() { return connections; } };
}

// ═══════════════════════════════════════════
//  INIT EVENTS
// ═══════════════════════════════════════════
function initCanvasEvents(container, navigate) {
  const vp = container.querySelector('#canvas-vp');
  const nodesLayer = container.querySelector('#nodes-layer');
  const svg = container.querySelector('#canvas-svg');

  // ── Drag palette → canvas
  container.querySelectorAll('.node-palette-item').forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('type', item.dataset.type);
      e.dataTransfer.setData('subLabel', item.dataset.sublabel);
      e.dataTransfer.setData('desc', item.dataset.desc);
    });
  });

  vp.addEventListener('dragover', e => e.preventDefault());
  vp.addEventListener('drop', e => {
    e.preventDefault();
    const rect = vp.getBoundingClientRect();
    const x = (e.clientX - rect.left - panOffset.x) / zoomLevel - 100;
    const y = (e.clientY - rect.top - panOffset.y) / zoomLevel - 50;
    const type = e.dataTransfer.getData('type');
    const subLabel = e.dataTransfer.getData('subLabel');
    const desc = e.dataTransfer.getData('desc');
    if (!type) return;
    addNode({ type, subLabel, desc, x, y }, nodesLayer, svg, container);
  });

  // ── Pan canvas
  vp.addEventListener('mousedown', e => {
    if (e.target === vp || e.target.classList.contains('canvas-grid') || e.target.id === 'canvas-svg') {
      panning = true;
      panStart = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
      vp.style.cursor = 'grabbing';
      selectedId = null;
      container.querySelectorAll('.workflow-node').forEach(n => n.classList.remove('selected'));
      container.querySelector('#node-config').style.display = 'none';
    }
  });

  window.addEventListener('mousemove', e => {
    if (panning) {
      panOffset.x = e.clientX - panStart.x;
      panOffset.y = e.clientY - panStart.y;
      applyTransform(nodesLayer);
      drawConnections(svg);
    }
    if (dragging) {
      const rect = vp.getBoundingClientRect();
      const x = (e.clientX - rect.left - panOffset.x) / zoomLevel - dragging.ox;
      const y = (e.clientY - rect.top - panOffset.y) / zoomLevel - dragging.oy;
      const node = nodes.find(n => n.id === dragging.id);
      if (node) {
        node.x = Math.max(0, x);
        node.y = Math.max(0, y);
        const el = document.getElementById(`node-${dragging.id}`);
        if (el) { el.style.left = node.x + 'px'; el.style.top = node.y + 'px'; }
        drawConnections(svg);
      }
    }
  });

  window.addEventListener('mouseup', () => { panning = false; dragging = null; vp.style.cursor = 'default'; });

  // ── Zoom controls
  container.querySelector('#zoom-in').addEventListener('click', () => { zoomLevel = Math.min(2, zoomLevel + 0.1); applyTransform(nodesLayer); updateZoomLabel(container); drawConnections(svg); });
  container.querySelector('#zoom-out').addEventListener('click', () => { zoomLevel = Math.max(0.3, zoomLevel - 0.1); applyTransform(nodesLayer); updateZoomLabel(container); drawConnections(svg); });
  container.querySelector('#zoom-reset').addEventListener('click', () => { zoomLevel = 1; panOffset = { x: 0, y: 0 }; applyTransform(nodesLayer); updateZoomLabel(container); drawConnections(svg); });

  // Mouse wheel zoom
  vp.addEventListener('wheel', e => {
    e.preventDefault();
    zoomLevel = Math.max(0.3, Math.min(2, zoomLevel - e.deltaY * 0.001));
    applyTransform(nodesLayer);
    updateZoomLabel(container);
    drawConnections(svg);
  }, { passive: false });

  // ── Toolbar buttons
  container.querySelector('#btn-run').addEventListener('click', () => runWorkflow(container));
  container.querySelector('#btn-clear-canvas').addEventListener('click', () => {
    nodes = []; connections = []; nodeId = 1; currentWorkflowId = null;
    nodesLayer.innerHTML = '';
    drawConnections(svg);
    updateHint(container);
    addLog(container, 'info', 'Canvas cleared.');
  });
  container.querySelector('#btn-ai-panel').addEventListener('click', () => toggleAIPanel(container, nodesLayer, svg));
  container.querySelector('#btn-save').addEventListener('click', () => saveCurrentWorkflow(container));
  container.querySelector('#btn-export').addEventListener('click', () => exportWorkflow());
  container.querySelector('#btn-import').addEventListener('click', () => container.querySelector('#import-wf-file').click());
  container.querySelector('#import-wf-file').addEventListener('change', e => importWorkflow(e, container, nodesLayer, svg));
  container.querySelector('#config-close').addEventListener('click', () => { container.querySelector('#node-config').style.display = 'none'; });

  // ── Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    if (e.key === 'Delete' && selectedId) {
      nodes = nodes.filter(n => n.id !== selectedId);
      connections = connections.filter(c => c.from !== selectedId && c.to !== selectedId);
      document.getElementById(`node-${selectedId}`)?.remove();
      selectedId = null;
      drawConnections(svg);
      updateHint(container);
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      saveCurrentWorkflow(container);
    }
  });
}

// ═══════════════════════════════════════════
//  NODE MANAGEMENT
// ═══════════════════════════════════════════
function addNode({ type, subLabel, desc, x = 100, y = 100, config = {} }, nodesLayer, svg, container) {
  const id = nodeId++;
  const t = NODE_TYPES[type];
  const node = { id, type, subLabel, desc, x, y, config };
  nodes.push(node);

  const el = document.createElement('div');
  el.className = 'workflow-node';
  el.id = `node-${id}`;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  el.innerHTML = `
    <div class="node-header">
      <div class="node-icon" style="background:${t.bg};color:${t.color}">${svgIcon(t.icon)}</div>
      <span class="node-label">${subLabel}</span>
      <div class="node-status-dot idle" id="status-${id}"></div>
      <button class="node-delete-btn" data-id="${id}">${svgIcon('x')}</button>
    </div>
    <div class="node-body">
      <div class="node-desc">${desc || t.desc}</div>
    </div>
    <div class="node-ports">
      <div class="node-port node-port-in" data-node="${id}" data-port="in" title="Input"></div>
      <div class="node-port node-port-out" data-node="${id}" data-port="out" title="Output"></div>
    </div>
  `;
  nodesLayer.appendChild(el);

  // Click → select + show config
  el.addEventListener('mousedown', e => {
    if (e.target.classList.contains('node-port') || e.target.closest('.node-delete-btn')) return;
    e.stopPropagation();
    selectedId = id;
    container.querySelectorAll('.workflow-node').forEach(n => n.classList.remove('selected'));
    el.classList.add('selected');
    showNodeConfig(node, container);
    const rect = el.getBoundingClientRect();
    dragging = { id, ox: (e.clientX - rect.left) / zoomLevel, oy: (e.clientY - rect.top) / zoomLevel };
  });

  // Double-click → open config
  el.addEventListener('dblclick', e => {
    e.stopPropagation();
    showNodeConfig(node, container);
  });

  // Delete
  el.querySelector('.node-delete-btn').addEventListener('click', e => {
    e.stopPropagation();
    nodes = nodes.filter(n => n.id !== id);
    connections = connections.filter(c => c.from !== id && c.to !== id);
    el.remove();
    drawConnections(svg);
    updateHint(container);
    container.querySelector('#node-config').style.display = 'none';
  });

  // Port connections
  el.querySelectorAll('.node-port').forEach(port => {
    port.addEventListener('click', e => {
      e.stopPropagation();
      const portType = port.dataset.port;
      if (!connectingFrom) {
        if (portType === 'out') {
          connectingFrom = { nodeId: id };
          port.style.background = '#818cf8';
          addLog(container, 'info', `Connecting from "${subLabel}" — click an input port.`);
        }
      } else {
        if (portType === 'in' && connectingFrom.nodeId !== id) {
          if (!connections.some(c => c.from === connectingFrom.nodeId && c.to === id)) {
            connections.push({ from: connectingFrom.nodeId, to: id, id: `${connectingFrom.nodeId}-${id}` });
            addLog(container, 'success', `Connected "${nodes.find(n => n.id === connectingFrom.nodeId)?.subLabel}" → "${subLabel}"`);
            drawConnections(svg);
          }
        }
        container.querySelectorAll('.node-port-out').forEach(p => p.style.background = '');
        connectingFrom = null;
      }
    });
  });

  updateHint(container);
  drawConnections(svg);
}

// ═══════════════════════════════════════════
//  NODE CONFIGURATION PANEL
// ═══════════════════════════════════════════
function showNodeConfig(node, container) {
  const panel = container.querySelector('#node-config');
  const body = container.querySelector('#config-body');
  const title = container.querySelector('#config-node-title');
  const t = NODE_TYPES[node.type];

  title.innerHTML = `${svgIcon(t.icon)} Configure: ${node.subLabel}`;
  panel.style.display = 'flex';

  const cfg = node.config || {};

  body.innerHTML = `
    <div class="config-field">
      <label>Display Name</label>
      <input type="text" class="input-text" id="cfg-label" value="${node.subLabel}" />
    </div>
    <div class="config-field">
      <label>Description</label>
      <input type="text" class="input-text" id="cfg-desc" value="${node.desc}" />
    </div>
    ${node.type === 'trigger' ? `
      <div class="config-field">
        <label>Trigger URL / Cron</label>
        <input type="text" class="input-text mono" id="cfg-trigger" placeholder="https://... or */5 * * * *" value="${cfg.trigger || ''}" />
      </div>
    ` : ''}
    ${node.type === 'action' ? `
      <div class="config-field">
        <label>Endpoint / Command</label>
        <input type="text" class="input-text mono" id="cfg-endpoint" placeholder="https://api.example.com/v1/..." value="${cfg.endpoint || ''}" />
      </div>
      <div class="config-field">
        <label>Method</label>
        <select class="input-text" id="cfg-method">
          <option ${cfg.method === 'GET' ? 'selected' : ''}>GET</option>
          <option ${cfg.method === 'POST' ? 'selected' : ''}>POST</option>
          <option ${cfg.method === 'PUT' ? 'selected' : ''}>PUT</option>
          <option ${cfg.method === 'DELETE' ? 'selected' : ''}>DELETE</option>
        </select>
      </div>
    ` : ''}
    ${node.type === 'condition' ? `
      <div class="config-field">
        <label>Condition Expression</label>
        <input type="text" class="input-text mono" id="cfg-condition" placeholder="data.status === 'active'" value="${cfg.condition || ''}" />
      </div>
    ` : ''}
    ${node.type === 'aiAgent' ? `
      <div class="config-field">
        <label>AI Prompt</label>
        <textarea class="input-text mono" id="cfg-prompt" rows="3" placeholder="Summarize the incoming data...">${cfg.prompt || ''}</textarea>
      </div>
    ` : ''}
    ${node.type === 'output' ? `
      <div class="config-field">
        <label>Destination</label>
        <input type="text" class="input-text mono" id="cfg-destination" placeholder="#slack-channel or email@..." value="${cfg.destination || ''}" />
      </div>
    ` : ''}
    <button class="btn btn-primary btn-sm" id="cfg-apply" style="margin-top:12px;width:100%;">Apply Changes</button>
  `;

  body.querySelector('#cfg-apply').addEventListener('click', () => {
    node.subLabel = body.querySelector('#cfg-label').value;
    node.desc = body.querySelector('#cfg-desc').value;
    // Type-specific config
    if (body.querySelector('#cfg-trigger')) node.config.trigger = body.querySelector('#cfg-trigger').value;
    if (body.querySelector('#cfg-endpoint')) node.config.endpoint = body.querySelector('#cfg-endpoint').value;
    if (body.querySelector('#cfg-method')) node.config.method = body.querySelector('#cfg-method').value;
    if (body.querySelector('#cfg-condition')) node.config.condition = body.querySelector('#cfg-condition').value;
    if (body.querySelector('#cfg-prompt')) node.config.prompt = body.querySelector('#cfg-prompt').value;
    if (body.querySelector('#cfg-destination')) node.config.destination = body.querySelector('#cfg-destination').value;

    // Update DOM
    const el = document.getElementById(`node-${node.id}`);
    if (el) {
      el.querySelector('.node-label').textContent = node.subLabel;
      el.querySelector('.node-desc').textContent = node.desc;
    }
    panel.style.display = 'none';
    addLog(container, 'info', `Updated node "${node.subLabel}".`);
  });
}

// ═══════════════════════════════════════════
//  SVG CONNECTIONS
// ═══════════════════════════════════════════
function drawConnections(svg) {
  svg.innerHTML = `
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="rgba(129,140,248,0.7)"/>
      </marker>
    </defs>
  `;
  connections.forEach(conn => {
    const fromNode = nodes.find(n => n.id === conn.from);
    const toNode = nodes.find(n => n.id === conn.to);
    if (!fromNode || !toNode) return;

    const NODE_W = 200;
    const fromEl = document.getElementById(`node-${fromNode.id}`);
    const toEl = document.getElementById(`node-${toNode.id}`);
    const fromH = fromEl ? fromEl.offsetHeight : 90;
    const toH = toEl ? toEl.offsetHeight : 90;

    const x1 = (fromNode.x + NODE_W) * zoomLevel + panOffset.x;
    const y1 = (fromNode.y + fromH - 14) * zoomLevel + panOffset.y;
    const x2 = toNode.x * zoomLevel + panOffset.x;
    const y2 = (toNode.y + toH - 14) * zoomLevel + panOffset.y;
    const cx = (x1 + x2) / 2;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'rgba(129,140,248,0.55)');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-dasharray', '5,3');
    path.setAttribute('marker-end', 'url(#arrowhead)');
    path.classList.add('connection-line');
    svg.appendChild(path);
  });
}

// ═══════════════════════════════════════════
//  WORKFLOW EXECUTION
// ═══════════════════════════════════════════
async function runWorkflow(container) {
  if (nodes.length === 0) { addLog(container, 'error', 'No nodes. Add some first.'); return; }
  const status = container.querySelector('#wf-status');
  status.textContent = 'Running';
  status.style.color = '#fbbf24';
  container.querySelector('#btn-run').disabled = true;

  addLog(container, 'running', `[${ts()}] Workflow execution started — ${nodes.length} nodes`);
  const startTime = Date.now();

  for (const node of nodes) {
    const dot = document.getElementById(`status-${node.id}`);
    const el = document.getElementById(`node-${node.id}`);
    if (dot) dot.className = 'node-status-dot running';
    if (el) el.classList.add('executing');

    addLog(container, 'running', `[${ts()}] Executing: ${node.subLabel} (${node.type})`);
    await sleep(600 + Math.random() * 500);

    const success = Math.random() > 0.05;
    if (dot) dot.className = success ? 'node-status-dot done' : 'node-status-dot error';
    if (el) { el.classList.remove('executing'); el.classList.add(success ? 'success' : 'error'); }
    addLog(container, success ? 'success' : 'error', `[${ts()}] ${node.subLabel}: ${success ? 'Completed ✓' : 'Failed ✗'}`);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  status.textContent = 'Done';
  status.style.color = '#34d399';
  container.querySelector('#btn-run').disabled = false;
  addLog(container, 'success', `[${ts()}] Workflow finished in ${duration}s.`);

  // Save execution to real history
  const title = container.querySelector('#wf-title')?.textContent || 'Untitled';
  addExecRecord(title, nodes.length, `${duration}s`, true);

  setTimeout(() => {
    status.textContent = 'Draft'; status.style.color = '';
    nodes.forEach(n => {
      const el = document.getElementById(`node-${n.id}`);
      const dot = document.getElementById(`status-${n.id}`);
      if (el) el.classList.remove('success', 'error', 'executing');
      if (dot) dot.className = 'node-status-dot idle';
    });
  }, 4000);
}

// ═══════════════════════════════════════════
//  SAVE / LOAD / EXPORT / IMPORT
// ═══════════════════════════════════════════
function saveCurrentWorkflow(container) {
  const title = container.querySelector('#wf-title')?.textContent || 'Untitled Workflow';
  currentWorkflowTitle = title;
  currentWorkflowId = saveWorkflow(currentWorkflowId, title, nodes, connections);
  addLog(container, 'success', `[${ts()}] Workflow "${title}" saved.`);
  renderSavedWorkflows(container);
  // Flash
  const btn = container.querySelector('#btn-save');
  if (btn) { btn.innerHTML = `${svgIcon('check')} Saved!`; setTimeout(() => { btn.innerHTML = `${svgIcon('database')} Save`; }, 1500); }
}

function exportWorkflow() {
  const data = JSON.stringify({ title: currentWorkflowTitle, nodes, connections }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentWorkflowTitle.replace(/\s+/g, '-').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importWorkflow(e, container, nodesLayer, svg) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.nodes) {
        nodes = []; connections = []; nodesLayer.innerHTML = '';
        data.nodes.forEach(n => {
          addNode({ type: n.type, subLabel: n.subLabel, desc: n.desc, x: n.x, y: n.y, config: n.config || {} }, nodesLayer, svg, container);
        });
        if (data.connections) {
          data.connections.forEach(c => {
            connections.push(c);
          });
          drawConnections(svg);
        }
        if (data.title) {
          currentWorkflowTitle = data.title;
          const titleEl = container.querySelector('#wf-title');
          if (titleEl) titleEl.textContent = data.title;
        }
        addLog(container, 'success', `[${ts()}] Imported "${data.title || 'workflow'}" — ${data.nodes.length} nodes.`);
      }
    } catch (err) { addLog(container, 'error', 'Invalid JSON file.'); }
  };
  reader.readAsText(file);
}

function renderSavedWorkflows(container) {
  const list = container.querySelector('#saved-workflows-list');
  if (!list) return;
  const wfs = state.workflows;
  if (wfs.length === 0) {
    list.innerHTML = '<div style="padding:8px 12px;font-size:11px;color:rgba(255,255,255,0.3)">No saved workflows yet.</div>';
    return;
  }
  list.innerHTML = wfs.map(wf => `
    <div class="saved-wf-item" data-id="${wf.id}">
      <div class="saved-wf-name">${wf.title}</div>
      <div class="saved-wf-meta">${wf.nodes.length} nodes · ${new Date(wf.updatedAt).toLocaleDateString()}</div>
    </div>
  `).join('');

  list.querySelectorAll('.saved-wf-item').forEach(item => {
    item.addEventListener('click', () => {
      const wf = loadWorkflow(item.dataset.id);
      if (!wf) return;
      const nodesLayer = container.querySelector('#nodes-layer');
      const svg = container.querySelector('#canvas-svg');
      nodes = []; connections = []; nodeId = 1; nodesLayer.innerHTML = '';
      currentWorkflowId = wf.id;
      currentWorkflowTitle = wf.title;
      const titleEl = container.querySelector('#wf-title');
      if (titleEl) titleEl.textContent = wf.title;

      wf.nodes.forEach(n => {
        addNode({ type: n.type, subLabel: n.subLabel, desc: n.desc, x: n.x, y: n.y, config: n.config || {} }, nodesLayer, svg, container);
      });
      wf.connections.forEach(c => connections.push({ ...c }));
      drawConnections(svg);
      addLog(container, 'info', `[${ts()}] Loaded "${wf.title}".`);
    });
  });
}

function loadTemplateIfPresent(container) {
  const tmplData = sessionStorage.getItem('ff_load_template');
  if (tmplData) {
    sessionStorage.removeItem('ff_load_template');
    try {
      const tmplNodes = JSON.parse(tmplData);
      const nodesLayer = container.querySelector('#nodes-layer');
      const svg = container.querySelector('#canvas-svg');
      tmplNodes.forEach((n, i) => {
        addNode({ type: n.type, subLabel: n.label, desc: n.desc, x: 60 + i * 240, y: 160 + (i % 2) * 120 }, nodesLayer, svg, container);
      });
      if (tmplNodes.length > 1) {
        const added = nodes.slice(-tmplNodes.length);
        for (let i = 0; i < added.length - 1; i++) {
          connections.push({ from: added[i].id, to: added[i + 1].id, id: `t${i}` });
        }
        drawConnections(svg);
      }
      addLog(container, 'success', `[${ts()}] Loaded template — ${tmplNodes.length} nodes.`);
    } catch (e) { }
  }
}

// ═══════════════════════════════════════════
//  AI PANEL
// ═══════════════════════════════════════════
function toggleAIPanel(container, nodesLayer, svg) {
  const slot = container.querySelector('#ai-panel-slot');
  aiPanelOpen = !aiPanelOpen;
  if (aiPanelOpen) {
    slot.style.display = 'flex';
    renderAIPanel(slot, (generatedNodes) => {
      generatedNodes.forEach((n, i) => {
        addNode({ type: n.type, subLabel: n.label, desc: n.desc, x: 60 + i * 240, y: 100 + (i % 2) * 120 }, nodesLayer, svg, container);
      });
      if (generatedNodes.length > 1) {
        const added = nodes.slice(-generatedNodes.length);
        for (let i = 0; i < added.length - 1; i++) {
          connections.push({ from: added[i].id, to: added[i + 1].id, id: `g${i}` });
        }
        drawConnections(svg);
      }
      addLog(container, 'success', `[${ts()}] AI generated ${generatedNodes.length} nodes.`);
    });
    container.querySelector('#btn-ai-panel').innerHTML = `${svgIcon('x')} Close AI`;
  } else {
    slot.style.display = 'none';
    slot.innerHTML = '';
    container.querySelector('#btn-ai-panel').innerHTML = `${svgIcon('sparkles')} AI Generate`;
  }
}

// ═══════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════
function applyTransform(nodesLayer) {
  nodesLayer.style.transform = `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`;
  nodesLayer.style.transformOrigin = '0 0';
}

function updateZoomLabel(container) {
  const label = container.querySelector('#zoom-label');
  if (label) label.textContent = `${Math.round(zoomLevel * 100)}%`;
}

function updateHint(container) {
  const hint = container.querySelector('#canvas-hint');
  if (hint) hint.style.opacity = nodes.length === 0 ? '1' : '0';
}

function addLog(container, type, msg) {
  const log = container.querySelector('#exec-log');
  if (!log) return;
  const line = document.createElement('div');
  line.className = `exec-log-line ${type}`;
  line.textContent = msg;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function ts() { return new Date().toLocaleTimeString('en-US', { hour12: false }); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

export { addNode, nodes, connections, NODE_TYPES };
