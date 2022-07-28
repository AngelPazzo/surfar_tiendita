import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cart from "./Cart";

const CartWidget = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5 rem" }} />
    </>
  );
};
export default CartWidget;
