function login() {
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar si el usuario existe en el localStorage
    const usuarioGuardado = localStorage.getItem(email);

    if (usuarioGuardado) {
        // Si el usuario existe, obtener los datos almacenados
        const usuario = JSON.parse(usuarioGuardado);

        // Verificar si la contraseña coincide
        if (usuario.contrasena === contrasena) {
            localStorage = 'index.html'
            // Puedes redirigir a otra página o realizar acciones adicionales después del inicio de sesión
        } else {
            // Contraseña incorrecta
            mostrarError('Contraseña incorrecta');
        }
    } else {
        // Usuario no encontrado
        mostrarError('Usuario no encontrado. Por favor, regístrate.');
    }
}

function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = mensaje;
}



// cerrar sesion
 function logout() {
    var email = document.getElementById("email").value;
  var contrasena = document.getElementById("contrasena").value;

  // Guardar información de inicio de sesión en el almacenamiento local
  localStorage.setItem("email", email);
  localStorage.setItem("contrasena", contrasena);

  alert("Inicio de sesión exitoso");
}

function logout() {
  // Eliminar la información de inicio de sesión del almacenamiento local
  localStorage.removeItem("email");
  localStorage.removeItem("contrasena");

  alert("Sesión cerrada");
 }


 // Verificar si hay información de inicio de sesión guardada al cargar la página
window.onload = function() {
    var username = localStorage.getItem("email");
    var password = localStorage.getItem("contrasena");
  
    if (username && password) {
      document.getElementById("email").value = username;
      document.getElementById("contrasena").value = password;
    }
  };

