import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <div className="agregarItem"></div>
      {/* <h5>Add to cart</h5> */}
        {count}
        <Button
          variant="outline-success" size="sm"
          onClick={() => setCount(Math.min(count + 1, stock))}
        >
          +
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => setCount(Math.max(count - 1, initial))}
        >
          -
        </Button>
      <div>
        {" "}
          <Button
            onClick={() => {
              onAdd(count);
            }}
            className="btnGoCart"
            variant="warning"
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
