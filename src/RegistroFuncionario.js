//const { RegisterUser } = require('./util');
//const { ForgetPassword } = require("./util");
//const { CreateANewUser } = require("./util");


//document.getElementById("sendData").onclick = function () {
 //// document.getElementById("loader").style.display = "block";
  //Register();

//};

function generateP() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (var i = 1; i <= 15; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(char)
  }
    
  return pass;
}

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

  if(!id || !name||!email||!accumulatedDays||!ancient||!boss||!salary||!role||!entryTime||!departureTime){
    alert("Favor agregar todos los campos");
  }else{
    const text =  await RegisterUser(id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime,generateP());
    //const text =  await RegisterUser(id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime,generateP());
    var resultCreate;
    var resultForget;
    if(text == "Usuario ingresado exitosamente"){
      resultForget = await ForgetPassword(email);
    }
  
    alert(resultForget);
    var id = document.getElementById("id").value = "";
    var name = document.getElementById("name").value = "";
    var email = document.getElementById("email").value = "";
    var accumulatedDays = document.getElementById("accumulatedDays").value = "";
    var ancient = document.getElementById("ancient").value = "";
    var boss = document.getElementById("boss").value = "";
    var salary = document.getElementById("salary").value = "";
    var role = document.getElementById("role").value = "";

  }
 // document.getElementById("loader").style.display = "none";

 
  }

  //window.addEventListener('DOMContentLoaded', async (event) => {
   //document.getElementById("loader").style.display = "none";
  
 // });