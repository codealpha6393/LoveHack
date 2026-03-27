import { svgIcon } from '../icons.js';
import { state } from '../state.js';

export function renderDashboard(container, navigate) {
  const history = state.execHistory || [];
  const totalRuns = history.length;
  const successRuns = history.filter(h => h.success).length;
  const successRate = totalRuns > 0 ? ((successRuns / totalRuns) * 100).toFixed(1) : '—';
  const savedCount = state.workflows.length;

  container.innerHTML = `
    <div class="dashboard-page">
      <div class="page-header">
        <h1>Dashboard</h1>
        <p>Real-time analytics from your workflow executions.</p>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Total Executions</span>
            <div class="stat-card-icon bg-indigo color-purple">${svgIcon('activity')}</div>
          </div>
          <div class="stat-card-value">${totalRuns.toLocaleString()}</div>
          <div class="stat-card-meta">${totalRuns > 0 ? 'From live executions' : 'Run a workflow to see stats'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Saved Workflows</span>
            <div class="stat-card-icon bg-indigo color-purple">${svgIcon('zap')}</div>
          </div>
          <div class="stat-card-value">${savedCount}</div>
          <div class="stat-card-meta">${savedCount > 0 ? `${savedCount} workflow(s) on disk` : 'Save your first workflow'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Success Rate</span>
            <div class="stat-card-icon bg-green color-green">${svgIcon('checkCircle')}</div>
          </div>
          <div class="stat-card-value">${successRate}${totalRuns > 0 ? '%' : ''}</div>
          <div class="stat-card-meta">${totalRuns > 0 ? `${successRuns}/${totalRuns} successful` : 'No data yet'}</div>
        </div>
      </div>

      <!-- Execution History -->
      <div class="table-card">
        <div class="table-card-header">
          <span class="table-card-title">Execution History</span>
          <button class="btn btn-secondary btn-sm" onclick="window.navigate('/canvas')">
            ${svgIcon('zap')} New Workflow
          </button>
        </div>
        ${history.length === 0 ? `
          <div style="padding:40px;text-align:center;color:rgba(255,255,255,0.3)">
            ${svgIcon('activity')}<br/><br/>
            No executions yet. Go to the Canvas and run a workflow!
          </div>
        ` : history.slice(0, 20).map(h => {
    const date = new Date(h.timestamp);
    const timeAgo = getTimeAgo(date);
    return `
          <div class="table-row" onclick="window.navigate('/canvas')">
            <div class="table-row-icon ${h.success ? 'bg-green color-green' : 'bg-yellow color-yellow'}">
              ${svgIcon(h.success ? 'check' : 'alertCircle')}
            </div>
            <div class="table-row-info">
              <div class="table-row-name">${h.title}</div>
              <div class="table-row-sub">${h.nodeCount} nodes · Duration: ${h.duration}</div>
            </div>
            <div>
              <span class="badge ${h.success ? 'badge-success' : 'badge-warning'}">
                ${h.success ? '● Success' : '● Failed'}
              </span>
            </div>
            <div class="table-row-meta">
              <div class="table-row-meta-main">${timeAgo}</div>
              <div class="table-row-meta-sub">${date.toLocaleDateString()}</div>
            </div>
          </div>`;
  }).join('')}
      </div>

      <!-- Saved Workflows -->
      <div class="table-card">
        <div class="table-card-header">
          <span class="table-card-title">Saved Workflows</span>
        </div>
        ${state.workflows.length === 0 ? `
          <div style="padding:40px;text-align:center;color:rgba(255,255,255,0.3)">
            ${svgIcon('database')}<br/><br/>
            No saved workflows. Use Ctrl+S in the Canvas to save.
          </div>
        ` : state.workflows.map(wf => `
          <div class="table-row" onclick="window.navigate('/canvas')">
            <div class="table-row-icon bg-indigo color-purple">
              ${svgIcon('workflow')}
            </div>
            <div class="table-row-info">
              <div class="table-row-name">${wf.title}</div>
              <div class="table-row-sub">${wf.nodes.length} nodes · ${wf.connections.length} connections</div>
            </div>
            <div class="table-row-meta">
              <div class="table-row-meta-main">${new Date(wf.updatedAt).toLocaleDateString()}</div>
              <div class="table-row-meta-sub">${new Date(wf.updatedAt).toLocaleTimeString()}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function getTimeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}
