import React from "react";
import useContext from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Cart = () => {

    const { cartItems,  removeItem, clearCart, getTotal } = useContext(CartContext);
    const total = getTotal();
    
    return (
        <>
        {cartItems.length === 0 ? (
            <>
            <Link to="/"> <Button variant="primary" >Volver</Button></Link>
        </>
        ) : (
            <>
            {cartItems.map((item) => (
                <CartItem item={item.item} quantity={item.quantity} removeItem={removeItem} />
            ))}
            <button onClick={clearCart} className="btn btn-danger">
                Limpiar carrito
            </button>
            <h3>Total: {total} U$S</h3>
            <button className ="btn btn-success">Ir al checkout</button>
            <Link to="/"> <Button variant="primary" >Volver</Button></Link>
            </>
        )}
        </>
    );
}

export default Cart;

            










    //     <div className="cart">
    //     <h5>Carrito</h5>
    //     <ul>
    //         {cartItems.map((item) => (
    //         <li key={item.id} quantity = {item.quantity}> removeItem={removeItem} item={item} 
    //             <button onClick={() => removeItem(item.id)}>-</button>
    //             <button onClick={() => addItem(item.id)}>+</button>
    //         </li>
    //         ))}
    //     </ul>
    //     <p>Total: {getTotal()}</p>
    //     <button onClick={clearCart}>Vaciar carrito</button>
    //     </div>
    // );
    // }
    // export default Cart;
