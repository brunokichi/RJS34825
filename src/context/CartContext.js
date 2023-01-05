import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [cartCant, setCartCant] = useState(0);

  const [cartCosto, setCartCosto] = useState(0);

  const updCart = () => {
    setCartCant(cart.reduce((acc, item) => acc + item.cantidad, 0));
    setCartCosto(cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0));
  }

  useEffect(() => {
    updCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const addToCart = (obj, cant) => {
    let itemInCart = cart.find((el) => el.id === obj.id);

    if (cart.find((el) => el.id === obj.id)) {
      const index = cart.findIndex((object) => {
        return object.id === itemInCart.id;
      });
      cart[index].cantidad = cant;
      updCart();
    } else {
      obj.cantidad = cant;
      setCart((cart) => [...cart, obj]);
    }
  };

  const remFromCart = (obj) => {
    let itemInCart = cart.find((el) => el.id === obj.id);

    if (cart.find((el) => el.id === obj.id)) {
      const index = cart.findIndex((object) => {
        return object.id === itemInCart.id;
      });
      cart.splice(index, 1);
      updCart();
    }
  };
  
  const clearCart = () => {
    cart.splice(0);
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, remFromCart, cartCant, cartCosto, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
