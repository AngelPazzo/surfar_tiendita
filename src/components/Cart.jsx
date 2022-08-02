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
        <div className="cart">
            <h2>Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="cart-total">
                <span>Total: {total} U$S</span>
            </div>
            <div className="cart-buttons">
                <Link to="/category/suit">
                    <Button variant="outline-success">Continue Shopping</Button>
                </Link>
                <Button variant="outline-danger" onClick={clearCart}>
                    Clear Cart
                </Button>
                <Link to="/checkout">
                    <Button variant="outline-success">Checkout</Button>
                </Link>
            </div>
        </div>
    );
}
export default Cart;








