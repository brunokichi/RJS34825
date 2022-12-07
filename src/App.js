import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item" element={<ItemDetailContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
