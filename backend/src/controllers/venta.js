//Diferentes métodos y rutas relacionadas con los artículos. Definimos todos los métodos y objetos de la API

'use strict'

var Venta = require('../models/venta');

//creamos un objeto controller para disponer de todos los métodos de ruta:
var controller = {

	//Método para guardar un a rtículo:

	save: (req, res) => {

		var params = req.body;
		console.log(params);
		//Objeto a guardar
		var venta = new Venta();

		// Asignar valores
		//venta.title = params.title;

		venta.cliente = params.cliente;
		venta.telefono = params.telefono;
		venta.producto = params.producto;
		venta.cantidad = params.cantidad;
		venta.precio = params.precio;
		venta.valortotal = params.total;


		// Guardamos el articulo
		venta.save((err, ventaStored) => {

			if (err || !ventaStored) {
				return res.status(404).send({
					status: 'error',
					message: 'La venta no se ha guardado !!!'
				});
			}

			// Devolver una respuesta 
			return res.status(200).send({
				status: 'success',
				ventaStored
			});

		});

	},

	//Método para obtener o listar los artículos:

	getVenta: (req, res) => {

		var query = Venta.find({});

		query.sort('-date').exec((err, ventas) => {

			if (err) {
				return res.status(500).send({
					status: "error",
					message: "Error al extraer los datos"
				});
			}

			//Si no existen artículos:
			if (!ventas) {
				return res.status(404).send({
					status: "error",
					message: "No hay ventas para mostrar"
				});
			}

			return res.status(200).send({
				status: "success",
				ventas
			});

		});

	},

	//Eliminar un artículo:

	delete: (req, res) => {

		//Recogemos el id de la url
		var ventaId = req.params.id;

		Venta.findOneAndDelete({ _id: ventaId }, (err, ventaRemoved) => {

			if (err) {
				return res.status(500).send({
					status: "error",
					message: "Error al eliminar!!"
				});
			}

			if (!ventaRemoved) {
				return res.status(404).send({
					status: "error",
					message: "No se ha encontrado la ventao que deseas eliminar!!"
				});
			}

			//Si no hay ningún error obtenemos el artículo eliminado

			return res.status(200).send({
				status: "success",
				venta: ventaRemoved
			});

		});

	}

};

module.exports = controller;