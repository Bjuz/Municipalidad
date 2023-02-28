// Receives the data in the form of SolicitarVacaciones.html and store it locally in the browser using vanilla JavaScript

// Get the data from the form
function getFormData() {
    var formData = {
        "firstDate": document.getElementById("fechaInicio").value,
        "lastDate": document.getElementById("fechaFin").value,
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
}



