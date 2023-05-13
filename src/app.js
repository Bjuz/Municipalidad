const express = require( 'express');
const morgan = require('morgan');
const path = require('path')



const app = express();

app.use(morgan('dev'))

app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, '../html')))

module.exports = app;

