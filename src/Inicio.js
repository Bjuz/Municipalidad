const { doc } = require("firebase/firestore");
const { GetFuncionario } = require("./util");
const { roleDisplay } = require("./NavBar/Display");

// On window load
document.addEventListener("DOMContentLoaded", async function () {
  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  var nameDiv = document.getElementById("nameDiv");

  //Since this name includes the last name, we split it and only get the first name
  var name = funcionario.name.split(" ");
  var firstName = name[0];

  nameDiv.innerHTML = "Bienvenido/a " + firstName + ", al Sistema de Gestión de Vacaciones.";

  roleDisplay(funcionario.role);
});
