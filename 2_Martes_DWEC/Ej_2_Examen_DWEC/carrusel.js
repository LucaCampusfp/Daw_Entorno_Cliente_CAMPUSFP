document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0; // Índice de la imagen actual
    const images = [
        "imgs/londres1.jpg",
        "imgs/londres2.jpg",
        "imgs/londres3.jpg",
        "imgs/londres4.jpg"
    ];

    const visor = document.getElementById('visorFotos');
    const contador = document.getElementById('contadorImagenes');
    const btIzq = document.getElementById('btIzq');
    const btDrcha = document.getElementById('btDrcha');
    const btAuto = document.getElementById('btAuto');
    let autoInterval;

    // Función para actualizar la imagen mostrada y el contador
    function updateImage() {
        visor.src = images[currentImageIndex];
        contador.textContent = `${currentImageIndex + 1} de ${images.length}`;
    }

    // Función para ir a la siguiente imagen
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Vuelve a la primera al llegar a la última
        updateImage();
    }

    // Función para ir a la imagen anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Vuelve a la última al ir atrás
        updateImage();
    }

    // Función para iniciar el carrusel automático
    function startAuto() {
        btAuto.disabled = true; // Desactivar el botón Auto para evitar que se presione varias veces
        autoInterval = setInterval(nextImage, 2000); // Cambia la imagen cada 2 segundos
    }

    // Función para detener el carrusel automático
    function stopAuto() {
        clearInterval(autoInterval); // Detener el intervalo
        btAuto.disabled = false; // Reactivar el botón Auto
    }

    // Eventos de los botones
    btIzq.addEventListener('click', prevImage); // Al presionar el botón izquierda, ir a la imagen anterior
    btDrcha.addEventListener('click', nextImage); // Al presionar el botón derecha, ir a la imagen siguiente
    btAuto.addEventListener('click', function() {
        if (autoInterval) {
            stopAuto(); // Si el carrusel está en modo automático, lo detenemos
        } else {
            startAuto(); // Si no está en automático, lo iniciamos
        }
    });

    // Inicializar la primera imagen
    updateImage();
});
