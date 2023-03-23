const { RegisterFeriado} = require('./util'); //importa ForgetPassword from dist 
const { DeleteFeriadoCreaded} = require('./util'); //importa ForgetPassword from dist  ObtenerFeriados
const { ObtenerFeriados} = require('./util'); //importa ForgetPassword from dist  

//Holiday
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
//End Holiday