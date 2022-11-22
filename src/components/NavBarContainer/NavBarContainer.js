import React from 'react';

import './navbarcontainer.css';

import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '../Menu/Menu';

const NavBarContainer = () => {
  return (
    <>
      <div className="d-flex justify-content-between pt-1">
          <Logo />
          <Menu />
          <CartWidget />
      </div>
    </>
  );
};

export default NavBarContainer;