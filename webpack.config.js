const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
    CancelarVacaciones: "./src/CancelarVacaciones.js",
    DetalleVacaciones: "./src/DetallesVacaciones.js",
    EditarFuncionario: "./src/EditarFuncionario.js",
    EditarSolicitud: "./src/EditarSolicitud.js",
    IngresarDiaFeriado: "./src/IngresarDiaFeriado.js",
    RegistroFuncionario: "./src/RegistroFuncionario.js",
    SolicitarVacaciones: "./src/SolicitarVacaciones.js",
    SolicitudEmergencia: "./src/SolicitudEmergencia.js",
    Navbar: "./src/Navbar/Navbar.js",
    ProcesarSolicitud: "./src/ProcesarSolicitud.js",
    Inicio: "./src/Inicio.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devtool: "eval-source-map",
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      net: "net",
    }),
  ],
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      util: false,
      assert: false,
      net: false,
      tls: false,
      child_process: false,
    },
  },
};
