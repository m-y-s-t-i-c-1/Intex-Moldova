// Simplified product page script: rendering, search, pagination, and cart
(function () {
    const CONFIG = { ITEMS_PER_PAGE: 12 };

    const State = {
        currentCategory: null,
        currentSubcategory: null,
        currentProducts: [],
        page: 1,
        cart: [],
        grouped: null,
        showingSubcategory: null
    };

    // Helpers
    function byId(id) { return document.getElementById(id); }

    function normalizeImagePath(path) {
        if (!path) return '';
        // Paths are now correct with BASE_PATH
        return path;
    }

    function formatPrice(p) {
        const price = Number(p) || 0;
        return price.toFixed(2) + ' LEI';
    }

    // Language helper: reads saved language (fallback to 'ro')
    function getLang() {
        try { return localStorage.getItem('intex_language') || 'ro'; } catch (e) { return 'ro'; }
    }

    function getAllProducts() {
        // Dacă avem funcția de descrieri, folosește-o
        if (typeof getAllProductsWithDescriptions === 'function') {
            console.log('[DEBUG] Using getAllProductsWithDescriptions from descrieri_produse.js');
            const allProducts = getAllProductsWithDescriptions();
            const accessoryAliases = ['accessories', 'swim-accessories', 'boats_pool_accessories', 'boats_care', 'pool_accessories'];
            
            return allProducts.map(p => {
                let cat = p.category;
                if (cat === 'pools') cat = 'baseine_intex';
                if (accessoryAliases.includes(cat)) cat = 'swim-accessories';
                return { 
                    ...p, 
                    image: normalizeImagePath(p.image), 
                    category: cat 
                };
            });
        }
        
        console.log('[DEBUG] getAllProductsWithDescriptions NOT available, using fallback');
        
        // Fallback la vechea metodă dacă descriptions.js nu este încărcat
        const list = [];
        const accessoryAliases = ['accessories', 'swim-accessories', 'boats_pool_accessories', 'boats_care', 'pool_accessories'];
        
        if (typeof PRODUCTS_DATA !== 'undefined') {
            PRODUCTS_DATA.forEach(p => {
                let cat = p.category;
                if (cat === 'pools') cat = 'baseine_intex';
                if (accessoryAliases.includes(cat)) cat = 'swim-accessories';
                const newProd = Object.assign({}, p, { 
                    image: normalizeImagePath(p.image), 
                    category: cat
                });
                list.push(newProd);
            });
        }

        if (typeof POOLS_PRODUCTS !== 'undefined' && POOLS_PRODUCTS.pools) {
            POOLS_PRODUCTS.pools.forEach((p, index) => {
                const pSub = (p.sub || p.subcategory || '').toString();
                const isAccessorySub = accessoryAliases.includes(pSub);

                // Generate consistent pool IDs based on index
                const poolId = `pool_${String(index).padStart(4, '0')}`;

                const item = Object.assign({
                    id: poolId,
                    category: isAccessorySub ? 'swim-accessories' : 'baseine_intex',
                    subcategory: p.sub || p.subcategory || null,
                    title: p.title,
                    price: p.price || 0,
                    oldPrice: p.oldPrice || null,
                    image: normalizeImagePath(p.image),
                    __fromPools: true
                }, p);

                list.push(item);
            });
        }

        // Dacă există funcționalitate pentru a atașa descrieri, folosește-o
        if (typeof enhanceExistingProducts === 'function') {
            try { 
                console.log('[DEBUG] Using enhanceExistingProducts, list length before:', list.length);
                const enhanced = enhanceExistingProducts(list);
                console.log('[DEBUG] List enhanced, first product description:', enhanced[0]?.description?.substring(0, 50));
                return enhanced;
            } catch (e) { console.log('[DEBUG] enhanceExistingProducts error:', e.message); }
        }

        if (typeof getProductDescription === 'function') {
            try {
                console.log('[DEBUG] Using getProductDescription, list length:', list.length);
                const result = list.map(prod => Object.assign({}, prod, { description: getProductDescription(prod.id, prod.category, prod.subcategory) }));
                console.log('[DEBUG] Descriptions added, first:', result[0]?.description?.substring(0, 50));
                return result;
            } catch (e) { console.log('[DEBUG] getProductDescription error:', e.message); }
        }

        return list;
    }

    // Cart
    function loadCart() {
        try {
            State.cart = JSON.parse(localStorage.getItem('intex_cart') || '[]');
        } catch (e) { State.cart = []; }
        updateCartCount();
    }

    function saveCart() { localStorage.setItem('intex_cart', JSON.stringify(State.cart)); }

    function updateCartCount() {
        const countEl = byId('cartCount');
        const total = State.cart.reduce((s,i)=>s+(i.qty||0),0);
        if (countEl) countEl.innerText = total;
    }

    function addToCart(id) {
        const found = State.cart.find(i=>i.id===id);
        if (found) found.qty = (found.qty||0)+1;
        else State.cart.push({ id, qty: 1 });
        saveCart();
        updateCartCount();
        renderCartItems();
        // Show notification with product title
        try {
            const products = getAllProducts();
            const p = products.find(x=>String(x.id) === String(id));
            let title = id;
            if (p) {
                if (p.title && typeof p.title === 'object') {
                    const lang = getLang();
                    title = p.title[lang] || p.title.ro || Object.values(p.title)[0] || id;
                } else {
                    title = p.title || id;
                }
            }
            const lang = getLang();
            const t = (window.translations && window.translations[lang]) ? window.translations[lang] : (window.translations && window.translations.ro) || {};
            const template = t.add_to_cart_success || '{title} a fost adăugat în coș';
            const msg = template.replace('{title}', title);
            if (window.showSuccess) window.showSuccess(msg); else alert(msg);
        } catch (e) { /* ignore */ }
    }

    function removeFromCart(id) {
        // Try to get product title for a friendly message
        try {
            const products = getAllProducts();
            const p = products.find(x=>String(x.id) === String(id));
            let title = id;
            if (p) {
                if (p.title && typeof p.title === 'object') {
                    const lang = getLang();
                    title = p.title[lang] || p.title.ro || Object.values(p.title)[0] || id;
                } else {
                    title = p.title || id;
                }
            }

            State.cart = State.cart.filter(i=>i.id!==id);
            saveCart(); updateCartCount(); renderCartItems();

            const lang = getLang();
            const t = (window.translations && window.translations[lang]) ? window.translations[lang] : (window.translations && window.translations.ro) || {};
            const template = t.removed_from_cart || '{title} a fost eliminat din coș';
            const msg = template.replace('{title}', title);
            if (window.showSuccess) window.showSuccess(msg); else alert(msg);
        } catch (e) {
            State.cart = State.cart.filter(i=>i.id!==id);
            saveCart(); updateCartCount(); renderCartItems();
        }
    }

    function changeQty(id, delta) {
        const it = State.cart.find(i=>i.id===id);
        if (!it) return;
        it.qty = (it.qty||0) + delta;
        if (it.qty <= 0) {
            // removal will show notification
            removeFromCart(id);
        } else {
            saveCart(); updateCartCount(); renderCartItems();
            try {
                const products = getAllProducts();
                const p = products.find(x=>String(x.id) === String(id));
                let title = id;
                if (p) {
                    if (p.title && typeof p.title === 'object') {
                        const lang = getLang();
                        title = p.title[lang] || p.title.ro || Object.values(p.title)[0] || id;
                    } else {
                        title = p.title || id;
                    }
                }
                if (window.showInfo) window.showInfo((window.translations && window.translations[getLang()] && window.translations[getLang()].qty_updated) ? window.translations[getLang()].qty_updated.replace('{title}', title) : 'Cantitate actualizată pentru ' + title);
                else {
                    const lang = getLang();
                    const t = (window.translations && window.translations[lang]) ? window.translations[lang] : (window.translations && window.translations.ro) || {};
                    const template = t.qty_updated || 'Cantitate actualizată pentru {title}';
                    const msg = template.replace('{title}', title);
                    alert(msg);
                }
            } catch (e) { /* ignore */ }
        }
    }

    function renderCartItems() {
        const container = byId('cart-items-container');
        const totalEl = byId('cart-total');
        if (!container) return;
        container.innerHTML = '';
        if (!State.cart.length) {
            container.innerHTML = `<p class="cart-empty" data-i18n="cart_empty">Coșul este gol</p>`;
            if (totalEl) totalEl.innerText = '0.00 LEI';
            return;
        }
        const products = getAllProducts();
        let total = 0;
        State.cart.forEach(item=>{
            const p = products.find(x=>x.id==item.id);
            if (!p) return;
            const line = (p.price||0) * (item.qty||1);
            total += line;
            
            // Get product title in current language
            let title = p.title;
            if (p.title && typeof p.title === 'object') {
                const lang = getLang();
                title = p.title[lang] || p.title.ro || Object.values(p.title)[0] || 'Produs';
            }
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            
            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <strong>${title}</strong>
                <small>${formatPrice(p.price)} x ${item.qty}</small>
            `;
            
            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'cart-item-controls';
            
            const minusBtn = document.createElement('button');
            minusBtn.textContent = '−';
            minusBtn.onclick = () => window.changeQty(item.id, -1);
            
            const qtySpan = document.createElement('span');
            qtySpan.textContent = item.qty;
            qtySpan.style.minWidth = '20px';
            qtySpan.style.textAlign = 'center';
            
            const plusBtn = document.createElement('button');
            plusBtn.textContent = '+';
            plusBtn.onclick = () => window.changeQty(item.id, 1);
            
            const priceSpan = document.createElement('span');
            priceSpan.className = 'cart-item-price';
            priceSpan.textContent = formatPrice(line);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'cart-item-delete';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.title = 'Șterge din coș';
            deleteBtn.onclick = () => window.removeFromCart(item.id);
            
            controlsDiv.appendChild(minusBtn);
            controlsDiv.appendChild(qtySpan);
            controlsDiv.appendChild(plusBtn);
            controlsDiv.appendChild(priceSpan);
            controlsDiv.appendChild(deleteBtn);
            
            div.appendChild(infoDiv);
            div.appendChild(controlsDiv);
            container.appendChild(div);
        });
        if (totalEl) totalEl.innerText = formatPrice(total);
    }

    // UI: categories & products
    function getCategoryTitle(cat) {
        // Normalize legacy id 'pools' to our canonical 'baseine_intex'
        if (cat === 'pools') cat = 'baseine_intex';
        const c = (typeof CATEGORIES_DATA !== 'undefined') ? CATEGORIES_DATA.find(x=>x.id===cat) : null;
        if (!c) return cat;
        const lang = getLang();
        if (c.i18n_title && typeof c.i18n_title === 'object') {
            return c.i18n_title[lang] || c.i18n_title.ro || Object.values(c.i18n_title)[0];
        }
        return c.title || c.id;
    }

    // Subcategory title resolver (uses SUBCATEGORIES_DATA where available)
    function getSubcategoryLabel(subId) {
        if (!subId || typeof SUBCATEGORIES_DATA === 'undefined') return subId || '';
        const lang = getLang();
        // look for the subId inside pools subcategories first
        for (const key in SUBCATEGORIES_DATA) {
            if (!Array.isArray(SUBCATEGORIES_DATA[key])) continue;
            const found = SUBCATEGORIES_DATA[key].find(s => s.id === subId);
            if (found && found.title) {
                return (found.title[lang] || found.title.ro || Object.values(found.title)[0]);
            }
        }
        return subId;
    }

    function renderCategories() {
        const menu = byId('category-menu');
        if (!menu || typeof CATEGORIES_DATA === 'undefined') return;
        menu.innerHTML = '';
        
        // Icon mapping for categories (Font Awesome)
        const categoryIcons = {
            'boats': 'fas fa-water',
            'joaca': 'fas fa-gamepad',
            'transport': 'fas fa-bicycle',
            'pools': 'fas fa-swimming-pool',
            'accessories': 'fas fa-toolbox',
            'baseine_intex': 'fas fa-swimming-pool',
            'copii-pools': 'fas fa-child',
            'swim-accessories': 'fas fa-swimmer',
            'inflatable-mattresses': 'fas fa-bed',
            'pumps': 'fas fa-fan'
        };
        
        CATEGORIES_DATA.forEach(cat=>{
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.cursor = 'pointer';
                const title = getCategoryTitle(cat.id);
                const lang = getLang();
                let desc = '';
                if (cat.i18n_desc && typeof cat.i18n_desc === 'object') {
                    desc = cat.i18n_desc[lang] || cat.i18n_desc.ro || Object.values(cat.i18n_desc)[0] || '';
                } else {
                    desc = cat.i18n_desc || '';
                }
            const iconClass = categoryIcons[cat.id] || 'fas fa-box';
            const viewText = (window.translations && window.translations[lang] && window.translations[lang].cat_view_btn) || 'Vezi produse';
            card.innerHTML = `<div class="card-icon" style="font-size:3em;margin-bottom:12px;color:#0284c7"><i class="${iconClass}"></i></div>
                <h4 style="margin:8px 0">${title}</h4>
                <p style="font-size:0.9em;color:#666">${desc}</p>
                <button class="btn-main" data-i18n="cat_view_btn" style="margin-top:8px">${viewText}</button>`;
            card.addEventListener('click', ()=>{ viewProducts(cat.id); });
            menu.appendChild(card);
        });
    }

    // Re-render categories when language changes so titles/descriptions update
    window.addEventListener('languageChanged', (e) => {
        try { renderCategories(); } catch (err) { /* ignore */ }
    });

    function viewProducts(categoryId) {
        const container = byId('product-list-container');
        const catTitle = byId('currentCategoryTitle');
        const menu = byId('category-menu');
        if (menu) menu.classList.add('hidden');
        if (container) container.classList.remove('hidden');
        // Normalizează id-ul pentru categoria "Bazine Intex" astfel încât să folosească logica existentă
        if (categoryId === 'pools') categoryId = 'baseine_intex';
        State.currentCategory = categoryId;
        State.page = 1;
        State.showingSubcategory = null; // Reset subcategory view
        const all = getAllProducts();
        console.log('[DEBUG] viewProducts called for:', categoryId);
        console.log('[DEBUG] total products from data:', Array.isArray(all) ? all.length : typeof all);
        if (Array.isArray(all)) {
            const sampleCats = Array.from(new Set(all.map(x=>x.category))).slice(0,40);
            console.log('[DEBUG] sample categories:', sampleCats);
            const counts = all.reduce((m,p)=>{ const k = p.category || '<<none>>'; m[k] = (m[k]||0)+1; return m; }, {});
            console.log('[DEBUG] counts by category (top 20):', Object.entries(counts).slice(0,20));
            console.log('[DEBUG] first 8 products:', all.slice(0,8).map(p=>({id:p.id||p.title, category:p.category, title: (p.title && (p.title.ro||p.title.en||p.title))}))); 
        }
        
        // Map category aliases to actual subcategories
        const categoryMap = {
            'accessories': ['swim-accessories', 'boats_pool_accessories', 'boats_care'],
            'spares': ['intex_parts']
        };

        let filtered = [];
        if (categoryId === 'baseine_intex') {
            // Include all products that come from POOLS_PRODUCTS (have sub/subcategory)
            // and group them into ordered subcategories for display
            // Build groupsOrder using multilingual labels from SUBCATEGORIES_DATA when possible
            const poolAccessoryLabels = {
                ro: 'Accesorii pentru bazine',
                ru: 'Аксессуары для бассейнов',
                en: 'Pool accessories'
            };
            const lang = getLang();
            const groupsOrder = [
                { id: 'care_water', label: getSubcategoryLabel('care_water') },
                { id: 'intex_parts', label: getSubcategoryLabel('intex_parts') },
                { id: 'frame_pools', label: getSubcategoryLabel('frame_pools') },
                { id: 'easy_set', label: getSubcategoryLabel('easy_set') },
                { id: 'filters', label: getSubcategoryLabel('filters') },
                { id: 'pool_accessories', label: poolAccessoryLabels[lang] || poolAccessoryLabels.ro }
            ];

            // Build groups and assign each product to the first matching group to avoid duplicates
            const groupsMap = {};
            groupsOrder.forEach(g => { groupsMap[g.id] = { id: g.id, label: g.label, items: [] }; });

            // helper to check equality
            function eq(a, b) { return a && b && a.toString() === b.toString(); }

            // iterate products and put each into the first matching group
            all.forEach(p => {
                // only consider pool-related products (those with sub/subcategory or pool-related categories)
                const pSub = p.sub || p.subcategory || null;
                const pCat = p.category || '';

                let assigned = false;

                // 1) exact sub match groups
                for (const g of groupsOrder) {
                    if (g.id === 'pool_accessories') continue; // skip accessories here
                    if (pSub && eq(pSub, g.id)) {
                        groupsMap[g.id].items.push(p);
                        assigned = true;
                        break;
                    }
                }

                if (assigned) return;

                // 2) intex_parts may also be present in category field
                if (pCat === 'intex_parts' && groupsMap['intex_parts']) {
                    groupsMap['intex_parts'].items.push(p);
                    return;
                }

                // 3) pool_accessories: catch remaining pool/accessory related items
                // Only include products into pool_accessories when they are clearly pool-related
                const accessoryCats = ['accessories', 'swim-accessories', 'boats_pool_accessories', 'boats_care'];
                // pool-related keywords used only for products that originate from pools or are category 'pools'
                const poolKeywords = ['filter', 'filtr', 'pompa', 'pompe', 'pump', 'skimmer', 'chlor', 'clor', 'intex', 'bazin', 'bazinul', 'piscin', 'piscină', 'pool', 'filter-sand', 'adapter', 'valve'];
                const titleStr = ((p.title && (p.title.ro || p.title.en || p.title)) || '').toString().toLowerCase();
                const titleMatches = poolKeywords.some(k => titleStr.includes(k));

                // Rules:
                // - If product explicitly belongs to 'pools' (or was merged from POOLS_PRODUCTS), allow matching by keywords or sub
                // - If product already has an accessory-like category/subcategory, include it
                // - Do NOT include arbitrary PRODUCTS_DATA items based only on title keyword matches
                const isFromPools = !!p.__fromPools || pCat === 'pools';

                if (isFromPools) {
                    // allow if subcategory suggests accessory or title contains pool keyword
                    if ((pSub && accessoryCats.includes(pSub)) || titleMatches || accessoryCats.includes(pCat)) {
                        groupsMap['pool_accessories'].items.push(p);
                        return;
                    }
                } else {
                    // not from pools: only include if its category/subcategory is explicitly an accessory category
                    if (accessoryCats.includes(pCat) || (pSub && accessoryCats.includes(pSub))) {
                        groupsMap['pool_accessories'].items.push(p);
                        return;
                    }
                }

                // 5) otherwise ignore (not pool-related)
            });

            // Dedupe produse între grupuri: fiecare produs apare o singură dată, în primul grup în care a fost găsit
            const seenIds = new Set();
            State.grouped = groupsOrder.map(g => {
                const group = groupsMap[g.id];
                if (!group || !group.items) return { id: g.id, label: g.label, items: [] };
                const uniqueItems = [];
                group.items.forEach(it => {
                    const iid = it.id || (it.title && (it.title.ro || it.title.en || it.title)) || JSON.stringify(it);
                    if (!seenIds.has(iid)) {
                        seenIds.add(iid);
                        uniqueItems.push(it);
                    }
                });
                return { id: group.id, label: group.label, items: uniqueItems };
            });
            
            // Afișează direct lista de subcategorii (doar antetele)
            State.currentProducts = []; // Nu afișăm produsele direct
        } else if (categoryMap[categoryId]) {
            // If category has aliases, filter by those subcategories
            filtered = all.filter(p => categoryMap[categoryId].includes(p.category));
            console.log('[DEBUG] categoryMap filter for', categoryId, 'found', filtered.length, 'items');
            State.grouped = null;
            State.currentProducts = filtered;
        } else {
            // Otherwise filter by exact category match
            filtered = all.filter(p=>p.category===categoryId || (p.category && p.category.toString()===categoryId));
            console.log('[DEBUG] exact filter for', categoryId, 'found', filtered.length, 'items');
            State.grouped = null;
            State.currentProducts = filtered;
        }

        if (catTitle) {
            catTitle.innerText = getCategoryTitle(categoryId);
        }
        renderProductsPage();
    }

    // Funcție nouă pentru a afișa produsele unei subcategorii
    function showSubcategoryProducts(group) {
        State.showingSubcategory = group;
        State.page = 1;
        renderProductsPage();
    }

    function renderProductsPage() {
        const grid = byId('productListGrid');
        const pagination = byId('pagination-container');
        const catTitle = byId('currentCategoryTitle');
        const backBtnText = byId('backBtnText');
        if (!grid) return;
        grid.innerHTML = '';

        // Helper to render compact pagination (1 2 ... n-1 n with neighbors)
        function createPaginationButtons(paginationEl, totalPages, currentPage) {
            if (!paginationEl) return;
            const appendNav = (pageNum) => {
                const btn = document.createElement('button');
                btn.className = `page-btn ${pageNum === currentPage ? 'active' : ''}`;
                btn.textContent = pageNum;
                btn.onclick = () => { State.page = pageNum; renderProductsPage(); const container = document.getElementById('product-list-container'); if (container) container.scrollIntoView({behavior:'smooth', block:'start'}); };
                paginationEl.appendChild(btn);
            };

            // if few pages, show all
            if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) appendNav(i);
                return;
            }

            // Always show first two
            appendNav(1);
            appendNav(2);

            // Determine middle window
            const left = Math.max(3, currentPage - 1);
            const right = Math.min(totalPages - 2, currentPage + 1);

            if (left > 3) {
                const ell = document.createElement('span'); ell.className = 'page-ellipsis'; ell.textContent = '...'; paginationEl.appendChild(ell);
            } else if (left === 3) {
                appendNav(3);
            }

            for (let i = left; i <= right; i++) {
                if (i > 2 && i < totalPages - 1) appendNav(i);
            }

            if (right < totalPages - 2) {
                const ell2 = document.createElement('span'); ell2.className = 'page-ellipsis'; ell2.textContent = '...'; paginationEl.appendChild(ell2);
            } else if (right === totalPages - 2) {
                appendNav(totalPages - 2);
            }

            // Always show last two
            appendNav(totalPages - 1);
            appendNav(totalPages);
        }

        // Dacă suntem în modul de vizualizare a unei subcategorii
        if (State.showingSubcategory) {
            // Schimbă textul butonului "Înapoi" (folosind traduceri)
            if (backBtnText) {
                const lang = getLang();
                backBtnText.textContent = (window.translations && window.translations[lang] && window.translations[lang].back_btn_subcats) || 'La Subcategorii';
            }

            const products = State.showingSubcategory.items || [];
            
            if (!products.length) {
                const emptyMsg = document.createElement('p');
                emptyMsg.textContent = 'Nu s-au găsit produse în această subcategorie.';
                emptyMsg.style.textAlign = 'center';
                emptyMsg.style.color = '#666';
                grid.appendChild(emptyMsg);
                if (pagination) pagination.innerHTML = '';
                return;
            }

            // Actualizează titlul paginii
            if (catTitle) {
                catTitle.textContent = `${getCategoryTitle(State.currentCategory)} - ${State.showingSubcategory.label}`;
            }

            // Afișează produsele cu paginare
            const totalPages = Math.max(1, Math.ceil(products.length / CONFIG.ITEMS_PER_PAGE));
            if (State.page > totalPages) State.page = totalPages;
            const start = (State.page - 1) * CONFIG.ITEMS_PER_PAGE;
            const end = start + CONFIG.ITEMS_PER_PAGE;

            // Use the existing #productListGrid so CSS controls responsive columns
            const productsGrid = grid; // alias to the real container
            productsGrid.classList.add('product-list-grid');
            productsGrid.style.gap = '16px';

            products.slice(start, end).forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                const lang = getLang();
                const title = (p.title && p.title[lang]) ? p.title[lang] : (p.title && p.title.ro) ? p.title.ro : (p.title || 'Produs');
                const addText = (window.translations && window.translations[lang] && window.translations[lang].add_to_cart) || 'Adaugă în coș';
                const desc = (p.description && p.description[lang]) ? p.description[lang] : (p.description && p.description.ro) ? p.description.ro : '';
                const img = p.image || '';
                const priceHtml = (p.oldPrice && p.oldPrice > p.price) ? 
                    `<div class="price-container">
                        <span class="old-price">${formatPrice(p.oldPrice)}</span>
                        <span class="new-price">${formatPrice(p.price)}</span>
                    </div>` : 
                    `<div class="price-val">${formatPrice(p.price)}</div>`;
                
                const isMobile = window.innerWidth < 768;
                card.innerHTML = `
                    <div class="img-wrapper">
                        <img src="${img}" alt="${title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                    </div>
                    <h5 class="product-title" style="margin:10px 0; height:40px; overflow:hidden;">${title}</h5>
                    ${desc ? `<p class="product-description" style="margin:5px 0; font-size:0.9em; color:#666; height:30px; overflow:hidden;">${desc}</p>` : ''}
                    ${isMobile && desc ? `<a class="read-more-link" style="display:block; color:#ff6b35; text-decoration:none; font-size:0.85em; margin:8px 0; cursor:pointer;">Citește mai mult</a>` : ''}
                    <div class="product-price" style="margin-bottom:15px;">${priceHtml}</div>
                    <button class="btn-main btn-add-cart" style="width:100%; padding:10px; cursor:pointer;">
                        <i class="fas fa-shopping-cart"></i> ${addText}
                    </button>
                `;
                
                const btn = card.querySelector('.btn-add-cart');
                btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(p.id || p.title); });
                
                // On both mobile and larger screens: open modal on card click
                card.addEventListener('click', (e) => {
                    // Don't open modal if clicking the add to cart button
                    if (e.target.closest('.btn-add-cart')) return;
                    openProductModal(p);
                });
                
                productsGrid.appendChild(card);
            });

            // Paginare
            if (pagination) {
                pagination.innerHTML = '';
                if (totalPages > 1) {
                    if (State.page > 1) {
                        const prev = document.createElement('button');
                        prev.className = 'page-btn';
                        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
                        prev.onclick = () => { State.page--; renderProductsPage(); const container = document.getElementById('product-list-container'); if (container) container.scrollIntoView({behavior:'smooth', block:'start'}); };
                        pagination.appendChild(prev);
                    }
                    
                    for (let i = 1; i <= totalPages; i++) {
                        const btn = document.createElement('button');
                        btn.className = `page-btn ${i === State.page ? 'active' : ''}`;
                        btn.textContent = i;
                        btn.onclick = (() => {
                            const pageNum = i;
                            return () => { State.page = pageNum; renderProductsPage(); const container = document.getElementById('product-list-container'); if (container) container.scrollIntoView({behavior:'smooth', block:'start'}); };
                        })();
                        pagination.appendChild(btn);
                    }
                    
                    if (State.page < totalPages) {
                        const next = document.createElement('button');
                        next.className = 'page-btn';
                        next.innerHTML = '<i class="fas fa-chevron-right"></i>';
                        next.onclick = () => { State.page++; renderProductsPage(); const container = document.getElementById('product-list-container'); if (container) container.scrollIntoView({behavior:'smooth', block:'start'}); };
                        pagination.appendChild(next);
                    }
                }
            }
            
            return;
        }

        // Dacă avem grupuri (pentru baseine_intex) - afișăm doar lista de subcategorii
        if (State.grouped && State.currentCategory === 'baseine_intex') {
            // Schimbă textul butonului "Înapoi" (folosind traduceri)
            if (backBtnText) {
                const lang = getLang();
                backBtnText.textContent = (window.translations && window.translations[lang] && window.translations[lang].back_btn_categories) || 'La Categorii';
            }

            const subcatList = document.createElement('div');
            subcatList.className = 'subcategory-list';
            
            State.grouped.forEach(group => {
                if (group.items.length === 0) return; // Sari peste subcategoriile goale
                
                const subcatCard = document.createElement('div');
                subcatCard.className = 'subcategory-card';
                subcatCard.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3>${group.label}</h3>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span class="subcategory-count">${group.items.length} produse</span>
                            <i class="fas fa-chevron-right subcategory-arrow"></i>
                        </div>
                    </div>
                `;
                
                // Click pentru a vedea produsele
                subcatCard.addEventListener('click', () => showSubcategoryProducts(group));
                
                subcatList.appendChild(subcatCard);
            });
            
            grid.appendChild(subcatList);
            if (pagination) pagination.innerHTML = '';
            return;
        }

        // Cazul normal - afișare produse directe (pentru alte categorii)
        const products = State.currentProducts || [];
        const lang = getLang();
        if (!products.length) {
            grid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:#666; padding:40px 0">Nu s-au găsit produse</p>`;
            if (pagination) pagination.innerHTML = '';
            return;
        }
        
        const totalPages = Math.max(1, Math.ceil(products.length / CONFIG.ITEMS_PER_PAGE));
        if (State.page > totalPages) State.page = totalPages;
        const start = (State.page - 1) * CONFIG.ITEMS_PER_PAGE;
        const end = start + CONFIG.ITEMS_PER_PAGE;
        
        // Use the existing #productListGrid so CSS controls responsive columns
        const productsGrid = grid; // alias to the real container
        productsGrid.classList.add('product-list-grid');
        productsGrid.style.gap = '16px';
        
            products.slice(start, end).forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.cursor = 'pointer';
                const title = (p.title && p.title[lang]) ? p.title[lang] : (p.title && p.title.ro) ? p.title.ro : (p.title || 'Produs');
                const addText = (window.translations && window.translations[lang] && window.translations[lang].add_to_cart) || 'Adaugă în coș';
            const img = p.image || '';
            const descText = (p.description && (p.description[lang] || p.description.ro || p.description.en)) ? (p.description[lang] || p.description.ro || p.description.en) : '';
            const priceHtml = (p.oldPrice && p.oldPrice > p.price) ? 
                `<div class="price-container">
                    <span class="old-price">${formatPrice(p.oldPrice)}</span>
                    <span class="new-price">${formatPrice(p.price)}</span>
                </div>` : 
                `<div class="price-val">${formatPrice(p.price)}</div>`;
            
            const isMobile = window.innerWidth < 768;
            card.innerHTML = `
                <div class="img-wrapper">
                    <img src="${img}" alt="${title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                </div>
                <h5 class="product-title" style="margin:10px 0; height:40px; overflow:hidden;">${title}</h5>
                ${descText ? `<p class="product-description" style="margin:5px 0; font-size:0.9em; color:#666; height:30px; overflow:hidden;">${descText}</p>` : ''}
                ${isMobile && descText ? `<a class="read-more-link" style="display:block; color:#ff6b35; text-decoration:none; font-size:0.85em; margin:8px 0; cursor:pointer;">Citește mai mult</a>` : ''}
                <div class="product-price" style="margin-bottom:15px;">${priceHtml}</div>
                    <button class="btn-main btn-add-cart" style="width:100%; padding:10px; cursor:pointer;">
                        <i class="fas fa-shopping-cart"></i> ${addText}
                </button>
            `;
            
            const btn = card.querySelector('.btn-add-cart');
            btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(p.id || p.title); });
            
            // On both mobile and larger screens: open modal on card click
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking the add to cart button
                if (e.target.closest('.btn-add-cart')) return;
                openProductModal(p);
            });
            
            productsGrid.appendChild(card);
        });
        
        // productsGrid is the grid itself; no need to append it.
        
        // Paginare pentru cazul normal
        if (pagination) {
            pagination.innerHTML = '';
            // Setează stiluri inline pentru containerul de paginare
            pagination.style.display = 'flex';
            pagination.style.justifyContent = 'center';
            pagination.style.alignItems = 'center';
            pagination.style.gap = '8px';
            pagination.style.marginTop = '40px';
            pagination.style.marginBottom = '40px';
            // allow wrapping controlled by CSS to avoid horizontal page scroll
            // pagination.style.flexWrap = 'nowrap';
            if (totalPages > 1) {
                if (State.page > 1) {
                    const prev = document.createElement('button');
                    prev.className = 'page-btn';
                    prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
                    prev.onclick = () => { State.page--; renderProductsPage(); };
                    pagination.appendChild(prev);
                }
                
                    // compact pagination
                    createPaginationButtons(pagination, totalPages, State.page);
                
                if (State.page < totalPages) {
                    const next = document.createElement('button');
                    next.className = 'page-btn';
                    next.innerHTML = '<i class="fas fa-chevron-right"></i>';
                    next.onclick = () => { State.page++; renderProductsPage(); };
                    pagination.appendChild(next);
                }
            }
        }
    }

    // Search - FUNCȚIA REPARATĂ
    function performSearch(q) {
        // Handle both string query and event object from form submit
        if (q && typeof q === 'object' && q.preventDefault) {
            q.preventDefault();
            const inp = document.querySelector('#search-overlay input') || document.querySelector('input#search-input');
            q = inp ? inp.value : '';
        }
        
        q = (q||'').toString().trim();
        if (!q) return;
        
        const all = getAllProducts();
        const query = q.toLowerCase();
        const lang = getLang();
        
        // Helper: check if query matches any category/subcategory name or description
        function matchesCategory(p) {
            const pCat = p.category || '';
            const pSub = p.sub || p.subcategory || '';
            
            // Get category title
            if (typeof CATEGORIES_DATA !== 'undefined') {
                const cat = CATEGORIES_DATA.find(c => c.id === pCat);
                if (cat) {
                    // Check category title in all languages
                    if (cat.i18n_title && typeof cat.i18n_title === 'object') {
                        for (const langKey in cat.i18n_title) {
                            if (cat.i18n_title[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                    // Check category description in all languages
                    if (cat.i18n_desc && typeof cat.i18n_desc === 'object') {
                        for (const langKey in cat.i18n_desc) {
                            if (cat.i18n_desc[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                }
            }
            
            // Get subcategory title (if in SUBCATEGORIES_DATA)
            if (typeof SUBCATEGORIES_DATA !== 'undefined' && pSub) {
                for (const key in SUBCATEGORIES_DATA) {
                    if (!Array.isArray(SUBCATEGORIES_DATA[key])) continue;
                    const found = SUBCATEGORIES_DATA[key].find(s => s.id === pSub);
                    if (found && found.title && typeof found.title === 'object') {
                        for (const langKey in found.title) {
                            if (found.title[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                }
            }
            
            return false;
        }
        
        State.currentProducts = all.filter(p => {
            // Handle both object and string titles
            let title = '';
            if (p.title && typeof p.title === 'object') {
                // Try all languages
                title = (p.title[lang] || p.title.ro || Object.values(p.title)[0] || '').toLowerCase();
            } else {
                title = (p.title || '').toLowerCase();
            }
            
            // Also search in description if available
            let description = '';
            if (p.description && typeof p.description === 'object') {
                description = (p.description[lang] || p.description.ro || Object.values(p.description)[0] || '').toLowerCase();
            } else {
                description = (p.description || '').toLowerCase();
            }
            
            // Search in title, description, OR category/subcategory match
            return title.includes(query) || 
                   description.includes(query) || 
                   matchesCategory(p);
        });
        
        State.page = 1;
        State.currentCategory = null;
        State.grouped = null;
        State.showingSubcategory = null; // Reset subcategory view when searching
        
        const catTitle = byId('currentCategoryTitle');
        if (catTitle) {
            const lang = getLang();
            const searchTitles = {
                ro: `Rezultatele căutării pentru "${q}"`,
                ru: `Результаты поиска для "${q}"`,
                en: `Search results for "${q}"`
            };
            catTitle.innerText = searchTitles[lang] || searchTitles.ro;
        }
        
        const categoryMenu = byId('category-menu'); 
        if (categoryMenu) categoryMenu.classList.add('hidden');
        
        const container = byId('product-list-container'); 
        if (container) container.classList.remove('hidden');
        
        renderProductsPage();
        
        // Close search overlay if open
        const searchOverlay = document.getElementById('search-overlay');
        if (searchOverlay) searchOverlay.style.display = 'none';
        
        // Clear search input
        const searchInput = document.querySelector('#search-overlay input') || document.querySelector('input#search-input');
        if (searchInput) searchInput.value = '';
    }

    // Search overlay controls
    function openSearch() {
        const overlay = byId('search-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => {
                const inp = document.querySelector('#search-overlay input');
                if (inp) inp.focus();
            }, 100);
        }
    }

    function closeSearch() {
        const overlay = byId('search-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            const inp = document.querySelector('#search-overlay input');
            if (inp) inp.value = '';
        }
    }

    // Quick filter function
    function applyQuickFilter(filter) {
        const all = getAllProducts();
        let filtered = [];

        if (filter === 'all') {
            filtered = all;
        } else if (filter === 'pools') {
            // Map 'pools' filter to 'baseine_intex' category
            filtered = all.filter(p => p.category === 'baseine_intex');
        } else if (filter === 'accessories') {
            // Map 'accessories' to 'swim-accessories' category
            filtered = all.filter(p => p.category === 'swim-accessories');
        } else if (filter === 'spares') {
            // Map 'spares' to products with 'intex_parts' subcategory
            filtered = all.filter(p => p.subcategory === 'intex_parts');
        }

        State.currentProducts = filtered;
        State.page = 1;
        State.currentCategory = null;
        State.grouped = null;
        State.showingSubcategory = null;

        // Update title
        const catTitle = byId('currentCategoryTitle');
        if (catTitle) {
            const lang = getLang();
            const filterTitles = {
                all: { ro: 'Toate Produsele', ru: 'Все товары', en: 'All Products' },
                pools: { ro: 'Bazine Intex', ru: 'Бассейны Intex', en: 'Intex Pools' },
                accessories: { ro: 'Accesorii', ru: 'Аксессуары', en: 'Accessories' },
                spares: { ro: 'Piese de Schimb', ru: 'Запчасти', en: 'Spare Parts' }
            };
            catTitle.innerText = filterTitles[filter][lang] || filterTitles[filter].ro;
        }

        // Show product list, hide categories
        const categoryMenu = byId('category-menu');
        if (categoryMenu) categoryMenu.classList.add('hidden');

        const container = byId('product-list-container');
        if (container) container.classList.remove('hidden');

        renderProductsPage();
    }

    // Cart overlay controls
    function openCart() {
        const el = byId('cart-overlay');
        if (el) {
            el.classList.add('active');
            el.style.display = 'flex';
        }
    }

    function closeCart() {
        const el = byId('cart-overlay');
        if (el) {
            el.classList.remove('active');
            el.style.display = 'none';
        }
    }

    // Init
    function init() {
        // Bind global helpers for HTML inline handlers used in cart items
        window.addToCart = addToCart;
        window.removeFromCart = removeFromCart;
        window.changeQty = changeQty;
        window.openCart = openCart;
        window.closeCart = closeCart;
        window.showSubcategoryProducts = showSubcategoryProducts; // Expun funcția global

        loadCart(); renderCartItems();
        renderCategories();

        // Check URL search parameter (from main.js redirect or direct search URL)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            performSearch(searchQuery);
        }

        // Bind search button click to open overlay
        const searchBtn = byId('searchBtn');
        if (searchBtn) searchBtn.addEventListener('click', openSearch);

        // Bind filter list clicks
        const filterList = byId('filterList');
        if (filterList) {
            filterList.addEventListener('click', (e) => {
                const li = e.target.closest('li[data-filter]');
                if (li) {
                    const filter = li.getAttribute('data-filter');
                    applyQuickFilter(filter);
                    
                    // Update active class
                    filterList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
                    li.classList.add('active');
                }
            });
        }

        // Bind search - IMPROVED SEARCH BINDING
        const searchForms = document.querySelectorAll('form[action*="search"], form[id*="search"]');
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const input = form.querySelector('input[type="text"]');
                if (input) {
                    performSearch(input.value);
                    closeSearch();
                }
            });
        });

        // Also bind Enter key on search inputs
        const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="căutare"], input[type="text"][placeholder*="search"], input#search-input');
        searchInputs.forEach(input => {
            input.addEventListener('keypress', (e) => { 
                if (e.key === 'Enter') { 
                    e.preventDefault(); 
                    performSearch(input.value); 
                } 
            });
        });

        // Back button
        const backBtn = byId('backToCategoriesBtn');
        if (backBtn) backBtn.addEventListener('click', ()=>{ 
            // Dacă suntem într-o subcategorie, întoarce-te la lista de subcategorii
            if (State.showingSubcategory) {
                State.showingSubcategory = null;
                renderProductsPage();
            } else {
                // Altfel, întoarce-te complet la categorii
                State.showingSubcategory = null;
                const menu = byId('category-menu'); 
                if (menu) menu.classList.remove('hidden'); 
                const container = byId('product-list-container'); 
                if (container) container.classList.add('hidden');
                
                // Reset filter to "all"
                const filterList = byId('filterList');
                if (filterList) {
                    filterList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
                    const allFilter = filterList.querySelector('li[data-filter="all"]');
                    if (allFilter) allFilter.classList.add('active');
                }
            }
        });

        // Cart open/close
        const cartBtn = byId('cartBtn'); if (cartBtn) cartBtn.addEventListener('click', openCart);
        const closeCartBtns = document.querySelectorAll('#cart-overlay .close-btn'); closeCartBtns.forEach(b=>b.addEventListener('click', closeCart));

        // Re-render when language changes elsewhere (main.js dispatches 'languageChanged')
        window.addEventListener('languageChanged', (e) => {
            try {
                renderCategories();
                // If we're viewing the pools Intex category, rebuild the grouped view
                if (State.currentCategory === 'baseine_intex') {
                    viewProducts('baseine_intex');
                } else {
                    renderProductsPage();
                }
            } catch (err) { /* ignore */ }
        });

        console.log('Produse script initialized');
    }

    // Expose renderCartItems so other scripts may call it
    window.renderCartItems = renderCartItems;
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.changeQty = changeQty;
    window.performSearch = performSearch;
    window.openCart = openCart;
    window.closeCart = closeCart;
    window.openSearch = openSearch;
    window.closeSearch = closeSearch;

    document.addEventListener('DOMContentLoaded', init);
})();

// ========================================
// PRODUCT MODAL FUNCTIONS (Global scope)
// ========================================

let currentModalProduct = null;
let modalQty = 1;

function openProductModal(product) {
    if (!product) return;
    
    currentModalProduct = product;
    modalQty = 1;
    
    // Get translated title and description
    const lang = localStorage.getItem('intex_language') || 'ro';
    const title = (product.title && product.title[lang]) ? product.title[lang] : 
                  (product.title && product.title.ro) ? product.title.ro : 
                  (product.title || 'Produs');
    const desc = (product.description && (product.description[lang] || product.description.ro || product.description.en)) ? 
                 (product.description[lang] || product.description.ro || product.description.en) : 'Fără descriere';
    
    // Set modal content
    document.getElementById('modal-product-title').textContent = title;
    document.getElementById('modal-product-image').src = product.image || '';
    document.getElementById('modal-product-description').textContent = desc;
    document.getElementById('modal-qty-display').textContent = 1;
    
    // Set price
    const priceEl = document.getElementById('modal-product-price');
    const oldPriceEl = document.getElementById('modal-product-old-price');
    
    if (product.oldPrice && product.oldPrice > product.price) {
        oldPriceEl.textContent = (product.oldPrice.toFixed(2)) + ' LEI';
        oldPriceEl.style.display = 'inline';
        priceEl.textContent = (product.price.toFixed(2)) + ' LEI';
    } else {
        oldPriceEl.style.display = 'none';
        priceEl.textContent = (product.price.toFixed(2)) + ' LEI';
    }
    
    // Show modal
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    const modalContent = document.querySelector('.product-modal-content');
    
    if (modal && modalContent) {
        // Add closing animation
        modalContent.classList.add('closing');
        
        // Wait for animation to finish, then remove active class
        setTimeout(() => {
            modal.classList.remove('active');
            modalContent.classList.remove('closing');
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }, 300);
    }
    
    currentModalProduct = null;
    modalQty = 1;
}

// Modal quantity controls
document.addEventListener('DOMContentLoaded', () => {
    const qtyMinus = document.getElementById('modal-qty-minus');
    const qtyPlus = document.getElementById('modal-qty-plus');
    const qtyDisplay = document.getElementById('modal-qty-display');
    const addToCartBtn = document.getElementById('modal-add-to-cart');
    
    if (qtyMinus) {
        qtyMinus.addEventListener('click', () => {
            if (modalQty > 1) {
                modalQty--;
                qtyDisplay.textContent = modalQty;
            }
        });
    }
    
    if (qtyPlus) {
        qtyPlus.addEventListener('click', () => {
            modalQty++;
            qtyDisplay.textContent = modalQty;
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (currentModalProduct) {
                // Add product to cart with the selected quantity
                const productId = currentModalProduct.id || currentModalProduct.title;
                for (let i = 0; i < modalQty; i++) {
                    window.addToCart ? window.addToCart(productId) : console.log('addToCart not available');
                }
                closeProductModal();
            }
        });
    }
    
    // Close modal on overlay click
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
});

// Expose functions globally
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;