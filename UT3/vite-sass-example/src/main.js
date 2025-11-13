import "./styles/main.scss";

// Pequeño script para el menú móvil
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--open");
});
