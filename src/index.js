const app = require('./app')

<<<<<<< HEAD
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
=======
app.listen( 4000);
console. log( 'Server is running on port 4000');
>>>>>>> bf60230fb5f261e1f4f913e0c89e521f5c9b1696
