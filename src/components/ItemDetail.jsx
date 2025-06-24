
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="card" style={{ width: '25rem', margin: '20px auto' }}>
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Precio: ${item.price}</p>
        <p className="card-text">Categoría: {item.category}</p>
        <p className="card-text">Stock: {item.stock} unidades</p>
        <ItemCount stock={item.stock} />

        
      </div>
    </div>
  );
};

export default ItemDetail;
