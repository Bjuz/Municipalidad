const { RegisterFeriado } = require("./util");
const { GetFuncionario } = require("./util");
const { roleDisplay } = require("./util");


// On window load
window.onload = async function () {
  var userId = localStorage.getItem("userLoggueado");

  var funcionario = await GetFuncionario(userId);

  roleDisplay(funcionario.role);
}

document.getElementById("sendData").onclick = function () {
  document.getElementById("loader").style.display = "block";
  RegisterHoliday();
};

async function RegisterHoliday() {
  var ancient = document.getElementById("date").value;
  const text = await RegisterFeriado(ancient);

  alert(text);
  document.getElementById("loader").style.display = "none";
}

window.addEventListener("DOMContentLoaded", async (event) => {
  document.getElementById("loader").style.display = "none";
});
