// src/index.js

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { addDoc, deleteDoc } from "firebase/firestore";
import { getDocs,setDoc , updateDoc, docSnap, doc, getDoc,  collection, query, where } from "firebase/firestore";
import { identity } from "lodash";

// TODO: Add SDKs for Firebase products that you want to usec
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
  measurementId: "G-BWDKK1DMRC",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

/*Inicio login*/
export async function loginComplete(email, password) {
  const login = await LoginFb(email, password);
  return login;
}

export async function LoginFb(email, password) {
  const test = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user.uid;
    })
    .catch((error) => {
      console.log(error);
      return "Correo o contraseña incorrecto.";
    });

  return test;
}


/*Fin login*/

/*Inicio Forget Password*/
export async function ForgetPassword(email) {
  const VarResponse = await Forget(email);
  return VarResponse;
}

export async function Forget(email) {
  const test = await sendPasswordResetEmail(auth, email)
    .then(function () {
      return "Se ha enviado un correo para restablecer la contraseña";
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
export async function RegisterUser(
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
  password
) {
  var result = await Funcionarios(id,email);
  if (result == "empty") {  
    const VarResponse = await Register(
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
      id
    );
    var upn = await CreateANewUser(email,password);
    return VarResponse;
  } else {
    return "El usuario ya existe";
  }
}

export async function Register(
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
  upn
) {
  const test2 =  await setDoc(doc(db, "users", upn), {
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
    Ref: upn,
  });
  return "Usuario ingresado exitosamente";
}

/*Fin Registrar*/

/*Inicio Feriado*/
export async function RegisterFeriado(date) {
  var result = await ObtFeriados(date);
  if (result == "empty") {
    const VarResponse = await Feriado(date);
    return VarResponse;
  } else {
    return "El Feriado ya existe";
  }
}

export async function Feriado(date) {
  const test = await addDoc(collection(db, "Feriados"), {
    date,
  }).catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
  var ref = doc(db, "Feriados", test.id);
  await updateDoc(ref, {
    date,
    Ref: test.id,
  });
  return "Feriado ingresado exitosamente";
}

/*Fin Feriado*/

/*Inicio Busqueda*/
export async function ObtenerFuncionarios(id, email) {
  const VarResponse = await Funcionarios(id, email);
  return VarResponse;
}

export async function Funcionarios(id, email) {
  const data = await LoadDb();
  var Identidad = "empty";
  data.forEach((element) => {
    if (element.id == id || element.email == email) {
      Identidad = element;
      console.log(element);
    }
  });
  console.log(Identidad);
  return Identidad;
}

async function LoadDb() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data;
}

async function LoadFeriado() {
  const querySnapshot = await getDocs(collection(db, "Feriados"));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data;
}

export async function ObtenerFeriados(id) {
  const VarResponse = await ObtFeriados(id);
  return VarResponse;
}

export async function ObtFeriados(id) {
  const data = await LoadFeriado();
  var Identidad = "empty";
  data.forEach((element) => {
    if (element.date == id) {
      Identidad = element;
      console.log(element);
    }
  });
  console.log(Identidad);
  return Identidad;
}

/*Fin Feriado*/

export async function UpdateUserInfo(
  ref,
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
) {
  console.log(ref);
  if (ref) {
    const VarResponse = await UpdateInfo(
      ref,
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
    return VarResponse;
  } else {
    return "usuario no existe";
  }
}

export async function UpdateInfo(
  ref,
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
) {
  var ref = doc(db, "users", ref);
  console.log(ref);
  var response = await updateDoc(ref, {
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
  })
    .then(() => {
      console.log("changes");
      return "El usuario ha sido actualizado";
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

export async function DeleteDocumentCreaded(ref) {
  const VarResponse = await DeleteDocu(ref);
  return VarResponse;
}

export async function DeleteDocu(ref) {
  console.log(ref);
  var VarResponse = await DeleteUserCreaded(ref);
  return VarResponse;/*
  var test = await deleteUser(ref).then(async () => {
   
    //
  }).catch((error) => {
    console.log(error);
    return error;
  });
  return test;*/
}

export async function DeleteUserCreaded(ref) {
  const VarResponse = await DeleteUser(ref);
  return VarResponse;
}

export async function DeleteUser(ref){
  var resut = await deleteDoc(doc(db, "users", ref))
    .then(() => {
      console.log("Deleted");
      return "Deleted";
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
    return resut;
}



export async function DeleteFeriadoCreaded(ref) {
  const VarResponse = await DeleteFer(ref);
  return VarResponse;
}

export async function DeleteFer(ref) {
  var result = await deleteDoc(doc(db, "Feriados", ref))
    .then(() => {
      console.log("Deleted");
      return "Deleted";
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return result;
}


export async function signOutCurrentUser() {
  var result = await SignOutUser();
  return result;
}

export async function SignOutUser(){
  var result = await signOut(auth)
    .then(() => {
      return "Sign out successful"
    })
    .catch((error) => {
      return "Error " + error.message ;
    });
    return result;
}

export async function UserCurrentState(){
  const VarResponse = auth.currentUser;
  if(VarResponse){
    return "Usuario logueado";
  }
  return VarResponse;
}


export async function CreateANewUser(email, password){
  var result = await CreateUser(email, password);
    return result;
}

export async function CreateUser(email,password){
  var result = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   return userCredential.user.uid
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage;
  });
  return result;
}


export async function ObtenerFuncionariosEmail(UID) {
  const VarResponse = await GetFuncionario(UID);
  return VarResponse;
}

export async function GetFuncionario(UID) {
  const docRef = doc(db, "users", UID);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No such document!");
    return "No user found"
  } 
  return docSnap.data();

}

// Comment the code because the btn LoggoutBTn was deleted from the codes in case you need to active again,



// Add Vacation
export async function AddVacation(firstDate,LastDate,ref) {
    const VarResponse = await addValidVacation(firstDate,LastDate,ref);
    return VarResponse;
}

export async function addValidVacation(firstDate,LastDate,ref) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  let fecha1 = new Date(firstDate);
  let fecha2 = new Date(LastDate);
  let diferencia = fecha2.getTime() - fecha1.getTime();
  let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
  console.log(diasDeDiferencia)
  var Validacion = await RevisarVacaciones(firstDate,LastDate,funcionario,diasDeDiferencia);
  var accumulatedDays = funcionario.accumulatedDays - diasDeDiferencia;
  console.log(Validacion);
  if(Validacion != "Vacaciones solicitadas con éxito"){
    return Validacion;
  }
  let VacacionesActivas = [];
  const VacacionSolicitada = {
    firstDate,
    LastDate
  }

  if(funcionario.VacacionesActivas){
    VacacionesActivas = funcionario.VacacionesActivas;
  }
  VacacionesActivas.push(VacacionSolicitada);

  var refUser = await doc(db, "users", ref);
  console.log(refUser);
  var response = await updateDoc(refUser, {
    VacacionesActivas,
    accumulatedDays,
  })
    .then(() => {
      console.log("changes");
      return "Vacaciones solicitadas con éxito";
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

export async function RevisarVacaciones(firstDate,LastDate,funcionario,diasDeDiferencia){
  const VarResponse = await RevisarVacacionesFuncionario(firstDate,LastDate,funcionario,diasDeDiferencia);
  return VarResponse;
}

export async function VacacionesFuncionario(funcionario){
  
  let VacacionesActivas = [];
  if(funcionario.VacacionesActivas){
    VacacionesActivas = funcionario.VacacionesActivas;
  }
  return VacacionesActivas;
}

export async function RevisarVacacionesFuncionario(firstDate,LastDate,funcionario,diasDeDiferencia){
  const Varresponse = await  VacacionesFuncionario(funcionario);
  var validation;
  
  console.log(Varresponse);
  if(!funcionario.accumulatedDays >= diasDeDiferencia){
    return "No tienes suficientes vacaciones, Tienes: "+ funcionario.accumulatedDays + " y quieres solicitar "+ diasDeDiferencia;
  }
  if(!Varresponse){
    return "Vacaciones solicitadas con éxito";
  }
 

  Varresponse.forEach(element =>{
    if(element.firstDate == firstDate || ((element.firstDate <= firstDate) && (element.LastDate >= firstDate)) )
    validation =  "Las vacaciones estan en un periodo que ya se encuentra como vacacion tomada, del "+ element.firstDate + " hasta "+ element.LastDate;
  })

  if(!validation){
    validation =  "Vacaciones solicitadas con éxito";
  }
  return validation;
}


export async function RetornarVacaciones(ref){
  var funcionario = await ObtenerFuncionariosEmail(ref);
  const VarResponse = await VacacionesFuncionario(funcionario);
  return VarResponse;
}
export async function RetornarCantidadVacaciones(ref){
  var funcionario = await ObtenerFuncionariosEmail(ref);
  const VarResponse = funcionario.accumulatedDays
  return VarResponse;
}
