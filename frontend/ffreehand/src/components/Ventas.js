import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import Venta from './Venta';

const Ventas = () => {

    const [ventas, setVentas] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getVentas();
        console.log(ventas);
    }, [ventas.length]);


    //Obtenemos los artículos

    const getVentas = () => {
        axios.get(url + "ventas").then(res => {
            setVentas(res.data.ventas);
        });
    }

    //Eliminamos un artículo por su id

    const deleteVentas = (id) => {
        const idVenta = ventas[id]._id;
        axios.delete(url + "delete/" + idVenta).then(res => {
            getVentas();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5"> Ventas</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">


                    {
                        ventas.length > 0 ? (

                            ventas.map((venta, i) => {

                                return (




                                    <Venta
                                        key={i}
                                        id={i}
                                        ventaData={venta}
                                        delVenta={deleteVentas}

                                    />




                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay ventas que mostrar</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Ventas;