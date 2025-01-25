// Función para crear una cookie con duración limitada (por ejemplo, 1 minuto)
function crearCookie() {
    let nombre = "usuario";
    let valor = "Juan Perez";
    let fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 1); // Expira en 1 minuto
    let expires = "expires=" + fechaExpiracion.toUTCString();

    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    document.getElementById("resultado").textContent = "Cookie creada con éxito!";
}

// Función para comprobar si la cookie existe
function comprobarCookie() {
    let nombreCookie = "usuario=";
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) == 0) {
            document.getElementById("resultado").textContent = "Cookie encontrada: " + cookie.substring(nombreCookie.length, cookie.length);
            return;
        }
    }
    document.getElementById("resultado").textContent = "Cookie no encontrada.";
}

// Función para modificar la cookie
function modificarCookie() {
    let nombre = "usuario";
    let nuevoValor = "Maria Lopez";
    let fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 1); // Expira en 1 minuto
    let expires = "expires=" + fechaExpiracion.toUTCString();

    document.cookie = nombre + "=" + nuevoValor + ";" + expires + ";path=/";
    document.getElementById("resultado").textContent = "Cookie modificada con éxito!";
}

// Función para eliminar la cookie
function eliminarCookie() {
    let nombre = "usuario";
    let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = nombre + "=; " + expires + ";path=/";
    document.getElementById("resultado").textContent = "Cookie eliminada con éxito!";
}
