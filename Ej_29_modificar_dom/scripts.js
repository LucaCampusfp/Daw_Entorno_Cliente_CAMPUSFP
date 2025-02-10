document.addEventListener('DOMContentLoaded', function () {
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');

    // Función para cambiar el texto del párrafo
    function changeText() {
        dynamicText.textContent = "Este es el nuevo texto del párrafo.";
    }

    // Añadir evento al botón para cambiar el texto al hacer clic
    changeTextBtn.addEventListener('click', changeText);
});
