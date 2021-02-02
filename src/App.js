import logo from './logo.svg';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Fragment } from 'react';
import Carrito from './Componentes/Carrito'
import Checkout from './Componentes/Checkout'
import Navbar from './Componentes/Navbar'
import ListaProductos from './Componentes/ListaProductos'
function App() {
  //POSIBLES CAMBIOS
  // Existe Lista de Productos - reducer 1
  // Se ha agregado 1 producto al carrito - reducer 2
  // No se tienen productos - reducer 2
  // Se ha eliminado 1 producto - reducer 2
  // Checkout correctamente realizado - reducer 2
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
      <div className="container">
        <ListaProductos />
        <Carrito />
        <Checkout />
      </div>
      </Provider>
    </Fragment>
  );
}

export default App;
