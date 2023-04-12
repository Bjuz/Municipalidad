// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
const { RetornarVacaciones } = require("./util");
const { RetornarCantidadVacaciones } = require("./util");


window.addEventListener('DOMContentLoaded', async (event) => {
  var ul = document.getElementById("vacationsList");
  var li;
  document.getElementById("loader").style.display = "block";
  var ref = localStorage.getItem('userLoggueado');
  const Vacations = await RetornarVacaciones(ref); // Retorna la cantidad de vacaciones disponibles
  const CantidadDeVacaciones = await RetornarCantidadVacaciones(ref); // Retorna la lista de vacaciones
  console.log(Vacations)
  if (Vacations.length == 0) { //Valida el caso de que no tenga vacaciones
    alert("Este usuario no tiene vacaciones solicitadas actualmente.");
    li = document.createElement("li");
      li.setAttribute("id", "vacation" + i);
      ul.appendChild(li);
      li.appendChild(document.createTextNode("Este usuario no tiene vacaciones solicitadas actualmente. \n Cantidad de vacaciones actuales: " + CantidadDeVacaciones));
  }else{//caso de que si tenga
    var i = 0
    li = document.createElement("li");
      li.setAttribute("id", "vacation" + i);
      ul.appendChild(li);
      li.appendChild(document.createTextNode(" Cantidad de vacaciones actuales: " + CantidadDeVacaciones)); //Muestra la cantidad de dias acumulados
    Vacations.forEach(element => { // Navega entre las vacaciones y las muestra
      i+=1;
      li = document.createElement("li");
      li.setAttribute("id", "vacation" + i);
      ul.appendChild(li);
      li.appendChild(document.createTextNode("Vacacion "+ i +" : " + "Fecha de inicio = " + element.firstDate + " Fecha finalizacion = " + element.LastDate)); //inserta las vacaciones 
    });
  }
 
  document.getElementById("loader").style.display = "none";
});


