const AGREGA_PRODUCTO='AGREGA_PRODUCTO'
const CARRITO_VACIO='CARRITO_VACIO'
const ELIMINAR_PRODUCTO='ELIMINAR_PRODUCTO'
const CHECKOUT_CARRITO='CHECKOUT_CARRITO'

export function actionCarrito(carrito,tipo,producto) {
    switch(tipo){
        case 0: return(dispatch)=>{
            dispatch(agregarProducto(carrito))
        } //agrega producto
        case 1: return(dispatch)=> dispatch(carritoVacio()) //carrito vacio
        case 2: {
            let carritoAux=carrito.filter(p=>p.id!==producto)
            return(dispatch)=> dispatch(eliminarProducto(carritoAux))
        } //elimina producto
        case 3:  {
            console.log('Compra realizada correctamente')
            return(dispatch)=> dispatch(checkoutProducto())
        } //checkout
    }
}
const agregarProducto=(carrito)=>(
    {
        type:AGREGA_PRODUCTO,
        payload:carrito
    }
)
const carritoVacio=()=>(
    {
        type:CARRITO_VACIO
    }
)
const eliminarProducto=(carrito)=>(
    {
        type:ELIMINAR_PRODUCTO,
        payload:carrito
    }
)
const checkoutProducto=()=>(
    {
        type:CHECKOUT_CARRITO
    }
)
