function crearUsuario() {
    const nombre = document.getElementById('Nombres').value;
    const apellido = document.getElementById('Apellidos').value;
    const correo = document.getElementById('Email').value;
    const sexo = document.getElementById('sexo').value;
    const contrasena = document.getElementById('contrasena').value;

    const usuario = {
        nombre,
        apellido,
        correo,
        sexo,
        contrasena
    };
    localStorage.setItem(correo, JSON.stringify(usuario));

    alert('Usuario creado correctamente. Por favor, inicie sesión.');
}
  
  