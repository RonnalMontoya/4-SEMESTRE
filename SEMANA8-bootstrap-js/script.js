document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
  inicializarCarrusel();
});

function cargarProductos() {
  const productos = [
    {
      nombre: "Guitarra",
      descripcion: "Guitarra eléctrica FENDER de alto rendimiento.",
      precio: "$450",
      imagen: "img/guitarra_electrica_fender.jpg"
    },
    {
      nombre: "Piano",
      descripcion: "Piano Yamaha PSRSX 600, ideal para presentaciones.",
      precio: "$1.300",
      imagen: "img/piano_yamaha.jpg"
    },
    {
      nombre: "Batería",
      descripcion: "Batería PREMIER semiprofesional para ensayos.",
      precio: "$600",
      imagen: "img/bateria_premier.jpg"
    },
    {
      nombre: "Micrófono",
      descripcion: "Micrófono Shure multipropósito.",
      precio: "$80",
      imagen: "img/microfono_shure.jpg"
    },
    {
      nombre: "Güiro",
      descripcion: "Güiro merenguero profesional de acero.",
      precio: "$35",
      imagen: "img/guiro_merenguero.jpg"
    },
    {
      nombre: "Bajo Eléctrico",
      descripcion: "Bajo FENDER con sonido profundo y profesional.",
      precio: "$500",
      imagen: "img/bajo_electrico_fender.jpg"
    }
  ];

  const container = document.getElementById("product-container");
  productos.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card producto h-100 p-3">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title fw-bold">${p.nombre}</h5>
          <p class="card-text">${p.descripcion}</p>
          <p class="text-primary fw-bold">${p.precio}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function addProduct() {
  alert("Función de agregar producto aún no implementada.");
}

function mostrarAlerta() {
  alert("¡Gracias por visitar la Tienda Musical MON-BAR!");
}

function inicializarCarrusel() {
  const myCarousel = document.querySelector('#carouselMonBar');
  if (myCarousel) {
    new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: 'carousel',
      pause: false
    });
  }
}
