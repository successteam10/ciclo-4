const express = require('express')
const cors = require('cors');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 9000);

//Middleawares
app.use(cors());
app.use(express.json());

//routes
app.get('/usuarios', (req, res) => res.send('Ruta de usuarios'));

module.exports = app;