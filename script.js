document.getElementById('dynamicButton').addEventListener('click', function() {

    // 👇 VAN AQUÍ DENTRO
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = document.getElementById('dynamicText');
    const form = document.querySelector('.formulario');

    if (nombre === '' || apellido === '' || correo === '' || mensaje === '') {
        texto.textContent = '⚠️ Debes completar todos los campos';
        texto.style.color = 'red';
        return;
    }

    texto.textContent = '✅ Formulario enviado correctamente';
    texto.style.color = 'green';

    form.reset();

    setTimeout(() => {
        texto.textContent = '';
    }, 3000);
});