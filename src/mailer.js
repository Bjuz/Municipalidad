const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const accountTransport = require("./account_transport.json");

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

EviarEmail(function (emailTransporter) {
  // Send mail
  emailTransporter.sendMail(
    {
      from: "Check <notificacion.santabarbara@gmail.com>",
      to: "CHECK <jeaustin.rdz@gmail.com>",
      subject: "Test",
      html: "<h1>Test</h1>",
    },
    (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    }
  );
});

module.exports = mailer;

