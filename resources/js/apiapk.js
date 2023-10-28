let c = document.getElementById('ver');
 

function mostrarDatos(){

fetch('https://ipinfo.io/json?token=c90fb85ea8be39')
    .then(res => res.json())
    .then(data => {console.log('Response', data);
    
    c.innerHTML =`<p>Pais: ${data.country }</p>
    
                <p> Ciudad: ${data.city }</p>     
                 
                <p> Provincia: ${data.region }</p>`
    
})}

mostrarDatos();