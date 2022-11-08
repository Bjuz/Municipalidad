const { RegisterFeriado } = require('./util');


document.getElementById("sendData").onclick = function () {
  
    RegisterHoliday();

};

async function RegisterHoliday(){
var ancient = document.getElementById("date").value;
  const text =  await RegisterFeriado(ancient);

  alert(text);

  }