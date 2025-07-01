import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList'; //
import LoaderComponent from './LoaderComponent';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../service/firebase'; // Importamos la base de datos de Firebase
import { RiEye2Fill } from 'react-icons/ri';

const ItemListContainer=({ greeting })=> {
  const { categoryId } = useParams(); 
  const [data, setData] = useState([]); 
const [loading, setLoading] = useState(false); // cargar
const [error, setError] = useState(null);     // error

//FIREBASE

useEffect(() => {
 setLoading(true); // Inicia el estado de carga
//conectarnos con nuestra colleccion
const productsCollection = collection(db,"products"); // Simulamos la llamada a la colección de productos
getDocs(productsCollection)
.then((res)  =>{
//limpiar datos para poder utilizar
const list =  res.docs.map((doc) =>{
return{
...doc.data(), // obtenemos los datos del documento
id:doc.id
}
})
setData(list);

})
.catch((error)=> console.log(error))
.finally(() => setLoading(false)); // Termina de cargar, sea éxito o error)

}, [])










//PROMESA
//   useEffect(() => {
//     setLoading(true); // Inicia el estado de carga
//     getProducts()
//       .then((respuesta) => {
// if(categoryId) {
//           // Filtrar productos por categoría si categoryId está presente
//         setData(respuesta.filter((prod)=> prod.category === categoryId));
//  } else{
//   //no filtro
//   setData(respuesta);
//  }
//       })

//       .catch((err) => {
//       console.error("Error al obtener productos", err);
//       setError("Ocurrió un error al cargar los productos.");})
//     .finally(() => {
//       setLoading(false); // Termina de cargar, sea éxito o error
//     });
// }, [categoryId]);

 // console.log('Datos obtenidos:', data);

  //Vista normal cuando todo salió bien
  return (
  
    <>
     { 

     loading ? <LoaderComponent/> 
     :<div className='item-list-container'>

          <h3>{greeting} {categoryId && <span>{categoryId}</span>}</h3>


      <ItemList data={data} /> 
    </div>
}
    </>

     )
}



export default ItemListContainer;

  
  