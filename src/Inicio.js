const { doc } = require("firebase/firestore");
const { GetFuncionario } = require("./util");

// On window load
window.onload = async function () {

    var userId = localStorage.getItem("userLoggueado");

    var funcionario = await GetFuncionario(userId);

    console.log(funcionario);

    if (funcionario.role == "Alcalde" || funcionario.role == "Jefe directo") {
        // Hide the <a> element with id="registerLink"
        document.getElementById("registerLink").style.display = "none";
        document.getElementById("registerLink").style.visibility = "hidden";

        // Hide the <a> element with id="editLink"
        document.getElementById("editLink").style.display = "none";
        document.getElementById("editLink").style.visibility = "hidden";

        // Hide the <a> element with id="deleteLink"
        document.getElementById("deleteLink").style.display = "none";
        document.getElementById("deleteLink").style.visibility = "hidden";

        // Hide the <a> element with id="feriadoLink"
        document.getElementById("feriadoLink").style.display = "none";
        document.getElementById("feriadoLink").style.visibility = "hidden";

    } else if (funcionario.role == "Encargado de recursos humanos") {
        // Do nothing
    } else if (funcionario.role == "Funcionario") {

    } else {
    }
}