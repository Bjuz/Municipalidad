
const { loginComplete} = require('./util');
const { ForgetPassword} = require('./util');

test("login ok",  async ()=>{
    const text2 =  await loginComplete("test@gmail.com","123456789");
    console.log(text2)
    expect(text2).toBe("Logueado");
});

test("login wrong email",  async ()=>{
    const text2 =  await loginComplete("tes@gmail.com","123456789");
    console.log(text2)
    expect(text2).toBe("Firebase: Error (auth/user-not-found).");
});

test("login wrong password",  async ()=>{
    const text2 =  await loginComplete("test@gmail.com","12345678");
    console.log(text2)
    expect(text2).toBe("Firebase: Error (auth/wrong-password).");
});

test("forgot password Okay",  async ()=>{
    const text2 =  await ForgetPassword("test@gmail.com");
    console.log(text2)
    expect(text2).toBe("Se ha enviado un correo para restablecer la contraseña");
});

test("forgot password Okay",  async ()=>{
    const text2 =  await ForgetPassword("tes@gmail.com");
    console.log(text2)
    expect(text2).toBe("Firebase: Error (auth/user-not-found).");
});