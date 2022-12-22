import React, { useContext }  from 'react';

import { NavLink } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import './cartwidget.css';

const CartWidget = () => {

    const { cartCant } = useContext(CartContext);

    return (
        <div>
            <NavLink to={"/cart"}>
                <img className="cartwidget" src="../Images/cart.jpg" alt="Imagen carrito"/>
                <button type="button" className="btn btn-danger me-1" disabled>{cartCant}</button>
            </NavLink>
        </div>
    );
  };
  
export default CartWidget;