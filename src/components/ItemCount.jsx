import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const ItemCount = ({ stock, initial }) => {
  let [count, setCount] = useState(0);

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={() => setCount(Math.max(count - 1, 0))}
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
    </>
  );
};

export default ItemCount;
