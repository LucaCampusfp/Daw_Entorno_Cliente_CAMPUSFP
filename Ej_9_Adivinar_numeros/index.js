// MUY IMPORTANTE LOS ELEMENTOS MATH


function adivinarNumeros(){
    
    var random_number = Math.floor((Math.random() * 100) + 1);
    var intentos = 0 ;

    while(parseInt(numeroIntroducido) !== random_number){
        var numeroIntroducido = prompt("INTRODUZCA UN NÚMERO E INTENTE ADIVINAR Y ACERTAR LOS NÚMEROS VAN DEL 1-100");

        // alert(typeof numeroIntroducido);
        
        if(numeroIntroducido > random_number  ){
            alert("UY TE HAS PASADO");
            intentos++;
            alert("ESTO ES ILEGAL PERO EL RESULTADO ES " + random_number + " YO NO TE HE DICHO NADA UwU");
        }else if(numeroIntroducido < random_number){
            alert("UY TAN BAJITO");
            intentos++;
            alert("ESTO ES ILEGAL PERO EL RESULTADO ES " + random_number + " YO NO TE HE DICHO NADA UwU");
        }else{
            alert("ENHORABUENA HAS ACERTADO  HAS EMPLEADO UN NÚMERO TOTAL DE INTENTOS QUE SE ELEVAN A  " + intentos);
          
        }
    }

}

adivinarNumeros();