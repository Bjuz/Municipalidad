
document.getElementById("sendData").onclick = function () {

    //Get values from the form on SolicitarVacaciones.html
    var firstDate = document.getElementById("firstDate").value;
    var finishDate = document.getElementById("finishDate").value;

    //Check if the dates are valid
    if (firstDate == "" || finishDate == "") {
        alert("Debe ingresar ambas fechas");
        return;
    } else if (firstDate > finishDate || firstDate == finishDate) {
        alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin");
        return;
    }

    //Ask for confirmation from the user showing the dates formatting them to dd of month formatting month in spanish
    var firstDateFormatted = new Date(firstDate);
    var finishDateFormatted = new Date(finishDate);

    var confirmation = confirm("¿Está seguro que desea solicitar vacaciones desde el " + firstDateFormatted.getDate() + " de " + firstDateFormatted.toLocaleString('es-ES', { month: 'long' }) + " hasta el " + finishDateFormatted.getDate() + " de " + finishDateFormatted.toLocaleString('es-ES', { month: 'long' }) + "?");
    if (!confirmation) {
        return;
    }

    // Storage the dates in the local storage
    localStorage.setItem("firstDate", firstDate);
    localStorage.setItem("finishDate", finishDate);

    console.log("firstDate: " + firstDate);
    console.log("finishDate: " + finishDate);

    alert("Vacaciones solicitadas con éxito");
};




