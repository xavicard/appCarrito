import { React } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { actionCarrito } from "../Acciones/CarritoAccion";
function Producto({p}){
    const dispatch = useDispatch()
    const agregar=p=>{
        dispatch(actionCarrito(p,0))
        }
    return (
            <div className="col s3 m3" key={p.id} >
                <div className="card">
                    <div className="card-content">
                    <span className="card-title">{p.producto}</span>
                    <p>{p.precio}</p>
                    </div>
                    <div className="card-action">
                    <button className="waves-effect waves-light btn" type="button" onClick={()=>agregar(p)}>Agregar al Carrito</button>
                    </div>
               </div>
            </div>
    )
}

export default Producto;