var resultado = "";
var Presultado = document.getElementById("resultado");

function calcularDiscriminante() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminante = (b * b) - (4 * a * c);
    resultado = ""; // Reiniciar el resultado en cada cálculo

    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado += "El discriminante es " + discriminante + ". La ecuación tiene dos soluciones reales: x1 = " + x1 + " y x2 = " + x2;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        resultado += "El discriminante es " + discriminante + ". La ecuación tiene una solución real: x = " + x;
    } else {
        resultado += "El discriminante es " + discriminante + ". La ecuación no tiene soluciones reales.";
    }
    
    return Presultado.innerHTML = resultado; // Mover esto fuera de las condiciones
}
