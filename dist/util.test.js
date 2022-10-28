
const { loginComplete} = require('./util');
const { ForgetPassword} = require('./util');

test("login ok",  async ()=>{
    const result =  await loginComplete("ti@santabarbara.go.cr","Municip$ali123"); // todo bien // correo valido
    console.log(result)
    expect(result).toBe("Logueado");
});

test("login wrong email",  async ()=>{
    const result =  await loginComplete("talento@santabarbara.go.cr","Talen$to25");//falta humano
    console.log(result)
    expect(result).not.toBe("Logueado");
});

test("login wrong password",  async ()=>{
    const result =  await loginComplete("asistenterh@santabarbara.go.cr","Asis$ten8");//falta el 5 en password
    console.log(result)
    expect(result).not.toBe("Logueado");
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("asistenterh@santabarbara.go.cr");//todo bien
    console.log(result)
    expect(result).toBe("Se ha enviado un correo para restablecer la contraseña");
});

test("forgot password no Okay",  async ()=>{
    const result =  await ForgetPassword("talentohuman@santabarbara.go.cr");//falta la o en el correo
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/user-not-found).");  
});