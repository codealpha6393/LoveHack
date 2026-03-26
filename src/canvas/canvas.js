export function renderCanvas() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
    <div class="h-full w-full flex flex-col bg-[#111116] relative overflow-hidden">
      <!-- Top header -->
      <header class="h-14 border-b border-glass-border bg-glass-bg backdrop-blur-md flex items-center justify-between px-4 z-10">
        <div class="flex items-center gap-3">
          <h2 class="font-medium text-lg">Untitled Workflow</h2>
          <span class="px-2 py-0.5 rounded text-xs bg-bg-tertiary border border-glass-border text-text-secondary">Draft</span>
        </div>
        <div class="flex items-center gap-3">
          <button class="btn btn-secondary btn-sm" id="btn-ai-assistant">
            <i data-lucide="sparkles" class="w-4 h-4 text-accent-primary"></i>
            Generate with AI
          </button>
          <button class="btn btn-primary btn-sm">
            <i data-lucide="play" class="w-4 h-4"></i>
            Run Demo
          </button>
        </div>
      </header>
      
      <!-- Canvas Area -->
      <div class="flex-1 relative w-full h-full cursor-grab" id="workflow-canvas">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 24px 24px;"></div>
        
        <!-- Placeholder for actual node editor -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="text-center">
            <div class="w-16 h-16 bg-glass-bg border border-glass-border rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i data-lucide="mouse-pointer-click" class="w-8 h-8 text-text-tertiary"></i>
            </div>
            <p class="text-text-secondary mb-2">Drag and drop nodes here</p>
            <p class="text-sm text-text-tertiary">Or click "Generate with AI" to build automatically</p>
          </div>
        </div>
      </div>
    </div>
  `;

    if (window.lucide) window.lucide.createIcons();
}
