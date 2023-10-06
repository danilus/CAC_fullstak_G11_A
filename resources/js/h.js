const nav = document.querySelector('#gral-menu');
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click',() => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click',() => {
    nav.classList.remove("visible");
})