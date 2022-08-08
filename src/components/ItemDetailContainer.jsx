import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ({setCount}) => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const buscarId = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "data", id);
    getDoc(docRef).then( snapshop => {
      setDetails ({id: snapshop.id, ...snapshop.data()});
    })
    setLoading(true);
  } , [buscarId]);
  return (
    <>
      <ItemDetail setCount={setCount}  details= {details} loading={loading} />;
    </>
  );
};

export default ItemDetailContainer;
