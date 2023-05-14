// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
const { RetornarVacaciones } = require("./util");
const { RetornarCantidadVacaciones } = require("./util");
const { roleDisplay } = require("./util");
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
    Vacations.forEach((element) => {
      i += 1;
      Listas.innerHTML += `<tr>
      <td>${i}</td>
      <td>${element.firstDate}</td>
      <td>${element.LastDate}</td>
      <td>${element.Estado}</td>
     
      </tr>`
    })

  }



  // This function is called when the user clicks on the download button
  // It creates a xlsx file with the vacations and downloads it
  // Since the button was created with innerHTML, we need to use the window object
  // to access the function
  window.download = function () {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(Vacations);
    // Change the column name 'firstDate' to 'Fecha de inicio'
    ws.A1.v = "Fecha de inicio";
    // Change the column name 'LastDate' to 'Fecha de finalizacion'
    ws.B1.v = "Fecha final";

    XLSX.utils.book_append_sheet(wb, ws, "Vacaciones");
    XLSX.writeFile(wb, "Vacaciones.xlsx");
  };

});
