document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("buscador");
    const sugerenciasContainer = document.getElementById("sugerencias");

    input.addEventListener("input", function () {
        const query = input.value.toLowerCase();

        fetch("sugerencias.json")
            .then(response => response.json())
            .then(data => {
                const sugerencias = data.sugerencias.filter(item => item.toLowerCase().includes(query));
                mostrarSugerencias(sugerencias);
            })
            .catch(error => console.log("Error al cargar el archivo JSON:", error));
    });

    function mostrarSugerencias(sugerencias) {
        sugerenciasContainer.innerHTML = "";
        sugerencias.forEach(sugerencia => {
            const item = document.createElement("a");
            item.classList.add("list-group-item", "list-group-item-action");
            item.textContent = sugerencia;
            sugerenciasContainer.appendChild(item);
        });
    }
});
