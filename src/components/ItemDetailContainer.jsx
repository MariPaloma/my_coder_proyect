import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncService'; // o un getProductById()
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams(); // 👈 obtenemos el id desde la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // const[detalle, setDetalle] = useState({}); // Para almacenar el detalle del producto

  useEffect(() => {
    // Reemplazamos getItem() por un filtrado real
    getProducts().then((productos) => {
      const productoEncontrado = productos.find((prod) => prod.id === itemId);
      setItem(productoEncontrado);
    }).finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p style={{color:"white"}}>Cargando detalle...</p>;

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p style={{color:"red"}}>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;

