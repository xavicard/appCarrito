import { React } from "react";
import {useDispatch} from 'react-redux'
import { actionProducto } from "../Acciones/ProductoAccion";

function Navbar(){
    const dispatch = useDispatch();
    const cargar=()=>{
        dispatch(actionProducto())
    }

    return(
        <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo left">Proyecto Carrito</a>
            <a className="brand-logo" onClick={()=>cargar()}>Cargar Listado</a>
        </div>
      </nav>
    )
}
export default Navbar;