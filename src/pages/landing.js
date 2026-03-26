export function renderLanding() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
    <div class="h-full w-full overflow-y-auto overflow-x-hidden relative">
      <!-- Background Effects -->
      <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent-primary/20 to-transparent pointer-events-none"></div>
      <div class="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-accent-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <!-- Navbar -->
      <nav class="w-full h-20 flex items-center justify-between px-10 glass-panel border-b border-glass-border sticky top-0 z-50">
        <div class="flex items-center gap-3 cursor-pointer">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-glow">
            <i data-lucide="zap" class="text-white w-5 h-5"></i>
          </div>
          <h1 class="text-xl font-bold tracking-tight">FlowForge<span class="text-accent-primary">AI</span></h1>
        </div>
        <div class="flex gap-4">
          <button class="btn btn-secondary text-sm">Documentation</button>
          <button class="btn btn-primary" onclick="window.location.hash = '/canvas'">
            Start Building
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </nav>

      <!-- Hero Section -->
      <div class="flex flex-col items-center justify-center text-center mt-24 mb-32 px-4 animate-fade-in relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-6">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          LovHack Season 2 Winner
        </div>
        
        <h1 class="text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6">
          Automate anything with <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary">plain English.</span>
        </h1>
        
        <p class="text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
          The visual workflow studio that builds itself. Tell the AI what you want to automate, and watch as it connects the tools, logic, and APIs in real-time.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-accent-primary/20 transform transition hover:-translate-y-1" onclick="window.location.hash = '/canvas'">
            Launch AI Canvas
            <i data-lucide="wand-2" class="w-5 h-5"></i>
          </button>
          <button class="btn btn-secondary text-lg px-8 py-4 glass-panel hover:bg-white/10" onclick="window.location.hash = '/dashboard'">
            <i data-lucide="play-circle" class="w-5 h-5"></i>
            Watch Demo
          </button>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        <h2 class="text-center text-3xl font-bold mb-12">Powered by cutting-edge tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="glass-panel p-8 rounded-2xl border border-glass-border/50 hover:border-accent-primary/50 transition-colors group">
            <div class="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i data-lucide="bot" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Gemini 2.0 Brain</h3>
            <p class="text-text-secondary">Powered by Gemini for lightning-fast workflow generation from natural language prompts.</p>
          </div>
          <!-- Feature 2 -->
          <div class="glass-panel p-8 rounded-2xl border border-glass-border/50 hover:border-purple-500/50 transition-colors group">
            <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i data-lucide="layout-template" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Stitch AI Design</h3>
            <p class="text-text-secondary">Premium, pixel-perfect UI generated using Google's Stitch MCP for a massive visual wow factor.</p>
          </div>
          <!-- Feature 3 -->
          <div class="glass-panel p-8 rounded-2xl border border-glass-border/50 hover:border-green-500/50 transition-colors group">
            <div class="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i data-lucide="zap-fast" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Real-time Execution</h3>
            <p class="text-text-secondary">Watch your data flow through nodes visually. Build, test, and deploy instantly without writing code.</p>
          </div>
        </div>
      </div>
      
    </div>
  `;

    if (window.lucide) window.lucide.createIcons();
}
