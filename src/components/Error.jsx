import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
   <div><h5>Escribiste horrible- No hay nada... </h5>
   <img src="gatito-llorando.jpg" alt="perdoname"/>
   <Link className='btn btn-dark' to='/'>Volver a la Home🐾</Link>
   </div>
  );
}

export default Error;