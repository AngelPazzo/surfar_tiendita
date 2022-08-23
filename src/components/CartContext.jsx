import React, { createContext, useEffect, useState  } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);


    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if (newItem) {
            quantity = quantity + newItem.quantity;
        setCartItems ( cartItems.splice(cartItems.findIndex ((element) => element.item.id === item.id), 1));
        }
        setCartItems([...cartItems, { item, quantity }]);
    };

    
    const isInCart = (item) => {
        return cartItems.find((element) => element.item.id === item.id);
    };
    

    const removeItem = (itemID) => {
        setCartItems(cartItems.filter((item) => item.item.id !== itemID));
    
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.item.price * item.quantity, 0);
    }
    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );



    
}
export default CartContextProvider;

