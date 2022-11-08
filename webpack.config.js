const path = require('path');

module.exports = {
  // The entry point file described above
  
  entry: {
    index: './src/index.js',
    RegistroFuncionario: './src/RegistroFuncionario.js',
    IngresarDiaFeriado: './src/IngresarDiaFeriado.js',
    EditarFuncionario: './src/EditarFuncionario.js',
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',

  
};