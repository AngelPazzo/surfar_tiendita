import React from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = (props) => {

    const { cartItems, addItem, removeItem, clearCart, getTotal } = React.useContext(CartContext);
    
    return (
        <div className="cart">
        <h5>Carrito</h5>
        <ul>
            {cartItems.map((item) => (
            <li key={item.id}>
                {item.name} - {item.count}
                <button onClick={() => removeItem(item.id)}>-</button>
                <button onClick={() => addItem(item.id)}>+</button>
            </li>
            ))}
        </ul>
        <p>Total: {getTotal()}</p>
        <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
    }
    export default Cart;
