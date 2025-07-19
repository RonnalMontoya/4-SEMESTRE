// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const submitBtn = document.getElementById("submitBtn");

  const fields = {
    nombre: {
      input: document.getElementById("nombre"),
      validate: (value) => value.trim().length >= 3,
      message: "El nombre debe tener al menos 3 caracteres."
    },
    email: {
      input: document.getElementById("email"),
      validate: (value) => /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value),
      message: "Introduce un correo válido."
    },
    password: {
      input: document.getElementById("password"),
      validate: (value) => /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(value),
      message: "Mínimo 8 caracteres, al menos un número y un carácter especial."
    },
    confirmPassword: {
      input: document.getElementById("confirmPassword"),
      validate: (value) => value === document.getElementById("password").value,
      message: "Las contraseñas no coinciden."
    },
    edad: {
      input: document.getElementById("edad"),
      validate: (value) => Number(value) >= 18,
      message: "Debes ser mayor o igual a 18 años."
    }
  };

  const validateField = (field) => {
    const { input, validate, message } = fields[field];
    const errorElement = input.nextElementSibling;

    if (validate(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      errorElement.style.display = "none";
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }

    checkFormValidity();
  };

  const checkFormValidity = () => {
    const allValid = Object.keys(fields).every(
      (key) => fields[key].validate(fields[key].input.value)
    );
    submitBtn.disabled = !allValid;
  };

  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener("input", () => validateField(key));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Formulario enviado con éxito!");
    form.reset();
    Object.keys(fields).forEach((key) => {
      fields[key].input.classList.remove("is-valid", "is-invalid");
    });
    submitBtn.disabled = true;
  });
});
