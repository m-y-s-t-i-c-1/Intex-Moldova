// Global theme manager: apply/toggle dark-mode site-wide using localStorage key 'intex_theme'
(function () {
    const STORAGE_KEY = 'intex_theme';
    const DARK_CLASS = 'dark-mode';

    function getSaved() {
        try {
            // Support legacy key 'theme' for backwards compatibility
            const legacy = localStorage.getItem('theme');
            if (legacy === 'dark' || legacy === 'light') {
                // migrate to new key
                localStorage.setItem(STORAGE_KEY, legacy === 'dark' ? 'dark' : 'light');
            }
            const saved = localStorage.getItem(STORAGE_KEY);
            // Verificăm dacă nu există nicio valoare salvată (null)
            if (saved === null) {
                // Dacă nu există preferință salvată, folosim preferința sistemului
                return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            return saved === 'dark';
        } catch (e) {
            console.error('Error reading theme from localStorage:', e);
            return false;
        }
    }

    function applyTheme(isDark) {
        try {
            document.body.classList.toggle(DARK_CLASS, !!isDark);
            const icon = document.getElementById('theme-icon') || document.querySelector('.theme-toggle i');
            if (icon) {
                icon.classList.remove('fa-moon', 'fa-sun');
                icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
            }
            localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
            
            // Adăugăm un atribut data-theme pentru a fi mai ușor de targetat în CSS
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            // Emit a global event so other scripts can react to theme changes
            try {
                document.dispatchEvent(new CustomEvent('themeChanged', { detail: { isDark: !!isDark } }));
            } catch (e) {
                // ignore
            }
        } catch (e) {
            console.error('applyTheme error', e);
        }
    }

    function toggleTheme() {
        const isDark = document.body.classList.contains(DARK_CLASS);
        applyTheme(!isDark);
    }

    function init() {
        // Apply saved theme or system preference
        const saved = getSaved();
        applyTheme(saved);

        // Bind toggle button (id or class) - mai robust
        const btn = document.getElementById('themeBtn') || document.querySelector('.theme-toggle');
        if (btn) {
            // Înlăturăm event listener-ul existent pentru a preveni duplicate
            btn.removeEventListener('click', toggleTheme);
            btn.addEventListener('click', toggleTheme);
            
            // Adăugăm atribut ARIA pentru accesibilitate
            btn.setAttribute('aria-label', 'Toggle dark mode');
        }

        // Ascultăm schimbările la preferința sistemului
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            // Folosim addEventListener în loc de addListener pentru compatibilitate modernă
            mediaQuery.addEventListener('change', (e) => {
                // Schimbăm tema doar dacă nu există o preferință salvată explicit
                if (!localStorage.getItem(STORAGE_KEY)) {
                    applyTheme(e.matches);
                }
            });
        }
    }

    // Initializare mai robustă
    function domReady() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            // Dacă DOM-ul este deja gata, inițializăm imediat
            init();
        }
    }

    // Pornim inițializarea
    domReady();

    // Re-apply theme on full window load to guard against other scripts overriding classes
    window.addEventListener('load', function () {
        try {
            const saved = getSaved();
            applyTheme(saved);
        } catch (e) {
            // ignore
        }
    });

    // Expose for other scripts
    window.applySiteTheme = applyTheme;
    window.toggleSiteTheme = toggleTheme;
})();