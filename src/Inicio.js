const { doc } = require("firebase/firestore");
const { GetFuncionario } = require("./util");
const { roleDisplay } = require("./NavBar/Display");


// On window load
document.addEventListener("DOMContentLoaded", async function () {
    var userId = localStorage.getItem("userLoggueado");

    var funcionario = await GetFuncionario(userId);

    roleDisplay(funcionario.role);
});