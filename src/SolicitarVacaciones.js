// Receives the data in the form of SolicitarVacaciones.html and store it locally in the browser using JQuery

$(document).ready(function () {
    $("#vacationForm").submit(function () {
        var formData = {
            "firstDate": $("#fechaInicio").val(),
            "lastDate": $("#fechaFin").val(),
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        console.log(formData);
    });
});


// Receives the data in the form of SolicitarVacaciones.html and store it locally in the browser using vanilla JS
// Get the data from the form
/*function getFormData() {

    var form = document.getElementById("vacationForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    var formData = {
        "firstDate": document.getElementById("fechaInicio").value,
        "lastDate": document.getElementById("fechaFin").value,
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
}*/



