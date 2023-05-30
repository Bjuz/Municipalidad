const { RegisterFeriado } = require("./util");
const { GetFuncionario } = require("./util");
const { roleDisplay } = require("./NavBar/Display");

// On windows load
window.addEventListener("DOMContentLoaded", async (event) => {
  var userId = localStorage.getItem("userLoggueado");
  var funcionario = await GetFuncionario(userId);
  roleDisplay(funcionario.role);
});

document.getElementById("sendData").onclick = function () {
  RegisterHoliday();
};

async function RegisterHoliday() {
  var ancient = document.getElementById("date").value;
  const text = await RegisterFeriado(ancient);

  alert(text);
}
