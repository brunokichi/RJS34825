import React from 'react';

const itemDetail = ({itemDetail}) => {
    return (
        <>
            <div className="card-body p-0 text-center">
                <p className="popp_s font_espac1 mb-1">{itemDetail.titulo}</p>
                <p className="popp_s font_autor font_espac1 mb-0">{itemDetail.autor}</p>
                <p className="popp_s font_autor font_espac1 mb-0">{itemDetail.lanzamiento}</p>
            </div>
        </>
    );
}

export default itemDetail;