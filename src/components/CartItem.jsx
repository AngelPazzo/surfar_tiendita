import React from "react";
import "./cartItem.css"
import Card from "react-bootstrap/Card";

const CartItem = ({ item, quantity, removeItem}) => {
    
    
    return ( 
      <>
      <Card className="text-center cardDetail">
        <Card.Header>Modelo: {item.item.title}</Card.Header>
          
          <img className="imgDetails" variant="top" src={item.item.image} style={{ width: "150px" }} alt={item.item.title} />
          <Card.Footer className="text-muted">Cantidad: {item.quantity}</Card.Footer>
          <Card.Footer className="text-muted">Precio: {item.item.price}</Card.Footer>
        </Card>
        <div className="d-flex justify-content-center ">
         <button className="btn btn-danger ps-2 m-2" size="sm" onClick={() => removeItem(item.item.id)}>Eliminar</button>
         </div>
         </>
    );
};
export default CartItem;