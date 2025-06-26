import React from 'react';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    // Aquí puedes usar el contexto CartContext para acceder a los datos del carrito
   
    // Aquí podrías usar cart para mostrar la cantidad de productos en el carrito
    // Por ejemplo, si quieres mostrar el número de productos en el carrito:  
 const { cart } = useContext(CartContext)
    console.log(cart);
  
    return (
      <div className="cart-widget">
        🛒 <span>3</span>
      </div>
    );
  }
  
  export default CartWidget;
  