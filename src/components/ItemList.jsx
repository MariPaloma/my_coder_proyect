   import React from 'react'
   import Item from './Item' // Asegúrate de que la ruta sea correcta
   
   const ItemList=( {data} )=>{
     return (
         <div className=''>
{data.map((prod)=> (<Item key={item.id} prod={item}/> ))}

         </div>
     );
   }
   export default ItemList;