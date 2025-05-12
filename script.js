const productos = [
  {
    nombre: "Anillo Crystal Box ",
    descripcion: "Ajustable",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OKlMoJ9FUgikaQ3pIKj.jpg",
    precio: "100.000"
  },
  {
    nombre: "Anillo tifany liso",
    descripcion: "Ajustable",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OKlM7Qhd5oJRtj2n0TQ.jpg",
    precio: "100.000"
  },
  {
    nombre: "Tobillera Serpiente",
    descripcion: "Diseño clásico 25cm.",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O39p9ku2kJLhS-UO5Bs.jpg",
    precio: "100.000"
  },
  {
    nombre: "Argolla lucky clover",
    descripcion: "Consultar tallas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-MWztwcQiyda4bM1OD.jpg",
    precio: "190.000"
  },
  {
    nombre: "Topo caballo",
    descripcion: "Figura de caballito",
    precio: "35.000",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NviBd3YuqFlvQZ_Sxz9.jpg"
  },
  {
    nombre: "Arete pavo real",
    precio: "65.000",
    descripcion: "Color verde elegante",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-N7Ymnzb_GEdH44ClwJP.jpg"
  }
];

const catalogo = document.getElementById("catalogo");

// Crear y agregar el modal al body
const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");
document.body.appendChild(modal);

// Mostrar productos en el catálogo
productos.forEach((p, i) => {
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" />
    <div class="producto-info">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <!-- El precio NO se muestra aquí -->
      <button class="boton ver-mas" data-index="${i}">Ver más</button>
      <a class="boton agregar" data-nombre="${p.nombre}">Agregar a lista</a>
    </div>
  `;

  catalogo.appendChild(producto);
});

// Mostrar el modal con la info completa
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ver-mas")) {
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

// Lista para productos seleccionados
const seleccionados = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("agregar")) {
    const nombre = e.target.dataset.nombre;
    if (!seleccionados.includes(nombre)) {
      seleccionados.push(nombre);
      alert(`${nombre} agregado a la lista`);
    }
  }
});
