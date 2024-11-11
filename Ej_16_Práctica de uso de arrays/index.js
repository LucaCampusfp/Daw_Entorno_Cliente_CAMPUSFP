function generarNumeros() {
    const numeros = [];
    while (numeros.length < 25) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    return numeros;
}

function actualizarResultados() {
    const numeros = generarNumeros();
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    const media = numeros.reduce((a, b) => a + b) / numeros.length;


    document.getElementById('numeros').innerText = numeros.join(', ');


    document.getElementById('maximo').innerText = `Máximo: ${maximo}`;
    document.getElementById('minimo').innerText = `Mínimo: ${minimo}`;
    document.getElementById('media').innerText = `Media: ${media.toFixed(2)}`;
}

document.getElementById('generarBtn').addEventListener('click', actualizarResultados);


actualizarResultados();
