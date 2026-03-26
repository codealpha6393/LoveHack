export function setupSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');

    sidebarContainer.innerHTML = `
    <aside class="w-64 h-full glass-panel border-r border-glass-border flex flex-col pt-6 pb-4 px-4 shadow-xl z-20">
      <div class="flex items-center gap-3 mb-10 px-2 cursor-pointer" onclick="window.location.hash = '/'">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-glow">
          <i data-lucide="zap" class="text-white w-5 h-5"></i>
        </div>
        <h1 class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary">
          FlowForge<span class="text-accent-primary">AI</span>
        </h1>
      </div>

      <nav class="flex-1 flex flex-col gap-2">
        <a href="#/canvas" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:bg-white/5 transition-colors">
          <i data-lucide="git-merge" class="w-5 h-5"></i>
          <span class="font-medium">Canvas editor</span>
        </a>
        
        <a href="#/dashboard" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:bg-white/5 transition-colors">
          <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
          <span class="font-medium">Dashboard</span>
        </a>

        <a href="#/templates" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:bg-white/5 transition-colors">
          <i data-lucide="library" class="w-5 h-5"></i>
          <span class="font-medium">Templates</span>
        </a>
        
        <hr class="border-glass-border my-2">
        
        <a href="#/settings" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:bg-white/5 transition-colors">
          <i data-lucide="settings" class="w-5 h-5"></i>
          <span class="font-medium">Settings</span>
        </a>
      </nav>

      <div class="mt-auto">
        <div class="glass-panel rounded-xl p-4 border border-glass-border/50 bg-black/20">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-[2px]">
              <div class="w-full h-full bg-bg-secondary rounded-full flex items-center justify-center">
                 <i data-lucide="user" class="w-5 h-5 text-secondary"></i>
              </div>
            </div>
            <div>
              <p class="text-sm font-medium">Builder</p>
              <p class="text-xs text-text-tertiary">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `;

    if (window.lucide) window.lucide.createIcons();
}
