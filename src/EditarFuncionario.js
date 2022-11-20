const { method } = require("lodash");
const { ObtenerFuncionarios, signOut } = require("./util");
const { UpdateUserInfo } = require("./util");

document.getElementById("Search").onclick = async function () {
  let test = await loadInfo();
  document.getElementById("id").value = test.id;
  document.getElementById("name").value = test.name;
  document.getElementById("email").value = test.email;
  document.getElementById("accumulatedDays").value = test.accumulatedDays;
  document.getElementById("ancient").value = test.ancient;
  document.getElementById("boss").value = test.boss;
  document.getElementById("salary").value = test.salary;
  document.getElementById("entryTime").value = test.entryTime;
  document.getElementById("departureTime").value = test.departureTime;

  const text = test.role;
  const $select = document.getElementById("role");
  const $options = Array.from($select.options);
  const optionToSelect = $options.find((item) => item.text === text);
  optionToSelect.selected = true;
};

async function loadInfo() {
  var id = document.getElementById("idlook").value;
  var test = await ObtenerFuncionarios(id);
  return test;
}

document.getElementById("sendData").onclick = function () {
  alert("Send Data")
  UpdateUser();
};

document.getElementById("loggoutBtn").addEventListener('click', function() {

  //const text = signOut();
  location.href= './../index.html';

});



async function UpdateUser() {
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
  var test = await ObtenerFuncionarios(id);

  const text = await UpdateUserInfo(
    test.Ref,
    id,
    name,
    email,
    accumulatedDays,
    ancient,
    boss,
    salary,
    role,
    entryTime,
    departureTime
  );
  alert(text);
  return text;
}
