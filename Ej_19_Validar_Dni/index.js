// Objeto para manejar la validación del DNI
const validadorDNI = {
    letras: "TRWAGMYFPDXBNJZSQVHLCKE", // Letras válidas para el DNI
    esNumeroValido: function (numero) {
        // Verifica que el número sea un entero de 8 dígitos
        return /^\d{8}$/.test(numero);
    },
    esLetraValida: function (letra) {
        // Verifica que la letra sea una sola y esté en el rango válido
        return /^[A-Z]$/.test(letra);
    },
    calcularLetra: function (numero) {
        // Calcula la letra correspondiente al número del DNI
        const indice = numero % 23;
        return this.letras[indice];
    },
    validar: function (dni) {
        // Valida el DNI completo
        const numero = dni.slice(0, -1); // Extrae los primeros 8 caracteres (números)
        const letra = dni.slice(-1).toUpperCase(); // Extrae la última letra y la convierte a mayúscula

        if (!this.esNumeroValido(numero)) {
            return "El número del DNI es inválido.";
        }
        if (!this.esLetraValida(letra)) {
            return "La letra del DNI es inválida.";
        }

        const letraCalculada = this.calcularLetra(parseInt(numero));
        if (letra !== letraCalculada) {
            return `DNI inválido. La letra debería ser "${letraCalculada}".`;
        }

        return "DNI válido.";
    },
};

// Manejo del formulario y validación
document.getElementById("dniForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const dni = document.getElementById("dni").value.trim(); // Obtiene el valor del input
    const resultado = validadorDNI.validar(dni); // Valida el DNI
    document.getElementById("resultado").textContent = resultado; // Muestra el resultado
});
