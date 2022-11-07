'use string'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const VentaSchema = new Schema({

    cliente: { type: String, require: true, unique: true },
    telefono: { type: String, require: true, unique: true },
    producto: { type: String, require: true },
    date: { type: Date, default: Date.now },
    cantidad: { type: int, require: true },
    precio: { type: int, require: true },
    valorTotal: { type: int, require: true }
})

const Venta = mongoose.model('User', VentaSchema);


module.exports = VentaSchema;

//module.exports = mongoose.model('Venta', VentaSchema);
