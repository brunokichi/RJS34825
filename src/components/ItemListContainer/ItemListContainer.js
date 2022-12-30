import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Saludo from "../Saludo/Saludo";

import ItemList from "../ItemList/ItemList";

import { getFirestore, collection,  getDocs,  query,  where } from 'firebase/firestore'

import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let itemsCollection = collection(db, 'items');
    if (id) {
      itemsCollection = query(itemsCollection, where('tipo', '==', id));
    } 
    getDocs(itemsCollection).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  },);

  return (
    <>
      <div className="container-fluid p-3 bkg_transp justify-content-center">
        <Saludo greeting={"Bienvenido a nuestra tienda"} />
        {Object.keys(items).length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
        ) : (
          <ItemList items={items} categoria={id} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
