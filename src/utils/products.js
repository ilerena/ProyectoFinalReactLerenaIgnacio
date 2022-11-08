const products = [
    {
      id: 101,
      name: "Manzana Roja Deliciosa",
      stock: 100,
      cost: 540,
      description: "Manzana Roja, variedad Deliciosa. Origen: Rio negro. La mejor calidad de manzanas del país.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667935592/Verduleria/manzana_mqjlbm.jpg"
      ],
      categoryId: 9
    },
    {
      id: 103,
      name: "Banana Ecuador",
      stock: 0,
      cost: 490,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667935592/Verduleria/banana-ecuador_rmium6.jpg"
      ],
      categoryId: 9
    },
    {
      id: 105,
      name: "Pera",
      stock: 100,
      cost: 330,
      description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667935592/Verduleria/pera_dhxdbt.jpg"
      ],
      categoryId: 9
    },
    {
      id: 107,
      name: "Durazno",
      stock: 100,
      cost: 590,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667935592/Verduleria/durazno_f8ce9j.jpg"
      ],
      categoryId: 9
    },
    {
      id: 201,
      name: "Tomate Redondo",
      stock: 100,
      cost: 290,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667935592/Verduleria/tomate-redondo_k5uqxi.jpg"
      ],
      categoryId: 1
    },
    {
      id: 206,
      name: "Morron Rojo",
      stock: 100,
      cost: 490,
      description: "Color: Rojo rubí con sutiles reflejos terracota. Aroma: Se destacan los aromas a frutas negras como higos, ciruelas y confitura de moras, armónicamente acompañados por notas de pimiento rojo, regaliz y tostado. Boca: Se percibe la untuosidad de la fruta madura junto a una elegante estructura tánica y persistencia en boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667936646/Verduleria/morron-rojo_f3tr1a.jpg"
      ],
      categoryId: 1
    },
    {
      id: 210,
      name: "Cebolla Morada",
      stock: 89,
      cost: 550,
      description: "Altos del Plata Chardonnay pertenece a la bodega Terrazas de los Andes. Su vino es de color amarillo dorado con destellos verdes. Su perfil fresco y frutado revela notas a flores blancas como jazmín y aromas a pera, durazno blanco y ananá. Acompañan sutiles notas tostadas y dulces como vainilla y miel. Presenta ligeros toques tostados y una acidez persistente.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667936646/Verduleria/cebolla-morada_aaetts.jpg"
      ],
      categoryId: 1
    },
    {
      id: 301,
      name: "Rabanitos",
      stock: 100,
      cost: 150,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 375,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667936646/Verduleria/rabanitos_kwjdyl.jpg"
      ],
      categoryId: 5
    },
    {
      id: 304,
      name: "Lechuga Crespa",
      stock: 100,
      cost: 299,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667936646/Verduleria/lechuga-creapa_haoiis.png"
      ],
      categoryId: 5
    },
    {
      id: 316,
      name: "Apio",
      stock: 100,
      cost: 150,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://res.cloudinary.com/dhuzaxz80/image/upload/v1667936646/Verduleria/apio_hgs9xv.jpg"
      ],
      categoryId: 5
    }
  ];

  module.exports = {
    products,
  }