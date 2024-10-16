function abrirURL(URL, x , y) {
    var nuevaVentana = window.open(URL, "", `height=1000,width=620,left=${x},top=${y}`);
}

//A LA HORA DE ESTABLCER MEDIDAS MEJOR USAR COMILLAS SIMPLES
//ALternativa
/*
function abrirURL(URL, x, y) {
    var nuevaVentana = window.open(URL, "", "height=1000,width=600,left=" + x + ",top=" + y);
}
*/
//El símbolo $ se utiliza dentro de comillas invertidas (`) 
//para insertar el valor de una variable en una cadena. 
//Esto significa que puedes combinar texto y variables fácilmente.