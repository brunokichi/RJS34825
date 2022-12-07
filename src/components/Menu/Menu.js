import React from "react";

import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {
  return (
    <div>
        <div className="btn-group">
            <MenuItem to={"/"}  title={"Inicio"} />
            <MenuItem to={"/category/libros"} title={"Libros"} />
            <MenuItem to={"/category/juegos"} title={"Juegos de mesa"} />
            <MenuItem to={"/category/peliculas"} title={"Películas"} />
        </div>
    </div>
  );
};

export default Menu;
