const path = require("path");

module.exports = {
  // The entry point file described above

  entry: {
    index: "./src/index.js",
    CancelarVacaciones: "./src/CancelarVacaciones.js",
    DetalleVacaciones: "./src/DetallesVacaciones.js",
    EditarFuncionario: "./src/EditarFuncionario.js",
    EditarSolicitud: "./src/EditarSolicitud.js",
    IngresarDiaFeriado: "./src/IngresarDiaFeriado.js",
    RegistroFuncionario: "./src/RegistroFuncionario.js",
    SolicitarVacaciones: "./src/SolicitarVacaciones.js",
    SolicitudEmergencia: "./src/SolicitudEmergencia.js",
    Navbar: "./src/Navbar/Navbar.js",
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: "eval-source-map",
};
