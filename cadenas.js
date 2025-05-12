const productosCadenas = [

{
  nombre: "Cadena tejido chino",
  descripcion: "Hombre. 60cm 3mm",
  precio: "280.000",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-ONGOZ4Mkxl6p8icwVTd.jpg",
  
},
{
  nombre: "Cadena cubana sol",
  descripcion: "Hombre. 65 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NikGi1lesyw43M0F9zP.jpg",
  precio: "180.000"
},
{
  nombre: "Cadena militar balin",
  descripcion: "Hombre 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NHfhgx2U5TxHwB2pk6x.jpg",
  precio: "320.000"
},
{
  nombre: "Cadena Singapur",
  descripcion: "Hombre, 1.5mm de 60 cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NvJIs_rr8hFoA7qZKBe.jpg",
  precio: "130.000"
},
{
  nombre: "Cadena singapur",
  descripcion: "Hombre. 2mm 65cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MoK5hn4IcFAV8Irctae.jpg",
  precio: "160.000"
},
{
  nombre: "Cadena Cubana Plana Diamantada",
  descripcion: "Hombre. 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-Nua7nzpx6lgqgflrnt1.jpg",
  precio: "160.000"
},
{
  nombre: "Serpiente ",
  descripcion: "Hombre. 4mm 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NHpcQRXS7klHpiDI9zV.jpg",
  precio: "400.000"
},
{
  nombre: "Cadena Cubana",
  descripcion: "Hombre. 6.8 mm 70 Cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-Nua71_l5rfvIW5x-Xd0.jpg",
  precio: "800.000"
},
{
  nombre: "Gucci",
  descripcion: "Hombre. 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NFKbrOuxUAkuWheYv_l.jpg",
  precio: "320.000"
},
{
  nombre: "Cadena Espejo Cuadrada",
  descripcion: "Hombre. 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NikEaTVEopb1vaxgAe8.jpg",
  precio: "160.000"
},
{
  nombre: "Cubana",
  descripcion: "Hombre. 1mm 60cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-N7YrzYa4KUIvUTS52Kq.jpg",
  precio: "160.000"
},
{
  nombre: "Cadena aros diamantada",
  descripcion: "Hombre. 65cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MyERtlKsDVGz5uWcShL.jpg",
  precio: "800.000"
},
{
  nombre: "Cordon cuadrado",
  descripcion: "Hombre. 1mm 65cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MyEMMqBZ2On5CEUJxgr.jpg",
  precio: "120.000"
},
{
  nombre: "Cadena Militar",
  descripcion: "Hombre. 2.5mm de 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MaQMsWGXeIOxbbawoOg.jpg",
  precio: "150.000"
},
{
  nombre: "Cadena cubana",
  descripcion: "Hombre. 65cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MaQMsWmqsOaIXmGia3Z.jpg",
  precio: "180.000",
},
{
  nombre: "Cadena escalera delgada plana lisa",
  descripcion: "Hombre.",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MyEQCPZPRL8JxtXfV3d.jpg",
  precio: "160.000"
},
{
  nombre: "Collas rústico",
  descripcion: "Hombre. 60cms",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-MyEblPgkzGToP5LKctM.jpg",
  precio: "570.000"
},
{
  nombre: "Cadena Gucci Delgada",
  descripcion: "Hombre. 65 Cm",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NYZgS44u0n3vo1Vk_x1.jpg",
  precio: "200.000"
},
{
  nombre: "",
  descripcion: "Mujer.",
  imagen: "",
  precio: ".000"
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
const contenedor = document.getElementById("catalogo-cadenas");

productosCadenas.forEach((p, i) => {
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
    const p = productosCadenas[index];

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