document.addEventListener('DOMContentLoaded', function (){
document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    // Captura los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    
    const formData = {
        nombre,
        apellido,
        fechaNacimiento
    };
    
    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no se completó correctamente');
        }
        return response.json();
    })
    .then(data => {
        
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso. Datos enviados al servidor.');
    })
    .catch(error => {
       
        console.error('Error en la solicitud:', error);
        alert('Ha ocurrido un error al enviar los datos al servidor.');
    });
})});
