const { LoadUsers } = require("./util");

window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  // Load users
  const users = await LoadUsers();

  // Call the tbody element called 'tableBody'
  const tableBody = document.getElementById("tableBody");

  // Verify if the user has this internal array
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
        // Add the columns to the row
        //tr.appendChild(tdNumeroSolcitud);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEstado);
        tr.appendChild(tdFechaInicio);
        tr.appendChild(tdFechaFin);
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


/* const tr = document.createElement("tr");
      tableBody.appendChild(tr);
      //const tdNumeroSolcitud = document.createElement("td");
      const tdNombre = document.createElement("td");
      const tdEstado = document.createElement("td");
      const tdFechaInicio = document.createElement("td");
      const tdFechaFin = document.createElement("td");

      tr.appendChild(tdNombre);
      tr.appendChild(tdEstado);
      tr.appendChild(tdFechaInicio);
      tr.appendChild(tdFechaFin);

      const vacations = user.VacacionesActivas;
      vacations.forEach((vacation) => {
        tdNombre.textContent = user.name;
        tdEstado.textContent = vacation.Estado;
        tdFechaInicio.textContent = vacation.firstDate;
        tdFechaFin.textContent = vacation.LastDate;
      }); */
  

  

  

function getListOfVacations(users){
  var nVacations = 0;

  users.forEach((user) => {
    if (user.hasOwnProperty("VacacionesActivas")) {
      const vacations = user.VacacionesActivas;
      vacations.forEach((vacation) => {
        nVacations++;
      });
    }
  });
  return nVacations;
}
