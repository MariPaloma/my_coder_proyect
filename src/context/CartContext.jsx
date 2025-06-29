import { createContext, useState } from "react";

//Creamos el contexto. con () porque es un método que crea el contexto
//El contexto es un objeto que contiene la información que queremos compartir
export const CartContext = createContext();

//creamos el proveedor del contexto
//El proveedor es un componente que envuelve a los componentes que necesitan acceder al contexto
export const CartProvider= ({children}) => {

   const [cart, setCart] = useState([]);

   //Todas las funciones que vamos a usar para manipular el carrito



  const addItem = (item, cantidad) => {
    // Agregar un item al carrito para no repetir y sumar cantidades
    // console.log(item, cantidad, 'desde el contexto');
    console.log({...item, quantity: cantidad});//esto es para ver el objeto que se va a agregar al carrito y se llama spread operator
    if(isInCart(item.id)) {
      //si el producto ya está en el carrito, se actualiza la cantidad, se suman cantidades
      //en javacsript no se puede modificar el estado directamente, por eso usamos setCart y con un map
      //lógica de sumar cantidades

      const updatedCart = cart.map((prod) => {
        if(prod.id === item.id) {
          //si el producto ya está en el carrito, se actualiza la cantidad sumando cantidades
          return{...prod, quantity: prod.quantity + cantidad};//esto es para sumar cantidades
        }else{
          //retorna el objeto sin modificar
          return prod

       
         }
      });
    //ACTUALIZA EL CARRITO CON EL NUEVO PRODUCTO/ARRAY  
      setCart(updatedCart)
    
    }else{
      //se agrega el producto nuevo al carrito
      console.log('agregar producto al carrito');
    setCart([...cart, {...item, quantity: cantidad}]);};
     
    }
   

  //borrar el carrito
  const clear = () => {
    setCart([]);//hace que se pueda modificar el estado del carrito
  };

  //eliminar un producto del carrito por completo
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //tiene que devolver un boolean si el producto está en el carrito o no
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);//some es un método de array que devuelve true si al menos un elemento del array cumple la condición, en este caso si el id del producto es igual al id del producto que se está buscando
    //isInCart es una función que verifica si un producto está en el carrito, y la vamos a usar en addItem para evitar que se agregue un producto que ya está en el carrito, y en vez de duplicarse, se suma al que ya existe con esa id
  }
  /* S
  const deleteItem = (id) => {
    // implementa a funcionalidade para apagar um produto do carrinho
  }; */

  return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem /* setCart */}}>
      {/* Proveedor del contexto que envuelve a los hijos */}
      {children}
      
 

    </CartContext.Provider>
  );
} 

// exportamos el proveedor del contexto
