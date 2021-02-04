import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carrito from './Carrito'
import { actionCarrito } from "../Acciones/CarritoAccion";
import Checkout from './Checkout'
function ListaCarrito(){
    const dispatch=useDispatch()
    const vaciar = () =>{
        dispatch(actionCarrito(null,1))
    }
    const respuesta=useSelector(respuesta=>respuesta.respuestaCarrito)
    if(respuesta.length==0)
        return null
    let suma=0
    return(
        <Fragment>
        <i className="material-icons">shopping_cart</i>Ver mi Carrito
        <button className="waves-effect red darken-4 btn" onClick={()=>vaciar()}><i className="material-icons left">delete</i>Vaciar el Carrito</button>
        <ul className="collapsible" onLoad='ejecutarCollapsible()'>
            <Carrito />
        </ul>
        <h4 >Total:{
        respuesta.map(p=>{suma+=(p.precio*p.cantidad)}
            )}Bs. {suma}</h4>
        <Checkout
            total={suma} />
        </Fragment>
        )
}

export default ListaCarrito