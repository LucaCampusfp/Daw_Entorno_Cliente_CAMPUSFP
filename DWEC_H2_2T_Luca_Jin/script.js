document.addEventListener('DOMContentLoaded', function() {
    // Cargamos el archivo XML
    fetch('data.xml')
        .then(response => response.text())
        .then(xmlData => {
            // Parseamos el XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

            // Obtenemos todos los elementos <band>
            const bands = xmlDoc.getElementsByTagName('band');

            // Referencias a los elementos del DOM
            const navList = document.getElementById('nav-list');
            const content = document.getElementById('content');

            // Función para extraer el ID del video de la URL
            function getVideoId(url) {
                const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                const match = url.match(regExp);
                return match ? match[1] : null;
            }

            // Iteramos sobre cada banda
            Array.from(bands).forEach((band, index) => {
                const bandName = band.getElementsByTagName('name')[0].textContent;
                const songs = band.getElementsByTagName('songs')[0].getElementsByTagName('items');

                // Creamos el enlace de navegación
                const navItem = document.createElement('li');
                navItem.classList.add('nav-item');
                const navLink = document.createElement('a');
                navLink.classList.add('nav-link');
                navLink.href = `#band${index}`;
                navLink.textContent = bandName;
                navItem.appendChild(navLink);
                navList.appendChild(navItem);

                // Creamos la sección para la banda
                const section = document.createElement('section');
                section.id = `band${index}`;
                section.classList.add('my-4');
                const sectionTitle = document.createElement('h2');
                sectionTitle.textContent = bandName;
                section.appendChild(sectionTitle);

                // Iteramos sobre las canciones
                Array.from(songs).forEach(songItem => {
                    const title = songItem.getElementsByTagName('title')[0].textContent;
                    const url = songItem.getElementsByTagName('url')[0].textContent;
                    const videoId = getVideoId(url);

                    if (videoId) {
                        // Creamos el título de la canción
                        const songTitle = document.createElement('h3');
                        songTitle.textContent = title;
                        section.appendChild(songTitle);

                        // Creamos el iframe para el video de YouTube
                        const iframe = document.createElement('iframe');
                        iframe.width = '560';
                        iframe.height = '315';
                        iframe.src = `https://www.youtube.com/embed/${videoId}`;
                        iframe.frameBorder = '0';
                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                        iframe.allowFullscreen = true;
                        section.appendChild(iframe);
                    } else {
                        console.error(`No se pudo extraer el ID del video de la URL: ${url}`);
                    }
                });

                content.appendChild(section);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo XML:', error);
        });
});
