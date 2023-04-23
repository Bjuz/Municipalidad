const { async } = require("@firebase/util");
const { AddVacation } = require("./util");
const { ObtenerFuncionariosEmail } = require("./util");





  

document.getElementById("sendData").onclick = async function () {
    //Get values from the form on SolicitarVacaciones.html
    var firstDate = document.getElementById("firstDate").value;
    var finishDate = document.getElementById("finishDate").value;

    //Check if the dates are valid
    if (firstDate == "" || finishDate == "") {
        alert("Debe ingresar ambas fechas");
        return "Debe ingresar ambas fechas";
    } else if (firstDate > finishDate) {
        alert("La fecha de inicio no puede ser mayor a la fecha de fin");
        return "La fecha de inicio no puede ser mayor a la fecha de fin";
    }
 
    var ref = localStorage.getItem('userLoggueado');
    var result = await AddVacation(firstDate,finishDate, ref);
    var emailCx = await ObtenerFuncionariosEmail(ref);
    var correoDeCx = emailCx.email;
   

    console.log(result)
    if(result == "Vacaciones solicitadas con éxito"){
        
            const email = {
              to: emailCx,
              subject: 'Solicitud de vacaciones',
              text: "Sus vacaciones de la fecha: " + firstDate+ " hasta la fecha: "+ finishDate + " fueron solicitadas con exito y esta a la espera de aprobacion por su jefe directo",
            };
          
            const response = await fetch('http://localhost:3000/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              mode: 'no-cors', // set mode option to 'no-cors'
              body: JSON.stringify(email),
            });
          
            const result = await response.json();
          
            alert(result.message);
          
    }


    // Storage the dates in the local storage
    localStorage.setItem("firstDate", firstDate);
    localStorage.setItem("finishDate", finishDate);

    console.log("firstDate: " + firstDate);
    console.log("finishDate: " + finishDate);

    alert(result);
    document.getElementById("firstDate").value = "";
    document.getElementById("finishDate").value = "";
    return result;
};




