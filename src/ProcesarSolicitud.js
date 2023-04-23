const { LoadUsers } = require("./util");


// Load users data and generates the table
window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  // Load users
  const users = await LoadUsers();

  // Call the tbody element called 'tableBody'
  const tableBody = document.getElementById("tableBody");
  // Verify if the user has this internal array
  var i = 0;

  users.forEach((user) => { 
    if (user.hasOwnProperty("VacacionesActivas")) {

      // I need to add a row for each vacation
      const vacations = user.VacacionesActivas;
      vacations.forEach((vacation) => {
        // Create a row
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        // Create the columns
        //const tdNumeroSolcitud = document.createElement("td");
        const tdNombre = document.createElement("td");
        const tdEstado = document.createElement("td");
        const tdFechaInicio = document.createElement("td");
        const tdFechaFin = document.createElement("td");

        //Finally add to buttons to the row in the last column
        const tdButtons = document.createElement("td");
        const btnAprobar = document.createElement("button");
        const btnRechazar = document.createElement("button");

        // Also, this buttons need to have an id, the 'i' variable will help us to identify the row
        btnAprobar.id = "btnAprobar" + i;
        btnRechazar.id = "btnRechazar" + i;

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
      }); 
    }
  });
});


  

function getListOfVacations(users){
  var vacations = [];

  users.forEach((user) => {
    if (user.hasOwnProperty("VacacionesActivas")) {
      const vacations = user.VacacionesActivas;
      vacations.forEach((vacation) => {
        vacations.push(vacation);
      });
    }
  });
  return nVacations;
}
