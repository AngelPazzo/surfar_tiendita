import React from "react";

const CartItem = ({ item, quantity, removeItem}) => {
    return ( 
       <div className = "flex">
        <img src={item.image} alt={item.name} />{ item.name } - { item.price } U$S 
        <button onClick={() => removeItem(item.id)}>-</button>
       </div>
    );
}
export default CartItem;