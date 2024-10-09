
for(var n = 0 ; n <210 ;n++){

    // var n = 6; // Puedes cambiar este valor para probar con otros números
    var leftNewValue = 0;
    
    // Sumar de 1 a 5
    for (var i = 1; i < n; i++) {
        leftNewValue += i; // Sumar i a leftNewValue
    }
    
    // console.log(leftNewValue); // Imprimir el resultado
    var rightNewValue = 0;
    var rightNewValue = 0;
    var j =n+1; // Comenzamos desde 7
    
    // Sumar desde la derecha hasta que coincida o supere leftNewValue
    while (rightNewValue < leftNewValue) {
        rightNewValue += j; // Sumar j a rightNewValue
        j++; // Incrementar j para la siguiente suma
    }
    
    // console.log("Suma derecha:", rightNewValue); // Imprimir el resultado de la derecha

    
    
    
    if (leftNewValue === rightNewValue) {
        console.log(n + " es un número especial.");
    } else {
        // console.log(n + " no es un número especial.");
    }
    
}
