import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/productos" element={<ItemListContainer greeting="¡Todos los productos!" />} />
        <Route path="/ofertas" element={<ItemListContainer greeting="¡Ofertas destacadas!" />} />
        <Route path="/más-vendidos" element={<ItemListContainer greeting="¡Top ventas!" />} />

        {/* <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Productos por categoría" />} /> */}

      </Routes>
    
    </BrowserRouter>
  )
}
function MainLayout() {
  return (
    <div className="main-layout">
    
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
      <ItemCount stock={12} />
    </div>
  );
}


export default App


