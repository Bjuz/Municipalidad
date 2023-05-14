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
import {
  getDocs,
  setDoc,
  updateDoc,
  docSnap,
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

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
  password,
  bosscorreo
) {
  //Inicializa el UPN como empty
  var upn = "empty";
  var result = await Funcionarios(id, email); //obtiene el correo basado en id o email
  if (result != "empty") {// no existe el usuario en auth ni en docs, entonces crear normal
    if(result.Status){ //Existe
      if(result.Status == "Deleted"){//existe pero fue borrado
        upn = result.Ref //guarda el upn del usuario de auth
        const deleteD = await DeleteDocumentCreaded(upn); //borra el documento de la base de datos
      }else{
        return "El usuario ya existe";
      }
    
    }
  }
  if(upn == "empty"){ // si el usuario no existe en auth
    upn = await CreateANewUser(email, password);
  }

  
  if ( upn != "Usuario ya existe") { //doublecheck
    //Crea el doc con el upn y datos del usuario
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
      upn,
      bosscorreo,
    );

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
  upn,
  bosscorreo
) {
  const test2 = await setDoc(doc(db, "users", upn), {
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
    bosscorreo,
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

export async function LoadUsers() {
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

export async function DeleteUserCreaded(ref, Status) {
  const VarResponse = await DeleteUser(ref, Status);
  return VarResponse;
}

export async function DeleteUser(ref,Status) {
  var ref = doc(db, "users", ref);
  var response = await updateDoc(ref, {
    Status,
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

export async function SignOutUser() {
  var result = await signOut(auth)
    .then(() => {
      return "Sign out successful";
    })
    .catch((error) => {
      return "Error " + error.message;
    });
  return result;
}

export async function UserCurrentState() {
  const VarResponse = auth.currentUser;
  if (VarResponse) {
    return "Usuario logueado";
  }
  return VarResponse;
}

export async function CreateANewUser(email, password) {
  var result = await CreateUser(email, password);
  return result;
}

export async function CreateUser(email, password) {

  var result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return "Usuario ya existe";
    });
  return result;
}

export async function ObtenerFuncionariosEmail(UID) {
  const VarResponse = await GetFuncionario(UID);
  return VarResponse;
}



// Comment the code because the btn LoggoutBTn was deleted from the codes in case you need to active again,

// Add Vacation
export async function AddVacation(firstDate, LastDate, ref,Razon) {
  const VarResponse = await addValidVacation(firstDate, LastDate, ref,Razon);
  return VarResponse;
}

export async function addValidVacation(firstDate, LastDate, ref,Razon) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  let fecha1 = new Date(firstDate);
  let fecha2 = new Date(LastDate);
  let diferencia = Restadias(firstDate,LastDate);
  let diasDeDiferencia = diferencia;
  console.log(diasDeDiferencia);
  var Validacion = await RevisarVacaciones(
    firstDate,
    LastDate,
    funcionario,
    diasDeDiferencia
  );
  var accumulatedDays = funcionario.accumulatedDays - diasDeDiferencia - 1;
  if (accumulatedDays < 0) {
    accumulatedDays = 0;
  }
  console.log(Validacion);
  if (Validacion != "Vacaciones solicitadas con éxito") {
    return Validacion;
  }
  let VacacionesActivas = [];
  const VacacionSolicitada = {
    firstDate,
    LastDate,
    Estado: "Esperando la aprobación del jefe directo",
    Razon,
  };

  if (funcionario.VacacionesActivas) {
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

//Emergency vacation

export async function AddVacationEmergency(firstDate, LastDate, ref, Razon) {
  const VarResponse = await addValidVacationEme(firstDate, LastDate, ref,Razon );
  return VarResponse;
}

export async function addValidVacationEme(firstDate, LastDate, ref,Razon) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  let fecha1 = new Date(firstDate);
  let fecha2 = new Date(LastDate);
  let diferencia = Restadias(firstDate,LastDate);
  let diasDeDiferencia = diferencia;
  console.log(diasDeDiferencia);
  var Validacion = await RevisarVacaciones(
    firstDate,
    LastDate,
    funcionario,
    diasDeDiferencia
  );
  var accumulatedDays = funcionario.accumulatedDays - diasDeDiferencia - 1;
  if (accumulatedDays < 0) {
    accumulatedDays = 0;
  }
  console.log(Validacion);
  if (Validacion != "Vacaciones solicitadas con éxito") {
    return Validacion;
  }
  let VacacionesActivas = [];
  const VacacionSolicitada = {
    firstDate,
    LastDate,
    Estado: "Vacacion de Emergencia",
    Razon,

  };

  if (funcionario.VacacionesActivas) {
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
      return "Vacaciones solicitadas con alta urgencia";  
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

//End emergency vacation

export async function VacacionesFuncionario(funcionario) {
  let VacacionesActivas = [];
  if (funcionario.VacacionesActivas) {
    VacacionesActivas = funcionario.VacacionesActivas;
  }
  return VacacionesActivas;
}

export async function RevisarVacaciones(
  firstDate,
  LastDate,
  funcionario,
  diasDeDiferencia
) {
  const VarResponse = await RevisarVacacionesFuncionario(
    firstDate,
    LastDate,
    funcionario,
    diasDeDiferencia
  );
  return VarResponse;
}

export async function RevisarVacacionesFuncionario(
  firstDate,
  LastDate,
  funcionario,
  diasDeDiferencia
) {
  const Varresponse = await VacacionesFuncionario(funcionario);
  var validation;

  console.log(Varresponse);
  if (!funcionario.accumulatedDays >= diasDeDiferencia) {
    return (
      "No tienes suficientes vacaciones, Tienes: " +
      funcionario.accumulatedDays +
      " y quieres solicitar " +
      diasDeDiferencia
    );
  }
  if (!Varresponse) {
    return "Vacaciones solicitadas con éxito";
  }

  Varresponse.forEach((element) => {
    if (
      (element.firstDate == firstDate ||
        (element.firstDate <= firstDate && element.LastDate >= firstDate)) &&
      element.Estado != "Cancelada"
    )
      validation =
        "Las vacaciones estan en un periodo que ya se encuentra como vacacion tomada, del " +
        element.firstDate +
        " hasta " +
        element.LastDate;
  });

  if (!validation) {
    validation = "Vacaciones solicitadas con éxito";
  }
  return validation;
}

export async function RetornarVacaciones(ref) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  const VarResponse = await VacacionesFuncionario(funcionario);
  return VarResponse;
}
export async function RetornarCantidadVacaciones(ref) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  const VarResponse = funcionario.accumulatedDays;
  return VarResponse;
}

//Delete Vacation
export async function DeleteVacation(firstDate, LastDate, ref) {
  const VarResponse = await DeleteValidVacation(firstDate, LastDate, ref);
  return VarResponse;
}

export async function DeleteValidVacation(firstDate, LastDate, ref) {
  var funcionario = await ObtenerFuncionariosEmail(ref);
  let fecha1 = new Date(firstDate);
  let fecha2 = new Date(LastDate);
  let diferencia = fecha2.getTime() - fecha1.getTime();
  let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;

  var accumulatedDays = funcionario.accumulatedDays + diasDeDiferencia + 1;

  //.splice (index, 1);

  let VacacionesActivas = [];
  const VacacionSolicitada = {
    firstDate,
    LastDate,
    Estado: "Cancelada",
  };

  VacacionesActivas = funcionario.VacacionesActivas;
  const indiceElemento = VacacionesActivas.findIndex(
    (el) => el.firstDate == firstDate && el.LastDate == LastDate
  );
  VacacionesActivas.splice(indiceElemento, 1);
  console.log(VacacionesActivas);
  VacacionesActivas.push(VacacionSolicitada);
  console.log(VacacionesActivas);

  var refUser = await doc(db, "users", ref);
  console.log(refUser);
  var response = await updateDoc(refUser, {
    VacacionesActivas,
    accumulatedDays,
  })
    .then(() => {
      console.log("changes");
      return (
        "Las vacaciones desde" +
        firstDate +
        " hasta " +
        LastDate +
        " fueron canceladas con éxito"
      );
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

//End Delete Vacation


export async function UpdateVacation(firstDate, LastDate, ref, estado,razon) {
  const VarResponse = await UpdateValidVacation(firstDate, LastDate, ref,estado,razon);
  return VarResponse;
}

export async function UpdateValidVacation(firstDate, LastDate, ref,estado,razon) {
  var funcionario = await ObtenerFuncionariosUID(ref);

  let diasDeDiferencia = Restadias(firstDate,LastDate);
  let VacacionesActivas = [];
  var VacacionSolicitada
  VacacionesActivas = funcionario.VacacionesActivas;
  const indiceElemento = VacacionesActivas.findIndex(
    (el) => el.firstDate == firstDate && el.LastDate == LastDate
  );
  var accumulatedDays = funcionario.accumulatedDays;
  
  if(estado == "Aprobado"){
    if(VacacionesActivas[indiceElemento].Estado == "Esperando la aprobación del jefe directo"){
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Esperando la aprobación del alcalde",
      };

    }else if(VacacionesActivas[indiceElemento].Estado == "Esperando la aprobación del alcalde"){
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Esperando la revisión de recursos humanos",
      };

    }else{
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Aprobada",
      };
    }
      
    

  }else if(estado == "Rechazado"){
    if(VacacionesActivas[indiceElemento].Estado == "Esperando la aprobación del jefe directo"){
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Rechazada por jefe directo",
      };

    }else if(VacacionesActivas[indiceElemento].Estado == "Esperando la aprobación del alcalde"){
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Rechazada por alcalde",
      };

    }else{
      VacacionSolicitada = {
        firstDate,
        LastDate,
        Estado: "Rechazada por recursos humanos",
      };
    }
    accumulatedDays = accumulatedDays +  diasDeDiferencia + 1;
  }else{
    console.log(indiceElemento);
    VacacionSolicitada = {
      firstDate,
      LastDate,
      Estado: VacacionesActivas[indiceElemento].Estado ,
      razon
    };
  }

  //.splice (index, 1);
    VacacionesActivas.splice(indiceElemento, 1);
    console.log(VacacionesActivas);
    VacacionesActivas.push(VacacionSolicitada);
    console.log(VacacionesActivas);

  console.log(accumulatedDays)
  var refUser = await doc(db, "users", ref);
  console.log(refUser);
  var response = await updateDoc(refUser, {
    VacacionesActivas,
    accumulatedDays
  })
    .then(() => {
      console.log("changes");
      return (
        "Las vacaciones desde" +
        firstDate +
        " hasta " +
        LastDate +
        " fueron procesadas con éxito" + "el estado actual es: " + VacacionSolicitada.Estado
      );
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}


export async function UpdateVacationWithRazon(firstDate, LastDate,firstDateN, LastDateN, ref,razon) {
  const VarResponse = await UpdateValidVacationRaz(firstDate, LastDate,firstDateN, LastDateN, ref,razon);
  return VarResponse;
}


export async function UpdateValidVacationRaz(firstDate, LastDate,firstDateN, LastDateN, ref,razon) {
  var funcionario = await ObtenerFuncionariosUID(ref);
  
  let diasDeDiferencia = Restadias(firstDate,LastDate);
  let diasDeDiferenciaN =  Restadias(firstDateN,LastDateN);
  let VacacionesActivas = [];
  var VacacionSolicitada
  VacacionesActivas = funcionario.VacacionesActivas;
  const indiceElemento = VacacionesActivas.findIndex(
    (el) => el.firstDate == firstDate && el.LastDate == LastDate
  );

  var accumulatedDays = funcionario.accumulatedDays + diasDeDiferencia - diasDeDiferenciaN;

  if(accumulatedDays<0){
    return "El usuario no tiene suficientes dias como para hacer el cambio";
  }
 

    console.log(VacacionesActivas[indiceElemento].Estado);
    VacacionSolicitada = {
      firstDate: firstDateN,
      LastDate: LastDateN,
      Estado: VacacionesActivas[indiceElemento].Estado ,
      razon
    };


  //.splice (index, 1);
    VacacionesActivas.splice(indiceElemento, 1);
    console.log(VacacionesActivas);
    VacacionesActivas.push(VacacionSolicitada);
    console.log(VacacionesActivas);

  console.log(accumulatedDays)
  var refUser = await doc(db, "users", ref);
  console.log(refUser);
  var response = await updateDoc(refUser, {
    VacacionesActivas,
    accumulatedDays
  })
    .then(() => {
      console.log("changes");
      return (
        "Las vacaciones desde" +
        firstDate +
        " hasta " +
        LastDate +
        " fueron procesadas con éxito" + "el estado actual es: " + VacacionSolicitada.Estado
      );
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

//Query to get all the persons who are "funcionario" its not use in the code, is an example for future references
export async function Query(){
  const VarResponse = await QueryResult();
  return VarResponse;
}

export async function QueryResult(){
  const users = [];
  const q = await  query(collection(db, "users"), where("role", "==", "Funcionario"));
  const unsubscribe = await  onSnapshot(q, (querySnapshot) => {
 
  querySnapshot.forEach((doc) => {
    users.push(doc.data().name);
  });
  console.log(users.join(", "));
}); 
return users.join(", ");
}

export function Restadias(dia1 , dia2){
  var unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
  var inicio = new Date(dia1);
  var fin = new Date(dia2);

  var diasTotales = Math.round(Math.abs((inicio - fin) / unDia));
  var diasHabiles = 0;

  for (var i = 0; i <= diasTotales; i++) {
    var fecha = new Date(inicio.getTime() + (i * unDia));
    var diaSemana = fecha.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

    if (diaSemana !== 0 && diaSemana !== 6) {
      diasHabiles++;
    }
  }

  return diasHabiles;
}

export async function IsLoggedIn() {

  const auth = await getAuth();
  console.log(auth)
  const user = auth.currentUser;
  console.log(user)
 
  if (user) {
    return true
  } else {
    return false
  }
}

/*inicio obtener funcionario basado en la UID*/
export async function ObtenerFuncionariosUID(UID) {
  const VarResponse = await GetFuncionario(UID);
  return VarResponse;
}

export async function GetFuncionario(UID) {
  const docRef = doc(db, "users", UID);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No such document!");
    return "No user found";
  }
  return docSnap.data();
}
/* fin obtener funcionario basado en la UID*/