var user_dni_id = prompt("INTRODUZCA LOS DIGITOS DE DNI");
// recibe los digitos del dni

var resto_dni = user_dni_id % 23;

// recibe el resto

// generas los arrays de los restos y de sus respectivas letras

let dni_restos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];


let dni_letra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E",];

// la letra sera la posicion del dni_restos que tiene que coincidir con dni_letra

for(i = 0 ; i < dni_restos.length; i++){

    if(resto_dni === dni_restos[i]){

        console.log("La letra de tu dni es : "+ dni_letra[i]);
        alert("La letra de tu dni es : "+ dni_letra[i]);

    }
}

