import React from "react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        isInCart();
}   , [cartItems]);

    const isInCart = (itemID) => {
        let itemInCart = cartItems.find((item) => item.id === itemID);
        if (itemInCart) {
            itemInCart.count++;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { id: itemID, count: 1 }]);
        }
    }

    // const addItem = (itemID) => {
    //     isInCart(itemID);
    // }


    const removeItem = (itemID) => {
        let itemInCart = cartItems.find((item) => item.id === itemID);
        if (itemInCart.count > 1) {
            itemInCart.count--;
            setCartItems([...cartItems]);
        } else {
            let newCart = cartItems.filter((item) => item.id !== itemID);
            setCartItems([...newCart]);
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.count;
        });
        return total;
    }
    return (
        <CartContext.Provider value={{ cartItems, isInCart, addItem, removeItem, clearCart, getTotal }}>
            {props.children}
        </CartContext.Provider>
    );

    const addItem = (itemID) => {
        isInCart(itemID);
    }

    

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, getTotal }}>
            {props.children}
        </CartContext.Provider>
    );
}

