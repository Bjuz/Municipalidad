const { async } = require("@firebase/util");
const { AddVacation, RetornarCantidadVacaciones } = require("./util");
const { ObtenerFuncionariosEmail } = require("./util");
const { roleDisplay } = require("./util");
const { GetFuncionario } = require("./util");
const { RetornarVacaciones } = require("./util");


// On window load
window.onload = async function () {
  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  // Get the mainDiv
  var mainDiv = document.getElementById("mainDiv");

  const acumulatedDays = funcionario.accumulatedDays;

  // Create an span with the ammount of vacations
  var span = document.createElement("span");
  span.innerHTML = "Cantidad de vacaciones: " + acumulatedDays;

  // Append as a child to mainDiv
  mainDiv.appendChild(span);


  roleDisplay(funcionario.role);
}

document.getElementById("sendData").onclick = async function () {
  //Get values from the form on SolicitarVacaciones.html
  var firstDate = document.getElementById("firstDate").value;
  var finishDate = document.getElementById("finishDate").value;

  // If 'motivo' is empty, then it is not valid
  if (document.getElementById("motivo").value == "") {
    alert("Debe ingresar un motivo");
    return "Debe ingresar un motivo";
  }

  //If the date is less than the current date, then it is not valid
  if (firstDate < new Date().toISOString().split("T")[0]) {
    alert("La fecha de inicio no puede ser menor o igual a la fecha actual");
    return "La fecha de inicio no puede ser menor o igual a la fecha actual";
  }


  //Check if the dates are valid values for checking the difference
  if (firstDate == "" || finishDate == "") {
    alert("Debe ingresar ambas fechas");
    return "Debe ingresar ambas fechas";
  } else if (firstDate > finishDate || firstDate == finishDate) {
    alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin");
    return "La fecha de inicio no puede ser mayor o igual a la fecha de fin";
  }

  var ref = localStorage.getItem("userLoggueado");

  // Calculate the difference between the dates
  var daysDifference =
    (new Date(finishDate) - new Date(firstDate)) / (1000 * 60 * 60 * 24);
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
    var result = await AddVacation(firstDate, finishDate, ref);
    alert(result);
    return result;
  }
};

//Partner tried to send an e-mail to the user
/*
var emailCx = await ObtenerFuncionariosEmail(ref);

if (result == "Vacaciones solicitadas con éxito") {
    const email = {
      to: emailCx,
      subject: "Solicitud de vacaciones",
      text:
        "Sus vacaciones de la fecha: " +
        firstDate +
        " hasta la fecha: " +
        finishDate +
        " fueron solicitadas con exito y esta a la espera de aprobacion por su jefe directo",
    };

    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // set mode option to 'no-cors'
      body: JSON.stringify(email),
    });

    const result = await response.json();

    alert(result.message);
  }*/
