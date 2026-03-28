/** FlowForge AI — Global State Manager */
export const state = {
    currentRoute: '/',
    // AI Keys
    apiKey: localStorage.getItem('ff_api_key') || '',
    get geminiKey() { return this.apiKey; },
    set geminiKey(v) { this.apiKey = v; },
    featherlessKey: localStorage.getItem('ff_featherless_key') || '',
    aiProvider: localStorage.getItem('ff_ai_provider') || 'gemini', // 'gemini' or 'featherless'
    // Workflows
    workflows: JSON.parse(localStorage.getItem('ff_workflows') || '[]'),
    activeWorkflowId: null,
    // Execution history
    execHistory: JSON.parse(localStorage.getItem('ff_exec_history') || '[]'),
    // Theme
    theme: localStorage.getItem('ff_theme') || 'dark',
};

export function saveState() {
    localStorage.setItem('ff_api_key', state.apiKey);
    localStorage.setItem('ff_featherless_key', state.featherlessKey);
    localStorage.setItem('ff_ai_provider', state.aiProvider);
    localStorage.setItem('ff_workflows', JSON.stringify(state.workflows));
    localStorage.setItem('ff_exec_history', JSON.stringify(state.execHistory));
    localStorage.setItem('ff_theme', state.theme);
}

/** Save a workflow (nodes + connections + title) */
export function saveWorkflow(id, title, nodes, connections) {
    const existing = state.workflows.findIndex(w => w.id === id);
    const wf = {
        id: id || crypto.randomUUID(),
        title: title || 'Untitled Workflow',
        nodes: JSON.parse(JSON.stringify(nodes)),
        connections: JSON.parse(JSON.stringify(connections)),
        updatedAt: new Date().toISOString(),
        createdAt: existing >= 0 ? state.workflows[existing].createdAt : new Date().toISOString(),
    };
    if (existing >= 0) {
        state.workflows[existing] = wf;
    } else {
        state.workflows.push(wf);
    }
    saveState();
    return wf.id;
}

/** Load a workflow by ID */
export function loadWorkflow(id) {
    return state.workflows.find(w => w.id === id) || null;
}

/** Delete a workflow */
export function deleteWorkflow(id) {
    state.workflows = state.workflows.filter(w => w.id !== id);
    saveState();
}

/** Add an execution record */
export function addExecRecord(workflowTitle, nodeCount, duration, success) {
    state.execHistory.unshift({
        id: crypto.randomUUID(),
        title: workflowTitle,
        nodeCount,
        duration,
        success,
        timestamp: new Date().toISOString(),
    });
    // Keep last 50
    if (state.execHistory.length > 50) state.execHistory = state.execHistory.slice(0, 50);
    saveState();
}
