import React, { useState, useContext, useEffect } from "react";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";

const CartItem = ({ item }) => {
  const { addToCart, remFromCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(item.cantidad);

  useEffect(() => {
    addToCart(item, cantidad);
  }, [cantidad, item, addToCart]);

  const itemCountHandler = (key) => {
    setCantidad(key);
  };

  const remItem = (ev) => {
    ev.preventDefault();
    remFromCart(item);
  };

  return (
    <>
      <div className="container-sm">
        <div className="card mb-3 w-100" key={item.id}>
          <div className="row g-0">
            <div className="col-md-2">
              <img
                loading="lazy"
                src={item.imagen}
                className="img-fluid rounded-start"
                alt={`Portada ${item.titulo}`}
              />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <p className="popp_m font_espac1 mb-1">{item.titulo}</p>
                <p className="popp_m font_espac1 mb-1">{item.autor}</p>
                <p className="popp_m font_espac1 mb-1">{item.lanzamiento}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-body">
              <p className="popp_m font_espac1 mb-1 text-center">Unidades</p>
                <ItemCount
                  onChange={itemCountHandler}
                  stock={item.stock}
                  cantidad={cantidad}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-body text-center">
                <p className="popp_m font_espac1 mb-1">
                  Precio unitario
                  <br />$ {item.precio}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-body text-center">
                <p className="popp_m font_espac1 mb-1">
                  Precio total
                  <br />$ {item.precio * item.cantidad}
                </p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body text-center">
                <img onClick={remItem} src="../Images/trash.png" type="button" alt="Eliminar del carrito"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
