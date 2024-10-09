// obtengo el id del p de referencia
var numTabla = document.getElementById("tabla");
// Genero un valor inicial vacio que se mostrara proximamente
var tabla = "";

// tabla = "Tabla de multiplicar del " + numPrompt + "<br>";

for(i = 0; i <= 10; i++){
    // Le sumo el valor inicial que es vacio mas el texto que seria el nuevo valor adquirido el cual lo ira 
    // acumulando
    tabla += "Tabla de multiplicar del "+ i + "<br>"
    for(e = 0; e <= 10; e++){
        // Lo mismo aqui va adquiriendo el nuevo valor recorriendo el for e ira acumulandolo
        tabla += "<br>" + i  + " multiplicado por " + e + " es igual a " + (i*e) + "<br>";
    }
    tabla += "<br>"
}

// una vez que hayas salido del for se muestra todo lo acumulado
numTabla.innerHTML = tabla;