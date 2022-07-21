import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import DataJason from "../details.json";
import Datos from "../data.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = 1;

  let promiseItems = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJason.filter((product) => product.id === id).shift());
      }, 2000);
    });

  useEffect(() => {
    promiseItems().then((res) => {
      console.log(res);
      setItem(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} loading={loading} />;
    </>
  );
};

export default ItemDetailContainer;
