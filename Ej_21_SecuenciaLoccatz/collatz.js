// Función para calcular la secuencia de Collatz para un número dado
function calcularSecuencia(n) {
    let secuencia = [n]; // Array para almacenar la secuencia

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2; // Si es par, dividir por 2
        } else {
            n = 3 * n + 1; // Si es impar, multiplicar por 3 y sumar 1
        }
        secuencia.push(n); // Añadir el nuevo valor a la secuencia
    }

    return secuencia;
}

// Función para generar la secuencia de Collatz para los primeros 30 números
function mostrarSecuencias() {
    const resultadosDiv = document.getElementById('resultados');
    let resultadosHTML = '';

    for (let i = 1; i <= 30; i++) {
        let secuencia = calcularSecuencia(i);
        resultadosHTML += `<p><strong>${i}:</strong> ${secuencia.join(' → ')}</p>`;
    }

    resultadosDiv.innerHTML = resultadosHTML;
}

// Llamar a la función para mostrar las secuencias cuando el documento esté listo
document.addEventListener('DOMContentLoaded', mostrarSecuencias);
