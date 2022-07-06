import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5 rem" }} />
    </>
  );
};
export default CartWidget;
