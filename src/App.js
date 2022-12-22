import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBarContainer />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item" element={<ItemDetailContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
