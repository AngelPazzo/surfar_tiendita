import React, { useState, useEffect, setItems } from "react";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DataJason from "../data.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataJason);
      }, 2000);
      setLoading(false);
    });

    promiseItems.then(() => {
      setItems(DataJason);
      setLoading(true);
    });
    promiseItems.then((items) => {
      setItems(items);
      console.log(items);
    });
  }, []);
  return (
    <>
      <ItemList items={items} loaded={loading} />
    </>
  );
};

export default ItemListContainer;
