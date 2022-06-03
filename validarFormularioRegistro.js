document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario2").addEventListener('submit', validarFormulario);
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario2 = document.getElementById('nombres').value;
    if(usuario2.length == 0) {
      alert('Introduce un Nombre');
      return;
    }

    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('Introduce tu Apellido');
      return;
    }

    var correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('Introduce un Correo');
      return;
    }
    var clave = document.getElementById('contraseña').value;
    if(clave.length == 0) {
      alert('Introduce una contraseña');
      return;
    }

    var telefono = document.getElementById('telefono').value;
    if(telefono.length == 0) {
      alert('Introduce un numero de telefono');
      return;
    }

   


    this.submit();
  }