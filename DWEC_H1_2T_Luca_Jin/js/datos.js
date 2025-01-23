// Espera a que la página esté cargada antes de ejecutar el código
window.onload = function() {
    // Llamar al archivo JSON usando fetch
    fetch('json/instructores.json')
        .then(response => {
            // Verifica si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            // Llamamos a la función para cargar los datos en la tabla
            cargarDatosEnTabla(data.instructores);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
};

// Función para cargar los datos de los instructores en la tabla
function cargarDatosEnTabla(instructores) {
    const tablaInstructores = document.getElementById("tablaInstructores");

    instructores.forEach(instructor => {
        let row = document.createElement("tr");

        // Crear celdas para nombre y detalles
        let nombreYCargoCell = document.createElement("td");
        nombreYCargoCell.textContent = instructor.nombre_y_cargo;

        let detallesCell = document.createElement("td");
        detallesCell.innerHTML = instructor.detalles.join("<br>");

        // Agregar las celdas a la fila
        row.appendChild(nombreYCargoCell);
        row.appendChild(detallesCell);

        // Agregar la fila a la tabla
        tablaInstructores.appendChild(row);
    });
}
