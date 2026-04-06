document.getElementById('dynamicButton').addEventListener('click', function() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;  // ← nuevo
    const mensaje = document.getElementById('mensaje').value;

    const texto = document.getElementById('dynamicText');

    if (nombre === '' || apellido === '' || correo === '' || telefono === '' || mensaje === '') {  // ← agregado
        texto.textContent = '⚠️ Debes completar todos los campos';
        texto.style.color = 'red';
        return;
    }

    window.location.href = 'confirmacion.html';
});