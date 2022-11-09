const { RegisterUser } = require('./util');


document.getElementById("sendData").onclick = function () {
  
  Register();

};

async function Register(){
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var accumulatedDays = document.getElementById("accumulatedDays").value;
  var ancient = document.getElementById("ancient").value;
  var boss = document.getElementById("boss").value;
  var salary = document.getElementById("salary").value;
  var role = document.getElementById("role").value;

  var entryTime = document.getElementById("entryTime").value;
  var departureTime = document.getElementById("departureTime").value;
  const text =  await RegisterUser(id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime);

  alert(text);

  }