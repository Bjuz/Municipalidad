const { RetornarVacaciones } = require("./util");
const { GetFuncionario } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { UpdateVacationWithRazon } = require("./util");
const { ObtenerFuncionariosUID } = require("./util");
 select = document.getElementById("vacationId"),
 startDate = document.getElementById("startDate"),
 finDate = document.getElementById("finDate");

var userId = localStorage.getItem("userLoggueado");

// When the windows load, I would like to load the information of the user
window.onload = async function () {

  var funcionario = await GetFuncionario(userId);

  roleDisplay(funcionario.role)

  // Let's get the vacations of the user
  const vacations = await RetornarVacaciones(userId);

  // Variables
  var firstDate, finishDate;
  var select = document.getElementById("vacationId");

  // If the vacations are empty, then we will show a message
  if (vacations.length == 0) {
    var option = document.createElement("option");
    option.text = "No hay solicitudes activas ";
    select.appendChild(option);

    // If the vacations are not empty, then we will show the vacations
  } else {

    // This variable will asign an id to each option
    // This id will be the same that the id of the vacation in the database
    var i = 0;

    vacations.forEach((vacation) => {

      // Verify if the vacation is approved or rejected avoiding adding it to the select
      if (vacation.Estado == "Aprobada" || vacation.Estado == "Rechazada" || vacation.Estado == "Cancelada") {
        if (vacations.length == 1) {
          var option = document.createElement("option");
          option.text = "No hay solicitudes activas ";
          select.appendChild(option);
        }
      } else {

        // Values of the dates coming from the database
        firstDate = vacation.firstDate;
        finishDate = vacation.LastDate;

        var startDate = document.getElementById("startDate");
        var finDate = document.getElementById("finDate");

        // Let's add the dates to the inputs
        startDate.value = firstDate;
        finDate.value = finishDate;

        //The dates come like YYYY-MM-DD
        // Format the dates like DD/MM/YYYY
        firstDate = firstDate.split("-");
        firstDate = firstDate[2] + "/" + firstDate[1] + "/" + firstDate[0];

        finishDate = finishDate.split("-");
        finishDate = finishDate[2] + "/" + finishDate[1] + "/" + finishDate[0];

        // Let's create the option of the select with the dates
        var option = document.createElement("option");
        option.setAttribute("id", i);

        // The value of the option will be the id of the vacation
        option.setAttribute("value", vacation.id);

        option.text = firstDate + " hasta " + finishDate;

        // Finally, let's add the option to the select
        select.appendChild(option);
      }
      i++;
    });
  }
};

async function loadInfo(id) {

  // Previously, we set the value of the option as the id of the vacation in the database
  var id = document.getElementById(id).value;
  if (!isNaN(id)) {
    var response = await getSolicitudFuncionario(id);

    return response;
  } else {
    alert("El id debe ser un valor numérico");
  }
}

document.getElementById("updateBtn").onclick = async function () {
  var response = await  UpdateSolicitud();
};

async function UpdateSolicitud() {


  // Let's get the values of the select 
  var select = document.getElementById("vacationId");
  var optionText = select.options[select.selectedIndex].text;

  if (optionText == "No hay solicitudes activas ") {
    alert("No hay solicitudes activas");
    return;
  }
  else {

    // After getting the value of the select, we need to format the date
    // The date in the select is showed like 'DD/MM/YYYY hasta DD/MM/YYYY'
    // We need to re-format it in two variables like YYYY-MM-DD for the database

    //*************************This is for the original date *******************/
    var firstDate = optionText.split(" hasta ")[0];
    var finishDate = optionText.split(" hasta ")[1];

    firstDate = firstDate.split("/");
    firstDate = firstDate[2] + "-" + firstDate[1] + "-" + firstDate[0];

    finishDate = finishDate.split("/");
    finishDate = finishDate[2] + "-" + finishDate[1] + "-" + finishDate[0];

    //*************************This is for the new dates **********************/

    var firstDateNew = document.getElementById("startDate").value;
    var finishDateNew = document.getElementById("finDate").value;

    if (validateDate(firstDate, finishDate, firstDateNew, finishDateNew)) {
      var motivo = document.getElementById("motivo").value;

      if (motivo == "") {
        alert("Debe agregar un motivo");
      } else {

        //*******************Confirmation message *******************/
        // Format the dates to show them in the confirmation message
        var firstDateFormatted = new Date(firstDateNew);
        var finishDateFormatted = new Date(finishDateNew);

        // Since firstDateNew and finishDateNew are being created one day less
        // We need to add one day to the dates
        firstDateFormatted.setDate(firstDateFormatted.getDate() + 1);
        finishDateFormatted.setDate(finishDateFormatted.getDate() + 1);

        var confirmation = confirm(
          "¿Está seguro que desea modificar su solicitud, siendo ahora desde el " +
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

        //**************************** Filter finished ******************************/

        /*****************************DATABASE METHOD *******************************/

        // Get the id of the vacation that is the same that in the database
        var optionValue = select.options[select.selectedIndex].value;
        // With this you will get vacation info from the database
        //var vacationInfo = loadInfo(optionValue);
        // Database method to update the vacation
        var user = await ObtenerFuncionariosUID(userId);
        const response = await UpdateVacationWithRazon(firstDate,finishDate,firstDateNew, finishDateNew,user.Ref, motivo);

        alert(response)




        /* This was here but I don't think it's necessary anymore:

        alert("Actualizando información de Solicitud");
        localStorage.setItem("firstDate", firstDate);
        localStorage.setItem("finishDate", finishDate);
        localStorage.setItem("motivo", motivo);

        console.log("firstDate: " + firstDate);
        console.log("finishDate: " + finishDate);
        console.log("Motivo: " + motivo);
        alert(response);
        return response;*/
      }
    }
  }
}


// Creates a boolean function to validate the date
function validateDate(firstDate, finishDate, firstDateNew, finishDateNew) {
  // If the old dates are equal to the new dates, then we will show a message
  if (firstDate == firstDateNew && finishDate == finishDateNew) {
    alert("No se han realizado cambios");
    return false;
  }
  // If the new dates are empty, then we will show a message
  if (firstDate == "" || finishDate == "") {
    alert("Debe ingresar ambas fechas");
    return false;
  } else
    // If the new dates are equal or the firstDate is greater than the finishDate, 
    // then we will show a message
    if (firstDate > finishDate || firstDate == finishDate) {
      alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin");
      return false;
    }

  // ***********  Get current date to compare with the new dates ************
  var today = new Date();
  // Format the date like YYYY-MM-DD
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();

  // If the day is less than 10, then we need to add a 0 before the day
  if (dd < 10) {
    dd = "0" + dd;
  }

  // If the month is less than 10, then we need to add a 0 before the month
  if (mm < 10) {
    mm = "0" + mm;
  }

  // Let's create the current date
  today = yyyy + "-" + mm + "-" + dd;

  // If the new dates are less than the current date, then we will show a message
  if (firstDateNew <= today || finishDateNew < today) {
    alert("No puede ingresar fechas anteriores a la actual");
    return false;
  }
  return true;
}