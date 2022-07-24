import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <div className="agregarItem"></div>
      <h5>Add to cart</h5>
      <ButtonGroup size="lg" className="mb-2">
        <Button
          variant="outline-danger"
          onClick={() => setCount(Math.max(count - 1, initial))}
        >
          -
        </Button>
        {count}
        <Button
          variant="outline-success"
          onClick={() => setCount(Math.min(count + 1, stock))}
        >
          +
        </Button>
      </ButtonGroup>
      <div>
        {" "}
        <ButtonGroup size="lg" className="mb-2">
          <Button
            onClick={() => {
              onAdd(count);
            }}
            className="btnGoCart"
            variant="warning"
            disabled={count === 0}
          >
            {" "}
            Go to cart!
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ItemCount;
