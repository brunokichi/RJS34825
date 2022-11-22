import React from "react";

import MenuItem from '../MenuItem/MenuItem';

//import './cartwidget.css';

const Menu = () => {
  return (
    <div>
        <div className="btn-group">
            <MenuItem href={"index.html"} active={"active"} title={"Inicio"} />
            <MenuItem href={""} active={""} title={"Libros"} />
            <MenuItem href={""} active={""} title={"Juegos de mesa"} />
            <MenuItem href={""} active={""} title={"Películas"} />
        </div>
    </div>
  );
};

export default Menu;
