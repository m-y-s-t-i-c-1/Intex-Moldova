// Complete product descriptions for ALL products
const PRODUCT_DESCRIPTIONS = {
    // ==============================================
    // BĂRCI (CATEGORIA boats) - 12 products
    // ==============================================
    'b1': {
        ro: 'Set complet barcă gonflabilă Explorer 200 pentru 2 persoane, perfectă pentru pescuit și plimbări pe ape calme. Include vâsle și pompă manuală.',
        ru: 'Полный комплект надувной лодки Explorer 200 для 2 человек, идеально для рыбалки и прогулок по спокойной воде. Включает весла и ручной насос.',
        en: 'Complete inflatable boat Explorer 200 set for 2 people, perfect for fishing and calm water trips. Includes oars and manual pump.'
    },
    'b2': {
        ro: 'Set complet barcă gonflabilă Explorer 300 pentru 3 persoane, cu stabilitate ridicată și accesorii incluse. Perfectă pentru excursii familiale.',
        ru: 'Полный комплект надувной лодки Explorer 300 для 3 человек, с высокой устойчивостью и аксессуарами в комплекте. Идеально для семейных походов.',
        en: 'Complete inflatable boat Explorer 300 set for 3 people, with high stability and included accessories. Perfect for family trips.'
    },
    'b3': {
        ro: 'Set de 2 vâsle din plastic de 122cm, rezistente și ușoare, pentru bărci gonflabile. Design ergonomic pentru manevrare ușoară.',
        ru: 'Комплект из 2 пластиковых весел длиной 122см, прочных и легких, для надувных лодок. Эргономичный дизайн для легкого управления.',
        en: 'Set of 2 plastic oars 122cm long, durable and lightweight, for inflatable boats. Ergonomic design for easy handling.'
    },
    'b4': {
        ro: 'Kit de reparații universal pentru produse gonflabile, include plasturi și lipici de înaltă calitate pentru reparații durabile.',
        ru: 'Универсальный ремонтный комплект для надувных изделий, включает заплатки и высококачественный клей для долговечного ремонта.',
        en: 'Universal repair kit for inflatable products, includes patches and high-quality glue for durable repairs.'
    },
    'b5': {
        ro: 'Barcă gonflabilă Excursion 4 pentru 4 persoane, cu podea rigidă și stabilitate excelentă. Ideală pentru aventuri acvatice.',
        ru: 'Надувная лодка Excursion 4 для 4 человек, с жестким дном и отличной устойчивостью. Идеально для водных приключений.',
        en: 'Inflatable boat Excursion 4 for 4 people, with rigid floor and excellent stability. Ideal for water adventures.'
    },
    'b6': {
        ro: 'Set complet barcă gonflabilă Seahawk 2 pentru 2 persoane, ușor de transportat și rapid de asamblat. Perfectă pentru începători.',
        ru: 'Полный комплект надувной лодки Seahawk 2 для 2 человек, легко транспортировать и быстро собирать. Идеально для начинающих.',
        en: 'Complete inflatable boat Seahawk 2 set for 2 people, easy to transport and quick to assemble. Perfect for beginners.'
    },
    'b7': {
        ro: 'Set barcă SeaHawk 400 cu motor, pentru 4 persoane, performanțe înalte și construcție robustă. Inclus motor și accesorii.',
        ru: 'Комплект лодки SeaHawk 400 с мотором, для 4 человек, высокие характеристики и прочная конструкция. Включает мотор и аксессуары.',
        en: 'SeaHawk 400 boat set with motor, for 4 people, high performance and robust construction. Includes motor and accessories.'
    },
    'b8': {
        ro: 'Barcă gonflabilă Challenger 2, ușoară și compactă, ideală pentru începători și activități recreative pe ape liniștite.',
        ru: 'Надувная лодка Challenger 2, легкая и компактная, идеально для начинающих и рекреационных мероприятий на спокойной воде.',
        en: 'Inflatable boat Challenger 2, lightweight and compact, ideal for beginners and recreational activities on calm water.'
    },
    'b9': {
        ro: 'Set complet barcă gonflabilă Challenger 3 pentru 3 persoane, cu accesorii complete și stabilitate sporită. Perfectă pentru familie mică.',
        ru: 'Полный комплект надувной лодки Challenger 3 для 3 человек, с полными аксессуарами и повышенной устойчивостью. Идеально для маленькой семьи.',
        en: 'Complete inflatable boat Challenger 3 set for 3 people, with full accessories and enhanced stability. Perfect for small family.'
    },
    'b10': {
        ro: 'Set complet barcă gonflabilă Seahawk 3 pentru 3 persoane, robustă și durabilă pentru ape puțintel agitate. Construcție rezistentă.',
        ru: 'Полный комплект надувной лодки Seahawk 3 для 3 человек, прочная и долговечная для слегка бурной воды. Прочная конструкция.',
        en: 'Complete inflatable boat Seahawk 3 set for 3 people, robust and durable for slightly rough water. Durable construction.'
    },
    'b11': {
        ro: 'Set de 2 vâsle din aluminiu de 137cm, ușoare și rezistente la coroziune, pentru bărci de dimensiuni mijlocii. Mânere confortabile.',
        ru: 'Комплект из 2 алюминиевых весел длиной 137см, легких и коррозионностойких, для лодок средних размеров. Удобные рукоятки.',
        en: 'Set of 2 aluminum oars 137cm long, lightweight and corrosion-resistant, for medium-sized boats. Comfortable handles.'
    },
    'b12': {
        ro: 'Placă SUP gonflabilă Intex pentru stand-up paddleboarding, stabilă și ușor de transportat în ghiozdan special. Perfectă pentru fitness acvatic.',
        ru: 'Надувная доска SUP Intex для стойкого гребления, устойчивая и легко транспортируется в специальном рюкзаке. Идеально для водного фитнеса.',
        en: 'Intex inflatable SUP board for stand-up paddleboarding, stable and easy to transport in special backpack. Perfect for water fitness.'
    },

    // ==============================================
    // TERENURI DE JOACĂ (CATEGORIA joaca) - 5 products
    // ==============================================
    'j1': {
        ro: 'Tobogan Intex pentru copii cu platformă sigură, rampă curbă și dimensiuni generoase pentru distracție maximă. Pentru vârste 3-8 ani.',
        ru: 'Детская горка Intex с безопасной платформой, изогнутым спуском и большими размерами для максимального веселья. Для возрастов 3-8 лет.',
        en: 'Intex children slide with safe platform, curved ramp and generous dimensions for maximum fun. For ages 3-8 years.'
    },
    'j2': {
        ro: 'Leagăn tip "cuib" Intex pentru mai mulți copii, cu scaun din plasă rezistentă și sistem sigur de atașare. Capacitate până la 100kg.',
        ru: 'Качели-гнездо Intex для нескольких детей, с сиденьем из прочной сетки и безопасной системой крепления. Грузоподъемность до 100кг.',
        en: 'Intex nest swing for multiple children, with durable mesh seat and safe attachment system. Capacity up to 100kg.'
    },
    'j3': {
        ro: 'Leagăn Intex cu scaun schimbabil, se adaptează la vârsta copilului, ideal pentru dezvoltarea echilibrului. Pentru copii 2-6 ani.',
        ru: 'Качели Intex со сменным сиденьем, адаптируется к возрасту ребенка, идеально для развития равновесия. Для детей 2-6 лет.',
        en: 'Intex swing with exchangeable seat, adapts to child\'s age, ideal for balance development. For children 2-6 years.'
    },
    'j4': {
        ro: 'Leagăn combinat Intex cu scaun și balansoar, oferă varietate în joacă pentru mai mulți copii simultan. Perfect pentru grădină.',
        ru: 'Комбинированные качели Intex с сиденьем и креслом-качалкой, обеспечивает разнообразие в игре для нескольких детей одновременно. Идеально для сада.',
        en: 'Intex combined swing with seat and glider, provides play variety for multiple children simultaneously. Perfect for garden.'
    },
    'j5': {
        ro: 'Leagăn simplu Intex, ușor de instalat și reglat, perfect pentru grădini particulare și spații de joacă. Construcție durabilă.',
        ru: 'Простые качели Intex, легко устанавливаются и регулируются, идеально для частных садов и игровых площадок. Долговечная конструкция.',
        en: 'Simple Intex swing, easy to install and adjust, perfect for private gardens and play areas. Durable construction.'
    },

    // ==============================================
    // TRANSPORT COPII (CATEGORIA transport) - 68 products + 8 rollerblades
    // ==============================================
    't1': {
        ro: 'Tricicletă pentru copii cu cadru robust, pedale ușoare și sistem sigur pentru primele începuturi în ciclism. Pentru vârste 2-4 ani.',
        ru: 'Детский трехколесный велосипед с прочной рамой, легкими педалями и безопасной системой для первых шагов в велоспорте. Для возрастов 2-4 лет.',
        en: 'Kids tricycle with robust frame, light pedals and safe system for first steps in cycling. For ages 2-4 years.'
    },
    't2': {
        ro: 'Trotinetă pentru copii Model 188 cu roți rezistente, ghidon reglabil și frână eficientă pentru siguranță. Pentru copii 3-6 ani.',
        ru: 'Детский самокат Model 188 с прочными колесами, регулируемым рулем и эффективным тормозом для безопасности. Для детей 3-6 лет.',
        en: 'Kids scooter Model 188 with durable wheels, adjustable handlebar and efficient brake for safety. For children 3-6 years.'
    },
    't3': {
        ro: 'Skateboard pentru copii Model 2206, cu placa din lemn rezistent și roți de calitate pentru manevrabilitate. Pentru începători.',
        ru: 'Скейтборд для детей Model 2206, с доской из прочного дерева и качественными колесами для маневренности. Для начинающих.',
        en: 'Kids skateboard Model 2206, with durable wood deck and quality wheels for maneuverability. For beginners.'
    },
    't4': {
        ro: 'Skateboard pentru copii Model 2308, design modern și componente durabile pentru începători în skateboarding. Pentru vârste 6+ ani.',
        ru: 'Скейтборд для детей Model 2308, современный дизайн и долговечные компоненты для начинающих в скейтбординге. Для возрастов от 6 лет.',
        en: 'Kids skateboard Model 2308, modern design and durable components for beginners in skateboarding. For ages 6+ years.'
    },
    't5': {
        ro: 'Skateboard pentru copii Model 2406, ușor și manevrabil, perfect pentru exersarea primelor trucuri. Pentru copii 5-8 ani.',
        ru: 'Скейтборд для детей Model 2406, легкий и маневренный, идеально для отработки первых трюков. Для детей 5-8 лет.',
        en: 'Kids skateboard Model 2406, lightweight and maneuverable, perfect for practicing first tricks. For children 5-8 years.'
    },
    't6': {
        ro: 'Trotinetă pentru copii Model 2489, cu roți luminoase și ghidon ergonomic pentru distracție vizuală. Pentru copii 4-7 ani.',
        ru: 'Детский самокат Model 2489 со светящимися колесами и эргономичным рулем для визуального веселья. Для детей 4-7 лет.',
        en: 'Kids scooter Model 2489, with glowing wheels and ergonomic handlebar for visual fun. For children 4-7 years.'
    },
    't7': {
        ro: 'Skateboard pentru copii Model 28p, cu design colorat și caracteristici de siguranță pentru copii mici. Pentru vârste 3-5 ani.',
        ru: 'Скейтборд для детей Model 28p, с красочным дизайном и функциями безопасности для маленьких детей. Для возрастов 3-5 лет.',
        en: 'Kids skateboard Model 28p, with colorful design and safety features for young children. For ages 3-5 years.'
    },
    't8': {
        ro: 'Trotinetă pentru copii Model 306, simplă și rezistentă, ideală pentru prima trotinetă a copilului. Pentru copii 3-5 ani.',
        ru: 'Детский самокат Model 306, простой и прочный, идеально для первого самоката ребенка. Для детей 3-5 лет.',
        en: 'Kids scooter Model 306, simple and durable, ideal for child\'s first scooter. For children 3-5 years.'
    },
    't9': {
        ro: 'Trotinetă pentru copii Model 307, cu frână pe spate și roți de poliuretan pentru o conducere lină. Pentru copii 4-6 ani.',
        ru: 'Детский самокат Model 307, с задним тормозом и полиуретановыми колесами для плавной езды. Для детей 4-6 лет.',
        en: 'Kids scooter Model 307, with rear brake and polyurethane wheels for smooth riding. For children 4-6 years.'
    },
    't10': {
        ro: 'Skateboard cu mâner Model 3108, ideal pentru copii mici, oferă stabilitate suplimentară cu mânerul reglabil. Pentru vârste 2-4 ani.',
        ru: 'Скейтборд с ручкой Model 3108, идеально для маленьких детей, обеспечивает дополнительную устойчивость с регулируемой ручкой. Для возрастов 2-4 лет.',
        en: 'Handle skateboard Model 3108, ideal for young children, provides additional stability with adjustable handle. For ages 2-4 years.'
    },
    't11': {
        ro: 'Skateboard cu roți luminoase Model 3108, roțile se luminează la rulare pentru efect spectaculos seara. Pentru copii 5-8 ani.',
        ru: 'Скейтборд со светящимися колесами Model 3108, колеса светятся при катании для эффектного вида вечером. Для детей 5-8 лет.',
        en: 'Glowing wheels skateboard Model 3108, wheels light up when rolling for spectacular effect in the evening. For children 5-8 years.'
    },
    't12': {
        ro: 'Skateboard pentru copii Model 3108GD, design special și componente de calitate pentru performanță îmbunătățită. Pentru copii 6-9 ani.',
        ru: 'Скейтборд для детей Model 3108GD, специальный дизайн и качественные компоненты для улучшенной производительности. Для детей 6-9 лет.',
        en: 'Kids skateboard Model 3108GD, special design and quality components for enhanced performance. For children 6-9 years.'
    },
    't13': {
        ro: 'Skateboard pentru copii Model 3108K, cu truck-uri reglabile pentru o experiență de riding personalizată. Pentru copii 7-10 ani.',
        ru: 'Скейтборд для детей Model 3108K, с регулируемыми подвесками для индивидуального опыта катания. Для детей 7-10 лет.',
        en: 'Kids skateboard Model 3108K, with adjustable trucks for personalized riding experience. For children 7-10 years.'
    },
    't14': {
        ro: 'Trotinetă pentru copii Model 518, cu sistem de pliere rapidă și roți largi pentru stabilitate sporită. Pentru copii 5-8 ani.',
        ru: 'Детский самокат Model 518, с системой быстрого складывания и широкими колесами для повышенной устойчивости. Для детей 5-8 лет.',
        en: 'Kids scooter Model 518, with quick folding system and wide wheels for enhanced stability. For children 5-8 years.'
    },
    't15': {
        ro: 'Trotinetă pentru copii Model 601, ușoară și compactă, perfectă pentru transport și depozitare ușoară. Pentru copii 4-7 ani.',
        ru: 'Детский самокат Model 601, легкий и компактный, идеально для легкой транспортировки и хранения. Для детей 4-7 лет.',
        en: 'Kids scooter Model 601, lightweight and compact, perfect for easy transport and storage. For children 4-7 years.'
    },
    't16': {
        ro: 'Trotinetă pentru copii Model 618, cu frână pe spate eficientă și ghidon cu înălțime reglabilă. Pentru copii 5-9 ani.',
        ru: 'Детский самокат Model 618, с эффективным задним тормозом и рулем с регулируемой высотой. Для детей 5-9 лет.',
        en: 'Kids scooter Model 618, with efficient rear brake and height-adjustable handlebar. For children 5-9 years.'
    },
    't17': {
        ro: 'Trotinetă pentru copii Model 619, design ergonomic și roți din material de calitate pentru durabilitate. Pentru copii 5-8 ani.',
        ru: 'Детский самокат Model 619, эргономичный дизайн и колеса из качественного материала для долговечности. Для детей 5-8 лет.',
        en: 'Kids scooter Model 619, ergonomic design and quality material wheels for durability. For children 5-8 years.'
    },
    't18': {
        ro: 'Trotinetă pentru copii Model 620, cu sistem de iluminare LED și caracteristici de siguranță avansate. Pentru copii 6-10 ani.',
        ru: 'Детский самокат Model 620, с системой LED-освещения и продвинутыми функциями безопасности. Для детей 6-10 лет.',
        en: 'Kids scooter Model 620, with LED lighting system and advanced safety features. For children 6-10 years.'
    },
    't19': {
        ro: 'Trotinetă pentru copii Model 628-2, cu roți off-road și suspensie pentru terenuri accidentate. Pentru copii 7-12 ani.',
        ru: 'Детский самокат Model 628-2, с внедорожными колесами и подвеской для неровной местности. Для детей 7-12 лет.',
        en: 'Kids scooter Model 628-2, with off-road wheels and suspension for rough terrain. For children 7-12 years.'
    },
    't20': {
        ro: 'Trotinetă Model 6616, pentru copii și adulți, cu structură robustă și capacitate de încărcare ridicată. Pentru toate vârstele.',
        ru: 'Самокат Model 6616, для детей и взрослых, с прочной конструкцией и высокой грузоподъемностью. Для всех возрастов.',
        en: 'Scooter Model 6616, for children and adults, with robust structure and high load capacity. For all ages.'
    },
    't21': {
        ro: 'Trotinetă pentru copii Model 801, cu design clasic și fiabilitate dovedită pentru utilizare zilnică. Pentru copii 4-7 ani.',
        ru: 'Детский самокат Model 801, с классическим дизайном и проверенной надежностью для ежедневного использования. Для детей 4-7 лет.',
        en: 'Kids scooter Model 801, with classic design and proven reliability for daily use. For children 4-7 years.'
    },
    't22': {
        ro: 'Skateboard pentru copii Model 808, cu placa din 7 straturi de arțar pentru rezistență și flexibilitate optimă. Pentru copii 7-12 ani.',
        ru: 'Скейтборд для детей Model 808, с декой из 7 слоев клена для оптимальной прочности и гибкости. Для детей 7-12 лет.',
        en: 'Kids skateboard Model 808, with 7-layer maple deck for optimal strength and flexibility. For children 7-12 years.'
    },

    // ROLE (Rollerblades) - TRANSPORT
    'r1': {
        ro: 'Role negre mărime L (39-42) Model 9087, cu închizătoare rapidă și roți din poliuretan de calitate. Pentru adulți.',
        ru: 'Ролики черные размер L (39-42) Model 9087, с быстрой застежкой и колесами из качественного полиуретана. Для взрослых.',
        en: 'Black rollerblades size L (39-42) Model 9087, with quick closure and quality polyurethane wheels. For adults.'
    },
    'r2': {
        ro: 'Role albastre mărime M (35-38) Model 9087, cu sistem de ventilație și talpă ergonomică pentru comfort. Pentru adolescenți.',
        ru: 'Ролики синие размер M (35-38) Model 9087, с системой вентиляции и эргономичной подошвой для комфорта. Для подростков.',
        en: 'Blue rollerblades size M (35-38) Model 9087, with ventilation system and ergonomic sole for comfort. For teenagers.'
    },
    'r3': {
        ro: 'Role albastre mărime S (31-34) Model 9087, perfecte pentru copii, cu protecții integrate pentru siguranță. Pentru copii 6-10 ani.',
        ru: 'Ролики синие размер S (31-34) Model 9087, идеально для детей, со встроенными защитами для безопасности. Для детей 6-10 лет.',
        en: 'Blue rollerblades size S (31-34) Model 9087, perfect for children, with integrated protections for safety. For children 6-10 years.'
    },
    'r4': {
        ro: 'Role roz mărime M (35-38) Model 9087, cu design atrăgător pentru fete și caracteristici de performanță. Pentru adolescenți.',
        ru: 'Ролики розовые размер M (35-38) Model 9087, с привлекательным дизайном для девочек и характеристиками производительности. Для подростков.',
        en: 'Pink rollerblades size M (35-38) Model 9087, with attractive design for girls and performance features. For teenagers.'
    },
    'r5': {
        ro: 'Role roz mărime S (31-34) Model 9087, ușoare și manevrabile, ideale pentru primii pași în patinaj. Pentru copii 5-9 ani.',
        ru: 'Ролики розовые размер S (31-34) Model 9087, легкие и маневренные, идеально для первых шагов в катании. Для детей 5-9 лет.',
        en: 'Pink rollerblades size S (31-34) Model 9087, lightweight and maneuverable, ideal for first steps in skating. For children 5-9 years.'
    },
    'r6': {
        ro: 'Role roz mărime S (31-34) Model 963, cu sistem de frână pe călcâi și ajustare precisă a mărimii. Pentru copii 5-8 ani.',
        ru: 'Ролики розовые размер S (31-34) Model 963, с тормозной системой на пятке и точной регулировкой размера. Для детей 5-8 лет.',
        en: 'Pink rollerblades size S (31-34) Model 963, with heel brake system and precise size adjustment. For children 5-8 years.'
    },
    'r7': {
        ro: 'Role roz mărime M (35-38) Model 9807, cu roți luminoase și protecții amovibile pentru versatilitate. Pentru adolescenți.',
        ru: 'Ролики розовые размер M (35-38) Model 9807, со светящимися колесами и съемными защитами для универсальности. Для подростков.',
        en: 'Pink rollerblades size M (35-38) Model 9807, with glowing wheels and removable protections for versatility. For teenagers.'
    },
    'r8': {
        ro: 'Role roz mărime S (31-34) Model 9807, perfecte pentru patinaj recreativ și exersarea echilibrului. Pentru copii 6-10 ani.',
        ru: 'Ролики розовые размер S (31-34) Model 9807, идеально для рекреационного катания и отработки равновесия. Для детей 6-10 лет.',
        en: 'Pink rollerblades size S (31-34) Model 9807, perfect for recreational skating and balance practice. For children 6-10 years.'
    },

    // Alte trotinete - TRANSPORT
    't23': {
        ro: 'Trotinetă pentru copii Model 918-4, cu 4 roți pentru stabilitate maximă, ideală pentru copii mici. Pentru vârste 2-4 ani.',
        ru: 'Детский самокат Model 918-4, с 4 колесами для максимальной устойчивости, идеально для маленьких детей. Для возрастов 2-4 лет.',
        en: 'Kids scooter Model 918-4, with 4 wheels for maximum stability, ideal for young children. For ages 2-4 years.'
    },
    't24': {
        ro: 'Trotinetă pentru copii Model 999, cu design simplu și fiabil, perfectă pentru distracție în parc. Pentru copii 3-6 ani.',
        ru: 'Детский самокат Model 999, с простым и надежным дизайном, идеально для веселья в парке. Для детей 3-6 лет.',
        en: 'Kids scooter Model 999, with simple and reliable design, perfect for park fun. For children 3-6 years.'
    },
    't25': {
        ro: 'Trotinetă pentru copii Model A81, cu roți din cauciuc rezistent și ghidon reglabil în înălțime. Pentru copii 4-7 ani.',
        ru: 'Детский самокат Model A81, с колесами из прочной резины и рулем с регулируемой высотой. Для детей 4-7 лет.',
        en: 'Kids scooter Model A81, with durable rubber wheels and height-adjustable handlebar. For children 4-7 years.'
    },
    't26': {
        ro: 'Trotinetă Kreiss Model A7, cu suspensie frontală și roți de 200mm pentru o conducere confortabilă. Pentru copii 7-12 ani.',
        ru: 'Самокат Kreiss Model A7, с передней подвеской и колесами 200мм для комфортной езды. Для детей 7-12 лет.',
        en: 'Scooter Kreiss Model A7, with front suspension and 200mm wheels for comfortable riding. For children 7-12 years.'
    },
    't27': {
        ro: 'Trotinetă pentru copii Model M1, ușoară și manevrabilă, cu frână pe spate pentru control ușor. Pentru copii 4-6 ani.',
        ru: 'Детский самокат Model M1, легкий и маневренный, с задним тормозом для легкого контроля. Для детей 4-6 лет.',
        en: 'Kids scooter Model M1, lightweight and maneuverable, with rear brake for easy control. For children 4-6 years.'
    },
    't28': {
        ro: 'Trotinetă pentru copii Model M6, cu platformă largă și roți iluminate pentru distracție seara. Pentru copii 5-8 ani.',
        ru: 'Детский самокат Model M6, с широкой платформой и светящимися колесами для вечернего веселья. Для детей 5-8 лет.',
        en: 'Kids scooter Model M6, with wide platform and illuminated wheels for evening fun. For children 5-8 years.'
    },
    't29': {
        ro: 'Trotinetă SCOOTER 5S WHITE, cu sistem de pliere rapidă și roți din uretan de înaltă densitate. Pentru copii 8+ ani.',
        ru: 'Самокат SCOOTER 5S WHITE, с системой быстрого складывания и колесами из уретана высокой плотности. Для детей от 8 лет.',
        en: 'Scooter 5S White, with quick folding system and high-density urethane wheels. For children 8+ years.'
    },
    't30': {
        ro: 'Trotinetă SCOOTER Y5, cu ghidon reglabil și mecanism sigur de pliere pentru transport facil. Pentru copii 7-12 ani.',
        ru: 'Самокат SCOOTER Y5, с регулируемым рулем и безопасным механизмом складывания для легкой транспортировки. Для детей 7-12 лет.',
        en: 'Scooter Y5, with adjustable handlebar and safe folding mechanism for easy transport. For children 7-12 years.'
    },
    't31': {
        ro: 'Scooter 898-003 Negru, design clasic și fiabil, perfect pentru începători. Pentru copii 6-10 ani.',
        ru: 'Самокат 898-003 Черный, классический и надежный дизайн, идеально для начинающих. Для детей 6-10 лет.',
        en: 'Scooter 898-003 Black, classic and reliable design, perfect for beginners. For children 6-10 years.'
    },
    't32': {
        ro: 'Scooter 898-003 Albastru, cu roți rezistente și ghidon ergonomic pentru confort. Pentru copii 6-10 ani.',
        ru: 'Самокат 898-003 Синий, с прочными колесами и эргономичным рулем для комфорта. Для детей 6-10 лет.',
        en: 'Scooter 898-003 Blue, with durable wheels and ergonomic handlebar for comfort. For children 6-10 years.'
    },
    't33': {
        ro: 'Scooter 898-003 Roz, design atrăgător pentru fete, cu caracteristici de siguranță. Pentru copii 6-10 ani.',
        ru: 'Самокат 898-003 Розовый, привлекательный дизайн для девочек, с функциями безопасности. Для детей 6-10 лет.',
        en: 'Scooter 898-003 Pink, attractive design for girls, with safety features. For children 6-10 years.'
    },
    't34': {
        ro: 'Scooter 898-003 Roșu, cu frână eficientă și construcție robustă pentru durabilitate. Pentru copii 6-10 ani.',
        ru: 'Самокат 898-003 Красный, с эффективным тормозом и прочной конструкцией для долговечности. Для детей 6-10 лет.',
        en: 'Scooter 898-003 Red, with efficient brake and robust construction for durability. For children 6-10 years.'
    },
    't35': {
        ro: 'Scooter 898-003S Negru, model îmbunătățit cu suspensie pentru o conducere mai confortabilă. Pentru copii 7-12 ani.',
        ru: 'Самокат 898-003S Черный, улучшенная модель с подвеской для более комфортной езды. Для детей 7-12 лет.',
        en: 'Scooter 898-003S Black, improved model with suspension for more comfortable riding. For children 7-12 years.'
    },
    't36': {
        ro: 'Scooter 898-003S Albastru, cu suspensie și roți de calitate pentru performanță îmbunătățită. Pentru copii 7-12 ani.',
        ru: 'Самокат 898-003S Синий, с подвеской и качественными колесами для улучшенной производительности. Для детей 7-12 лет.',
        en: 'Scooter 898-003S Blue, with suspension and quality wheels for improved performance. For children 7-12 years.'
    },
    't37': {
        ro: 'Scooter 898-003S Roz, design elegant pentru fete cu suspensie pentru confort sporit. Pentru copii 7-12 ani.',
        ru: 'Самокат 898-003S Розовый, элегантный дизайн для девочек с подвеской для повышенного комфорта. Для детей 7-12 лет.',
        en: 'Scooter 898-003S Pink, elegant design for girls with suspension for enhanced comfort. For children 7-12 years.'
    },
    't38': {
        ro: 'Scooter 898-003S Violet, cu suspensie și caracteristici avansate pentru o experiență premium. Pentru copii 7-12 ani.',
        ru: 'Самокат 898-003S Фиолетовый, с подвеской и передовыми функциями для премиум-опыта. Для детей 7-12 лет.',
        en: 'Scooter 898-003S Violet, with suspension and advanced features for premium experience. For children 7-12 years.'
    },
    't39': {
        ro: 'Scooter 898-145 Negru, design sport și construcție robustă pentru utilizare intensivă. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145 Черный, спортивный дизайн и прочная конструкция для интенсивного использования. Для детей 8-14 лет.',
        en: 'Scooter 898-145 Black, sport design and robust construction for intensive use. For children 8-14 years.'
    },
    't40': {
        ro: 'Scooter 898-145S Negru, cu suspensie și roți mari pentru o conducere stabilă pe diverse suprafețe. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Черный, с подвеской и большими колесами для стабильной езды по разным поверхностям. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Black, with suspension and large wheels for stable riding on various surfaces. For children 8-14 years.'
    },
    't41': {
        ro: 'Scooter 898-145S Albastru, cu suspensie și design ergonomic pentru confort maxim. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Синий, с подвеской и эргономичным дизайном для максимального комфорта. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Blue, with suspension and ergonomic design for maximum comfort. For children 8-14 years.'
    },
    't42': {
        ro: 'Scooter 898-145S Verde, cu suspensie și caracteristici de siguranță avansate. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Зеленый, с подвеской и продвинутыми функциями безопасности. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Green, with suspension and advanced safety features. For children 8-14 years.'
    },
    't43': {
        ro: 'Scooter 898-145S Roz, cu suspensie și design atrăgător pentru adolescente. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Розовый, с подвеской и привлекательным дизайном для подростков. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Pink, with suspension and attractive design for teenagers. For children 8-14 years.'
    },
    't44': {
        ro: 'Scooter 898-145S Roșu, cu suspensie și performanță ridicată pentru pasionații de speed. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Красный, с подвеской и высокой производительностью для любителей скорости. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Red, with suspension and high performance for speed enthusiasts. For children 8-14 years.'
    },
    't45': {
        ro: 'Scooter 898-145S Violet, cu suspensie și design modern pentru stil și confort. Pentru copii 8-14 ani.',
        ru: 'Самокат 898-145S Фиолетовый, с подвеской и современным дизайном для стиля и комфорта. Для детей 8-14 лет.',
        en: 'Scooter 898-145S Violet, with suspension and modern design for style and comfort. For children 8-14 years.'
    },
    't46': {
        ro: 'Scooter 898-180S Roșu, cu roți mari și suspensie pentru o conducere extrem de confortabilă. Pentru adolescenți 10-16 ani.',
        ru: 'Самокат 898-180S Красный, с большими колесами и подвеской для чрезвычайно комфортной езды. Для подростков 10-16 лет.',
        en: 'Scooter 898-180S Red, with large wheels and suspension for extremely comfortable riding. For teenagers 10-16 years.'
    },
    't47': {
        ro: 'Scooter 898-180S Argintiu, cu design metalic și caracteristici premium pentru performanță maximă. Pentru adolescenți 10-16 ani.',
        ru: 'Самокат 898-180S Серебряный, с металлическим дизайном и премиум-функциями для максимальной производительности. Для подростков 10-16 лет.',
        en: 'Scooter 898-180S Silver, with metallic design and premium features for maximum performance. For teenagers 10-16 years.'
    },
    't48': {
        ro: 'Scooter 898-180S Violet, cu suspensie dublă și roți de 180mm pentru o experiență de riding excelentă. Pentru adolescenți 10-16 ani.',
        ru: 'Самокат 898-180S Фиолетовый, с двойной подвеской и колесами 180мм для отличного опыта катания. Для подростков 10-16 лет.',
        en: 'Scooter 898-180S Violet, with double suspension and 180mm wheels for excellent riding experience. For teenagers 10-16 years.'
    },
    't49': {
        ro: 'Scooter 898-180S Negru, design agresiv și caracteristici tehnice avansate pentru pasionați. Pentru adolescenți 10-16 ani.',
        ru: 'Самокат 898-180S Черный, агрессивный дизайн и передовые технические характеристики для энтузиастов. Для подростков 10-16 лет.',
        en: 'Scooter 898-180S Black, aggressive design and advanced technical features for enthusiasts. For teenagers 10-16 years.'
    },
    't50': {
        ro: 'Scooter 898-180S Albastru, cu suspensie reglabilă și sistem de frânare puternic. Pentru adolescenți 10-16 ani.',
        ru: 'Самокат 898-180S Синий, с регулируемой подвеской и мощной тормозной системой. Для подростков 10-16 лет.',
        en: 'Scooter 898-180S Blue, with adjustable suspension and powerful braking system. For teenagers 10-16 years.'
    },
    't51': {
        ro: 'Scooter 898-180SL Negru, model longboard cu platformă extinsă pentru stabilitate maximă. Pentru adolescenți 12-18 ani.',
        ru: 'Самокат 898-180SL Черный, модель лонгборд с расширенной платформой для максимальной устойчивости. Для подростков 12-18 лет.',
        en: 'Scooter 898-180SL Black, longboard model with extended platform for maximum stability. For teenagers 12-18 years.'
    },
    't52': {
        ro: 'Scooter 898-180SL Alb, design curat și caracteristici profesionale pentru riding urban. Pentru adolescenți 12-18 ani.',
        ru: 'Самокат 898-180SL Белый, чистый дизайн и профессиональные характеристики для городского катания. Для подростков 12-18 лет.',
        en: 'Scooter 898-180SL White, clean design and professional features for urban riding. For teenagers 12-18 years.'
    },
    't53': {
        ro: 'Scooter 898-5D Negru, cu 5 roți pentru stabilitate excepțională, ideal pentru copii mici. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Черный, с 5 колесами для исключительной устойчивости, идеально для маленьких детей. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Black, with 5 wheels for exceptional stability, ideal for young children. For ages 3-6 years.'
    },
    't54': {
        ro: 'Scooter 898-5D Albastru, cu 5 roți și design ergonomic pentru siguranță maximă a copiilor. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Синий, с 5 колесами и эргономичным дизайном для максимальной безопасности детей. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Blue, with 5 wheels and ergonomic design for maximum child safety. For ages 3-6 years.'
    },
    't55': {
        ro: 'Scooter 898-5D Verde, cu 5 roți și caracteristici de siguranță avansate pentru începători. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Зеленый, с 5 колесами и продвинутыми функциями безопасности для начинающих. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Green, with 5 wheels and advanced safety features for beginners. For ages 3-6 years.'
    },
    't56': {
        ro: 'Scooter 898-5D Roz, cu 5 roți și design colorat pentru fete, perfect pentru prima trotinetă. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Розовый, с 5 колесами и красочным дизайном для девочек, идеально для первого самоката. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Pink, with 5 wheels and colorful design for girls, perfect for first scooter. For ages 3-6 years.'
    },
    't57': {
        ro: 'Scooter 898-5D Roșu, cu 5 roți și construcție robustă pentru durabilitate pe termen lung. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Красный, с 5 колесами и прочной конструкцией для долгосрочной долговечности. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Red, with 5 wheels and robust construction for long-term durability. For ages 3-6 years.'
    },
    't58': {
        ro: 'Scooter 898-5D Violet, cu 5 roți și design modern pentru stil și siguranță combinată. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Фиолетовый, с 5 колесами и современным дизайном для сочетания стиля и безопасности. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D Violet, with 5 wheels and modern design for combined style and safety. For ages 3-6 years.'
    },
    't59': {
        ro: 'Scooter 898-5D Alb, cu 5 roți și design curat pentru o experiență de riding sigură și plăcută. Pentru vârste 3-6 ani.',
        ru: 'Самокат 898-5D Белый, с 5 колесами и чистым дизайном для безопасного и приятного катания. Для возрастов 3-6 лет.',
        en: 'Scooter 898-5D White, with 5 wheels and clean design for safe and pleasant riding. For ages 3-6 years.'
    },
    't60': {
        ro: 'Scooter 898-S01, model basic cu caracteristici esențiale pentru începători în riding. Pentru copii 6-10 ani.',
        ru: 'Самокат 898-S01, базовая модель с основными характеристиками для начинающих в катании. Для детей 6-10 лет.',
        en: 'Scooter 898-S01, basic model with essential features for beginners in riding. For children 6-10 years.'
    },
    't61': {
        ro: 'Scooter 898-S03, cu suspensie ușoară și roți de calitate pentru riding urban confortabil. Pentru copii 7-12 ani.',
        ru: 'Самокат 898-S03, с легкой подвеской и качественными колесами для комфортного городского катания. Для детей 7-12 лет.',
        en: 'Scooter 898-S03, with light suspension and quality wheels for comfortable urban riding. For children 7-12 years.'
    },
    't62': {
        ro: 'Scooter 898-S07, model premium cu caracteristici avansate și construcție de înaltă calitate. Pentru adolescenți 12-18 ani.',
        ru: 'Самокат 898-S07, премиум-модель с передовыми функциями и конструкцией высокого качества. Для подростков 12-18 лет.',
        en: 'Scooter 898-S07, premium model with advanced features and high-quality construction. For teenagers 12-18 years.'
    },
    't63': {
        ro: 'Bicicletă fără pedale X005, perfectă pentru copii mici pentru învățarea echilibrului și coordonării. Pentru vârste 1.5-3 ani.',
        ru: 'Беговел X005, идеально для маленьких детей для обучения балансу и координации. Для возрастов 1.5-3 лет.',
        en: 'Balance bike X005, perfect for young children for learning balance and coordination. For ages 1.5-3 years.'
    },
    't64': {
        ro: 'Trotinetă copii X016-1, cu design modern și caracteristici de siguranță pentru copii 5-8 ani.',
        ru: 'Детский самокат X016-1, с современным дизайном и функциями безопасности для детей 5-8 лет.',
        en: 'Kids scooter X016-1, with modern design and safety features for children 5-8 years.'
    },
    't65': {
        ro: 'Trotinetă copii X016-4, cu 4 roți pentru stabilitate maximă, perfectă pentru începători. Pentru copii 3-6 ani.',
        ru: 'Детский самокат X016-4, с 4 колесами для максимальной устойчивости, идеально для начинающих. Для детей 3-6 лет.',
        en: 'Kids scooter X016-4, with 4 wheels for maximum stability, perfect for beginners. For children 3-6 years.'
    },
    't66': {
        ro: 'Trotinetă copii X2, simplă și ușoară, perfectă pentru distracție în parc și pe alei. Pentru copii 4-7 ani.',
        ru: 'Детский самокат X2, простой и легкий, идеально для веселья в парке и на аллеях. Для детей 4-7 лет.',
        en: 'Kids scooter X2, simple and lightweight, perfect for fun in parks and paths. For children 4-7 years.'
    },
    't67': {
        ro: 'Trotinetă copii YS818, cu design clasic și construcție durabilă pentru utilizare zilnică. Pentru copii 4-7 ani.',
        ru: 'Детский самокат YS818, с классическим дизайном и прочной конструкцией для ежедневного использования. Для детей 4-7 лет.',
        en: 'Kids scooter YS818, with classic design and durable construction for daily use. For children 4-7 years.'
    },
    't68': {
        ro: 'Longboard profesional pentru adulți și adolescenți, cu placa lungă pentru stabilitate și viteze mari. Pentru vârste 14+ ani.',
        ru: 'Профессиональный лонгборд для взрослых и подростков, с длинной декой для устойчивости и высоких скоростей. Для возрастов от 14 лет.',
        en: 'Professional longboard for adults and teenagers, with long deck for stability and high speeds. For ages 14+ years.'
    },

    // ==============================================
    // BAZINE COPII (CATEGORIA copii-pools) - 40 products
    // ==============================================
    'kp1': {
        ro: 'Bazin gonflabil pentru copii 168x46cm cu design curcubeu, capacitate 617L, recomandat pentru copii de 3+ ani. Fund gonflabil pentru comfort.',
        ru: 'Надувной бассейн для детей 168x46см с дизайном радуги, емкость 617л, рекомендуется для детей от 3 лет. Надувное дно для комфорта.',
        en: 'Inflatable pool for children 168x46cm with rainbow design, capacity 617L, recommended for children 3+ years. Inflatable bottom for comfort.'
    },
    'kp2': {
        ro: 'Bazin pentru copii 152x25cm cu temă snorkeling, capacitate 443L, perfect pentru copii de la 3 ani. Design educativ și distractiv.',
        ru: 'Детский бассейн 152x25см с тематикой снорклинга, емкость 443л, идеально для детей от 3 лет. Образовательный и веселый дизайн.',
        en: 'Kids pool 152x25cm with snorkeling theme, capacity 443L, perfect for children from 3 years. Educational and fun design.'
    },
    'kp3': {
        ro: 'Bazin copii 183x38cm SnapSet, capacitate 977L, cu sistem rapid de umflare și drenare. Pentru copii 3+ ani.',
        ru: 'Детский бассейн 183x38см SnapSet, емкость 977л, с системой быстрого надувания и слива. Для детей от 3 лет.',
        en: 'Kids pool 183x38cm SnapSet, capacity 977L, with quick inflation and drainage system. For children 3+ years.'
    },
    'kp4': {
        ro: 'Bazin gonflabil familial 229x229x66cm, capacitate 233L, pentru copii de 3+ ani, ideal pentru grădină. Spațios pentru mai mulți copii.',
        ru: 'Семейный надувной бассейн 229x229x66см, емкость 233л, для детей от 3 лет, идеально для сада. Просторный для нескольких детей.',
        en: 'Family inflatable pool 229x229x66cm, capacity 233L, for children 3+ years, ideal for garden. Spacious for multiple children.'
    },
    'kp5': {
        ro: 'Bazin gonflabil pentru copii 262x175x56cm cu design cada, capacitate 749L, pentru copii de 6+ ani. Adâncime moderată pentru siguranță.',
        ru: 'Надувной бассейн для детей 262x175x56см с дизайном ванны, емкость 749л, для детей от 6 лет. Умеренная глубина для безопасности.',
        en: 'Inflatable pool for children 262x175x56cm with tub design, capacity 749L, for children 6+ years. Moderate depth for safety.'
    },
    'kp6': {
        ro: 'Bazin gonflabil pentru copii 191x178x61cm cu temă acvariu, capacitate 541L, cu fund gonflabil pentru comfort. Pentru copii 6+ ani.',
        ru: 'Надувной бассейн для детей 191x178x61см с тематикой аквариума, емкость 541л, с надувным дном для комфорта. Для детей от 6 лет.',
        en: 'Inflatable pool for children 191x178x61cm with aquarium theme, capacity 541L, with inflatable bottom for comfort. For children 6+ years.'
    },
    'kp7': {
        ro: 'Inel gonflabil Intex "Micuța Stea" pentru copii, ușor de umflat și ideal pentru jocuri în apă. Pentru vârste 2-5 ani.',
        ru: 'Надувной круг Intex "Маленькая звездочка" для детей, легко надувается и идеально подходит для игр в воде. Для возрастов 2-5 лет.',
        en: 'Intex inflatable ring "Little Star" for children, easy to inflate and ideal for water games. For ages 2-5 years.'
    },
    'kp8': {
        ro: 'Bazin gonflabil pentru copii 85x85x23cm, capacitate 57L, perfect pentru copii mici de 1-3 ani. Fund gonflabil pentru comfort maxim și siguranță.',
        ru: 'Надувной бассейн для детей 85x85x23см, емкость 57л, идеально для маленьких детей 1-3 года. Надувное дно для максимального комфорта и безопасности.',
        en: 'Inflatable pool for children 85x85x23cm, capacity 57L, perfect for young children 1-3 years. Inflatable bottom for maximum comfort and safety.'
    },
    'kp9': {
        ro: 'Bazin gonflabil pentru copii 61x22cm cu design curcubeu, capacitate 34L, pentru copii de 1-3 ani. Ușor de umflat și compact.',
        ru: 'Надувной бассейн для детей 61x22см с дизайном радуги, емкость 34л, для детей 1-3 лет. Легко надувается и компактный.',
        en: 'Inflatable pool for children 61x22cm with rainbow design, capacity 34L, for children 1-3 years. Easy to inflate and compact.'
    },
    'kp10': {
        ro: 'Bazin gonflabil pentru copii 102x89cm cu temă ciupercă mușcărie și coperiș, capacitate 45L. Protecție la soare pentru copii de 1-3 ani.',
        ru: 'Надувной бассейн для детей 102x89см с тематикой мухомора и навесом, емкость 45л. Защита от солнца для детей 1-3 лет.',
        en: 'Inflatable pool for children 102x89cm with mushroom theme and canopy, capacity 45L. Sun protection for children 1-3 years.'
    },
    'kp11': {
        ro: 'Bazin gonflabil familial Intex 203x152x48cm, spațios pentru familie cu copii mici. Design simplu și durabil pentru uz casnic.',
        ru: 'Семейный надувной бассейн Intex 203x152x48см, просторный для семьи с маленькими детьми. Простой и долговечный дизайн для домашнего использования.',
        en: 'Family inflatable pool Intex 203x152x48cm, spacious for family with young children. Simple and durable design for home use.'
    },
    'kp12': {
        ro: 'Bazin gonflabil pentru copii 229x147x46cm, pentru copii de 6+ ani. Dimensiuni generoase pentru distracție în aer liber.',
        ru: 'Надувной бассейн для детей 229x147x46см, для детей от 6 лет. Щедрые размеры для веселья на открытом воздухе.',
        en: 'Inflatable pool for children 229x147x46cm, for children 6+ years. Generous dimensions for outdoor fun.'
    },
    'kp13': {
        ro: 'Bazin gonflabil pentru copii 166x100x28cm, capacitate 102L, pentru copii de la 2 ani. Fund gonflabil pentru comfort și siguranță.',
        ru: 'Надувной бассейн для детей 166x100x28см, емкость 102л, для детей от 2 лет. Надувное дно для комфорта и безопасности.',
        en: 'Inflatable pool for children 166x100x28cm, capacity 102L, for children from 2 years. Inflatable bottom for comfort and safety.'
    },
    'kp14': {
        ro: 'Bazin gonflabil pentru copii 114x25cm cu design curcubeu, capacitate 136L, pentru copii de la 2 ani. Fund gonflabil pentru stabilitate.',
        ru: 'Надувной бассейн для детей 114x25см с дизайном радуги, емкость 136л, для детей от 2 лет. Надувное дно для устойчивости.',
        en: 'Inflatable pool for children 114x25cm with rainbow design, capacity 136L, for children from 2 years. Inflatable bottom for stability.'
    },
    'kp15': {
        ro: 'Bazin gonflabil pentru copii 147x33cm cu design curcubeu, capacitate 299L, pentru copii de la 2 ani. Perfect pentru răcoare vară.',
        ru: 'Надувной бассейн для детей 147x33см с дизайном радуги, емкость 299л, для детей от 2 лет. Идеально для летней прохлады.',
        en: 'Inflatable pool for children 147x33cm with rainbow design, capacity 299L, for children from 2 years. Perfect for summer coolness.'
    },
    'kp16': {
        ro: 'Bazin gonflabil pentru copii 157x157x122cm cu design casă și coperiș, capacitate 280L. Spațiu de joc acvatic pentru copii de 2+ ani.',
        ru: 'Надувной бассейн для детей 157x157x122см с дизайном домика и навесом, емкость 280л. Водное игровое пространство для детей от 2 лет.',
        en: 'Inflatable pool for children 157x157x122cm with house design and canopy, capacity 280L. Aquatic play space for children 2+ years.'
    },
    'kp17': {
        ro: 'Bazin gonflabil pentru copii 159x159x50cm cu temă acvariu, capacitate 424L, pentru copii de 3+ ani. Design educativ cu pești colorați.',
        ru: 'Надувной бассейн для детей 159x159x50см с тематикой аквариума, емкость 424л, для детей от 3 лет. Образовательный дизайн с разноцветными рыбками.',
        en: 'Inflatable pool for children 159x159x50cm with aquarium theme, capacity 424L, for children 3+ years. Educational design with colorful fish.'
    },
    'kp18': {
        ro: 'Bazin gonflabil pentru copii 163x107x46cm cu temă pirați, capacitate 238L, pentru copii de 3+ ani. Aventură acvatică cu design pirățesc.',
        ru: 'Надувной бассейн для детей 163x107x46см с тематикой пиратов, емкость 238л, для детей от 3 лет. Водное приключение с пиратским дизайном.',
        en: 'Inflatable pool for children 163x107x46cm with pirate theme, capacity 238L, for children 3+ years. Aquatic adventure with pirate design.'
    },
    'kp19': {
        ro: 'Cort pentru bazine copii 305x183cm și 262x175cm, oferă protecție împotriva soarelui pentru timpul petrecut în bazin. Ușor de montat.',
        ru: 'Тент для детских бассейнов 305x183см и 262x175см, обеспечивает защиту от солнца во время пребывания в бассейне. Легко устанавливается.',
        en: 'Canopy for kids pools 305x183cm and 262x175cm, provides sun protection during pool time. Easy to set up.'
    },
    'kp20': {
        ro: 'Bazin gonflabil pentru copii cu design ananas, jucăuș și atrăgător pentru copii mici. Perfect pentru distracție estivală.',
        ru: 'Надувной бассейн для детей с дизайном ананаса, игривый и привлекательный для маленьких детей. Идеально для летнего веселья.',
        en: 'Inflatable pool for children with pineapple design, playful and attractive for young children. Perfect for summer fun.'
    },
    'kp21': {
        ro: 'Bazin gonflabil pentru copii 147x33cm cu design cristal, capacitate 288L, pentru copii de la 2 ani. Culori strălucitoare și transparente.',
        ru: 'Надувной бассейн для детей 147x33см с дизайном кристалла, емкость 288л, для детей от 2 лет. Яркие и прозрачные цвета.',
        en: 'Inflatable pool for children 147x33cm with crystal design, capacity 288L, for children from 2 years. Bright and transparent colors.'
    },
    'kp22': {
        ro: 'Bazin gonflabil pentru copii 188x46cm, capacitate 666L, pentru copii de 3+ ani. Dimensiuni perfecte pentru joacă în curte.',
        ru: 'Надувной бассейн для детей 188x46см, емкость 666л, для детей от 3 лет. Идеальные размеры для игр во дворе.',
        en: 'Inflatable pool for children 188x46cm, capacity 666L, for children 3+ years. Perfect dimensions for yard play.'
    },
    'kp23': {
        ro: 'Bazin gonflabil pentru copii 122x122cm cu design unicorn și coperiș, capacitate 130L, pentru copii de la 2 ani. Magie și fantezie în apă.',
        ru: 'Надувной бассейн для детей 122x122см с дизайном единорога и навесом, емкость 130л, для детей от 2 лет. Магия и фантазия в воде.',
        en: 'Inflatable pool for children 122x122cm with unicorn design and canopy, capacity 130L, for children from 2 years. Magic and fantasy in water.'
    },
    'kp24': {
        ro: 'Bazin gonflabil pentru copii "Pisici-Unicorn" 102x102cm, pentru copii de 1-3 ani. Design adorabil care combină pisicuțe și unicorni.',
        ru: 'Надувной бассейн для детей "Котенок-Единорожка" 102x102см, для детей 1-3 лет. Очаровательный дизайн, сочетающий котят и единорогов.',
        en: 'Inflatable pool for children "Cat-Unicorn" 102x102cm, for children 1-3 years. Adorable design combining kittens and unicorns.'
    },
    'kp25': {
        ro: 'Bazin gonflabil pentru copii 168x38cm cu design cristal, capacitate 481L, pentru copii de 3+ ani. Transparență și culori vibrante.',
        ru: 'Надувной бассейн для детей 168x38см с дизайном кристалла, емкость 481л, для детей от 3 лет. Прозрачность и яркие цвета.',
        en: 'Inflatable pool for children 168x38cm with crystal design, capacity 481L, for children 3+ years. Transparency and vibrant colors.'
    },
    'kp26': {
        ro: 'Bazin gonflabil pentru copii cu design pepene, 168x38cm, capacitate 581L, pentru copii de la 2 ani. Design proaspăt și estival.',
        ru: 'Надувной бассейн для детей с дизайном арбуза, 168x38см, емкость 581л, для детей от 2 лет. Свежий и летний дизайн.',
        en: 'Inflatable pool for children with watermelon design, 168x38cm, capacity 581L, for children from 2 years. Fresh and summer design.'
    },
    'kp27': {
        ro: 'Bazin pentru copii 244x46cm SnapSet, capacitate 2089L, pentru copii de 3+ ani. Sistem rapid de umflare pentru setare rapidă.',
        ru: 'Детский бассейн 244x46см SnapSet, емкость 2089л, для детей от 3 лет. Система быстрого надувания для быстрой установки.',
        en: 'Kids pool 244x46cm SnapSet, capacity 2089L, for children 3+ years. Quick inflation system for fast setup.'
    },
    'kp28': {
        ro: 'Bazin pentru copii 122x25cm cu design rățuști, capacitate 281L, pentru copii de 3+ ani. Design dulce și prietenos pentru copii mici.',
        ru: 'Детский бассейн 122x25см с дизайном утят, емкость 281л, для детей от 3 лет. Сладкий и дружелюбный дизайн для маленьких детей.',
        en: 'Kids pool 122x25cm with duck design, capacity 281L, for children 3+ years. Sweet and friendly design for young children.'
    },
    'kp29': {
        ro: 'Bazin gonflabil pentru copii 152x56cm cu temă acvariu, capacitate 318L, cu fund gonflabil pentru comfort. Pentru copii 6+ ani.',
        ru: 'Надувной бассейн для детей 152x56см с тематикой аквариума, емкость 318л, с надувным дном для комфорта. Для детей от 6 лет.',
        en: 'Inflatable pool for children 152x56cm with aquarium theme, capacity 318L, with inflatable bottom for comfort. For children 6+ years.'
    },
    'kp30': {
        ro: 'Bazin gonflabil pentru copii 305x183x56cm, capacitate 999L, pentru copii de 6+ ani. Bazin mare pentru distracție în familie.',
        ru: 'Надувной бассейн для детей 305x183x56см, емкость 999л, для детей от 6 лет. Большой бассейн для семейного веселья.',
        en: 'Inflatable pool for children 305x183x56cm, capacity 999L, for children 6+ years. Large pool for family fun.'
    },
    'kp31': {
        ro: 'Bazin gonflabil pentru copii 86x25cm cu design curcubeu, capacitate 68L, pentru copii de 1-3 ani. Fund gonflabil pentru siguranță.',
        ru: 'Надувной бассейн для детей 86x25см с дизайном радуги, емкость 68л, для детей 1-3 лет. Надувное дно для безопасности.',
        en: 'Inflatable pool for children 86x25cm with rainbow design, capacity 68L, for children 1-3 years. Inflatable bottom for safety.'
    },
    'kp32': {
        ro: 'Bazin gonflabil pentru copii 114x25cm cu design cristal, capacitate 132L, pentru copii de la 2 ani. Design strălucitor și atrăgător.',
        ru: 'Надувной бассейн для детей 114x25см с дизайном кристалла, емкость 132л, для детей от 2 лет. Блестящий и привлекательный дизайн.',
        en: 'Inflatable pool for children 114x25cm with crystal design, capacity 132L, for children from 2 years. Sparkling and attractive design.'
    },
    'kp33': {
        ro: 'Bazin gonflabil pentru copii 132x28cm cu design pești, include minge și inel pentru joc suplimentar. Capacitate 204L.',
        ru: 'Надувной бассейн для детей 132x28см с дизайном рыбок, включает мяч и кольцо для дополнительной игры. Емкость 204л.',
        en: 'Inflatable pool for children 132x28cm with fish design, includes ball and ring for additional play. Capacity 204L.'
    },
    'kp34': {
        ro: 'Kit universal de reparații pentru produse gonflabile, include plasturi și adeziv de înaltă calitate pentru reparații rapide și durabile.',
        ru: 'Универсальный ремонтный комплект для надувных изделий, включает заплатки и высококачественный клей для быстрого и долговечного ремонта.',
        en: 'Universal repair kit for inflatable products, includes patches and high-quality adhesive for quick and durable repairs.'
    },
    'kp35': {
        ro: 'Bazin gonflabil Intex pentru copii model 57441, design modern și culori atrăgătoare pentru distracție acvatică în siguranță.',
        ru: 'Надувной бассейн Intex для детей модель 57441, современный дизайн и привлекательные цвета для безопасного водного веселья.',
        en: 'Intex inflatable pool for children model 57441, modern design and attractive colors for safe aquatic fun.'
    },
    'kp36': {
        ro: 'Bazin gonflabil Intex Sweet Blossom, design floral dulce și feminin, perfect pentru fete mici. Distracție și frumusețe în apă.',
        ru: 'Надувной бассейн Intex Sweet Blossom, сладкий и женственный цветочный дизайн, идеально для маленьких девочек. Веселье и красота в воде.',
        en: 'Intex inflatable pool Sweet Blossom, sweet and feminine floral design, perfect for little girls. Fun and beauty in water.'
    },
    'kp37': {
        ro: 'Bazin gonflabil Intex Zesty Lemon Pool I, design proaspăt cu lămâi, aduce o notă de prospețime în activitățile acvatice ale copiilor.',
        ru: 'Надувной бассейн Intex Zesty Lemon Pool I, свежий дизайн с лимонами, привносит нотку свежести в водные занятия детей.',
        en: 'Intex inflatable pool Zesty Lemon Pool I, fresh lemon design, brings a note of freshness to children\'s water activities.'
    },
    'kp38': {
        ro: 'Mască de înot panoramică completă mărime L/XL pentru adulți și adolescenți. Vedere panoramică 180°, respiratie ușoară sub apă.',
        ru: 'Полнолицевая панорамная маска для плавания размер L/XL для взрослых и подростков. Панорамный обзор 180°, легкое дыхание под водой.',
        en: 'Full face panoramic snorkel mask size L/XL for adults and teenagers. 180° panoramic view, easy breathing underwater.'
    },
    'kp39': {
        ro: 'Mască de înot panoramică completă mărime S/M pentru copii și adolescenți. Design ergonomic pentru confort și siguranță maximă.',
        ru: 'Полнолицевая панорамная маска для плавания размер S/M для детей и подростков. Эргономичный дизайн для максимального комфорта и безопасности.',
        en: 'Full face panoramic snorkel mask size S/M for children and teenagers. Ergonomic design for maximum comfort and safety.'
    },
    'kp40': {
        ro: 'Mască de înot panoramică completă mărime XS pentru copii mici. Dimensiuni reduse perfect adaptate pentru fețele copiilor.',
        ru: 'Полнолицевая панорамная маска для плавания размер XS для маленьких детей. Уменьшенные размеры, идеально подходящие для детских лиц.',
        en: 'Full face panoramic snorkel mask size XS for young children. Reduced dimensions perfectly adapted for children\'s faces.'
    },

    // ==============================================
    // ACCESORII ÎNOT (CATEGORIA swim-accessories) - 75 products
    // ==============================================
    'sa1': {
        ro: 'Ochelari de înot "Play" pentru copii 3-8 ani, disponibili în 3 culori. Design ergonomic, etanși și confortabili pentru lecții de înot.',
        ru: 'Очки для плавания "Play" для детей 3-8 лет, доступны в 3 цветах. Эргономичный дизайн, герметичные и удобные для уроков плавания.',
        en: 'Swimming goggles "Play" for children 3-8 years, available in 3 colors. Ergonomic design, waterproof and comfortable for swimming lessons.'
    },
    'sa2': {
        ro: 'Set complet de înot Adventurer pentru copii de 8+ ani, include mască, tub și ochelari. Perfect pentru snorkeling și explorare subacvatică.',
        ru: 'Полный комплект для плавания Adventurer для детей от 8 лет, включает маску, трубку и очки. Идеально для снорклинга и подводных исследований.',
        en: 'Complete Adventurer swim set for children 8+ years, includes mask, snorkel and goggles. Perfect for snorkeling and underwater exploration.'
    },
    'sa3': {
        ro: 'Set de înot Wave Rider pentru copii de 8+ ani, include mască, tub și ochelari. Design ergonomic pentru explorare subacvatică confortabilă.',
        ru: 'Набор для плавания Wave Rider для детей от 8 лет, включает маску, трубку и очки. Эргономичный дизайн для комфортного подводного исследования.',
        en: 'Wave Rider swim set for children 8+ years, includes mask, snorkel and goggles. Ergonomic design for comfortable underwater exploration.'
    },
    'sa4': {
        ro: 'Set de înot Reef Rider pentru adolescenți și adulți de 14+ ani, design avansat pentru snorkeling profesional. Include toate accesoriile necesare.',
        ru: 'Набор для плавания Reef Rider для подростков и взрослых от 14 лет, передовой дизайн для профессионального снорклинга. Включает все необходимые аксессуары.',
        en: 'Reef Rider swim set for teenagers and adults 14+ years, advanced design for professional snorkeling. Includes all necessary accessories.'
    },
    'sa5': {
        ro: 'Ochelari de înot Sport Relay pentru copii de 8+ ani, disponibili în 3 culori. Lenti antifog și etanșeitate perfectă pentru performanță maximă.',
        ru: 'Очки для плавания Sport Relay для детей от 8 лет, доступны в 3 цветах. Линзы с антизапотеванием и идеальная герметичность для максимальной производительности.',
        en: 'Sport Relay swimming goggles for children 8+ years, available in 3 colors. Antifog lenses and perfect seal for maximum performance.'
    },
    'sa6': {
        ro: 'Ochelari de înot Water Sport pentru adolescenți și adulți de 14+ ani, 3 culori disponibile. Design ergonomic pentru antrenamente intense.',
        ru: 'Очки для плавания Water Sport для подростков и взрослых от 14 лет, 3 цвета в наличии. Эргономичный дизайн для интенсивных тренировок.',
        en: 'Water Sport swimming goggles for teenagers and adults 14+ years, 3 colors available. Ergonomic design for intense training.'
    },
    'sa7': {
        ro: 'Ochelari de înot Pro Racing pentru copii de 8+ ani, disponibili în 3 culori. Pentru competiții și antrenamente serioase de înot.',
        ru: 'Очки для плавания Pro Racing для детей от 8 лет, доступны в 3 цветах. Для соревнований и серьезных тренировок по плаванию.',
        en: 'Pro Racing swimming goggles for children 8+ years, available in 3 colors. For competitions and serious swimming training.'
    },
    'sa8': {
        ro: 'Ochelari de înot Pro Master pentru adolescenți și adulți de 14+ ani, 3 culori disponibile. Tehnologie avansată pentru înot competitiv.',
        ru: 'Очки для плавания Pro Master для подростков и взрослых от 14 лет, 3 цвета в наличии. Передовая технология для соревновательного плавания.',
        en: 'Pro Master swimming goggles for teenagers and adults 14+ years, 3 colors available. Advanced technology for competitive swimming.'
    },
    'sa9': {
        ro: 'Mască de înot Sea Scan pentru copii de 8+ ani, disponibilă în 2 modele. Vedere panoramică și etanșeitate perfectă pentru snorkeling.',
        ru: 'Маска для плавания Sea Scan для детей от 8 лет, доступна в 2 моделях. Панорамный обзор и идеальная герметичность для снорклинга.',
        en: 'Sea Scan swim mask for children 8+ years, available in 2 models. Panoramic view and perfect seal for snorkeling.'
    },
    'sa10': {
        ro: 'Tub de înot Easy-Flow Sr. pentru copii de 8+ ani, 2 culori disponibile. Design ergonomic pentru respirație ușoară sub apă.',
        ru: 'Трубка для плавания Easy-Flow Sr. для детей от 8 лет, 2 цвета в наличии. Эргономичный дизайн для легкого дыхания под водой.',
        en: 'Easy-Flow Sr. snorkel for children 8+ years, 2 colors available. Ergonomic design for easy underwater breathing.'
    },
    'sa11': {
        ro: 'Set de înot Surf Rider pentru copii de 8+ ani, include mască, tub și ochelari. Perfect pentru plajă și snorkeling recreativ.',
        ru: 'Набор для плавания Surf Rider для детей от 8 лет, включает маску, трубку и очки. Идеально для пляжа и рекреационного снорклинга.',
        en: 'Surf Rider swim set for children 8+ years, includes mask, snorkel and goggles. Perfect for beach and recreational snorkeling.'
    },
    'sa12': {
        ro: 'Mască de înot Reef Rider pentru adolescenți și adulți de 14+ ani, 2 modele disponibile. Pentru snorkeling în ape adânci.',
        ru: 'Маска для плавания Reef Rider для подростков и взрослых от 14 лет, 2 модели в наличии. Для снорклинга в глубокой воде.',
        en: 'Reef Rider swim mask for teenagers and adults 14+ years, 2 models available. For snorkeling in deep water.'
    },
    'sa13': {
        ro: 'Mască de înot Wave Rider pentru copii de 8+ ani, 2 modele disponibile. Design confortabil pentru ore lungi de snorkeling.',
        ru: 'Маска для плавания Wave Rider для детей от 8 лет, 2 модели в наличии. Удобный дизайн для длительных часов снорклинга.',
        en: 'Wave Rider swim mask for children 8+ years, 2 models available. Comfortable design for long hours of snorkeling.'
    },
    'sa14': {
        ro: 'Bonete de înot din silicon pentru copii de 8+ ani, 3 culori disponibile. Protecție împotriva clorului și confort maxim.',
        ru: 'Шапки для плавания из силикона для детей от 8 лет, 3 цвета в наличии. Защита от хлора и максимальный комфорт.',
        en: 'Silicon swim caps for children 8+ years, 3 colors available. Chlorine protection and maximum comfort.'
    },
    'sa15': {
        ro: 'Cerc gonflabil 107cm cu design fructe tropicale pentru copii de 9+ ani, 3 culori disponibile. Perfect pentru jocuri în apă.',
        ru: 'Надувной круг 107см с дизайном тропических фруктов для детей от 9 лет, 3 цвета в наличии. Идеально для игр в воде.',
        en: 'Inflatable ring 107cm with tropical fruits design for children 9+ years, 3 colors available. Perfect for water games.'
    },
    'sa16': {
        ro: 'Cerc gonflabil "Glazed Donut" 114cm, design original de gogoașă glazurată. Distracție colorată în apă pentru copii și adulți.',
        ru: 'Надувной круг "Glazed Donut" 114см, оригинальный дизайн глазурованного пончика. Красочное веселье в воде для детей и взрослых.',
        en: 'Inflatable ring "Glazed Donut" 114cm, original glazed donut design. Colorful water fun for children and adults.'
    },
    'sa17': {
        ro: 'Cerc gonflabil "Donut" 107x99cm, design clasic de gogoașă. Perfect pentru plutire relaxantă în bazin sau mare.',
        ru: 'Надувной круг "Donut" 107x99см, классический дизайн пончика. Идеально для расслабленного плавания в бассейне или море.',
        en: 'Inflatable ring "Donut" 107x99cm, classic donut design. Perfect for relaxed floating in pool or sea.'
    },
    'sa18': {
        ro: 'Cerc gonflabil Intex "Micuța Stea" pentru copii mici. Design dulce și atrăgător pentru primele experiențe în apă.',
        ru: 'Надувной круг Intex "Маленькая звездочка" для маленьких детей. Сладкий и привлекательный дизайн для первых опытов в воде.',
        en: 'Intex inflatable ring "Little Star" for young children. Sweet and attractive design for first water experiences.'
    },
    'sa19': {
        ro: 'Brațare de înot "Happy Kitten" pentru copii mici. Design cu pisicuțe fericite pentru învățarea înotului în siguranță.',
        ru: 'Нарукавники для плавания "Happy Kitten" для маленьких детей. Дизайн с счастливыми котятами для безопасного обучения плаванию.',
        en: 'Swim armbands "Happy Kitten" for young children. Happy kittens design for safe swimming learning.'
    },
    'sa20': {
        ro: 'Jucărie gonflabilă călărire "Aligator" 170x86cm pentru copii de 3+ ani. Design realist pentru aventuri acvatice imaginative.',
        ru: 'Надувная игрушка-наездник "Аллигатор" 170x86см для детей от 3 лет. Реалистичный дизайн для воображаемых водных приключений.',
        en: 'Inflatable ride-on "Alligator" 170x86cm for children 3+ years. Realistic design for imaginative water adventures.'
    },
    'sa21': {
        ro: 'Plută gonflabilă "Flamingo" 142x137x97cm pentru copii de 3+ ani. Design elegant roz pentru distracție stilată în apă.',
        ru: 'Надувной плот "Фламинго" 142x137x97см для детей от 3 лет. Элегантный розовый дизайн для стильного веселья в воде.',
        en: 'Inflatable raft "Flamingo" 142x137x97cm for children 3+ years. Elegant pink design for stylish water fun.'
    },
    'sa22': {
        ro: 'Plută gonflabilă "Unicorn" 201x140x97cm, design magic cu unicorni. Perfect pentru fete și iubitorii de fantezie.',
        ru: 'Надувной плот "Единорог" 201x140x97см, волшебный дизайн с единорогами. Идеально для девочек и любителей фантазии.',
        en: 'Inflatable raft "Unicorn" 201x140x97cm, magical unicorn design. Perfect for girls and fantasy lovers.'
    },
    'sa23': {
        ro: 'Plută gonflabilă "Llama" 135x94x112cm pentru copii de 3+ ani. Design adorabil cu lame pentru distracție unică în apă.',
        ru: 'Надувной плот "Лама" 135x94x112см для детей от 3 лет. Очаровательный дизайн с ламами для уникального веселья в воде.',
        en: 'Inflatable raft "Llama" 135x94x112cm for children 3+ years. Adorable llama design for unique water fun.'
    },
    'sa24': {
        ro: 'Cerc gonflabil transparent 97cm cu mânere pentru copii de 9+ ani, 3 modele disponibile. Vedere subacvatică prin materialul transparent.',
        ru: 'Прозрачный надувной круг 97см с ручками для детей от 9 лет, 3 модели в наличии. Подводный обзор через прозрачный материал.',
        en: 'Transparent inflatable ring 97cm with handles for children 9+ years, 3 models available. Underwater view through transparent material.'
    },
    'sa25': {
        ro: 'Jucărie gonflabilă călărire "Crocodil" 168x86cm pentru copii de 3+ ani. Design amenințător dar sigur pentru aventuri acvatice.',
        ru: 'Надувная игрушка-наездник "Крокодил" 168x86см для детей от 3 лет. Угрожающий, но безопасный дизайн для водных приключений.',
        en: 'Inflatable ride-on "Crocodile" 168x86cm for children 3+ years. Threatening but safe design for water adventures.'
    },
    'sa26': {
        ro: 'Jucărie gonflabilă călărire "Cosaț" 193x119cm pentru copii de 3+ ani. Design impresionant de orcă pentru explorare acvatică.',
        ru: 'Надувная игрушка-наездник "Касатка" 193x119см для детей от 3 лет. Впечатляющий дизайн косатки для водных исследований.',
        en: 'Inflatable ride-on "Orca" 193x119cm for children 3+ years. Impressive orca design for aquatic exploration.'
    },
    'sa27': {
        ro: 'Set de jucării gonflabile pentru apă, 4 modele diferite. Perfect pentru jocuri creative în bazin sau pe plajă.',
        ru: 'Набор надувных игрушек для воды, 4 разные модели. Идеально для творческих игр в бассейне или на пляже.',
        en: 'Set of inflatable water toys, 4 different models. Perfect for creative games in pool or on beach.'
    },
    'sa28': {
        ro: 'Brațare "Deluxe" 30x15cm pentru copii de 6-12 ani. Dimensiuni mari pentru siguranță sporită la înot.',
        ru: 'Нарукавники "Deluxe" 30x15см для детей 6-12 лет. Большие размеры для повышенной безопасности при плавании.',
        en: 'Armbands "Deluxe" 30x15cm for children 6-12 years. Large dimensions for increased swimming safety.'
    },
    'sa29': {
        ro: 'Brațare "Deluxe" 23x15cm pentru copii de 3-6 ani. Dimensiuni potrivite pentru copii mici care învață să înoate.',
        ru: 'Нарукавники "Deluxe" 23x15см для детей 3-6 лет. Подходящие размеры для маленьких детей, обучающихся плаванию.',
        en: 'Armbands "Deluxe" 23x15cm for children 3-6 years. Suitable dimensions for young children learning to swim.'
    },
    'sa30': {
        ro: 'Brațare "Underwater World" 23x15cm pentru copii de 3-6 ani. Design subacvatic colorat pentru stimularea imaginației.',
        ru: 'Нарукавники "Underwater World" 23x15см для детей 3-6 лет. Красочный подводный дизайн для стимулирования воображения.',
        en: 'Armbands "Underwater World" 23x15cm for children 3-6 years. Colorful underwater design for imagination stimulation.'
    },
    'sa31': {
        ro: 'Vestă de înot "Deluxe" 50x47cm pentru copii de 3-6 ani. Siguranță maximă cu design ergonomic pentru înot confortabil.',
        ru: 'Жилет для плавания "Deluxe" 50x47см для детей 3-6 лет. Максимальная безопасность с эргономичным дизайном для комфортного плавания.',
        en: 'Life vest "Deluxe" 50x47cm for children 3-6 years. Maximum safety with ergonomic design for comfortable swimming.'
    },
    'sa32': {
        ro: 'Saltea gonflabilă pentru plajă "Rainbow Popsicle" 183x66x20cm. Design colorat de înghețată pentru relaxare la soare.',
        ru: 'Надувной матрас для пляжа "Rainbow Popsicle" 183x66x20см. Красочный дизайн мороженого для релаксации на солнце.',
        en: 'Inflatable beach mat "Rainbow Popsicle" 183x66x20cm. Colorful ice cream design for sun relaxation.'
    },
    'sa33': {
        ro: 'Minge de plajă 51cm pentru copii de 3+ ani. Perfectă pentru jocuri pe plajă sau în apă, ușor de folosit.',
        ru: 'Пляжный мяч 51см для детей от 3 лет. Идеально для игр на пляже или в воде, легко использовать.',
        en: 'Beach ball 51cm for children 3+ years. Perfect for beach or water games, easy to use.'
    },
    'sa34': {
        ro: 'Minge de plajă 51cm, 3 modele diferite pentru copii de 3+ ani. Varietate pentru distracție pe plajă.',
        ru: 'Пляжный мяч 51см, 3 разные модели для детей от 3 лет. Разнообразие для пляжного веселья.',
        en: 'Beach ball 51cm, 3 different models for children 3+ years. Variety for beach fun.'
    },
    'sa35': {
        ro: 'Cerc gonflabil "Animals" detașabil pentru copii de 3-6 ani, 3 modele disponibile. Design cu animale pentru jocuri imaginative.',
        ru: 'Разъемный надувной круг "Animals" для детей 3-6 лет, 3 модели в наличии. Дизайн с животными для творческих игр.',
        en: 'Detachable inflatable ring "Animals" for children 3-6 years, 3 models available. Animal design for imaginative games.'
    },
    'sa36': {
        ro: 'Cerc gonflabil 51cm pentru copii de 3-6 ani, 3 modele disponibile. Dimensiuni perfecte pentru copii mici.',
        ru: 'Надувной круг 51см для детей 3-6 лет, 3 модели в наличии. Идеальные размеры для маленьких детей.',
        en: 'Inflatable ring 51cm for children 3-6 years, 3 models available. Perfect dimensions for young children.'
    },
    'sa37': {
        ro: 'Cerc gonflabil 61cm pentru copii de 6-10 ani, 3 modele disponibile. Dimensiuni mai mari pentru copii mai mari.',
        ru: 'Надувной круг 61см для детей 6-10 лет, 3 модели в наличии. Большие размеры для детей постарше.',
        en: 'Inflatable ring 61cm for children 6-10 years, 3 models available. Larger dimensions for older children.'
    },
    'sa38': {
        ro: 'Cerc gonflabil transparent 61cm pentru copii de 6-10 ani, 3 modele disponibile. Material transparent pentru vizibilitate subacvatică.',
        ru: 'Прозрачный надувной круг 61см для детей 6-10 лет, 3 модели в наличии. Прозрачный материал для подводной видимости.',
        en: 'Transparent inflatable ring 61cm for children 6-10 years, 3 models available. Transparent material for underwater visibility.'
    },
    'sa39': {
        ro: 'Cerc gonflabil 91cm "Clear Color" pentru copii de 9+ ani, 3 culori disponibile. Culori vibrante și strălucitoare.',
        ru: 'Надувной круг 91см "Clear Color" для детей от 9 лет, 3 цвета в наличии. Яркие и блестящие цвета.',
        en: 'Inflatable ring 91cm "Clear Color" for children 9+ years, 3 colors available. Vibrant and shiny colors.'
    },
    'sa40': {
        ro: 'Cerc gonflabil 91cm "Tire" pentru copii de 9+ ani. Design realistic de anvelopă pentru jocuri acvatice creative.',
        ru: 'Надувной круг 91см "Tire" для детей от 9 лет. Реалистичный дизайн шины для творческих водных игр.',
        en: 'Inflatable ring 91cm "Tire" for children 9+ years. Realistic tire design for creative water games.'
    },
    'sa41': {
        ro: 'Cerc gonflabil 91cm "Bright Stars" pentru copii de 9+ ani, 3 culori disponibile. Design cu stele strălucitoare pentru distracție nocturnă.',
        ru: 'Надувной круг 91см "Bright Stars" для детей от 9 лет, 3 цвета в наличии. Дизайн со светящимися звездами для ночного веселья.',
        en: 'Inflatable ring 91cm "Bright Stars" for children 9+ years, 3 colors available. Glowing stars design for night fun.'
    },
    'sa42': {
        ro: 'Cerc gonflabil 76cm "Glossy" cu mânere pentru copii de 8+ ani, 3 culori disponibile. Suprafață lucioasă pentru aspect premium.',
        ru: 'Надувной круг 76см "Glossy" с ручками для детей от 8 лет, 3 цвета в наличии. Глянцевая поверхность для премиум-вида.',
        en: 'Inflatable ring 76cm "Glossy" with handles for children 8+ years, 3 colors available. Glossy surface for premium look.'
    },
    'sa43': {
        ro: 'Cerc gonflabil 76cm "Transparent" pentru copii de 8+ ani, 3 culori disponibile. Material transparent pentru vedere subacvatică.',
        ru: 'Прозрачный надувной круг 76см для детей от 8 лет, 3 цвета в наличии. Прозрачный материал для подводного обзора.',
        en: 'Inflatable ring 76cm "Transparent" for children 8+ years, 3 colors available. Transparent material for underwater view.'
    },
    'sa44': {
        ro: 'Cerc gonflabil 91cm "Neon Cold" pentru copii de 9+ ani, 3 culori disponibile. Culori neon pentru vizibilitate maximă.',
        ru: 'Надувной круг 91см "Neon Cold" для детей от 9 лет, 3 цвета в наличии. Неоновые цвета для максимальной видимости.',
        en: 'Inflatable ring 91cm "Neon Cold" for children 9+ years, 3 colors available. Neon colors for maximum visibility.'
    },
    'sa45': {
        ro: 'Cerc gonflabil "Cute Animals" pentru copii. Design cu animale drăguțe pentru stimularea imaginației în timpul înotului.',
        ru: 'Надувной круг "Cute Animals" для детей. Дизайн с милыми животными для стимулирования воображения во время плавания.',
        en: 'Inflatable ring "Cute Animals" for children. Cute animals design for imagination stimulation during swimming.'
    },
    'sa46': {
        ro: 'Cerc gonflabil cu scaun și spătar "Animals" pentru copii de 3-4 ani. Susținere completă pentru înot în siguranță.',
        ru: 'Надувной круг с сиденьем и спинкой "Animals" для детей 3-4 лет. Полная поддержка для безопасного плавания.',
        en: 'Inflatable ring with seat and backrest "Animals" for children 3-4 years. Complete support for safe swimming.'
    },
    'sa47': {
        ro: 'Cerc gonflabil cu scaun și spătar "My Baby Float" pentru copii de 1-2 ani, până la 15kg. Design sigur pentru prima experiență în apă.',
        ru: 'Надувной круг с сиденьем и спинкой "My Baby Float" для детей 1-2 лет, до 15кг. Безопасный дизайн для первого опыта в воде.',
        en: 'Inflatable ring with seat and backrest "My Baby Float" for children 1-2 years, up to 15kg. Safe design for first water experience.'
    },
    'sa48': {
        ro: 'Cerc gonflabil cu scaun și spătar pentru copii de 1-2 ani, 3 modele disponibile, până la 11kg. Varietate de design pentru copii mici.',
        ru: 'Надувной круг с сиденьем и спинкой для детей 1-2 лет, 3 модели в наличии, до 11кг. Разнообразие дизайнов для маленьких детей.',
        en: 'Inflatable ring with seat and backrest for children 1-2 years, 3 models available, up to 11kg. Design variety for young children.'
    },
    'sa49': {
        ro: 'Set de 2 vâsle din plastic 122cm pentru bărci gonflabile. Rezistență și ușurință în utilizare pentru manevrare precisă.',
        ru: 'Комплект из 2 пластиковых весел 122см для надувных лодок. Прочность и легкость в использовании для точного маневрирования.',
        en: 'Set of 2 plastic oars 122cm for inflatable boats. Durability and ease of use for precise maneuvering.'
    },
    'sa50': {
        ro: 'Kit de reparații universal pentru produse gonflabile. Include toate necesarele pentru reparații rapide și eficiente.',
        ru: 'Универсальный ремонтный комплект для надувных изделий. Включает все необходимое для быстрого и эффективного ремонта.',
        en: 'Universal repair kit for inflatable products. Includes everything needed for quick and efficient repairs.'
    },
    'sa51': {
        ro: 'Brațare 25x17cm pentru copii de 6-12 ani. Dimensiuni standard pentru siguranță în apă a copiilor mai mari.',
        ru: 'Нарукавники 25x17см для детей 6-12 лет. Стандартные размеры для безопасности в воде детей постарше.',
        en: 'Armbands 25x17cm for children 6-12 years. Standard dimensions for water safety of older children.'
    },
    'sa52': {
        ro: 'Vestă de înot "Tropical Friends" 41x30cm pentru copii de 3-5 ani. Design tropical pentru distracție în siguranță în apă.',
        ru: 'Жилет для плавания "Tropical Friends" 41x30см для детей 3-5 лет. Тропический дизайн для безопасного веселья в воде.',
        en: 'Life vest "Tropical Friends" 41x30cm for children 3-5 years. Tropical design for safe water fun.'
    },
    'sa53': {
        ro: 'Saltea gonflabilă de înot 183x69cm, 3 culori disponibile. Perfectă pentru relaxare în bazin sau pe apă.',
        ru: 'Надувной матрас для плавания 183x69см, 3 цвета в наличии. Идеально для релаксации в бассейне или на воде.',
        en: 'Inflatable float mat 183x69cm, 3 colors available. Perfect for relaxation in pool or on water.'
    },
    'sa54': {
        ro: 'Saltea gonflabilă de înot 183x69cm, 3 modele disponibile. Varietate de design pentru preferințe diferite.',
        ru: 'Надувной матрас для плавания 183x69см, 3 модели в наличии. Разнообразие дизайнов для разных предпочтений.',
        en: 'Inflatable float mat 183x69cm, 3 models available. Design variety for different preferences.'
    },
    'sa55': {
        ro: 'Saltea gonflabilă de înot 188x71cm cu fereastră pentru adolescenți și adulți de 14+ ani, 2 culori disponibile. Vedere subacvatică prin fereastră.',
        ru: 'Надувной матрас для плавания 188x71см с окном для подростков и взрослых от 14 лет, 2 цвета в наличии. Подводный обзор через окно.',
        en: 'Inflatable float mat 188x71cm with window for teenagers and adults 14+ years, 2 colors available. Underwater view through window.'
    },
    'sa56': {
        ro: 'Saltea gonflabilă de înot 188x71cm cu fereastră pentru adolescenți și adulți de 14+ ani, 2 culori disponibile (model alternativ).',
        ru: 'Надувной матрас для плавания 188x71см с окном для подростков и взрослых от 14 лет, 2 цвета в наличии (альтернативная модель).',
        en: 'Inflatable float mat 188x71cm with window for teenagers and adults 14+ years, 2 colors available (alternative model).'
    },
    'sa57': {
        ro: 'Set de 2 vâsle din aluminiu 137cm pentru bărci. Rezistență sporită și performanță superioară față de modelele din plastic.',
        ru: 'Комплект из 2 алюминиевых весел 137см для лодок. Повышенная прочность и превосходная производительность по сравнению с пластиковыми моделями.',
        en: 'Set of 2 aluminum oars 137cm for boats. Increased durability and superior performance compared to plastic models.'
    },
    'sa58': {
        ro: 'Set de înot (bureți și cleme nas) pentru copii de 8+ ani. Protecție împotriva apei în timpul înotului.',
        ru: 'Набор для плавания (беруши и зажим для носа) для детей от 8 лет. Защита от воды во время плавания.',
        en: 'Swim set (earplugs and nose clip) for children 8+ years. Water protection during swimming.'
    },
    'sa59': {
        ro: 'Bonete de înot din silicon pentru copii de 8+ ani, 3 culori disponibile (model alternativ).',
        ru: 'Шапки для плавания из силикона для детей от 8 лет, 3 цвета в наличии (альтернативная модель).',
        en: 'Silicon swim caps for children 8+ years, 3 colors available (alternative model).'
    },
    'sa60': {
        ro: 'Cerc gonflabil "Donut Heart" 94x89x25cm pentru copii de 9+ ani, până la 80kg. Design romantic cu inimioară pentru distracție acvatică.',
        ru: 'Надувной круг "Donut Heart" 94x89x25см для детей от 9 лет, до 80кг. Романтичный дизайн с сердечком для водного веселья.',
        en: 'Inflatable ring "Donut Heart" 94x89x25cm for children 9+ years, up to 80kg. Romantic heart design for aquatic fun.'
    },
    'sa61': {
        ro: 'Cerc gonflabil "Transparent Shine" 107x27cm. Material transparent cu efect strălucitor pentru aspect unic în apă.',
        ru: 'Надувной круг "Transparent Shine" 107x27см. Прозрачный материал с блестящим эффектом для уникального вида в воде.',
        en: 'Inflatable ring "Transparent Shine" 107x27cm. Transparent material with shiny effect for unique appearance in water.'
    },
    'sa62': {
        ro: 'Brațare gonflabile 23x15cm pentru copii de 3-6 ani. Ușor de umflat și ajustat pentru potrivire perfectă.',
        ru: 'Надувные нарукавники 23x15см для детей 3-6 лет. Легко надуваются и регулируются для идеальной посадки.',
        en: 'Inflatable armbands 23x15cm for children 3-6 years. Easy to inflate and adjust for perfect fit.'
    },
    'sa63': {
        ro: 'Jucărie gonflabilă călărire "Cosaț" 152x114cm pentru copii de 3+ ani, până la 40kg. Design impresionant pentru aventuri acvatice.',
        ru: 'Надувная игрушка-наездник "Касатка" 152x114см для детей от 3 лет, до 40кг. Впечатляющий дизайн для водных приключений.',
        en: 'Inflatable ride-on "Orca" 152x114cm for children 3+ years, up to 40kg. Impressive design for water adventures.'
    },
    'sa64': {
        ro: 'Vestă de înot pentru copii de 3-6 ani. Siguranță și confort pentru învățarea înotului.',
        ru: 'Жилет для плавания для детей 3-6 лет. Безопасность и комфорт для обучения плаванию.',
        en: 'Life vest for children 3-6 years. Safety and comfort for swimming learning.'
    },
    'sa65': {
        ro: 'Saltea gonflabilă de înot "Sweet Heart" 155x135x25cm. Design romantic cu inimi pentru relaxare acvatică.',
        ru: 'Надувной матрас для плавания "Sweet Heart" 155x135x25см. Романтичный дизайн с сердцами для водной релаксации.',
        en: 'Inflatable float mat "Sweet Heart" 155x135x25cm. Romantic heart design for aquatic relaxation.'
    },
    'sa66': {
        ro: 'Saltea gonflabilă de înot "Wind-Up Van" 178x91x23cm. Design vintage de dubiță pentru distracție nostalgică în apă.',
        ru: 'Надувной матрас для плавания "Wind-Up Van" 178x91x23см. Винтажный дизайн фургона для ностальгического веселья в воде.',
        en: 'Inflatable float mat "Wind-Up Van" 178x91x23cm. Vintage van design for nostalgic water fun.'
    },
    'sa67': {
        ro: 'Saltea gonflabilă de înot "Rainbow Clouds" 175x117x20cm, până la 100kg. Design colorat cu curcubee și nori pentru vise acvatice.',
        ru: 'Надувной матрас для плавания "Rainbow Clouds" 175x117x20см, до 100кг. Красочный дизайн с радугами и облаками для водных грез.',
        en: 'Inflatable float mat "Rainbow Clouds" 175x117x20cm, up to 100kg. Colorful rainbow and clouds design for aquatic dreams.'
    },
    'sa68': {
        ro: 'Saltea gonflabilă de înot "Cactus" 180x130x28cm, până la 100kg. Design desertic original pentru stil în apă.',
        ru: 'Надувной матрас для плавания "Cactus" 180x130x28см, до 100кг. Оригинальный пустынный дизайн для стиля в воде.',
        en: 'Inflatable float mat "Cactus" 180x130x28cm, up to 100kg. Original desert design for style in water.'
    },
    'sa69': {
        ro: 'Cerc gonflabil "Big Wonder" pentru copii de 3-6 ani, 3 modele disponibile. Dimensiuni mari pentru distracție maximă.',
        ru: 'Надувной круг "Big Wonder" для детей 3-6 лет, 3 модели в наличии. Большие размеры для максимального веселья.',
        en: 'Inflatable ring "Big Wonder" for children 3-6 years, 3 models available. Large dimensions for maximum fun.'
    },
    'sa70': {
        ro: 'Cerc gonflabil "Whimsical Magic" 81cm pentru copii de 8+ ani, 3 modele disponibile. Design magic și capricios pentru jocuri imaginative.',
        ru: 'Надувной круг "Whimsical Magic" 81см для детей от 8 лет, 3 модели в наличии. Волшебный и капризный дизайн для творческих игр.',
        en: 'Inflatable ring "Whimsical Magic" 81cm for children 8+ years, 3 models available. Magical and whimsical design for imaginative games.'
    },
    'sa71': {
        ro: 'Jucării gonflabile pentru apă, 4 modele diferite (Intex). Calitate superioară pentru distracție durabilă.',
        ru: 'Надувные игрушки для воды, 4 разные модели (Intex). Высокое качество для долговечного веселья.',
        en: 'Inflatable water toys, 4 different models (Intex). Superior quality for durable fun.'
    },
    'sa72': {
        ro: 'Vestă de înot "Blue Lagoon" 41x30cm pentru copii de 3-5 ani. Design lagună albastră pentru aventuri acvatice sigure.',
        ru: 'Жилет для плавания "Blue Lagoon" 41x30см для детей 3-5 лет. Дизайн голубой лагуны для безопасных водных приключений.',
        en: 'Life vest "Blue Lagoon" 41x30cm for children 3-5 years. Blue lagoon design for safe water adventures.'
    },
    'sa73': {
        ro: 'Mască de înot panoramică completă mărime L/XL pentru adulți și adolescenți. Vedere panoramică 180° pentru explorare subacvatică.',
        ru: 'Полнолицевая панорамная маска для плавания размер L/XL для взрослых и подростков. Панорамный обзор 180° для подводных исследований.',
        en: 'Full face panoramic snorkel mask size L/XL for adults and teenagers. 180° panoramic view for underwater exploration.'
    },
    'sa74': {
        ro: 'Mască de înot panoramică completă mărime S/M pentru copii și adolescenți. Design ergonomic pentru confort pe termen lung.',
        ru: 'Полнолицевая панорамная маска для плавания размер S/M для детей и подростков. Эргономичный дизайн для длительного комфорта.',
        en: 'Full face panoramic snorkel mask size S/M for children and teenagers. Ergonomic design for long-term comfort.'
    },
    'sa75': {
        ro: 'Mască de înot panoramică completă mărime XS pentru copii mici. Dimensiuni perfecte pentru fețele mici ale copiilor.',
        ru: 'Полнолицевая панорамная маска для плавания размер XS для маленьких детей. Идеальные размеры для маленьких детских лиц.',
        en: 'Full face panoramic snorkel mask size XS for young children. Perfect dimensions for small children\'s faces.'
    },

    // ==============================================
    // SALTELE GONFLABILE (CATEGORIA inflatable-mattresses) - 31 products
    // ==============================================
    'im1': {
        ro: 'Kit de reparații universal pentru saltele și produse gonflabile, include plasturi și lipici rezistent la apă pentru reparații durabile.',
        ru: 'Универсальный ремонтный комплект для матрасов и надувных изделий, включает заплатки и водостойкий клей для долговечного ремонта.',
        en: 'Universal repair kit for mattresses and inflatable products, includes patches and waterproof adhesive for durable repairs.'
    },
    'im2': {
        ro: 'Saltea gonflabilă Deluxe Single-High 137x191x25cm, comfort premium pentru oaspeți și călătorii. Suprafață din vinil rezistent și durabil.',
        ru: 'Надувной матрас Deluxe Single-High 137x191x25см, премиум комфорт для гостей и путешествий. Поверхность из прочного и долговечного винила.',
        en: 'Deluxe Single-High inflatable mattress 137x191x25cm, premium comfort for guests and travel. Durable vinyl surface.'
    },
    'im3': {
        ro: 'Saltea gonflabilă Deluxe Single-High 152x203x25cm, dimensiuni extinse pentru comfort sporit. Perfectă pentru oaspeți și camping.',
        ru: 'Надувной матрас Deluxe Single-High 152x203x25см, расширенные размеры для повышенного комфорта. Идеально для гостей и кемпинга.',
        en: 'Deluxe Single-High inflatable mattress 152x203x25cm, extended dimensions for enhanced comfort. Perfect for guests and camping.'
    },
    'im4': {
        ro: 'Saltea gonflabilă Prestige 99x191x25cm, până la 136kg. Calitate premium pentru somn confortabil și suport optimal.',
        ru: 'Надувной матрас Prestige 99x191x25см, до 136кг. Премиум качество для комфортного сна и оптимальной поддержки.',
        en: 'Prestige inflatable mattress 99x191x25cm, up to 136kg. Premium quality for comfortable sleep and optimal support.'
    },
        'im5': {
        ro: 'Pat gonflabil 99x191x30cm cu pernă și pompă încorporată 220V. Comfort sporit cu suport lombar și umflare/deumflare electrică rapidă.',
        ru: 'Надувная кровать 99x191x30см с подголовником и встроенным насосом 220V. Повышенный комфорт с поясничной поддержкой и быстрой электрической накачкой/сдуванием.',
        en: 'Inflatable bed 99x191x30cm with pillow and built-in 220V pump. Enhanced comfort with lumbar support and quick electric inflation/deflation.'
    },
    'im6': {
        ro: 'Pat gonflabil dublu 152x203x30cm cu pompă încorporată 220V. Spațiu generos pentru două persoane, ideal pentru oaspeți sau camping.',
        ru: 'Двуспальная надувная кровать 152x203x30см со встроенным насосом 220V. Щедрое пространство для двух человек, идеально для гостей или кемпинга.',
        en: 'Double inflatable bed 152x203x30cm with built-in 220V pump. Generous space for two people, ideal for guests or camping.'
    },
    'im7': {
        ro: 'Pat gonflabil Pillow Rest Raised Bed 99x191x42cm cu pernă și pompă 220V. Înălțime crescută pentru ușurință în a se ridica și a se așeza.',
        ru: 'Надувная кровать Pillow Rest Raised Bed 99x191x42см с подголовником и насосом 220V. Увеличенная высота для легкости вставании и укладывании.',
        en: 'Inflatable bed Pillow Rest Raised 99x191x42cm with pillow and 220V pump. Increased height for easy getting up and down.'
    },
    'im8': {
        ro: 'Pat gonflabil Pillow Rest Raised Bed 152x203x42cm cu pernă și pompă 220V. Dimensiuni mari cu înălțime crescută pentru comfort maxim.',
        ru: 'Надувная кровать Pillow Rest Raised Bed 152x203x42см с подголовником и насосом 220V. Большие размеры с увеличенной высотой для максимального комфорта.',
        en: 'Inflatable bed Pillow Rest Raised 152x203x42cm with pillow and 220V pump. Large dimensions with increased height for maximum comfort.'
    },
    'im9': {
        ro: 'Pat gonflabil Deluxe Pillow Rest Raised Bed 99x191x42cm cu pompă 220V. Combinație de comfort și durabilitate pentru o experiență de somn excelentă.',
        ru: 'Надувная кровать Deluxe Pillow Rest Raised Bed 99x191x42см с насосом 220V. Сочетание комфорта и долговечности для отличного сна.',
        en: 'Inflatable bed Deluxe Pillow Rest Raised 99x191x42cm with 220V pump. Combination of comfort and durability for excellent sleep experience.'
    },
    'im10': {
        ro: 'Pat gonflabil Deluxe Pillow Rest Raised Bed 152x203x42cm cu pompă 220V. Variantă dublă delux pentru oaspeți exigenti.',
        ru: 'Надувная кровать Deluxe Pillow Rest Raised Bed 152x203x42см с насосом 220V. Двуспальный делюкс вариант для требовательных гостей.',
        en: 'Inflatable bed Deluxe Pillow Rest Raised 152x203x42cm with 220V pump. Double deluxe version for demanding guests.'
    },
    'im11': {
        ro: 'Saltea gonflabilă cu pernă Pillow Rest Classic Bed Fiber-Tech 137x191x25cm. Tehnologie Fiber-Tech pentru suport superior și durabilitate.',
        ru: 'Надувной матрас с подголовником Pillow Rest Classic Bed Fiber-Tech, 137x191x25см. Технология Fiber-Tech для превосходной поддержки и долговечности.',
        en: 'Inflatable mattress with pillow Pillow Rest Classic Bed Fiber-Tech 137x191x25cm. Fiber-Tech technology for superior support and durability.'
    },
    'im12': {
        ro: 'Saltea gonflabilă Pillow Rest Classic Fiber-Tech 152x203x25cm. Construcție rezistentă cu puncte de sudură interioare pentru stabilitate.',
        ru: 'Надувной матрас Pillow Rest Classic Fiber-Tech, 152x203x25см. Прочная конструкция с внутренними сварочными точками для устойчивости.',
        en: 'Inflatable mattress Pillow Rest Classic Fiber-Tech 152x203x25cm. Durable construction with internal weld points for stability.'
    },
    'im13': {
        ro: 'Saltea gonflabilă cu pernă Pillow Rest Classic Bed Fiber-Tech 183x203x25cm. Dimensiuni extinse pentru oaspeți sau persoane înalte.',
        ru: 'Надувной матрас с подголовником Pillow Rest Classic Bed Fiber-Tech, 183x203x25см. Расширенные размеры для гостей или высоких людей.',
        en: 'Inflatable mattress with pillow Pillow Rest Classic Bed Fiber-Tech 183x203x25cm. Extended dimensions for guests or tall people.'
    },
    'im14': {
        ro: 'Pat gonflabil (saltea) Intex 152x203x30cm. Versiune simplă și eficientă pentru uz ocazional sau de rezervă.',
        ru: 'Надувная кровать (матрас) Intex 152x203x30см. Простая и эффективная версия для случайного или резервного использования.',
        en: 'Inflatable bed (mattress) Intex 152x203x30cm. Simple and efficient version for occasional or backup use.'
    },
    'im15': {
        ro: 'Pat gonflabil Comfort-Plush 99x191x46cm cu pompă 220V. Suprafață plușată pentru un comfort de hotel și suport lombar excelent.',
        ru: 'Надувная кровать Comfort-Plush 99x191x46см с насосом 220V. Плюшевая поверхность для комфорта как в отеле и отличной поясничной поддержки.',
        en: 'Inflatable bed Comfort-Plush 99x191x46cm with 220V pump. Plush surface for hotel-like comfort and excellent lumbar support.'
    },
    'im16': {
        ro: 'Pat gonflabil Comfort-Plush 152x203x46cm cu pompă 220V. Dimensiuni duble cu luxul suprafeței plușate pentru un somn de calitate.',
        ru: 'Надувная кровать Comfort-Plush 152x203x46см с насосом 220V. Двуспальные размеры с роскошью плюшевой поверхности для качественного сна.',
        en: 'Inflatable bed Comfort-Plush 152x203x46cm with 220V pump. Double size with the luxury of plush surface for quality sleep.'
    },
    'im17': {
        ro: 'Pat gonflabil Comfort-Plush 152x203x56cm cu pompă 220V. Înălțime extremă pentru cei care preferă un pat mai înalt, cu comfort premium.',
        ru: 'Надувная кровать Comfort-Plush 152x203x56см с насосом 220V. Экстремальная высота для тех, кто предпочитает более высокую кровать, с премиум комфортом.',
        en: 'Inflatable bed Comfort-Plush 152x203x56cm with 220V pump. Extreme height for those who prefer a higher bed, with premium comfort.'
    },
    'im18': {
        ro: 'Pat gonflabil Intex Ultra Plush Bed (Twin) 99x191x46cm cu pompă 220V. Tehnologie avansată pentru o experiență de somn ultra-confortabilă.',
        ru: 'Надувная кровать Intex Ultra Plush Bed (Twin) 99x191x46см с насосом 220V. Передовая технология для сверхкомфортного сна.',
        en: 'Inflatable bed Intex Ultra Plush (Twin) 99x191x46cm with 220V pump. Advanced technology for ultra-comfortable sleep experience.'
    },
    'im19': {
        ro: 'Pat gonflabil Ultra Plush Bed 152x203x46cm cu pompă 220V. Varianta dublă a modelului Ultra Plush, pentru comfort maxim pentru două persoane.',
        ru: 'Надувная кровать Ultra Plush Bed 152x203x46см с насосом 220V. Двуспальный вариант модели Ultra Plush для максимального комфорта двух человек.',
        en: 'Inflatable bed Ultra Plush 152x203x46cm with 220V pump. Double version of the Ultra Plush model for maximum comfort for two people.'
    },
    'im20': {
        ro: 'Pat gonflabil Headboard Airbed 152x236x86cm cu spătar și pompă 220V. Design de pat complet cu spătar integrat pentru un aspect de pat real.',
        ru: 'Надувная кровать Headboard Airbed 152x236x86см со спинкой и насосом 220V. Дизайн полной кровати с интегрированной спинкой для вида настоящей кровати.',
        en: 'Inflatable bed Headboard Airbed 152x236x86cm with backrest and 220V pump. Full bed design with integrated headboard for a real bed look.'
    },
    'im21': {
        ro: 'Saltea gonflabilă Classic Downy Bed 183x203x25cm. Suprafață moale și confortabilă pentru somn relaxant, ușor de transportat și depozitat.',
        ru: 'Надувной матрас Classic Downy Bed, 183x203x25см. Мягкая и удобная поверхность для расслабленного сна, легко транспортировать и хранить.',
        en: 'Inflatable mattress Classic Downy Bed 183x203x25cm. Soft and comfortable surface for relaxed sleep, easy to transport and store.'
    },
    'im22': {
        ro: 'Saltea gonflabilă Classic Downy Bed 99x191x25cm. Dimensiuni individuale pentru o singură persoană, ideal pentru copii sau adulți solo.',
        ru: 'Надувной матрас Classic Downy Bed, 99x191x25см. Индивидуальные размеры для одного человека, идеально для детей или взрослых одиночек.',
        en: 'Inflatable mattress Classic Downy Bed 99x191x25cm. Single dimensions for one person, ideal for children or solo adults.'
    },
    'im23': {
        ro: 'Saltea gonflabilă Classic Downy Bed 137x191x25cm. Mărime intermediară între single și dublu, pentru cei care au nevoie de puțin mai mult spațiu.',
        ru: 'Надувной матрас Classic Downy Bed, 137x191x25см. Промежуточный размер между односпальным и двуспальным, для тех, кому нужно немного больше места.',
        en: 'Inflatable mattress Classic Downy Bed 137x191x25cm. Intermediate size between single and double, for those who need a little more space.'
    },
    'im24': {
        ro: 'Saltea gonflabilă Classic Downy Bed 152x203x25cm. Dimensiuni duble standard pentru oaspeți sau utilizare regulată.',
        ru: 'Надувной матрас Classic Downy Bed, 152x203x25см. Стандартные двуспальные размеры для гостей или регулярного использования.',
        en: 'Inflatable mattress Classic Downy Bed 152x203x25cm. Standard double dimensions for guests or regular use.'
    },
    'im25': {
        ro: 'Saltea gonflabilă Downy Bed 99x191x25cm cu pompă picior încorporată. Umflare rapidă și ușoară fără necesitatea unei pompe electrice.',
        ru: 'Надувной матрас Downy Bed, 99x191x25см, со встроенным ножным насосом. Быстрая и легкая накачка без необходимости в электрическом насосе.',
        en: 'Inflatable mattress Downy Bed 99x191x25cm with built-in foot pump. Quick and easy inflation without the need for an electric pump.'
    },
    'im26': {
        ro: 'Saltea gonflabilă Downy Bed 152x203x22cm cu pompă picior încorporată. Varianta dublă cu pompă picior, ideală pentru călătorii fără acces la electricitate.',
        ru: 'Надувной матрас Downy Bed, 152x203x22см, со встроенным ножным насосом. Двуспальный вариант с ножным насосом, идеально для путешествий без доступа к электричеству.',
        en: 'Inflatable mattress Downy Bed 152x203x22cm with built-in foot pump. Double version with foot pump, ideal for travel without electricity access.'
    },
    'im27': {
        ro: 'Saltea gonflabilă Classic Downy Bed 152x203x25cm cu perne și pompă. Set complet pentru oaspeți, include tot ce este necesar pentru somn confortabil.',
        ru: 'Надувной матрас Classic Downy Bed, 152x203x25см с подушками и насосом. Полный комплект для гостей, включает все необходимое для комфортного сна.',
        en: 'Inflatable mattress Classic Downy Bed 152x203x25cm with pillows and pump. Complete set for guests, includes everything needed for comfortable sleep.'
    },
    'im28': {
        ro: 'Saltea gonflabilă Camping Mat 72x189x20cm. Subțire și ușoară, perfectă pentru backpacking sau camping unde spațiul este limitat.',
        ru: 'Надувной матрас Camping Mat 72x189x20см. Тонкий и легкий, идеально для пеших походов или кемпинга, где пространство ограничено.',
        en: 'Inflatable mattress Camping Mat 72x189x20cm. Thin and lightweight, perfect for backpacking or camping where space is limited.'
    },
    'im29': {
        ro: 'Saltea gonflabilă Camping 127x193x24cm, până la 272kg. Rezistență sporită pentru utilizare intensivă în camping, cu capacitate mare de încărcare.',
        ru: 'Надувной матрас Camping 127x193x24см, до 272кг. Повышенная прочность для интенсивного использования в кемпинге, с большой грузоподъемностью.',
        en: 'Inflatable mattress Camping 127x193x24cm, up to 272kg. Enhanced durability for intensive camping use, with high load capacity.'
    },
    'im30': {
        ro: 'Pernă gonflabilă 43x28x9cm. Compactă și ușor de umflat, perfectă pentru călătorii sau ca pernă de rezervă.',
        ru: 'Надувная подушка 43x28x9см. Компактная и легко надувается, идеально для путешествий или как запасная подушка.',
        en: 'Inflatable pillow 43x28x9cm. Compact and easy to inflate, perfect for travel or as a spare pillow.'
    },
    'im31': {
        ro: 'Pernă gonflabilă pentru gât 36x30x10cm. Design ergonomic pentru susținerea gâtului în timpul călătoriilor cu avionul, trenul sau mașina.',
        ru: 'Надувная подушка для шеи 36x30x10см. Эргономичный дизайн для поддержки шеи во время путешествий на самолете, поезде или автомобиле.',
        en: 'Inflatable neck pillow 36x30x10cm. Ergonomic design for neck support during travel by plane, train or car.'
    },
        'pump1': {
        ro: 'Pompă electrică Quick-Fill 12V/220V cu adaptor și 3 dispozitive. Versatilă, funcționează atât din priză auto cât și din priză de casă. Include multiple accesorii pentru umflare rapidă a diferitelor produse.',
        ru: 'Электрический насос Quick-Fill 12V/220V с адаптером и 3 насадками. Универсальный, работает как от автомобильной розетки, так и от домашней. Включает несколько аксессуаров для быстрого надувания различных изделий.',
        en: 'Electric pump Quick-Fill 12V/220V with adapter and 3 nozzles. Versatile, works from both car socket and home outlet. Includes multiple accessories for quick inflation of various products.'
    },
    'pump2': {
        ro: 'Pompă electrică Quick-Fill 12V din priză auto. Compactă și portabilă, perfectă pentru călătorii și camping. Include 3 accesorii pentru umflare rapidă.',
        ru: 'Электрический насос Quick-Fill 12V от автомобильной розетки. Компактный и портативный, идеально для путешествий и кемпинга. Включает 3 аксессуара для быстрого надувания.',
        en: 'Electric pump Quick-Fill 12V from car lighter. Compact and portable, perfect for travel and camping. Includes 3 accessories for quick inflation.'
    },
    'pump3': {
        ro: 'Pompă electrică Quick-Fill 220V de la rețea. Puternică și eficientă, ideală pentru uz casnic. Include 3 accesorii pentru a umfla rapid saltele, bărci, piscine etc.',
        ru: 'Электрический насос Quick-Fill 220V от бытовой сети. Мощный и эффективный, идеально для домашнего использования. Включает 3 аксессуара для быстрого надувания матрасов, лодок, бассейнов и т.д.',
        en: 'Electric pump Quick-Fill 220V AC from home outlet. Powerful and efficient, ideal for home use. Includes 3 accessories for quick inflation of mattresses, boats, pools etc.'
    },
    'pump4': {
        ro: 'Pompă electrică Quick-Fill 12V/220V cu baterie acumulator. Funcționează atât pe acumulator, cât și din priză. Perfectă pentru locații fără acces la electricitate.',
        ru: 'Электрический насос Quick-Fill 12V/220V с аккумулятором. Работает как от аккумулятора, так и от розетки. Идеально для мест без доступа к электричеству.',
        en: 'Electric pump Quick-Fill 12V/220V with battery. Works on both battery and outlet. Perfect for locations without electricity access.'
    },
    'pump5': {
        ro: 'Pompă electrică Quick-Fill 220V cu 3 dispozitive și furtun. Include furtun pentru a ajunge la produsele mai greu accesibile. Performanță ridicată pentru umflare rapidă.',
        ru: 'Электрический насос Quick-Fill 220V с 3 насадками и шлангом. Включает шланг для доступа к труднодоступным изделиям. Высокая производительность для быстрого надувания.',
        en: 'Electric pump Quick-Fill 220V with 3 nozzles and hose. Includes hose to reach hard-to-access products. High performance for quick inflation.'
    },
    'pump6': {
        ro: 'Pompă manuală Double Quick III S 37cm. Design dublu pentru umflare rapidă cu mișcări scurte. Compactă și ușor de depozitat.',
        ru: 'Ручной насос Double Quick III S, 37см. Двойной дизайн для быстрого надувания короткими движениями. Компактный и легко хранится.',
        en: 'Manual pump Double Quick III S 37cm. Double design for quick inflation with short strokes. Compact and easy to store.'
    },
    'pump7': {
        ro: 'Pompă manuală Double Quick I 29cm. Variantă mică și ușoară, perfectă pentru călătorii și picnic. Eficientă pentru umflarea jucăriilor și a accesoriilor mici.',
        ru: 'Ручной насос Double Quick I, 29см. Маленький и легкий вариант, идеально для путешествий и пикника. Эффективен для надувания игрушек и мелких аксессуаров.',
        en: 'Manual pump Double Quick I 29cm. Small and lightweight version, perfect for travel and picnics. Efficient for inflating toys and small accessories.'
    },
    'pump8': {
        ro: 'Pompă manuală Double Quick III 48cm. Dimensiuni mari pentru o capacitate mai mare de umflare, ideală pentru bărci și piscine mai mari.',
        ru: 'Ручной насос Double Quick III, 48см. Большие размеры для большей накачивающей способности, идеально для лодок и больших бассейнов.',
        en: 'Manual pump Double Quick III 48cm. Large dimensions for greater inflation capacity, ideal for boats and larger pools.'
    },
    'pump9': {
        ro: 'Pompă cu picior 3L 28cm. Utilizare ușoară cu piciorul, lasă mâinile libere. Perfectă pentru umflarea saltelelor și a altor produse mari.',
        ru: 'Ножной насос 3л, 28см. Легкое использование ногой, оставляет руки свободными. Идеально для надувания матрасов и других крупных изделий.',
        en: 'Foot pump 3L 28cm. Easy use with foot, leaves hands free. Perfect for inflating mattresses and other large products.'
    },
    'pump10': {
        ro: 'Pompă manuală Double Quick Mini 29cm. Cea mai compactă pompă manuală, ușor de transportat în geantă sau rucsac. Pentru umflarea rapidă a accesoriilor mici.',
        ru: 'Ручной насос Double Quick Mini, 29см. Самый компактный ручной насос, легко переносится в сумке или рюкзаке. Для быстрого надувания мелких аксессуаров.',
        en: 'Manual pump Double Quick Mini 29cm. The most compact manual pump, easy to carry in bag or backpack. For quick inflation of small accessories.'
    },

    // ==============================================
    // BAZINE INTEX - POOLS PRODUCTS (CATEGORIA pools)
    // ==============================================
    
    // Chimicale pentru Apă / Water Chemicals
    'care_water': {
        "ph-minus-5kg.jpg": {
            ro: "PH Minus Granulat 5kg pentru reglarea nivelului de pH în piscine. Produs granulat de calitate profesională care reduce eficient pH-ul apei, prevenind formarea depunerilor calcaroase și protejând echipamentele piscinei. Asigură un echilibru chimic optim pentru o apă cristalină și confortabilă.",
            ru: "PH Минус Гранулированный 5кг для регулирования уровня pH в бассейнах. Гранулированный продукт профессионального качества, эффективно снижающий pH воды, предотвращая образование известковых отложений и защищая оборудование бассейна. Обеспечивает оптимальный химический баланс для кристально чистой и комфортной воды.",
            en: "PH Minus Granular 5kg for regulating pH levels in swimming pools. Professional quality granular product that effectively reduces water pH, preventing scale formation and protecting pool equipment. Ensures optimal chemical balance for crystal clear and comfortable water."
        },
        "alba-super-k.jpg": {
            ro: "Alba Super K 1L - Algicid concentrat avansat pentru eliminarea și prevenirea algelor în bazine. Acționează rapid împotriva algelor verzi, negre și mustăților de baie. Formula cu acțiune persistente oferă protecție pe termen lung, menținând apa limpede și igienizată.",
            ru: "Альба Супер K 1л - Продвинутый концентрированный альгицид для устранения и предотвращения водорослей в бассейнах. Быстро действует против зеленых, черных водорослей и слизи. Формула с пролонгированным действием обеспечивает долгосрочную защиту, сохраняя воду чистой и гигиеничной.",
            en: "Alba Super K 1L - Advanced concentrated algicide for removing and preventing algae in pools. Acts quickly against green, black algae and pool slime. Long-lasting formula provides extended protection, keeping water clear and hygienic."
        },
        "all-in-one-tablets.jpg": {
            ro: "Tablete All-in-One 20g/1kg pentru întreținerea completă a bazinelor. Combinație 3 în 1: clor pentru dezinfectare, algicid pentru prevenirea algelor și clarifiant pentru apă cristalină. Simplifică întreținerea piscinei cu un singur produs eficient.",
            ru: "Таблетки All-in-One 20г/1кг для полного обслуживания бассейнов. Комбинация 3 в 1: хлор для дезинфекции, альгицид для предотвращения водорослей и осветлитель для кристально чистой воды. Упрощает обслуживание бассейна одним эффективным продуктом.",
            en: "All-in-One Tablets 20g/1kg for complete pool maintenance. 3-in-1 combination: chlorine for disinfection, algicide for algae prevention and clarifier for crystal clear water. Simplifies pool maintenance with one efficient product."
        },
        "all-in-one-tablets-200g.jpg": {
            ro: "All-in-one tablete multiple 200g/1kg pentru tratarea eficientă a apei bazinelor. Tablete cu acțiune lentă care eliberează progresiv substanțele active, asigurând o întreținere constantă pe o perioadă îndelungată. Perfecte pentru sezonul de înot.",
            ru: "All-in-one мультитаблетки 200г/1кг для эффективной обработки воды бассейнов. Таблетки замедленного действия, постепенно высвобождающие активные вещества, обеспечивая постоянное обслуживание в течение длительного периода. Идеально подходят для купального сезона.",
            en: "All-in-one multi tablets 200g/1kg for effective pool water treatment. Slow-release tablets that gradually release active substances, ensuring constant maintenance over an extended period. Perfect for the swimming season."
        },
        "kemochlor-tablets.jpg": {
            ro: "Kemochlor T-tablete solubile rapid 20g/1kg pentru clorinare rapidă și eficientă. Tablete cu dizolvare accelerată care acționează imediat pentru eliminarea bacteriilor și algilor. Concentrație optimă pentru tratarea de șoc a bazinelor.",
            ru: "Кемохлор Т-быстрорастворимые таблетки 20г/1кг для быстрого и эффективного хлорирования. Таблетки с ускоренным растворением, действующие немедленно для устранения бактерий и водорослей. Оптимальная концентрация для шоковой обработки бассейнов.",
            en: "Kemochlor T-fast soluble tablets 20g/1kg for rapid and effective chlorination. Accelerated dissolution tablets that act immediately to eliminate bacteria and algae. Optimal concentration for pool shock treatment."
        },
        "filter-sand-25kg.jpg": {
            ro: "Nisip Filtru 25kg de înaltă calitate pentru filtrele cu nisip ale bazinelor. Nisip special sortat și spălat, cu granulație optimă pentru filtrarea superioară. Reține particule fine până la 20-40 microni, menținând apa perfect limpede.",
            ru: "Песок для фильтра 25кг высокого качества для песочных фильтров бассейнов. Специально отсортированный и промытый песок с оптимальной грануляцией для превосходной фильтрации. Задерживает мелкие частицы до 20-40 микрон, сохраняя воду идеально чистой.",
            en: "Filter Sand 25kg high quality for pool sand filters. Specially sorted and washed sand with optimal granulation for superior filtration. Retains fine particles up to 20-40 microns, keeping water perfectly clear."
        },
        "tablet-tester.jpg": {
            ro: "Tester tabletă 2 în 1 pentru măsurarea pH-ului și a clorului din apa bazinelor. Sistem simplu și precis cu pastile reactiv care oferă rezultate instant. Instrument esențial pentru monitorizarea calității apei și menținerea unui echilibru chimic optim.",
            ru: "Тестер таблеточный 2 в 1 для измерения pH и хлора в воде бассейнов. Простая и точная система с реактивными таблетками, обеспечивающая мгновенные результаты. Важный инструмент для контроля качества воды и поддержания оптимального химического баланса.",
            en: "Tablet tester 2 in 1 for measuring pH and chlorine in pool water. Simple and accurate system with reactive tablets providing instant results. Essential tool for monitoring water quality and maintaining optimal chemical balance."
        }
    },

    // Piese INTEX / INTEX Parts
    'intex_parts': {
        "intex-liner-10090.jpg": {
            ro: "10090 Cuvă Intex pentru bazin cadru Prism Frame 457x122cm. Cuvă de înlocuire originală Intex fabricată din PVC rezistent cu triplă protecție UV. Grosime de 0,56mm, complet etanșă, cu suprafață antiderapantă. Ușor de instalat, compatibilă cu toate modelele Prism Frame 457x122cm.",
            ru: "10090 Чаша Intex для каркасного бассейна Prism Frame 457х122см. Оригинальная сменная чаша Intex из прочного ПВХ с тройной защитой от УФ. Толщина 0,56мм, полностью герметична, с противоскользящей поверхностью. Легко устанавливается, совместима со всеми моделями Prism Frame 457х122см.",
            en: "10090 Intex Liner for Prism Frame pool 457x122cm. Original Intex replacement liner made of durable PVC with triple UV protection. 0.56mm thickness, completely waterproof, with anti-slip surface. Easy to install, compatible with all Prism Frame 457x122cm models."
        },
        "rubber-plug.jpg": {
            ro: "10127 Dop de cauciuc pentru bazine Intex. Dop original pentru etanșarea orificiilor de scurgere și conectare. Material cauciuc de înaltă calitate, rezistent la îmbătrânire și intemperii. Diametru compatibil cu majoritatea modelelor Intex.",
            ru: "10127 Резиновая заглушка для бассейнов Intex. Оригинальная заглушка для герметизации сливных и соединительных отверстий. Материал - высококачественная резина, устойчивая к старению и погодным условиям. Диаметр совместим с большинством моделей Intex.",
            en: "10127 Rubber plug for Intex pools. Original plug for sealing drain and connection holes. High-quality rubber material, resistant to aging and weather conditions. Diameter compatible with most Intex models."
        },
        "drain-valve-adapter.jpg": {
            ro: "10201 Adaptor pentru valve de drenaj Intex. Piesă de conectare pentru sistemele de scurgere ale bazinelor. Asigură o etanșeitate perfectă și permite evacuarea controlată a apei. Compatibil cu găurile standard de 38mm.",
            ru: "10201 Переходник для сливного клапана Intex. Соединительная деталь для дренажных систем бассейнов. Обеспечивает идеальную герметичность и позволяет контролируемый слив воды. Совместим со стандартными отверстиями 38мм.",
            en: "10201 Adapter for Intex drain valves. Connection part for pool drainage systems. Provides perfect sealing and allows controlled water drainage. Compatible with standard 38mm holes."
        },
        "connector-nut.jpg": {
            ro: "10256 Piuliță pentru connector 38 mm Intex. Piesă de fixare pentru sistemele de filtrare și conectare. Oțel inoxidabil acoperit, rezistent la coroziune. Asigură o strângere uniformă și previne scurgerile.",
            ru: "10256 Гайка для соединителя 38 мм Intex. Крепежная деталь для систем фильтрации и соединения. Нержавеющая сталь с покрытием, устойчивая к коррозии. Обеспечивает равномерную затяжку и предотвращает утечки.",
            en: "10256 Nut for 38mm Intex connector. Fastening part for filtration and connection systems. Coated stainless steel, corrosion resistant. Provides even tightening and prevents leaks."
        },
        "sealing-ring.jpg": {
            ro: "10262 Inel de etanșare Intex pentru sistemele de conectare. Inel din cauciuc sintetic de înaltă calitate, rezistent la deformări și intemperii. Asigură etanșeitate perfectă la conexiunile sistemului de filtrare.",
            ru: "10262 Уплотнительное кольцо Intex для соединительных систем. Кольцо из высококачественного синтетического каучука, устойчивое к деформациям и погодным условиям. Обеспечивает идеальную герметичность в соединениях системы фильтрации.",
            en: "10262 Intex sealing ring for connection systems. Ring made of high-quality synthetic rubber, resistant to deformation and weather conditions. Ensures perfect sealing in filtration system connections."
        },
        "connecting-post.jpg": {
            ro: "10383 Stâlp de conectare Intex pentru bazine cadru. Element structural care asigură rigiditatea și stabilitatea cadrului. Oțel galvanizat, rezistent la rugină. Ușor de montat, compatibil cu sistemele Ultra Frame și Prism Frame.",
            ru: "10383 Соединительная стойка Intex для каркасных бассейнов. Структурный элемент, обеспечивающий жесткость и стабильность каркаса. Оцинкованная сталь, устойчивая к ржавчине. Легко монтируется, совместима с системами Ultra Frame и Prism Frame.",
            en: "10383 Intex connecting post for frame pools. Structural element providing rigidity and stability to the frame. Galvanized steel, rust resistant. Easy to install, compatible with Ultra Frame and Prism Frame systems."
        },
        "horizontal-beam-a.jpg": {
            ro: "10919 Grindă orizontală (A) Intex pentru Ultra Frame 549x274x132cm. Element de susținere principal pentru bazinele mari Ultra Frame. Oțel cu tratament anticoroziv, capacitate de încărcare ridicată. Asigură distribuția uniformă a sarcinii.",
            ru: "10919 Горизонтальная балка (A) Intex для Ultra Frame 549х274х132см. Основной опорный элемент для больших бассейнов Ultra Frame. Сталь с антикоррозийной обработкой, высокая грузоподъемность. Обеспечивает равномерное распределение нагрузки.",
            en: "10919 Horizontal beam (A) for Intex Ultra Frame 549x274x132cm. Main support element for large Ultra Frame pools. Corrosion-treated steel, high load capacity. Ensures even load distribution."
        },
        "horizontal-beam-b.jpg": {
            ro: "10922 Grindă orizontală (B) Intex pentru sistemele Ultra Frame. Componentă esențială pentru integritatea structurală a bazinelor mari. Proiectată pentru rezistență maximă și durabilitate pe termen lung.",
            ru: "10922 Горизонтальная балка (B) Intex для систем Ultra Frame. Важный компонент для структурной целостности больших бассейнов. Разработана для максимальной прочности и долговечности.",
            en: "10922 Horizontal beam (B) for Intex Ultra Frame systems. Essential component for structural integrity of large pools. Designed for maximum strength and long-term durability."
        },
        "horizontal-beam-c.jpg": {
            ro: "10925 Grindă orizontală (C) Intex pentru sistemele de cadru premium. Element de rigidizare care mărește stabilitatea laterală a bazinului. Material: oțel cu vopsire în pudră pentru protecție maximă.",
            ru: "10925 Горизонтальная балка (C) Intex для премиальных каркасных систем. Элемент жесткости, увеличивающий боковую устойчивость бассейна. Материал: сталь с порошковым покрытием для максимальной защиты.",
            en: "10925 Horizontal beam (C) for Intex premium frame systems. Stiffening element that increases lateral stability of the pool. Material: powder-coated steel for maximum protection."
        },
        "horizontal-beam-d.jpg": {
            ro: "10928 Grindă orizontală (D) Intex pentru configurații complexe de bazine. Piesă specializată pentru colțuri și zone cu solicitări ridicate. Proiectare optimizată pentru rezistență la oboseală.",
            ru: "10928 Горизонтальная балка (D) Intex для сложных конфигураций бассейнов. Специализированная деталь для углов и зон с высокой нагрузкой. Оптимизированная конструкция для устойчивости к усталости.",
            en: "10928 Horizontal beam (D) for complex pool configurations. Specialized part for corners and high-stress areas. Optimized design for fatigue resistance."
        },
        "horizontal-beam-f.jpg": {
            ro: "10932 Grindă orizontală (F) Intex pentru sistemele Ultra XTR. Componentă premium pentru bazinele cu înălțime mare de cadru. Rezistență sporită la sarcini dinamice și vânt.",
            ru: "10932 Горизонтальная балка (F) Intex для систем Ultra XTR. Премиум компонент для бассейнов с высокой каркасной конструкцией. Повышенная устойчивость к динамическим нагрузкам и ветру.",
            en: "10932 Horizontal beam (F) for Intex Ultra XTR systems. Premium component for pools with tall frame structures. Enhanced resistance to dynamic loads and wind."
        },
        "corner-connection.jpg": {
            ro: "10934 Conexiune de colț Intex pentru asamblarea cadrelor de bazin. Sistem de blocare rapidă care asigură unghiuri precise și stabile. Material plastic de înaltă rezistență cu inserții metalice.",
            ru: "10934 Угловое соединение Intex для сборки каркасов бассейнов. Система быстрой блокировки, обеспечивающая точные и стабильные углы. Материал: высокопрочный пластик с металлическими вставками.",
            en: "10934 Intex corner connection for pool frame assembly. Quick-lock system ensuring precise and stable angles. Material: high-strength plastic with metal inserts."
        },
        "u-support-beam.jpg": {
            ro: "10937 Grindă de susținere în formă de U Intex pentru bazine grele. Element portant special pentru bazinele cu volum mare de apă. Oțel structural cu protecție anticorozivă completă.",
            ru: "10937 Опорная U-образная балка Intex для тяжелых бассейнов. Специальный несущий элемент для бассейнов с большим объемом воды. Конструкционная сталь с полной антикоррозийной защитой.",
            en: "10937 U-shaped support beam for heavy Intex pools. Special load-bearing element for pools with large water volume. Structural steel with complete anti-corrosion protection."
        },
        "intex-10938.jpg": {
            ro: "10938 Componentă Intex pentru sisteme de fixare și conectare. Piesă universală utilizată în mai multe modele de bazine cadru. Rezistență la uzură și condiții meteorologice variate.",
            ru: "10938 Компонент Intex для систем крепления и соединения. Универсальная деталь, используемая в нескольких моделях каркасных бассейнов. Устойчивость к износу и различным погодным условиям.",
            en: "10938 Intex component for fastening and connection systems. Universal part used in multiple frame pool models. Resistance to wear and varied weather conditions."
        },
        "intex-liner-10939.jpg": {
            ro: "10939 Cuvă Intex pentru bazin cadru 549x274x132cm. Cuvă premium cu grosime sporită (0,65mm) pentru durabilitate maximă. Design cu triple protecție UV, rezistentă la fisuri și decolorare.",
            ru: "10939 Чаша Intex для каркасного бассейна 549x274x132см. Премиум чаша с увеличенной толщиной (0,65мм) для максимальной долговечности. Дизайн с тройной защитой от УФ, устойчивая к трещинам и выцветанию.",
            en: "10939 Intex liner for frame pool 549x274x132cm. Premium liner with increased thickness (0.65mm) for maximum durability. Design with triple UV protection, resistant to cracks and fading."
        },
        "inlet-nozzle-d32.jpg": {
            ro: "11070 Duză de intrare D-32 Intex pentru sistemele de recirculare a apei. Distribuie apa filtrată uniform în bazin, prevenind zone moarte. Material ABS rezistent la clor și UV.",
            ru: "11070 Входная форсунка D-32 Intex для систем рециркуляции воды. Равномерно распределяет фильтрованную воду в бассейне, предотвращая мертвые зоны. Материал АБС, устойчивый к хлору и УФ.",
            en: "11070 Inlet nozzle D-32 for Intex water recirculation systems. Evenly distributes filtered water in the pool, preventing dead spots. ABS material resistant to chlorine and UV."
        },
        "plastic-insert.jpg": {
            ro: "11157 Insert plastic pentru grinzi Intex. Componentă care asigură fixarea sigură a grinzilor în conectoare. Plastic de inginerie cu rezistență la impact și deformare.",
            ru: "11157 Пластиковая вставка для балок Intex. Компонент, обеспечивающий надежное крепление балок в соединителях. Инженерный пластик с устойчивостью к ударам и деформации.",
            en: "11157 Plastic insert for Intex beams. Component ensuring secure beam attachment in connectors. Engineering plastic with impact and deformation resistance."
        },
        "sealing-ring-11228.jpg": {
            ro: "11228 Inel de etanșare Intex pentru sistemele hidraulice. Inel de cauciuc nitrilic pentru presiuni ridicate. Menține etanșeitatea perfectă la conexiunile cu pompă și filtru.",
            ru: "11228 Уплотнительное кольцо Intex для гидравлических систем. Кольцо из нитрильного каучука для высокого давления. Поддерживает идеальную герметичность в соединениях с насосом и фильтром.",
            en: "11228 Intex sealing ring for hydraulic systems. Nitrile rubber ring for high pressures. Maintains perfect sealing in pump and filter connections."
        },
        "titanium-electrode.jpg": {
            ro: "11374 Electrod din titan 26666 pentru generatoarele de clor Intex. Componentă esențială pentru sistemele de sărare, cu durată de viață extinsă. Titan pur pentru eficiență maximă și durabilitate.",
            ru: "11374 Титановый электрод 26666 для хлорогенераторов Intex. Важный компонент для систем соленой воды, с увеличенным сроком службы. Чистый титан для максимальной эффективности и долговечности.",
            en: "11374 Titanium electrode 26666 for Intex chlorine generators. Essential component for saltwater systems, with extended lifespan. Pure titanium for maximum efficiency and durability."
        },
        "l-sealing-ring.jpg": {
            ro: "11412 Inel de etanșare în formă de L Intex pentru conexiuni complexe. Design special pentru colțuri și racorduri cu unghiuri. Rezistent la temperaturi extreme și presiune hidrostatică.",
            ru: "11412 L-образное уплотнительное кольцо Intex для сложных соединений. Специальный дизайн для углов и фитингов под углом. Устойчиво к экстремальным температурам и гидростатическому давлению.",
            en: "11412 L-shaped sealing ring for complex Intex connections. Special design for corners and angled fittings. Resistant to extreme temperatures and hydrostatic pressure."
        },
        "outlet-nozzle-d32.jpg": {
            ro: "12365 Duză de ieșire D-32 Intex pentru evacuarea apei către filtru. Optimizează debitul apei spre sistemul de filtrare. Design hidrodinamic care minimizează pierderile de presiune.",
            ru: "12365 Выходная форсунка D-32 Intex для отвода воды к фильру. Оптимизирует поток воды к системе фильтрации. Гидродинамический дизайн, минимизирующий потери давления.",
            en: "12365 Outlet nozzle D-32 for water evacuation to filter. Optimizes water flow to filtration system. Hydrodynamic design minimizing pressure losses."
        },
        "ultra-frame-liner-12436.jpg": {
            ro: "12436 Cuvă Ultra Frame Intex 549x132cm pentru bazinele cu pereți înalți. Material PVC cu patru straturi de protecție UV. Suprafață antialunecare, design interior atractiv cu efect optic 3D.",
            ru: "12436 Чаша Ultra Frame Intex 549х132см для бассейнов с высокими стенками. Материал ПВХ с четырьмя слоями защиты от УФ. Противоскользящая поверхность, привлекательный внутренний дизайн с 3D эффектом.",
            en: "12436 Ultra Frame liner 549x132cm for pools with tall walls. PVC material with four layers of UV protection. Anti-slip surface, attractive interior design with 3D optical effect."
        },
        "support-cap.jpg": {
            ro: "12465 Cap de oprire pentru sistemele Prism Frame Intex. Protejează capetele stâlpilor și previne deteriorarea podelei. Plastic termorezistent cu inserturi din cauciuc moale.",
            ru: "12465 Защитный колпачок для систем Prism Frame Intex. Защищает концы стоек и предотвращает повреждение пола. Термостойкий пластик с вставками из мягкой резины.",
            en: "12465 Support cap for Intex Prism Frame systems. Protects post ends and prevents floor damage. Heat-resistant plastic with soft rubber inserts."
        },
        "t-connector.jpg": {
            ro: "12802 Conector în formă de T pentru sistemele Prism Frame. Permite ramificarea sistemelor de susținere și conectarea elementelor auxiliare. Sistem de blocare cu clic pentru montaj rapid.",
            ru: "12802 Т-образный соединитель для систем Prism Frame. Позволяет разветвление систем поддержки и подключение вспомогательных элементов. Система блокировки с щелчком для быстрого монтажа.",
            en: "12802 T-connector for Prism Frame systems. Allows branching of support systems and connection of auxiliary elements. Click-lock system for quick assembly."
        },
        "horizontal-beam-12808.jpg": {
            ro: "12808 Grindă orizontală Intex pentru sistemele Prism Frame îmbunătățite. Element cu rezistență sporită la încovoiere și torsiune. Tratament anticoroziv pentru medii cu umiditate ridicată.",
            ru: "12808 Горизонтальная балка Intex для усовершенствованных систем Prism Frame. Элемент с повышенной устойчивостью к изгибу и кручению. Антикоррозийная обработка для сред с высокой влажностью.",
            en: "12808 Horizontal beam for enhanced Prism Frame systems. Element with increased resistance to bending and torsion. Anti-corrosion treatment for high humidity environments."
        },
        "vertical-beam.jpg": {
            ro: "12818 Grindă verticală Intex pentru susținerea pereților bazinului. Transferă sarcina apei la sol, distribuind uniform presiunea. Oțel cu profil special pentru rigiditate optimă.",
            ru: "12818 Вертикальная балка Intex для поддержки стенок бассейна. Передает нагрузку воды на грунт, равномерно распределяя давление. Сталь со специальным профилем для оптимальной жесткости.",
            en: "12818 Vertical beam for supporting pool walls. Transfers water load to ground, evenly distributing pressure. Steel with special profile for optimal rigidity."
        },
        "vacuum-brushes.jpg": {
            ro: "12928 Set de perii pentru robotul aspirator Intex 28005. Perii de înlocuire din material moale care nu zgârie suprafața bazinului. Design optimizat pentru curățarea eficientă a colțurilor și margini.",
            ru: "12928 Набор щеток для робота-пылесоса Intex 28005. Сменные щетки из мягкого материала, не царапающего поверхность бассейна. Оптимизированный дизайн для эффективной очистки углов и краев.",
            en: "12928 Brush set for Intex 28005 robot vacuum. Replacement brushes made of soft material that doesn't scratch pool surface. Optimized design for efficient cleaning of corners and edges."
        },
        "chlorine-generator.jpg": {
            ro: "26670 Generator de clor Krystal Clear Saltwater System Intex. Sistem automat care transformă sarea în clor natural. Ecologic, reduce necesitatea chimicalelor. Pentru bazine până la 60.000 de litri.",
            ru: "26670 Хлорогенератор Krystal Clear Saltwater System Intex. Автоматическая система, превращающая соль в натуральный хлор. Экологичный, уменьшает потребность в химикатах. Для бассейнов до 60 000 литров.",
            en: "26670 Chlorine generator Krystal Clear Saltwater System Intex. Automatic system converting salt to natural chlorine. Ecological, reduces need for chemicals. For pools up to 60,000 liters."
        },
        "intex-26726.jpg": {
            ro: "26726 Carcasă Intex pentru componente electrice ale sistemelor de filtrare. Protectie IPX4 împotriva stropilor și umidității. Design ergonomic pentru acces ușor la componentele interne.",
            ru: "26726 Корпус Intex для электрических компонентов систем фильтрации. Защита IPX4 от брызг и влаги. Эргономичный дизайн для легкого доступа к внутренним компонентам.",
            en: "26726 Intex housing for electrical components of filtration systems. IPX4 protection against splashes and moisture. Ergonomic design for easy access to internal components."
        },
        "connecting-hose-32mm.jpg": {
            ro: "29059 Furtun de conectare 32mm pentru sistemele de filtrare Intex. Furtun flexibil, rezistent la presiune și clor. Conexiuni rapide pentru instalare simplă. Lungime standard pentru majoritatea configurațiilor.",
            ru: "29059 Соединительный шланг 32мм для систем фильтрации Intex. Гибкий шланг, устойчивый к давлению и хлору. Быстросъемные соединения для простой установки. Стандартная длина для большинства конфигураций.",
            en: "29059 Connecting hose 32mm for Intex filtration systems. Flexible hose, resistant to pressure and chlorine. Quick-connect fittings for easy installation. Standard length for most configurations."
        },
        "adapter-set-b.jpg": {
            ro: "29061 Set adaptoare B pentru conexiuni multiple între componentele sistemului de filtrare. Include adaptoare pentru diferite diametre de țevi. Material plastic de calitate alimentară.",
            ru: "29061 Комплект переходников B для множественных соединений между компонентами системы фильтрации. Включает переходники для разных диаметров труб. Материал: пищевой пластик.",
            en: "29061 Adapter set B for multiple connections between filtration system components. Includes adapters for different pipe diameters. Food-grade plastic material."
        },
        "metal-frame-liner-10095.jpg": {
            ro: "10095 Cuvă Metal Frame Intex 305x76cm pentru bazine cu cadru metalic. Cuvă din PVC 3-straturi cu protecție UV. Grosime 0,44mm, perfectă pentru înlocuirea cuvelor uzate sau deteriorate.",
            ru: "10095 Чаша Metal Frame Intex 305х76см для бассейнов с металлическим каркасом. Чаша из 3-слойного ПВХ с защитой от УФ. Толщина 0,44мм, идеально подходит для замены изношенных или поврежденных чаш.",
            en: "10095 Metal Frame liner 305x76cm for metal frame pools. 3-layer PVC liner with UV protection. 0.44mm thickness, perfect for replacing worn or damaged liners."
        },
        "metal-frame-liner-10096.jpg": {
            ro: "Cuvă Metal Frame 366x76cm - Înlocuitor durabil pentru modelele Intex populare. Material îmbunătățit cu rezistență sporită la tracțiune și perforare. Design interior modern cu model decorativ.",
            ru: "Чаша Metal Frame 366х76см - Долговечная замена для популярных моделей Intex. Улучшенный материал с повышенной устойчивостью к растяжению и проколам. Современный внутренний дизайн с декоративным узором.",
            en: "Metal Frame liner 366x76cm - Durable replacement for popular Intex models. Improved material with increased resistance to stretching and punctures. Modern interior design with decorative pattern."
        },
        "easy-set-liner-10318.jpg": {
            ro: "10318/12129 Cuvă Easy Set Intex 305x76 cm pentru bazinele gonflabile. Cuvă circulară cu design simplu pentru înlocuire rapidă. Material PVC cu dublă protecție UV, rezistent la decolorare.",
            ru: "10318/12129 Чаша Easy Set Intex 305×76 см для надувных бассейнов. Круглая чаша с простым дизайном для быстрой замены. Материал ПВХ с двойной защитой от УФ, устойчивый к выцветанию.",
            en: "10318/12129 Easy Set liner 305x76 cm for inflatable pools. Circular liner with simple design for quick replacement. PVC material with double UV protection, resistant to fading."
        },
        "easy-set-liner-11588.jpg": {
            ro: "11588 Cuvă Intex 183x51cm pentru bazinele Easy Set mici. Perfectă pentru bazinele copiilor sau spațiile mici. Material PVC flexibil, ușor de curățat și întreținut.",
            ru: "11588 Чаша Intex 183×51см для небольших бассейнов Easy Set. Идеально подходит для детских бассейнов или небольших пространств. Гибкий материал ПВХ, легко чистится и обслуживается.",
            en: "11588 Intex liner 183x51cm for small Easy Set pools. Perfect for children's pools or small spaces. Flexible PVC material, easy to clean and maintain."
        },
        "liner-12135a.jpg": {
            ro: "12135A Cuvă Intex 400x200x100cm pentru bazine rectangulare mari. Cuvă de înlocuire pentru modelele Prism Frame rectangulare. Material premium cu triplă protecție și suprafață antiderapantă.",
            ru: "12135A Чаша Intex 400х200х100см для больших прямоугольных бассейнов. Сменная чаша для прямоугольных моделей Prism Frame. Премиум материал с тройной защитой и противоскользящей поверхностью.",
            en: "12135A Intex liner 400x200x100cm for large rectangular pools. Replacement liner for rectangular Prism Frame models. Premium material with triple protection and anti-slip surface."
        },
        "liner-12228.jpg": {
            ro: "12228 Cuvă Intex 488x244x107cm pentru bazine olimpice de dimensiuni medii. Cuvă cu design special pentru antrenamente și recreere. Material gros, rezistent la stres mecanic ridicat.",
            ru: "12228 Чаша Intex 488х244х107см для бассейнов средних олимпийских размеров. Чаша со специальным дизайном для тренировок и отдыха. Толстый материал, устойчивый к высоким механическим нагрузкам.",
            en: "12228 Intex liner 488x244x107cm for medium Olympic-sized pools. Liner with special design for training and recreation. Thick material, resistant to high mechanical stress."
        },
        "nozzle-d38.jpg": {
            ro: "INTEX 12354 duză D-38 pentru sistemele de filtrare cu debit mare. Pentru bazine peste 40.000 litri, asigură distribuția optimă a apei. Material ABS îmbunătățit cu rezistență chimică sporită.",
            ru: "INTEX 12354 форсунка D-38 для систем фильтрации с высоким расходом. Для бассейнов более 40 000 литров, обеспечивает оптимальное распределение воды. Улучшенный материал АБС с повышенной химической стойкостью.",
            en: "INTEX 12354 nozzle D-38 for high-flow filtration systems. For pools over 40,000 liters, ensures optimal water distribution. Improved ABS material with enhanced chemical resistance."
        },
        "prism-frame-liner-12533.jpg": {
            ro: "12533 Cuvă Prism Frame Intex 366x99cm cu design modern și culori vii. Material cu patru straturi, rezistent la zgârieturi și uzură. Perfectă pentru înlocuirea cuvelor vechi cu un aspect nou.",
            ru: "12533 Чаша Prism Frame Intex 366х99см с современным дизайном и яркими цветами. Материал с четырьмя слоями, устойчивый к царапинам и износу. Идеально подходит для замены старых чаш на новый вид.",
            en: "12533 Prism Frame liner 366x99cm with modern design and bright colors. Four-layer material, resistant to scratches and wear. Perfect for replacing old liners with a new look."
        }
    },

    // Bazine Cadru / Frame Pools
    'frame_pools': {
        "ultra-frame-26326.jpg": {
            ro: "26326 Bazin cadru Ultra Frame Intex 488x122cm. Bazin premium cu sistem de cadru Ultra Frame pentru stabilitate excepțională. Material PVC cu triplă protecție UV, capacitate 13.994 litri. Include filtru-pompă Krystal Clear 2.006L/h și scară.",
            ru: "26326 Каркасный бассейн Ultra Frame Intex 488x122см. Премиум бассейн с системой каркаса Ultra Frame для исключительной стабильности. Материал ПВХ с тройной защитой от УФ, вместимость 13 994 литра. Включает фильтр-насос Krystal Clear 2.006л/ч и лестницу.",
            en: "26326 Ultra Frame pool Intex 488x122cm. Premium pool with Ultra Frame system for exceptional stability. PVC material with triple UV protection, capacity 13,994 liters. Includes Krystal Clear filter-pump 2,006L/h and ladder."
        },
        "ultra-frame-26330.jpg": {
            ro: "26330 Bazin cadru Ultra Frame Intex 549x132cm. Bazin mare pentru familie, cu design robust și sistem de susținere îmbunătățit. Capacitate 24.311 litri, adâncime 132cm. Perfect pentru divertisment și relaxare.",
            ru: "26330 Каркасный бассейн Ultra Frame Intex 549x132см. Большой семейный бассейн с прочным дизайном и улучшенной системой поддержки. Вместимость 24 311 литров, глубина 132см. Идеально подходит для развлечений и отдыха.",
            en: "26330 Ultra Frame pool Intex 549x132cm. Large family pool with robust design and improved support system. Capacity 24,311 liters, depth 132cm. Perfect for entertainment and relaxation."
        },
        "ultra-xtr-26340.jpg": {
            ro: "26340 Bazin cadru Ultra XTR Frame Intex 732x132cm. Bazin de dimensiuni generoase cu sistem XTR pentru rezistență maximă. Cadru din oțel galvanizat cu protecție împotriva ruginii. Capacitate 43.700 litri.",
            ru: "26340 Каркасный бассейн Ultra XTR Frame Intex 732x132см. Бассейн щедрых размеров с системой XTR для максимальной прочности. Каркас из оцинкованной стали с защитой от ржавчины. Вместимость 43 700 литров.",
            en: "26340 Ultra XTR Frame pool Intex 732x132cm. Generously sized pool with XTR system for maximum strength. Galvanized steel frame with rust protection. Capacity 43,700 liters."
        },
        "ultra-xtr-26356.jpg": {
            ro: "26356 Bazin cadru Ultra XTR Premium Pool Line 549x274x132cm. Bazin oval premium cu design elegant și funcționalități avansate. Sistem de filtrare performant și accesorii incluse pentru experiență completă.",
            ru: "26356 Каркасный бассейн Ultra XTR Premium Pool Line 549х274х132см. Премиум овальный бассейн с элегантным дизайном и передовыми функциями. Производительная система фильтрации и включенные аксессуары для полного опыта.",
            en: "26356 Ultra XTR Premium Pool Line 549x274x132cm. Premium oval pool with elegant design and advanced features. High-performance filtration system and included accessories for complete experience."
        },
        "ultra-xtr-26364.jpg": {
            ro: "26364 Bazin cadru Ultra XTR Premium Pool Line 732x366x132cm. Bazin oval mare, perfect pentru petreceri și evenimente în familie. Structură ultra-rezistentă, adâncime uniformă de 132cm pe toată suprafața.",
            ru: "26364 Каркасный бассейн Ultra XTR Premium Pool Line 732x366x132см. Большой овальный бассейн, идеально подходящий для вечеринок и семейных мероприятий. Ультрапрочная структура, равномерная глубина 132см по всей поверхности.",
            en: "26364 Ultra XTR Premium Pool Line 732x366x132cm. Large oval pool, perfect for parties and family events. Ultra-resistant structure, uniform 132cm depth across entire surface."
        },
        "ultra-xtr-26374.jpg": {
            ro: "26374 Bazin cadru Ultra XTR Premium Pool Line 975x488x132cm. Bazin de dimensiuni profesionale pentru proprietăți mari și utilizare intensivă. Cel mai mare model din gama Intex, cu toate funcționalitățile premium.",
            ru: "26374 Каркасный бассейн Ultra XTR Premium Pool Line 975х488х132см. Бассейн профессиональных размеров для больших владений и интенсивного использования. Самая большая модель в линейке Intex со всеми премиум функциями.",
            en: "26374 Ultra XTR Premium Pool Line 975x488x132cm. Professional size pool for large properties and intensive use. Largest model in Intex lineup with all premium features."
        },
        "frame-pool-26700.jpg": {
            ro: "26700 Bazin cadru Intex 305x76cm. Bazin accesibil pentru familii cu spațiu limitat. Ușor de asamblat, cu cadru simplu și eficient. Perfect pentru copii și adulți pentru răcoare în zilele calde.",
            ru: "26700 Каркасный бассейн Intex 305x76см. Доступный бассейн для семей с ограниченным пространством. Легко собирается, с простой и эффективной рамой. Идеально подходит для детей и взрослых, чтобы охладиться в жаркие дни.",
            en: "26700 Frame pool Intex 305x76cm. Affordable pool for families with limited space. Easy to assemble, with simple and efficient frame. Perfect for children and adults to cool off on hot days."
        },
        "frame-pool-26702.jpg": {
            ro: "26702 Bazin cadru Intex 305x76cm cu filtru-pompă inclus. Set complet care include tot ce este necesar pentru a începe. Capacitate 4.485 litri, ideal pentru 4-5 persoane.",
            ru: "26702 Каркасный бассейн Intex 305х76см с включенным фильтр-насосом. Полный комплект, включающий все необходимое для начала. Вместимость 4 485 литров, идеально для 4-5 человек.",
            en: "26702 Frame pool Intex 305x76cm with included filter-pump. Complete set including everything needed to get started. Capacity 4,485 liters, ideal for 4-5 people."
        },
        "prism-frame-26710.jpg": {
            ro: "26710 Bazin cadru Intex Prism Frame 366x76cm. Design Prism Frame cu elemente decorative atrăgătoare și culori vii. Material cu protecție UV îmbunătățită, rezistent la decolorare.",
            ru: "26710 Каркасный бассейн Intex Prism Frame 366х76см. Дизайн Prism Frame с привлекательными декоративными элементами и яркими цветами. Материал с улучшенной защитой от УФ, устойчивый к выцветанию.",
            en: "26710 Prism Frame pool Intex 366x76cm. Prism Frame design with attractive decorative elements and bright colors. Material with enhanced UV protection, resistant to fading."
        },
        "prism-frame-26712.jpg": {
            ro: "26712 Bazin cadru Prism Frame 366x76cm cu filtru-pompă 2006l/h. Set complet cu sistem de filtrare Krystal Clear. Capacitate 6.503 litri, adâncime 76cm. Perfect pentru utilizare recreativă zilnică.",
            ru: "26712 Каркасный бассейн Prism Frame 366х76см с фильтр-насосом 2006л/ч. Полный комплект с системой фильтрации Krystal Clear. Вместимость 6 503 литра, глубина 76см. Идеально для ежедневного рекреационного использования.",
            en: "26712 Prism Frame pool 366x76cm with filter-pump 2006l/h. Complete set with Krystal Clear filtration system. Capacity 6,503 liters, depth 76cm. Perfect for daily recreational use."
        }
    },

    // Bazine Gonflabile / Easy Set Pools
    'easy_set': {
        "easy-set-28101.jpg": {
            ro: "28101 Bazin Easy Set Intex 183x51cm - Piscină compactă pentru copii. Bazin gonflabil cu inel superior gonflat pentru susținere. Ușor de instalat în 10 minute, necesită doar o sursă de apă. Material PVC cu dublă protecție UV.",
            ru: "28101 Бассейн Easy Set Intex 183x51см - Компактный бассейн для детей. Надувной бассейн с надувным верхним кольцом для поддержки. Легко устанавливается за 10 минут, требуется только источник воды. Материал ПВХ с двойной защитой от УФ.",
            en: "28101 Easy Set pool Intex 183x51cm - Compact kids pool. Inflatable pool with inflated top ring for support. Easy to install in 10 minutes, requires only water source. PVC material with double UV protection."
        },
        "easy-set-28106.jpg": {
            ro: "28106 Bazin Easy Set Intex 244x61cm - Piscină familială. Dimensiuni perfecte pentru familii cu copii. Capacitate 2.271 litri, adâncime 61cm. Setup rapid, doar umpleți cu apă și gata.",
            ru: "28106 Бассейн Easy Set Intex 244x61см - Семейный бассейн. Идеальные размеры для семей с детьми. Вместимость 2 271 литр, глубина 61см. Быстрая установка, просто наполните водой и готово.",
            en: "28106 Easy Set pool Intex 244x61cm - Family pool. Perfect dimensions for families with children. Capacity 2,271 liters, depth 61cm. Quick setup, just fill with water and ready."
        },
        "easy-set-28120.jpg": {
            ro: "28120 Bazin Easy Set Intex 305x76cm - Piscină mare pentru familie. Cel mai mare model din seria Easy Set, perfect pentru 6-8 persoane. Material PVC gros de 0,30mm pentru durabilitate sporită.",
            ru: "28120 Бассейн Easy Set Intex 305x76см - Большой семейный бассейн. Самая большая модель в серии Easy Set, идеально подходит для 6-8 человек. Материал ПВХ толщиной 0,30мм для увеличенной долговечности.",
            en: "28120 Easy Set pool Intex 305x76cm - Large family pool. Largest model in Easy Set series, perfect for 6-8 people. 0.30mm thick PVC material for enhanced durability."
        },
        "repair-kit.jpg": {
            ro: "59631 Kit de reparații universal pentru bazine gonflabile. Include toate materialele necesare pentru repararea rapidă a oricărui bazin gonflabil. Patch-uri autoadezive și kit de lipire profesional.",
            ru: "59631 Универсальный ремонтный комплект для надувных бассейнов. Включает все необходимые материалы для быстрого ремонта любого надувного бассейна. Самоклеящиеся заплатки и профессиональный набор для склеивания.",
            en: "59631 Universal repair kit for inflatable pools. Includes all materials needed for quick repair of any inflatable pool. Self-adhesive patches and professional glue kit."
        }
    },

    // Filtre și Pompe / Filters & Pumps
    'filters': {
        "filter-pump-26604.jpg": {
            ro: "26604 Filtru-Pompă Krystal Clear 2006L/h pentru bazine mici. Sistem complet de filtrare cu cartuș pentru bazine până la 4.500 litri. Ușor de instalat și întreținut, purifică eficient apa.",
            ru: "26604 Фильтр-Насос Krystal Clear 2006л/ч для небольших бассейнов. Полная система фильтрации с картриджем для бассейнов до 4 500 литров. Легко устанавливается и обслуживается, эффективно очищает воду.",
            en: "26604 Filter-Pump Krystal Clear 2006L/h for small pools. Complete filtration system with cartridge for pools up to 4,500 liters. Easy to install and maintain, effectively purifies water."
        },
        "filter-pump-26636.jpg": {
            ro: "26636 Filtru-Pompă Krystal Clear 5678L/h cu Timer. Sistem avansat cu timer programabil pentru filtrare eficientă. Pentru bazine până la 17.000 litri, cu opțiune de funcționare automată.",
            ru: "26636 Фильтр-Насос Krystal Clear 5678л/ч с таймером. Продвинутая система с программируемым таймером для эффективной фильтрации. Для бассейнов до 17 000 литров, с опцией автоматической работы.",
            en: "26636 Filter-Pump Krystal Clear 5678L/h with Timer. Advanced system with programmable timer for efficient filtration. For pools up to 17,000 liters, with automatic operation option."
        },
        "filter-pump-26638.jpg": {
            ro: "26638 Filtru-pompă cartuș Krystal Clear 3785L/h. Pentru bazine până la 457 cm, cartuș tip A pentru filtrare fină. Performanță ridicată cu consum energetic redus.",
            ru: "26638 Картриджный фильтр-насос Krystal Clear 3785л/ч. Для бассейнов до 457 см, картридж типа A для тонкой фильтрации. Высокая производительность с низким энергопотреблением.",
            en: "26638 Cartridge filter-pump Krystal Clear 3785L/h. For pools up to 457 cm, type A cartridge for fine filtration. High performance with low energy consumption."
        },
        "sand-filter-26642.jpg": {
            ro: "26642 Filtru-pompă cu nisip 3500 litri pe oră. Sistem de filtrare cu nisip pentru bazine medii. Filtrare superioară, retine particule până la 20 microni. Întreținere simplă - doar spălare inversă.",
            ru: "26642 Песочный фильтр-насос 3500 литров в час. Система песочной фильтрации для средних бассейнов. Превосходная фильтрация, задерживает частицы до 20 микрон. Простое обслуживание - только обратная промывка.",
            en: "26642 Sand filter-pump 3500 liters per hour. Sand filtration system for medium pools. Superior filtration, retains particles up to 20 microns. Simple maintenance - just backwashing."
        },
        "sand-filter-26644.jpg": {
            ro: "26644 Filtru-pompă cu nisip Krystal Clear 5700L/h. Pentru bazine mari până la 30.000 litri. Sistem SX1500 cu performanță profesională pentru apă cristalină.",
            ru: "26644 Песочный фильтр-насос Krystal Clear 5700л/ч. Для больших бассейнов до 30 000 литров. Система SX1500 с профессиональной производительностью для кристально чистой воды.",
            en: "26644 Sand filter-pump Krystal Clear 5700L/h. For large pools up to 30,000 liters. SX1500 system with professional performance for crystal clear water."
        }
    }
}

// Return product description object {ro,ru,en} for a given product id or fall back to generic
function getProductDescription(productId, categoryId, subcategoryId) {
    // If a specific description exists for this product id, return it
    if (productId && PRODUCT_DESCRIPTIONS && PRODUCT_DESCRIPTIONS[productId]) {
        return PRODUCT_DESCRIPTIONS[productId];
    }

    // Fallback: generate a simple generic description per language
    const genericByCategory = {
        ro: (categoryId && typeof categoryId === 'string') ? `Produs din categoria ${categoryId}` : 'Produs de calitate pentru activități de exterior și acvatice, durabil și ușor de utilizat.',
        ru: (categoryId && typeof categoryId === 'string') ? `Товар из категории ${categoryId}` : 'Качественный продукт для мероприятий на открытом воздухе и водных мероприятий, долговечный и простой в использовании.',
        en: (categoryId && typeof categoryId === 'string') ? `Product from category ${categoryId}` : 'Quality product for outdoor and water activities, durable and easy to use.'
    };

    return genericByCategory;
}

// Funcție pentru a adăuga descrieri la toate produsele
function enhanceAllProductsWithDescriptions() {
    // Verifică dacă avem acces la structurile de date
    if (typeof PRODUCTS_DATA === 'undefined' && typeof POOLS_PRODUCTS === 'undefined') {
        console.warn('PRODUCTS_DATA or POOLS_PRODUCTS not available for adding descriptions');
        return [];
    }
    const allProducts = [];
   
    // Adaugă produsele din PRODUCTS_DATA cu descrieri
    if (typeof PRODUCTS_DATA !== 'undefined') {
        PRODUCTS_DATA.forEach(product => {
            const enhancedProduct = {
                ...product,
                description: getProductDescription(product.id, product.category, product.subcategory)
            };
            allProducts.push(enhancedProduct);
        });
    }
   
    // Adaugă produsele din POOLS_PRODUCTS cu descrieri
    if (typeof POOLS_PRODUCTS !== 'undefined' && POOLS_PRODUCTS.pools) {
        POOLS_PRODUCTS.pools.forEach(product => {
            const enhancedProduct = {
                ...product,
                id: product.id || `pool_${Math.random().toString(36).substr(2, 9)}`,
                category: 'baseine_intex',
                subcategory: product.sub || product.subcategory || '',
                description: getProductDescription(product.id, 'baseine_intex', product.sub || product.subcategory)
            };
         allProducts.push(enhancedProduct);
        });
    }
   
    return allProducts;
}

// Funcție pentru a obține toate produsele cu descrieri
function getAllProductsWithDescriptions() {
    return enhanceAllProductsWithDescriptions();
}

// Export pentru utilizare globală
if (typeof window !== 'undefined') {
    window.PRODUCT_DESCRIPTIONS = PRODUCT_DESCRIPTIONS;
    window.getProductDescription = getProductDescription;
    window.getAllProductsWithDescriptions = getAllProductsWithDescriptions;
       // Adaugă și funcția pentru a extinde produsele existente
    window.enhanceExistingProducts = function(productsArray) {
        if (!Array.isArray(productsArray)) return productsArray;
       
        return productsArray.map(product => {
            return {
                ...product,
                description: getProductDescription(product.id, product.category, product.subcategory)
            };
        });
    };
}