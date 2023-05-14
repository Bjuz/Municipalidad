const { roleDisplay } = require("./util");
const { GetFuncionario } = require("./util");


// On window load
window.onload = async function () {
    var userId = localStorage.getItem("userLoggueado");

    var funcionario = await GetFuncionario(userId);

    roleDisplay(funcionario.role);
}

document.getElementById("sendData").onclick = function () {

    var firstDate = document.getElementById("firstDate").value;
    var finishDate = document.getElementById("finishDate").value;
    var motivo = document.getElementById("motivo").value;

    //Ask for confirmation from the user showing the dates formatting them to dd of month formatting month in spanish
    var firstDateFormatted = new Date(firstDate);
    var finishDateFormatted = new Date(finishDate);

    if (!validateDates(firstDate, finishDate, motivo)) {
        return;
    }

    var confirmation = confirm("¿Está seguro que desea solicitar vacaciones desde el " + firstDateFormatted.getDate() + " de " + firstDateFormatted.toLocaleString('es-ES', { month: 'long' }) + " hasta el " + finishDateFormatted.getDate() + " de " + finishDateFormatted.toLocaleString('es-ES', { month: 'long' }) + "?");
    if (!confirmation) {
        return;
    }

    //There is no any database functionality yet, so we just show an alert

    alert("Vacaciones solicitadas con alta prioridad");

}

// Function to validate the dates
function validateDates(firstDate, finishDate, motivo) {
    //Check if the dates are valid
    if (firstDate == "" || finishDate == "") {
        alert("Debe ingresar ambas fechas");
        return false;
    } else if (firstDate > finishDate || firstDate == finishDate) {
        alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin");
        return false;
    } // Check if the first date is greater than the current date
    else if (new Date(firstDate) < new Date()) {
        alert("La fecha de inicio no puede ser menor o igual a la fecha actual");
        return false;
    }
    // Check if the reason is empty
    else if (motivo == "") {
        alert("Debe ingresar un motivo");
        return false;
    }
    return true;
}