// Clase para resolver una ecuación de segundo grado
class EcuacionSegundoGrado {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Método para calcular el discriminante (Delta)
    calcularDelta() {
        return this.b ** 2 - 4 * this.a * this.c;
    }

    // Método para calcular las soluciones
    resolver() {
        const delta = this.calcularDelta();
        if (delta < 0) {
            return "La ecuación no tiene soluciones reales.";
        } else if (delta === 0) {
            const x = (-this.b / (2 * this.a)).toFixed(2);
            return `La solución única es: x = ${x}`;
        } else {
            const x1 = ((-this.b + Math.sqrt(delta)) / (2 * this.a)).toFixed(2);
            const x2 = ((-this.b - Math.sqrt(delta)) / (2 * this.a)).toFixed(2);
            return `Las soluciones son: x1 = ${x1} y x2 = ${x2}`;
        }
    }
}

// Manejo del formulario y resolución de la ecuación
document.getElementById("ecuacionForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtiene los coeficientes a, b, c del formulario
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    // Crea una instancia de la clase EcuacionSegundoGrado
    const ecuacion = new EcuacionSegundoGrado(a, b, c);

    // Resuelve la ecuación y muestra el resultado
    const resultado = ecuacion.resolver();
    document.getElementById("resultado").textContent = resultado;
});
