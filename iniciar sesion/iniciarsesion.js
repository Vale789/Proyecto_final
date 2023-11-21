function login() {
    const email = document.querySelector('input[type="text"]').value;
    const contrasena = document.querySelector('input[type="password"]').value;

    // Verificar si el usuario existe en el localStorage
    const usuarioGuardado = localStorage.getItem(email);

    if (usuarioGuardado) {
        // Si el usuario existe, obtener los datos almacenados
        const usuario = JSON.parse(usuarioGuardado);

        // Verificar si la contraseña coincide
        if (usuario.contrasena === contrasena) {
            // Redirigir a la página principal
            window.location.href = 'index.html';
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

function logout() {
    // Verificar si hay una sesión iniciada antes de cerrarla
    const email = localStorage.getItem("email");

    if (email) {
        // Eliminar la información de inicio de sesión del almacenamiento local
        localStorage.removeItem("email");
        localStorage.removeItem("contrasena");

        alert("Sesión cerrada");
        // Redirigir a la página de inicio de sesión después de cerrar la sesión
        window.location.href = 'iniciar_sesion.html';
    } else {
        // No hay sesión iniciada, mostrar un mensaje o realizar otras acciones si es necesario
        alert("No hay sesión iniciada");
    }
}
