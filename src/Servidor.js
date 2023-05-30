const express = require("express");
const { sendEmail } = require("./maller");

const app = express();

// Ruta para enviar correos electrónicos
app.post("/enviar-correo", (req, res) => {
  const { destinatario, asunto, cuerpo } = req.body;

  // Envía el correo electrónico utilizando la función sendMail
  sendMail(destinatario, asunto, cuerpo);

  // Envía una respuesta al frontend indicando que el correo electrónico fue enviado
  res.send("Correo electrónico enviado con éxito");
});

// Inicia el servidor
app.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
