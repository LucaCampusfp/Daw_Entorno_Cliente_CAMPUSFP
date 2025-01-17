const carousel = document.getElementById('myCarousel');
const items = document.querySelectorAll('.carousel-inner .item');
let currentIndex = 0;
let interval;

// Función para mostrar una diapositiva específica
function showSlide(index) {
    // Remover clase active de todas las diapositivas
    items.forEach(item => item.classList.remove('active'));
    
    // Actualizar el índice actual
    currentIndex = index;
    
    // Si el índice es mayor que el número de items, volver al principio
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    // Si el índice es menor que 0, ir al último item
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    
    // Añadir clase active a la diapositiva actual
    items[currentIndex].classList.add('active');
    
    // Actualizar los indicadores
    updateIndicators();
}

// Función para actualizar los indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators li');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
    });
}

// Función para avanzar al siguiente slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Función para retroceder al slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Iniciar el carrusel automático
function startAutoPlay() {
    interval = setInterval(nextSlide, 1500); // Cambiar cada 1.5 segundos
    document.getElementById("start").style.display = "none";
    document.getElementById("fin").style.display = "block";
}

// Detener el carrusel automático
function stopAutoPlay() {
    clearInterval(interval);
    document.getElementById("start").style.display = "block";
    document.getElementById("fin").style.display = "none";
}

// Event listeners para los controles manuales (prev y next)
document.querySelector('.carousel-control.left').addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});

document.querySelector('.carousel-control.right').addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});

// Evitar que el autoplay se reinicie al hacer clic en el carrusel (eliminado el listener equivocado)
