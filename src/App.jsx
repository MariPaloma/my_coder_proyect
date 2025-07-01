import { useState } from 'react'
import reactLogo from './assets/react.svg' 


import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
  
  <Routes>
        <Route path='/' element={<MainLayout greeting="Bienvenidos a mi app" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoría:" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer /* greeting="¡Top ventas!" */ />} /> 
      <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />


        {/* <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Productos por categoría" />} /> */}

      </Routes>

    </CartProvider>
    </BrowserRouter>
  
  )
}
function MainLayout() {
  return (
    <div className="main-layout">
    
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
   
    </div>
  );
}


export default App


