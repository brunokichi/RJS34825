import React, { useContext }  from 'react';

import { NavLink } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cartCant } = useContext(CartContext);

    return (
        <div>
            <NavLink to={"/cart"}>
                
                <img src="../Images/cart_full.png" alt="Carrito"/>
                <span className="badge text-bg-success me-1">{cartCant}</span>
                
            </NavLink>
        </div>
    );
  };
  
export default CartWidget;