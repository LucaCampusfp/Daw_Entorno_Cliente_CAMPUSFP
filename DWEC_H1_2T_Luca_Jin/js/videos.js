// Espera a que la página esté cargada
window.onload = function () {
    const cargarVideoBtn = document.getElementById('cargar-video');
    
    // Intentar cargar los vídeos desde el archivo JSON
    fetch('json/videos.json')
        .then(response => response.json())
        .then(data => {
            // Al hacer clic en el botón, cargar un video aleatorio
            mostrarVideoAleatorio(data.videos);
            cargarVideoBtn.addEventListener('click', () => {
                mostrarVideoAleatorio(data.videos);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
};

function mostrarVideoAleatorio(videos) {
    // Seleccionar un video aleatorio
    const videoAleatorio = videos[Math.floor(Math.random() * videos.length)];
    
    // Obtener el contenedor de vídeo
    const videoContainer = document.getElementById('video-container');
    
    // Limpiar el contenedor de video antes de cargar el nuevo video
    videoContainer.innerHTML = '';
    
    // Crear un iframe para el video
    const iframe = document.createElement('iframe');
    iframe.src = videoAleatorio.url;  // URL de YouTube de inserción (embed)
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    // Agregar el iframe al contenedor de vídeo
    videoContainer.appendChild(iframe);
    
    // Crear un título para el vídeo
    const titulo = document.createElement('h2');
    titulo.textContent = videoAleatorio.titulo;
    
    // Agregar el título al contenedor
    videoContainer.appendChild(titulo);
}