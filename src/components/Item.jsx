import React from 'react';

const Item = ({ prod }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={prod.img} className="card-img-top" alt={prod.name} />
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">Precio: ${prod.price}</p>
        <a href="#" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default Item;
