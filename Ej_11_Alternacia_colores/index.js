var fondo = document.getElementById("cuerpo");

var titulo = document.getElementById("texto");


fondo.style.backgroundColor = "yellow"
titulo.style.color = "green"; 

    

var cambiosColores = setInterval(function() {
    if (fondo.style.backgroundColor == "blue") {
        fondo.style.backgroundColor = "#FF0000";  
    } else {
        fondo.style.backgroundColor = "blue";  
     
    }


    if (titulo.style.color == "white") {
          titulo.style.color = "black";
    } else {
        titulo.style.color = "white";
    }
}, 2000);



setTimeout(function() {
    clearInterval(cambiosColores); 
    fondo.style.backgroundColor = "yellow"; 
    titulo.style.color = "green"; 
}, 20000);