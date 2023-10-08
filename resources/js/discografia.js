let i = 0; // current slide
let j = 3; // total slides

const images = document.querySelectorAll(".imagen-contenedor img");
const tesssto = document.querySelectorAll(".imagen-contenedor div");
document.getElementById('disco1').style.display = 'block';//muestro el texto 1 y borro los demas pq si no aparecen todos
document.getElementById('disco2').style.display = 'none';
document.getElementById('disco3').style.display = 'none';

function mostrarTexto(imagActiva){
    if(imagActiva + 1 == 1){ document.getElementById('disco1').style.display = 'block';//texto para la imagen 1
    
    document.getElementById('disco2').style.display = 'none';//borro los textos q no quiero q se vean
    document.getElementById('disco3').style.display = 'none';
    }
else if(i + 1 == 2){ document.getElementById('disco2').style.display = 'block';
    document.getElementById('disco1').style.display = 'none';
    document.getElementById('disco3').style.display = 'none';}

else{document.getElementById('disco3').style.display = 'block';
    document.getElementById('disco1').style.display = 'none';
    document.getElementById('disco2').style.display = 'none';
}
}



function next(){                                                            //boton siguiente
    document.getElementById("content" + (i+1)).classList.remove("active");
    
    i = ( j + i + 1) % j;//reto de la div 

    mostrarTexto(i);//muestra el texto q le corresponde a cada imagen
    document.getElementById("content" + (i+1)).classList.add("active");
    

    //imagActiva="content" + (i+1);
    //return imagActiva;
   // return imagActiva = 1;
}

function prev(){//boton anterior
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;

    mostrarTexto(i);
    document.getElementById("content" + (i+1)).classList.add("active");
}

