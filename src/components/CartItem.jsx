import React from "react";

const CartItem = ({ item, quantity, removeItem}) => {

    console.log (item.item);
    return ( 
        <div className="col m-2">
      <div className="card card border-primary mb-3">
        <div className="card-body">
          <h5 className="card-title">{item.item.title}</h5>
          <img src={item.item.image} style={{ width: "150px" }} alt={item.item.title} />
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.item.price}</p>
            <button className="btn btn-danger" onClick={() => console.log (item.item.id)}>Eliminar</button>
        </div>
        </div>
        </div>
    );
};
export default CartItem;