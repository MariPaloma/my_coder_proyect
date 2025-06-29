import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncService'; // o un getProductById()
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import LoaderComponent from './LoaderComponent'; // Componente de carga

function ItemDetailContainer() {
  const { itemId } = useParams(); // 👈 obtenemos el id desde la URL
  const [item, setItem] = useState([]); // 👈 inicializamos el estado del producto como un array vacío
  const [cargando, setCargando] = useState(false);
 

  // const[detalle, setDetalle] = useState({}); // Para almacenar el detalle del producto

  useEffect(() => {
    setCargando(true); // Inicia el estado de carga
    // Reemplazamos getItem() por un filtrado real
    getProducts().then((productos) => {
      const productoEncontrado = productos.find((prod) => prod.id === itemId);
      setItem(productoEncontrado);
    }).finally(() => setCargando(false));
  }, [itemId]);

 return (
  <div>
    {cargando 
      ? <LoaderComponent /> 
      : item 
        ? <ItemDetail item={item} /> 
        : <p style={{ color: "red" }}>Producto no encontrado</p>
    }
  </div>
);
s
}

export default ItemDetailContainer;

