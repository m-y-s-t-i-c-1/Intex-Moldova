// Determine base path based on current location
function getBasePath() {
    const currentPath = window.location.pathname;
    // If on a page in /pagini/, go back to root, otherwise stay at root
    if (currentPath.includes('/pagini/')) {
        return '../';
    }
    return './';
}

const BASE_PATH = getBasePath();

// Helper function to standardize image paths
function standardizeImagePath(path) {
    if (!path) return BASE_PATH + 'assets/img/no-image.jpg';
    
    // If already starts with assets/img/, leave as is (relative path)
    if (path.startsWith('assets/img/')) {
        return path;
    }
    
    // If path doesn't include 'assets/img/', add BASE_PATH + assets/img/
    if (!path.includes('assets/img/')) {
        return BASE_PATH + 'assets/img/' + path;
    }
    
    return path;
}

// Categories configuration
const CATEGORIES_DATA = [
    {
        id: 'boats',
        icon: 'fas fa-ship',
        i18n_title: {
            ro: 'Bărci',
            ru: 'Лодки',
            en: 'Boats'
        },
        i18n_desc: {
            ro: 'Bărci gonflabile și accesorii',
            ru: 'Надувные лодки и аксессуары',
            en: 'Inflatable boats and accessories'
        },
        image: standardizeImagePath('Categoria barci 1.jpg')
    },
    {
        id: 'joaca',
        icon: 'fas fa-gamepad',
        i18n_title: {
            ro: 'Terenuri de Joacă',
            ru: 'Игровые площадки',
            en: 'Playgrounds'
        },
        i18n_desc: {
            ro: 'Echipamente pentru terenuri de joacă',
            ru: 'Оборудование для игровых площадок',
            en: 'Playground equipment'
        },
        image: standardizeImagePath('Categoria terenuri 1.png')
    },
    {
        id: 'transport',
        icon: 'fas fa-car',
        i18n_title: {
            ro: 'Transport',
            ru: 'Транспорт',
            en: 'Transport'
        },
        i18n_desc: {
            ro: 'Trotinete, biciclete, role',
            ru: 'Самокаты, велосипеды, ролики',
            en: 'Scooters, bicycles, rollerblades'
        },
        image: standardizeImagePath('trensport1.jpg')
    },
    {
        id: 'baseine_intex',
        icon: 'fas fa-swimming-pool',
        i18n_title: {
            ro: 'Bazine Intex',
            ru: 'Бассейны Intex',
            en: 'Intex Pools'
        },
        i18n_desc: {
            ro: 'Bazine de producător Intex',
            ru: 'Бассейны производителя Intex',
            en: 'Intex manufacturer pools'
        },
        image: standardizeImagePath('Categoria barci 2.jpg')
    },
    {
        id: 'copii-pools',
        icon: 'fas fa-child',
        i18n_title: {
            ro: 'Bazine Copii',
            ru: 'Детские бассейны',
            en: 'Kids Pools'
        },
        i18n_desc: {
            ro: 'Bazine pentru copii',
            ru: 'Детские бассейны',
            en: 'Kids pools'
        },
        image: standardizeImagePath('Categoria barci 3.jpeg')
    },
    {
        id: 'swim-accessories',
        icon: 'fas fa-swimmer',
        i18n_title: {
            ro: 'Accesorii Înot',
            ru: 'Аксессуары для плавания',
            en: 'Swimming Accessories'
        },
        i18n_desc: {
            ro: 'Accesorii pentru înot și plajă',
            ru: 'Аксессуары для плавания и пляжа',
            en: 'Swimming and beach accessories'
        },
        image: standardizeImagePath('Categoria barci 4.jpg')
    },
    {
        id: 'inflatable-mattresses',
        icon: 'fas fa-bed',
        i18n_title: {
            ro: 'Saltele Gonflabile',
            ru: 'Надувные матрасы',
            en: 'Inflatable Mattresses'
        },
        i18n_desc: {
            ro: 'Saltele și paturi gonflabile',
            ru: 'Надувные матрасы и кровати',
            en: 'Inflatable mattresses and beds'
        },
        image: standardizeImagePath('Categoria barci 5.jpg')
    },
    {
        id: 'pumps',
        icon: 'fas fa-wind',
        i18n_title: {
            ro: 'Pompe',
            ru: 'Насосы',
            en: 'Pumps'
        },
        i18n_desc: {
            ro: 'Pompe electrice și manuale',
            ru: 'Электрические и ручные насосы',
            en: 'Electric and manual pumps'
        },
        image: standardizeImagePath('Categoria barci 6.jpg')
    }
];

// Subcategories configuration with unique IDs
const SUBCATEGORIES_DATA = {
    baseine_intex: [
        {
            id: "care_water",
            title: {
                ro: "Chimicale pentru Apă",
                ru: "Химикаты для воды",
                en: "Water Chemicals"
            }
        },
        {
            id: "intex_parts",
            title: {
                ro: "Piese INTEX",
                ru: "Запчасти INTEX",
                en: "INTEX Parts"
            }
        },
        {
            id: "frame_pools",
            title: {
                ro: "Bazine Cadru",
                ru: "Каркасные бассейны",
                en: "Frame Pools"
            }
        },
        {
            id: "easy_set",
            title: {
                ro: "Bazine Gonflabile",
                ru: "Надувные бассейны",
                en: "Inflatable Pools"
            }
        },
        {
            id: "filters",
            title: {
                ro: "Filtre și Pompe",
                ru: "Фильтры и насосы",
                en: "Filters & Pumps"
            }
        }
    ],
    boats: [
        {
            id: "boats_frame",
            title: {
                ro: "Bărci Cadru",
                ru: "Каркасные лодки",
                en: "Frame Boats"
            }
        },
        {
            id: "boats_care",
            title: {
                ro: "Accesorii Nautice",
                ru: "Аксессуары для лодок",
                en: "Nautical Accessories"
            }
        },
        {
            id: "boats_pool_accessories",
            title: {
                ro: "Accesorii Bărci",
                ru: "Аксессуары для лодок",
                en: "Boat Accessories"
            }
        },
        {
            id: "boats_easy",
            title: {
                ro: "Bărci Ușoare",
                ru: "Лёгкие лодки",
                en: "Light Boats"
            }
        },
        {
            id: "boats_intex",
            title: {
                ro: "Piese Intex",
                ru: "Запчасти Intex",
                en: "Intex Parts"
            }
        }
    ]
};

// Pools products data with standardized image paths
const POOLS_PRODUCTS = {
    pools: [
        // Produse pentru Îngrijirea Apei
        {
            sub: "care_water",
            title: {
                ro: "PH Minus Granulat 5kg - Reglare pH Piscină",
                ru: "PH Минус Гранулированный 5кг - Регуляция pH Бассейна",
                en: "PH Minus Granular 5kg - Pool pH Regulation"
            },
            price: 299,
            image: standardizeImagePath('ph-minus-5kg.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "Alba Super K 1L - Algicid Avansat",
                ru: "Альба Супер K 1л - Продвинутый Альгицид",
                en: "Alba Super K 1L - Advanced Algicide"
            },
            price: 165,
            image: standardizeImagePath('alba-super-k.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "Tablete All-in-One 20g/1kg - Întreținere Completă",
                ru: "Таблетки Всё-в-Одном 20г/1кг - Полное Обслуживание",
                en: "All-in-One Tablets 20g/1kg - Complete Maintenance"
            },
            price: 225,
            image: standardizeImagePath('all-in-one-tablets.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "All-in-one tablete multiple 200g/1kg",
                ru: "Всё-в-одном мультитаблетки 200г/1кг",
                en: "All-in-one multi tablets 200g/1kg"
            },
            price: 225,
            image: standardizeImagePath('all-in-one-tablets-200g.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "Kemochlor T-tablete solubile rapid 20g/1kg",
                ru: "Кемохлор Т-быстрорастворимые таблетки 20 г/1кг",
                en: "Kemochlor T-fast soluble tablets 20g/1kg"
            },
            price: 225,
            image: standardizeImagePath('kemochlor-tablets.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "Nisip Filtru 25kg - Filtrare Superioară",
                ru: "Песок для Фильтра 25кг - Высококачественная Фильтрация",
                en: "Filter Sand 25kg - Superior Filtration"
            },
            price: 359,
            image: standardizeImagePath('filter-sand-25kg.jpg')
        },
        {
            sub: "care_water",
            title: {
                ro: "Tester tabletă 2 în 1 (pH, Cl)",
                ru: "Тестер таблеточный 2 в 1 (pH, Cl)",
                en: "Tablet tester 2 in 1 (pH, Cl)"
            },
            price: 250,
            image: standardizeImagePath('tablet-tester.jpg')
        },

        // Piese de Schimb Intex
        {
            sub: "intex_parts",
            title: {
                ro: "10090 Intex Cuvă pentru bazin cadru Prism Frame 457x122cm",
                ru: "10090 Intex Чаша для каркасного бассейна Prism Frame 457х122см",
                en: "10090 Intex Liner for frame pool Prism Frame 457x122cm"
            },
            price: 6500,
            image: standardizeImagePath('intex-liner-10090.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10127 Intex Dop de cauciuc pentru bazine Intex",
                ru: "10127 Intex Резиновая заглушка для бассейнов Intex",
                en: "10127 Intex Rubber plug for Intex pools"
            },
            price: 20,
            image: standardizeImagePath('rubber-plug.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10201 Intex Adaptor pentru valve de drenaj",
                ru: "10201 Intex Переходник для сливного клапана бассейна",
                en: "10201 Intex Adapter for drain valve"
            },
            price: 50,
            image: standardizeImagePath('drain-valve-adapter.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10256 Intex Piuliță pentru connector 38 mm",
                ru: "10256 Intex Гайка для сетчатого соединителя 38 мм",
                en: "10256 Intex Nut for mesh connector 38 mm"
            },
            price: 40,
            image: standardizeImagePath('connector-nut.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10262 Intex Inel de etanșare",
                ru: "10262 Intex Уплотнительное кольцо",
                en: "10262 Intex Sealing ring"
            },
            price: 50,
            image: standardizeImagePath('sealing-ring.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10383 Intex Stâlp de conectare",
                ru: "10383 Intex Соединительная стойка",
                en: "10383 Intex Connecting post"
            },
            price: 135,
            image: standardizeImagePath('connecting-post.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10919 Intex Grindă orizontală (A) pentru Ultra Frame 549x274x132cm",
                ru: "10919 Intex Горизонтальная балка (A) для Ultra Frame 549х274х132см",
                en: "10919 Intex Horizontal beam (A) for Ultra Frame 549x274x132cm"
            },
            price: 250,
            image: standardizeImagePath('horizontal-beam-a.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10922 Intex Grindă orizontală (B) Ultra Frame",
                ru: "10922 Intex Горизонтальная балка (B) Ultra Frame",
                en: "10922 Intex Horizontal beam (B) Ultra Frame"
            },
            price: 250,
            image: standardizeImagePath('horizontal-beam-b.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10925 Intex Grindă orizontală (C)",
                ru: "10925 Intex Горизонтальная балка (C)",
                en: "10925 Intex Horizontal beam (C)"
            },
            price: 250,
            image: standardizeImagePath('horizontal-beam-c.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10928 Intex Grindă orizontală (D)",
                ru: "10928 Intex Горизонтальная балка (D)",
                en: "10928 Intex Horizontal beam (D)"
            },
            price: 250,
            image: standardizeImagePath('horizontal-beam-d.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10932 Intex Grindă orizontală (F)",
                ru: "10932 Intex Горизонтальная балка (F)",
                en: "10932 Intex Horizontal beam (F)"
            },
            price: 250,
            image: standardizeImagePath('horizontal-beam-f.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10934 Intex Conexiune de colț",
                ru: "10934 Intex Угловое соединение",
                en: "10934 Intex Corner connection"
            },
            price: 200,
            image: standardizeImagePath('corner-connection.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10937 Intex Grindă de susținere U",
                ru: "10937 Intex Опорная U-балка",
                en: "10937 Intex Support U-beam"
            },
            price: 900,
            image: standardizeImagePath('u-support-beam.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10938 INTEX",
                ru: "10938 INTEX",
                en: "10938 INTEX"
            },
            price: 115,
            image: standardizeImagePath('intex-10938.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "10939 Intex Cuvă pentru bazin cadru 549x274x132",
                ru: "10939 Intex Чаша для каркасного бассейна 549x274x132",
                en: "10939 Intex Liner for frame pool 549x274x132"
            },
            price: 9999,
            image: standardizeImagePath('intex-liner-10939.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "11070 Intex duză intrare D-32",
                ru: "11070 Intex форсунка вход D-32",
                en: "11070 Intex inlet nozzle D-32"
            },
            price: 99,
            image: standardizeImagePath('inlet-nozzle-d32.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "11157 Intex Insert plastic pentru grinzi",
                ru: "11157 Intex Вставка пластиковая для балок",
                en: "11157 Intex Plastic insert for beams"
            },
            price: 70,
            image: standardizeImagePath('plastic-insert.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "11228 Intex Inel de etanșare",
                ru: "11228 Intex Уплотнительное кольцо",
                en: "11228 Intex Sealing ring"
            },
            price: 50,
            image: standardizeImagePath('sealing-ring-11228.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "11374 INTEX Electrod titan 26666",
                ru: "11374 INTEX Титановый электрод 26666",
                en: "11374 INTEX Titanium electrode 26666"
            },
            price: 2300,
            image: standardizeImagePath('titanium-electrode.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "11412 INTEX Inel de etanșare L",
                ru: "11412 INTEX L-образное уплотнительное кольцо",
                en: "11412 INTEX L-shaped sealing ring"
            },
            price: 50,
            image: standardizeImagePath('l-sealing-ring.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12365 Intex duză ieșire D-32",
                ru: "12365 Intex форсунка выход D-32",
                en: "12365 Intex outlet nozzle D-32"
            },
            price: 99,
            image: standardizeImagePath('outlet-nozzle-d32.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12436 Intex Cuvă Ultra Frame 549x132cm",
                ru: "12436 Intex Чаша Ultra Frame 549х132см",
                en: "12436 Intex Ultra Frame liner 549x132cm"
            },
            price: 9999,
            image: standardizeImagePath('ultra-frame-liner-12436.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12465 Intex Cap oprire Prism Frame",
                ru: "12465 Intex Насадка опоры Prism Frame",
                en: "12465 Intex Support cap Prism Frame"
            },
            price: 50,
            image: standardizeImagePath('support-cap.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12802 Intex Conector T Prism Frame",
                ru: "12802 Intex T-образный соединитель Prism Frame",
                en: "12802 Intex T-connector Prism Frame"
            },
            price: 150,
            image: standardizeImagePath('t-connector.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12808 Intex Grindă orizontală",
                ru: "12808 Intex Горизонтальная балка",
                en: "12808 Intex Horizontal beam"
            },
            price: 150,
            image: standardizeImagePath('horizontal-beam-12808.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12818 Intex Grindă verticală",
                ru: "12818 Intex Вертикальная балка",
                en: "12818 Intex Vertical beam"
            },
            price: 150,
            image: standardizeImagePath('vertical-beam.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "12928 INTEX Peri pentru robot aspirator 28005",
                ru: "12928 INTEX Щетки для робота пылесоса 28005",
                en: "12928 INTEX Brushes for robot vacuum 28005"
            },
            price: 250,
            image: standardizeImagePath('vacuum-brushes.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "26670 Generator clor Krystal Clear Saltwater System Intex",
                ru: "26670 Хлорогенератор Krystal Clear Saltwater System Intex",
                en: "26670 Chlorine generator Krystal Clear Saltwater System Intex"
            },
            price: 4599,
            image: standardizeImagePath('chlorine-generator.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "26726-carcas INTEX",
                ru: "26726-carcas INTEX",
                en: "26726-carcas INTEX"
            },
            price: 1500,
            image: standardizeImagePath('intex-26726.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "29059 Furtun de conectare 32mm",
                ru: "29059 Соединительный шланг 32мм",
                en: "29059 Connecting hose 32mm"
            },
            price: 80,
            image: standardizeImagePath('connecting-hose-32mm.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "29061 Set adaptoare B",
                ru: "29061 Комплект переходников B",
                en: "29061 Adapter set B"
            },
            price: 99,
            image: standardizeImagePath('adapter-set-b.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 10095 Cuvă Metal Frame 305x76cm",
                ru: "Intex 10095 Чаша Metal Frame 305х76см",
                en: "Intex 10095 Metal Frame liner 305x76cm"
            },
            price: 1700,
            image: standardizeImagePath('metal-frame-liner-10095.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Cuvă Metal Frame 366x76cm - Înlocuitor Durabil",
                ru: "Чаша Metal Frame 366x76см - Долговечная Замена",
                en: "Metal Frame Liner 366x76cm - Durable Replacement"
            },
            price: 1999,
            image: standardizeImagePath('metal-frame-liner-10096.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 10318/12129 Cuvă Easy Set 305x76 cm",
                ru: "Intex 10318/12129 Чаша Easy Set 305×76 см",
                en: "Intex 10318/12129 Easy Set liner 305x76 cm"
            },
            price: 900,
            image: standardizeImagePath('easy-set-liner-10318.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 11588 Cuvă 183x51cm Easy Set",
                ru: "Intex 11588 Чаша 183×51см Easy Set",
                en: "Intex 11588 Liner 183x51cm Easy Set"
            },
            price: 399,
            image: standardizeImagePath('easy-set-liner-11588.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 12135A Cuvă 400x200x100cm",
                ru: "Intex 12135A Чаша 400х200х100см",
                en: "Intex 12135A Liner 400x200x100cm"
            },
            price: 6500,
            image: standardizeImagePath('liner-12135a.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 12228 Cuvă 488x244x107cm",
                ru: "Intex 12228 Чаша 488х244х107см",
                en: "Intex 12228 Liner 488x244x107cm"
            },
            price: 8000,
            image: standardizeImagePath('liner-12228.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "INTEX 12354 duză D-38",
                ru: "INTEX 12354 форсунка D-38",
                en: "INTEX 12354 nozzle D-38"
            },
            price: 200,
            image: standardizeImagePath('nozzle-d38.jpg')
        },
        {
            sub: "intex_parts",
            title: {
                ro: "Intex 12533 Cuvă Prism Frame 366x99cm",
                ru: "Intex 12533 Чаша Prism Frame 366х99см",
                en: "Intex 12533 Prism Frame liner 366x99cm"
            },
            price: 3900,
            image: standardizeImagePath('prism-frame-liner-12533.jpg')
        },

        // Bazine Gonflabile EASY SET
        {
            sub: "easy_set",
            title: {
                ro: "Bazin Easy Set 183x51cm - Piscină Compactă pentru Copii",
                ru: "Бассейн Easy Set 183x51см - Компактный Бассейн для Детей",
                en: "Easy Set Pool 183x51cm - Compact Kids Pool"
            },
            price: 500,
            image: standardizeImagePath('easy-set-28101.jpg')
        },
        {
            sub: "easy_set",
            title: {
                ro: "Bazin Easy Set 244x61cm - Piscină Familială",
                ru: "Бассейн Easy Set 244x61см - Семейный Бассейн",
                en: "Easy Set Pool 244x61cm - Family Pool"
            },
            price: 659,
            image: standardizeImagePath('easy-set-28106.jpg')
        },
        {
            sub: "easy_set",
            title: {
                ro: "Bazin Easy Set 305x76cm - Piscină Mare pentru Familie",
                ru: "Бассейн Easy Set 305x76см - Большой Семейный Бассейн",
                en: "Easy Set Pool 305x76cm - Large Family Pool"
            },
            price: 1049,
            image: standardizeImagePath('easy-set-28120.jpg')
        },
        {
            sub: "easy_set",
            title: {
                ro: "59631 KIT DE REPARAȚII",
                ru: "59631 РЕМОНТНЫЙ КОМПЛЕКТ",
                en: "59631 REPAIR KIT"
            },
            price: 20,
            image: standardizeImagePath('repair-kit.jpg')
        },

        // Filtre pentru Bazine
        {
            sub: "filters",
            title: {
                ro: "Filtru-Pompă Krystal Clear 2006L/h - Filtrare Eficientă",
                ru: "Фильтр-Насос Krystal Clear 2006л/ч - Эффективная Фильтрация",
                en: "Krystal Clear Filter-Pump 2006L/h - Efficient Filtration"
            },
            price: 875,
            image: standardizeImagePath('filter-pump-26604.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "Filtru-Pompă Krystal Clear 5678L/h cu Timer - Filtrare Avansată",
                ru: "Фильтр-Насос Krystal Clear 5678л/ч с Таймером - Продвинутая Фильтрация",
                en: "Krystal Clear Filter-Pump 5678L/h with Timer - Advanced Filtration"
            },
            price: 1800,
            oldPrice: 1999,
            image: standardizeImagePath('filter-pump-26636.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26638 Filtru-pompă cartuș Krystal Clear pentru bazine până la 457 cm, 3785L/h, cartuș A",
                ru: "26638 КАРТРИДЖНЫЙ ФИЛЬТР1НАСОС KRYSTAL CLEAR ДЛЯ БАССЕЙНОВ НЕ БОЛЕЕ 457 СМ, 3785Л/Ч, КАРТРИДЖ A",
                en: "26638 Cartridge filter-pump Krystal Clear for pools up to 457 cm, 3785L/h, cartridge A"
            },
            price: 1149,
            image: standardizeImagePath('filter-pump-26638.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26642 Filtru-pompă nisip 3500 litri pe oră",
                ru: "26642 Песочный фильтрующий насос 3500 литров в час",
                en: "26642 Sand filter-pump 3500 liters per hour"
            },
            price: 2300,
            oldPrice: 2499,
            image: standardizeImagePath('sand-filter-26642.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26644 (SX1500) Filtru-pompă nisip Krystal Clear 5700l/h",
                ru: "26644 (SX1500) ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR 5700л/ч",
                en: "26644 (SX1500) Sand filter-pump Krystal Clear 5700l/h"
            },
            price: 3500,
            oldPrice: 4499,
            image: standardizeImagePath('sand-filter-26644.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26646 Filtru-pompă nisip Krystal Clear, 7,9M3/h",
                ru: "26646 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 7,9М3/Ч",
                en: "26646 Sand filter-pump Krystal Clear, 7,9M3/h"
            },
            price: 4700,
            oldPrice: 4900,
            image: standardizeImagePath('sand-filter-26646.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26648 Filtru-pompă nisip Krystal Clear, 10,5M3/h",
                ru: "26648 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 10,5М3/Ч",
                en: "26648 Sand filter-pump Krystal Clear, 10,5M3/h"
            },
            price: 5299,
            oldPrice: 5699,
            image: standardizeImagePath('sand-filter-26648.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26652 Filtru-pompă nisip Krystal Clear, 12,0M3/h",
                ru: "26652 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 12,0М3/Ч",
                en: "26652 Sand filter-pump Krystal Clear, 12,0M3/h"
            },
            price: 5799,
            image: standardizeImagePath('sand-filter-26652.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26662 Generator clor (sistem apă sărată)",
                ru: "26662 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)",
                en: "26662 Chlorine generator (saltwater system)"
            },
            price: 1399,
            image: standardizeImagePath('chlor-generator-26662.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26664 Generator clor (sistem apă sărată)",
                ru: "26664 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)",
                en: "26664 Chlorine generator (saltwater system)"
            },
            price: 2099,
            image: standardizeImagePath('chlor-generator-26664.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26666 Generator clor Krystal Clear cu generator ozon",
                ru: "26666 ХЛОРГЕНЕРАТОР KRYSTAL CLEAR С ГЕНЕРАТОРОМ ОЗОНА",
                en: "26666 Chlorine generator Krystal Clear with ozone generator"
            },
            price: 5499,
            oldPrice: 7999,
            image: standardizeImagePath('chlor-generator-26666.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26668 Generator clor (sistem apă sărată)",
                ru: "26668 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)",
                en: "26668 Chlorine generator (saltwater system)"
            },
            price: 3499,
            image: standardizeImagePath('chlor-generator-26668.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "26670 Generator clor Krystal Clear Saltwater System Intex",
                ru: "26670 Хлорогенератор Krystal Clear Saltwater System Intex",
                en: "26670 Chlorine generator Krystal Clear Saltwater System Intex"
            },
            price: 4599,
            image: standardizeImagePath('chlor-generator-26670.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "29002 Cartuș A (bloc de 2 buc) pentru filtre-pompă 28604, 28638, 28636",
                ru: "29002 Картридж A (блок из 2 шт) для фильтр-насосов 28604, 28638, 28636",
                en: "29002 Cartridge A (block of 2 pcs) for filter-pumps 28604, 28638, 28636"
            },
            price: 200,
            image: standardizeImagePath('cartridge-a.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "INTEX 29045 Fiber Ball Umplutură pentru filtre cu nisip",
                ru: "INTEX 29045 Fiber Ball Наполнитель для песчаных фильтров",
                en: "INTEX 29045 Fiber Ball Filler for sand filters"
            },
            price: 199,
            image: standardizeImagePath('fiber-ball.jpg')
        },
        {
            sub: "filters",
            title: {
                ro: "Nisip pentru filtru Planet Pool Quarzsand 25Kg",
                ru: "Песок для фильтра Planet Pool Quarzsand 25Kg",
                en: "Filter sand Planet Pool Quarzsand 25Kg"
            },
            price: 359,
            image: standardizeImagePath('filter-sand.jpg')
        },

        // Bazine Cadru
        {
            sub: "frame_pools",
            title: {
                ro: "Bazin Cadru Ultra Frame 488x122cm - Piscină Spațioasă",
                ru: "Каркасный Бассейн Ultra Frame 488x122см - Просторный Бассейн",
                en: "Ultra Frame Pool 488x122cm - Spacious Pool"
            },
            price: 13500,
            oldPrice: 14599,
            image: standardizeImagePath('ultra-frame-26326.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "Bazin Cadru Ultra Frame 549x132cm - Piscină Premium",
                ru: "Каркасный Бассейн Ultra Frame 549x132см - Премиум Бассейн",
                en: "Ultra Frame Pool 549x132cm - Premium Pool"
            },
            price: 15000,
            oldPrice: 18999,
            image: standardizeImagePath('ultra-frame-26330.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26340 Bazin cadru Ultra XTR Frame 732x132cm",
                ru: "26340 Каркасный бассейн Ultra XTR Frame 732х132см",
                en: "26340 Frame pool Ultra XTR Frame 732x132cm"
            },
            price: 18399,
            oldPrice: 22999,
            image: standardizeImagePath('ultra-xtr-26340.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26356 BAZIN CADRU INTEX ULTRA XTR PREMIUM POOL LINE 549X274X132CM",
                ru: "26356 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 549Х274Х132СМ",
                en: "26356 FRAME POOL INTEX ULTRA XTR PREMIUM POOL LINE 549X274X132CM"
            },
            price: 16000,
            oldPrice: 19999,
            image: standardizeImagePath('ultra-xtr-26356.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26364 BAZIN CADRU INTEX ULTRA XTR PREMIUM POOL LINE 732X366X132CM",
                ru: "26364 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 732X366X132СМ",
                en: "26364 FRAME POOL INTEX ULTRA XTR PREMIUM POOL LINE 732X366X132CM"
            },
            price: 20000,
            oldPrice: 24999,
            image: standardizeImagePath('ultra-xtr-26364.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26374 BAZIN CADRU INTEX ULTRA XTR PREMIUM POOL LINE 975X488X132CM",
                ru: "26374 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 975Х488Х132СМ",
                en: "26374 FRAME POOL INTEX ULTRA XTR PREMIUM POOL LINE 975X488X132CM"
            },
            price: 28000,
            oldPrice: 34999,
            image: standardizeImagePath('ultra-xtr-26374.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26700 BAZIN CADRU INTEX 305X76",
                ru: "26700 КАРКАСНЫЙ БАССЕЙН INTEX 305X76",
                en: "26700 FRAME POOL INTEX 305X76"
            },
            price: 1800,
            oldPrice: 2099,
            image: standardizeImagePath('frame-pool-26700.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26702 Intex Bazin cadru, filtru-pompă, 305x76cm",
                ru: "26702 Intex Бассейн каркасный, фильтр-насос, 305х76см",
                en: "26702 Intex Frame pool, filter-pump, 305x76cm"
            },
            price: 2000,
            oldPrice: 2500,
            image: standardizeImagePath('frame-pool-26702.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26710 Bazin cadru Intex Prism Frame 366x76 cm",
                ru: "26710 Каркасный бассейн Intex Prism Frame 366×76 см",
                en: "26710 Frame pool Intex Prism Frame 366x76 cm"
            },
            price: 1999,
            oldPrice: 2499,
            image: standardizeImagePath('prism-frame-26710.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26712 Bazin cadru Prism Frame 366x76cm, 6503l, filtru-pompă 2006l/h",
                ru: "26712 Каркасный бассейн Prism Frame 366×76см, 6503л, фил.-насос 2006л/ч",
                en: "26712 Frame pool Prism Frame 366x76cm, 6503l, filter-pump 2006l/h"
            },
            price: 2500,
            oldPrice: 3899,
            image: standardizeImagePath('prism-frame-26712.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26720 BAZIN CADRU PRISM FRAME 427X107CM",
                ru: "26720 КАРКАСНЫЙ БАССЕЙН PRISM FRAME 427Х107СМ",
                en: "26720 FRAME POOL PRISM FRAME 427X107CM"
            },
            price: 5999,
            oldPrice: 7499,
            image: standardizeImagePath('prism-frame-26720.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26726NP BAZIN CADRU ROTUND INTEX PRISM FRAME POOL 4,57X1,22",
                ru: "26726NP КАРКАСНЫЙ БАССЕЙН КРУГЛЫЙ INTEX PRISM FRAME POOL 4,57Х1,22",
                en: "26726NP ROUND FRAME POOL INTEX PRISM FRAME POOL 4,57X1,22"
            },
            price: 7400,
            oldPrice: 9199,
            image: standardizeImagePath('prism-frame-26726np.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26742 Bazin cadru Intex GreyWood Prism Frame 457x122 cm",
                ru: "26742 Каркасный бассейн Intex GreyWood Prism Frame 457×122 см",
                en: "26742 Frame pool Intex GreyWood Prism Frame 457x122 cm"
            },
            price: 7500,
            oldPrice: 9299,
            image: standardizeImagePath('greywood-prism-26742.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26744 Bazin cadru Intex GreyWood Premium, 24311l, 5,49X1,22",
                ru: "26744 Каркасный бассейн Intex GreyWood Premium, 24311л, 5,49Х1,22",
                en: "26744 Frame pool Intex GreyWood Premium, 24311l, 5,49X1,22"
            },
            price: 10499,
            oldPrice: 13499,
            image: standardizeImagePath('greywood-premium-26744.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26756 BAZIN CADRU PRISM FRAME 610X132CM",
                ru: "26756 КАРКАСНЫЙ БАССЕЙН PRISM FRAME 610Х132СМ",
                en: "26756 FRAME POOL PRISM FRAME 610X132CM"
            },
            price: 12000,
            oldPrice: 14999,
            image: standardizeImagePath('prism-frame-26756.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26784 Bazin cadru Intex Prism Frame 300x175x80 cm + filtru-pompă 2006 l/h, scară",
                ru: "26784 Каркасный бассейн Intex Prism Frame 300х175х80 см + фильтр-насос 2006 л/ч, лестница",
                en: "26784 Frame pool Intex Prism Frame 300x175x80 cm + filter-pump 2006 l/h, ladder"
            },
            price: 6499,
            image: standardizeImagePath('prism-frame-26784.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26788 BAZIN CADRU PRISM FRAME RECTANGULAR 400X200X100 CM",
                ru: "26788 КАРКАСНЫЙ БАССЕЙН PRISM FRAME RECTANGULAR 400Х200Х100 СМ",
                en: "26788 FRAME POOL PRISM FRAME RECTANGULAR 400X200X100 CM"
            },
            price: 7200,
            oldPrice: 8999,
            image: standardizeImagePath('prism-frame-rect-26788.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26790 Bazin cadru Prism Frame 400x200x122cm",
                ru: "26790 Каркасный бассейн Prism Frame 400х200х122см",
                en: "26790 Frame pool Prism Frame 400x200x122cm"
            },
            price: 8900,
            oldPrice: 11199,
            image: standardizeImagePath('prism-frame-26790.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26792 BAZIN CADRU PRISM FRAME RECTANGULAR 488X244X107CM",
                ru: "26792 КАРКАСНЫЙ БАССЕЙН PRISM FRAME RECTANGULAR 488Х244Х107СМ",
                en: "26792 FRAME POOL PRISM FRAME RECTANGULAR 488X244X107CM"
            },
            price: 8500,
            oldPrice: 10999,
            image: standardizeImagePath('prism-frame-rect-26792.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26796 BAZIN CADRU PRISM FRAME OVAL 503X274X122CM",
                ru: "26796 КАРКАСНЫЙ БАССЕЙН PRISM FRAME OVAL 503Х274X122СМ",
                en: "26796 FRAME POOL PRISM FRAME OVAL 503X274X122CM"
            },
            price: 13000,
            oldPrice: 14999,
            image: standardizeImagePath('prism-frame-oval-26796.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "26798 BAZIN CADRU PRISM FRAME OVAL 610X305X122CM",
                ru: "26798 КАРКАСНЫЙ БАССЕЙН PRISM FRAME OVAL 610Х305X122СМ",
                en: "26798 FRAME POOL PRISM FRAME OVAL 610X305X122CM"
            },
            price: 13200,
            oldPrice: 16499,
            image: standardizeImagePath('prism-frame-oval-26798.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28200 Bazin cadru Intex Metal Frame Pool, 305x76cm",
                ru: "28200 Бассейн каркасный Intex Metal Frame Pool, 305х76см",
                en: "28200 Frame pool Intex Metal Frame Pool, 305x76cm"
            },
            price: 2000,
            oldPrice: 2500,
            image: standardizeImagePath('metal-frame-28200.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28205 Bazin cadru Metal Frame 244x51cm, 1828l",
                ru: "28205 Каркасный бассейн Metal Frame 244х51см, 1828л",
                en: "28205 Frame pool Metal Frame 244x51cm, 1828l"
            },
            price: 1299,
            oldPrice: 1499,
            image: standardizeImagePath('metal-frame-28205.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28210 BAZIN CADRU METAL FRAME 366X76CM",
                ru: "28210 КАРКАСНЫЙ БАССЕЙН METAL FRAME 366Х76СМ",
                en: "28210 FRAME POOL METAL FRAME 366X76CM"
            },
            price: 2000,
            oldPrice: 2500,
            image: standardizeImagePath('metal-frame-28210.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28212 BAZIN CADRU METAL FRAME 366X76cm CU FILTRU 2000l/h",
                ru: "28212 КАРКАСНЫЙ БАССЕЙН METAL FRAME 366Х76см.С ФИЛЬТРОМ 2000л/ч",
                en: "28212 FRAME POOL METAL FRAME 366X76cm WITH FILTER 2000l/h"
            },
            price: 2500,
            oldPrice: 3799,
            image: standardizeImagePath('metal-frame-28212.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28242 BAZIN CADRU METAL FRAME 457X122CM",
                ru: "28242 КАРКАСНЫЙ БАССЕЙН METAL FRAME 457Х122СМ",
                en: "28242 FRAME POOL METAL FRAME 457X122CM"
            },
            price: 7000,
            oldPrice: 8999,
            image: standardizeImagePath('metal-frame-28242.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28270 BAZIN CADRU RECTANGULAR 220X150X60CM",
                ru: "28270 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 220Х150Х60СМ",
                en: "28270 FRAME POOL RECTANGULAR 220X150X60CM"
            },
            price: 1400,
            oldPrice: 1700,
            image: standardizeImagePath('rectangular-pool-28270.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28271 BAZIN CADRU RECTANGULAR 260X160X65CM",
                ru: "28271 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 260Х160Х65СМ",
                en: "28271 FRAME POOL RECTANGULAR 260X160X65CM"
            },
            price: 1550,
            oldPrice: 1899,
            image: standardizeImagePath('rectangular-pool-28271.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28272 BAZIN CADRU RECTANGULAR 300X200X75CM",
                ru: "28272 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 300Х200Х75СМ",
                en: "28272 FRAME POOL RECTANGULAR 300X200X75CM"
            },
            price: 2000,
            oldPrice: 2200,
            image: standardizeImagePath('rectangular-pool-28272.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28273 BAZIN CADRU RECTANGULAR 450X220X84CM",
                ru: "28273 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 450Х220Х84СМ",
                en: "28273 FRAME POOL RECTANGULAR 450X220X84CM"
            },
            price: 3000,
            oldPrice: 3699,
            image: standardizeImagePath('rectangular-pool-28273.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "28274 Bazin cadru dreptunghiular 450x220x84cm",
                ru: "28274 Прямоугольный каркасный бассейн 450х220х84см",
                en: "28274 Rectangular frame pool 450x220x84cm"
            },
            price: 3700,
            oldPrice: 4599,
            image: standardizeImagePath('rectangular-pool-28274.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "59631 KIT DE REPARAȚII",
                ru: "59631 РЕМОНТНЫЙ КОМПЛЕКТ",
                en: "59631 REPAIR KIT"
            },
            price: 20,
            image: standardizeImagePath('repair-kit.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26368 Bazin cadru Ultra XTR Frame 732x366x132cm",
                ru: "INTEX 26368 Каркасный бассейн Ultra XTR Frame 732х366х132см",
                en: "INTEX 26368 Frame pool Ultra XTR Frame 732x366x132cm"
            },
            price: 24000,
            oldPrice: 29999,
            image: standardizeImagePath('ultra-xtr-26368.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26378 Bazin cadru Ultra XTR Frame 975x488x132cm",
                ru: "INTEX 26378 Каркасный бассейн Ultra XTR Frame 975х488х132см",
                en: "INTEX 26378 Frame pool Ultra XTR Frame 975x488x132cm"
            },
            price: 32000,
            oldPrice: 39999,
            image: standardizeImagePath('ultra-xtr-26378.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26700-3 New, bazin cadru 305 x 76 cm (cu prelată 28030)",
                ru: "INTEX 26700-3 New, каркасный бассейн 305 x 76 см (в комплекте с тентом 28030)",
                en: "INTEX 26700-3 New, frame pool 305 x 76 cm (with cover 28030)"
            },
            price: 2150,
            oldPrice: 2349,
            image: standardizeImagePath('frame-pool-26700-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26716 Bazin cadru Prism Frame 366x99cm",
                ru: "INTEX 26716 Каркасный бассейн Prism Frame 366х99см",
                en: "INTEX 26716 Frame pool Prism Frame 366x99cm"
            },
            price: 4200,
            oldPrice: 5299,
            image: standardizeImagePath('prism-frame-26716.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26716-1 Bazin cadru 366x99cm CU FILTRU DE NISIP",
                ru: "INTEX 26716-1 Каркасный бассейн 366х99см С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26716-1 Frame pool 366x99cm WITH SAND FILTER"
            },
            price: 6999,
            image: standardizeImagePath('prism-frame-26716-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26717 Bazin cadru Prism Frame 366x99cm",
                ru: "INTEX 26717 Каркасный бассейн Prism Frame 366х99см",
                en: "INTEX 26717 Frame pool Prism Frame 366x99cm"
            },
            price: 3900,
            image: standardizeImagePath('prism-frame-26717.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26726-1 BAZIN CADRU 4,57X1,22 CU FILTRU DE NISIP",
                ru: "INTEX 26726-1 КАРКАСНЫЙ БАССЕЙН 4,57Х1,22 С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26726-1 FRAME POOL 4,57X1,22 WITH SAND FILTER"
            },
            price: 10550,
            image: standardizeImagePath('frame-pool-26726-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26742-1 Bazin cadru 457x122 cm CU FILTRU DE NISIP",
                ru: "INTEX 26742-1 Каркасный бассейн 457×122 см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26742-1 Frame pool 457x122 cm WITH SAND FILTER"
            },
            price: 10650,
            image: standardizeImagePath('greywood-26742-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26756-1 BAZIN CADRU 610X132cm CU FILTRU DE NISIP",
                ru: "INTEX 26756-1 КАРКАСНЫЙ БАССЕЙН 610Х132см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26756-1 FRAME POOL 610X132cm WITH SAND FILTER"
            },
            price: 17500,
            image: standardizeImagePath('prism-frame-26756-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "Intex 26780 Bazin cadru Chevron Prism Frame 400x200x100cm, filtru-pump. 2006l/h, scară",
                ru: "Intex 26780 Каркасный бассейн Chevron Prism Frame 400х200100см, фильтр-нас. 2006л/ч, лестница",
                en: "Intex 26780 Frame pool Chevron Prism Frame 400x200x100cm, filter-pump 2006l/h, ladder"
            },
            price: 7600,
            oldPrice: 9499,
            image: standardizeImagePath('chevron-prism-26780.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26788-3 New, bazin cadru 400 x 200 x 100 cm (cu prelată 28037)",
                ru: "INTEX 26788-3 New, каркасный бассейн 400 x 200 x 100 см (в комплекте с тентом 28037)",
                en: "INTEX 26788-3 New, frame pool 400 x 200 x 100 cm (with cover 28037)"
            },
            price: 9350,
            image: standardizeImagePath('prism-frame-26788-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26790-1 Bazin cadru 400x200x122cm CU FILTRU DE NISIP",
                ru: "INTEX 26790-1 Каркасный бассейн 400х200х122см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26790-1 Frame pool 400x200x122cm WITH SAND FILTER"
            },
            price: 12850,
            image: standardizeImagePath('prism-frame-26790-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26790-3 New, bazin cadru 400 x 200 x 122 cm (cu prelată 28037)",
                ru: "INTEX 26790-3 New, каркасный бассейн 400 x 200 x 122 см (в комплекте с тентом 28037)",
                en: "INTEX 26790-3 New, frame pool 400 x 200 x 122 cm (with cover 28037)"
            },
            price: 11250,
            image: standardizeImagePath('prism-frame-26790-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26792-1 BAZIN CADRU 488X244X107cm CU FILTRU DE NISIP",
                ru: "INTEX 26792-1 КАРКАСНЫЙ БАССЕЙН 488Х244Х107см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26792-1 FRAME POOL 488X244X107cm WITH SAND FILTER"
            },
            price: 12399,
            image: standardizeImagePath('prism-frame-26792-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26796-1 BAZIN CADRU 503X274X122cm CU FILTRU DE NISIP",
                ru: "INTEX 26796-1 КАРКАСНЫЙ БАССЕЙН 503Х274X122см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26796-1 FRAME POOL 503X274X122cm WITH SAND FILTER"
            },
            price: 16500,
            image: standardizeImagePath('prism-frame-oval-26796-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 26798-1 BAZIN CADRU 610X305X122cm CU FILTRU DE NISIP",
                ru: "INTEX 26798-1 КАРКАСНЫЙ БАССЕЙН 610Х305X122см.С ПЕСОЧНЫМ ФИЛЬТРОМ",
                en: "INTEX 26798-1 FRAME POOL 610X305X122cm WITH SAND FILTER"
            },
            price: 18999,
            image: standardizeImagePath('prism-frame-oval-26798-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28202 Bazin cadru 305x76cm, 4485l cu filtru",
                ru: "INTEX 28202 Каркасный бассейн 305х76см, 4485л с фильтром",
                en: "INTEX 28202 Frame pool 305x76cm, 4485l with filter"
            },
            price: 2000,
            oldPrice: 2500,
            image: standardizeImagePath('metal-frame-28202.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "Intex 28209NP Bazin cadru 183 x 38 cm Canopy Metal Frame Pool",
                ru: "Intex 28209NP Каркасный бассейн 183 х 38 см Canopy Metal Frame Pool",
                en: "Intex 28209NP Frame pool 183 x 38 cm Canopy Metal Frame Pool"
            },
            price: 1999,
            image: standardizeImagePath('canopy-metal-frame-28209np.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28266 Bazin cadru Pink Metal Frame 220x150x60cm, 1662l",
                ru: "INTEX 28266 Каркасный бассейн Pink Metal Frame 220х150х60см, 1662л",
                en: "INTEX 28266 Frame pool Pink Metal Frame 220x150x60cm, 1662l"
            },
            price: 1600,
            oldPrice: 1999,
            image: standardizeImagePath('pink-metal-frame-28266.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28272-1 BAZIN CADRU 300X200X75cm CU FILTRU 2000l/h",
                ru: "INTEX 28272-1 КАРКАСНЫЙ БАССЕЙН 300Х200Х75см.С ФИЛЬТРОМ 2000л/ч",
                en: "INTEX 28272-1 FRAME POOL 300X200X75cm WITH FILTER 2000l/h"
            },
            price: 3000,
            image: standardizeImagePath('rectangular-pool-28272-1.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28272-3 New, bazin cadru 300 x 200 x 75 cm (cu prelată 28038)",
                ru: "INTEX 28272-3 New, каркасный бассейн 300 x 200 x 75 см (в комплекте с тентом 28038)",
                en: "INTEX 28272-3 New, frame pool 300 x 200 x 75 cm (with cover 28038)"
            },
            price: 2475,
            image: standardizeImagePath('rectangular-pool-28272-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28273-3 New, bazin cadru 450 x 220 x 84 cm (cu prelată 28039)",
                ru: "INTEX 28273-3 New, каркасный бассейн 450 x 220 x 84 см (в комплекте с тентом 28039)",
                en: "INTEX 28273-3 New, frame pool 450 x 220 x 84 cm (with cover 28039)"
            },
            price: 4049,
            image: standardizeImagePath('rectangular-pool-28273-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28274-3 New, bazin cadru 450 x 220 x 84 cm cu filtru-pompă (cu prelată 28039)",
                ru: "INTEX 28274-3 New, каркасный бассейн 450 x 220 x 84 см с насос-фильтром (в комплекте с тентом 28039)",
                en: "INTEX 28274-3 New, frame pool 450 x 220 x 84 cm with filter-pump (with cover 28039)"
            },
            price: 4949,
            image: standardizeImagePath('rectangular-pool-28274-3.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "INTEX 28290 Bazin cadru Pink Metal Frame 244x76cm, 2843l",
                ru: "INTEX 28290 Каркасный бассейн Pink Metal Frame 244х76см, 2843л",
                en: "INTEX 28290 Frame pool Pink Metal Frame 244x76cm, 2843l"
            },
            price: 1400,
            oldPrice: 1699,
            image: standardizeImagePath('pink-metal-frame-28290.jpg')
        },
        {
            sub: "frame_pools",
            title: {
                ro: "Mască de înot panoramică completă XS",
                ru: "Полнолицевая панорамная маска для плавания.XS",
                en: "Full face panoramic swimming mask XS"
            },
            price: 450,
            image: standardizeImagePath('full-face-mask-xs.jpg')
        }
    ]
};

// Helper function to generate unique IDs for POOLS_PRODUCTS
function generateProductId(prefix, index) {
    return `${prefix}_${index.toString().padStart(4, '0')}`;
}

// Generate unique IDs for POOLS_PRODUCTS
POOLS_PRODUCTS.pools.forEach((product, index) => {
    product.id = generateProductId('pool', index);
    product.category = 'baseine_intex';
    product.subcategory = product.sub;
    delete product.sub;
});

// General products data - TOATE PRODUSELE ORIGINALE PĂSTRATE
const PRODUCTS_DATA = [
    // Categoria de bărci
    {
        id: 'b1',
        category: 'boats',
        subcategory: 'boats_frame',
        title: {
            ro: 'SET BARCĂ GONFLABILĂ EXPLORER 200',
            ru: 'НАБОР НАДУВНАЯ ЛОДКА EXPLORER 200',
            en: 'INFLATABLE BOAT EXPLORER 200 SET'
        },
        price: 399,
        oldPrice: 520,
        image: standardizeImagePath('Categoria barci 1.jpg')
    },
    {
        id: 'b2',
        category: 'boats',
        subcategory: 'boats_frame',
        title: {
            ro: 'SET BARCĂ GONFLABILĂ EXPLORER 300',
            ru: 'НАБОР НАДУВНАЯ ЛОДКА EXPLORER 300',
            en: 'INFLATABLE BOAT EXPLORER 300 SET'
        },
        price: 479,
        oldPrice: 659,
        image: standardizeImagePath('Categoria barci 2.jpg')
    },
    {
        id: 'b3',
        category: 'boats',
        subcategory: 'boats_care',
        title: {
            ro: 'Vâsle din plastic 122 cm, set de 2',
            ru: 'ВЕСЛА ПЛАСТИКОВЫЕ 122СМ, КОМПЛЕКТ 2ШТ',
            en: 'Plastic oars 122 cm, set of 2'
        },
        price: 179,
        image: standardizeImagePath('Categoria barci 3.jpeg')
    },
    {
        id: 'b4',
        category: 'boats',
        subcategory: 'boats_pool_accessories',
        title: {
            ro: 'Kit de reparații',
            ru: 'РЕМОНТНЫЙ КОМПЛЕКТ',
            en: 'Repair Kit'
        },
        price: 20,
        image: standardizeImagePath('Categoria barci 12.jpg')
    },
    {
        id: 'b5',
        category: 'boats',
        subcategory: 'boats_easy',
        title: {
            ro: 'Barcă Gonflabilă Excursion 4',
            ru: 'НАДУВНАЯ ЛОДКА EXCURSION 4',
            en: 'Inflatable Boat Excursion 4'
        },
        price: 2499,
        oldPrice: 3599,
        image: standardizeImagePath('Categoria barci 4.jpg')
    },
    {
        id: 'b6',
        category: 'boats',
        subcategory: 'boats_pool_accessories',
        title: {
            ro: 'Set Barcă Gonflabilă Seahawk 2',
            ru: 'НАБОР НАДУВНАЯ ЛОДКА SEAHAWK 2',
            en: 'Inflatable Boat Seahawk 2 Set'
        },
        price: 999,
        oldPrice: 1499,
        image: standardizeImagePath('Categoria barci 5.jpg')
    },
    {
        id: 'b7',
        category: 'boats',
        subcategory: 'boats_intex',
        title: {
            ro: 'Set Barcă SeaHawk 400',
            ru: 'НАБОР ЛОДКА SEAHAWK 400',
            en: 'SeaHawk 400 Boat Set'
        },
        price: 2299,
        oldPrice: 3299,
        image: standardizeImagePath('Categoria barci 6.jpg')
    },
    {
        id: 'b8',
        category: 'boats',
        subcategory: 'boats_intex',
        title: {
            ro: 'Barcă Gonflabilă Challenger 2',
            ru: 'НАДУВНАЯ ЛОДКА CHALLENGER 2',
            en: 'Inflatable Boat Challenger 2'
        },
        price: 879,
        oldPrice: 1199,
        image: standardizeImagePath('Categoria barci 7.png')
    },
    {
        id: 'b9',
        category: 'boats',
        subcategory: 'boats_frame',
        title: {
            ro: 'Set Barcă Gonflabilă Challenger 3',
            ru: 'НАБОР НАДУВНАЯ ЛОДКА CHALLENGER 3',
            en: 'Inflatable Boat Challenger 3 Set'
        },
        price: 1439,
        oldPrice: 1999,
        image: standardizeImagePath('Categoria barci 8.jpg')
    },
    {
        id: 'b10',
        category: 'boats',
        subcategory: 'boats_frame',
        title: {
            ro: 'Set Barcă Gonflabilă Seahawk 3',
            ru: 'НАБОР НАДУВНАЯ ЛОДКА SEAHAWK 3',
            en: 'Inflatable Boat Seahawk 3 Set'
        },
        price: 1759,
        oldPrice: 2499,
        image: standardizeImagePath('Categoria barci 9.jpg')
    },
    {
        id: 'b11',
        category: 'boats',
        subcategory: 'boats_intex',
        title: {
            ro: 'Vâsle din aluminiu 137 cm, set de 2',
            ru: 'ВЕСЛА АЛЮМИНИЕВЫЕ 137СМ, КОМПЛЕКТ 2ШТ',
            en: 'Aluminum oars 137 cm, set of 2'
        },
        price: 379,
        image: standardizeImagePath('Categoria barci 10.jpg')
    },
    {
        id: 'b12',
        category: 'boats',
        subcategory: 'boats_pool_accessories',
        title: {
            ro: 'Placă Gonflabilă SUP Intex',
            ru: 'НАДУВНАЯ ДОСКА SUP INTEX',
            en: 'Intex Inflatable SUP Board'
        },
        price: 5299,
        oldPrice: 6999,
        image: standardizeImagePath('Categoria barci 11.jpg')
    },

    // categoria de terenuri de joacă
    {
        id: 'j1',
        category: 'joaca',
        title: {
            ro: 'Tobogan Intex 44107 (84x251x147 cm)',
            ru: 'ДЕТСКАЯ ГОРКА INTEX 44107 (84x251x147 СМ)',
            en: 'Intex Slide 44107 (84x251x147 cm)'
        },
        price: 2399,
        image: standardizeImagePath('Categoria terenuri 1.jpg')
    },
    {
        id: 'j2',
        category: 'joaca',
        title: {
            ro: 'Leagăn „Cuib" Intex 44112 (203x254x211 cm)',
            ru: 'КАЧЕЛИ ДЕТСКИЕ «ГНЕЗДО» INTEX 44112',
            en: 'Intex Nest Swing 44112 (203x254x211 cm)'
        },
        price: 2800,
        image: standardizeImagePath('Categoria terenuri 2.png')
    },
    {
        id: 'j3',
        category: 'joaca',
        title: {
            ro: 'Leagăn cu scaun schimbabil Intex 44114',
            ru: 'КАЧЕЛИ СО СМЕННЫМ СИДЕНЬЕМ INTEX 44114',
            en: 'Intex Swing with Exchangeable Seat 44114'
        },
        price: 2499,
        image: standardizeImagePath('terenuri3.jpg')
    },
    {
        id: 'j4',
        category: 'joaca',
        title: {
            ro: 'Leagăn cu scaun și balansoar Intex 44126',
            ru: 'КАЧЕЛИ С СИДЕНЬЕМ И КРЕСЛОМ-КАЧАЛКОЙ INTEX 44126',
            en: 'Intex Swing with Seat and Glider 44126'
        },
        price: 3099,
        image: standardizeImagePath('terenuri4.jpg')
    },
    {
        id: 'j5',
        category: 'joaca',
        title: {
            ro: 'Leagăn simplu Intex 44001',
            ru: 'ПРОСТЫЕ КАЧЕЛИ INTEX 44001',
            en: 'Intex Simple Swing 44001'
        },
        price: 550,
        image: standardizeImagePath('terenuri5.png')
    },

    // Transport copii - TOATE PRODUSELE ORIGINALE
    {
        id: 't1',
        category: 'transport',
        title: {
            ro: "Tricicletă pentru copii",
            ru: "ДЕТСКИЙ ТРЕХКОЛЕСНЫЙ ВЕЛОСИПЕД",
            en: "Kids Tricycle"
        },
        price: 1799,
        image: standardizeImagePath('trensport1.jpg')
    },
    {
        id: 't2',
        category: 'transport',
        title: {
            ro: "Trotinetă copii Model 188",
            ru: "ДЕТСКИЙ САМОКАТ 188",
            en: "Kids Scooter 188"
        },
        price: 500,
        image: standardizeImagePath('scooter-188.jpg')
    },
    {
        id: 't3',
        category: 'transport',
        title: {
            ro: "Skateboard copii 2206",
            ru: "СКЕЙТБОРД 2206",
            en: "Kids Skateboard 2206"
        },
        price: 399,
        image: standardizeImagePath('skate-2206.jpg')
    },
    {
        id: 't4',
        category: 'transport',
        title: {
            ro: "Skateboard copii 2308",
            ru: "СКЕЙТБОРД 2308",
            en: "Kids Skateboard 2308"
        },
        price: 450,
        image: standardizeImagePath('skate-2308.jpg')
    },
    {
        id: 't5',
        category: 'transport',
        title: {
            ro: "Skateboard copii 2406",
            ru: "СКЕЙТБОРД 2406",
            en: "Kids Skateboard 2406"
        },
        price: 399,
        image: standardizeImagePath('skate-2406.jpg')
    },
    {
        id: 't6',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 2489",
            ru: "ДЕТСКИЙ САМОКАТ 2489",
            en: "Kids Scooter 2489"
        },
        price: 570,
        image: standardizeImagePath('scooter-2489.jpg')
    },
    {
        id: 't7',
        category: 'transport',
        title: {
            ro: "Skateboard copii 28p",
            ru: "СКЕЙТБОРД 28P",
            en: "Kids Skateboard 28p"
        },
        price: 500,
        image: standardizeImagePath('skate-28p.jpg')
    },
    {
        id: 't8',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 306",
            ru: "ДЕТСКИЙ САМОКАТ 306",
            en: "Kids Scooter 306"
        },
        price: 450,
        image: standardizeImagePath('scooter-306.jpg')
    },
    {
        id: 't9',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 307",
            ru: "ДЕТСКИЙ САМОКАТ 307",
            en: "Kids Scooter 307"
        },
        price: 450,
        image: standardizeImagePath('scooter-307.jpg')
    },
    {
        id: 't10',
        category: 'transport',
        title: {
            ro: "Skateboard cu mâner 3108",
            ru: "СКЕЙТБОРД С РУЧКОЙ 3108",
            en: "Handle Skateboard 3108"
        },
        price: 650,
        image: standardizeImagePath('skate-3108-handle.jpg')
    },
    {
        id: 't11',
        category: 'transport',
        title: {
            ro: "Skateboard cu roți luminoase 3108",
            ru: "СКЕЙТБОРД СО СВЕТЯЩИМИСЯ КОЛЕСАМИ 3108",
            en: "Glowing Wheels Skateboard 3108"
        },
        price: 500,
        image: standardizeImagePath('skate-3108-glow.jpg')
    },
    {
        id: 't12',
        category: 'transport',
        title: {
            ro: "Skateboard copii 3108GD",
            ru: "СКЕЙТБОРД 3108GD",
            en: "Kids Skateboard 3108GD"
        },
        price: 650,
        image: standardizeImagePath('skate-3108gd.jpg')
    },
    {
        id: 't13',
        category: 'transport',
        title: {
            ro: "Skateboard copii 3108K",
            ru: "СКЕЙТБОРД 3108K",
            en: "Kids Skateboard 3108K"
        },
        price: 650,
        image: standardizeImagePath('skate-3108k.jpg')
    },
    {
        id: 't14',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 518",
            ru: "ДЕТСКИЙ САМОКАТ 518",
            en: "Kids Scooter 518"
        },
        price: 600,
        image: standardizeImagePath('scooter-518.jpg')
    },
    {
        id: 't15',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 601",
            ru: "ДЕТСКИЙ САМОКАТ 601",
            en: "Kids Scooter 601"
        },
        price: 530,
        image: standardizeImagePath('scooter-601.jpg')
    },
    {
        id: 't16',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 618",
            ru: "ДЕТСКИЙ САМОКАТ 618",
            en: "Kids Scooter 618"
        },
        price: 550,
        image: standardizeImagePath('scooter-618.jpg')
    },
    {
        id: 't17',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 619",
            ru: "ДЕТСКИЙ САМОКАТ 619",
            en: "Kids Scooter 619"
        },
        price: 599,
        image: standardizeImagePath('scooter-619.jpg')
    },
    {
        id: 't18',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 620",
            ru: "ДЕТСКИЙ САМОКАТ 620",
            en: "Kids Scooter 620"
        },
        price: 699,
        image: standardizeImagePath('scooter-620.jpg')
    },
    {
        id: 't19',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 628-2",
            ru: "ДЕТСКИЙ САМОКАТ 628-2",
            en: "Kids Scooter 628-2"
        },
        price: 799,
        image: standardizeImagePath('scooter-628-2.jpg')
    },
    {
        id: 't20',
        category: 'transport',
        title: {
            ro: "Trotinetă Model 6616",
            ru: "САМОКАТ 6616",
            en: "Scooter 6616"
        },
        price: 450,
        image: standardizeImagePath('scooter-6616.jpg')
    },
    {
        id: 't21',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 801",
            ru: "ДЕТСКИЙ САМОКАТ 801",
            en: "Kids Scooter 801"
        },
        price: 550,
        image: standardizeImagePath('scooter-801.jpg')
    },
    {
        id: 't22',
        category: 'transport',
        title: {
            ro: "Skateboard copii 808",
            ru: "СКЕЙТБОРД 808",
            en: "Kids Skateboard 808"
        },
        price: 599,
        image: standardizeImagePath('skate-808.jpg')
    },

    // ROLE (Rollerblades)
    {
        id: 'r1',
        category: 'transport',
        title: {
            ro: "Role Negre L (39-42) - 9087",
            ru: "РОЛИКИ ЧЕРНЫЕ L (39-42) 9087",
            en: "Black Rollerblades L (39-42)"
        },
        price: 650,
        image: standardizeImagePath('role-9087-black.jpg')
    },
    {
        id: 'r2',
        category: 'transport',
        title: {
            ro: "Role Albastre M (35-38) - 9087",
            ru: "РОЛИКИ СИНИЕ M (35-38) 9087",
            en: "Blue Rollerblades M (35-38)"
        },
        price: 850,
        image: standardizeImagePath('role-9087-blue.jpg')
    },
    {
        id: 'r3',
        category: 'transport',
        title: {
            ro: "Role Albastre S (31-34) - 9087",
            ru: "РОЛИКИ СИНИЕ S (31-34) 9087",
            en: "Blue Rollerblades S (31-34)"
        },
        price: 850,
        image: standardizeImagePath('role-9087-blue-s.jpg')
    },
    {
        id: 'r4',
        category: 'transport',
        title: {
            ro: "Role Roz M (35-38) - 9087",
            ru: "РОЛИКИ РОЗОВЫЕ M (35-38) 9087",
            en: "Pink Rollerblades M (35-38)"
        },
        price: 850,
        image: standardizeImagePath('role-9087-pink.jpg')
    },
    {
        id: 'r5',
        category: 'transport',
        title: {
            ro: "Role Roz S (31-34) - 9087",
            ru: "РОЛИКИ РОЗОВЫЕ S (31-34) 9087",
            en: "Pink Rollerblades S (31-34)"
        },
        price: 850,
        image: standardizeImagePath('role-9087-pink-s.jpg')
    },
    {
        id: 'r6',
        category: 'transport',
        title: {
            ro: "Role Roz S (31-34) - 963",
            ru: "РОЛИКИ РОЗОВЫЕ S (31-34) 963",
            en: "Pink Rollerblades S (31-34) 963"
        },
        price: 850,
        image: standardizeImagePath('role-963-pink.jpg')
    },
    {
        id: 'r7',
        category: 'transport',
        title: {
            ro: "Role Roz M (35-38) - 9807",
            ru: "РОЛИКИ РОЗОВЫЕ M (35-38) 9807",
            en: "Pink Rollerblades M (35-38) 9807"
        },
        
        price: 850,
        image: standardizeImagePath('role-9807-pink.jpg')
    },
    {
        id: 'r8',
        category: 'transport',
        title: {
            ro: "Role Roz S (31-34) - 9807",
            ru: "РОЛИКИ РОЗОВЫЕ S (31-34) 9807",
            en: "Pink Rollerblades S (31-34) 9807"
        },
       
        price: 850,
        image: standardizeImagePath('role-9807-pink.jpg')
    },

    // Alte trotinete - TOATE PRODUSELE ORIGINALE
    {
        id: 't23',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 918-4",
            ru: "ДЕТСКИЙ САМОКАТ 918-4",
            en: "Kids Scooter 918-4"
        },
       
        price: 1300,
        image: standardizeImagePath('scooter-918-4.jpg')
    },
    {
        id: 't24',
        category: 'transport',
        title: {
            ro: "Trotinetă copii 999",
            ru: "ДЕТСКИЙ САМОКАТ 999",
            en: "Kids Scooter 999"
        },
        
        price: 500,
        image: standardizeImagePath('scooter-999.jpg')
    },
    {
        id: 't25',
        category: 'transport',
        title: {
            ro: "Trotinetă copii A81",
            ru: "ДЕТСКИЙ САМОКАТ A81",
            en: "Kids Scooter A81"
        },
        price: 599,
        image: standardizeImagePath('scooter-a81.jpg')
    },
    {
        id: 't26',
        category: 'transport',
        title: {
            ro: "Trotinetă KREISS A7",
            ru: "САМОКАТ KREISS A7",
            en: "Scooter KREISS A7"
        },
        price: 999,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-kreiss-a7.jpg')
    },
    {
        id: 't27',
        category: 'transport',
        title: {
            ro: "Trotinetă copii M1",
            ru: "ДЕТСКИЙ САМОКАТ M1",
            en: "Kids Scooter M1"
        },
        price: 550,
        image: standardizeImagePath('scooter-m1.jpg')
    },
    {
        id: 't28',
        category: 'transport',
        title: {
            ro: "Trotinetă copii M6",
            ru: "ДЕТСКИЙ САМОКАТ M6",
            en: "Kids Scooter M6"
        },
        price: 570,
        image: standardizeImagePath('scooter-m6.jpg')
    },

    // SCOOTER SERIES 5S & Y5
    {
        id: 't29',
        category: 'transport',
        title: {
            ro: "Trotinetă SCOOTER 5S WHITE",
            ru: "САМОКАТ SCOOTER 5S WHITE",
            en: "Scooter 5S White"
        },
        price: 1099,
        oldPrice: 1299,
        image: standardizeImagePath('scooter-5s-white.jpg')
    },
    {
        id: 't30',
        category: 'transport',
        title: {
            ro: "Trotinetă SCOOTER Y5",
            ru: "САМОКАТ SCOOTER Y5",
            en: "Scooter Y5"
        },
        price: 999,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-y5.jpg')
    },

    // SCOOTER SERIES 898 (Diverse Culori & Modele)
    // Model 003
    {
        id: 't31',
        category: 'transport',
        title: {
            ro: "Scooter 898-003 Negru",
            ru: "САМОКАТ 898-003 ЧЕРНЫЙ",
            en: "Scooter 898-003 Black"
        },
        price: 699,
        oldPrice: 799,
        image: standardizeImagePath('scooter-003-black.jpg')
    },
    {
        id: 't32',
        category: 'transport',
        title: {
            ro: "Scooter 898-003 Albastru",
            ru: "САМОКАТ 898-003 СИНИЙ",
            en: "Scooter 898-003 Blue"
        },
        price: 699,
        oldPrice: 799,
        image: standardizeImagePath('scooter-003-blue.jpg')
    },
    {
        id: 't33',
        category: 'transport',
        title: {
            ro: "Scooter 898-003 Roz",
            ru: "САМОКАТ 898-003 РОЗОВЫЙ",
            en: "Scooter 898-003 Pink"
        },
        price: 699,
        oldPrice: 799,
        image: standardizeImagePath('scooter-003-pink.jpg')
    },
    {
        id: 't34',
        category: 'transport',
        title: {
            ro: "Scooter 898-003 Roșu",
            ru: "САМОКАТ 898-003 КРАСНЫЙ",
            en: "Scooter 898-003 Red"
        },
        price: 699,
        oldPrice: 799,
        image: standardizeImagePath('scooter-003-red.jpg')
    },

    // Model 003S
    {
        id: 't35',
        category: 'transport',
        title: {
            ro: "Scooter 898-003S Negru",
            ru: "САМОКАТ 898-003S ЧЕРНЫЙ",
            en: "Scooter 898-003S Black"
        },
        price: 850,
        oldPrice: 999,
        image: standardizeImagePath('scooter-003s-black.jpg')
    },
    {
        id: 't36',
        category: 'transport',
        title: {
            ro: "Scooter 898-003S Albastru",
            ru: "САМОКАТ 898-003S СИНИЙ",
            en: "Scooter 898-003S Blue"
        },
        price: 850,
        oldPrice: 999,
        image: standardizeImagePath('scooter-003s-blue.jpg')
    },
    {
        id: 't37',
        category: 'transport',
        title: {
            ro: "Scooter 898-003S Roz",
            ru: "САМОКАТ 898-003S РОЗОВЫЙ",
            en: "Scooter 898-003S Pink"
        },
        price: 850,
        oldPrice: 999,
        image: standardizeImagePath('scooter-003s-pink.jpg')
    },
    {
        id: 't38',
        category: 'transport',
        title: {
            ro: "Scooter 898-003S Violet",
            ru: "САМОКАТ 898-003S ФИОЛЕТОВЫЙ",
            en: "Scooter 898-003S Violet"
        },
        price: 850,
        oldPrice: 999,
        image: standardizeImagePath('scooter-003s-violet.jpg')
    },

    // Model 145
    {
        id: 't39',
        category: 'transport',
        title: {
            ro: "Scooter 898-145 Negru",
            ru: "САМОКАТ 898-145 ЧЕРНЫЙ",
            en: "Scooter 898-145 Black"
        },
        price: 949,
        oldPrice: 999,
        image: standardizeImagePath('scooter-145-black.jpg')
    },
    {
        id: 't40',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Negru",
            ru: "САМОКАТ 898-145S ЧЕРНЫЙ",
            en: "Scooter 898-145S Black"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-black.jpg')
    },
    {
        id: 't41',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Albastru",
            ru: "САМОКАТ 898-145S СИНИЙ",
            en: "Scooter 898-145S Blue"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-blue.jpg')
    },
    {
        id: 't42',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Verde",
            ru: "САМОКАТ 898-145S ЗЕЛЕНЫЙ",
            en: "Scooter 898-145S Green"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-green.jpg')
    },
    {
        id: 't43',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Roz",
            ru: "САМОКАТ 898-145S РОЗОВЫЙ",
            en: "Scooter 898-145S Pink"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-pink.jpg')
    },
    {
        id: 't44',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Roșu",
            ru: "САМОКАТ 898-145S КРАСНЫЙ",
            en: "Scooter 898-145S Red"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-red.jpg')
    },
    {
        id: 't45',
        category: 'transport',
        title: {
            ro: "Scooter 898-145S Violet",
            ru: "САМОКАТ 898-145S ФИОЛЕТОВЫЙ",
            en: "Scooter 898-145S Violet"
        },
        price: 999,
        oldPrice: 1099,
        image: standardizeImagePath('scooter-145s-violet.jpg')
    },

    // Model 180S & SL
    {
        id: 't46',
        category: 'transport',
        title: {
            ro: "Scooter 898-180S Roșu",
            ru: "САМОКАТ 898-180S КРАСНЫЙ",
            en: "Scooter 898-180S Red"
        },
        price: 1099,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-180s-red.jpg')
    },
    {
        id: 't47',
        category: 'transport',
        title: {
            ro: "Scooter 898-180S Argintiu",
            ru: "САМОКАТ 898-180S СЕРЕБРЯНЫЙ",
            en: "Scooter 898-180S Silver"
        },
        price: 1099,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-180s-silver.jpg')
    },
    {
        id: 't48',
        category: 'transport',
        title: {
            ro: "Scooter 898-180S Violet",
            ru: "САМОКАТ 898-180S ФИОЛЕТОВЫЙ",
            en: "Scooter 898-180S Violet"
        },
        price: 1099,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-180s-violet.jpg')
    },
    {
        id: 't49',
        category: 'transport',
        title: {
            ro: "Scooter 898-180S Negru",
            ru: "САМОКАТ 898-180S ЧЕРНЫЙ",
            en: "Scooter 898-180S Black"
        },
        price: 1099,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-180s-black.jpg')
    },
    {
        id: 't50',
        category: 'transport',
        title: {
            ro: "Scooter 898-180S Albastru",
            ru: "САМОКАТ 898-180S СИНИЙ",
            en: "Scooter 898-180S Blue"
        },
        price: 1099,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-180s-blue.jpg')
    },
    {
        id: 't51',
        category: 'transport',
        title: {
            ro: "Scooter 898-180SL Negru",
            ru: "САМОКАТ 898-180SL ЧЕРНЫЙ",
            en: "Scooter 898-180SL Black"
        },
        price: 1199,
        oldPrice: 1399,
        image: standardizeImagePath('scooter-180sl-black.jpg')
    },
    {
        id: 't52',
        category: 'transport',
        title: {
            ro: "Scooter 898-180SL Alb",
            ru: "САМОКАТ 898-180SL БЕЛЫЙ",
            en: "Scooter 898-180SL White"
        },
        price: 1199,
        oldPrice: 1399,
        image: standardizeImagePath('scooter-180sl-white.jpg')
    },

    // Model 5D
    {
        id: 't53',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Negru",
            ru: "САМОКАТ 898-5D ЧЕРНЫЙ",
            en: "Scooter 898-5D Black"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-black.jpg')
    },
    {
        id: 't54',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Albastru",
            ru: "САМОКАТ 898-5D СИНИЙ",
            en: "Scooter 898-5D Blue"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-blue.jpg')
    },
    {
        id: 't55',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Verde",
            ru: "САМОКАТ 898-5D ЗЕЛЕНЫЙ",
            en: "Scooter 898-5D Green"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-green.jpg')
    },
    {
        id: 't56',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Roz",
            ru: "САМОКАТ 898-5D РОЗОВЫЙ",
            en: "Scooter 898-5D Pink"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-pink.jpg')
    },
    {
        id: 't57',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Roșu",
            ru: "САМОКАТ 898-5D КРАСНЫЙ",
            en: "Scooter 898-5D Red"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-red.jpg')
    },
    {
        id: 't58',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Violet",
            ru: "САМОКАТ 898-5D ФИОЛЕТОВЫЙ",
            en: "Scooter 898-5D Violet"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-violet.jpg')
    },
    {
        id: 't59',
        category: 'transport',
        title: {
            ro: "Scooter 898-5D Alb",
            ru: "САМОКАТ 898-5D БЕЛЫЙ",
            en: "Scooter 898-5D White"
        },
        price: 1499,
        oldPrice: 1599,
        image: standardizeImagePath('scooter-5d-white.jpg')
    },

    // Alte modele 898 & Diverse
    {
        id: 't60',
        category: 'transport',
        title: {
            ro: "Scooter 898-S01",
            ru: "САМОКАТ 898-S01",
            en: "Scooter 898-S01"
        },
        price: 750,
        oldPrice: 950,
        image: standardizeImagePath('scooter-s01.jpg')
    },
    {
        id: 't61',
        category: 'transport',
        title: {
            ro: "Scooter 898-S03",
            ru: "САМОКАТ 898-S03",
            en: "Scooter 898-S03"
        },
        price: 950,
        oldPrice: 1199,
        image: standardizeImagePath('scooter-s03.jpg')
    },
    {
        id: 't62',
        category: 'transport',
        title: {
            ro: "Scooter 898-S07",
            ru: "САМОКАТ 898-S07",
            en: "Scooter 898-S07"
        },
        price: 1699,
        image: standardizeImagePath('scooter-s07.jpg')
    },
    {
        id: 't63',
        category: 'transport',
        title: {
            ro: "Bicicletă fără pedale X005",
            ru: "БЕГОВЕЛ X005",
            en: "Balance Bike X005"
        },
        price: 770,
        image: standardizeImagePath('bike-x005.jpg')
    },
    {
        id: 't64',
        category: 'transport',
        title: {
            ro: "Trotinetă copii X016-1",
            ru: "ДЕТСКИЙ САМОКАТ X016-1",
            en: "Kids Scooter X016-1"
        },
        price: 899,
        image: standardizeImagePath('scooter-x016-1.jpg')
    },
    {
        id: 't65',
        category: 'transport',
        title: {
            ro: "Trotinetă copii X016-4",
            ru: "ДЕТСКИЙ САМОКАТ X016-4",
            en: "Kids Scooter X016-4"
        },
        price: 799,
        image: standardizeImagePath('scooter-x016-4.jpg')
    },
    {
        id: 't66',
        category: 'transport',
        title: {
            ro: "Trotinetă copii X2",
            ru: "ДЕТСКИЙ САМОКАТ X2",
            en: "Kids Scooter X2"
        },
        price: 550,
        image: standardizeImagePath('scooter-x2.jpg')
    },
    {
        id: 't67',
        category: 'transport',
        title: {
            ro: "Trotinetă copii YS818",
            ru: "ДЕТСКИЙ САМОКАТ YS818",
            en: "Kids Scooter YS818"
        },
        price: 450,
        image: standardizeImagePath('Kids Scooter YS818.jpg')
    },
    {
        id: 't68',
        category: 'transport',
        title: {
            ro: "Longboard",
            ru: "ЛОНГБОРД",
            en: "Longboard"
        },
        price: 980,
        image: standardizeImagePath('longboard.jpg')
    },

    // Copii-pools (Детские бассейны) - TOATE PRODUSELE ORIGINALE
    {
        id: 'kp1',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 168Х46СМ «CURCUBEU»',
            ru: '56441 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 168Х46СМ «РАДУГА», 617Л, ОТ 3 ЛЕТ',
            en: 'Kids Inflatable Pool 168x46cm «Rainbow» 617L, 3+ years'
        },
        price: 349,
        oldPrice: 369,
        image: standardizeImagePath('pool-kids-rainbow.jpg')
    },
    {
        id: 'kp2',
        category: 'copii-pools',
        title: {
            ro: 'Bazin Copii 152x25cm «Snorkeling»',
            ru: '56451 ДЕТСКИЙ БАССЕЙН 152Х25СМ «СНОРКЛИНГ» 443Л, ОТ 3 ЛЕТ',
            en: 'Kids Pool 152x25cm «Snorkeling» 443L, 3+ years'
        },
        price: 219,
        oldPrice: 245,
        image: standardizeImagePath('pool-kids-snorkling.jpg')
    },
    {
        id: 'kp3',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN COPII 183Х38СМ «SNAPSET»',
            ru: '56452 ДЕТСКИЙ БАССЕЙН 183Х38СМ «SNAPSET» 977Л, ОТ 3 ЛЕТ',
            en: 'Kids Pool 183x38cm «SNAPSET» 977L, 3+ years'
        },
        price: 339,
        oldPrice: 369,
        image: standardizeImagePath('pool-kids-snapset.jpg')
    },
    {
        id: 'kp4',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 229Х229Х66СМ «FAMILIAL»',
            ru: '56475 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 229Х229Х66СМ «СЕМЕЙНЫЙ» 233Л, ОТ 3 ЛЕТ',
            en: 'Family Inflatable Pool 229x229x66cm 233L, 3+ years'
        },
        price: 999,
        oldPrice: 1149,
        image: standardizeImagePath('pool-kids-family.jpg')
    },
    {
        id: 'kp5',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 262Х175Х56СМ «CADA»',
            ru: '56483 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 262Х175Х56СМ «ВАННА» 749Л, ОТ 6 ЛЕТ',
            en: 'Kids Inflatable Pool 262x175x56cm «Tub» 749L, 6+ years'
        },
        price: 659,
        oldPrice: 779,
        image: standardizeImagePath('pool-kids-tub.jpg')
    },
    {
        id: 'kp6',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 191Х178Х61СМ «AKVARIUM»',
            ru: '56493 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 191Х178Х61СМ «АКВАРИУМ» 541Л, ОТ 6 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 191x178x61cm «Aquarium» 541L, 6+ years'
        },
        price: 699,
        oldPrice: 819,
        image: standardizeImagePath('pool-kids-aquarium.jpg')
    },
    {
        id: 'kp7',
        category: 'copii-pools',
        title: {
            ro: 'Inel Gonflabil Intex «Micuța Stea»',
            ru: '56573 НАДУВНОЙ КРУГ INTEX «МАЛЕНЬКАЯ ЗВЕЗДОЧКА»',
            en: 'Intex Inflatable Ring «Little Star»'
        },
        price: 175,
        image: standardizeImagePath('ring-kids-star.jpg')
    },
    {
        id: 'kp8',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 85Х85Х23СМ, 57Л, ОТ 1 ДО 3 ЛЕТ',
            ru: '57100 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 85Х85Х23СМ, 57Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 85x85x23cm 57L, 1-3 years'
        },
        price: 199,
        oldPrice: 225,
        image: standardizeImagePath('pool-kids-85.jpg')
    },
    {
        id: 'kp9',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 61Х22СМ «CURCUBEU»',
            ru: '57107 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 61Х22СМ «РАДУГА» 34Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 61x22cm «Rainbow» 34L, 1-3 years'
        },
        price: 85,
        oldPrice: 95,
        image: standardizeImagePath('pool-kids-61.jpg')
    },
    {
        id: 'kp10',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 102Х89СМ «CIUPERCA MUSCARIA» CU COPERIȘ',
            ru: '57114 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 102Х89СМ «ГРИБ МУХОМОР» С НАВЕСОМ, 45Л, ОТ 1 ДО 3 ЛЕТ',
            en: 'Kids Inflatable Pool 102x89cm «Mushroom» with canopy 45L, 1-3 years'
        },
        price: 269,
        oldPrice: 309,
        image: standardizeImagePath('pool-kids-mushroom.jpg')
    },
    {
        id: 'kp11',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII «FAMILIAL» INTEX, 203X152X48 CM',
            ru: '57180 НАДУВНОЙ ДЕТСКИЙ БАССЕЙН "СЕМЕЙНЫЙ" INTEX, 203X152X48 CM',
            en: 'Family Inflatable Pool INTEX, 203x152x48 cm'
        },
        price: 500,
        image: standardizeImagePath('pool-kids-family-203.jpg')
    },
    {
        id: 'kp12',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 229Х147Х46СМ ОТ 6 ЛЕТ',
            ru: '57181 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 229Х147Х46СМ ОТ 6 ЛЕТ',
            en: 'Kids Inflatable Pool 229x147x46cm, 6+ years'
        },
        price: 550,
        image: standardizeImagePath('pool-kids-229-147.jpg')
    },
    {
        id: 'kp13',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 166Х100Х28СМ, 102Л, ОТ 2 ANI',
            ru: '57403 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 166Х100Х28СМ, 102Л, ОТ 2 ЛЕТ,НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 166x100x28cm 102L, 2+ years'
        },
        price: 299,
        oldPrice: 319,
        image: standardizeImagePath('pool-kids-166.jpg')
    },
    {
        id: 'kp14',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 114Х25СМ «CURCUBEU»',
            ru: '57412 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 114Х25СМ «РАДУГА» 136Л, ОТ 2 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 114x25cm «Rainbow» 136L, 2+ years'
        },
        price: 189,
        oldPrice: 209,
        image: standardizeImagePath('pool-kids-114.jpg')
    },
    {
        id: 'kp15',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 147Х33СМ «CURCUBEU»',
            ru: '57422 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 147Х33СМ «РАДУГА» 299Л, ОТ 2 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 147x33cm «Rainbow» 299L, 2+ years'
        },
        price: 249,
        oldPrice: 289,
        image: standardizeImagePath('pool-kids-147.jpg')
    },
    {
        id: 'kp16',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 157Х157Х122 СМ «CASA» CU COPERIȘ',
            ru: '57470 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 157Х157Х122 СМ «ДОМИК» С НАВЕСОМ, 280Л, ОТ 2 ЛЕТ',
            en: 'Kids Inflatable Pool 157x157x122cm «House» with canopy 280L, 2+ years'
        },
        price: 599,
        oldPrice: 649,
        image: standardizeImagePath('pool-kids-house.jpg')
    },
    {
        id: 'kp17',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 159Х159Х50СМ «AKVARIUM»',
            ru: '57471 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 159Х159Х50СМ «АКВАРИУМ» 424Л, ОТ 3 ЛЕТ',
            en: 'Kids Inflatable Pool 159x159x50cm «Aquarium» 424L, 3+ years'
        },
        price: 550,
        oldPrice: 629,
        image: standardizeImagePath('pool-kids-159-aqua.jpg')
    },
    {
        id: 'kp18',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 163Х107Х46СМ «PIRAȚI»',
            ru: '57482 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 163Х107Х46СМ «ПИРАТЫ» 238Л, ОТ 3 ЛЕТ',
            en: 'Kids Inflatable Pool 163x107x46cm «Pirates» 238L, 3+ years'
        },
        price: 449,
        oldPrice: 499,
        image: standardizeImagePath('pool-kids-pirates.jpg')
    },
    {
        id: 'kp19',
        category: 'copii-pools',
        title: {
            ro: 'CORT PENTRU BAZINE COPII 305Х183СМ ȘI 262Х175СМ',
            ru: '58412 ТЕНТ ДЛЯ ДЕТСКИХ БАССЕЙНОВ 305Х183СМ И 262Х175СМ',
            en: 'Canopy for Kids Pools 305x183cm and 262x175cm'
        },
        price: 219,
        image: standardizeImagePath('canopy-kids.jpg')
    },
    {
        id: 'kp20',
        category: 'copii-pools',
        title: {
            ro: 'Bazin Gonflabil Copii «Ananas»',
            ru: '58414 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН «АНАНАС»',
            en: 'Kids Inflatable Pool «Pineapple»'
        },
        price: 300,
        oldPrice: 439,
        image: standardizeImagePath('pool-kids-pineapple.jpg')
    },
    {
        id: 'kp21',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 147Х33СМ «CRISTAL»',
            ru: '58426 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 147Х33СМ «КРИСТАЛ» 288Л, ОТ 2 ЛЕТ',
            en: 'Kids Inflatable Pool 147x33cm «Crystal» 288L, 2+ years'
        },
        price: 219,
        oldPrice: 229,
        image: standardizeImagePath('pool-kids-crystal.jpg')
    },
    {
        id: 'kp22',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 188Х46СМ, 666Л, ОТ 3 ANI',
            ru: '58431 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 188Х46СМ, 666Л, ОТ 3 ЛЕТ',
            en: 'Kids Inflatable Pool 188x46cm 666L, 3+ years'
        },
        price: 399,
        oldPrice: 429,
        image: standardizeImagePath('pool-kids-188.jpg')
    },
    {
        id: 'kp23',
        category: 'copii-pools',
        title: {
            ro: 'Bazin Gonflabil Copii 122x122cm «Unicorn» cu coperiș',
            ru: '58435 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 122Х122СМ «ЕДИНОРОГ» С НАВЕСОМ, 130Л, ОТ 2 ЛЕТ',
            en: 'Kids Inflatable Pool 122x122cm «Unicorn» with canopy 130L, 2+ years'
        },
        price: 699,
        oldPrice: 755,
        image: standardizeImagePath('pool-kids-unicorn.jpg')
    },
    {
        id: 'kp24',
        category: 'copii-pools',
        title: {
            ro: 'Bazin Gonflabil Copii «Pisici-Unicorn» 102x102cm, 1-3 ani',
            ru: '58438 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН «КОТЕНОК-ЕДИНОРОЖКА» 102Х102СМ, 1-3 ГОДА',
            en: 'Kids Inflatable Pool «Cat-Unicorn» 102x102cm, 1-3 years'
        },
        price: 339,
        oldPrice: 379,
        image: standardizeImagePath('pool-kids-cat-unicorn.jpg')
    },
    {
        id: 'kp25',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 168Х38СМ «CRISTAL»',
            ru: '58446 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 168Х38СМ «КРИСТАЛЛ» 481Л, ОТ 3 ЛЕТ',
            en: 'Kids Inflatable Pool 168x38cm «Crystal» 481L, 3+ years'
        },
        price: 279,
        oldPrice: 319,
        image: standardizeImagePath('pool-kids-168-crystal.jpg')
    },
    {
        id: 'kp26',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII «PEPENE»',
            ru: '58448 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН «АРБУЗ» 168Х38СМ, 581Л, ОТ 2 ЛЕТ',
            en: 'Kids Inflatable Pool «Watermelon» 168x38cm 581L, 2+ years'
        },
        price: 329,
        oldPrice: 369,
        image: standardizeImagePath('pool-kids-watermelon.jpg')
    },
    {
        id: 'kp27',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN COPII 244Х46СМ «SNAPSET»',
            ru: '58472 ДЕТСКИЙ БАССЕЙН 244Х46СМ «SNAPSET» 2089Л, ОТ 3 ЛЕТ',
            en: 'Kids Pool 244x46cm «SNAPSET» 2089L, 3+ years'
        },
        price: 559,
        oldPrice: 619,
        image: standardizeImagePath('pool-kids-244-snapset.jpg')
    },
    {
        id: 'kp28',
        category: 'copii-pools',
        title: {
            ro: 'Bazin Copii 122x25cm «Rățuști»',
            ru: '58477 ДЕТСКИЙ БАССЕЙН 122Х25СМ «УТЕНОК» 281Л., ОТ 3 ЛЕТ',
            en: 'Kids Pool 122x25cm «Duck» 281L, 3+ years'
        },
        price: 189,
        oldPrice: 209,
        image: standardizeImagePath('pool-kids-duck.jpg')
    },
    {
        id: 'kp29',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 152Х56СМ «AKVARIUM»',
            ru: '58480 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 152Х56СМ «АКВАРИУМ» 318Л, ОТ 6 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 152x56cm «Aquarium» 318L, 6+ years'
        },
        price: 549,
        oldPrice: 629,
        image: standardizeImagePath('pool-kids-152-aqua.jpg')
    },
    {
        id: 'kp30',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 305Х183Х56СМ, 999L, ОТ 6 ANI',
            ru: '58484 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 305Х183Х56СМ, 999Л, ОТ 6 ЛЕТ',
            en: 'Kids Inflatable Pool 305x183x56cm 999L, 6+ years'
        },
        price: 949,
        oldPrice: 1049,
        image: standardizeImagePath('pool-kids-305-large.jpg')
    },
    {
        id: 'kp31',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 86Х25СМ «CURCUBEU»',
            ru: '58924 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 86Х25СМ «РАДУГА» 68Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО',
            en: 'Kids Inflatable Pool 86x25cm «Rainbow» 68L, 1-3 years'
        },
        price: 125,
        oldPrice: 139,
        image: standardizeImagePath('pool-kids-86.jpg')
    },
    {
        id: 'kp32',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 114Х25СМ «CRISTAL»',
            ru: '59416 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 114Х25СМ «КРИСТАЛЛ» 132Л, ОТ 2 ЛЕТ',
            en: 'Kids Inflatable Pool 114x25cm «Crystal» 132L, 2+ years'
        },
        price: 139,
        oldPrice: 149,
        image: standardizeImagePath('pool-kids-114-crystal.jpg')
    },
    {
        id: 'kp33',
        category: 'copii-pools',
        title: {
            ro: 'BAZIN GONFLABIL COPII 132Х28СМ «PEȘTI» CU MINGE ȘI INEL',
            ru: '59469 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 132Х28СМ «РЫБКИ» С МЯЧОМ И КРУГОМ, 204Л',
            en: 'Kids Inflatable Pool 132x28cm «Fish» with ball and ring 204L'
        },
        price: 200,
        oldPrice: 250,
        image: standardizeImagePath('pool-kids-fish.jpg')
    },
    {
        id: 'kp34',
        category: 'copii-pools',
        title: {
            ro: 'KIT DE REPARAȚII',
            ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ',
            en: 'Repair Kit'
        },
        price: 20,
        image: standardizeImagePath('repair-kit.jpg')
    },
    {
        id: 'kp35',
        category: 'copii-pools',
        title: {
            ro: 'Intex 57441 Bazin Gonflabil Copii',
            ru: 'INTEX 57441 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН',
            en: 'Intex 57441 Kids Inflatable Pool'
        },
        price: 419,
        image: standardizeImagePath('pool-kids-57441.jpg')
    },
    {
        id: 'kp36',
        category: 'copii-pools',
        title: {
            ro: 'INTEX 58427 Bazin Gonflabil SWEET BLOSSOM',
            ru: 'INTEX 58427 НАДУВНОЙ БАССЕЙН SWEET BLOSSOM',
            en: 'INTEX 58427 Inflatable Pool SWEET BLOSSOM'
        },
        price: 149,
        image: standardizeImagePath('pool-kids-sweet-blossom.jpg')
    },
    {
        id: 'kp37',
        category: 'copii-pools',
        title: {
            ro: 'Intex 58432 Bazin Gonflabil Zesty Lemon Pool I',
            ru: 'INTEX 58432 НАДУВНОЙ БАССЕЙН ZESTY LEMON POOL I',
            en: 'Intex 58432 Inflatable Pool Zesty Lemon Pool I'
        },
        price: 229,
        image: standardizeImagePath('pool-kids-zesty-lemon.jpg')
    },
    {
        id: 'kp38',
        category: 'copii-pools',
        title: {
            ro: 'Mască de Înot Panoramică Completă L/XL',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.L/XL',
            en: 'Full Face Snorkel Mask L/XL'
        },
        price: 450,
        image: standardizeImagePath('mask-snorkel-lxl.jpg')
    },
    {
        id: 'kp39',
        category: 'copii-pools',
        title: {
            ro: 'Mască de Înot Panoramică Completă S/M',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.S/M',
            en: 'Full Face Snorkel Mask S/M'
        },
        price: 450,
        image: standardizeImagePath('mask-snorkel-sm.jpg')
    },
    {
        id: 'kp40',
        category: 'copii-pools',
        title: {
            ro: 'Mască de Înot Panoramică Completă XS',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.XS',
            en: 'Full Face Snorkel Mask XS'
        },
        price: 450,
        image: standardizeImagePath('mask-snorkel-xs.jpg')
    },

    // Swim-accessories (Аксессуары для плавания) - TOATE PRODUSELE ORIGINALE
    {
        id: 'sa1',
        category: 'swim-accessories',
        title: {
            ro: 'Ochelari de înot «PLAY» 3-8 ani, 3 culori',
            ru: '55602 ОЧКИ ДЛЯ ПЛАВАНИЯ «PLAY» ОТ 3-8 ЛЕТ, 3 ЦВЕТА',
            en: 'Swimming Goggles «PLAY» 3-8 years, 3 colors'
        },
        price: 35,
        image: standardizeImagePath('goggles-play.jpg')
    },
    {
        id: 'sa2',
        category: 'swim-accessories',
        title: {
            ro: 'Set înot ADVENTURER, 8+ ani',
            ru: '55642 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ ADVENTURER SWIM SET, ОТ 8 ЛЕТ',
            en: 'ADVENTURER Swim Set, 8+ years'
        },
        price: 189,
        image: standardizeImagePath('swim-set-adventurer.jpg')
    },
    {
        id: 'sa3',
        category: 'swim-accessories',
        title: {
            ro: 'Set înot WAVE RIDER, 8+ ani',
            ru: '55647 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ WAVE RIDER SWIM SET, ОТ 8 ЛЕТ',
            en: 'WAVE RIDER Swim Set, 8+ years'
        },
        price: 239,
        image: standardizeImagePath('swim-set-wave-rider.jpg')
    },
    {
        id: 'sa4',
        category: 'swim-accessories',
        title: {
            ro: 'Set înot REEF RIDER, 14+ ani',
            ru: '55648 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ REEF RIDER SWIM SET, ОТ 14 ЛЕТ',
            en: 'REEF RIDER Swim Set, 14+ years'
        },
        price: 229,
        oldPrice: 275,
        image: standardizeImagePath('swim-set-reef-rider.jpg')
    },
    {
        id: 'sa5',
        category: 'swim-accessories',
        title: {
            ro: 'Ochelari de înot «Sport Relay» 8+ ani, 3 culori',
            ru: '55684 ОЧКИ ДЛЯ ПЛАВАНИЯ «SPORT RELAY» ОТ 8 ЛЕТ, 3 ЦВЕТА',
            en: 'Swimming Goggles «Sport Relay» 8+ years, 3 colors'
        },
        price: 75,
        image: standardizeImagePath('goggles-sport-relay.jpg')
    },
    {
        id: 'sa6',
        category: 'swim-accessories',
        title: {
            ro: 'Ochelari de înot «WATER SPORT», 14+ ani, 3 culori',
            ru: '55685 ОЧКИ ДЛЯ ПЛАВАНИЯ «WATER SPORT», 3 ЦВЕТА, ОТ 14 ЛЕТ',
            en: 'Swimming Goggles «WATER SPORT», 14+ years, 3 colors'
        },
        price: 70,
        image: standardizeImagePath('goggles-water-sport.jpg')
    },
    {
        id: 'sa7',
        category: 'swim-accessories',
        title: {
            ro: 'Ochelari de înot «PRO RACING», 8+ ani, 3 culori',
            ru: '55691 ОЧКИ ДЛЯ ПЛАВАНИЯ «PRO RACING», 3 ЦВЕТА, ОТ 8 ЛЕТ',
            en: 'Swimming Goggles «PRO RACING», 8+ years, 3 colors'
        },
        price: 89,
        image: standardizeImagePath('goggles-pro-racing.jpg')
    },
    {
        id: 'sa8',
        category: 'swim-accessories',
        title: {
            ro: 'Ochelari de înot «PRO MASTER», 14+ ani, 3 culori',
            ru: '55692 ОЧКИ ДЛЯ ПЛАВАНИЯ «PRO MASTER», 3 ЦВЕТА, ОТ 14 ЛЕТ',
            en: 'Swimming Goggles «PRO MASTER», 14+ years, 3 colors'
        },
        price: 155,
        image: standardizeImagePath('goggles-pro-master.jpg')
    },
    {
        id: 'sa9',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de înot SEA SCAN, 8+ ani, 2 tipuri',
            ru: '55916 МАСКА ДЛЯ ПЛАВАНИЯ SEA SCAN SWIM MASKS, 2 ВИДА, ОТ 8 ЛЕТ',
            en: 'SEA SCAN Swim Masks, 8+ years, 2 types'
        },
        price: 109,
        image: standardizeImagePath('mask-sea-scan.jpg')
    },
    {
        id: 'sa10',
        category: 'swim-accessories',
        title: {
            ro: 'Tub de înot «Easy-Flow Sr.» 8+ ani, 2 culori',
            ru: '55929 ТРУБКА ДЛЯ ПЛАВАНИЯ «EASY-FLOW SR.» ОТ 8 ЛЕТ, 2 ЦВЕТА',
            en: 'Snorkel «Easy-Flow Sr.» 8+ years, 2 colors'
        },
        price: 109,
        image: standardizeImagePath('snorkel-easy-flow.jpg')
    },
    {
        id: 'sa11',
        category: 'swim-accessories',
        title: {
            ro: 'Set înot «SURF RIDER», 8+ ani',
            ru: '55949 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ «SURF RIDER SWIM» ОТ 8 ЛЕТ',
            en: 'SURF RIDER Swim Set, 8+ years'
        },
        price: 229,
        oldPrice: 259,
        image: standardizeImagePath('swim-set-surf-rider.jpg')
    },
    {
        id: 'sa12',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de înot REEF RIDER, 14+ ani, 2 tipuri',
            ru: '55977 МАСКА ДЛЯ ПЛАВАНИЯ REEF RIDER MASKS, 2 ВИДА, ОТ 14 ЛЕТ',
            en: 'REEF RIDER Swim Masks, 14+ years, 2 types'
        },
        price: 119,
        image: standardizeImagePath('mask-reef-rider.jpg')
    },
    {
        id: 'sa13',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de înot WAVE RIDER, 8+ ani, 2 tipuri',
            ru: '55978 МАСКА ДЛЯ ПЛАВАНИЯ WAVE RIDER MASKS, ДВА ВИДА, ОТ 8 ЛЕТ',
            en: 'WAVE RIDER Swim Masks, 8+ years, 2 types'
        },
        price: 119,
        image: standardizeImagePath('mask-wave-rider.jpg')
    },
    {
        id: 'sa14',
        category: 'swim-accessories',
        title: {
            ro: 'Bonete de înot Silicon, 8+ ani, 3 culori',
            ru: '55991 ШАПКА ДЛЯ ПЛАВАНИЯ ИЗ СИЛИКОНА, 3 ЦВЕТА, ОТ 8 ЛЕТ',
            en: 'Silicon Swim Cap, 8+ years, 3 colors'
        },
        price: 60,
        image: standardizeImagePath('cap-silicon.jpg')
    },
    {
        id: 'sa15',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 107cm «Fructe Tropicale», 9+ ani, 3 culori',
            ru: '56261 НАДУВНОЙ КРУГ 107СМ «ТРОПИЧЕСКИЕ ФРУКТЫ» ОТ 9 ЛЕТ, 3 ЦВЕТА',
            en: 'Inflatable Ring 107cm «Tropical Fruits», 9+ years, 3 colors'
        },
        price: 120,
        oldPrice: 149,
        image: standardizeImagePath('ring-tropical-fruits.jpg')
    },
    {
        id: 'sa16',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil «GLAZED DONUT» 114cm',
            ru: '56263 НАДУВНОЙ КРУГ «ПОНЧИК ГЛАЗУРЬ» 114СМ',
            en: 'Inflatable Ring «GLAZED DONUT» 114cm'
        },
        price: 139,
        image: standardizeImagePath('ring-donut-glazed.jpg')
    },
    {
        id: 'sa17',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil «DONUT» 107x99cm',
            ru: '56265 НАДУВНОЙ КРУГ «ПОНЧИК» 107X99СМ',
            en: 'Inflatable Ring «DONUT» 107x99cm'
        },
        price: 109,
        image: standardizeImagePath('ring-donut.jpg')
    },
    {
        id: 'sa18',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil Intex «Micuța Stea»',
            ru: '56573 НАДУВНОЙ КРУГ INTEX «МАЛЕНЬКАЯ ЗВЕЗДОЧКА»',
            en: 'Intex Inflatable Ring «Little Star»'
        },
        price: 175,
        image: standardizeImagePath('ring-little-star.jpg')
    },
    {
        id: 'sa19',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare de înot «Happy Kitten»',
            ru: '56665 НАРУКАВНИКИ "СЧАСТЛИВЫЙ КОТЕНОК" INTEX',
            en: 'Swim Armbands «Happy Kitten»'
        },
        price: 35,
        image: standardizeImagePath('armbands-happy-kitten.jpg')
    },
    {
        id: 'sa20',
        category: 'swim-accessories',
        title: {
            ro: 'Jucărie Gonflabilă Călărire 170x86cm «Aligator»',
            ru: '57551 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 170Х86СМ «НАСТОЯЩИЙ АЛЛИГАТОР» ОТ 3 ЛЕТ',
            en: 'Inflatable Ride-On 170x86cm «Alligator» 3+ years'
        },
        price: 189,
        image: standardizeImagePath('floatie-alligator.jpg')
    },
    {
        id: 'sa21',
        category: 'swim-accessories',
        title: {
            ro: 'Plută Gonflabilă «FLAMINGO» 142x137x97cm, 3+ ani',
            ru: '57558 НАДУВНОЙ ПЛОТ «ФЛАМИНГО» 142Х137Х97СМ, ОТ 3 ЛЕТ',
            en: 'Inflatable Raft «FLAMINGO» 142x137x97cm, 3+ years'
        },
        price: 349,
        image: standardizeImagePath('raft-flamingo.jpg')
    },
    {
        id: 'sa22',
        category: 'swim-accessories',
        title: {
            ro: 'Plută Gonflabilă «UNICORN» 201x140x97cm',
            ru: '57561 НАДУВНОЙ ПЛОТИК «ЕДИНОРОГ»201X140X97СМ',
            en: 'Inflatable Raft «UNICORN» 201x140x97cm'
        },
        price: 375,
        image: standardizeImagePath('raft-unicorn.jpg')
    },
    {
        id: 'sa23',
        category: 'swim-accessories',
        title: {
            ro: 'Plută Gonflabilă «LLAMA» 135x94x112cm, 3+ ani',
            ru: '57564 НАДУВНОЙ ПЛОТИК «ЛАМА», 135Х94Х112СМ, ОТ 3 ЛЕТ',
            en: 'Inflatable Raft «LLAMA» 135x94x112cm, 3+ years'
        },
        price: 349,
        image: standardizeImagePath('raft-llama.jpg')
    },
    {
        id: 'sa24',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 97cm «Transparent» cu Mânere, 9+ ani, 3 tipuri',
            ru: '58263 НАДУВНОЙ КРУГ 97СМ «ПРОЗРАЧНЫЙ» С РУЧКАМИ, 3 ВИДА, ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 97cm «Transparent» with Handles, 9+ years, 3 types'
        },
        price: 99,
        oldPrice: 125,
        image: standardizeImagePath('ring-transparent-97.jpg')
    },
    {
        id: 'sa25',
        category: 'swim-accessories',
        title: {
            ro: 'Jucărie Gonflabilă Călărire 168x86cm «Crocodil»',
            ru: '58546 НАДУВНАЯ ИГРУШКА-НАЕЗДНИк 168Х86СМ «КРОКОДИЛ» ОТ 3 ЛЕТ',
            en: 'Inflatable Ride-On 168x86cm «Crocodile» 3+ years'
        },
        price: 165,
        oldPrice: 185,
        image: standardizeImagePath('floatie-crocodile.jpg')
    },
    {
        id: 'sa26',
        category: 'swim-accessories',
        title: {
            ro: 'Jucărie Gonflabilă Călărire 193x119cm «Cosaț»',
            ru: '58561 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 193Х119СМ «КАСАТКА» ОТ 3 ЛЕТ',
            en: 'Inflatable Ride-On 193x119cm «Orca» 3+ years'
        },
        price: 200,
        image: standardizeImagePath('floatie-orca.jpg')
    },
    {
        id: 'sa27',
        category: 'swim-accessories',
        title: {
            ro: 'Jucării Gonflabile Apă, 4 tipuri',
            ru: '58590 НАДУВНЫЕ ВОДНЫЕ ИГРУШКИ, 4 ВИДОВ',
            en: 'Inflatable Water Toys, 4 types'
        },
        price: 35,
        image: standardizeImagePath('water-toys.jpg')
    },
    {
        id: 'sa28',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare «DELUXE» 30x15cm, 6-12 ani',
            ru: '58641 НАРУКАВНИКИ 30Х15СМ «ДЕЛЮКС» ОТ 6 ДО 12 ЛЕТ',
            en: 'Armbands «DELUXE» 30x15cm, 6-12 years'
        },
        price: 35,
        image: standardizeImagePath('armbands-deluxe-lg.jpg')
    },
    {
        id: 'sa29',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare «DELUXE» 23x15cm, 3-6 ani',
            ru: '58642 НАРУКАВНИКИ 23Х15СМ «ДЕЛЮКС» ОТ 3 ДО 6 ЛЕТ',
            en: 'Armbands «DELUXE» 23x15cm, 3-6 years'
        },
        price: 35,
        image: standardizeImagePath('armbands-deluxe-sm.jpg')
    },
    {
        id: 'sa30',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare «UNDERWATER WORLD» 23x15cm, 3-6 ani',
            ru: '58652 НАРУКАВНИКИ 23Х15СМ «ПОДВОДНЫЙ МИР» ОТ 3 ДО 6 ЛЕТ',
            en: 'Armbands «UNDERWATER WORLD» 23x15cm, 3-6 years'
        },
        price: 35,
        image: standardizeImagePath('armbands-underwater.jpg')
    },
    {
        id: 'sa31',
        category: 'swim-accessories',
        title: {
            ro: 'Vestă de înot 50x47cm «DELUXE» 3-6 ani',
            ru: '58671 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ 50Х47СМ «ДЕЛЮКС» ОТ 3 ДО 6 ЛЕТ',
            en: 'Life Vest 50x47cm «DELUXE» 3-6 years'
        },
        price: 75,
        image: standardizeImagePath('vest-deluxe.jpg')
    },
    {
        id: 'sa32',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă Plajă 183x66x20cm «Rainbow Popsicle»',
            ru: '58766 НАДУВНОЙ МАТРАС-ПЛОТ ДЛЯ ПЛАВАНИЯ 183Х66Х20СМ «РАДУЖНОЕ ЭСКИМО»',
            en: 'Inflatable Beach Mat 183x66x20cm «Rainbow Popsicle»'
        },
        price: 200,
        image: standardizeImagePath('mat-rainbow-popsicle.jpg')
    },
    {
        id: 'sa33',
        category: 'swim-accessories',
        title: {
            ro: 'Minge de plajă 51cm, 3+ ani',
            ru: '59020 ПЛЯЖНЫЙ МЯЧ 51СМ, ОТ 3 ЛЕТ',
            en: 'Beach Ball 51cm, 3+ years'
        },
        price: 25,
        image: standardizeImagePath('beach-ball-51.jpg')
    },
    {
        id: 'sa34',
        category: 'swim-accessories',
        title: {
            ro: 'Minge de plajă 51cm, 3 tipuri, 3+ ani',
            ru: '59040 ПЛЯЖНЫЙ МЯЧ 51СМ, 3 ВИДА, ОТ 3 ЛЕТ',
            en: 'Beach Ball 51cm, 3 types, 3+ years'
        },
        price: 35,
        image: standardizeImagePath('beach-ball-51-3types.jpg')
    },
    {
        id: 'sa35',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil «ANIMALS» Detașabil, 3 tipuri, 3-6 ani',
            ru: '59220 НАДУВНОЙ КРУГ «ЖИВОТНЫЕ» РАЗЪЕМНЫЙ, 3 ВИДА, ОТ 3 ДО 6 ЛЕТ',
            en: 'Inflatable Ring «ANIMALS» Detachable, 3 types, 3-6 years'
        },
        price: 45,
        image: standardizeImagePath('ring-animals.jpg')
    },
    {
        id: 'sa36',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 51cm, 3 tipuri, 3-6 ani',
            ru: '59230 НАДУВНОЙ КРУГ 51СМ, 3 ВИДА, ОТ 3 ДО 6 ЛЕТ',
            en: 'Inflatable Ring 51cm, 3 types, 3-6 years'
        },
        price: 29,
        image: standardizeImagePath('ring-51.jpg')
    },
    {
        id: 'sa37',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 61cm, 3 tipuri, 6-10 ani',
            ru: '59241 НАДУВНОЙ КРУГ 61СМ, 3 ВИДА, ОТ 6 ДО 10 ЛЕТ',
            en: 'Inflatable Ring 61cm, 3 types, 6-10 years'
        },
        price: 35,
        image: standardizeImagePath('ring-61.jpg')
    },
    {
        id: 'sa38',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 61cm «TRANSPARENT RING» 3 tipuri, 6-10 ani',
            ru: '59242 НАДУВНОЙ КРУГ 61СМ «ПРОЗРАЧНОЕ КОЛЬЦО» 3 ВИДА, ОТ 6 ДО 10 ЛЕТ',
            en: 'Inflatable Ring 61cm «TRANSPARENT RING» 3 types, 6-10 years'
        },
        price: 35,
        image: standardizeImagePath('ring-61-transparent.jpg')
    },
    {
        id: 'sa39',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 91cm «CLEAR COLOR» 3 culori, 9+ ani',
            ru: '59251 НАДУВНОЙ КРУГ 91СМ «ЯСНЫЙ ЦВЕТ» 3 ЦВЕТА, ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 91cm «CLEAR COLOR» 3 colors, 9+ years'
        },
        price: 65,
        image: standardizeImagePath('ring-91-clear.jpg')
    },
    {
        id: 'sa40',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 91cm «TIRE» 9+ ani',
            ru: '59252 НАДУВНОЙ КРУГ 91СМ «ШИНА» ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 91cm «TIRE» 9+ years'
        },
        price: 65,
        oldPrice: 75,
        image: standardizeImagePath('ring-91-tire.jpg')
    },
    {
        id: 'sa41',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 91cm «BRIGHT STARS» 3 culori, 9+ ani',
            ru: '59256 НАДУВНОЙ КРУГ 91СМ «ЯРКИЕ ЗВЕЗДЫ» 3 ЦВЕТА, ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 91cm «BRIGHT STARS» 3 colors, 9+ years'
        },
        price: 79,
        image: standardizeImagePath('ring-91-stars.jpg')
    },
    {
        id: 'sa42',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 76cm «GLOSSY» cu Mânere, 3 culori, 8+ ani',
            ru: '59258 НАДУВНОЙ КРУГ 76СМ «ГЛЯНЦЕВЫЙ» С РУЧКАМИ, 3 ЦВЕТА, ОТ 8 ЛЕТ',
            en: 'Inflatable Ring 76cm «GLOSSY» with Handles, 3 colors, 8+ years'
        },
        price: 55,
        image: standardizeImagePath('ring-76-glossy.jpg')
    },
    {
        id: 'sa43',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 76cm «TRANSPARENT» 3 culori, 8+ ani',
            ru: '59260 НАДУВНОЙ КРУГ 76СМ «ПРОЗРАЧНЫЙ» 3 ЦВЕТА, ОТ 8 ЛЕТ',
            en: 'Inflatable Ring 76cm «TRANSPARENT» 3 colors, 8+ years'
        },
        price: 39,
        image: standardizeImagePath('ring-76-transparent.jpg')
    },
    {
        id: 'sa44',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 91cm «NEON COLD» 3 culori, 9+ ani',
            ru: '59262 НАДУВНОЙ КРУГ 91СМ «НЕОНОВЫЙ ХОЛОД» 3 ЦВЕТА, ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 91cm «NEON COLD» 3 colors, 9+ years'
        },
        price: 55,
        image: standardizeImagePath('ring-91-neon.jpg')
    },
    {
        id: 'sa45',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil «Cute Animals»',
            ru: '59266 НАДУВНОЙ КРУГ «МИЛЫЕ ЗВЕРЯТА»',
            en: 'Inflatable Ring «Cute Animals»'
        },
        price: 59,
        image: standardizeImagePath('ring-cute-animals.jpg')
    },
    {
        id: 'sa46',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil cu Scaun și Spătar «ANIMALS» 3-4 ani',
            ru: '59570 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ «ЖИВОТНЫЕ» ОТ 3 ДО 4 ЛЕТ',
            en: 'Inflatable Ring with Seat and Backrest «ANIMALS» 3-4 years'
        },
        price: 139,
        image: standardizeImagePath('ring-seat-animals.jpg')
    },
    {
        id: 'sa47',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil cu Scaun și Spătar 67cm «MY BABY FLOAT», până 15kg, 1-2 ani',
            ru: '59574 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ, 67СМ «MY BABY FLOAT» ДО 15КГ, ОТ 1 ДО 2 ЛЕТ',
            en: 'Inflatable Ring with Seat and Backrest 67cm «MY BABY FLOAT» up to 15kg, 1-2 years'
        },
        price: 85,
        image: standardizeImagePath('ring-seat-baby.jpg')
    },
    {
        id: 'sa48',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil cu Scaun și Spătar 3 tipuri, 1-2 ani, până 11kg',
            ru: '59586 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ 3 ВИДА, ОТ 1 ДО 2 ЛЕТ, ДО 11 КГ',
            en: 'Inflatable Ring with Seat and Backrest 3 types, 1-2 years, up to 11kg'
        },
        price: 99,
        image: standardizeImagePath('ring-seat-3types.jpg')
    },
    {
        id: 'sa49',
        category: 'swim-accessories',
        title: {
            ro: 'Vâsle Plastic 122cm, set 2 buc',
            ru: '59623 ВЕСЛА ПЛАСТИКОВЫЕ 122СМ, КОМПЛЕКТ 2ШТ',
            en: 'Plastic Oars 122cm, set of 2'
        },
        price: 179,
        image: standardizeImagePath('oars-plastic-122.jpg')
    },
    {
        id: 'sa50',
        category: 'swim-accessories',
        title: {
            ro: 'Kit Reparații',
            ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ',
            en: 'Repair Kit'
        },
        price: 20,
        image: standardizeImagePath('repair-kit.jpg')
    },
    {
        id: 'sa51',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare 25x17cm, 6-12 ani',
            ru: '59642 НАРУКАВНИКИ 25Х17СМ, ОТ 6 ДО 12 ЛЕТ',
            en: 'Armbands 25x17cm, 6-12 years'
        },
        price: 29,
        image: standardizeImagePath('armbands-25x17.jpg')
    },
    {
        id: 'sa52',
        category: 'swim-accessories',
        title: {
            ro: 'Vestă de înot 41x30cm «TROPICAL FRIENDS» 3-5 ani',
            ru: '59661 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ 41Х30СМ «ТРОПИЧЕСКИЕ ДРУЗЬЯ» ОТ 3 ДО 5 ЛЕТ',
            en: 'Life Vest 41x30cm «TROPICAL FRIENDS» 3-5 years'
        },
        price: 55,
        image: standardizeImagePath('vest-tropical.jpg')
    },
    {
        id: 'sa53',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 183x69cm, 3 culori',
            ru: '59703 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 183Х69СМ, 3 ЦВЕТА',
            en: 'Inflatable Float Mat 183x69cm, 3 colors'
        },
        price: 59,
        image: standardizeImagePath('mat-183x69.jpg')
    },
    {
        id: 'sa54',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 183x69cm, 3 tipuri',
            ru: '59720 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 183Х69СМ, 3 ВИДА',
            en: 'Inflatable Float Mat 183x69cm, 3 types'
        },
        price: 99,
        oldPrice: 105,
        image: standardizeImagePath('mat-183x69-3types.jpg')
    },
    {
        id: 'sa55',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 188x71cm cu Fereastră, 14+ ani, 2 culori',
            ru: '59894 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 188Х71СМ С ОКНОМ, 2 ЦВЕТА, ОТ 14 ЛЕТ',
            en: 'Inflatable Float Mat 188x71cm with Window, 14+ years, 2 colors'
        },
        price: 179,
        image: standardizeImagePath('mat-188x71-window.jpg')
    },
    {
        id: 'sa56',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 188x71cm cu Fereastră, 14+ ani, 2 culori',
            ru: '59895 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 188Х71СМ С ОКНОМ, 2 ЦВЕТА, ОТ 14 ЛЕТ',
            en: 'Inflatable Float Mat 188x71cm with Window, 14+ years, 2 colors'
        },
        price: 179,
        image: standardizeImagePath('mat-188x71-window-alt.jpg')
    },
    {
        id: 'sa57',
        category: 'swim-accessories',
        title: {
            ro: 'Vâsle Aluminiu 137cm, set 2 buc',
            ru: '69625 ВЕСЛА АЛЮМИНИЕВЫЕ 137СМ, КОМПЛЕКТ 2ШТ',
            en: 'Aluminum Oars 137cm, set of 2'
        },
        price: 379,
        image: standardizeImagePath('oars-aluminum-137.jpg')
    },
    {
        id: 'sa58',
        category: 'swim-accessories',
        title: {
            ro: 'Set înot (Bureți și Cleme Nas) 8+ ani',
            ru: 'INTEX 55609 НАБОР ДЛЯ ПЛАВАНИЯ (БЕРУШИ И ЗАЖИМ ДЛЯ НОСА) ОТ 8 ЛЕТ',
            en: 'Swim Set (Earplugs and Nose Clip) 8+ years'
        },
        price: 25,
        image: standardizeImagePath('swim-set-basics.jpg')
    },
    {
        id: 'sa59',
        category: 'swim-accessories',
        title: {
            ro: 'Bonete de înot Silicon, 8+ ani, 3 culori',
            ru: 'INTEX 55992 ШАПКА ДЛЯ ПЛАВАНИЯ ИЗ СИЛИКОНА, ОТ 8 ЛЕТ, 3 ЦВЕТА',
            en: 'Silicon Swim Cap, 8+ years, 3 colors'
        },
        price: 60,
        image: standardizeImagePath('cap-silicon-alt.jpg')
    },
    {
        id: 'sa60',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 94x89x25cm «Donut Heart», până 80kg, 9+ ani',
            ru: 'INTEX 56253 НАДУВНОЙ КРУГ 94Х89Х25СМ «ПОНЧИК СЕРДЕЧКОМ», ДО 80КГ, ОТ 9 ЛЕТ',
            en: 'Inflatable Ring 94x89x25cm «Donut Heart» up to 80kg, 9+ years'
        },
        price: 125,
        image: standardizeImagePath('ring-donut-heart.jpg')
    },
    {
        id: 'sa61',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 107x27cm «TRANSPARENT SHINE»',
            ru: 'INTEX 56274 НАДУВНОЙ КРУГ 107Х27СМ «ПРОЗРАЧНЫЙ БЛЕСК»',
            en: 'Inflatable Ring 107x27cm «TRANSPARENT SHINE»'
        },
        price: 239,
        image: standardizeImagePath('ring-107-transparent-shine.jpg')
    },
    {
        id: 'sa62',
        category: 'swim-accessories',
        title: {
            ro: 'Brațare Gonflabile 23x15cm, 3-6 ani',
            ru: 'INTEX 56669 НАДУВНЫЕ НАРУКАВНИКИ 23×15СМ, 3-6Л',
            en: 'Inflatable Armbands 23x15cm, 3-6 years'
        },
        price: 35,
        image: standardizeImagePath('armbands-23x15.jpg')
    },
    {
        id: 'sa63',
        category: 'swim-accessories',
        title: {
            ro: 'Jucărie Gonflabilă Călărire 152x114cm «Cosaț» până 40kg, 3+ ani',
            ru: 'INTEX 58523 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 152Х114СМ «КАСАТКА» ДО 40КГ, ОТ 3 ЛЕТ',
            en: 'Inflatable Ride-On 152x114cm «Orca» up to 40kg, 3+ years'
        },
        price: 199,
        image: standardizeImagePath('floatie-orca-152.jpg')
    },
    {
        id: 'sa64',
        category: 'swim-accessories',
        title: {
            ro: 'Vestă de înot, 3-6 ani',
            ru: 'INTEX 58660 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ, 3-6 ЛЕТ',
            en: 'Life Vest, 3-6 years'
        },
        price: 79,
        image: standardizeImagePath('vest-intex.jpg')
    },
    {
        id: 'sa65',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 155x135x25cm «Sweet Heart»',
            ru: 'INTEX 58727 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 155Х135Х25СМ «МИЛОЕ СЕРДЦЕ»',
            en: 'Inflatable Float Mat 155x135x25cm «Sweet Heart»'
        },
        price: 339,
        image: standardizeImagePath('mat-sweet-heart.jpg')
    },
    {
        id: 'sa66',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 178x91x23cm «Wind-Up Van»',
            ru: 'INTEX 58728 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 178Х91Х23СМ «ЗАВОДНОЙ ФУРГОН»',
            en: 'Inflatable Float Mat 178x91x23cm «Wind-Up Van»'
        },
        price: 299,
        image: standardizeImagePath('mat-wind-up-van.jpg')
    },
    {
        id: 'sa67',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 175x117x20cm «Rainbow Clouds», până 100kg',
            ru: 'INTEX 58729 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 175Х117Х20СМ «ОБЛАКА НА РАДУГЕ», ДО 100КГ',
            en: 'Inflatable Float Mat 175x117x20cm «Rainbow Clouds» up to 100kg'
        },
        price: 285,
        image: standardizeImagePath('mat-rainbow-clouds.jpg')
    },
    {
        id: 'sa68',
        category: 'swim-accessories',
        title: {
            ro: 'Saltea Gonflabilă de înot 180x130x28cm «Cactus», până 100kg',
            ru: 'INTEX 58793 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 180Х130Х28СМ «КАКТУС», ДО 100КГ',
            en: 'Inflatable Float Mat 180x130x28cm «Cactus» up to 100kg'
        },
        price: 329,
        image: standardizeImagePath('mat-cactus.jpg')
    },
    {
        id: 'sa69',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil «Big Wonder», 3-6 ani, 3 tipuri',
            ru: 'INTEX 59221 НАДУВНОЙ КРУГ «БОЛЬШОЕ ЧУДО», ОТ 3 ДО 6 ЛЕТ, 3 ВИДА',
            en: 'Inflatable Ring «Big Wonder» 3-6 years, 3 types'
        },
        price: 65,
        image: standardizeImagePath('ring-big-wonder.jpg')
    },
    {
        id: 'sa70',
        category: 'swim-accessories',
        title: {
            ro: 'Cerc Gonflabil 81cm «Whimsical Magic» 8+ ani, 3 tipuri',
            ru: 'INTEX 59259 НАДУВНОЙ КРУГ 81СМ «ПРИЧУДЛИВОЕ ВОЛШЕБСТВО» ОТ 8 ЛЕТ, 3 ВИДА',
            en: 'Inflatable Ring 81cm «Whimsical Magic» 8+ years, 3 types'
        },
        price: 55,
        image: standardizeImagePath('ring-81-whimsical.jpg')
    },
    {
        id: 'sa71',
        category: 'swim-accessories',
        title: {
            ro: 'Jucării Gonflabile Apă, 4 tipuri',
            ru: 'INTEX 59590 НАДУВНЫЕ ВОДНЫЕ ИГРУШКИ, 4 ВИДОВ',
            en: 'Inflatable Water Toys, 4 types'
        },
        price: 35,
        image: standardizeImagePath('water-toys-intex.jpg')
    },
    {
        id: 'sa72',
        category: 'swim-accessories',
        title: {
            ro: 'Vestă de înot 41x30cm «Blue Lagoon» 3-5 ani',
            ru: 'INTEX 59663 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ 41Х30СМ «ГОЛУБАЯ ЛАГУНА» 3-5 ЛЕТ',
            en: 'Life Vest 41x30cm «Blue Lagoon» 3-5 years'
        },
        price: 55,
        image: standardizeImagePath('vest-blue-lagoon.jpg')
    },
    {
        id: 'sa73',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de Înot Panoramică Completă L/XL',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.L/XL',
            en: 'Full Face Snorkel Mask L/XL'
        },
        price: 450,
        image: standardizeImagePath('mask-full-face-lxl.jpg')
    },
    {
        id: 'sa74',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de Înot Panoramică Completă S/M',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.S/M',
            en: 'Full Face Snorkel Mask S/M'
        },
        price: 450,
        image: standardizeImagePath('mask-full-face-sm.jpg')
    },
    {
        id: 'sa75',
        category: 'swim-accessories',
        title: {
            ro: 'Mască de Înot Panoramică Completă XS',
            ru: 'ПОЛНОЛИЦЕВАЯ ПАНОРАМНАЯ МАСКА ДЛЯ ПЛАВАНИЯ.XS',
            en: 'Full Face Snorkel Mask XS'
        },
        price: 450,
        image: standardizeImagePath('mask-full-face-xs.jpg')
    },

    // Inflatable-mattresses (Надувные матрасы Intex) - TOATE PRODUSELE ORIGINALE
    {
        id: 'im1',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Kit reparații',
            ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ',
            en: 'Repair Kit'
        },
        price: 20,
        image: standardizeImagePath('repair-kit.jpg')
    },
    {
        id: 'im2',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea gonflabilă DELUXE SINGLE-HIGH 137x191x25cm',
            ru: '64102 НАДУВНОЙ МАТРАС DELUXE SINGLE-HIGH 137Х191Х25СМ',
            en: 'Inflatable Mattress DELUXE SINGLE-HIGH 137x191x25cm'
        },
        price: 449,
        oldPrice: 499,
        image: standardizeImagePath('mattress-deluxe-137.jpg')
    },
    {
        id: 'im3',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea gonflabilă DELUXE SINGLE-HIGH 152x203x25cm',
            ru: '64103 НАДУВНОЙ МАТРАС DELUXE SINGLE-HIGH 152Х203Х25СМ',
            en: 'Inflatable Mattress DELUXE SINGLE-HIGH 152x203x25cm'
        },
        price: 499,
        oldPrice: 599,
        image: standardizeImagePath('mattress-deluxe-152.jpg')
    },
    {
        id: 'im4',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea gonflabilă 99x191x25cm «Prestige» până 136kg',
            ru: '64107 НАДУВНОЙ МАТРАС 99Х191Х25СМ «PRESTIGE» ДО 136КГ',
            en: 'Inflatable Mattress 99x191x25cm «Prestige» up to 136kg'
        },
        price: 349,
        oldPrice: 399,
        image: standardizeImagePath('mattress-prestige-99.jpg')
    },
    {
        id: 'im5',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil 99x191x30cm cu Pernă, Pompă Încorporată 220V',
            ru: '64116 НАДУВНАЯ КРОВАТЬ 99Х191Х30СМ С ПОДГОЛОВНИКОМ, ВСТР.НАСОС 220В',
            en: 'Inflatable Bed 99x191x30cm with Pillow, Built-in Pump 220V'
        },
        price: 849,
        image: standardizeImagePath('bed-pillow-99.jpg')
    },
    {
        id: 'im6',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil Dublu 152x203x30cm cu Pompă Încorporată 220V',
            ru: '64118 ДВУХСПАЛЬНАЯ НАДУВНАЯ КРОВАТЬ 152Х203Х30СМ СО ВСТРОЕННЫМ НАСОСОМ 220V',
            en: 'Double Inflatable Bed 152x203x30cm with Built-in Pump 220V'
        },
        price: 1099,
        image: standardizeImagePath('bed-double-152.jpg')
    },
    {
        id: 'im7',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil PILLOW REST RAISED BED 99x191x42cm cu Pernă, Pompă 220V',
            ru: '64122 НАДУВНАЯ КРОВАТЬ PILLOW REST RAISED BED 99Х191Х42СМ С ПОДГОЛОВНИКОМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed PILLOW REST RAISED 99x191x42cm with Pillow, Pump 220V'
        },
        price: 899,
        oldPrice: 1099,
        image: standardizeImagePath('bed-pillow-rest-99.jpg')
    },
    {
        id: 'im8',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil PILLOW REST RAISED BED 152x203x42cm cu Pernă, Pompă 220V',
            ru: '64124 НАДУВНАЯ КРОВАТЬ PILLOW REST RAISED BED 152Х203Х42СМ С ПОДГОЛОВНИКОМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed PILLOW REST RAISED 152x203x42cm with Pillow, Pump 220V'
        },
        price: 1199,
        oldPrice: 1399,
        image: standardizeImagePath('bed-pillow-rest-152.jpg')
    },
    {
        id: 'im9',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil DELUXE PILLOW REST RAISED BED 99x191x42cm, Pompă 220V',
            ru: '64132 НАДУВНАЯ КРОВАТЬ DELUXE PILLOW REST RAISED BED 99Х191Х42СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed DELUXE PILLOW REST RAISED 99x191x42cm, Pump 220V'
        },
        price: 1099,
        image: standardizeImagePath('bed-deluxe-pillow-rest-99.jpg')
    },
    {
        id: 'im10',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil DELUXE PILLOW REST RAISED BED 152x203x42cm, Pompă 220V',
            ru: '64136 НАДУВНАЯ КРОВАТЬ DELUXE PILLOW REST RAISED BED 152Х203Х42СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed DELUXE PILLOW REST RAISED 152x203x42cm, Pump 220V'
        },
        price: 1299,
        image: standardizeImagePath('bed-deluxe-pillow-rest-152.jpg')
    },
    {
        id: 'im11',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă cu Pernă PILLOW REST CLASSIC BED FIBER-TECH 137x191x25cm',
            ru: '64142 НАДУВНОЙ МАТРАС С ПОДГОЛОВНИКОМ PILLOW REST CLASSIC BED FIBER-TECH, 137Х191Х25СМ',
            en: 'Inflatable Mattress with Pillow PILLOW REST CLASSIC BED FIBER-TECH 137x191x25cm'
        },
        price: 549,
        image: standardizeImagePath('mattress-pillow-rest-classic-137.jpg')
    },
    {
        id: 'im12',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă PILLOW REST CLASSIC FIBER-TECH 152x203x25cm',
            ru: '64143 МАТРАС НАДУВНОЙ PILLOW REST CLASSIC FIBER-TECH, 152 Х 203 Х 25 СМ',
            en: 'Inflatable Mattress PILLOW REST CLASSIC FIBER-TECH 152x203x25cm'
        },
        price: 639,
        oldPrice: 725,
        image: standardizeImagePath('mattress-pillow-rest-classic-152.jpg')
    },
    {
        id: 'im13',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă cu Pernă PILLOW REST CLASSIC BED FIBER-TECH 183x203x25cm',
            ru: '64144 НАДУВНОЙ МАТРАС С ПОДГОЛОВНИКОМ PILLOW REST CLASSIC BED FIBER-TECH, 183Х203Х25СМ',
            en: 'Inflatable Mattress with Pillow PILLOW REST CLASSIC BED FIBER-TECH 183x203x25cm'
        },
        price: 699,
        oldPrice: 849,
        image: standardizeImagePath('mattress-pillow-rest-classic-183.jpg')
    },
    {
        id: 'im14',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil (Saltea) Intex 152x203x30cm',
            ru: '64179 НАДУВНОЙ МАТРАС (КРОВАТЬ) INTEX 152Х203Х30 СМ',
            en: 'Inflatable Bed (Mattress) Intex 152x203x30cm'
        },
        price: 859,
        image: standardizeImagePath('bed-intex-152-30.jpg')
    },
    {
        id: 'im15',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil COMFORT-PLUSH 99x191x46cm, Pompă 220V',
            ru: '64412 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 99Х191Х46СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed COMFORT-PLUSH 99x191x46cm, Pump 220V'
        },
        price: 1149,
        oldPrice: 1450,
        image: standardizeImagePath('bed-comfort-plush-99.jpg')
    },
    {
        id: 'im16',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil COMFORT-PLUSH 152x203x46cm, Pompă 220V',
            ru: '64414 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 152Х203Х46СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed COMFORT-PLUSH 152x203x46cm, Pump 220V'
        },
        price: 1599,
        image: standardizeImagePath('bed-comfort-plush-152.jpg')
    },
    {
        id: 'im17',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil COMFORT-PLUSH 152x203x56cm, Pompă 220V',
            ru: '64418 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 152Х203Х56СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed COMFORT-PLUSH 152x203x56cm, Pump 220V'
        },
        price: 1799,
        oldPrice: 1999,
        image: standardizeImagePath('bed-comfort-plush-56.jpg')
    },
    {
        id: 'im18',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil Intex Ultra Plush Bed (Twin) 99x191x46cm, Pompă 220V',
            ru: '64426 НАДУВНАЯ КРОВАТЬ INTEX ULTRA PLUSH BED (TWIN), 99Х191Х46 СМ, СО ВСТРОЕННЫМ НАСОСОМ 220V',
            en: 'Inflatable Bed Intex Ultra Plush (Twin) 99x191x46cm, Pump 220V'
        },
        price: 1299,
        image: standardizeImagePath('bed-ultra-plush-twin.jpg')
    },
    {
        id: 'im19',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil ULTRA PLUSH BED 152x203x46cm, Pompă 220V',
            ru: '64428 НАДУВНАЯ КРОВАТЬ ULTRA PLUSH BED 152Х203Х46СМ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed ULTRA PLUSH 152x203x46cm, Pump 220V'
        },
        price: 1599,
        image: standardizeImagePath('bed-ultra-plush-152.jpg')
    },
    {
        id: 'im20',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pat Gonflabil HEADBOARD AIRBED 152x236x86cm cu Spătar, Pompă 220V',
            ru: '64448 НАДУВНАЯ КРОВАТЬ HEADBOARD AIRBED 152Х236Х86СМ СО СПИНКОЙ, ВСТРОЕННЫЙ НАСОС 220V',
            en: 'Inflatable Bed HEADBOARD AIRBED 152x236x86cm with Backrest, Pump 220V'
        },
        price: 2199,
        oldPrice: 2499,
        image: standardizeImagePath('bed-headboard-airbed.jpg')
    },
    {
        id: 'im21',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 183x203x25cm',
            ru: '64755 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 183Х203Х25СМ',
            en: 'Inflatable Mattress CLASSIC DOWNY BED 183x203x25cm'
        },
        price: 549,
        oldPrice: 675,
        image: standardizeImagePath('mattress-classic-downy-183.jpg')
    },
    {
        id: 'im22',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 99x191x25cm',
            ru: '64757 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 99Х191Х25СМ',
            en: 'Inflatable Mattress CLASSIC DOWNY BED 99x191x25cm'
        },
        price: 349,
        oldPrice: 399,
        image: standardizeImagePath('mattress-classic-downy-99.jpg')
    },
    {
        id: 'im23',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 137x191x25cm',
            ru: '64758 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 137Х191Х25СМ',
            en: 'Inflatable Mattress CLASSIC DOWNY BED 137x191x25cm'
        },
        price: 419,
        oldPrice: 499,
        image: standardizeImagePath('mattress-classic-downy-137.jpg')
    },
    {
        id: 'im24',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 152x203x25cm',
            ru: '64759 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 152Х203Х25СМ',
            en: 'Inflatable Mattress CLASSIC DOWNY BED 152x203x25cm'
        },
        price: 499,
        oldPrice: 575,
        image: standardizeImagePath('mattress-classic-downy-152.jpg')
    },
    {
        id: 'im25',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă DOWNY BED 99x191x25cm cu Pompă Picior Încorporată',
            ru: '64761 НАДУВНОЙ МАТРАС DOWNY BED, 99Х191Х25СМ, СО ВСТРОЕННЫМ НОЖНЫМ НАСОСОМ',
            en: 'Inflatable Mattress DOWNY BED 99x191x25cm with Built-in Foot Pump'
        },
        price: 499,
        oldPrice: 549,
        image: standardizeImagePath('mattress-downy-foot-pump-99.jpg')
    },
    {
        id: 'im26',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă DOWNY BED 152x203x22cm cu Pompă Picior Încorporată',
            ru: '64763 НАДУВНОЙ МАТРАС DOWNY BED, 152Х203Х22СМ, СО ВСТРОЕННЫМ НОЖНЫМ НАСОСОМ',
            en: 'Inflatable Mattress DOWNY BED 152x203x22cm with Built-in Foot Pump'
        },
        price: 649,
        image: standardizeImagePath('mattress-downy-foot-pump-152.jpg')
    },
    {
        id: 'im27',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 152x203x25cm cu Perne și Pompă',
            ru: '64765 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 152Х203Х25СМ С ПОДУШКАМИ И НАСОСОМ',
            en: 'Inflatable Mattress CLASSIC DOWNY BED 152x203x25cm with Pillows and Pump'
        },
        price: 599,
        oldPrice: 699,
        image: standardizeImagePath('mattress-classic-downy-pillows.jpg')
    },
    {
        id: 'im28',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă CAMPING MAT 72x189x20cm',
            ru: '67998 НАДУВНОЙ МАТРАС CAMPING MAT 72Х189Х20СМ',
            en: 'Inflatable Mattress CAMPING MAT 72x189x20cm'
        },
        price: 400,
        image: standardizeImagePath('mattress-camping-72.jpg')
    },
    {
        id: 'im29',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Saltea Gonflabilă 127x193x24cm «Camping» până 272kg',
            ru: '67999 НАДУВНОЙ МАТРАС 127Х193Х24СМ «CAMPING» ДО 272КГ',
            en: 'Inflatable Mattress 127x193x24cm «Camping» up to 272kg'
        },
        price: 650,
        image: standardizeImagePath('mattress-camping-127.jpg')
    },
    {
        id: 'im30',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pernă Gonflabilă 43x28x9cm',
            ru: '68672 НАДУВНАЯ ПОДУШКА 43Х28Х9СМ',
            en: 'Inflatable Pillow 43x28x9cm'
        },
        price: 50,
        image: standardizeImagePath('pillow-inflatable-43.jpg')
    },
    {
        id: 'im31',
        category: 'inflatable-mattresses',
        title: {
            ro: 'Pernă Gonflabilă pentru Gât 36x30x10cm',
            ru: '68675 НАДУВНАЯ ПОДУШКА ДЛЯ ШЕИ 36Х30Х10СМ',
            en: 'Inflatable Neck Pillow 36x30x10cm'
        },
        price: 50,
        image: standardizeImagePath('pillow-neck-36.jpg')
    },

    // Pumps (Насосы) - TOATE PRODUSELE ORIGINALE
    {
        id: 'pump1',
        category: 'pumps',
        title: {
            ro: 'Pompă Electrică QUICK-FILL 12V/220V cu Adaptor și 3 Dispozitive',
            ru: '66634 INTEX НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В/220В АДАПТЕР, 3 НАСАДКИ В КОМПЛЕКТЕ',
            en: 'Electric Pump QUICK-FILL 12V/220V with Adapter and 3 Nozzles'
        },
        price: 379,
        image: standardizeImagePath('pump-quick-fill-adapter.jpg')
    },
    {
        id: 'pump2',
        category: 'pumps',
        title: {
            ro: 'Pompă Electrică QUICK-FILL 12V din Priză Auto',
            ru: '66636 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В ОТ ПРИКУРИВАТЕЛЯ, 3 НАСАДКИ В КОМПЛЕКТЕ',
            en: 'Electric Pump QUICK-FILL 12V Car Lighter with 3 Nozzles'
        },
        price: 279,
        image: standardizeImagePath('pump-quick-fill-12v.jpg')
    },
    {
        id: 'pump3',
        category: 'pumps',
        title: {
            ro: 'Pompă Electrică QUICK-FILL 220V de la Rețea',
            ru: '66640 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 220В ОТ БЫТОВОЙ СЕТИ, 3 НАСАДКИ В КОМПЛЕКТЕ',
            en: 'Electric Pump QUICK-FILL 220V AC with 3 Nozzles'
        },
        price: 259,
        image: standardizeImagePath('pump-quick-fill-220v.jpg')
    },
    {
        id: 'pump4',
        category: 'pumps',
        title: {
            ro: 'Pompă Electrică QUICK-FILL 12V/220V cu Baterie Acumulator',
            ru: '66642 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В/220В, С АККУМУЛЯТОРОМ, 3 НАСАДКИ В КОМПЛЕКТЕ',
            en: 'Electric Pump QUICK-FILL 12V/220V with Battery and 3 Nozzles'
        },
        price: 699,
        image: standardizeImagePath('pump-quick-fill-battery.jpg')
    },
    {
        id: 'pump5',
        category: 'pumps',
        title: {
            ro: 'Pompă Electrică QUICK-FILL 220V cu 3 Dispozitive și Furtun',
            ru: '66644 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 220В ОТ БЫТОВОЙ СЕТИ, 3 НАСАДКИ СО ШЛАНГОМ В КОМПЛЕКТЕ',
            en: 'Electric Pump QUICK-FILL 220V AC with 3 Nozzles and Hose'
        },
        price: 419,
        oldPrice: 449,
        image: standardizeImagePath('pump-quick-fill-hose.jpg')
    },
    {
        id: 'pump6',
        category: 'pumps',
        title: {
            ro: 'Pompă Manuală DOUBLE QUICK III S 37cm',
            ru: '68605 НАСОС РУЧНОЙ DOUBLE QUICK III S, 37СМ',
            en: 'Manual Pump DOUBLE QUICK III S 37cm'
        },
        price: 189,
        image: standardizeImagePath('pump-double-quick-iii-s.jpg')
    },
    {
        id: 'pump7',
        category: 'pumps',
        title: {
            ro: 'Pompă Manuală DOUBLE QUICK I 29cm',
            ru: '68612 НАСОС РУЧНОЙ DOUBLE QUICK I, 29СМ',
            en: 'Manual Pump DOUBLE QUICK I 29cm'
        },
        price: 100,
        image: standardizeImagePath('pump-double-quick-i.jpg')
    },
    {
        id: 'pump8',
        category: 'pumps',
        title: {
            ro: 'Pompă Manuală DOUBLE QUICK III 48cm',
            ru: '68615 НАСОС РУЧНОЙ DOUBLE QUICK III, 48СМ',
            en: 'Manual Pump DOUBLE QUICK III 48cm'
        },
        price: 229,
        oldPrice: 259,
        image: standardizeImagePath('pump-double-quick-iii.jpg')
    },
    {
        id: 'pump9',
        category: 'pumps',
        title: {
            ro: 'Pompă cu Picior 3L 28cm',
            ru: '69611 НАСОС НОЖНОЙ 3Л, 28СМ',
            en: 'Foot Pump 3L 28cm'
        },
        price: 149,
        oldPrice: 160,
        image: standardizeImagePath('pump-foot-3l.jpg')
    },
    {
        id: 'pump10',
        category: 'pumps',
        title: {
            ro: 'Pompă Manuală DOUBLE QUICK MINI 29cm',
            ru: '69613 НАСОС РУЧНОЙ DOUBLE QUICK MINI, 29СМ',
            en: 'Manual Pump DOUBLE QUICK MINI 29cm'
        },
        price: 39,
        image: standardizeImagePath('pump-double-quick-mini.jpg')
    }
];

// Utility functions for multilingual support with improved fallback
const LanguageUtils = {
    currentLanguage: 'ro',

    setLanguage: function (lang) {
        if (['ro', 'ru', 'en'].includes(lang)) {
            this.currentLanguage = lang;
        }
    },

    getText: function (textObject) {
        // Fallback chain: current language -> Romanian -> English -> first available -> empty string
        if (!textObject) return '';

        if (textObject[this.currentLanguage]) {
            return textObject[this.currentLanguage];
        }
        if (textObject['ro']) {
            return textObject['ro'];
        }
        if (textObject['en']) {
            return textObject['en'];
        }
        // Return first available value if none of the above exist
        const firstKey = Object.keys(textObject)[0];
        return firstKey ? textObject[firstKey] : '';
    },

    getCategoryTitle: function (categoryId) {
        const category = CATEGORIES_DATA.find(cat => cat.id === categoryId);
        return category ? this.getText(category.i18n_title) : '';
    },

    getCategoryDescription: function (categoryId) {
        const category = CATEGORIES_DATA.find(cat => cat.id === categoryId);
        return category ? this.getText(category.i18n_desc) : '';
    },

    getSubcategoryTitle: function (categoryId, subcategoryId) {
        const categorySubs = SUBCATEGORIES_DATA[categoryId];
        if (categorySubs) {
            const subcategory = categorySubs.find(sub => sub.id === subcategoryId);
            return subcategory ? this.getText(subcategory.title) : '';
        }
        return '';
    },

    getProductTitle: function (product) {
        return this.getText(product.title);
    },

    getAllProductsByCategory: function (categoryId) {
        const allProducts = [...PRODUCTS_DATA];
        
        // Add POOLS_PRODUCTS if the category is 'pools'
        if (categoryId === 'pools' && POOLS_PRODUCTS.pools) {
            POOLS_PRODUCTS.pools.forEach(poolProduct => {
                allProducts.push({
                    id: poolProduct.id,
                    category: 'pools',
                    subcategory: poolProduct.sub,
                    title: poolProduct.title,
                    price: poolProduct.price,
                    oldPrice: poolProduct.oldPrice,
                    image: poolProduct.image
                });
            });
        }
        
        return allProducts.filter(product => product.category === categoryId);
    },

    getProductsBySubcategory: function (categoryId, subcategoryId) {
        const allProducts = [...PRODUCTS_DATA];
        
        // Add POOLS_PRODUCTS if the category is 'pools'
        if (categoryId === 'pools' && POOLS_PRODUCTS.pools) {
            POOLS_PRODUCTS.pools.forEach(poolProduct => {
                allProducts.push({
                    id: poolProduct.id,
                    category: 'pools',
                    subcategory: poolProduct.sub,
                    title: poolProduct.title,
                    price: poolProduct.price,
                    oldPrice: poolProduct.oldPrice,
                    image: poolProduct.image
                });
            });
        }
        
        return allProducts.filter(product =>
            product.category === categoryId && product.subcategory === subcategoryId
        );
    },

    // New function to get POOLS_PRODUCTS with proper structure
    getPoolsProductsBySubcategory: function (subcategoryId) {
        if (!POOLS_PRODUCTS.pools) return [];
        return POOLS_PRODUCTS.pools.filter(product => product.sub === subcategoryId);
    },

    // Get all products including both PRODUCTS_DATA and POOLS_PRODUCTS
    getAllProducts: function () {
        const allProducts = [...PRODUCTS_DATA];

        // Add POOLS_PRODUCTS to the main array with proper structure
        if (POOLS_PRODUCTS.pools) {
            POOLS_PRODUCTS.pools.forEach(poolProduct => {
                allProducts.push({
                    id: poolProduct.id,
                    category: 'pools',
                    subcategory: poolProduct.sub,
                    title: poolProduct.title,
                    price: poolProduct.price,
                    oldPrice: poolProduct.oldPrice,
                    image: poolProduct.image
                });
            });
        }

        return allProducts;
    }
};

// Data validation function
function validateData() {
    const issues = [];

    // Check for duplicate IDs in PRODUCTS_DATA
    const allIds = PRODUCTS_DATA.map(p => p.id);
    const duplicateIds = allIds.filter((id, index) => allIds.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
        issues.push(`Duplicate product IDs found in PRODUCTS_DATA: ${duplicateIds.join(', ')}`);
    }

    // Check for duplicate IDs in POOLS_PRODUCTS
    if (POOLS_PRODUCTS.pools) {
        const poolIds = POOLS_PRODUCTS.pools.map(p => p.id);
        const duplicatePoolIds = poolIds.filter((id, index) => poolIds.indexOf(id) !== index);
        if (duplicatePoolIds.length > 0) {
            issues.push(`Duplicate product IDs found in POOLS_PRODUCTS: ${duplicatePoolIds.join(', ')}`);
        }
    }

    // Check for missing images
    PRODUCTS_DATA.forEach(product => {
        if (!product.image) {
            issues.push(`Product ${product.id} is missing image`);
        }
    });

    // Check POOLS_PRODUCTS for images
    if (POOLS_PRODUCTS.pools) {
        POOLS_PRODUCTS.pools.forEach((product, index) => {
            if (!product.image) {
                issues.push(`POOLS_PRODUCTS item ${index} (ID: ${product.id}) is missing image`);
            }
        });
    }

    // Check for missing prices or invalid prices
    PRODUCTS_DATA.forEach(product => {
        if (typeof product.price !== 'number' || product.price <= 0) {
            issues.push(`Product ${product.id} has invalid price: ${product.price}`);
        }
        if (product.oldPrice && (typeof product.oldPrice !== 'number' || product.oldPrice <= product.price)) {
            issues.push(`Product ${product.id} has invalid oldPrice: ${product.oldPrice}`);
        }
        
        // Check for missing translations
        if (!product.title.ro || !product.title.ru || !product.title.en) {
            issues.push(`Product ${product.id} missing some translations`);
        }
    });

    // Check POOLS_PRODUCTS prices
    if (POOLS_PRODUCTS.pools) {
        POOLS_PRODUCTS.pools.forEach((product, index) => {
            if (typeof product.price !== 'number' || product.price <= 0) {
                issues.push(`POOLS_PRODUCTS item ${index} (ID: ${product.id}) has invalid price: ${product.price}`);
            }
            if (product.oldPrice && (typeof product.oldPrice !== 'number' || product.oldPrice <= product.price)) {
                issues.push(`POOLS_PRODUCTS item ${index} (ID: ${product.id}) has invalid oldPrice: ${product.oldPrice}`);
            }
            
            // Check for missing translations
            if (!product.title.ro || !product.title.ru || !product.title.en) {
                issues.push(`POOLS_PRODUCTS item ${index} (ID: ${product.id}) missing some translations`);
            }
        });
    }

    // Check for valid categories and subcategories
    PRODUCTS_DATA.forEach(product => {
        const categoryExists = CATEGORIES_DATA.some(cat => cat.id === product.category);
        if (!categoryExists) {
            issues.push(`Product ${product.id} references non-existent category: ${product.category}`);
        }
        
        if (product.subcategory) {
            const categorySubs = SUBCATEGORIES_DATA[product.category];
            if (!categorySubs || !categorySubs.some(sub => sub.id === product.subcategory)) {
                issues.push(`Product ${product.id} references non-existent subcategory: ${product.subcategory} for category ${product.category}`);
            }
        }
    });

    // Check POOLS_PRODUCTS categories and subcategories
    if (POOLS_PRODUCTS.pools) {
        POOLS_PRODUCTS.pools.forEach((product, index) => {
            if (product.subcategory) {
                const categorySubs = SUBCATEGORIES_DATA['baseine_intex'];
                if (!categorySubs || !categorySubs.some(sub => sub.id === product.subcategory)) {
                    issues.push(`POOLS_PRODUCTS item ${index} (ID: ${product.id}) references non-existent subcategory: ${product.subcategory} for category baseine_intex`);
                }
            }
        });
    }

    return issues;
}

const ALL_PRODUCTS = [...PRODUCTS_DATA, ...(POOLS_PRODUCTS.pools || [])];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CATEGORIES_DATA,
        SUBCATEGORIES_DATA,
        POOLS_PRODUCTS,
        PRODUCTS_DATA,
        ALL_PRODUCTS,
        LanguageUtils,
        validateData,
        standardizeImagePath
    };
}