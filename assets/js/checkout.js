// Checkout Page Script

// Helper function to get stored language
function getLang() {
    return localStorage['intex_language'] || 'ro';
}

// Get product title in current language
function getProductTitle(product) {
    const lang = getLang();
    if (typeof product.title === 'object' && product.title[lang]) {
        return product.title[lang];
    }
    if (typeof product.title === 'object') {
        return product.title.ro || product.title.ru || product.title.en || 'Product';
    }
    return product.title || 'Product';
}

// Initialize checkout page
function initCheckout() {
    displayCheckoutItems();
    setupFormSubmit();
    restoreLanguage();
}

// Display cart items in checkout
function displayCheckoutItems() {
    const cart = JSON.parse(localStorage['intex_cart'] || '[]');
    const container = document.getElementById('checkout-items-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (cart.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.padding = '20px';
        emptyMsg.style.color = 'var(--text-secondary)';
        emptyMsg.textContent = 'Coșul este gol';
        container.appendChild(emptyMsg);
        return;
    }
    
    let subtotal = 0;
    const allProducts = getAllProducts();
    
    cart.forEach(cartItem => {
        const product = allProducts.find(p => p.id === cartItem.id);
        if (!product) return;
        
        const title = getProductTitle(product);
        const price = product.price || 0;
        const qty = cartItem.qty || 1;
        const itemTotal = price * qty;
        subtotal += itemTotal;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'checkout-item';
        itemEl.innerHTML = `
            <span class="checkout-item-name">${title}</span>
            <span class="checkout-item-qty">x${qty}</span>
            <span class="checkout-item-price">${itemTotal.toFixed(2)} LEI</span>
        `;
        container.appendChild(itemEl);
    });
    
    updateTotals(subtotal);
}

// Update totals
function updateTotals(subtotal) {
    const totalEl = document.getElementById('checkout-total');
    
    if (totalEl) totalEl.textContent = subtotal.toFixed(2) + ' LEI';
}

// Get shipping cost based on selected method
function getShippingCost() {
    return 0.00;
}

// Update shipping when delivery method changes
function updateShipping() {
    const cart = JSON.parse(localStorage['intex_cart'] || '[]');
    let subtotal = 0;
    const allProducts = getAllProducts();
    
    cart.forEach(cartItem => {
        const product = allProducts.find(p => p.id === cartItem.id);
        if (product) {
            subtotal += (product.price || 0) * (cartItem.qty || 1);
        }
    });
    
    updateTotals(subtotal);
}

// Setup form submission
function setupFormSubmit() {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder();
    });
}

// Submit order
function submitOrder() {
    const form = document.getElementById('checkout-form');
    
    if (!form.checkValidity()) {
        alert('Completați toate câmpurile obligatorii!');
        return;
    }
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        postal: document.getElementById('postal').value,
        payment: document.querySelector('input[name="payment"]:checked').value,
        notes: document.getElementById('notes').value,
        cart: JSON.parse(localStorage['intex_cart'] || '[]'),
        timestamp: new Date().toISOString()
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage['intex_orders'] || '[]');
    orders.push(formData);
    localStorage['intex_orders'] = JSON.stringify(orders);
    
    // Clear cart
    localStorage['intex_cart'] = JSON.stringify([]);
    
    // Show success message
    alert('Comanda a fost plasată cu succes! Veți fi contactat în curând pentru confirmare.');
    
    // Redirect to products page
    window.location.href = './produse.html';
}

// Get all products (merged from data.js)
function getAllProducts() {
    // This assumes PRODUCTS_DATA and POOLS_PRODUCTS are loaded from data.js
    let allProducts = [...(PRODUCTS_DATA || [])];
    
    if (POOLS_PRODUCTS && POOLS_PRODUCTS.pools) {
        POOLS_PRODUCTS.pools.forEach(pool => {
            const product = {
                id: 'pool_' + Math.random().toString(36).substr(2, 9),
                title: pool.title,
                price: pool.price,
                image: pool.image,
                category: 'baseine_intex',
                __fromPools: true
            };
            allProducts.push(product);
        });
    }
    
    return allProducts;
}

// Restore language from localStorage and set language selector
function restoreLanguage() {
    const lang = getLang();
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = lang;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initCheckout);
