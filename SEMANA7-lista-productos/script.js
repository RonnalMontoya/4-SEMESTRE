const products = [
    { nombre: "Guitarra", precio: "$450", descripcion: "Guitarra eléctrica marca FENDER de alto rendimiento para profesionales." },
    { nombre: "Piano", precio: "$1.300", descripcion: "Piano profesional Yamaha PSRSX 600 de 61 teclas para presentaciones en vivo." },
    { nombre: "Batería", precio: "$600", descripcion: "Batería PREMIER semiprofesional." },
    { nombre: "Micrófono", precio: "$135", descripcion: "Micrófono marca SHURE profesional." },
    { nombre: "Bajo", precio: "$385", descripcion: "Bajo marca FENDER profesional." },
    { nombre: "Guiro", precio: "$52", descripcion: "Guiro merenguero profesional." }
];

function renderProducts() {
    const listElement = document.getElementById("product-list");
    listElement.innerHTML = "";
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `<strong>${product.nombre}</strong> - ${product.precio}<br><small class="text-muted">${product.descripcion}</small>`;
        listElement.appendChild(listItem);
    });
}

function addProduct() {
    const nombre = document.getElementById("nombre").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!nombre || !precio || !descripcion) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const newProduct = { nombre, precio, descripcion };
    products.push(newProduct);
    renderProducts();

     document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
}

window.onload = renderProducts;