'use strict'

var express = require('express');
const { model } = require ('mongoose');
var Venta = require('../controller/venta');

// Llamamos al objeto router express
var router = express.Router();

router.post('/save', Venta.save);
router.get('articles', Venta.getVentas);
router.delete('/delete/:id', Venta.delete);

module.exports = router; 