function manejarEnvioFormulario(event) {
    event.preventDefault();  // Previene el comportamiento por defecto del formulario

    // Captura de valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    var confContraseñaInput = document.getElementById('conf_contraseña'); // Referencia correcta
    var conf_contraseña = confContraseñaInput.value; // Usa la referencia correcta
    var correo = document.getElementById('correo').value;
    var paises = document.getElementById('paises').value;
    var comentario = document.getElementById('comentario').value;
    var option = document.getElementById('option').value;

    // Verifica si las contraseñas coinciden
    if (contraseña !== conf_contraseña) {
        alert("Error: las contraseñas no coinciden");
        document.getElementById('contraseña').value = ''; 
        confContraseñaInput.value = ''; 
        return; 
    }
    
    // Si las contraseñas coinciden, crea un objeto con los datos del formulario
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

    // Redirigir a la nueva página
    window.location.href = 'index2.html';
}

// Asignar la función al evento 'submit' del formulario
document.getElementById('formulario').addEventListener('submit', manejarEnvioFormulario);
