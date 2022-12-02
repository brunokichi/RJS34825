import React, { useState } from 'react';

import './itemcount.css';

const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0);
    
    const onRem = () => {
        cantidad > 0 ? ( setCantidad(cantidad - 1) ) : ( setCantidad(cantidad) );
        
    };
    
    const onAdd = () => {
        cantidad < stock ? ( setCantidad(cantidad + 1) ) : ( setCantidad(cantidad) );
    };

    return (
        <div className="d-flex justify-content-between align-items-center popp_s font_precio mb-0 bkg_cantidad">
            <button type="button" className="btn btn-primary btn-sm" onClick={onRem}>-</button>
            {cantidad}
            <button type="button" className="btn btn-primary btn-sm" onClick={onAdd}>+</button>
        </div>
    );
}

export default ItemCount;