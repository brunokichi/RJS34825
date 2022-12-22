import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Saludo from "../Saludo/Saludo";

import ItemList from "../ItemList/ItemList";

import productos from "../Productos/productos.json";

//import { getFirestore } from 'firebase/firestore'

import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(productos), 2000);
    });

    promesa.then((res) => {
      setItems(res);
    });
  }, []);

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
