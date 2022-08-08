import React from "react";

const CartItem = ({ item, quantity, removeItem}) => {
    console.log (item.price);
    return ( 
    <div>
        <h1>
            {item.title}
        </h1>
    </div>
      
    );
}
export default CartItem;