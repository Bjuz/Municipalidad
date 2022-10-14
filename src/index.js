
const { loginComplete } = require('./util');
const { ForgetPassword } = require('./util');


document.getElementById("Loggin").onclick = function() {
  loggin();
}
document.getElementById("Forget").onclick = function() {
  PasswordReset();
}

async function loggin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const text =  await loginComplete(email,password);

  alert(text);

  }

  async function PasswordReset(){
    var email = document.getElementById("email").value;
    const text =  await ForgetPassword(email);
  
    alert(text);
  
    }







