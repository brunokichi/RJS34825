import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import Saludo from "../Saludo/Saludo";

import CartList from "../CartList/CartList";

const Cart = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="container-fluid p-3 bkg_transp justify-content-center">
        <Saludo greeting={"Carrito de compras"} />
        
          <div>
            <CartList items={cart} />
          </div>
        
      </div>
    </>
  );
};

export default Cart;