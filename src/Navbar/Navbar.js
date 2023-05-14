const { ObtenerFuncionariosEmail } = require(".././util");
const { signOutCurrentUser } = require(".././util");
const { IsLoggedIn } = require(".././util");




const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    LogoutBtn = body.querySelector(".nav__logout");

LogoutBtn.addEventListener("click", async () => {


    const test = await signOutCurrentUser();
    if (test == "Sign out successful") {
        location.href = "./../index.html";
        storage.clear();
    }
    console.log(text)

})


window.addEventListener('DOMContentLoaded', async (event) => {
 
    var email =  localStorage.getItem('userLoggueado');
    if(email){
      var result = await ObtenerFuncionariosEmail(email);
      var name = result.name;
      var role = result.role;
      console.log(name + " " + role);
      var response = await IsLoggedIn();
      if(response == true){
        console.log("true");
        
      }
    }else{
      console.log("false") 
      window.location.href = "../../index.html"

    }
    
  });

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



