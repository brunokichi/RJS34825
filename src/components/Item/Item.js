import React from 'react';

import { NavLink } from 'react-router-dom';

import './item.css';

const Item = ({item}) => {
    return (
        <>
            <div className="col" key={item.id}>
                <div className={`card prod_card ${item.classadicional} p-1 mb-1 h-100`}>
                    <NavLink to={`/item/${item.id}`}>
                        <img loading="lazy" src={item.imagen} className="img_sombra img_opac mb-1"
                        alt={`Portada ${item.titulo}`} />
                    </NavLink>
                    <div className="card-body p-0 text-center">
                        <p className="popp_s font_espac1 mb-1">{item.titulo}</p>
                    </div>
                    <div className="card-footer p-1 mb-0 text-center">
                        <NavLink to={`/item/${item.id}`}>
                            <button type="button" className="btn btn-primary btn-sm">Ver detalle</button>
                        </NavLink>
                        <p className="popp_s font_precio mb-1">
                            $ {item.precio}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;