import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../context/CartContext';

const CartList = ({items}) => {

    const { cartCant } = useContext(CartContext);

    return (
        <>
            <p className="display-7 text-center">{cartCant} productos cargados</p>
            <div className="row-cols-auto gap-3">
                {items
                    .map((item) => (
                    <CartItem 
                        item={item} 
                        key={item.id} 
                    />
                ))}
            </div>
        </>
    )
}

export default CartList;