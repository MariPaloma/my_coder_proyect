// Importamos React y el contexto del carrito
import React,{ useContext } from "react";
import { CartContext } from "../context/CartContext"; // Asegúrate de que

//Aca es la lógica de render del carrito
const CartView=()  => {

  const {cart, cartTotal,totalConImpuestosNacionales, clear, removeItem} = useContext(CartContext)
  return (
    <div>
      <h2>Tu carrito🛒</h2>
       <div>
          {/* //adentro del carrito  debe haber un div para recorrer el array dl carrito y mostrar lo que tiene: */}
          {
          cart.map((compra) => (

            <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'2rem'}}>
              <img src={compra.img} alt={compra.name} style={{width: '5rem'}}/> 
              <span>{compra.name}</span> 
              <span>${compra.price}</span>
              <span>{compra.quantity}</span>
              {/* //mostrar el precio total de cada producto */}
              <span>precio total:${compra.price * compra.quantity},00</span>
              <button className="btn btn-danger" onClick={()=> removeItem(compra.id)}>🗑</button>
           
                 </div>  
          ))




          }
          </div>
{/* mostrar el total a pagar y la opción de borrar todo el carrito y terminar la compra */}

<span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'2rem'}}ñ> Total a pagar: $ {cartTotal()},00 </span>
{/* <span>Total con impuestos nacionales: $ {totalConImpuestosNacionales()},00</span> */}


 <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'2rem'}}> {/*//div de cierre del carrito */}
<button className='btn btn-danger' onClick={clear}>Borrar</button>
<button className='btn btn-dark'>Terminar compra</button>
   </div>

{/*//El div de abajo es del return: */}
    </div>
  )
}


export default CartView