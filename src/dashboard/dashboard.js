export function renderDashboard() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
    <div class="h-full w-full p-8 overflow-y-auto">
      <div class="max-w-5xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Dashboard</h1>
          <p class="text-text-secondary">Track your automated workflows and execution history.</p>
        </header>

        <!-- Stats row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="glass-panel p-6 rounded-xl border-glass-border">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-text-secondary">Total Executions</h3>
              <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <i data-lucide="activity" class="w-4 h-4"></i>
              </div>
            </div>
            <p class="text-3xl font-bold">2,451</p>
            <p class="text-xs text-green-400 mt-2 flex items-center gap-1">
              <i data-lucide="trending-up" class="w-3 h-3"></i> +14% this week
            </p>
          </div>
          
          <div class="glass-panel p-6 rounded-xl border-glass-border">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-text-secondary">Active Workflows</h3>
              <div class="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <i data-lucide="zap" class="w-4 h-4"></i>
              </div>
            </div>
            <p class="text-3xl font-bold">12</p>
            <p class="text-xs text-text-tertiary mt-2 flex items-center gap-1">
              Out of 15 limit
            </p>
          </div>

          <div class="glass-panel p-6 rounded-xl border-glass-border">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-text-secondary">Success Rate</h3>
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                <i data-lucide="check-circle" class="w-4 h-4"></i>
              </div>
            </div>
            <p class="text-3xl font-bold">99.8%</p>
            <p class="text-xs text-text-tertiary mt-2 flex items-center gap-1">
              System is healthy
            </p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="glass-panel rounded-xl border-glass-border overflow-hidden">
          <div class="px-6 py-4 border-b border-glass-border flex items-center justify-between bg-white/5">
            <h3 class="font-semibold">Recent Executions</h3>
            <button class="text-sm text-accent-primary hover:text-accent-secondary">View All</button>
          </div>
          <div class="p-0">
            <div class="flex items-center justify-between px-6 py-4 border-b border-glass-border hover:bg-white/5 transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <i data-lucide="check" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="font-medium">New Customer Onboarding</h4>
                  <p class="text-xs text-text-secondary">Triggered via Webhook</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm">2 mins ago</p>
                <p class="text-xs text-text-tertiary">1.2s duration</p>
              </div>
            </div>
            <div class="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <i data-lucide="check" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="font-medium">Daily Data Sync</h4>
                  <p class="text-xs text-text-secondary">Scheduled trigger</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm">1 hr ago</p>
                <p class="text-xs text-text-tertiary">4.5s duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    if (window.lucide) window.lucide.createIcons();
}
