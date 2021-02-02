import { combineReducers } from 'redux'
import CarritoReducer from './CarritoReducer'
import ProductosReducer from './ProductosReducer'

export default combineReducers({
    respuestaCarrito: CarritoReducer,
    respuestaProductos: ProductosReducer
})