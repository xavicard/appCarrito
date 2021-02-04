const AGREGA_PRODUCTO='AGREGA_PRODUCTO'
const CARRITO_VACIO='CARRITO_VACIO'
const ELIMINAR_PRODUCTO='ELIMINAR_PRODUCTO'
const CHECKOUT_CARRITO='CHECKOUT_CARRITO'

export function actionCarrito(carrito,tipo) {
    switch(tipo){
        case 0: return async(dispatch)=>
            dispatch(agregarProducto(carrito))
         //agrega producto
        case 1: return async(dispatch)=> dispatch(carritoVacio()) //carrito vacio
        case 2: {
        //let carritoAux=carrito.filter(p=>p.id!==producto)
            return async(dispatch)=> dispatch(eliminarProducto(carrito))
        } //elimina producto
        case 3:  {
            console.log('Compra realizada correctamente')
            return async(dispatch)=> dispatch(checkoutProducto())
        } //checkout
        default: {return async(dispatch)=> dispatch(carritoVacio())}
    }
}
const agregarProducto=carrito=>(
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
const eliminarProducto=id=>(
    {
        type:ELIMINAR_PRODUCTO,
        payload:id
    }
)
const checkoutProducto=monto=>(
    {
        type:CHECKOUT_CARRITO,
        payload:monto
    }
)
