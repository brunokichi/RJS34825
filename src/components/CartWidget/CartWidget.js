import React from 'react';

import './cartwidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className="cartwidget" src="../Images/cart.jpg" alt="Imagen carrito"/>
            <button type="button" className="btn btn-danger me-1" disabled>4</button>
        </div>
    );
  };
  
export default CartWidget;