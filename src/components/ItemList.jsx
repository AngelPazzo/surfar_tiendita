import Item from "./Item";
import React from "react";

const ItemList = (props, loading = false) => {
  return (
    <>
      
      {props.items.map((losItems) => (
        <Item key={losItems.id} item={losItems} loading={true} />
      ))}
  
    </>
  );
};

export default ItemList;
