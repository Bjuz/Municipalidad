const { loginComplete } = require("./util");
const { ForgetPassword } = require("./util");
const { UserCurrentState } = require("./util");
const { GetFuncionario } = require("./util");

document.getElementById("Loggin").onclick = function () {
  document.getElementById("loader").style.display = "block";
  loggin();
};
document.getElementById("Forget").onclick = function () {
  PasswordReset();
};

async function loggin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const text = await loginComplete(email, password);
  document.getElementById("loader").style.display = "none";
  if (text != "Correo o contraseña incorrecto.") {
    localStorage.setItem("userLoggueado", text);

    var user = await GetFuncionario(text);
    window.location.href = "../html/Inicio.html";
  } else {
    alert(text);
  }
}

async function PasswordReset() {
  var email = document.getElementById("email").value;
  const text = await ForgetPassword(email);

  alert(text);
}

window.addEventListener("DOMContentLoaded", async (event) => {
  document.getElementById("loader").style.display = "none";
  var result = await UserCurrentState();
  console.log(result);
  fetch("/hello")
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
});
