import React from "react";

import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, to}) => {
    return (
        <NavLink to={to} className="btn btn-primary">{title}</NavLink>
    );
  };
  
export default MenuItem;
