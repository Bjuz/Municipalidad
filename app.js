const express = require( 'express');
const path = require('path');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require('body-parser');
const accountTransport = require("./account_transport.json");

const app = express();

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + 'index.html'); // Serve your HTML file
});

app.get('/EditarFuncionario', (req, res) => {
  res.sendFile(__dirname + '/html/EditarFuncionario.html'); // Serve your HTML file
});

app.get('/EditarVacaciones', (req, res) => {
  res.sendFile(__dirname + '/html/EditarVacaciones.html'); // Serve your HTML file
});

app.get('/EliminarEmpleado', (req, res) => {
  res.sendFile(__dirname + '/html/EliminarEmpleado.html'); // Serve your HTML file
});

app.get('/IngresarFeriado', (req, res) => {
  res.sendFile(__dirname + '/html/IngresarFeriado.html'); // Serve your HTML file
});

app.get('/Inicio', (req, res) => {
  res.sendFile(__dirname + '/html/Inicio.html'); // Serve your HTML file
});

app.get('/ProcesarSolicitud', (req, res) => {
  res.sendFile(__dirname + '/html/ProcesarSolicitud.html'); // Serve your HTML file
});

app.get('/RegistroFuncionario', (req, res) => {
  res.sendFile(__dirname + '/html/RegistroFuncionario.html'); // Serve your HTML file
});

app.get('/SolicitarVacaciones', (req, res) => {
  res.sendFile(__dirname + '/html/SolicitarVacaciones.html'); // Serve your HTML file
});

app.get('/SolicitudEmergencia', (req, res) => {
  res.sendFile(__dirname + '/html/SolicitudEmergencia.html'); // Serve your HTML file
});

app.get('/EliminarEmpleado', (req, res) => {
  res.sendFile(__dirname + '/html/EliminarEmpleado.html'); // Serve your HTML file
});


const EviarEmail = async (callback) => {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    accountTransport.auth.clientId,
    accountTransport.auth.clientSecret,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: accountTransport.auth.refreshToken,
    tls: {
      rejectUnauthorized: false,
    },
  });
  oauth2Client.getAccessToken((err, token) => {
    if (err) return console.log(err);
    accountTransport.auth.accessToken = token;
    callback(nodemailer.createTransport(accountTransport));
  });
};


app.post('/send-email', (req, res) => {

  const firstDate = req.body.firstDate;
  const finishDate = req.body.finishDate;
  const motivo = req.body.motivo;

  const htmlcont = `<html>
  <body>
    <h1>Vacacion Solicitada con exito</h1>
    <p>Detalles:</p>
    <p>Dia de inicio: ${firstDate}</p>
    <p>Dia de finalizacion: ${finishDate}</p>
    <p>Motivo: ${motivo}</p>
  </body>
</html>`;
  console.log(firstDate,finishDate,motivo)
  console.log(req.body)
    EviarEmail(function (emailTransporter) {
        // Send mail
        emailTransporter.sendMail(
          {
            from: "Check <notificacion.santabarbara@gmail.com>",
            to: "CHECK <jeaustin.rdz@gmail.com>",
            subject: "Solicitud de vacacion",
            html: htmlcont,
          },
          (err, info) => {
            if (err) console.log(err);
            else console.log(info);
          }
        );
      });
      
      res.send('Data received successfully');
    
  });

  app.post('/send-email-Process', (req, res) => {

    const firstDate = req.body.firstDate;
    const finishDate = req.body.finishDate;
    const Estado = req.body.Estado;
    const user = req.body.user;
    const htmlcont = `<html>
    <body>
      <h1>Su solicitud fue procesada</h1>
      <p>Detalles:</p>
      <p>Dia de inicio: ${firstDate}</p>
      <p>Dia de finalizacion: ${finishDate}</p>
      <p>Estado: ${Estado}</p>
      
    </body>
  </html>`;
    console.log(firstDate,finishDate)
    console.log(req.body)
      EviarEmail(function (emailTransporter) {
          // Send mail
          emailTransporter.sendMail(
            {
              from: "Check <notificacion.santabarbara@gmail.com>",
              to: user,
              subject: "Su solicitud fue actualizada",
              html: htmlcont,
            },
            (err, info) => {
              if (err) console.log(err);
              else console.log(info);
            }
          );
        });
        
        res.send('Data received successfully');
      
    });
  
