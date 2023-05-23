const { LoadUsers } = require("./util");
const { UpdateVacation } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");
var XLSX = require("xlsx");



// Global variable that will contain the users with vacations data from the database
const vacationUsers = [];

// Load users data and generates the table
window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  roleDisplay(funcionario.role);

  // Load users
  const users = await LoadUsers();
  var ref = localStorage.getItem("userLoggueado");



  // Call the tbody element called 'tableBody'
  const tableBody = document.getElementById("tableBody");
  // Verify if the user has this internal array
  var i = 0;
  var UsuarioAcctual;
  users.forEach((user) => {
    if(user.Ref == ref){
      UsuarioAcctual = user;
    }
  });


  // Headers for the table
  const headers = ["Nombre", "Estado", "Fecha Inicio", "Fecha Fin", "Acciones"];
  // Create a row for the headers
  const trHeaders = document.createElement("tr");
  // Add the row to the table body
  tableBody.appendChild(trHeaders);
  // Create the headers
  headers.forEach((header) => {
    const th = document.createElement("th");
    trHeaders.appendChild(th);
    th.textContent = header;
  });



  users.forEach((user) => {
    if (user.hasOwnProperty("VacacionesActivas")) {

      vacationUsers.push(user);
      // Add a row for each vacation
      const vacations = user.VacacionesActivas;
      if(UsuarioAcctual.role =="Jefe directo" || UsuarioAcctual.role =="Encargado de recursos humanos"){  
        document.getElementById("download").innerHTML = `<button class="btn btn-primary" onclick="download()">Descargar</button>`
        }
      vacations.forEach((vacation) => {
        if (vacation.Estado == "Cancelada" || vacation.Estado == "Aprobada" || vacation.Estado == "Rechazada por jefe directo" || vacation.Estado == "Rechazada por alcalde" || vacation.Estado == "Rechazada por recursos humanos" || vacation.Estado == "Aprobado") {
          return
        }
        if(user.bosscorreo != UsuarioAcctual.email && UsuarioAcctual.role !="Encargado de recursos humanos"){
          return
        }

        if(UsuarioAcctual.role =="Alcalde" && vacation.Estado != "Esperando la aprobación del alcalde" ){
          return
        }
        if(UsuarioAcctual.role =="Jefe directo" && vacation.Estado != "Esperando la aprobación del jefe directo" ){
          return
        }
        if(UsuarioAcctual.role =="Funcionario" ){
          return
        }
        // Create a row
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        // Create the columns
        //const tdNumeroSolcitud = document.createElement("td");
        const tdNombre = document.createElement("td");
        const tdEstado = document.createElement("td");
        const tdFechaInicio = document.createElement("td");
        const tdFechaFin = document.createElement("td");

        //Finally add two buttons to the row in the last column
        const tdButtons = document.createElement("td");
        tdButtons.setAttribute("class", "btn-group");


        const btnAprobar = document.createElement("button");
        btnAprobar.setAttribute("id", "btnAprobar" + i);
        btnAprobar.setAttribute("class", "btn btn-primary");
        btnAprobar.setAttribute("value", user.id + "|" + vacation.firstDate + "|" + vacation.LastDate);

        const btnRechazar = document.createElement("button");
        btnRechazar.setAttribute("id", "btnRechazar" + i);
        btnRechazar.setAttribute("class", "btn btn-danger");
        btnRechazar.setAttribute("value", user.id + "|" + vacation.firstDate + "|" + vacation.LastDate);


        btnAprobar.textContent = "Aprobar";
        btnRechazar.textContent = "Rechazar";

        tdButtons.appendChild(btnAprobar);
        tdButtons.appendChild(btnRechazar);

        // Add the columns to the row
        //tr.appendChild(tdNumeroSolcitud);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEstado);
        tr.appendChild(tdFechaInicio);
        tr.appendChild(tdFechaFin);
        tr.appendChild(tdButtons);
        // Add the data to the columns
        //tdNumeroSolcitud.textContent = vacation.id;
        tdNombre.textContent = user.name;
        tdEstado.textContent = vacation.Estado;
        tdFechaInicio.textContent = vacation.firstDate;
        tdFechaFin.textContent = vacation.LastDate;
        i++;
      });
    }
  });
});

// When a button is clicked
window.addEventListener("click", async (event) => {
  // Get the button id
  const buttonId = event.target.id;
  var response
  const userIdAndDates = event.target.value;

  const user = vacationUsers.find((user) => user.id === userIdAndDates.split("|")[0]);

  var id = userIdAndDates.split("|")[0];
  var firstDateVac = userIdAndDates.split("|")[1]
  var LastDateVac = userIdAndDates.split("|")[2]
  // If the button id starts with btnAprobar
  var tipo;
  if (buttonId.startsWith("btnAprobar")) {
    // Get the button value that is the user id, the first date and the last date

     response  = await UpdateVacation(firstDateVac,LastDateVac, user.Ref,"Aprobado","Aprobado");
     console.log(response)
     



  } else if (buttonId.startsWith("btnRechazar")) {
    // If the button id starts with btnRechazar
    response  = await UpdateVacation(firstDateVac,LastDateVac, user.Ref,"Rechazado","Rechazado");
    console.log(response)

  }
  if(response){
    response = response.split(":")[1];
    console.log( firstDateVac + " " +
      LastDateVac + " "+
      response + " "+
      user.email)
    const data = {
      firstDate: firstDateVac,
      finishDate: LastDateVac,
      Estado: response,
      user: user.email,
    };

    fetch('/send-email-Process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Response:', result);
      // Handle the response data here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
  }
  alert(response);
});


window.download = function () {
  // Create a new workbook and a new worksheet
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.table_to_sheet(document.getElementById("tableBody"));

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Vacaciones");

  // Save the workbook as a xlsx file
  XLSX.writeFile(wb, "Procesar.xlsx");
};