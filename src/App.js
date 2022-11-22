import React from 'react';
import './style.css';

import NavBarContainer from './components/NavBarContainer/NavBarContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <div>
      <NavBarContainer />
      <ItemListContainer />
    </div>
  );
}
