const productosCamandulas = [
{
  nombre: "Camandula N6 especial doble aro y espiral",
  descripcion: "Gran diseño, grande",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NY4_lZGimsPoLmzvSWF.jpg",
  precio: "760.000"
},

{
  nombre: "Rosario diamantado",
  descripcion: "2.7mm, 45cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-ODg0iUpNuCJbEr7gkDH.jpg",
  precio: "280.000"
},
{
  nombre: "Rosario Hombre",
  descripcion: "65 Cms 6 mm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NVq39MXE9N8ZhaUo1Ti.jpg",
  precio: "550.000"
},
{
  nombre: "Camandula N6 estilo clásico",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NY4aJjptg3RtLe60Jds.jpg",
  precio: "460.000"
},
{
  nombre: "Rosario regular",
  descripcion: "45cm 2.5mm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OHrt23h1UnmfdYQ_Lxc.jpg",
  precio: "160.000"
},
{
  nombre: "Rosario Jesus Crucificado",
  descripcion: "3.5 mm 45 Cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NVq3_4MrrpQltkf4Hbm.jpg",
  precio: "200.000"
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
const contenedor = document.getElementById("catalogo-camandulas");

productosCamandulas.forEach((p, i) => {
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
    const p = productosCamandulas[index];

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