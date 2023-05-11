const express = require( 'express');
const morgan = require('morgan');

const { db } = require("./utilAdmin");

const app = express();

app.use(morgan('dev'))

app.get('/', async (req,res)=>{
    const querySnapshot = await db.collection('users').get()

    console.log(querySnapshot);
    
    res.send('Hello World');
})

module.exports = app;

