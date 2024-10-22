
function manejarEnvioFormulario(event) {
    event.preventDefault();  // Previene el comportamiento por defecto del formulario
    // Captura de valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    var confContraseñaInput = document.getElementById('conf_contraseña'); // Aquí se corrige la referencia
    var conf_contraseña = confContraseñaInput.value; // Usa la referencia correcta
    var correo = document.getElementById('correo').value;
    var paises = document.getElementById('paises').value;
    var comentario = document.getElementById('comentario').value;
    var option = document.getElementById('option').value;

    if (contraseña !== conf_contraseña) {
        confContraseñaInput.setCustomValidity("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        confContraseñaInput.reportValidity(); // Muestra el mensaje de error
        return;
    } else {
        confContraseñaInput.setCustomValidity(""); // Resetea el mensaje de error si las contraseñas coinciden
    }
   
   
 // Crear un objeto con los datos del formulario
    var datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        correo: correo,
        paises: paises,
        comentario: comentario,
        option: option
    };

    // Almacenar el objeto en localStorage como una cadena JSON
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    window.location.href = 'index2.html';
}

// Asignar la función al evento 'submit' del formulario
document.getElementById('formulario').addEventListener('submit', manejarEnvioFormulario);
