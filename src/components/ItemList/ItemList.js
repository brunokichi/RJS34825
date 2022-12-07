import React from 'react';

import Item from '../Item/Item';

const ItemList = ({items, categoria}) => {

    if (categoria) {
        items = items.filter((cat) => cat.tipo === categoria)
    } 

    return (
        <>
            <p className="display-7 text-center">{items.length} productos disponibles</p>
            <div className="card-group row-cols-auto gap-3">
                {items
                    .map((item) => (
                    <Item 
                        item={item} 
                        key={item.id} 
                    />
                ))}
            </div>
        </>
    )
}

export default ItemList;