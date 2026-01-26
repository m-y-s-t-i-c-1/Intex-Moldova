/**
 * Notification System - INTEX Moldova
 * Beautiful toast/modal notifications
 */

class NotificationManager {
    constructor() {
        this.container = null;
        this.initContainer();
        this.toasts = [];
    }

    /**
     * Initialize toast container
     */
    initContainer() {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        this.container = container;
    }

    /**
     * Get icon based on type
     */
    getIcon(type) {
        const icons = {
            success: '<i class="fas fa-check-circle"></i>',
            error: '<i class="fas fa-exclamation-circle"></i>',
            info: '<i class="fas fa-info-circle"></i>',
            warning: '<i class="fas fa-warning"></i>'
        };
        return icons[type] || icons.info;
    }

    /**
     * Get title based on type
     */
    getDefaultTitle(type) {
        const titles = {
            success: 'Succes!',
            error: 'Eroare',
            info: 'Informație',
            warning: 'Avertisment'
        };
        return titles[type] || 'Notificare';
    }

    /**
     * Show toast notification
     */
    show(message, type = 'info', title = null, duration = 4000) {
        if (!this.container) this.initContainer();

        const toastTitle = title || this.getDefaultTitle(type);
        const toastIcon = this.getIcon(type);

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">${toastIcon}</div>
            <div class="toast-content">
                <div class="toast-title">${this.escapeHtml(toastTitle)}</div>
                <div class="toast-message">${this.escapeHtml(message)}</div>
            </div>
            <button class="toast-close" aria-label="Închide">&times;</button>
        `;

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.remove(toast));

        this.container.appendChild(toast);
        this.toasts.push(toast);

        // Auto remove after duration
        if (duration > 0) {
            setTimeout(() => this.remove(toast), duration);
        }

        return toast;
    }

    /**
     * Show success notification
     */
    success(message, title = 'Succes!', duration = 4000) {
        return this.show(message, 'success', title, duration);
    }

    /**
     * Show error notification
     */
    error(message, title = 'Eroare', duration = 5000) {
        return this.show(message, 'error', title, duration);
    }

    /**
     * Show info notification
     */
    info(message, title = 'Informație', duration = 4000) {
        return this.show(message, 'info', title, duration);
    }

    /**
     * Show warning notification
     */
    warning(message, title = 'Avertisment', duration = 4000) {
        return this.show(message, 'warning', title, duration);
    }

    /**
     * Remove toast
     */
    remove(toast) {
        toast.classList.add('removing');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
            const index = this.toasts.indexOf(toast);
            if (index > -1) {
                this.toasts.splice(index, 1);
            }
        }, 300);
    }

    /**
     * Clear all toasts
     */
    clearAll() {
        this.toasts.forEach(toast => this.remove(toast));
    }

    /**
     * Escape HTML
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Create global notification manager instance
window.notifyManager = new NotificationManager();
console.log('[NOTIFICATIONS] NotificationManager initialized');

// Expose notification functions globally
window.showNotification = (message, type, title, duration) => {
    console.log('[NOTIFICATIONS] Showing notification:', type, message);
    return window.notifyManager.show(message, type, title, duration);
};
window.showSuccess = (message, title, duration) => {
    console.log('[NOTIFICATIONS] Success:', message);
    return window.notifyManager.success(message, title, duration);
};
window.showError = (message, title, duration) => {
    console.log('[NOTIFICATIONS] Error:', message);
    return window.notifyManager.error(message, title, duration);
};
window.showInfo = (message, title, duration) => {
    console.log('[NOTIFICATIONS] Info:', message);
    return window.notifyManager.info(message, title, duration);
};
window.showWarning = (message, title, duration) => {
    console.log('[NOTIFICATIONS] Warning:', message);
    return window.notifyManager.warning(message, title, duration);
};
