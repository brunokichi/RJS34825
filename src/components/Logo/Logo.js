import React from 'react';

import './logo.css';

const Logo = () => {
    return (
        <div>
            <img className="logo ms-1" src={require('../Images/logo.png')} alt="Logo"/>
        </div>
    );
  };
  
export default Logo;