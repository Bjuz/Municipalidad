const db = firebase.firestore();
const auth = firebase.auth();

var id = document.getElementById("id");

window.addEventListener("DOMContentLoaded", (e) => {
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
});

function CreateUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log("Signed in " + userCredential);

      const user = userCredential.user;
      alert("El usuario " + email + " fue creado");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      // ..
    });
}

function aut() {
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
