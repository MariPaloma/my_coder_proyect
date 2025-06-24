import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList'; //

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); 
  const [data, setData] = useState([]); 
const [loading, setLoading] = useState(true); // cargar
const [error, setError] = useState(null);     // error


  useEffect(() => {
    getProducts()
      .then((respuesta) => {
if(categoryId) {
          // Filtrar productos por categoría si categoryId está presente
        setData(respuesta.filter((prod)=> prod.category === categoryId));
 } else{
  //no filtro
  setData(respuesta);
 }
      })

          .catch((err) => {
      console.error("Error al obtener productos", err);
      setError("Ocurrió un error al cargar los productos.");
    })
    .finally(() => {
      setLoading(false); // Termina de cargar, sea éxito o error
    });
}, [categoryId]);

  console.log('Datos obtenidos:', data);

 /*  // Mostrar loading
  if (loading) {
    return <p style={{ color: 'white' }}>Cargando productos...</p>;
  } */
if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
}

  // Mostrar error
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  //Vista normal cuando todo salió bien
  return (
    <div className="item-list-container">
      <h3 className="saludo" style={{ fontFamily: 'times new roman' }}>
        {greeting}
      </h3>

      <ItemList data={data} /> 
    </div>
  );
}

export default ItemListContainer;

  
  