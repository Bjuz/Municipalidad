const { GetFuncionario } = require("./util");

// On window load
window.onload = async function () {

    var userId = localStorage.getItem("userLoggueado");

    var funcionario = await GetFuncionario(userId);

    console.log(funcionario);

    if (funcionario.role == "Alcalde" || funcionario.role == "Jefe directo") {
        // Hide the <a> element with id="registerLink"
        document.getElementById("registerLink").style.display = "none";

    } else if (funcionario.role == "Encargado de recursos humanos") {
        // Do nothing
    } else if (funcionario.role == "Funcionario") {
        
    } else {
    }
}