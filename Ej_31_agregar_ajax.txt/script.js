function cargarTexto() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("contenido").innerHTML = xhr.responseText;
        } else {
            document.getElementById("contenido").innerHTML = "Error al cargar el contenido.";
        }
    };
    xhr.onerror = function () {
        document.getElementById("contenido").innerHTML = "Error al realizar la solicitud.";
    };
    xhr.open("GET", "hola.txt", true);
    xhr.send();
}
