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

            <div key={compra.id} style={{width:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'2rem'}}>
              <h3>{compra.title}</h3>   
                 </div>  
          ))




          }
          </div>
{/* mostrar el total a pagar y la opción de borrar todo el carrito y terminar la compra */}

<span> Total sin impuestos: $ {cartTotal()},00 </span>
<span>Total con impuestos nacionales: $ {totalConImpuestosNacionales()},00</span>


 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'2rem'}}> {/*//div de cierre del carrito */}
<button className='btn btn-danger'>Borrar</button>
<button className='btn btn-dark'>Terminar compra</button>
   </div>

{/*//El div de abajo es del return: */}
    </div>
  )
}


export default CartView