/*
 * UNIDO Nordelta — datos de la carta completa.
 * Fuente: transcripción provista por el restaurante.
 * Estructura separada del render para poder actualizar precios sin tocar el diseño.
 *
 * Formato de item:
 *   { name: "Plato", price: "$0.000", desc: "descripción opcional" }
 *   { name: "Plato", desc: "...", variants: [ { label: "Salmón", price: "$0.000" }, ... ] }
 */
window.UNIDO_MENU = {
  categories: [
    /* ============================ CAFETERÍA ============================ */
    {
      id: "cafeteria",
      label: "Cafetería",
      type: "sections",
      sections: [
        {
          title: "Cafetería",
          items: [
            { name: "Café chico", price: "$4.500" },
            { name: "Café mediano", price: "$5.500" },
            { name: "Café doble", price: "$6.000" },
            { name: "Caramel Latte", price: "$6.700" },
            { name: "Vainilla Latte", price: "$6.700" },
            { name: "Iced Cappuccino", price: "$6.800" },
            { name: "Té", price: "$5.000", desc: "Consultar carta de tés diseñada por Tealosophy" }
          ]
        },
        {
          title: "Viennoiserie",
          items: [
            { name: "Medialuna", price: "$2.800" },
            { name: "Croissant Clásica", price: "$5.100" },
            { name: "Pain au Chocolat", price: "$5.100" },
            { name: "Cinnamon Roll", price: "$5.100" },
            { name: "Croissant con dulce de leche", price: "$5.400" },
            { name: "Croissant con jamón y queso", price: "$10.200" },
            { name: "Chocolate Chip Cookie", price: "$5.000" },
            { name: "Scon de queso (2 un)", price: "$8.000", desc: "Con dip de queso blanco y ciboulette" },
            { name: "Scon dulce (2 un)", price: "$8.000", desc: "Con dip de mermelada de frambuesa y queso blanco" }
          ]
        },
        {
          title: "Pastelería individual",
          items: [
            { name: "Key Lime Pie", price: "$10.900" },
            { name: "Cheesecake de frambuesas", price: "$10.900" },
            { name: "Rogel", price: "$10.900" },
            { name: "Brownie, dulce de leche y merengue", price: "$10.900" },
            { name: "Chocotorta", price: "$10.900" }
          ]
        },
        {
          title: "Cuadrados dulces",
          items: [
            { name: "Pasta frola", price: "$5.200" },
            { name: "Brownie con nueces", price: "$9.600" },
            { name: "Coco y dulce de leche", price: "$9.600" },
            { name: "Crumble de manzana", price: "$9.600" }
          ]
        },
        {
          title: "Pastelería seca",
          items: [
            { name: "Alfajor de maicena", price: "$5.800" },
            { name: "Alfajor de almendras", price: "$6.500" }
          ]
        },
        {
          title: "Desayuno y merienda",
          items: [
            { name: "Yogurt y granola", price: "$11.200", desc: "Yogurt natural, frutos rojos y granola casera" },
            { name: "Omelette de claras", price: "$16.000", desc: "Claras con queso port salut, tomates y tostadas multicereal" },
            { name: "Bowl de açaí", price: "$22.000", desc: "Açaí con frutas naturales, banana, frutilla, granola y miel de caña" },
            { name: "Tostada breakfast", price: "$14.400", desc: "Pan integral con semillas, palta, queso crema, tomate cherry, huevo poché, crocante de quinoa y girasol" },
            { name: "Bruschetta", price: "$16.400", desc: "Tostón de pasas y nueces, queso agrio, salmón ahumado, tomates cherry asados y brotes" },
            { name: "Tostadas en pan artesanal", price: "$9.500", desc: "Selección de panes: pasas y nueces, campo, centeno y semillas, con queso crema y mermelada" },
            { name: "Huevo revuelto", price: "$14.200", desc: "Tostón de pan de semillas, palta pisada, queso crema, aceite de oliva" },
            { name: "Árabe de jamón y queso", price: "$14.300" }
          ]
        },
        {
          title: "Brunch",
          items: [
            { name: "Brunch 2 personas", price: "$40.700", desc: "Selección de panes artesanales, mermelada, queso crema, dulce de leche, miel orgánica, huevo revuelto, yogurt natural, 2 jugos de naranja, 2 cafés, 1 agua" },
            { name: "Brunch 4 personas", price: "$72.900", desc: "Selección de panes artesanales, mermelada, queso crema, dulce de leche, miel orgánica, tostada breakfast, açaí con frutas, 2 scones dulces, 4 jugos de naranja, 4 cafés, 2 aguas" }
          ]
        },
        {
          title: "Panes artesanales para llevar",
          items: [
            { name: "Campo", price: "$9.400" },
            { name: "Centeno", price: "$9.600" },
            { name: "Pasas y nueces", price: "$10.300" },
            { name: "Semillas", price: "$10.300" }
          ]
        },
        {
          title: "Tortas para llevar",
          note: "Disponible solo por encargue",
          items: [
            { name: "Key Lime Pie", price: "$66.300" },
            { name: "Brownie con dulce de leche y merengue", price: "$60.500" },
            { name: "Bombón", price: "$61.400" },
            { name: "Rogel", price: "$63.000" },
            { name: "Chocotorta", price: "$66.300" },
            { name: "Cheesecake de frambuesa", price: "$66.300" }
          ]
        },
        {
          title: "Bebidas sin alcohol",
          items: [
            { name: "Agua mineral", price: "$4.800" },
            { name: "Coca Cola", price: "$5.200" },
            { name: "Coca Cola Light", price: "$5.200" },
            { name: "Sprite", price: "$5.200" },
            { name: "Sprite Zero", price: "$5.200" },
            { name: "Agua de frutos rojos y naranja", price: "$6.600" },
            { name: "Limonada con menta y jengibre", price: "$6.400" },
            { name: "Jugo de naranja natural", price: "$6.400" },
            { name: "Licuados", price: "$6.500" }
          ]
        },
        {
          title: "Cerveza",
          items: [
            { name: "Chopp Heineken", price: "$7.700" },
            { name: "Heineken Cero", price: "$6.600" }
          ]
        },
        {
          title: "Champagne",
          items: [
            { name: "Veuve Clicquot", price: "$465.200" },
            { name: "Moët Chandon", price: "$440.800" }
          ]
        },
        {
          title: "V. Espumantes",
          items: [
            { name: "Alma Negra Rosé", price: "$63.600" },
            { name: "Alma Negra BDB", price: "$63.600" },
            { name: "Cruzat (copa)", price: "$11.100" },
            { name: "Baron B Extra Brut", price: "$67.100" },
            { name: "Chandon Extra Brut", price: "$31.000" },
            { name: "Chandon Cuvée Reserve Blanc de Noirs", price: "$49.300" }
          ]
        }
      ]
    },

    /* ============================ MENÚ DE DÍA ============================ */
    {
      id: "dia",
      label: "Menú de Día",
      type: "sections",
      sections: [
        {
          title: "Tiraditos",
          items: [
            { name: "Uzuzukuri", price: "$14.600", desc: "Láminas de pescado blanco marinadas en ponzu ahumada, eneldo, quinoa crocante, aceite de oliva, salsa de rocoto y ralladura de lemon grass" },
            { name: "Nikkei de Atún", price: "$53.800", desc: "Láminas de atún con salsa de ostras, lima, wasabi, ají limo y cilantro" },
            { name: "Kimuchi de Atún", price: "$63.300", desc: "Láminas de atún, emulsión de palta wasabi, caviar negro, quinoa crocante, lima, salsa kimuchi, leche de coco, con mini ensalada de kiuri, manzana verde y negui" },
            { name: "Maracuyá", desc: "Servido con berros, lima y crocante de philo", variants: [ { label: "Salmón", price: "$40.500" }, { label: "Pescado blanco", price: "$23.400" } ] },
            { name: "Nikkei", desc: "Con salsa de ostras, lima, wasabi, ají limo y cilantro", variants: [ { label: "Salmón", price: "$40.500" }, { label: "Pescado blanco", price: "$21.100" } ] },
            { name: "Kimuchi", desc: "Emulsión de palta wasabi, caviar negro, quinoa crocante, lima, salsa kimuchi, leche de coco, con mini ensalada de kiuri, manzana verde y negui", variants: [ { label: "Salmón", price: "$40.800" } ] }
          ]
        },
        {
          title: "Tapas",
          items: [
            { name: "Sweet Potatoes", price: "$12.100", desc: "Bastones de camote tempura, miel de caña, sal del Himalaya, cilantro" },
            { name: "Mariscos al Fuego", price: "$57.800", desc: "Mix de mariscos salteados con manteca japonesa, togarashi y lima" },
            { name: "Ebi Crispy", price: "$24.400", desc: "Langostinos a la parrilla con crema de puerro, curry rojo, crocante de arroz, huevos de trucha, tenkatsu y ciboulette" },
            { name: "Sweet Shrimp", price: "$24.400", desc: "Langostinos crocantes y miel de cítricos ligeramente picantes, hilos de camote crocante, ají limo, negui, lima, cilantro" }
          ]
        },
        {
          title: "Woks",
          items: [
            { name: "Wok", desc: "Salteado de arroz, vegetales, cebolla morada, zucchini, chaucha, morrón rojo, morrón verde, salsa soja, salsa de ostras, mix de sésamo, brotes varios", variants: [ { label: "Niku (carne)", price: "$27.900" }, { label: "Tori (pollo)", price: "$27.100" }, { label: "Ebi (langostino)", price: "$30.400" }, { label: "Vegetales", price: "$18.800" }, { label: "Sake (salmón)", price: "$41.100" } ] }
          ]
        },
        {
          title: "Yasaitame",
          items: [
            { name: "Yasaitame", desc: "Salteado de cebolla blanca, zucchini, chaucha, morrón rojo, morrón verde, zanahoria, hakusai, cebolla china, brote de soja, vino blanco, salsa soja, salsa de ostras, zumo de lima, servido en plancha caliente sobre cebolla blanca, mix de sésamo y brotes", variants: [ { label: "Niku", price: "$27.900" }, { label: "Tori", price: "$26.300" }, { label: "Ebi", price: "$30.800" }, { label: "Vegetales", price: "$18.200" } ] }
          ]
        },
        {
          title: "Ensaladas",
          items: [
            { name: "Veggie Bowl", price: "$22.400", desc: "Quinoa, palta, choclo, tomates cherry, edamame, hinojo y aliño cítrico" },
            { name: "Unido Bowl", price: "$19.700", desc: "Camote tempura, zanahoria, edamame, tomates cherry, quinoa roja, choclo y huevo poché" },
            { name: "Chicken Bowl", price: "$23.500", desc: "Pollo crocante, zanahoria, edamame, palta, repollo morado, tomates cherry y aliño teriyaki" },
            { name: "Tataki Salad", price: "$29.200", desc: "De salmón o pescado blanco, con mix de verdes, palta, salsa oriental y sésamo" },
            { name: "Caesar Salad", price: "$23.400", desc: "Pollo grillado, mix de verdes, croutons de pan de campo, queso parmesano y aderezo caesar" }
          ]
        },
        {
          title: "Sashimi (4 cortes)",
          items: [
            { name: "Atún", price: "$29.900" },
            { name: "Salmón", price: "$23.900" },
            { name: "Pulpo", price: "$32.900" },
            { name: "Langostino", price: "$13.800" },
            { name: "Pescado blanco", price: "$14.100" }
          ]
        },
        {
          title: "Niguiri (2 unidades)",
          items: [
            { name: "Atún", price: "$18.000" },
            { name: "Salmón", price: "$14.200" },
            { name: "Pulpo", price: "$20.600" },
            { name: "Langostino", price: "$10.600" },
            { name: "Pescado blanco", price: "$10.000" }
          ]
        },
        {
          title: "Niguiris especiales",
          items: [
            { name: "Ebi Kuro", price: "$13.300", desc: "De langostinos, flambeado con salsa de pimientos rojos y ajo negro, caviar negro y katsuobushi" },
            { name: "Crispy Rice Tuna", price: "$23.400", desc: "Base de arroz crocante con tartare de atún, albahaca, menta, aceite de sésamo, lima y salsa acevichada" },
            { name: "Shiromi Crispy Rice", price: "$14.200", desc: "Base de arroz crocante con tartare de pescado blanco, cilantro, cebolla morada, mango, leche de tigre ahumada y salsa de pimiento rojo" },
            { name: "Shiromi Kimuchi", price: "$14.300", desc: "De pescado blanco, coronado con emulsión de palta wasabi, salsa kimuchi, caviar negro y leche de coco" }
          ]
        },
        {
          title: "Geishas",
          items: [
            { name: "Geisha Clásica", price: "$2.800", desc: "Salmón, palta y phila, con salsa tare y sésamo" },
            { name: "Geisha Maracuyá", price: "$14.200", desc: "Láminas de salmón rellenas con queso phila y mango, bañada en miel de maracuyá y lluvia crocante de masa philo" }
          ]
        },
        {
          title: "Makis",
          items: [
            { name: "Hot Roll", price: "$24.800", desc: "Salmón, palta y queso philadelphia por dentro, envuelto en nori y panko, con salsa sweet tonkatsu" },
            { name: "Tempura", price: "$21.900", desc: "Salmón cocido por dentro, tempura y panko por fuera, coronado con guacamole, lima y crocante de philo" },
            { name: "Crispy", price: "$23.100", desc: "Ebi tempura, queso y palta por dentro, crocante de tapioca por fuera y salsa de anguila" },
            { name: "2 Salmones", price: "$32.800", desc: "Tartare de salmón y palta por dentro, salmón tataki por fuera, chives y salsa oriental" },
            { name: "Maki Furai", price: "$28.500", desc: "Salmón, palta y queso, crocante por fuera, acompañado de salsa tare" },
            { name: "Ebicado", price: "$23.400", desc: "Ebi tempura y queso por dentro, palta y salsa de anguila por fuera" },
            { name: "Passion", price: "$30.900", desc: "Ebi tempura, berro y queso por dentro, salmón, crocante de philo por fuera, bañado en miel de maracuyá" },
            { name: "Smoke", price: "$27.600", desc: "Salmón ahumado, queso philadelphia y mango por dentro, cubierto de palta, salsa tare y camote crocante por fuera" }
          ]
        },
        {
          title: "Especiales (rolls)",
          items: [
            { name: "Shiromi", price: "$31.800", desc: "Pescado blanco en tempura y palta por dentro, pescado blanco, leche de tigre ahumada y furikake andino" },
            { name: "Kuromaki", price: "$25.100", desc: "Salmón cocido con toques orientales y ajo negro, negui a la plancha y palta por dentro, pescado blanco sellado con aceite de huacatay con salsa de pimiento rojo y ciboulette" },
            { name: "Go Vegan", price: "$23.500", desc: "Camote en tempura, palta, zanahoria y negui a la plancha por dentro, quinoa roja por fuera, emulsión de pimiento rojo, salsa abura y ralladura de lemon grass" }
          ]
        },
        {
          title: "Cocina",
          items: [
            { name: "Ravioles sin TACC", price: "$24.400", desc: "Harina de arroz, fécula de mandioca, pescado blanco, philadelphia, sésamo, cilantro, crema de portobello, brócoli, huevo poché" },
            { name: "Sorrentinos", price: "$27.400", desc: "Asado braseado, cebolla morada, ají amarillo, jengibre, ostra, soja, con crema de fondo de cocción, terminado con brotes varios" },
            { name: "Risotto & Quinoa", price: "$39.600", desc: "Quinoa blanca, en salsa de ají amarillo, cebolla caramelizada, queso parmesano, langostinos a la parrilla y cilantro" },
            { name: "Ojo de Bife", price: "$50.400", desc: "400 grs a la plancha con papas" },
            { name: "Pollo Teriyaki", price: "$29.900", desc: "Acompañado con arroz thai" },
            { name: "Salmón & Plancha", price: "$62.800", desc: "Acompañado de salteado de vegetales, soja, ostras, mix sésamo" },
            { name: "Bife de Chorizo Ancho", price: "$43.300", desc: "Acompañado con papas rústicas" },
            { name: "Pescado Blanco y Brasa", price: "$38.500", desc: "Pesca del día con chimichurri oriental, acompañado de camote grillado, servido a las brasas" },
            { name: "Trucha Patagónica", price: "$46.000", desc: "Marinada en aceite saborizado, escamas de sal marina en aceite de trufa" },
            { name: "Ishiyaki", price: "$41.000", desc: "Pescado blanco en salsa pachamanquera, papas crocantes y arroz andino" }
          ]
        },
        {
          title: "Especiales",
          items: [
            { name: "Burger's de Bife de Chorizo", price: "$24.800", desc: "Con queso cheddar, tomate, salsa BBQ y papas crocantes" },
            { name: "Pollo Crispy", price: "$24.800", desc: "Bastones de pollo crujientes con papas crocantes" },
            { name: "Milanesa de lomo con queso port salut", price: "$27.800", desc: "Con papas crocantes" },
            { name: "Milanesa de lomo", price: "$27.200", desc: "Con papas crocantes" },
            { name: "Penne Rigatte", price: "$24.400", desc: "Pollo, puerro, espinacas, portobello, crema de leche, pichicata" },
            { name: "Kids Pasta", price: "$19.800", desc: "Penne rigatte con salsa rosa" },
            { name: "Quiche de puerro", price: "$28.000", desc: "Masa brisé, crema, puerros, huevo, queso tybo y parmesano, acompañado con rúcula y tomate asado" },
            { name: "Bruschetta", price: "$16.400", desc: "Tostón de pasas y nueces, queso agrio, salmón ahumado, tomates cherry asados y brotes" },
            { name: "Huevo revuelto", price: "$14.200", desc: "Tostón de pan de semillas, palta pisada, queso crema, aceite de oliva" }
          ]
        },
        {
          title: "Ceviches",
          items: [
            { name: "Clásico", desc: "Leche de tigre, cilantro, ají limo, cebolla morada, maíz chulpi y camote crocante", variants: [ { label: "Salmón", price: "$48.800" }, { label: "Pescado blanco", price: "$31.200" } ] },
            { name: "Al ají amarillo", desc: "Base del clásico, ají amarillo ahumado, sésamo, maíz chulpi", variants: [ { label: "Salmón", price: "$49.000" }, { label: "Pescado blanco", price: "$38.900" } ] },
            { name: "Wasabi", price: "$61.100", desc: "Pescado blanco y mariscos en leche de tigre cremosa de wasabi" },
            { name: "Mixto", price: "$67.200", desc: "Pulpo, vieiras, langostinos y pesca del día, marinados en leche de tigre, rocoto, cilantro, con calamar crocante y maíz chulpi" },
            { name: "Ceviche Patagónico", price: "$32.100", desc: "Langostinos, mango, negui, kiuri, leche de tigre ahumada, cilantro, rocoto, palta y choclo tataki, huevas de trucha y calamar crocante" }
          ]
        },
        {
          title: "Tartare",
          items: [
            { name: "Maguro Tartare", price: "$57.400", desc: "Atún, manzana verde, salsa kimuchi, palta y caviar negro" },
            { name: "Sake Tartare", price: "$47.300", desc: "Salmón, menta, salsa de wasabi, palta, alga nori y quinoa crocante" }
          ]
        },
        {
          title: "Postres",
          items: [
            { name: "Flan de claras, naranja y cereales", price: "$12.300", desc: "Flan de claras con confitura de naranja casera, salsa de yogurt y mix de cereales" },
            { name: "Cremoso de Nutella", price: "$12.900", desc: "Pastel húmedo con nutella, salsa de chocolate, crocante de quinoa y semillas de chía con helado de americana" },
            { name: "Volcán de dulce de leche", price: "$12.900", desc: "Con helado de americana, sobre crumble de frutos secos y tuil" },
            { name: "Crocante de chocolate", price: "$12.900", desc: "Sablé de cacao relleno de chocolate negro, castañas de pará, helado de americana, caviar de cacao, frutilla deshidratada y merengue seco" },
            { name: "Helado artesanal", price: "$11.700", desc: "Dos bochas" }
          ]
        }
      ]
    },

    /* ============================ MENÚ DE NOCHE ============================ */
    {
      id: "noche",
      label: "Menú de Noche",
      type: "sections",
      note: "Chef Itamae Executive: Carlos Santomauro · Executive Chef: Javier Lobo",
      sections: [
        {
          title: "Tiraditos",
          items: [
            { name: "Andino", price: "$17.700", desc: "Láminas de panza de salmón selladas con aceite de huacatay, furikake andino, emulsión de palta, pasta de hongos, salsa de ají amarillo, shiso y sal Himalaya" },
            { name: "Uzuzukuri", price: "$14.600", desc: "Láminas de pescado blanco marinadas en ponzu ahumada, eneldo, quinoa crocante, aceite de oliva, salsa de rocoto y ralladura de lemon grass" },
            { name: "Pulpo", price: "$66.000", desc: "Cortes de pulpo español, palta y choclo tataki, mousse de olivas negras y verdes, salsa de ají amarillo ahumado, hojas de cilantro, ají limo, aceite de huacatay, emulsión de palta, lima, quinoa crocante y salsa de pimiento rojo" },
            { name: "Nikkei de Atún", price: "$53.800", desc: "Láminas de atún con salsa de ostras, lima, wasabi, ají limo y cilantro" },
            { name: "Kimuchi de Atún", price: "$63.300", desc: "Láminas de atún, emulsión de palta wasabi, caviar negro, quinoa crocante, lima, salsa kimuchi, leche de coco, con mini ensalada de kiuri, manzana verde y negui" },
            { name: "Shiromi", price: "$11.900", desc: "De pescado blanco sellado con salsa abura, palta tataki, rocoto ahumado, lima y furikake andino" },
            { name: "Ebi Kuro", price: "$13.300", desc: "De langostinos, flambeado con salsa de pimientos rojos y ajo negro, caviar negro y katsuobushi" },
            { name: "Rocoto", price: "$5.600", desc: "De salmón sellado con aceite de huacatay, salsa de rocoto ahumado, eneldo y quinoa roja crocante" },
            { name: "Maracuyá", desc: "Servido con berros, lima y crocante de philo", variants: [ { label: "Salmón", price: "$40.500" }, { label: "Pescado blanco", price: "$23.400" } ] },
            { name: "Nikkei", desc: "Con salsa de ostras, lima, wasabi, ají limo y cilantro", variants: [ { label: "Salmón", price: "$40.500" }, { label: "Pescado blanco", price: "$21.100" }, { label: "Pulpo", price: "$58.200" } ] },
            { name: "Kimuchi", desc: "Emulsión de palta wasabi, caviar negro, quinoa crocante, lima, salsa kimuchi, leche de coco, con mini ensalada de kiuri, manzana verde y negui", variants: [ { label: "Salmón", price: "$40.800" } ] }
          ]
        },
        {
          title: "Tapas",
          items: [
            { name: "Spicy Edamame", price: "$23.100", desc: "Salteado con chilli garlic, manteca japonesa, fondo de vegetales, sal marina" },
            { name: "Hotate Parma", price: "$39.500", desc: "Conchas de abanico, ají amarillo, curry, togarashi, aceite de ajonjolí, parmesano, chalaquita, rocoto, lima" },
            { name: "Noritako", price: "$14.200", desc: "Pulpa de langostinos, shari, kyuri, emulsión de ají amarillo, alga crocante, huevas de trucha" },
            { name: "Scallop Philly", price: "$24.400", desc: "Callos de vieiras envueltos en masa crocante, con miel de rocoto y miso" },
            { name: "Mariscos al Fuego", price: "$57.800", desc: "Mix de mariscos salteados con manteca japonesa, togarashi y lima" },
            { name: "Ebi Crispy", price: "$24.400", desc: "Langostinos a la parrilla en crema de puerro, curry rojo, crocante de arroz, huevos de trucha, tenkatsu, ciboulette" },
            { name: "Sweet Shrimp", price: "$24.400", desc: "Langostinos crocantes y miel de cítricos ligeramente picantes, hilos de camote crocante, ají limo, negui, lima, cilantro" }
          ]
        },
        {
          title: "Woks",
          items: [
            { name: "Wok", desc: "Salteado de arroz, vegetales, cebolla morada, zucchini, chaucha, morrón rojo, morrón verde, salsa soja, salsa de ostras, mix de sésamo, brotes varios", variants: [ { label: "Niku", price: "$27.900" }, { label: "Tori", price: "$27.100" }, { label: "Ebi", price: "$30.400" }, { label: "Vegetales", price: "$18.800" }, { label: "Sake", price: "$41.100" } ] }
          ]
        },
        {
          title: "Ceviches",
          items: [
            { name: "Ceviche Patagónico", price: "$32.100", desc: "Langostinos, mango, negui, kiuri, leche de tigre ahumada, cilantro, rocoto, palta y choclo tataki, huevas de trucha y calamar crocante" },
            { name: "Clásico", desc: "Leche de tigre, cilantro, ají limo, cebolla morada, maíz chulpi y camote crocante", variants: [ { label: "Salmón", price: "$48.800" }, { label: "Pescado blanco", price: "$31.200" } ] },
            { name: "Al ají amarillo", desc: "Sésamo, maíz chulpi", variants: [ { label: "Salmón", price: "$49.000" }, { label: "Pescado blanco", price: "$38.900" } ] },
            { name: "Wasabi", price: "$61.100", desc: "Pescado blanco y mariscos en leche de tigre cremosa de wasabi" },
            { name: "Mixto", price: "$67.200", desc: "Pulpo, vieiras, langostinos y pesca del día, marinados en leche de tigre, rocoto, cilantro, con calamar crocante y maíz chulpi" }
          ]
        },
        {
          title: "Tartare",
          items: [
            { name: "Sake Tartare", price: "$47.300", desc: "Salmón, menta, salsa de wasabi, palta, alga nori y quinoa crocante" },
            { name: "Maguro Tartare", price: "$57.400", desc: "Atún, manzana verde, salsa kimuchi, palta y caviar negro" }
          ]
        },
        {
          title: "Sashimi (4 cortes)",
          items: [
            { name: "Atún", price: "$29.900" },
            { name: "Salmón", price: "$23.900" },
            { name: "Langostino", price: "$32.900" }
          ]
        },
        {
          title: "Sashimis especiales",
          items: [
            { name: "Sake Truffle", price: "$21.700", desc: "De panza de salmón sellada con aceite de trufas, lima, zest de limón y naranja, sal Himalaya y soja" },
            { name: "Tataki de atún", price: "Consultar", desc: "De atún sellado con sal y fuego directo, con base de emulsión de palta y espinacas, coronado con caviar negro, salsa nikkei, ají amarillo ahumado y quinoa roja crocante" }
          ]
        },
        {
          title: "Niguiri (2 unidades)",
          items: [
            { name: "Atún", price: "$18.000" },
            { name: "Salmón", price: "$14.200" },
            { name: "Pulpo", price: "$20.600" },
            { name: "Langostino", price: "$10.600" },
            { name: "Pescado blanco", price: "$10.000" }
          ]
        },
        {
          title: "Geishas",
          items: [
            { name: "Geisha Clásica", price: "$2.800" },
            { name: "Geisha Maracuyá", price: "$14.200" }
          ]
        },
        {
          title: "Niguiris especiales",
          items: [
            { name: "Sake Truffle", price: "$15.000", desc: "Sushi de salmón sellado a fuego con aceite de trufa blanca y notas cítricas" },
            { name: "Crispy Rice", price: "$14.200", desc: "Base de arroz crocante con tartare de salmón picante, cilantro, cebolla morada, lima, ciboulette y aceite de sésamo" },
            { name: "Nissei", price: "$16.200", desc: "De salmón, sellado con aceite de trufa, salsa de ají amarillo ahumado y shiso" },
            { name: "Crispy Rice Tuna", price: "$23.400", desc: "Base de arroz crocante con tartare de atún, albahaca, menta, aceite de sésamo, lima y salsa acevichada" },
            { name: "Shiromi Crispy Rice", price: "$14.200", desc: "Base de arroz crocante con tartare de pescado blanco, cilantro, cebolla morada, mango, leche de tigre ahumada y salsa de pimiento rojo" },
            { name: "Tuna Kimuchi", price: "$21.600", desc: "De atún, coronado con emulsión de palta wasabi, salsa kimuchi, caviar negro y leche de coco" },
            { name: "Shiromi Kimuchi", price: "$14.300", desc: "De pescado blanco, coronado con emulsión de palta wasabi, salsa kimuchi, caviar negro y leche de coco" }
          ]
        },
        {
          title: "Ensaladas",
          items: [
            { name: "Veggie Bowl", price: "$22.400" },
            { name: "Unido Bowl", price: "$19.700" },
            { name: "Chicken Bowl", price: "$23.500" },
            { name: "Tataki Salad", price: "$29.200" },
            { name: "Caesar Salad", price: "$23.400" }
          ]
        },
        {
          title: "Makis",
          items: [
            { name: "Tempura", price: "$21.900" },
            { name: "Smoke", price: "$27.600" },
            { name: "2 Salmones", price: "$32.800" },
            { name: "Crispy", price: "$23.100" },
            { name: "Maki Furai", price: "$28.500" },
            { name: "Ebicado", price: "$23.400" },
            { name: "Passion", price: "$30.900" }
          ]
        },
        {
          title: "Makis especiales",
          items: [
            { name: "Rocoto Maki", price: "$32.600", desc: "Salmón, negui a la plancha y palta por dentro, cubierto con pescado blanco, sellado a fuego directo con aceite de huacatay, salsa de rocoto ahumada y quinoa roja crocante" },
            { name: "Ebi Kimuchi", price: "$37.600", desc: "Ebi tempura y espárragos a la plancha por dentro, por fuera palta, salsa kimuchi, caviar negro y leche de coco" },
            { name: "Sweet Smoke", price: "$28.800", desc: "Ebi tempura, salmón ahumado y ciboulette por dentro, mango por fuera, miel de maracuyá, amaranto pop y mayonesa ahumada" },
            { name: "Shiromi", price: "$31.800", desc: "Pescado blanco en tempura y palta por dentro, pescado blanco, leche de tigre ahumada y furikake andino por fuera" },
            { name: "Kuromaki", price: "$25.100" },
            { name: "Go Vegan", price: "$23.500" },
            { name: "2 Tuna", price: "$48.800", desc: "Tartare de atún con toques orientales y palta por dentro, atún tataki por fuera, shiso y salsa oriental" },
            { name: "Hot Roll", price: "$24.800" },
            { name: "Extasis", price: "$25.200", desc: "Langostinos, ciboulette, palta, queso y huevas de trucha por dentro, nori y daikon por fuera, miel de maracuyá" },
            { name: "Parma", price: "$30.800", desc: "Ebi tempura y palta por dentro, vieiras por fuera, queso parmesano fundido con mantequilla oriental, chalaquita y salsa de ají amarillo ahumado" }
          ]
        },
        {
          title: "Cocina",
          items: [
            { name: "Sea Grill", price: "$92.100", desc: "Langostinos, chipirones, marinados con salsa de ajíes peruanos, pulpo con salsa anticuchera, servido en plancha caliente sobre cebolla blanca, ciboulette. Acompañado de gohan" },
            { name: "Spicy Sour Seafood", price: "$53.700", desc: "Mariscos al wok, shitake, negi, lima, togarashi. Acompañado de gohan" },
            { name: "Pescado Blanco y Brasa", price: "$38.500", desc: "Pesca del día con chimichurri oriental, acompañado de camote grillado, servido a las brasas" },
            { name: "Seafood Rice", price: "$70.800", desc: "Arroz con salsa de ajíes peruanos, fondo de pescado, pulpo, langostinos, vieiras a la parrilla marinadas en aceite de ajo y hondashi, palta tataki y chalaquita de rocoto" },
            { name: "Shiromi Almonds", price: "$40.600", desc: "Pescado blanco marinado en soja con salsa de ajo crocante, almendras, ají peruano, negi y lima, acompañado de gohan" },
            { name: "Picante & Mariscos", price: "$77.800", desc: "Mariscos salteados con salsa de ajíes peruanos, yuca crocante. Acompañado de gohan" },
            { name: "Pulpo", price: "$100.300", desc: "Pulpo grillado, con chimichurri japonés, lima, cilantro, acompañado con chips de papas, vegetales grillados y salsa de ají amarillo ahumado" },
            { name: "Risotto & Quinoa", price: "$39.600", desc: "Quinoa blanca, en salsa de ají amarillo, cebolla caramelizada, queso parmesano, langostinos a la parrilla y cilantro" },
            { name: "Sake Anticucho", price: "$36.900", desc: "Salmón a la parrilla marinado en salsa de coriandro, edamame, choclito, cebolla morada, cilantro, ají limo, lima, pichicata. Acompañado de gohan" },
            { name: "Bao Bao", price: "$26.800", desc: "Pan al vapor crocante, asado de tira braseado, pepino y cilantro. Acompañado de papas andinas anticucheras" },
            { name: "Trucha Patagónica", price: "$46.000", desc: "Marinada en aceite saborizado, escamas de sal marina en aceite de trufa" },
            { name: "Tokusen", price: "$44.900", desc: "Salmón marinado en salsa de ajíes peruanos, cebolla encurtida, salsa de ají amarillo" },
            { name: "Ishiyaki", price: "$41.000", desc: "Pescado blanco en salsa pachamanquera, papas crocantes y arroz andino" },
            { name: "Ojo de Bife", price: "$50.400", desc: "400 grs a la plancha con papas" },
            { name: "Bife de Chorizo Ancho", price: "$43.300", desc: "Acompañado con papas rústicas" }
          ]
        },
        {
          title: "Especiales",
          items: [
            { name: "Burger's de Bife de Chorizo", price: "$24.800" },
            { name: "Pollo Crispy", price: "$24.800" },
            { name: "Milanesa de lomo con queso port salut", price: "$27.800" },
            { name: "Milanesa de lomo", price: "$27.200" },
            { name: "Sorrentinos", price: "$27.400" },
            { name: "Ravioles sin TACC", price: "$24.400" },
            { name: "Kids Pasta", price: "$19.800" },
            { name: "Penne Rigatte", price: "$24.400" }
          ]
        },
        {
          title: "Postres",
          items: [
            { name: "Volcán de dulce de leche", price: "$12.900" },
            { name: "Flan de claras, naranja y cereales", price: "$12.300" },
            { name: "Helado artesanal", price: "$11.700", desc: "Dos bochas" },
            { name: "Cremoso de Nutella", price: "$12.900" },
            { name: "Crocante de chocolate", price: "$12.900" }
          ]
        }
      ]
    },

    /* ============================ VINOS Y COCKTAILS ============================ */
    {
      id: "vinos",
      label: "Vinos y Cocktails",
      type: "accordion",
      note: "Head Sommelier: Aldo Torres Ríos",
      sections: [
        {
          title: "Por copa / By glass",
          items: [
            { name: "Cruzat Extra Brut", price: "$11.100" },
            { name: "Chardonnay, Capítulo 2, Ruca Malén", price: "$11.700" },
            { name: "Blanc de Noir, El Esteco", price: "$11.700" },
            { name: "Malbec, Capítulo 2", price: "$13.400" },
            { name: "Pinot Noir, Marantiqua", price: "$13.400" }
          ]
        },
        {
          title: "Burbujas / Bubbles",
          items: [
            { name: "Krug Grande Cuvée, Reims, Francia", price: "$650.000" },
            { name: "Veuve Clicquot Yellow Label Brut, Reims, Francia", price: "$380.000" },
            { name: "Moët & Chandon Brut Impérial, Épernay, Francia", price: "$320.000" },
            { name: "Rutini Brut Nature, Valle de Uco, Argentina", price: "$73.500" },
            { name: "Phillippe Caraguel Grand Cuvée Blanco, Argentina", price: "$63.200" },
            { name: "Zaha Calcaire Brut Nature, Valle de Uco, Argentina", price: "$54.200" },
            { name: "Petit Fleur Brut Nature, Valle de Uco, Argentina", price: "$41.600" },
            { name: "Philippe Caraguel Extra Brut Rosé, Agrelo, Argentina", price: "$38.500" }
          ]
        },
        {
          title: "Vinos blancos / White wines",
          items: [
            { name: "Chardonnay White Bones, Catena Zapata, Valle de Uco 2022", price: "$210.800" },
            { name: "Chardonnay Barda, Bodega Chacra, Mainqué, Río Negro", price: "$85.500" },
            { name: "Chardonnay Lindaflor, Monteviejo, Vista Flores, Valle de Uco", price: "$71.400" },
            { name: "Chardonnay El Enemigo, Aleanna, Gualtallary, Valle de Uco", price: "$66.400" },
            { name: "Chardonnay Pequeñas Producciones, Escorihuela Gascón, Mendoza", price: "$40.000" },
            { name: "Chardonnay Capítulo 2, Ruca Malén, Gualtallary, Valle de Uco", price: "$34.500" },
            { name: "Sauvignon Blanc, Familia Zuccardi, Tupungato, Mendoza", price: "$41.400" },
            { name: "Sauvignon Blanc Rutini Colección, Rutini Wines, Mendoza", price: "$34.300" },
            { name: "Torrontés Lagunar, Otronia, Sarmiento, Chubut", price: "$75.800" },
            { name: "Torrontés Gran Nevado, Vinos Adentro, Cachi, Salta", price: "$46.500" },
            { name: "Viognier Diamandes, Bodega Diamandes, Vista Flores, Mendoza", price: "$44.600" },
            { name: "Semillón Zaha, Bodega Zaha, La Consulta, Mendoza", price: "$37.700" },
            { name: "Corte de Blancas Sierra Lima Alfa, SLA, Valles Calchaquíes, Salta", price: "$60.500" },
            { name: "White Blend De Sangre, Luigi Bosca, Valle de Uco, Mendoza", price: "$42.500" }
          ]
        },
        {
          title: "Naranjo / Orange",
          items: [
            { name: "Apuntes Naranjo, Luigi Bosca, Gualtallary, Valle de Uco", price: "$45.500" },
            { name: "Cadus Appellation, Cadus Wines, Valle de Uco, Mendoza", price: "$42.400" }
          ]
        },
        {
          title: "Rosado / Rosé",
          items: [
            { name: "Rutini Rosé, Rutini Wines, Valle de Uco, Mendoza", price: "$72.300" },
            { name: "Ikigai Rosé, Ballester Wine & Co., Valle de Uco, Mendoza", price: "$39.100" },
            { name: "Rosé Nuna Orgánico, Bodega Chakana, Agrelo, Mendoza", price: "$30.700" }
          ]
        },
        {
          title: "Tinto / Red",
          items: [
            { name: "Pinot Noir, La Linterna, Familia Bemberg, Los Árboles, Mendoza", price: "$128.300" },
            { name: "Pinot Noir, Barda, Bodega Chacra, Mainqué, Río Negro", price: "$95.500" },
            { name: "Pinot Noir, Domaine Nico Grand Père, Domaine Nico, Mendoza", price: "$74.700" },
            { name: "Pinot Noir, Mariflor, Bodega Rolland, Valle de Uco, Mendoza", price: "$73.000" },
            { name: "Pinot Noir, Pulenta Estate, Pulenta Estate, Tupungato, Mendoza", price: "$50.700" },
            { name: "Merlot Rutini Single Vineyard, Rutini Wines, Paraje Altamira, Mendoza", price: "$88.100" },
            { name: "Merlot Angélica Zapata Alta, Catena Zapata, Agrelo, Mendoza", price: "$73.000" },
            { name: "Merlot Mariflor, Bodega Rolland, Vista Flores, Mendoza", price: "$65.600" },
            { name: "Merlot Ribera del Cuarzo Clásico, Bodega Ribera del Cuarzo, Río Negro", price: "$60.500" },
            { name: "Malbec Mariflor Camille, Bodega Rolland, Valle de Uco, Mendoza", price: "$423.400" },
            { name: "Malbec Finca Los Andes DOC, Mendel, Perdriel, Mendoza", price: "$265.900" },
            { name: "Malbec Adrianna Vineyard River, Catena Zapata, Gualtallary, Mendoza", price: "$257.400" },
            { name: "Malbec Val de Flores, Bodega Rolland, Valle de Uco, Mendoza", price: "$207.500" },
            { name: "Malbec Las Bravas, Bodega Aleanna, Gualtallary, Mendoza", price: "$198.000" },
            { name: "Malbec Raquis Las Bases, Bodega Raquis, Mendoza", price: "$115.300" },
            { name: "Malbec El Enemigo, Bodega Aleanna, Gualtallary, Mendoza", price: "$67.900" },
            { name: "Malbec Araucana Río de los Ciervos, Bodega Ribera del Cuarzo, Río Negro", price: "$58.700" },
            { name: "Malbec La Coste de los Andes, La Coste de los Andes, Mendoza", price: "$56.500" },
            { name: "Malbec Miraluna Cachi, Miraluna Wines, Cachi, Salta", price: "$39.700" },
            { name: "Cabernet Franc Raquis San Pablo, Raquis, San Pablo, Mendoza", price: "$250.000" },
            { name: "Cabernet Franc Gran, Pulenta Estate, Luján de Cuyo, Mendoza", price: "$128.800" },
            { name: "Cabernet Franc Gran Enemigo, Bodega Aleanna, Gualtallary, Mendoza", price: "$96.300" },
            { name: "Cabernet Franc Altaluvia, Doña Paula, Gualtallary, Mendoza", price: "$73.600" },
            { name: "Cabernet Franc Pulenta Estate, Luján de Cuyo, Mendoza", price: "$48.000" },
            { name: "Cabernet Franc Lagarde Guarda, Lagarde Bodega, Mendoza", price: "$40.800" },
            { name: "Cabernet Sauvignon Birth of Cabernet, Catena Zapata, Mendoza", price: "$133.500" },
            { name: "Cabernet Sauvignon Fincas Notables, El Esteco, Salta", price: "$69.100" },
            { name: "Cabernet Sauvignon Felino, Viña Cobos, Luján de Cuyo, Mendoza", price: "$43.100" },
            { name: "Tannat Fincas Notables, El Esteco, Valle de Cafayate, Salta", price: "$69.100" },
            { name: "Syrah Diamandes, Bodega Diamandes, Valle de Uco, Mendoza", price: "$53.200" },
            { name: "Sangiovese Tiempo Infinito, Flor Silvestre, Tupungato, Mendoza", price: "$45.000" },
            { name: "Garnacha Capítulo 2, Ruca Malén, Luján de Cuyo, Mendoza", price: "$33.200" },
            { name: "Criolla Universo LB, Ballester Wine & Co., Valle de Uco, Mendoza", price: "$33.000" },
            { name: "Blend Mariflor Arthur & Theo, Bodega Rolland, Valle de Uco, Mendoza", price: "$424.700" },
            { name: "Blend Lindaflor, Bodegas y Viñedos Monteviejo, Vista Flores, Mendoza", price: "$166.400" },
            { name: "Blend Diamandes de Uco Grande Reserve, Valle de Uco, Mendoza", price: "$148.000" },
            { name: "Blend De Ángeles Gran Corte, Viña 1924 De Ángeles, Mendoza", price: "$134.500" },
            { name: "Blend Riccitelli & Father, Riccitelli Wines, Mendoza", price: "$136.400" },
            { name: "Blend Bressia Profundo, Bressia Wines, Valle de Uco, Mendoza", price: "$95.700" },
            { name: "Blend Cocodrilo Corte, Viña Cobos, Luján de Cuyo, Mendoza", price: "$51.000" },
            { name: "Blend Clos de los Siete, Clos de los Siete, Valle de Uco, Mendoza", price: "$47.000" },
            { name: "Blend DV Catena, Catena Zapata, Valle de Uco, Mendoza", price: "$46.300" }
          ]
        },
        {
          title: "Otras Fronteras / Other Borders",
          items: [
            { name: "Verdejo Ossian, Vides y Vinos Ossian, Castilla y León, España", price: "$140.000" },
            { name: "Riesling Markus Molitor Ürzi Ger Würzgarten, Alemania", price: "$115.000" },
            { name: "Sauvignon Blanc Vicar's Choice, Nueva Zelanda", price: "$57.000" },
            { name: "Bianco Villa Antinori, Antinori, Toscana, Italia", price: "$50.000" },
            { name: "Albariño, Garzón Reserva, Bodega Garzón, Garzón, Uruguay", price: "$50.100" },
            { name: "Rosé Château La Coste, Château La Coste, Provence, Francia", price: "$91.000" },
            { name: "Rosé Lisa, Château La Coste, Provence, Francia", price: "$40.700" },
            { name: "Cabernet Sauvignon, La Linterna, Familia Bemberg, Napa Valley, EEUU", price: "$150.400" },
            { name: "Blend Canta La Perdiz, Dominio del Águila, España", price: "$1.700.000" },
            { name: "Blend M. Chapoutier Le Pavillon Ermitage, Michel Chapoutier, Francia", price: "$1.250.000" },
            { name: "Blend Jacopo Biondi Schidione, Jacopo Biondi Santi, Toscana IGT, Italia", price: "$1.130.000" }
          ]
        },
        {
          title: "Dulce / Sweet",
          items: [
            { name: "Tardío Lindaflor, Bodegas y Viñedos Monteviejo, Vista Flores, Mendoza", price: "$84.800" },
            { name: "Vin Doux Naturel, Rutini Wines, Valle de Uco, Mendoza", price: "$62.500" },
            { name: "Petit Manseng Tardío, Terrazas de los Andes, Valle de Uco, Mendoza", price: "$47.500" }
          ]
        },
        {
          title: "Whiskies Blend",
          items: [
            { name: "Johnnie Walker Blue Label", price: "$86.000" },
            { name: "Kamiki Sakura", price: "$57.200" },
            { name: "Johnnie Walker Green Label", price: "$33.700" },
            { name: "Chivas Regal 18", price: "$24.600" },
            { name: "Peat Monster", price: "$24.600" },
            { name: "Chivas Regal 12", price: "$23.400" },
            { name: "Johnnie Walker Gold Label", price: "$19.100" },
            { name: "Chivas Regal Mizunara", price: "$15.000" },
            { name: "Ballantine's 12 años", price: "$11.500" },
            { name: "Johnnie Walker Double Black", price: "$11.000" },
            { name: "Jack Daniel's Single Barrel", price: "$17.200" }
          ]
        },
        {
          title: "Whiskies Single Malt",
          items: [
            { name: "The Macallan Doble Cask 18", price: "$86.900" },
            { name: "Glenmorangie 18", price: "$48.300" },
            { name: "Glen Moray Heritage 15", price: "$33.100" },
            { name: "Highland Park 12", price: "$29.100" },
            { name: "Talisker 10", price: "$26.900" },
            { name: "Caol Ila 12", price: "$25.700" },
            { name: "Glenkinchie 12", price: "$25.500" },
            { name: "Glenfiddich 12", price: "$23.000" },
            { name: "Glenmorangie 10", price: "$20.200" }
          ]
        },
        {
          title: "Cocktails",
          items: [
            { name: "Sao Paulo", price: "$15.700", desc: "Gin, Campari, almíbar de v. berries, jugo de limón, jugo de pomelo y clara de huevo" },
            { name: "London Citric", price: "$15.700", desc: "Gin, almíbar de cítricos, jugo de limón, jugo de pomelo, agua de jengibre y agua de pepinos" },
            { name: "Caipi Unido", price: "$13.600", desc: "Absolut de pera, maracuyá, lima, pomelo, azúcar" },
            { name: "Pisco Mule", price: "$13.300", desc: "Pisco Barsol, almíbar de cítricos, jugo de limón, agua de jengibre y soda" },
            { name: "New York Sour", price: "$13.200", desc: "Jim Beam, vino tinto, almíbar simple, jugo de limón y clara de huevo" },
            { name: "Oishí Aka", price: "$13.000", desc: "Absolut de pera, Amaretto Disaronno, jugo de limón, maracuyá, almíbar, frutilla" }
          ]
        },
        {
          title: "Mocktails",
          items: [
            { name: "Jamaica Lemon", price: "$9.600", desc: "Limón, pomelo, almíbar de hibiscus, agua, lima deshidratada" },
            { name: "Youzi", price: "$9.600", desc: "Cordial de pomelo, naranja, limón, sprite, frutos rojos y menta" }
          ]
        },
        {
          title: "Clásicos",
          items: [
            { name: "Caipiroska", price: "$13.300" },
            { name: "Pisco Sour", price: "$12.000" },
            { name: "Aperol Spritz", price: "$11.800" },
            { name: "Espresso Martini", price: "$11.800" },
            { name: "Negroni", price: "$11.600" },
            { name: "Moscow Mule", price: "$11.800" },
            { name: "Mojito", price: "$11.600" },
            { name: "Margarita", price: "$11.600" }
          ]
        },
        {
          title: "Gin Tonics",
          items: [
            { name: "Gin Tonic", price: "$12.100" },
            { name: "Gin Tonic The Botanist", price: "$50.500" },
            { name: "Gin Tonic Mare", price: "$50.300" },
            { name: "Gin Tonic Nordest", price: "$39.200" },
            { name: "Yu Gin Tonic", price: "$32.600" },
            { name: "Gin Tonic Monkey 47", price: "$31.100" },
            { name: "Gin Hendrick's", price: "$29.300" },
            { name: "Gin Tonic Martin Miller", price: "$26.100" },
            { name: "Gin Tonic Bombay", price: "$15.200" }
          ]
        },
        {
          title: "Licores",
          items: [
            { name: "St-Germain", price: "$25.700" },
            { name: "Sambuca", price: "$14.900" },
            { name: "Lemoncello", price: "$13.800" },
            { name: "Grappa", price: "$10.800" },
            { name: "Jägermeister", price: "$10.800" },
            { name: "Bailey's", price: "$8.400" }
          ]
        },
        {
          title: "Cervezas",
          items: [
            { name: "Chopp Heineken", price: "$7.700" },
            { name: "Heineken Cero", price: "$6.600" }
          ]
        },
        {
          title: "Agua de frutas",
          items: [
            { name: "Licuados", price: "$6.500" },
            { name: "Frutos rojos y naranja", price: "$6.400" },
            { name: "Pomelada", price: "$6.400" },
            { name: "Jugo de naranja natural", price: "$6.400" },
            { name: "Limonada con menta y jengibre", price: "$6.400" }
          ]
        },
        {
          title: "Bebidas sin alcohol",
          items: [
            { name: "Agua mineral", price: "$4.800" },
            { name: "Gaseosas", price: "$5.200" }
          ]
        }
      ]
    }
  ]
};
