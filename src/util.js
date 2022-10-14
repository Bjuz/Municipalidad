// src/index.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDMb4t2EW5NyzYlsN5yI6ueuIrxuKR3EmE",
  authDomain: "municipalidad-ad862.firebaseapp.com",
  projectId: "municipalidad-ad862",
  storageBucket: "municipalidad-ad862.appspot.com",
  messagingSenderId: "430734355108",
  appId: "1:430734355108:web:4b087296a8dd0919225431",
  measurementId: "G-BWDKK1DMRC"
});

const auth = getAuth(firebaseApp);
var id = "empty";

export async function  loginComplete(email,password){
  const login = await LoginFb (email,password);
  return login;

}

export async function  ForgetPassword(email){
  const VarResponse = await Forget (email);
  return VarResponse;

}

export async function Forget(email){
  const test = await sendPasswordResetEmail(auth,email)
  .then(function () {
    return("Se ha enviado un correo para restablecer la contraseña");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage;
  });
  return test;
}

export  async function LoginFb (email,password) {
  var user = "";
  const test = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    user = userCredential.user;
    return "Logueado";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage;
  });

  return test
    
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });




  





