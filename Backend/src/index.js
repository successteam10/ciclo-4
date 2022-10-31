const express = require('express');

const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const port = 9000;

app.listen(port, ()=>{
    console.log('corriendo por el puerto ' + port)
});