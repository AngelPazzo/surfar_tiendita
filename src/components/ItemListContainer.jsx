import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";
import {getDoc, doc, getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db,"data");
    if(name){
      const qName = query (itemCollection, where("category.name", "==", name))
      console.log (name)
      getDocs(qName).then((snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }));
        setItems(items);
      }
      )}else{
        getDocs(itemCollection).then((snapshot) => {
          const items = snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
          }));
          setItems(items);
        } 
        )}} , [name]);
  

  return (
    <>
    
      <ItemList items={items} loaded={loading} />
    </>
);
};
export default ItemListContainer;
