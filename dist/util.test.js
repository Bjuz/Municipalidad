
const { loginComplete} = require('./util'); //importa loginComplete from dist 
const { ForgetPassword} = require('./util'); //importa ForgetPassword from dist RegisterFeriado
const { RegisterUser} = require('./util'); //importa ForgetPassword from dist
const { RegisterFeriado} = require('./util'); //importa ForgetPassword from dist 
const { DeleteFeriadoCreaded} = require('./util'); //importa ForgetPassword from dist  ObtenerFeriados
const { ObtenerFeriados} = require('./util'); //importa ForgetPassword from dist  
const { ObtenerFuncionarios} = require('./util'); //importa ForgetPassword from dist
const { UpdateUserInfo} = require('./util'); //importa ForgetPassword from dist 
const { DeleteDocumentCreaded} = require('./util'); //importa ForgetPassword from dist 

test("login ok",  async ()=>{
    const result =  await loginComplete("ti@santabarbara.go.cr","Municip$ali123"); // todo bien // correo valido
    console.log(result)
    expect(result).toBe("Logueado"); //resultado esperado "logueado"
});

test("login wrong email",  async ()=>{
    const result =  await loginComplete("talento@santabarbara.go.cr","Talen$to25");//falta humano
    console.log(result)
    expect(result).not.toBe("Logueado"); // resultado esperado no "logueado"
});

test("login wrong password",  async ()=>{
    const result =  await loginComplete("asistenterh@santabarbara.go.cr","Asis$ten8");//falta el 5 en password
    console.log(result)
    expect(result).not.toBe("Logueado"); // resultado no esperado "logueado"
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("ti@santabarbara.go.cr");//todo bien
    console.log(result)
    expect(result).toBe("Se ha enviado un correo para restablecer la contraseña"); //resultado esperado "Se ha enviado un correo para restablecer la contraseña"
});

test("forgot password no Okay",  async ()=>{
    const result =  await ForgetPassword("talentohuman@santabarbara.go.cr");//falta la o en el correo
    console.log(result)
    expect(result).not.toBe("Se ha enviado un correo para restablecer la contraseña");  // resultado no esperado "Se ha enviado un correo para restablecer la contraseña"
});

test(" RegisterUser Okay",  async ()=>{
    const result =  await RegisterUser("117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).not.toBe("El usuario ya existe");  // resultado no esperado "El usuario ya existe"
});

test(" RegisterUser existance user",  async ()=>{
    const result =  await RegisterUser("117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).toBe("El usuario ya existe");  // resultado esperado "El usuario ya existe"
}); 

test(" Update User Okay",  async ()=>{
    var test =  await ObtenerFuncionarios("117840064");
    const result =  await UpdateUserInfo(test.Ref,"117840064","Jeaustin Rodriguez 2","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).toBe("El usuario ha sido actualizado");  // resultado  esperado "El usuario ha sido actualizado"
});

test(" Update user no existance ",  async ()=>{
    var test =  await ObtenerFuncionarios("0000");
    const result =  await UpdateUserInfo(test.Ref,"117840064","Jeaustin Rodriguez","Jeaustin.rdz@gmail.com","2","2","Henry","1600","Funcionario","07:00","16:00");//falta la o en el correo
    console.log(result)
    expect(result).toBe("usuario no existe");  // resultado esperado "El usuario ya existe"
}); 


test(" Delete existance user",  async ()=>{
    var test =  await ObtenerFuncionarios("117840064");

    const result =  await DeleteDocumentCreaded(test.Ref);
    console.log(result)
    expect(result).toBe("Deleted");  // resultado esperado "Deleted"
});


test(" Register Holiday Okay",  async ()=>{
    const result =  await RegisterFeriado("2022-11-01");//falta la o en el correo
    console.log(result)
    expect(result).not.toBe("El Feriado ya existe");  // resultado no esperado "El usuario ya existe"
});

test(" Register Holiday existance user",  async ()=>{
    const result =  await RegisterFeriado("2022-11-01");//falta la o en el correo
    console.log(result)
    expect(result).toBe("El Feriado ya existe");  // resultado esperado "El usuario ya existe"
});

test(" Delete existance Holiday",  async ()=>{
    var test =  await ObtenerFeriados("2022-11-01");


    const result =  await DeleteFeriadoCreaded(test.Ref);
    console.log(result)
    expect(result).toBe("Deleted");  // resultado esperado "Deleted"
});
