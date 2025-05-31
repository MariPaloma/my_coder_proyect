import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList'; //

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    getProducts()
      .then((respuesta) => setData(respuesta))
      .catch((error) => console.error('Error al obtener productos', error));
  }, []);

  console.log('Datos obtenidos:', data);
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

  
  