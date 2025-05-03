import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="main-layout">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!"  />

    </div>
  );
}



export default App


