import React from 'react';

import { Link } from 'react-router-dom';

import './logo.css';

const Logo = () => {
    return (
        <div>
            <Link to={"/"}><img className="logo ms-1" src="../Images/logo.png" alt="Logo"/></Link>
        </div>
    );
  };
  
export default Logo;