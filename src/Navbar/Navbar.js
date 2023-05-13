const { options } = require("jest-junit/utils/getOptions");
const { ObtenerFuncionariosUID } = require(".././util");
const { signOutCurrentUser } = require(".././util");
const { IsLoggedIn } = require(".././util");

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      LogoutBtn =   body.querySelector(".Logout"),
      searchInput = body.querySelector(".search-box input"),
      profile = body.querySelector('.profile'),
      Logout = body.querySelector('.Logout'),
      mode = body.querySelector('.mode'),
      SolicitarVacaciones = document.getElementById("SolicitarVacaciones"),
      DetallesVacaciones = document.getElementById("DetallesVacaciones"),
      EditarVacaciones = document.getElementById("EditarVacaciones"),
      CancelarVacaciones = document.getElementById("CancelarVacaciones"),
      RegistroFuncionario = document.getElementById("RegistroFuncionario"),
      EditarFuncionario = document.getElementById("EditarFuncionario"),
      EliminarFuncionario = document.getElementById("EliminarFuncionario"),
      IngresarDiaFeriado = document.getElementById("IngresarDiaFeriado"),
      SolicitudEmergencia = document.getElementById("SolicitudEmergencia"),
      ProcesarSolicitud = document.getElementById("ProcesarSolicitud"),
      GenerarReporte = document.getElementById("GenerarReporte"),
      Home = document.getElementById("Home");





function Rol(rolFuncionario){
    switch(rolFuncionario){
        case 'Encargado de recursos humanos':
            Home.style.display = "block";
            SolicitarVacaciones.style.display = "block";
            DetallesVacaciones.style.display = "block";
            EditarVacaciones.style.display = "block";
            
            RegistroFuncionario.style.display = "block";
            EditarFuncionario.style.display = "block";
            EliminarFuncionario.style.display = "block";
            IngresarDiaFeriado.style.display = "block";
            SolicitudEmergencia.style.display = "block";
            ProcesarSolicitud.style.display = "block";
           
            console.log('It\'s Encargado de recursos humanos!');
            break; 
            
        case 'Jefe directo':
            Home.style.display = "block";
            SolicitarVacaciones.style.display = "block";
            DetallesVacaciones.style.display = "block";
            EditarVacaciones.style.display = "block";
           
            SolicitudEmergencia.style.display = "block";
            ProcesarSolicitud.style.display = "block";
          
            console.log('It\'s Jefe directo!');
            break;

        case 'Alcalde':
            Home.style.display = "block";
            SolicitarVacaciones.style.display = "block";
            DetallesVacaciones.style.display = "block";
            EditarVacaciones.style.display = "block";
           
            SolicitudEmergencia.style.display = "block";
            console.log('It\'s Alcalde');
            break;

        case 'Funcionario':
            Home.style.display = "block";
            SolicitarVacaciones.style.display = "block";
            DetallesVacaciones.style.display = "block";
            EditarVacaciones.style.display = "block";
           
            SolicitudEmergencia.style.display = "block";
            ProcesarSolicitud.style.display = "block";
            console.log('It\'s Funcionario!');
            break;

        default:
            console.log('It\'s default!');
            break;       
        
    }
}


document.querySelector('.nav__logout').addEventListener("click", async function () {
    console.log("click")
  const text = await signOutCurrentUser();
  if(text == "Sign out successful"){
    alert(text);
    localStorage.clear();
    location.href = "./../index.html";
  }else{
    alert(text);
  }
});

window.addEventListener('DOMContentLoaded', async (event) => {
 
    var UID =  localStorage.getItem('userLoggueado');
    if(UID){
      var result = await ObtenerFuncionariosUID(UID);
      var name = result.name;
      var role = result.role;
      Rol(role);
      console.log(name + " " + role);
      console.log(document.getElementById("NombreBar") );
      /*document.getElementById("NombreBar").innerHTML = name;
      document.getElementById("PuestoBar").innerHTML = role;*/
      var response = await IsLoggedIn();
      if(response == true){
        console.log("true");
        
      }
    }else{
      console.log("false") 
      window.location.href = "../../index.html"

    }
    
  });

  