import React from "react";

const ItemDetail = ({ item, loading }) => {
  console.log(item);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h1>{item.title}</h1>
        <h1>{item.price}</h1>
        <img src={item.image} alt={item.title} />
      </>
    );
  }
};

export default ItemDetail;
