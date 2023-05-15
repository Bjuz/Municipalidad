
const { ObtenerFuncionarios } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");
const { DeleteUserCreaded } = require("./util");




// On window load
window.onload = async function () {
  var userId = localStorage.getItem("userLoggueado");
  var funcionario = await GetFuncionario(userId);
  roleDisplay(funcionario.role);
}

document.getElementById("Search").onclick = async function () {
  console.log("Seach")
  //document.getElementById("loader").style.display = "block";
  let test = await loadInfo();
  if (test != "empty") {
    document.getElementById("id").value = test.id;
    document.getElementById("name").value = test.name;
    document.getElementById("email").value = test.email;
    document.getElementById("bosscorreo").value = test.bosscorreo;

    const text = test.role;
  } else {
    alert("usuario no encontrado")
  }
  // document.getElementById("loader").style.display = "none";
};

async function loadInfo() {
  var id = document.getElementById("idlook").value;
  var test = await ObtenerFuncionarios(id, "empty");
  if(test){
    if(test.Status == "Deleted"){
      alert("El usuario que esta buscando se encuentra borrado, en caso de querer restaurarlo favor usar el boton de restaurar");
      document.getElementById("sendDataDelete").value = "Restaurar"
      document.getElementById("sendDataDelete").innerText = "Restaurar"
    }else{
      document.getElementById("sendDataDelete").value = "Eliminar"
      document.getElementById("sendDataDelete").innerText = "Eliminar"
    }
  }
  return test;
}



document.getElementById("sendDataDelete").onclick = async function () {

  var id = document.getElementById("id").value;
  var email = document.getElementById("email").value;
  var test = await ObtenerFuncionarios(id, email);
  if( document.getElementById("sendDataDelete").value == "Restaurar"){
    var deleteUser = await DeleteUserCreaded(test.Ref, "Restaurar");
  }else{
    var deleteUser = await DeleteUserCreaded(test.Ref, "Deleted");
    
  }
  document.getElementById("sendDataDelete").value = "Eliminar"
  document.getElementById("sendDataDelete").innerText = "Eliminar"
  alert(deleteUser)


  document.getElementById("idlook").value = "";
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("accumulatedDays").value = "";
  document.getElementById("ancient").value = "";
  document.getElementById("boss").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("role").value = "";
  document.getElementById("entryTime").value = "00:00";
  document.getElementById("departureTime").value = "00:00";
};



