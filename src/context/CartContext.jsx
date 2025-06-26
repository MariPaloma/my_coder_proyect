import { createContext, useState } from "react";

//Creamos el contexto. con () porque es un método que crea el contexto
//El contexto es un objeto que contiene la información que queremos compartir
export const CartContext = createContext();

//creamos el proveedor del contexto
//El proveedor es un componente que envuelve a los componentes que necesitan acceder al contexto
export const CartProvider= ({children}) => {

   const [cart, setCart] = useState([]);

   //Todas las funciones que vamos a usar para manipular el carrito

/* 
const Cartrovider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    // implementa a funcionalidade para adicionar um produto ao carrinho
  };

  const removeList = () => {
    // implementa a funcionalidade para esvaziar o carrinho
  };

  const deleteItem = (id) => {
    // implementa a funcionalidade para apagar um produto do carrinho
  };
 */
  return (
    <CartContext.Provider value={{cart, setCart}}>
      {/* Proveedor del contexto que envuelve a los hijos */}
      {children}
      
 

    </CartContext.Provider>
  );
} 

// exportamos el proveedor del contexto
