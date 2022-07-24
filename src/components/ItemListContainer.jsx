import React, { useState, useEffect } from "react";
import DataJason from "../data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";

const ItemListContainer = () => {
  const { name } = useParams();
  console.log(name);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    let filtrarDatos = new Promise((resolve) => {
      setTimeout(() => {
        if (name) {
          resolve(
            DataJason.filter((products) => products.category.name === name)
          );
        } else {
          resolve(DataJason);
        }
      }, 2000);
      setLoading(false);
    });
    

    filtrarDatos.then((items) => {
      setItems(items);
      setLoading(true);
    })

      .catch((err) => console.log(err));
  }, [name]);


  return (
    <>
    
      <ItemList items={items} loaded={loading} />
    </>
);
};
export default ItemListContainer;
