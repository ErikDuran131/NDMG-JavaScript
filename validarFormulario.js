document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
  
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }

    var clave = document.getElementById('contraseña').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }


    this.submit();
  }