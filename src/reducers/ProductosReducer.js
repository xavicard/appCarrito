const productoInicial = []
const LISTA_PRODUCTOS='LISTA_PRODUCTOS'
const LISTA_VACIA='LISTA_VACIA'

export default function(state = productoInicial, action){
    switch(action.type){
        case LISTA_PRODUCTOS:{
            return action.payload
        }
        case LISTA_VACIA:{
            return state
        }
        default: return state
    }
}