let i = 0; // current slide
let j = 11; // total slides

const images = document.querySelectorAll(".imagen-contenedor img");
const tesssto = document.querySelectorAll(".imagen-contenedor div");
document.getElementById('disco1').style.display = 'block';//muestro el texto 1 y borro los demas pq si no aparecen todos
document.getElementById('disco2').style.display = 'none';
document.getElementById('disco3').style.display = 'none';
document.getElementById('disco4').style.display = 'none';
document.getElementById('disco5').style.display = 'none';
document.getElementById('disco6').style.display = 'none';
document.getElementById('disco7').style.display = 'none';
document.getElementById('disco8').style.display = 'none';
document.getElementById('disco9').style.display = 'none';
document.getElementById('disco10').style.display = 'none';
document.getElementById('disco11').style.display = 'none';

/*function mostrarTexto(imagActiva){
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
}*/
function mostrarTexto(imagActiva){
document.getElementById('disco1').style.display = 'none';//muestro el texto 1 y borro los demas pq si no aparecen todos
document.getElementById('disco2').style.display = 'none';
document.getElementById('disco3').style.display = 'none';
document.getElementById('disco4').style.display = 'none';
document.getElementById('disco5').style.display = 'none';
document.getElementById('disco6').style.display = 'none';
document.getElementById('disco7').style.display = 'none';
document.getElementById('disco8').style.display = 'none';
document.getElementById('disco9').style.display = 'none';
document.getElementById('disco10').style.display = 'none';
document.getElementById('disco11').style.display = 'none';
switch(i+1){
    case 1:document.getElementById('disco1').style.display = 'block';
    break;
    case 2:document.getElementById('disco2').style.display = 'block';
    break;
    case 3:document.getElementById('disco3').style.display = 'block';
    break;
    case 4:document.getElementById('disco4').style.display = 'block';
    break;
    case 5:document.getElementById('disco5').style.display = 'block';
    break;
    case 6:document.getElementById('disco6').style.display = 'block';
    break;
    case 7:document.getElementById('disco7').style.display = 'block';
    break;
    case 8:document.getElementById('disco8').style.display = 'block';
    break;
    case 9:document.getElementById('disco9').style.display = 'block';
    break;
    case 10:document.getElementById('disco10').style.display = 'block';
    break;
    case 11:document.getElementById('disco11').style.display = 'block';
    break;
}

}



function next(){                                                            //boton siguiente
    document.getElementById("content" + (i+1)).classList.remove("active");
    
    i = ( j + i + 1) % j;//resto de la div 

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

