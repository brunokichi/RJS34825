import React from 'react';

import './saludo.css';

const Saludo = ({ greeting}) => {
    return (
        <h2 className="display-5 text-center">{greeting}</h2>
    );
  };
  
export default Saludo;