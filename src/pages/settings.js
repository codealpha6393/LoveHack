import { svgIcon } from '../icons.js';
import { state, saveState } from '../state.js';

export function renderSettings(container) {
  container.innerHTML = `
    <div class="settings-page">
      <div class="page-header">
        <h1>Settings</h1>
        <p>Configure your FlowForge AI preferences, API keys, and AI providers.</p>
      </div>

      <!-- AI Provider Selection -->
      <div class="settings-section">
        <h2>AI Provider</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('bot')} Active AI Provider</div>
              <div class="settings-row-desc">Select which AI engine powers your workflow generation.</div>
            </div>
            <div class="provider-toggle-group">
              <button class="provider-btn ${state.aiProvider === 'gemini' ? 'active' : ''}" data-provider="gemini">
                ${svgIcon('sparkles')} Gemini
              </button>
              <button class="provider-btn ${state.aiProvider === 'featherless' ? 'active' : ''}" data-provider="featherless">
                ${svgIcon('wand')} Featherless AI
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gemini Config -->
      <div class="settings-section">
        <h2>Gemini Configuration</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('key')} Gemini API Key</div>
              <div class="settings-row-desc">Get a free key at <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#818cf8">aistudio.google.com</a></div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="password" class="input-text mono" id="gemini-key" placeholder="AIza..." value="${state.apiKey}" />
              <button class="btn btn-primary btn-sm" id="save-gemini">Save</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('activity')} Model Strategy</div>
              <div class="settings-row-desc">Auto-fallback through available models on your key.</div>
            </div>
            <div class="model-chain">
              <span class="model-chip active">gemini-2.5-flash</span>
              <span class="model-arrow">→</span>
              <span class="model-chip">gemini-2.0-flash</span>
              <span class="model-arrow">→</span>
              <span class="model-chip">gemini-flash-latest</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Featherless AI Config -->
      <div class="settings-section">
        <h2>Featherless AI Configuration</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('key')} Featherless API Key</div>
              <div class="settings-row-desc">Get a key at <a href="https://featherless.ai" target="_blank" style="color:#818cf8">featherless.ai</a> — LovHack Sponsor</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="password" class="input-text mono" id="featherless-key" placeholder="sk-..." value="${state.featherlessKey}" />
              <button class="btn btn-primary btn-sm" id="save-featherless">Save</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('bot')} Model</div>
              <div class="settings-row-desc">Open-source model via Featherless AI inference.</div>
            </div>
            <div class="model-chain">
              <span class="model-chip active">Qwen2.5-Coder-32B</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Management -->
      <div class="settings-section">
        <h2>Data Management</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('database')} Export All Workflows</div>
              <div class="settings-row-desc">Download all saved workflows as a JSON file.</div>
            </div>
            <button class="btn btn-secondary btn-sm" id="export-all">
              ${svgIcon('arrowRight')} Export JSON
            </button>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('cloud')} Import Workflows</div>
              <div class="settings-row-desc">Load workflows from a previously exported JSON file.</div>
            </div>
            <div>
              <input type="file" id="import-file" accept=".json" style="display:none" />
              <button class="btn btn-secondary btn-sm" id="import-btn">
                ${svgIcon('cloud')} Import JSON
              </button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${svgIcon('trash')} Clear All Data</div>
              <div class="settings-row-desc">Remove all workflows, settings, and execution history.</div>
            </div>
            <button class="btn btn-sm" id="clear-data" style="background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.3);">
              ${svgIcon('trash')} Clear
            </button>
          </div>
        </div>
      </div>

      <!-- About -->
      <div class="settings-section">
        <h2>About FlowForge AI</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info"><div class="settings-row-label">Version</div></div>
            <span style="font-size:13px;color:rgba(255,255,255,0.4)">1.0.0 · LovHack Season 2</span>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Technology</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;justify-content:flex-end">
              ${['Gemini AI', 'Featherless AI', 'Stitch AI (Design)', 'Vite', 'Vanilla JS'].map(s =>
    `<span class="sponsor-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Hackathon Sponsors</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;justify-content:flex-end">
              ${['Featherless AI', 'DevSwarm', 'gen.xyz', 'Miro', 'n8n', 'Nodebase', 'CREAO'].map(s =>
      `<span class="sponsor-pill">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ── Wire provider toggle
  container.querySelectorAll('.provider-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.aiProvider = btn.dataset.provider;
      saveState();
      container.querySelectorAll('.provider-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Save Gemini key
  container.querySelector('#save-gemini').addEventListener('click', () => {
    state.apiKey = container.querySelector('#gemini-key').value.trim();
    saveState();
    flashSaveBtn(container.querySelector('#save-gemini'));
  });

  // ── Save Featherless key
  container.querySelector('#save-featherless').addEventListener('click', () => {
    state.featherlessKey = container.querySelector('#featherless-key').value.trim();
    saveState();
    flashSaveBtn(container.querySelector('#save-featherless'));
  });

  // ── Export All
  container.querySelector('#export-all').addEventListener('click', () => {
    const data = JSON.stringify({ workflows: state.workflows, execHistory: state.execHistory }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowforge-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // ── Import
  container.querySelector('#import-btn').addEventListener('click', () => {
    container.querySelector('#import-file').click();
  });
  container.querySelector('#import-file').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.workflows) {
          state.workflows = [...state.workflows, ...data.workflows];
          saveState();
          alert(`Imported ${data.workflows.length} workflow(s)!`);
        }
      } catch (e) { alert('Invalid JSON file.'); }
    };
    reader.readAsText(file);
  });

  // ── Clear data
  container.querySelector('#clear-data').addEventListener('click', () => {
    if (confirm('Delete ALL workflows, execution history, and settings?')) {
      localStorage.clear();
      location.reload();
    }
  });
}

function flashSaveBtn(btn) {
  btn.textContent = '✓ Saved';
  btn.style.background = '#34d399';
  setTimeout(() => { btn.textContent = 'Save'; btn.style.background = ''; }, 1500);
}
