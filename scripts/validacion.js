function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    if (nombre.length < 3 || nombre.length > 20) {
      alert("El campo 'Nombre' debe tener entre 3 y 20 caracteres.");
      return false;
    }

    if (apellido.length < 3 || apellido.length > 20) {
      alert("El campo 'Apellido' debe tener entre 3 y 20 caracteres.");
      return false;
    }

    return true;
  }