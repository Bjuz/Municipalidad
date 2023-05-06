// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
const { RetornarVacaciones } = require("./util");
const { RetornarCantidadVacaciones } = require("./util");

// adds xlsx library to the project
var XLSX = require("xlsx");

window.addEventListener("DOMContentLoaded", async (event) => {
  var ul = document.getElementById("vacationsList");
  var li;
  var div;
  document.getElementById("loader").style.display = "block";
  var ref = localStorage.getItem("userLoggueado");
  const Vacations = await RetornarVacaciones(ref); // Retorna la cantidad de vacaciones disponibles
  const CantidadDeVacaciones = await RetornarCantidadVacaciones(ref); // Retorna la lista de vacaciones
  console.log(Vacations);
  const Listas = document.getElementById('Listas');
  const CantVacaciones = document.getElementById('CantVacaciones');
  if (Vacations.length == 0) {
    Listas.innerHTML =`<p>No hay vacaciones registradas</p>`
  }else {
    var i = 0;
    
    CantVacaciones.innerHTML =  " Cantidad de vacaciones actuales: " + CantidadDeVacaciones;
    Vacations.forEach((element) => {
      i += 1;
      Listas.innerHTML +=`<tr>
      <td>${i}</td>
      <td>${element.firstDate}</td>
      <td>${element.LastDate}</td>
      <td>${element.Estado}</td>
     
      </tr>`
    })
    
  }

  /*if (Vacations.length == 0) {
    //Valida el caso de que no tenga vacaciones
    alert("Este usuario no tiene vacaciones solicitadas actualmente.");
    li = document.createElement("li");
    li.setAttribute("id", "vacation" + i);
    ul.appendChild(li);
    li.appendChild(
      document.createTextNode(
        "Este usuario no tiene vacaciones solicitadas actualmente. \n Cantidad de vacaciones actuales: " +
          CantidadDeVacaciones
      )
    );
  } else {
    //caso de que si tenga
    var i = 0;

    li = document.createElement("li");
    li.setAttribute("id", "vacation" + i);
    ul.appendChild(li);
    li.appendChild(
      document.createTextNode(
        " Cantidad de vacaciones actuales: " + CantidadDeVacaciones
      )
    ); //Muestra la cantidad de dias acumulados
    Vacations.forEach((element) => {
      // Navega entre las vacaciones y las muestra
      i += 1;
      li = document.createElement("li");
      li.setAttribute("id", "vacation" + i);
      ul.appendChild(li);
      li.appendChild(
        document.createTextNode(
          "Vacacion " +
            i +
            " : " +
            "Fecha de nicio = " +
            element.firstDate +
            " Fecha finalizacion = " +
            element.LastDate +
            " Estado: " +
            element.Estado
        )
      ); //inserta las vacaciones
    });
    //After the list is created, we add the button to download as xlsx file
    div = document.createElement("div");
    div.setAttribute("id", "downloadButton");
    ul.appendChild(div);
    div.innerHTML =
      '<button id="downloadButton" class="btn btn-primary" onclick="download()">Descargar</button>';
  }*/



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

  document.getElementById("loader").style.display = "none";
});
