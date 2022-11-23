'use strict'

var express = require('express');

var Venta = require('../controllers/venta');

//Llamamos al objeto router de express:
var router = express.Router();

//Rutas para artículos***********************************************************************************

//Guardar un nuevo artículo.
router.post('/save', Venta.save);

//Obtener todos los artículos sin archivar.
router.get('/ventas', Venta.getVenta);

//Eliminar un artículo. Le pasamos el parámetro :id como obligatorio.
router.delete('/delete/:id', Venta.delete);

module.exports = router;

