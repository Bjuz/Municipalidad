const express = require( 'express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express()
app.use(morgan('dev'))
app.use(cors());
module.exports = app;

