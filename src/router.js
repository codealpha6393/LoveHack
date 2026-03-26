export function initRouter() {
    window.addEventListener('hashchange', handleRoute);
}

export function navigate(path) {
    window.location.hash = path;
}

async function handleRoute() {
    const path = window.location.hash.slice(1) || '/';
    const mainContent = document.getElementById('main-content');
    const sidebarContainer = document.getElementById('sidebar-container');

    // Clear main content with fade out
    mainContent.style.opacity = '0';

    setTimeout(async () => {
        mainContent.innerHTML = '';

        // Toggle sidebar visibility
        if (path === '/') {
            sidebarContainer.classList.add('hidden');
        } else {
            sidebarContainer.classList.remove('hidden');
            if (sidebarContainer.innerHTML === '') {
                const { setupSidebar } = await import('./app.js');
                setupSidebar();
            }
        }

        // Route logic
        switch (path) {
            case '/':
                const { renderLanding } = await import('./pages/landing.js');
                renderLanding();
                break;
            case '/canvas':
                const { renderCanvas } = await import('./canvas/canvas.js');
                renderCanvas();
                break;
            case '/dashboard':
                const { renderDashboard } = await import('./dashboard/dashboard.js');
                renderDashboard();
                break;
            default:
                mainContent.innerHTML = '<div class="flex h-full items-center justify-center text-xl">404 - Not Found</div>';
        }

        // Fade in
        mainContent.style.opacity = '1';
        mainContent.style.transition = 'opacity 0.3s ease';

        // Make sure icons render
        if (window.lucide) window.lucide.createIcons();

        // Update active nav link
        updateActiveNav(path);

    }, 150);
}

function updateActiveNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === `#${path}`) {
            link.classList.add('bg-bg-tertiary', 'text-accent-primary');
            link.classList.remove('text-secondary');
        } else {
            link.classList.remove('bg-bg-tertiary', 'text-accent-primary');
            link.classList.add('text-secondary');
        }
    });
}
