import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';


const Admin = () => {

    const url = Global.url;

    const [venta, setVenta] = useState({
        cliente: null,
        telefono: null,
        producto: null,
        date: null,
        cantidad: null,
        precio: null,
        valortotal: null,
    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let clienteRef = React.createRef();
    let telefonoRef = React.createRef();
    let productoRef = React.createRef();
    let cantidadRef = React.createRef();
    let precioRef = React.createRef();
    let totalRef = React.createRef();

    const changeState = () => {
        setVenta({
            cliente: clienteRef.current.value,
            telefono: telefonoRef.current.value,
            producto: productoRef.current.value,
            cantidad: cantidadRef.current.value,
            precio: precioRef.current.value,
            total: totalRef.current.value,
        });

        console.log(venta)

    }

    const sendData = (e) => {
        //evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();
        changeState();
        //peticion http por POST para gardar el articulo:
        axios.post(url + 'save', venta).then(res => {
            setRedirect(true);
            console.log(res.data);
        })
    }

    if (redirect) {
        return <Navigate to="inicio" />;
    }

    return (
        <div className="nueva-publicacion">

            <div className="titulo-principal">
                <h1>ADMINISTRADOR DE CLIENTES Y VENTAS</h1>
            </div>


            <div id="forulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>

                <div className="card-header text-dark">
                    <h2>DATOS DE LA VENTA</h2>
                </div>

                <div className="card-body">

                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label>Cliente</label>
                            <input type="text" className="form-control" id="cliente" name="cliente" ref={clienteRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Telefono</label>
                            <input type="text" className="form-control" id="telefono" name="telefono" ref={telefonoRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Producto</label>
                            <input type="text" className="form-control" id="producto" name="producto" ref={productoRef} onChange={changeState} required />
                        </div>


                        <div className="mb-3">
                            <label>Cantidad</label>
                            <input type="number" className="form-control" id="cantidad" name="cantidad" ref={cantidadRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Precio</label>
                            <input type="number" className="form-control" id="precio" name="precio" ref={precioRef} onChange={changeState} required />
                        </div>


                        <div className="mb-3">
                            <label>Valor Total</label>
                            <input type="number" className="form-control" id="total" name="total" ref={totalRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Crear cliente" />
                        </div>



                    </form>


                </div>





            </div>



        </div>

    );
}
export default Admin;