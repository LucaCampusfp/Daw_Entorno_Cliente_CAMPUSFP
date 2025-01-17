document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const confirmPass = document.getElementById('confirmPass').value;
    const pais = document.getElementById('pais').value;
    
    // Obtener el estado del radio button fumador
    const fumador = document.querySelector('input[name="fumador"]:checked');

    // Limpiar posibles mensajes de error previos
    clearErrors();

    // Validar que los campos obligatorios estén llenos
    if (!nombre || !apellidos || !email || !user || !pass || !confirmPass || !pais) {
        showError('Todos los campos obligatorios deben ser completados.');
        isValid = false;
    }

    // Validar formato de email
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        showError('Por favor ingrese un email válido.');
        isValid = false;
    }

    // Validar la longitud y tipo de la contraseña
    if (pass.length < 8 || !/[A-Za-z0-9]/.test(pass)) {
        showError('La contraseña debe tener al menos 8 caracteres alfanuméricos.');
        isValid = false;
    }

    // Validar que las contraseñas coincidan
    if (pass !== confirmPass) {
        showError('Las contraseñas no coinciden.');
        isValid = false;
    }

    // Validar que se haya seleccionado un país
    if (!pais) {
        showError('Debe seleccionar un país.');
        isValid = false;
    }

    // Validar que se haya seleccionado una opción de fumador (Sí o No)
    if (!fumador) {
        showError('Debe indicar si es fumador.');
        isValid = false;
    }

    // Si el formulario es válido, mostrar mensaje
    if (isValid) {
        alert('Formulario enviado correctamente.');
        document.getElementById('contactForm').reset();
    }
});

function showError(message) {
    alert(message);
}

function clearErrors() {
    // Aquí podrías limpiar los mensajes de error, si decides mostrarlos en un contenedor
}
