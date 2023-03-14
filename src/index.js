const { loginComplete } = require("./util");
const { ForgetPassword } = require("./util");
const { UserCurrentState } = require("./util"); 


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
}


async function PasswordReset() {
  var email = document.getElementById("email").value;
  const text = await ForgetPassword(email);

  alert(text);
}

window.addEventListener('DOMContentLoaded', async (event) => {
  document.getElementById("loader").style.display = "none";
  var result = await  UserCurrentState();
  console.log(result);
});
