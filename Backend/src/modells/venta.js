'use string'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = new Schema({

    cliente: String,
    telefono: String,
    producto: String,
    date: { type: Date, default: Date.now },
    cantidad: int,
    precio: int,
    valorTotal: int
})

module.exports = mongoose.model('Venta', VentaSchema);
