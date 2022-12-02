import React from 'react';

import Item from '../Item/Item';

const ItemList = ({items}) => {

    //console.log(items);

    return (
        <>
            <div className="card-group row-cols-auto gap-3">
                { items.map((item) => (
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