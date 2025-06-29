//importar el hook useContext
 import React, {useContext, useState}from 'react';
// importar el componente ItemCount
import ItemCount from './ItemCount';

//importar el contexto que se quiere usar 
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [compra, setCompra] = useState(false);
 /*  const contexto = useContext(CartContext);
  console.log(contexto) */

  const {addItem} = useContext(CartContext);
 

  const onAdd = (cantidad) => {
    setCompra(true);
    console.log(`Agregaste ${cantidad} unidades de ${item.name} al carrito.`);
    //L+OGICA DEL CARRITO CON CONTEXT
    addItem(item, cantidad);
  }

  return (
    <div className="card" style={{ width: '25rem', margin: '20px auto' }}>
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Precio: ${item.price}</p>
        <p className="card-text">Categoría: {item.category}</p>
        <p className="card-text">Stock: {item.stock} unidades</p>
      { compra 
      ? <div style={{width: '80%', display:'flex', justifyContent: 'space-between', allingItems: 'center', margin: '2'}}>
        <Link to='/' className='btn btn-dark'>Seguir Comprando</Link>
        <Link to='/cart' className='btn btn-dark'> Ir al carrito</Link> 
      </div>
      
      :  <ItemCount stock={item.stock} onAdd= {onAdd} />}
        
 </div>
  </div>
  );
};

export default ItemDetail;
