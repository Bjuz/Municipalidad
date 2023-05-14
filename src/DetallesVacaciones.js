// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
const { RetornarVacaciones } = require("./util");
const { RetornarCantidadVacaciones } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");

// adds xlsx library to the project
var XLSX = require("xlsx");




window.addEventListener("DOMContentLoaded", async (event) => {

  var ref = localStorage.getItem("userLoggueado");
  var funcionario = await GetFuncionario(ref);
  roleDisplay(funcionario.role);
  const Vacations = await RetornarVacaciones(ref); // Retorna la cantidad de vacaciones disponibles
  const CantidadDeVacaciones = Vacations.length; // Retorna la lista de vacaciones
  console.log(Vacations);
  const Listas = document.getElementById('Listas');
  const CantVacaciones = document.getElementById('CantVacaciones');
  if (Vacations.length == 0) {
    Listas.innerHTML = `<p>No hay vacaciones registradas</p>`
  } else {
    var i = 0;

    CantVacaciones.innerHTML = " Cantidad de vacaciones actuales: " + CantidadDeVacaciones;

    // Create headers for the table
    Listas.innerHTML = `<tr>
    <th>ID</th>
    <th>Fecha de inicio</th>
    <th>Fecha de finalizacion</th>
    <th>Estado</th>
    <th>Motivo</th>
    </tr>`;

    Vacations.forEach((element) => {
      i += 1;
      Listas.innerHTML += `<tr>
      <td>${i}</td>
      <td>${element.firstDate}</td>
      <td>${element.LastDate}</td>
      <td>${element.Estado}</td>
      <td>${element.razon}</td>
     
      </tr>`
    })

    document.getElementById("download").innerHTML = `<button class="btn btn-primary" onclick="download()">Descargar</button>`

  }

  // This function is called when the user clicks on the download button
  // It creates a xlsx file with the vacations and downloads it
  // Since the button was created with innerHTML, we need to use the window object
  // to access the function
  window.download = function () {
    // Create a new workbook and a new worksheet
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.table_to_sheet(document.getElementById("Listas"));

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Vacaciones");

    // Save the workbook as a xlsx file
    XLSX.writeFile(wb, "Vacaciones.xlsx");


  };

});
