function register() {
    // dentro del getElementById van como los tiene en el ID del html
    const nombre = document.getElementById('firstname').value; // Corregido el ID
    const apellido = document.getElementById('firstapellido').value; // Corregido el ID
    const correo = document.getElementById('registroEmail').value; // Corregido el ID
    const sexo = document.getElementById('Sexo').value; // Corregido el ID
    const contrasena = document.getElementById('registroContrasena').value;

    const usuario = {
        nombre,
        apellido,
        correo,
        sexo,
        contrasena
    };

    localStorage.setItem(correo, JSON.stringify(usuario)); // Cambiado a email

    alert('Usuario creado correctamente. Por favor, inicie sesión.');
}