import React from "react";
import {useContext, useState} from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Formulario from "./Formulario";


const Cart = () => {

    const { cartItems,  removeItem, clearCart, getTotal } = useContext(CartContext);
    const total = getTotal();

    
    // const buyItems = (e) => {
    //     e.preventDefault();
    //     const name = document.getElementById("name").value; 
    //     const address = document.getElementById("address").value;
    //     const email = document.getElementById("email").value;
        
    //     const db = getFirebase();
    //     const orderCollection = collection (db, "orders");
    //     const data = {
    //         name,
    //         address,
    //         email,
    //         cartItems,
    //         total
    //     }
    //     addDoc (orderCollection, data).then((res) => {
    //         console.log(res.id);
    //     }) 
    // }
    
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
                <Link to="/">
                    <Button variant="outline-success">Continue Shopping</Button>
                </Link>
                <Button variant="outline-danger" onClick={clearCart}>
                    Clear Cart
                </Button>
                <Formulario/>
                <Link to="/checkout">
                    
                    <Button variant="outline-success" >Checkout</Button>
                </Link>
            </div>
        </div>
    );
}
export default Cart;








