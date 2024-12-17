const apiKey = 'e4e90c0b'; // Reemplaza con tu clave de API

// Función que se ejecuta cuando el usuario hace clic en "Buscar"
$(document).ready(function() {
    $('#searchButton').click(function() {
        const movieQuery = $('#movieInput').val();

        if (movieQuery) {
            // Hacer la petición a la API de OMDB
            $.ajax({
                url: `https://www.omdbapi.com/?t=${movieQuery}&apikey=${apiKey}`,
                method: 'GET',
                success: function(response) {
                    if (response.Response === 'True') {
                        // Mostrar la información de la película
                        $('#movieTitle').text(response.Title);
                        $('#movieDirector').text(response.Director);
                        $('#movieGenre').text(response.Genre);
                        $('#movieActors').text(response.Actors);
                        $('#moviePlot').text(response.Plot);
                        $('#moviePoster').attr('src', response.Poster);

                        $('#movieInfo').show();
                    } else {
                        alert('Película no encontrada.');
                    }
                },
                error: function() {
                    alert('Error al buscar la película.');
                }
            });
        } else {
            alert('Por favor ingresa un título o código de película.');
        }
    });
});
