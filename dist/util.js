// src/index.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { Firestore, getFirestore, query } from "firebase/firestore";
import { collection, addDoc, deleteDoc } from "firebase/firestore"; 
import { getDocs, updateDoc, doc,docSnap,getDoc } from "firebase/firestore"; 
import { identity } from 'lodash';


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
const db = getFirestore(firebaseApp);

/*Inicio login*/
export async function  loginComplete(email,password){
  const login = await LoginFb (email,password);
  return login;

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
/*Fin login*/

/*Inicio Forget Password*/
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
    const errorMessage = error.message;
    return errorMessage;
  });
  return test;
}

/*Fin Forget Password*/


/*Inicio Registrar*/
export async function  RegisterUser(id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime){
  var result = await Funcionarios(id);
  if( result =="empty"){
    const VarResponse = await Register (id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime);
  return VarResponse;
  }else{
    return "El usuario ya existe";
  }
  

}

export async function Register(id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime){
  const test = await await addDoc(collection(db, "users"), {
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
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
  var ref = doc(db,"users",test.id);
    await updateDoc(
      ref,{
      id,
      name,
      email,
      accumulatedDays,
      ancient,
      boss,
      salary,
      role,
      entryTime,
      departureTime,
      Ref: test.id
    });
  return "Usuario ingresado exitosamente con el id: " + test.id;
}

/*Fin Registrar*/

/*Inicio Feriado*/
export async function  RegisterFeriado(date){

  var result = await ObtFeriados(date);
  if( result =="empty"){
    const VarResponse = await Feriado (date);
    return VarResponse;
  }else{
    return "El Feriado ya existe";
  }

 

}

export async function Feriado(date){
  const test = await addDoc(collection(db, "Feriados"), {
   date
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
  var ref = doc(db,"Feriados",test.id);
  await updateDoc(
      ref,{
      date,
      Ref: test.id
  });
  return "Feriado ingresado exitosamente";
}

/*Fin Feriado*/

/*Inicio Busqueda*/
export async function  ObtenerFuncionarios(id){
  const VarResponse = await Funcionarios (id);
  return VarResponse;

}

export async function Funcionarios(id){
 const data = await LoadDb();
 var Identidad = "empty";
  data.forEach(element => {
    if(element.id == id){
      Identidad =  element;
      console.log(element)
    }
  });
  console.log(Identidad);
  return Identidad;
}

async function LoadDb(){
  const querySnapshot = await getDocs(collection(db, "users"));
  const data = await querySnapshot.docs.map((doc)=>({
    ...doc.data()
    
  }));
  return data;
}

async function LoadFeriado(){
  const querySnapshot = await getDocs(collection(db, "Feriados"));
  const data = await querySnapshot.docs.map((doc)=>({
    ...doc.data()
    
  }));
  return data;
}

export async function  ObtenerFeriados(id){
  const VarResponse = await ObtFeriados (id);
  return VarResponse;

}

export async function ObtFeriados(id){
 const data = await LoadFeriado();
 var Identidad = "empty";
  data.forEach(element => {
    if(element.date == id){
      Identidad =  element;
      console.log(element)
    }
  });
  console.log(Identidad);
  return Identidad;
}


/*Fin Feriado*/



export async function  UpdateUserInfo(ref,id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime){
  console.log(ref);
  if(ref){
    const VarResponse = await UpdateInfo (ref,id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime);
  return VarResponse;

  }else{
    return "usuario no existe"
  }
  
}

export async function UpdateInfo(ref,id,name,email,accumulatedDays,ancient,boss,salary,role,entryTime,departureTime){
  var ref = doc(db,"users",ref);
    var response = await updateDoc(
      ref,{
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
    })
    .then(()=>{

      console.log("changes");
      return "El usuario ha sido actualizado"
    })
    .catch((error)=>{
      console.log(error);
      return "error";
    })
    return response


  };
  

  export async function  DeleteDocumentCreaded(ref){
    const VarResponse = await DeleteDocu(ref);
    return VarResponse;
  
  }
  
  export async function DeleteDocu(ref){
    var resut = await deleteDoc(doc(db,"users",ref)).then(()=>{

      console.log("Deleted");
      return "Deleted"
    })
    .catch((error)=>{
      console.log(error);
      return error;
    })
    return resut;

    };

    export async function  DeleteFeriadoCreaded(ref){
      const VarResponse = await DeleteFer(ref);
      return VarResponse;
    
    }
    
    export async function DeleteFer(ref){
      var result = await deleteDoc(doc(db,"Feriados",ref)).then(()=>{
  
        console.log("Deleted");
        return "Deleted"
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })
      return result;
      };


/* Experimental
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






 
*/



  





