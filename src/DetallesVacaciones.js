
//Dumb way to do it
var VacationList = ["vacation1", "vacation2", "vacation3", "vacation4"];

var li = document.querySelector("li");
li.textContent = VacationList.at(0);

for (var i = 1; i < VacationList.length; i++) {
    var j = i + 1;
    document.querySelector("li:nth-child(" + j + ")").textContent = VacationList.at(i);
    j++;
}

//Calls the list of vacations from Firebase
function getVacations() {
  //var ref = firebase.database().ref("Vacations");
  //ref.on("value", gotData, errData);
}






