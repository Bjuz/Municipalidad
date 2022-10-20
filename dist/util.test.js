
const { loginComplete} = require('./util');
const { ForgetPassword} = require('./util');

test("login ok",  async ()=>{
    const result =  await loginComplete("ti@santabarbara.go.cr","Municip$ali123"); // todo bien // correo valido
    console.log(result)
    expect(result).toBe("Logueado");
});

test("login wrong email",  async ()=>{
    const result =  await loginComplete("talento@santabarbara.go.cr","Talen$to25");//falt la t
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/user-not-found).");
});

test("login wrong password",  async ()=>{
    const result =  await loginComplete("asistenterh@santabarbara.go.cr","Asis$ten8");//falta el 9 en password
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/wrong-password).");
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("asistenterh@santabarbara.go.cr");//todo bien 2
    console.log(result)
    expect(result).toBe("Se ha enviado un correo para restablecer la contraseña");
});

test("forgot password no Okay",  async ()=>{
    const result =  await ForgetPassword("talentohuman@santabarbara.go.cr");//falta la t
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/user-not-found).");
});