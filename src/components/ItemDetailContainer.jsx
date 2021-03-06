import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import DataJason from "../details.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const buscarId = parseInt(id);

  useEffect(() => {
    let findDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          DataJason.filter((product) => product.id === buscarId).shift()
        );
      }, 2000);
      setLoading(false);
    });
    findDatos.then((res) => {
      setDetails(res);
      setLoading(true);
    });
  }, []);
  return (
    <>
      <ItemDetail details={details} loading={loading} />;
    </>
  );
};

export default ItemDetailContainer;

//   let promiseItems = () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(DataJason.filter((product) => product.id === id).shift());
//       }, 2000);
//     });

//   useEffect(() => {
//     promiseItems().then((res) => {
//       console.log(res);
//       setItem(res);
//       setLoading(false);
//     });
//   }, []);
