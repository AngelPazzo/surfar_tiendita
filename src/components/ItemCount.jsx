import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={() => setCount(Math.max(count - 1, initial))}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        variant="outline-success"
        onClick={() => setCount(Math.min(count + 1, stock))}
      >
        +
      </Button>
      <Button
        onClick={() => {
          onAdd(count);
        }}
      >
        Add{" "}
      </Button>
    </>
  );
};

export default ItemCount;
