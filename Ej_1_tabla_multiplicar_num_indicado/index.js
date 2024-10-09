var numPrompt = prompt("INTRODUZCA UN NÚMERO");
var numTabla = document.getElementById("tabla");
var tabla = "";

tabla = "Tabla de multiplicar del " + numPrompt + "<br>";

for(i = 0; i <= 10; i++){
    tabla += numPrompt + " multiplicado por " + i + " es igual a " + numPrompt * i + "<br>";  
}

// Asignamos la cadena generada a `innerHTML` del elemento `numTabla`
numTabla.innerHTML = tabla;


