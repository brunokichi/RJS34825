import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import { CartContext } from "../../context/CartContext";



const CartList = ({ items }) => {

  const { cart, cartCant, cartCosto, clearCart } = useContext(CartContext);

  return (
    <>
      {Object.keys(cart).length === 0 ? (
        <div className="container-fluid p-3 text-center popp_m">
          <p>Sin productos en el carrito</p>
          <NavLink to={"/item"}>
            <button
              type="button"
              className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
            >
              Volver al inicio
            </button>
          </NavLink>
          
        </div>
      ) : (
        <>
          <div className="row-cols-auto gap-3">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="container-sm">
            <div className="card mb-3 w-100">
              <div className="row g-0">
                <div className="col-md-5">
                  <div className="card-body">
                    <p className="popp_m">Total</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p className="popp_m">{cartCant} productos</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <p className="popp_m text-center">$ {cartCosto}</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="card-body text-center">
                    <img
                      onClick={clearCart}
                      src="../Images/clean.png"
                      type="button"
                      alt="Vaciar carrito"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartList;
