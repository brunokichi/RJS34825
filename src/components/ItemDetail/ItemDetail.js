import React, { useState, useContext } from "react";

import { CartContext } from '../../context/CartContext';

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ itemDetail }) => {

  const { addToCart } = useContext(CartContext);

  const addItem = (ev) => {
    ev.preventDefault();
    addToCart(itemDetail, cantidad);
  };

  const [cantidad, setCantidad] = useState(1);

  const itemCountHandler = (key) => {
    setCantidad(key);
  };

  return (
    <>
      <div className="col" key={itemDetail.id}>
        <div className={`card prod_card ${itemDetail.classadicional} p-1 mb-1`}>
          <img
            loading="lazy"
            src={itemDetail.imagen}
            className="img_sombra img_opac mb-1"
            alt={`Portada ${itemDetail.titulo}`}
          />
          <div className="card-body p-0 text-center">
            <p className="popp_s font_espac1 mb-1">{itemDetail.titulo}</p>
            <p className="popp_s font_autor font_espac1 mb-0">
              {itemDetail.autor}
            </p>
            <p className="popp_s font_autor font_espac1 mb-0">
              {itemDetail.lanzamiento}
            </p>
          </div>
          <div className="card-footer p-1 mb-0 text-center">
            <p className="popp_s font_precio mb-1">$ {itemDetail.precio}</p>
            <ItemCount onChange={itemCountHandler} stock={itemDetail.stock} cantidad={cantidad} />
            <button
              type="button"
              className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
              onClick={addItem}
            >
              Sumar al carrito
            </button>
            <p className="popp_s font_precio mb-1">
              Stock: {itemDetail.stock} uds
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
