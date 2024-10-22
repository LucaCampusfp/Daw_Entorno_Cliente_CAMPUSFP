  // Recuperar el objeto del localStorage
  var datosFormulario = JSON.parse(localStorage.getItem('datosFormulario'));

  // Asegurarse de que los datos existan
  if (datosFormulario) {
      // Mostrar los datos en la página
      document.getElementById('mostrar-nombre').innerText = datosFormulario.nombre;
      document.getElementById('mostrar-apellido').innerText = datosFormulario.apellido;
      document.getElementById('mostrar-usuario').innerText = datosFormulario.usuario;
      document.getElementById('mostrar-correo').innerText = datosFormulario.correo;
      document.getElementById('mostrar-paises').innerText = datosFormulario.paises;
      document.getElementById('mostrar-comentario').innerText = datosFormulario.comentario;
      document.getElementById('mostrar-opcion').innerText = datosFormulario.option;
  } else {
      // Si no hay datos, muestra un mensaje
      document.body.innerHTML = "<h1>No se han encontrado datos del formulario.</h1>";
  }