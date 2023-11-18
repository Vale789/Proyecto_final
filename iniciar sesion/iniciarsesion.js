function iniciarSesion() {
    const correoLogin = document.getElementById('Email').value;
    const contrasenaLogin = document.getElementById('contrasena').value;

    const usuarioGuardado = localStorage.getItem(contrasenaLogin);

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);

        if (usuario.contrasena === contrasenaLogin) {
            document.getElementById('mensajeError').innerText = '';

            // Mostrar usuario logueado
            document.getElementById('usuarioLogueado').style.display = 'block';
            document.getElementById('nombreUsuario').innerText = usuario.nombre;

            // Ocultar formulario de inicio de sesión
            document.getElementById('app').style.display = 'none';
        } else {
            document.getElementById('mensajeError').innerText = 'Contraseña incorrecta';
        }
    } else {
        document.getElementById('mensajeError').innerText = 'Usuario no registrado';
    }
}

function cerrarSesion() {
    // Limpiar campos de inicio de sesión
    document.getElementById('correoLogin').value = '';
    document.getElementById('contrasenaLogin').value = '';

    // Ocultar usuario logueado y mostrar formulario de inicio de sesión
    document.getElementById('usuarioLogueado').style.display = 'none';
    document.getElementById('app').style.display = 'block';
}

function irA(pagina) {
    window.location.href = pagina;
}