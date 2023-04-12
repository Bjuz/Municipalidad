// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
// You can change number of the next value and debug see it working
//Remember to run 'npm run build' after changes
const { RetornarCantidadVacaciones } = require("./util");
const { RetornarVacaciones } = require("./util");
const { DeleteVacation } = require("./util");

async function ReloadData(){
  var ref = localStorage.getItem('userLoggueado');
  const Vacations = await RetornarVacaciones(ref); // Retorna la cantidad de vacaciones disponibles
  const CantidadDeVacaciones = await RetornarCantidadVacaciones(ref);
  document.getElementById("DayAvailability").innerHTML = "";
  document.getElementById("DayAvailability").innerHTML = "Sus dias disponibles son : " + CantidadDeVacaciones;

    // If the user has vacations
    document.getElementById("vacationsList").innerHTML = "";
    document.getElementById("vacationsDropdown").innerHTML = "";
    var ul = document.getElementById("vacationsList");

    var select = document.getElementById("vacationsDropdown");

    var li, option, i=0;

    Vacations.forEach(element => { // Navega entre las vacaciones y las muestra
      
      i+=1;
      li = document.createElement("li");
      li.setAttribute("id", "vacation" + i);
      ul.appendChild(li);
      li.appendChild(document.createTextNode("Vacacion "+ i +" : " + "Fecha de inicio = " + element.firstDate + " Fecha finalizacion = " + element.LastDate + " Estado: " + element.Estado)); //inserta las vacaciones 
      if(element.Estado == "Cancelada"){
        return ;
      }
      option = document.createElement("option");
      option.setAttribute("value", element.firstDate + "|" + element.LastDate );
      select.appendChild(option);
      option.innerHTML = i +  ") Fecha de inicio = " + element.firstDate + " Fecha finalizacion = " + element.LastDate;
    });
  


}

window.addEventListener('DOMContentLoaded', async (event) => {
  const result = await ReloadData();
  
})


document.getElementById("cancelButton").onclick = async function () {
  var optionSelected = document.getElementById("vacationsDropdown").value;
  const myArray = optionSelected.split("|");
  console.log(myArray)

  var confirmation = confirm(
    "¿Está seguro que desea cancelar las vacaciones del "+ myArray[0] + " hasta "+ myArray[1]
  );
  if (!confirmation) {
    alert("Las vacaciones no fueron canceladas")
  }
  
  var ref = localStorage.getItem('userLoggueado');
    var result = await DeleteVacation(myArray[0],myArray[1], ref);
    console.log(result) 

  alert(
    result
  );
  const resultado = await ReloadData();
};

