
const { loginComplete} = require('./util');
const { ForgetPassword} = require('./util');

test("login ok",  async ()=>{
    const result =  await loginComplete("test@gmail.com","123456789");
    console.log(result)
    expect(result).toBe("Logueado");
});

test("login wrong email",  async ()=>{
    const result =  await loginComplete("tes@gmail.com","123456789");
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/user-not-found).");
});

test("login wrong password",  async ()=>{
    const result =  await loginComplete("test@gmail.com","12345678");
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/wrong-password).");
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("test@gmail.com");
    console.log(result)
    expect(result).toBe("Se ha enviado un correo para restablecer la contraseña");
});

test("forgot password Okay",  async ()=>{
    const result =  await ForgetPassword("tes@gmail.com");
    console.log(result)
    expect(result).toBe("Firebase: Error (auth/user-not-found).");
});