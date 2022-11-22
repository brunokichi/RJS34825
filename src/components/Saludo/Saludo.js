import React from 'react';

const Saludo = ({ greeting}) => {
    return (
        <h2 className="display-5 text-center">{greeting}</h2>
    );
  };
  
export default Saludo;