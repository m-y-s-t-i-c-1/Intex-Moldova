function initializeAccordion() {
    const ACTIVE_CLASS = 'active';
    const ACCORDION_ITEM_SELECTOR = '.accordion-item';
    const ACCORDION_HEADER_SELECTOR = '.accordion-header';
    const ACCORDION_CONTENT_SELECTOR = '.accordion-content';
    const MAX_HEIGHT_0 = '0px';

    // Cache DOM elements and state
    const accordionItems = document.querySelectorAll(ACCORDION_ITEM_SELECTOR);
    const accordionHeaders = document.querySelectorAll(ACCORDION_HEADER_SELECTOR);
    
    if (accordionHeaders.length === 0) return;

    // Precompute content elements for each header
    const headerContentMap = new Map();
    accordionHeaders.forEach(header => {
        headerContentMap.set(header, header.nextElementSibling);
    });

    // Single event delegation for better performance
    document.addEventListener('click', (event) => {
        const header = event.target.closest(ACCORDION_HEADER_SELECTOR);
        if (!header) return;

        const item = header.closest(ACCORDION_ITEM_SELECTOR);
        const content = headerContentMap.get(header);
        const isActive = item.classList.contains(ACTIVE_CLASS);

        // Close all other items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains(ACTIVE_CLASS)) {
                otherItem.classList.remove(ACTIVE_CLASS);
                const otherContent = otherItem.querySelector(ACCORDION_CONTENT_SELECTOR);
                if (otherContent) otherContent.style.maxHeight = MAX_HEIGHT_0;
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove(ACTIVE_CLASS);
            content.style.maxHeight = MAX_HEIGHT_0;
        } else {
            item.classList.add(ACTIVE_CLASS);
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    // Initialize all accordions as closed
    accordionItems.forEach(item => {
        const content = item.querySelector(ACCORDION_CONTENT_SELECTOR);
        if (content) {
            content.style.maxHeight = MAX_HEIGHT_0;
        }
    });
}

// Use DOMContentLoaded with a fallback
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAccordion);
} else {
    initializeAccordion();
}
