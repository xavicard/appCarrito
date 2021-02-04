import  React, { Fragment }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCarrito } from "../Acciones/CarritoAccion";

function Carrito(){
    const dispatch=useDispatch()
    const respuesta=useSelector(respuesta=>respuesta.respuestaCarrito)
    const eliminar = id =>{
        dispatch(actionCarrito(id,2))
    }
    console.log(respuesta)
    if(respuesta.length==0)
        return null
    window["ejecutarCollapsible"]();
    return(
        respuesta.map(r=>
            <li key={r.id}>
          <div className="collapsible-header">{r.producto}<span className="new badge" data-badge-caption="">{r.cantidad} x Bs.{r.precio}</span>
          <button className="waves-effect red darken-4 btn" onClick={()=>eliminar(r.id)}><i className="material-icons left">delete</i></button>
          </div>
          <div className="collapsible-body">
            <ul>
                <li>Color: {r.color}</li>
                <li>Precio: {r.precio}</li>
            </ul>
            </div>
        </li>
        )
        )
}
export default Carrito;