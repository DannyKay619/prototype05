const productosCadenillas = [
{
  nombre: "Juego blue queen",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NqnYuMq61cN0lP9vwYl.jpg",
  precio: "220.000"
},
{
  nombre: "Juego gota circon",
  descripcion: "x3",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NqnZBFMPNKvEufW30Z6.jpg",
  precio: "190.000"
},
{
  nombre: "Conjunto Arete y Dije Clover Blanco",
  descripcion: "1 Cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OIGuAM0VCPTn1NUjeU0.jpg",
  precio: "170.000"
},
{
  nombre: "Conjunto Arete y Dije Clover Negro",
  descripcion: "1 Cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OIGtorSUKdG9TswhP1v.jpg",
  precio: "170.000"
},
{
  nombre: "Collar argolla laminado",
  descripcion: "3 tonos",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NTeeP86sS-rkAYcS2en.jpg",
  precio: "110.000"
},
{
  nombre: "Cadena cartier",
  descripcion: "3x1 50cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OL-b2YY7bXJlmobuIyp.jpg",
  precio: "130.000"
},
{
  nombre: "Singapur",
  descripcion: "1.5mm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NEbYxEaBs_VE4eG30br.jpg",
  precio: "80.000"
},
{
  nombre: "cadena gucci",
  descripcion: "50 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NwVW9szjWB7Ohim3KR3.jpg",
  precio: "320.000"
},
{
  nombre: "Cadena Barbara",
  descripcion: "50CM (imagen ampliada y agrandada)",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NVv8FRalC2o2BwkxXei.jpg",
  precio: "250.000"
},
{
  nombre: "Cadena caracol",
  descripcion: "50 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O1blABFciauwAPFumxg.jpg",
  precio: "105.000"
},
{
  nombre: "cadena escalera plana",
  descripcion: "50 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NqrqVXOvpBy8iBA9RKb.jpg",
  precio: "130.000"
},
{
  nombre: "Cadena cubana",
  descripcion: "50cm 2mm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O1bk_ngmwjoIACh5Eo2.jpg",
  precio: "190.000"
},
{
  nombre: "Caracol ",
  descripcion: "50cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NLWYC1u8kKP0CGWuuYI.jpg",
  precio: "105.000"
},
{
  nombre: "Cadena lazo",
  descripcion: "50 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NZ3AfzzEF4fVKRChv7s.jpg",
  precio: "240.000"
},
{
  nombre: "Militar ",
  descripcion: "50cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NLWX-QGhuEtjRKSeTJc.jpg",
  precio: "10.000"
},

];
// Lista de productos seleccionados
const seleccionados = [];

// Crear modal
const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");
document.body.appendChild(modal);

// Mostrar productos
const contenedor = document.getElementById("catalogo-cadenillas");

productosCadenillas.forEach((p, i) => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" />
    <div class="producto-info">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <strong>Precio: $${p.precio}</strong><br>
      <button class="boton ver-mas" data-index="${i}">Ver más</button>
      <button class="boton agregar" data-nombre="${p.nombre}">Agregar a lista</button>
    </div>
  `;

  contenedor.appendChild(card);
});

// Botón para enviar selección por WhatsApp
const botonEnviar = document.createElement("button");
botonEnviar.id = "enviar-ws";
botonEnviar.classList.add("boton");
botonEnviar.textContent = "Ver selección y enviar por WhatsApp";
document.body.appendChild(botonEnviar);

// Manejador de eventos general
document.addEventListener("click", (e) => {
  // Agregar a lista
  if (e.target.classList.contains("agregar")) {
    const nombre = e.target.dataset.nombre;
    if (!seleccionados.includes(nombre)) {
      seleccionados.push(nombre);
      alert(`${nombre} agregado a la lista`);
    }
  }
  // Mostrar el modal con la info completa
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ver-mas")) 
    {
    const index = e.target.dataset.index;
    const p = productos[index];

    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar">&times;</span>
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h2>${p.nombre}</h2>
        <p>${p.descripcion}</p>
        <strong>Precio: $${p.precio}</strong><br><br>
        <a class="boton" href="https://wa.me/573126238557?text=Hola,%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar por WhatsApp</a>
      </div>
    `;
    modal.style.display = "flex";

    document.querySelector(".cerrar").onclick = () => {
      modal.style.display = "none";
    };
  }
});

  // Ver más
  if (e.target.classList.contains("ver-mas")) {
    const index = e.target.dataset.index;
    const p = productosCadenillas[index];

    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar">&times;</span>
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h2>${p.nombre}</h2>
        <p>${p.descripcion}</p>
        <strong>Precio: $${p.precio}</strong><br><br>
        <a class="boton" href="https://wa.me/573126238557?text=Hola,%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar por WhatsApp</a>
      </div>
    `;
    modal.style.display = "flex";

    document.querySelector(".cerrar").onclick = () => {
      modal.style.display = "none";
    };
  }

  // Enviar lista
  if (e.target.id === "enviar-ws") {
    if (seleccionados.length === 0) {
      alert("No has seleccionado ningún producto.");
      return;
    }

    const mensaje = "Hola, estoy interesado en los siguientes productos:\n\n" +
      seleccionados.map(p => `- ${p}`).join("\n");

    const url = `https://wa.me/573126238557?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
});