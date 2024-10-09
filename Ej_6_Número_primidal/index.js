var num_req = prompt("Introduzca el numero de filas para la base del triángulo");
var triangulo_base = "";
var print_base = document.getElementById("base_piramidal");
var pico = "*";
var base = "**"


triangulo_base+= pico
    for(var i = 1; i <= num_req;i++){
        
       for(var e = 1 ; e < i ; e++){
            triangulo_base += base ;
       }
       if(i !== 1){
        triangulo_base += pico ;
       }
       
        triangulo_base += "<br>";
      
    }
 


   
print_base.innerHTML = triangulo_base;