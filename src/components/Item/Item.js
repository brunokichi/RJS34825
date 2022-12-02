import React from 'react';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import ItemCount from '../ItemCount/ItemCount';

import './item.css';



const Item = ({item}) => {
    return (
        <>
          <div className="col">
            <div className="card prod_card p-1 mb-1 h-100">
                    <img loading="lazy" src={require(`../Images/${item.imagen}`)} className="img_sombra img_opac mb-1"
                    alt="Portada Titulo" />
                    <div className="card-body p-0 text-center">
                        <ItemDetailContainer id={item.id}/>
                    </div>
                    <div className="card-footer p-1 mb-0 text-center">
                        <p className="popp_s font_precio mb-1">
                            $ {item.precio}
                        </p>
                        <ItemCount stock={item.stock}/>
                        <p className="popp_s font_precio mb-1">
                            Stock: {item.stock} uds
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;