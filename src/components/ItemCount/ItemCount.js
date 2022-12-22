import React from "react";

import "./itemcount.css";

const ItemCount = ({ onChange, stock, cantidad }) => {
  
  const onRem = () => {
    cantidad > 1 && cantidad--;
    UpdCant(cantidad);
  };

  const onAdd = () => {
    cantidad < stock && cantidad++;
    UpdCant(cantidad);
  };

  const UpdCant = () => {
    onChange(cantidad);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center popp_s font_precio mb-0 bkg_cantidad">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={onRem}
        >
          -
        </button>
        <input
          className="form-control-plaintext popp_s text-center"
          onChange={UpdCant}
          value={cantidad} 
        />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
