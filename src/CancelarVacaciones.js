// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
var numberOfVacations = 3;

// In case there are no vacations, alert shows up
if (numberOfVacations == 0) {
  alert("Este usuario no tiene vacaciones solicitadas actualmente.");
} else {
  // If the user has vacations
  var ul = document.getElementById("vacationsList");
  var select = document.getElementById("vacationsDropdown");
  var li, option;

  for (var i = 1; i <= numberOfVacations; i++) {
    // ul element dinamically written
    li = document.createElement("li");
    li.setAttribute("id", "vacation" + i);
    ul.appendChild(li);
    li.appendChild(document.createTextNode("Vacation" + i));

    // select element dinamically written
    option = document.createElement("option");
    option.setAttribute("id", "vacation" + i);
    select.appendChild(option);
    option.innerHTML = "vacation" + i;
  }
}

document.getElementById("cancelButton").onclick = function () {
  var confirmation = confirm(
    "¿Está seguro que desea cancelar estas vacaciones"
  );
  if (!confirmation) {
    return;
  }
  var optionSelected = document.getElementById("vacationsDropdown").value;

  alert(
    "Ha cancelado sus vacaciones desde " +
      optionSelected +
      " hasta " +
      optionSelected
  );
};
