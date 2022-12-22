import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import Saludo from "../Saludo/Saludo";

import CartList from "../CartList/CartList";

const Cart = () => {
  //const [itemsCart, setItemsCart] = useState([]);

  const { cart, clearCart } = useContext(CartContext);

  /*useEffect(() => {
        const promesa = new Promise((resolve) => {
          setTimeout(() => resolve(cart), 2000);
        });
    
        promesa.then((res) => {
          setItemsCart(res);
        });
      }, []);*/

  return (
    <>
      <div className="container-fluid p-3 bkg_transp justify-content-center">
        <Saludo greeting={"Carrito de compras"} />
        {Object.keys(cart).length === 0 ? (
          <div className="d-flex justify-content-center">
            Sin productos en el carrito
          </div>
        ) : (
          <div>
            <CartList items={cart} />
            <button
              type="button"
              className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
