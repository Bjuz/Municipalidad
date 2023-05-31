const { async } = require("@firebase/util");
const { AddVacation, RetornarCantidadVacaciones } = require("./util");
const { ObtenerFuncionarios } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");
const { RetornarVacaciones } = require("./util");
const { Restadias } = require("./util");

// On window load
window.onload = async function () {
  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  // Get the mainDiv
  var mainDiv = document.getElementById("mainDiv");

  const acumulatedDays = funcionario.accumulatedDays;

  // Create an span with the ammount of vacations
  var span = document.createElement("span");
  span.innerHTML = "Vacaciones acumuladas: " + acumulatedDays;
  console.log(acumulatedDays);

  // Append as a child to mainDiv
  mainDiv.appendChild(span);

  roleDisplay(funcionario.role);
};

document.getElementById("sendData").onclick = async function () {
  //Get values from the form on SolicitarVacaciones.html
  var firstDate = document.getElementById("firstDate").value;
  var finishDate = document.getElementById("finishDate").value;
  var motivo = document.getElementById("motivo").value;

  // If the dates are not valid, then the function ends
  if (!validarVacaciones(firstDate, finishDate)) {
    return;
  }
  // Confirmation message
  var firstDateFormatted = new Date(firstDate);
  var finishDateFormatted = new Date(finishDate);

  // Add one date to firstDate and finishDate to avoid the problem of the date being one day less than the one selected
  firstDateFormatted.setDate(firstDateFormatted.getDate() + 1);
  finishDateFormatted.setDate(finishDateFormatted.getDate() + 1);

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
    return false;
  }

  var ref = localStorage.getItem("userLoggueado");

  // Calculate the difference between the dates
  var daysDifference = Restadias(firstDate, finishDate);
  // Check if the user has enough days to request vacations
  var acumulatedDays = await RetornarCantidadVacaciones(ref);

  // If all the conditions are met, the request is sent to the database
  if (acumulatedDays <= 0) {
    alert(
      "En este momento no puede solicitar vacaciones ya que no tiene dias acumulados."
    );
    return "En este momento no puede solicitar vacaciones ya que no tiene dias acumulados.";
  } else if (daysDifference > acumulatedDays) {
    alert(
      "No tienes dias suficientes para solicitar vacaciones. Tienes " +
      acumulatedDays +
      " dias acumulados e intentas solicitar " +
      daysDifference +
      " dias."
    );
    return (
      "No tienes dias suficientes para solicitar vacaciones. Tienes " +
      acumulatedDays +
      " dias acumulados e intentas solicitar " +
      daysDifference +
      " dias."
    );
  } else {
    // Send the request to the database
    var result = await AddVacation(firstDate, finishDate, ref, motivo);
    if (result == "Vacaciones solicitadas con éxito") {
      const data = {
        firstDate: firstDate,
        finishDate: finishDate,
        motivo: motivo,
      };

      fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Response:", result);
          // Handle the response data here
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle any errors that occurred during the request
        });
    }
    alert(result);
    return result;
  }
};

function validarVacaciones(firstDate, finishDate) {
  // If 'motivo' is empty, then it is not valid
  if (document.getElementById("motivo").value == "") {
    alert("Debe ingresar un motivo");
    return false;
  }

  //If the date is less than the current date, then it is not valid
  var fistDateTemplate = firstDate;
  var date = new Date().toISOString().split("T")[0];


  if (firstDate <= new Date().toISOString().split("T")[0]) {
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

  // Avoid to let user to take vacations with more than 2 years in advance
  var today = new Date();
  var twoYears = new Date();
  twoYears.setFullYear(today.getFullYear() + 2);

  if (firstDate > twoYears.toISOString().split("T")[0]) {
    alert("No puede solicitar vacaciones con mas de 2 años de anticipación");
    return false;
  }

  return true;


}