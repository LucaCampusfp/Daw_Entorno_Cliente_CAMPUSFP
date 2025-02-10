document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Array de URLs de imágenes
    const images = [
        '../Ej_27_dom/i1.png',
        '../Ej_27_dom/i2.png',
        '../Ej_27_dom/i3.png'
    ];

    // Variable para llevar el seguimiento de la imagen actual
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        // Ocultar todas las imágenes
        gallery.querySelectorAll('img').forEach(img => img.classList.remove('active'));
        // Mostrar la imagen actual
        gallery.querySelectorAll('img')[index].classList.add('active');
    }

    // Crear elementos img y añadirlos al contenedor de la galería
    images.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        if (index === 0) {
            img.classList.add('active'); // Mostrar la primera imagen inicialmente
        }
        gallery.appendChild(img);
    });

    // Añadir eventos a los botones
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});
