import React from 'react';

import './cartwidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className="cartwidget" src={require('../Images/cart.jpg')} alt="Imagen carrito"/>
            <button type="button" class="btn btn-outline-danger me-1" disabled>4</button>
        </div>
    );
  };
  
export default CartWidget;