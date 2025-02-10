document.addEventListener('DOMContentLoaded', function () {
    const showImageBtn = document.getElementById('showImageBtn');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const dynamicImage = document.getElementById('dynamicImage');

    // Función para mostrar la imagen
    function showImage() {
        dynamicImage.classList.remove('hidden');
    }

    // Función para ocultar la imagen al hacer clic en ella
    function hideImage() {
        dynamicImage.classList.add('hidden');
    }

    // Función para eliminar la imagen y el evento adjunto
    function removeImage() {
        dynamicImage.removeEventListener('click', hideImage);
        if (dynamicImage.parentNode) {
            dynamicImage.parentNode.removeChild(dynamicImage);
        }
    }

    // Añadir evento de clic al botón para mostrar la imagen
    showImageBtn.addEventListener('click', showImage);

    // Añadir evento de clic a la imagen para ocultarla
    dynamicImage.addEventListener('click', hideImage);

    // Añadir evento de clic al segundo botón para eliminar la imagen
    removeImageBtn.addEventListener('click', removeImage);
});
