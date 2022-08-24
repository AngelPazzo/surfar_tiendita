import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./itemCount.css"


const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <div className="agregarItem">
     
        <Button className="botonMenos"
          variant="outline-danger"
          size="sm"
          onClick={() => setCount(Math.max(count - 1, initial))}
        >
          -
        </Button>
        <div className="count">
        {count}
        </div>
        <Button className="botonMas"
          variant="outline-success" size="sm"
          onClick={() => setCount(Math.min(count + 1, stock))}
        >
          +
        </Button>

      
        {" "}
          <Button 
            onClick={() => {
              onAdd(item, count);
            }}
            className="btnGoCart"
            variant="dark"
            size="sm"
            disabled={count === 0}
          >
            {" "}
            Agregar al carrito
          </Button>
      
      </div>
    </>
  );
};

export default ItemCount;
