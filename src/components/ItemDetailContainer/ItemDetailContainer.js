import React, { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import prods from "../Productos/productos.json";

const ItemDetailContainer = ({ id }) => {
  const [itemDetail, setItemsDetails] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(prods), 2000);
    });

    promesa.then((res) => {
      setItemsDetails(res);
    });
  }, [itemDetail]);

  return (
    <>
      {itemDetail
        .filter((prod) => prod.id === id)
        .map((productoFiltrado) => (
          <ItemDetail itemDetail={productoFiltrado} key={productoFiltrado.id} />
        ))}
    </>
  );
};

export default ItemDetailContainer;
