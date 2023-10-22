let nombre = document.getElementById('name-field');//const o let?
let correo = document.getElementById('email-field');
let mensaje = document.getElementById('msg-field');
let error = document.getElementById('error');
const nomUsuarioReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //regex solo letras may/min/ñ/acentos
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
//error.style.color = 'green';
//error.style.background="red";

let formulario = document.getElementById('contacto-form');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //console.log("enviando...");
    var mensajeError = [];

    if (!nomUsuarioReg.test(nombre.value)) {
        //return console.log("Solo letras");
        mensajeError.push("Solo letras");
    }

    if (!regEmail.test(correo.value)) {
       // return console.log("Formato email no válido");
       mensajeError.push("Ingrese un correo valido");
    }
    if (mensaje.value === null || mensaje.value === "") {
        //return console.log("Solo letras");
        mensajeError.push("haga un comentario");
    }
      error.innerHTML = mensajeError.join(', ');
     // window.alert( mensajeError.join  (', '));
});