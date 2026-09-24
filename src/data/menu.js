// Datos del menú, separados de los componentes.
// La forma (categorías -> productos) es la misma que se espera
// usar más adelante cuando esto venga de una API (Fase 2).
export const menu = [
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    productos: [
      {
        id: "clasica",
        nombre: "Clásica",
        descripcion:
          "Carne ahumada, queso mozzarella, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 16000,
      },
      {
        id: "new-york-burger",
        nombre: "New York Burger",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, chorizo, aros de cebolla, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 20000,
      },
      {
        id: "costena",
        nombre: "Costeña",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, queso costeño asado, maduro frito, cebolla grille, tomate y pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 20000,
      },
      {
        id: "mixta",
        nombre: "Mixta",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, pechuga a la plancha, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 20000,
      },
      {
        id: "manzana",
        nombre: "Manzana",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, maduro asado, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 20000,
      },
      {
        id: "smoking-burger",
        nombre: "Smoking Burger",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, bondiola de cerdo desmechada, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 22000,
      },
      {
        id: "chicken-burger",
        nombre: "Chicken Burger",
        descripcion:
          "Carne ahumada, queso mozzarella, tocineta, pollo desmechado bañado en salsa tártara, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 22000,
      },
      {
        id: "doble-piso",
        nombre: "Doble Piso",
        descripcion:
          "Carne ahumada x2, queso mozzarella, tocineta x2, vegetales frescos, pan brioche sellado en mantequilla, acompañada de papas francesas.",
        precio: 23000,
      },
    ],
  },
  {
    id: "papas",
    nombre: "Papas",
    productos: [
      {
        id: "salchipapa",
        nombre: "Salchipapa",
        descripcion: "Papas francesas, salchicha, queso rayado.",
        precio: 15000,
      },
      {
        id: "salchi-choripapa",
        nombre: "Salchi-Choripapa",
        descripcion: "Papas francesas, salchicha, chorizo, queso rayado.",
        precio: 18000,
      },
      {
        id: "desgranado",
        nombre: "Desgranado",
        descripcion:
          "Papas francesas, pollo desmechado, salchicha, maíz, queso mozzarella.",
        precio: 22000,
      },
      {
        id: "morrongo",
        nombre: "Morrongo",
        descripcion:
          "Papas francesas, trocitos de pollo y carne de res, salchicha, cebolla grille, queso mozzarella o rayado y maíz.",
        precio: 22000,
      },
      {
        id: "recerda",
        nombre: "Recerda",
        descripcion:
          "Papas francesas, bondiola de cerdo desmechada, salchicha, maduro, queso mozzarella y maíz.",
        precio: 22000,
      },
    ],
  },
  {
    id: "sandwiches",
    nombre: "Sándwiches",
    productos: [
      {
        id: "sandwich-pollo",
        nombre: "Pollo",
        descripcion:
          "Pan cubano, pollo desmechado, queso mozzarella, tocineta, tomate y cebolla grille, acompañado de papas francesas.",
        precio: 16000,
      },
      {
        id: "sandwich-cerdo",
        nombre: "Cerdo",
        descripcion:
          "Pan cubano, bondiola de cerdo desmechada, queso mozzarella, tocineta, tomate y cebolla grille, acompañado de papas francesas.",
        precio: 16000,
      },
    ],
  },
  {
    id: "perros",
    nombre: "Perros",
    productos: [
      {
        id: "perro-clasico",
        nombre: "Perro Clásico",
        descripcion:
          "Pan brioche, salchicha, cebolla grille, paparipo, queso mozzarella, tocineta, acompañado de papas francesas.",
        precio: 15000,
      },
      {
        id: "perro-burger",
        nombre: "Perro Burger",
        descripcion:
          "Pan brioche, salchicha, carne de hamburguesa picada, cebolla grille, paparipo, queso mozzarella, tocineta, acompañado de papas francesas.",
        precio: 20000,
      },
      {
        id: "perro-chancho",
        nombre: "Perro Chancho",
        descripcion:
          "Pan brioche, salchicha, bondiola de cerdo desmechada, cebolla grille, maduro, paparipo, queso mozzarella, tocineta, acompañado de papas francesas.",
        precio: 20000,
      },
      {
        id: "perro-pic-pio",
        nombre: "Perro Pic Pio",
        descripcion:
          "Pan brioche, salchicha, pollo desmechado bañado en tártara, paparipo, cebolla grille, queso mozzarella, tocineta, acompañado de papas francesas.",
        precio: 20000,
      },
      {
        id: "bebe-xl",
        nombre: "Bebé XL",
        descripcion:
          "Pan de 29 cm, salchicha, proteína de su preferencia (pollo desmechado, bondiola de cerdo desmechada o carne de hamburguesa picada), cebolla grille, paparipo, queso mozzarella, tocineta, acompañado de papas francesas.",
        precio: 25000,
      },
    ],
  },
  {
    id: "adicionales",
    nombre: "Adicionales",
    productos: [
      { id: "huevo-frito", nombre: "Huevo frito", precio: 1500 },
      { id: "queso-frito", nombre: "Queso frito", precio: 2500 },
      { id: "maduro-frito", nombre: "Maduro frito", precio: 2500 },
      { id: "aros-cebolla", nombre: "Aros de cebolla x3", precio: 2500 },
      { id: "maiz", nombre: "Maíz", precio: 3000 },
      { id: "chorizo", nombre: "Chorizo", precio: 3000 },
      { id: "tocineta", nombre: "Tocineta x3", precio: 3000 },
      { id: "enchuladas", nombre: "Enchuladas", precio: 2000 },
      { id: "pollo-desmechado", nombre: "Pollo desmechado", precio: 5000 },
      {
        id: "pechuga-plancha",
        nombre: "Pechuga a la plancha",
        precio: 8000,
      },
      { id: "bondiola-cerdo", nombre: "Bondiola de cerdo", precio: 6000 },
      {
        id: "carne-hamburguesa",
        nombre: "Carne de hamburguesa",
        precio: 8000,
      },
      { id: "papas-francesas-add", nombre: "Papas francesas", precio: 8000 },
    ],
  },
  {
    id: "entradas",
    nombre: "Entradas",
    productos: [
      { id: "papas-enchuladas", nombre: "Papas enchuladas", precio: 11000 },
      {
        id: "maduro-queso-rayado",
        nombre: "Maduro con queso rayado",
        precio: 8000,
      },
    ],
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    productos: [
      { id: "cocacola-personal", nombre: "Coca-Cola personal", precio: 3500 },
      { id: "cuatro-personal", nombre: "Cuatro personal", precio: 3500 },
      { id: "hit-personal", nombre: "Hit personal", precio: 3500 },
      { id: "agua", nombre: "Botella de agua", precio: 3000 },
      { id: "agua-gas", nombre: "Botella de agua con gas", precio: 3500 },
      { id: "soda", nombre: "Soda", precio: 3000 },
      { id: "cerveza", nombre: "Cerveza", precio: 4000 },
      { id: "cocacola-1-5l", nombre: "Coca-Cola 1.5L", precio: 7000 },
      { id: "cuatro-1-5l", nombre: "Cuatro 1.5L", precio: 7000 },
    ],
  },
];
