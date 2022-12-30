import React, { useContext, useState, useEffect } from 'react';

import './navbarcontainer.css';

import { CartContext } from "../../context/CartContext";

import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '../Menu/Menu';

const NavBarContainer = () => {

  const { cartCant } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    cartCant > 0 ? setLoading(true) : setLoading(false);
  }, [cartCant]);

  return (
    <>
      <div className="d-flex justify-content-between pt-1">
          <Logo />
          <Menu />
          {loading ? <CartWidget /> : <div><img className="cartwidget" src="../Images/cart_empty.png" alt="Carrito vacio"/></div>}
      </div>
    </>
  );
};

export default NavBarContainer;