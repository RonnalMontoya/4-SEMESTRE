// Validación de números
function validarNumero() {
  const input = document.getElementById("numInput").value.trim();
  const resultado = document.getElementById("resultadoValidacion");

  resultado.className = "resultado"; // limpia clases previas

  if (input === "") {
    resultado.textContent = "⚠️ Por favor, escribe algo.";
    resultado.classList.add("visible", "gris");
  } else if (!isNaN(input)) {
    resultado.textContent = "✅ Es un número válido.";
    resultado.classList.add("visible", "valido");
  } else {
    resultado.textContent = "❌ No es un número válido.";
    resultado.classList.add("visible", "invalido");
  }
}

// Galería interactiva
const imageURL = document.getElementById("imageURL");
const addImageBtn = document.getElementById("addImageBtn");
const removeImageBtn = document.getElementById("removeImageBtn");
const gallery = document.getElementById("gallery");

function clearSelected() {
  const selected = document.querySelector(".gallery img.selected");
  if (selected) selected.classList.remove("selected");
}

addImageBtn.addEventListener("click", () => {
  const url = imageURL.value.trim();
  if (!url) return;
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen";
  img.addEventListener("click", () => {
    clearSelected();
    img.classList.add("selected");
  });
  gallery.appendChild(img);
  imageURL.value = "";
});

removeImageBtn.addEventListener("click", () => {
  const selected = document.querySelector(".gallery img.selected");
  if (selected) gallery.removeChild(selected);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Delete") {
    const selected = document.querySelector(".gallery img.selected");
    if (selected) gallery.removeChild(selected);
  }
});
