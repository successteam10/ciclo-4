import React from 'react';

const Venta = ({ id, ventaData, delVenta }) => {

    const { cliente, telefono, producto, date, cantidad, precio, valortotal } = ventaData;

    const formatDate = (date) => {
        return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
    }

    const del = () => {
        delVenta(id);

    }


    return (
        // <div className="col">
        //     <div className="card mx-auto mb-3">

        //         <div className="card-header">
        //             <h3 className="card-title">{cliente}</h3>
        //         </div>

        //         <div className="card-body">
        //             <label className="card-text text-start">{telefono}</label>
        //         </div>

        //         <ul className="list-group list-group-flush">
        //             <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Publicado el: {formatDate(date)}</li>
        //             <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Cantidad: {cantidad}</li>
        //             <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Producto: {producto}</li>
        //             <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Precio: {precio}</li>
        //             <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Total: {valortotal}</li>
        //         </ul>

        //         <div className="card-footer">
        //             <button type="button" className="btn btn-danger btn-sm" onClick={del}>
        //                 Eliminar
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>CLIENTE</th>
                    <th>TELEFONO</th>
                    <th>FECHA</th>
                    <th>PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                    <th>VALOR TOTAL</th>
                    <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                <td>{cliente}</td>
                <td>{telefono}</td>
                <td>{formatDate(date)}</td>
                <td>{producto}</td>
                <td>{cantidad}</td>
                <td>{precio}</td>
                <td>{valortotal}</td>
                <td><button type="button" className="btn btn-danger btn-sm" onClick={del}>Eliminar</button></td>
            </tbody>

        </table>

    );

}

export default Venta;