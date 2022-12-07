import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

import prods from "../Productos/productos.json";

const ItemDetailContainer = () => {
  const [itemDetail, setItemsDetails] = useState([]);

  const { id } = useParams();

  let productoFiltrado = [];

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => resolve(prods), 2000);
    });

    promesa.then((res) => {
      setItemsDetails(res);
    });
  }, [itemDetail]);

  if (id) {
    productoFiltrado = itemDetail.filter((prod) => prod.id == id);
  } else {
    productoFiltrado = itemDetail;
  }

  return (
    <>
      <div className="container-fluid p-3 bkg_transp">
        <div className="card-group row-cols-auto gap-3 justify-content-center">
          {
            Object.keys(productoFiltrado).length === 0 ? (
              <div class="d-flex">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Cargando...</span>
              </div>
            </div>
            ) : (
              productoFiltrado.map((prod) => (
                <ItemDetail itemDetail={prod} key={prod.id} />
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
