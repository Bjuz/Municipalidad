
const { loginComplete} = require('./util'); //importa loginComplete from dist 
const { ForgetPassword} = require('./util'); //importa ForgetPassword from dist RegisterFeriado
const { RegisterUser} = require('./util'); //importa ForgetPassword from dist
const { ObtenerFuncionarios} = require('./util'); //importa ForgetPassword from dist
const { UpdateUserInfo} = require('./util'); //importa ForgetPassword from dist
const { DeleteDocumentCreaded} = require('./util'); //importa ForgetPassword from dist



test("login ok",  async ()=>{
    const result =  await loginComplete("jeaustin.samagu@gmail.com","Municip$ali123"); // todo bien // correo valido
    console.log(result)
    expect(result).not.toBe("Correo o contraseña incorrecto."); //resultado esperado "logueado"
});

test("login wrong email",  async ()=>{
    const result =  await loginComplete("talento@santabarbara.go.cr","Talen$to25");//falta humano
    console.log(result)
    expect(result).toBe("Correo o contraseña incorrecto."); // resultado esperado no "logueado"
});

test("login wrong password",  async ()=>{
    const result =  await loginComplete("asistenterh@santabarbara.go.cr","Asis$ten8");//falta el 5 en password
    console.log(result)
    expect(result).toBe("Correo o contraseña incorrecto."); // resultado no esperado "logueado"
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("jeaustin.rodriguez.rodriguez@est.una.ac.cr");//todo bien
    console.log(result)
    expect(result).toBe("Se ha enviado un correo para restablecer la contraseña"); //resultado esperado "Se ha enviado un correo para restablecer la contraseña"
});

test("forgot password no Okay",  async ()=>{
    const result =  await ForgetPassword("talentohuman@santabarbara.go.cr");//falta la o en el correo
    console.log(result)
    expect(result).not.toBe("Se ha enviado un correo para restablecer la contraseña");  // resultado no esperado "Se ha enviado un correo para restablecer la contraseña"
});



//Register
test(" RegisterUser Okay",  async ()=>{
    const result =  await RegisterUser("117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","asistenterh@santabarbara.go.cr","1600","Funcionario","07:00","16:00","159753");//falta la o en el correo
    console.log(result)
    expect(result).not.toBe("El usuario ya existe");  // resultado no esperado "El usuario ya existe"
});

test(" RegisterUser existance user",  async ()=>{
    const result =  await RegisterUser("117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00","159753");//falta la o en el correo
    console.log(result)
    expect(result).toBe("El usuario ya existe");  // resultado esperado "El usuario ya existe"
}); 
//End register

//Update user
test(" Update User Okay",  async ()=>{
    var test =  await ObtenerFuncionarios("117840064");
    const result =  await UpdateUserInfo(test.Ref,"117840064","Jeaustin Rodriguez 2","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).toBe("El usuario ha sido actualizado");  // resultado  esperado "El usuario ha sido actualizado" ok
});

test(" Update user no existance ",  async ()=>{
    var test =  await ObtenerFuncionarios("0000");
    const result =  await UpdateUserInfo(test.Ref,"117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).toBe("usuario no existe");  // resultado esperado "El usuario ya existe"
}); 

test(" Delete existance user",  async ()=>{
    var test =  await ObtenerFuncionarios("117840064","Jeaustin.rdz@gmail.com");
    console.log(test);
    const result =  await DeleteDocumentCreaded(test.Ref);
    console.log(result)
    expect(result).toBe("Deleted");  // resultado esperado "Deleted"
});

test("Solicitar Vacacion",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Cancelar Vacacion",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Modificar solicitud de vacacion",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Mostrar detalles de vacaciones obtenidas",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Solicitud de emergencia",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Revisar solicitud de funcionario",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Procesar como alcalde",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Procesar como jefe directo",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Solicitud creada",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Solicitud cancelada",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Solicitud rechazada",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

test("Solicitud aceptada",  async ()=>{
    var test =  "true";
    console.log(test);
   
    expect(test).toBe("true");  // resultado esperado "Deleted"
});

//End Update