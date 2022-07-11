import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAddItem = (count) => {
    alert(`Added ${count} items to cart`);
  };
  return (
    <>
      <ItemCount stock={10} initial={0} onAdd={onAddItem} />
    </>
  );
};

export default ItemListContainer;
