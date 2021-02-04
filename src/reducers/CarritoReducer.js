const carritoInicial = []
const AGREGA_PRODUCTO='AGREGA_PRODUCTO'
const CARRITO_VACIO='CARRITO_VACIO'
const ELIMINAR_PRODUCTO='ELIMINAR_PRODUCTO'
const CHECKOUT_CARRITO='CHECKOUT_CARRITO'
export default function(state = carritoInicial, action){
    switch(action.type){
        case AGREGA_PRODUCTO:{
            let index=state.findIndex(p=>p.id===action.payload.id)
            if(index==-1)//el producto no existe (cantidad=1)
            {
                action.payload.cantidad=1
                return [...state,action.payload]
            }
            else
            {
                state[index].cantidad++
                return [...state]
            }
            //el producto existe (cantidad+1)
        } 
        case CARRITO_VACIO:{
            return []
        } 
        case ELIMINAR_PRODUCTO:{
            let carritoAux=state.filter(p=>p.id!==action.payload)
            return carritoAux
        } 
        case CHECKOUT_CARRITO:{
            console.log('Pago realizado correctamente')
            return []
        } 
        default: return state
    }
}