import Item from "./Item";
import React from "react";
import fondeli from "../fondeli.jpg";
import "./itemList.css"


const ItemList = (props, loading = false) => {
  return (
    <>
    <div className="fondeli">
      <img className="foto1" src={fondeli} alt="fondeli" />
      </div>

      <div className="row row-cols-1 row-cols-sm-4 d-flex justify-content-center">
      {props.items.map((losItems) => (

        <Item key={losItems.id} item={losItems} loading={true} />
      ))}
  </div>
    </>
  );
};

export default ItemList;
