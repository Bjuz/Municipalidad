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

  if (!validarVacaciones(firstDate, finishDate)) {
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


function validarVacaciones(firstDate, finishDate) {

  // If 'motivo' is empty, then it is not valid
  if (document.getElementById("motivo").value == "") {
    alert("Debe ingresar un motivo");
    return false;
  }

  //If the date is less than the current date, then it is not valid
  if (firstDate < new Date().toISOString().split("T")[0]) {
    alert("La fecha de inicio no puede ser menor o igual a la fecha actual");
    return false;
  }

  //Check if the dates are valid values for checking the difference
  if (firstDate == "" || finishDate == "") {
    alert("Debe ingresar ambas fechas");
    return false;
  } else if (firstDate > finishDate) {
    alert("La fecha de inicio no puede ser mayor a la fecha de fin");
    return false;
  }
  // Check if the dates are not in the weekend (saturday or sunday) tge date format is yyyy-mm-dd
  var firstDateDay = new Date(firstDate).getDay();
  var finishDateDay = new Date(finishDate).getDay();


  if (firstDateDay == 5 || firstDateDay == 6) {
    alert("La fecha de inicio no puede ser un fin de semana");
    return false;

  } else if (finishDateDay == 5 || finishDateDay == 6) {
    alert("La fecha de fin no puede ser un fin de semana");
    return false;
  }


  return true;

}