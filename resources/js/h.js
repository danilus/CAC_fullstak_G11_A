const nav = document.querySelector('#gral-menu');
const abrir = document.querySelector("#abrir-menu-header");
const cerrar = document.querySelector("#cerrar-menu-header");

abrir.addEventListener('click',() => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click',() => {
    nav.classList.remove("visible");
})