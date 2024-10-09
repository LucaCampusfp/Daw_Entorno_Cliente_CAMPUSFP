// solicita el nombre delusuario
var reqNameUser = prompt("Introduzca el nombre del usuario");
// pilla el id del p que esta vacio
var pName = document.getElementById("nombre");

// texto del que se mostrara acompañado a la del userName
var userName = "Su nombre es : ";
// se concatena el username con el nombre usuario
userName += reqNameUser;


//se muestra directamente lo acumulado 
// la razon por no usar el document.getElementById es debido para que llame al p solo una vez 

// reducir consumo 
// se muestra usuario
pName.innerHTML = userName;

// se pregunta si el usuario quiere continuar

var status = confirm("¿Desea continuar?");
var pedad = document.getElementById("edad");
var reqAge = "";
var userAge = "Su edad es : "
// si el usuario ha dicho que si introducira su edad
// de lo contrario se mostrara un texto
    if (status == true) {
        reqAge = prompt("Introduzca su edad")
        userAge += reqAge;
    }else{
        userAge = "El usuario no ha deseado continuar"
    }


pedad.innerHTML = userAge;