// Obtener los botones de la página
const btPelisAction = document.getElementById('btPelisAction');
const btPelisHorror = document.getElementById('btPelisHorror');
const btPelisTodas = document.getElementById('btPelisTodas');

// Obtener el contenedor donde se mostrarán las películas
const fila = document.getElementById('fila');
function mostrarPeliculas(peliculasFiltradas) {
    // Limpiar el contenido actual de la fila (esto borra cualquier película previa)
    fila.innerHTML = '';

    // Iterar sobre las películas filtradas y mostrarlas
    peliculasFiltradas.forEach(pelicula => {
        const tr = document.createElement('tr');
        
        tr.style.display = 'contents';
        
        // Crear una celda (td) para contener todos los detalles de la película
        const tdPelicula = document.createElement('td');

        // Agregar título de la película
        const titulo = document.createElement('p');
        titulo.textContent = `Título: ${pelicula[0].replace('Title:', '')}`;
        tdPelicula.appendChild(titulo);

        // Agregar director de la película
        const director = document.createElement('p');
        director.textContent = `Director: ${pelicula[1].replace('Director:', '')}`;
        tdPelicula.appendChild(director);

        // Agregar género de la película
        const genero = document.createElement('p');
        genero.textContent = `Género: ${pelicula[2].replace('Genre:', '')}`;
        tdPelicula.appendChild(genero);

        // Agregar la imagen del póster
        const img = document.createElement('img');
        img.src = pelicula[3].replace('Poster:', '');
        img.alt = pelicula[0].replace('Title:', '');
        tdPelicula.appendChild(img);

        // Agregar el tráiler (iframe)
        const iframe = document.createElement('iframe');
        iframe.src = pelicula[4].replace('Trailer:', '');
        //tdPelicula.appendChild(iframe);

        // Crear el salto de línea <br> antes del botón
        const br = document.createElement('br');
        tdPelicula.appendChild(br);

        // Crear el botón "More Info"
        const btnMoreInfo = document.createElement('button');
        btnMoreInfo.textContent = 'More Info';
        
        // Evento para abrir una ventana emergente con más información
        btnMoreInfo.addEventListener('click', () => {
            // Crear el contenido de la ventana emergente
            const ventana = window.open('', '_blank', 'width=1200,height=800');
            ventana.document.write('<p><strong>Title:</strong> ' + pelicula[0].replace('Title:', '') + '</p>');
         
            ventana.document.write('<p><strong>Director:</strong> ' + pelicula[1].replace('Director:', '') + '</p>');
            ventana.document.write('<p><strong>Género:</strong> ' + pelicula[2].replace('Genre:', '') + '</p>');
            ventana.document.write('<img src="' + pelicula[3].replace('Poster:', '') + '" alt="Poster" ">');
            ventana.document.write('<iframe src="' + pelicula[4].replace('Trailer:', '') + '" width="800" height="400"></iframe>');
        });

        // Agregar el botón "More Info" a la celda
        tdPelicula.appendChild(btnMoreInfo);

        // Agregar la celda (td) con toda la información a la fila
        tr.appendChild(tdPelicula);
        
        // Agregar la fila a la tabla
        fila.appendChild(tr);
    });
}
// Función para filtrar las películas por género
function filtrarPeliculas(genre) {
    return peliculas.filter(pelicula => pelicula[2].includes(genre));
}

// Eventos para los botones
btPelisAction.addEventListener('click', () => {
    // Muestra solo las películas de acción
    const peliculasAction = filtrarPeliculas('Action');
    mostrarPeliculas(peliculasAction);
});

btPelisHorror.addEventListener('click', () => {
    // Muestra solo las películas de terror
    const peliculasHorror = filtrarPeliculas('Horror');
    mostrarPeliculas(peliculasHorror);
});

btPelisTodas.addEventListener('click', () => {
    // Muestra todas las películas
    mostrarPeliculas(peliculas);
});
