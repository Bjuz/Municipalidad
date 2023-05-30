const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");
const { AddVacationEmergency } = require("./util");

// On window load
window.onload = async function () {
  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  roleDisplay(funcionario.role);
};

document.getElementById("sendData").onclick = async function () {
  var firstDate = document.getElementById("firstDate").value;
  var finishDate = document.getElementById("finishDate").value;
  var motivo = document.getElementById("motivo").value;
  var ref = localStorage.getItem("userLoggueado");

  //Ask for confirmation from the user showing the dates formatting them to dd of month formatting month in spanish
  var firstDateFormatted = new Date(firstDate);
  var finishDateFormatted = new Date(finishDate);

  // Add one date to firstDate and finishDate to avoid the problem of the date being one day less than the one selected
  firstDateFormatted.setDate(firstDateFormatted.getDate() + 1);
  finishDateFormatted.setDate(finishDateFormatted.getDate() + 1);

  if (!validateDates(firstDate, finishDate, motivo)) {
    return;
  }

  var confirmation = confirm(
    "¿Está seguro que desea solicitar vacaciones desde el " +
      firstDateFormatted.getDate() +
      " de " +
      firstDateFormatted.toLocaleString("es-ES", { month: "long" }) +
      " hasta el " +
      finishDateFormatted.getDate() +
      " de " +
      finishDateFormatted.toLocaleString("es-ES", { month: "long" }) +
      "?"
  );
  if (!confirmation) {
    return;
  }

  //There is no any database functionality yet, so we just show an alert
  var result = await AddVacationEmergency(firstDate, finishDate, ref, motivo);
  alert(result);
};

// Function to validate the dates
function validateDates(firstDate, finishDate, motivo) {
  // Get the current date
  var currentDate = new Date();
  // Format the current date to mm/dd/yyyy
  currentDate = currentDate.toLocaleDateString("en-CA");

  // 'firstDate' comes correctly, but
  //Check if the dates are valid
  if (firstDate == "" || finishDate == "") {
    alert("Debe ingresar ambas fechas");
    return false;
  } else if (firstDate > finishDate) {
    alert("La fecha de inicio no puede ser mayor a la fecha de fin");
    return false;
  } // Check if the first date is greater than the current date
  else if (firstDate < currentDate) {
    alert("La fecha de inicio no puede ser menor a la fecha actual");
    return false;
  }
  // Check if the reason is empty
  else if (motivo == "") {
    alert("Debe ingresar un motivo");
    return false;
  }
  return true;
}
