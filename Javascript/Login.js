const db = firebase.firestore();
//21
const auth = firebase.auth();
var Users = new Array();


function loggin(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log("The user "+ email + " se logeo");
    const user = userCredential.user;
    Users.push({name:email,credencial:user});
    localStorage.setItem('User',JSON.stringify(Users));
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error "+ errorMessage);
  });
}
function signOut(){
    auth.signOut().then(() => {
      console.log("Sign-out successful");
        window.localStorage.clear();
      }).catch((error) => {
        console.log("Error "+ error.message);
      });
}

function aut(){

auth.onAuthStateChanged((user) => {
  if (user) {

    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    console.log("User is signed out");
    // ...
  }
});
}

function OtraP(){
  location.href="AgregarUsuario.html"
}
