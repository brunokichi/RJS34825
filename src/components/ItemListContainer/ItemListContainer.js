import React from 'react';

import Saludo from '../Saludo/Saludo';

const ItemListContainer = () => {
    return (
      <>
        <div className="container-fluid p-3">
          <Saludo greeting={"Bienvenido a nuestra tienda"}/>
        </div>
      </>
    );
  };
  
  export default ItemListContainer;