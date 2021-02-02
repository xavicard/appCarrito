import { React } from "react";
function Carrito(){
    return(
        <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Ver mi Carrito</div>
          <div className="collapsible-body">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
          </div>
        </li>
      </ul>
    )
}
export default Carrito