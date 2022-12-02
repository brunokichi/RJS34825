import React, { useState, useEffect } from "react";

import Saludo from "../Saludo/Saludo";

import ItemList from "../ItemList/ItemList";

import productos from "../Productos/productos.json";

import "./itemlistcontainer.css";

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);


  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(productos), 2000);
    })

    promesa.then((res) => {
      setItems(res);
    })
    
  },[items])

  return (
    <>
      <div className="container-fluid p-3 bkg_transp">
        <Saludo greeting={"Bienvenido a nuestra tienda"} />
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
