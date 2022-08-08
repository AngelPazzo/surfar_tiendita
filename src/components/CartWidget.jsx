import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import Cart from "./Cart";

const CartWidget = () => {
  const { cartItems, removeItem, clearCart, getTotal } = useContext(CartContext);
  return (
    <>
      
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5 rem" }} />
      <span className="badge badge-pill badge-danger">{cartItems.length}</span>
    </>
  );
};
export default CartWidget;
