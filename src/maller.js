const app = require('./app');
app.listen(3000)
console.log(`Servidor iniciado en el puerto 3000`);

module.exports  = app;



app.post('/send-email', async (req, res) => {
    try {
      const { to, subject, text } = req.body;
  
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "automaticosemails@gmail.com", // generated ethereal user
          pass: "Invierno2022", // generated ethereal password
        },
      });
  
      let info = await transporter.sendMail({
        from: '"Solicitud de vacaciones" <automaticosemails@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Solicitud de vacaciones", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Sus vacaciones de la fecha: </b>" + firstDate+ " hasta la fecha: "+ finishDate + " fueron solicitadas con exito y esta a la espera de aprobacion por su jefe directo", // html body
     });
      res.status(200).json({ message: 'Correo electrónico enviado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
  });
  
  
  