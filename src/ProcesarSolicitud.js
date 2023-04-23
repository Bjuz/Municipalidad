const { LoadUsers } = require("./util");

window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  // Load users
  const users = await LoadUsers();

  // Call the tbody element called 'tableBody'
  const tableBody = document.getElementById("tableBody");

  /* // Creates a 'tr' element 
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    // Creates a 'td' element
    const td = document.createElement("td");
    tr.appendChild(td);
    // Dummy data 
    td.innerHTML = "Dummy data";*/

  // Now, some users has an internal array called 'VacacionesActivas'
  // that contains the vacations that the user has requested
  // and are waiting for approval

  // Verify if the user has this internal array
  users.forEach((user) => {
    if (user.hasOwnProperty("VacacionesActivas")) {
      const tr = document.createElement("tr");
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
      });
    }

    /*if (user.hasOwnProperty("VacacionesActivas")) {
      // If the user has this internal array, I need to verify if it has any vacations waiting for approval
      // Verify if the user has any vacations waiting for approval
      const tr = document.createElement("tr");
      tableBody.appendChild(tr);
      //const tdNumeroSolcitud = document.createElement("td");
      const tdNombre = document.createElement("td");
      const tdEstado = document.createElement("td");
      const tdFechaInicio = document.createElement("td");
      const tdFechaFin = document.createElement("td");

      foreach(vacation in user.VacacionesActivas);
      {
        tdNombre.innerHTML(user.Nombre);
        tdEstado.innerHTML(vacation.Estado);
        tdFechaInicio.innerHTML(vacation.firtDate);
        tdFechaFin.innerHTML(vacation.LastDate);
      }*/
  });
});
