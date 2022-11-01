'use strict'

const venta = require('../modells/venta')
var Venta = require('../modells/venta')


//creamos un objeto donde tengamos los métodos de ruta que vamos a definir(GET, POST, PUT, DELETE)

var controller = {

    //método para guardar un artículo: con save.
    save: (req, res) => {
        var venta = new Venta();
        venta.cliente = params.cliente;
        venta.telefono = params.telefono;
        venta.producto = params.producto;
        venta.cantidad = params.cantidad;
        venta.precio = params.precio;
        venta.valorTotal = params.valorTotal

        venta.save((err, ventaStored) => {
            if (err || !ventaStored) {
                return res.status(404).send({
                    status: 'error',
                    message: 'La venta no se ha guardado'
                })
            }

            return res.status(200).send({
                status: 'success',
                ventaStored
            });
        })
    },

    // Método para listar las ventas: get

    getVentas: (req, res) => {
        var query = Venta.find({});

        //con sort se organiza según el parámetro indicado:
        query.sort('-date').exec((err, ventas) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer los datos'
                });
            }

            if (!venta) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay ventas para mostrar'
                });
            }

            return res.status(200).send({
                tatus: 'success',
                ventas
            });
        });
    },

    // Método eliminar una venta por id: delete.

    delete: (req, res) => {
        var ventaId = req.params.id;

        Venta.findOneAndDelete({ _id: ventaId }, (err, ventaRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al eliminar la ventas'
                });
            }

            if (!venta) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado la venta a eliminar'
                });
            }

            return res.status(200).send({
                status: 'success',
                venta: ventaRemoved
            });
        })

    }


}

module.exports = controller;