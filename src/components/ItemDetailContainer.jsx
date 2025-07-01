
import { getProducts } from '../mock/AsyncService'; // o un getProductById()
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent'; // Componente de carga
import { collection, doc, getDoc } from 'firebase/firestore';
import {db} from '../service/firebase'; // Importamos la base de datos de Firebase

const ItemDetailContainer=()=>{
  const { itemId } = useParams(); // 👈 obtenemos el id desde la URL
  const [item, setItem] = useState([]); // 👈 inicializamos el estado del producto como un array vacío
  const [invalid,setInvalid] = useState(false); // Para manejar el caso de producto no encontrado
  const [cargando, setCargando] = useState(false);


  // const[detalle, setDetalle] = useState({}); // Para almacenar el detalle del producto

//FIREBASE
useEffect(() => {
setCargando(true); // Inicia el estado de carga
//conectarnos con nuestra colleccion
const productsCollection = collection(db,"products"); // Simulamos la llamada a la colección de productos


//crear una referencia al doc que queremos traer

const docRef= doc(productsCollection, itemId); // Obtenemos el documento específico por ID

//VERSION CORTA
// const docRef=doc{dc, "products", itemId}; // Obtenemos el documento específico por ID



//traer un
getDoc(docRef)
  .then((res) => {
    //limpiar datos para poder utilizar
  if(res.data()){
setItem({...res.data(), id:res.id})
  }else{
setInvalid(true); // Si no hay datos, marcamos como inválido
  }

  })
  .catch((error) => console.log(error))
  .finally(() => setCargando(false)); // Termina de cargar, sea éxito o error


},[])














  //PROMESA
  //usando la misma premisa que el ItemListContainer
  // useEffect(() => {
  //   setCargando(true); // Inicia el estado de carga
  //   // Reemplazamos getItem() por un filtrado real
  //   getProducts().then((productos) => {
  //     const productoEncontrado = productos.find((prod) => prod.id === itemId);
  //     setItem(productoEncontrado);
  //   }).finally(() => setCargando(false));
  // }, [itemId]);


  if(invalid){
    return(
<div>
<h2>Producto no existente🤨...</h2>
<Link className='btn btn-dark'></Link>

</div>

    )
  }

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

}

export default ItemDetailContainer;

