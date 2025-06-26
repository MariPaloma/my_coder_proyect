//importar el hook useContext
 import React, {useContext}from 'react';
// importar el componente ItemCount
import ItemCount from './ItemCount';

//importar el contexto que se quiere usar 
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
 /*  const contexto = useContext(CartContext);
  console.log(contexto) */

  const {cart} = useContext(CartContext);
  console.log(cart);

  const onAdd = (count) => {
    console.log(`Agregaste ${count} unidades de ${item.name} al carrito.`);
  }
  return (
    <div className="card" style={{ width: '25rem', margin: '20px auto' }}>
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Precio: ${item.price}</p>
        <p className="card-text">Categoría: {item.category}</p>
        <p className="card-text">Stock: {item.stock} unidades</p>
        <ItemCount stock={item.stock} onAdd= {onAdd} />

        
      </div>
    </div>
  );
};

export default ItemDetail;
