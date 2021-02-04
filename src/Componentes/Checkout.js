import { Fragment, React } from "react";
import { useDispatch } from "react-redux";
import { actionCarrito } from "../Acciones/CarritoAccion";

function Checkout({total}){
    const mostrar = () =>{
        window["ejecutarModal"]();
    }
    const dispatch=useDispatch()
    const pagar = monto =>{
        dispatch(actionCarrito(monto,3))
    }
    return(
        <Fragment>
        <button data-target="modal1" className="waves-effect waves-light btn modal-trigger" type="button" onClick={()=>mostrar()} >Finalizar el pedido</button>

        <div id="modal1" className="modal">
            <div className="modal-content">
            <h4>Finalizar pedido</h4>
            <p>Está usted de acuerdo en finalizar el pedido?<br />El monto a cancelar es Bs. {total}</p>
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-red btn-flat">No, todavía deseo ver más</a>
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={()=>pagar(total)}>Si, de acuerdo</a>
            </div>
        </div>
      </Fragment>
    )
}

export default Checkout