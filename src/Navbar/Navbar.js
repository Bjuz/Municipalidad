const { ObtenerFuncionariosEmail } = require(".././util");

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

window.addEventListener('DOMContentLoaded', async (event) => {
    var email =  localStorage.getItem('userLoggueado');
    var result = await ObtenerFuncionariosEmail(email);
    var name = result.name;
    var role = result.role;
    console.log(name + " " + role);
    console.log(document.getElementById("NombreBar") );
    document.getElementById("NombreBar").innerHTML = name;
    document.getElementById("PuestoBar").innerHTML = role;
  });