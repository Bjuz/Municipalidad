// The idea here is to first get the whole list of vacations
//and the number of vacations an user has

// Then, dinamically put the number of vacations in this variable
//You can change number of the next value and debug see it working
var numberOfVacations = 3;

// In case there are no vacations, alert shows up
if (numberOfVacations == 0) {
  alert("Este usuario no tiene vacaciones solicitadas actualmente.");
} else {
  var ul = document.getElementById("vacationsList");
  var li;

  for (var i = 1; i <= numberOfVacations; i++) {
    li = document.createElement("li");
    li.setAttribute("id", "vacation" + i);
    ul.appendChild(li);

    // Here, you can add the details of one of the vacations user has
    li.appendChild(document.createTextNode("Vacation" + i));
  }
}
