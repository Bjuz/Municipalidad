const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const accountTransport = require("./account_transport.json");

const app = express();

app.use(express.static(__dirname)); // Serve static files from the current directory
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'Media')));
app.use(express.static(path.join(__dirname, 'Style')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "index.html"); // Serve your HTML file
});

app.get("/EditarFuncionario", (req, res) => {
  res.sendFile(__dirname + "/html/EditarFuncionario.html"); // Serve your HTML file
});

app.get("/EditarVacaciones", (req, res) => {
  res.sendFile(__dirname + "/html/EditarVacaciones.html"); // Serve your HTML file
});

app.get("/EliminarEmpleado", (req, res) => {
  res.sendFile(__dirname + "/html/EliminarEmpleado.html"); // Serve your HTML file
});

app.get("/IngresarFeriado", (req, res) => {
  res.sendFile(__dirname + "/html/IngresarFeriado.html"); // Serve your HTML file
});

app.get("/Inicio", (req, res) => {
  res.sendFile(__dirname + "/html/Inicio.html"); // Serve your HTML file
});

app.get("/ProcesarSolicitud", (req, res) => {
  res.sendFile(__dirname + "/html/ProcesarSolicitud.html"); // Serve your HTML file
});

app.get("/RegistroFuncionario", (req, res) => {
  res.sendFile(__dirname + "/html/RegistroFuncionario.html"); // Serve your HTML file
});

app.get("/SolicitarVacaciones", (req, res) => {
  res.sendFile(__dirname + "/html/SolicitarVacaciones.html"); // Serve your HTML file
});

app.get("/SolicitudEmergencia", (req, res) => {
  res.sendFile(__dirname + "/html/SolicitudEmergencia.html"); // Serve your HTML file
});

app.get("/EliminarEmpleado", (req, res) => {
  res.sendFile(__dirname + "/html/EliminarEmpleado.html"); // Serve your HTML file
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

app.post("/send-email", (req, res) => {
  const firstDate = req.body.firstDate;
  const finishDate = req.body.finishDate;
  const motivo = req.body.motivo;

  const htmlcont = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Confirmación de Vacaciones</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              color: #333333;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
          }
          .header {
              background-color: #f2f2f2;
              padding: 20px;
              text-align: center;
          }
          .content {
              padding: 20px;
          }
          .footer {
              background-color: #f2f2f2;
              padding: 20px;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Confirmación de Vacaciones</h1>
          </div>
          <div class="content">
              <p>Estimado/a funcionario,<!--Aquí se puede ingresar nombre del funcionario--></p>
              <p>Nos complace confirmar su próxima reserva de vacaciones.</p>
              <p><strong>Detalles de la Reserva:</strong></p>
              <ul>
                <li><strong>Fecha de inicio:</strong>${firstDate} <!--Aquí se puede ingresar fecha inicio--> </li>
                <li><strong>Fecha final:</strong>${finishDate} <!--Aquí se puede ingresar fecha final--> </li>
                <li><strong>Motivo :</strong>${motivo} <!--Aquí se puede ingresar fecha inicio--> </li>
              </ul>
              <p>¡Disfrute sus vacaciones!</p>
          </div>
          <div class="footer">
              <p>Este es un correo electrónico automatizado. Por favor, no responda.</p>
          </div>
      </div>
  </body>
  </html>
  `;
  console.log(firstDate, finishDate, motivo);
  console.log(req.body);
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

  res.send("Data received successfully");
});

app.post("/send-email-Process", (req, res) => {
  const firstDate = req.body.firstDate;
  const finishDate = req.body.finishDate;
  const Estado = req.body.Estado;
  const user = req.body.user;
  const htmlcont = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Confirmación de Vacaciones</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333333;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
            .header {
                background-color: #f2f2f2;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 20px;
            }
            .footer {
                background-color: #f2f2f2;
                padding: 20px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Confirmación de Vacaciones</h1>
            </div>
            <div class="content">
                <p>Estimado/a funcionario,<!--Aquí se puede ingresar nombre del funcionario--></p>
                <p>Su estado de vacaciones ha sido actualizado.</p>
                <p><strong>Detalles de la Reserva:</strong></p>
                <ul>
                    <li><strong>Fecha de inicio:</strong>${firstDate} <!--Aquí se puede ingresar fecha inicio--> </li>
                    <li><strong>Fecha final:</strong>${finishDate} <!--Aquí se puede ingresar fecha final--> </li>
                    <li><strong>Estado:</strong>${Estado} <!--Aquí se puede ingresar fecha inicio--> </li>
                </ul>
                <p>¡Disfrute sus vacaciones!</p>
            </div>
            <div class="footer">
                <p>Este es un correo electrónico automatizado. Por favor, no responda.</p>
            </div>
        </div>
    </body>
    </html>
    `;
  console.log(firstDate, finishDate);
  console.log(req.body);
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

  res.send("Data received successfully");
});
