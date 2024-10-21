/*
document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();  // Previene el comportamiento por defecto del formulario
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    var conf_contraseña = document.getElementById('conf_contraseña').value;
    var correo = document.getElementById('correo').value;
    var paises = document.getElementById('paises').value;
    var comentario = document.getElementById('comentario').value;
    var option = document.getElementById('option').value;

    console.log(nombre);
    console.log(apellido);
    console.log(usuario);
    console.log(contraseña);
    console.log(conf_contraseña);
    console.log(correo);
    console.log(paises);
    console.log(comentario);
    console.log(option);
});
*/


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
    // Imprimir en consola
    console.log(nombre);
    console.log(apellido);
    console.log(usuario);
    console.log(contraseña);
    console.log(conf_contraseña);
    console.log(correo);
    console.log(paises);
    console.log(comentario);
    console.log(option); 
}

// Asignar la función al evento 'submit' del formulario
document.getElementById('formulario').addEventListener('submit', manejarEnvioFormulario);
