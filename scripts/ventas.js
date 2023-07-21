// Función para registrar una venta en la base de datos
function registrarVenta() {
    // Obtener los valores de los campos de entrada
    const fechaVenta = document.getElementById("fecha-venta").value;
    const montoCobrado = document.getElementById("monto-cobrado").value;
  
    // Aquí debes realizar la lógica de conexión y registro en la base de datos SQL
    // Puedes utilizar bibliotecas como Sequelize, Knex.js o escribir tus propias consultas SQL
    
    // Ejemplo de conexión ficticia y registro en la base de datos (mock)
    const venta = {
      fecha: fechaVenta,
      monto: montoCobrado
    };
  
    // Ejemplo de registro ficticio en la base de datos
    database.registrarVenta(venta)
      .then(() => {
        // Registro exitoso, realizar acciones adicionales si es necesario
        console.log("Venta registrada correctamente");
      })
      .catch((error) => {
        // Manejar el error en caso de fallo en la conexión o registro
        console.error("Error al registrar la venta:", error);
      });
  }
  
  // Función para buscar un cliente en la base de datos
  function buscarCliente() {
    // Obtener el valor del campo de entrada (DNI o correo electrónico)
    const dni = document.getElementById("buscar-dni").value;
    const email = document.getElementById("buscar-mail").value;
  
    // Aquí debes realizar la lógica de conexión y búsqueda en la base de datos SQL
    // Puedes utilizar bibliotecas como Sequelize, Knex.js o escribir tus propias consultas SQL
    
    // Ejemplo de conexión ficticia y búsqueda en la base de datos (mock)
    database.buscarCliente(dni, email)
      .then((cliente) => {
        // Cliente encontrado, mostrar los datos en la interfaz
        document.getElementById("cliente-nombre").textContent = "Nombre: " + cliente.nombre;
        document.getElementById("cliente-apellido").textContent = "Apellido: " + cliente.apellido;
        document.getElementById("cliente-dni").textContent = "DNI: " + cliente.dni;
        document.getElementById("cliente-mail").textContent = "Email: " + cliente.email;
      })
      .catch((error) => {
        // Manejar el error en caso de fallo en la conexión o búsqueda
        console.error("Error al buscar el cliente:", error);
      });
  }
  