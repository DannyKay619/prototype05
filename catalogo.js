const productos = [];

const categorias = [
  
  { 
    nombre: "Tobilleras",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NI5HiAi5ToMS1WJKt_a.jpg",
    enlace: "tobilleras.html"
  },
  { 
    nombre: "Topos",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWxDbLzOWZ9nxhdD.jpg",
    enlace: "topos.html"
  },
  { 
    nombre: "Candongas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-ON5qSnHRe9SakbwWzDd.jpg", // imagen representativa
    enlace: "candongas.html"
  },
  { 
    nombre: "Cadenillas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NLWX-QGhuEtjRKSeTJc.jpg", // imagen representativa
    enlace: "cadenillas.html"
  },
  { 
    nombre: "Dijes",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-Mayctu3Siu0RFyEeYLQ.jpg", // imagen representativa
    enlace: "dijes.html"
  },
  { 
    nombre: "Camandulas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NY4_lZGimsPoLmzvSWF.jpg",
    enlace: "camandulas.html"
  },
  { 
    nombre: "Pulseras",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OIwFImdPCA0PqZsUlrm.jpg", // imagen representativa
    enlace: "pulseras.html"
  },
  { 
    nombre: "Aretes",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NviBd3YuqFlvQZ_Sxz9.jpg", // imagen representativa
    enlace: "aretes.html"
  },
  { 
    nombre: "Anillos",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NvwRM0bCYjEBshdxrp5.jpg", // imagen representativa
    enlace: "anillos.html"
  },
  { 
    nombre: "Cadenas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NFKbrOuxUAkuWheYv_l.jpg", // imagen representativa
    enlace: "cadenas.html"
  },
  { 
    nombre: "Relojes",
    imagen: "https://www.businesscolombia.shop/cdn/shop/files/7_961170e5-1996-4da3-8f9e-349bf0a4911a_480x480.jpg?v=1743781746",
    enlace: "relojes.html"
  },
  { 
    nombre: "Manillas de balineria",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NQlcYkRASAZ27ByaP6J.jpg", // imagen representativa
    enlace: "manillas.html"
  }
];

const contenedor = document.getElementById("catalogo-amplio");

categorias.forEach((categoria) => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
  <img src="${categoria.imagen}" alt="${categoria.nombre}" />
  <div class="producto-info">
    <h3>${categoria.nombre}</h3>
    <a class="boton" href="${categoria.enlace}">Quiero ver!</a>
    </div>
  `;
  contenedor.appendChild(card);
});