'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = new Schema({
    // Aca se cambia las columnas de la base de datos

    cliente: { type: String, require: true, unique: true },
    telefono: { type: String, require: true, unique: true },
    producto: { type: String, require: true },
    date: { type: Date, default: Date.now },
    cantidad: { type: Number, require: true },
    precio: { type: Number, require: true },
    valortotal: { type: Number, require: true }

    // cliente: String,
    // telefono: String,
    // producto: String,
    // date: { type: Date, default: Date.now },
    // cantidad: Number,
    // precio: Number,
    // valortotal: Number
});

module.exports = mongoose.model('Venta', VentaSchema);