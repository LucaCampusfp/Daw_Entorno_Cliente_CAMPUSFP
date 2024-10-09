var num_req = prompt("Introduzca el numero de filas para la base del triángulo");
var triangulo_base = "";
var print_base = document.getElementById("base_piramidal");
var pico = "*";
var base = "&nbsp;&nbsp;"

// primera fila la punta
triangulo_base += pico
for (var i = 1; i <= num_req-1; i++) {

    for (var e = 1; e < i; e++) {
        if (e == 1) {
            // pico inicial *- o si no no cumplira el numero de espacio de vacios
            triangulo_base += "*" + base;
        }
        else {
            // una vez puesto el * ya se puede poner espacio requerido
            triangulo_base += "&nbsp;&nbsp;" + base;
        }

    }
    // pico final de los bordes si es igual 1 no se pone 
    if (i !== 1) {

        triangulo_base += pico
    }

    //CONTRUIR BASE FINAL
    if (i == num_req-1) {
        // salto de linea tras el ultima fila 
        triangulo_base += "<br>";
        for (var o = 1; o <= num_req - 1; o++) {
            // asteriscos iran de 2 en 2 
            triangulo_base += "**";
            if (o == 1) {
                // asterisco inicial
                triangulo_base += "*";
            }

        }
    }
    triangulo_base += "<br>";

}
print_base.innerHTML = triangulo_base;
