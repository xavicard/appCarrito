const carritoInicial = []
const AGREGA_PRODUCTO='AGREGA_PRODUCTO'
const CARRITO_VACIO='CARRITO_VACIO'
const ELIMINAR_PRODUCTO='ELIMINAR_PRODUCTO'
const CHECKOUT_CARRITO='CHECKOUT_CARRITO'
export default function(state = carritoInicial, action){
    switch(action.type){
        case AGREGA_PRODUCTO:{
            return action.payload
        } 
        case CARRITO_VACIO:{
            return []
        } 
        case ELIMINAR_PRODUCTO:{
            return action.payload
        } 
        case CHECKOUT_CARRITO:{
            return []
        } 
        default: return state
    }
}