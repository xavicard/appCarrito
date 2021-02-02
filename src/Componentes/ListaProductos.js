import { React, Component, useEffect, Fragment } from "react";
import Producto from "./Producto"
import {useDispatch, useSelector} from 'react-redux'
import { actionProducto } from "../Acciones/ProductoAccion";


function ListaProductos () {
    const resultado = useSelector(respuesta => respuesta)
    if(resultado.respuestaProductos.length==0)
        return null
    return (
        <Fragment>
        <div className="col s6">
            <div className="row">
            {resultado.respuestaProductos.map(p=>(
                <Producto
                    p={p}
                />        
                ))}
            </div>
        </div>
        </Fragment>
    )
}

export default ListaProductos;