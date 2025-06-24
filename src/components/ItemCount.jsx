import {useState} from 'react'
//importaciones

const ItemCount = ({stock}) => {
    //logicas, funciones, hooks

    //DECLARACIÓN DEL HOOK
    const [count, setCount] = useState(0);

    const restar = () => {
if (count > 0) {
    

        setCount(count - 1);
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
            
 
   
    }
    

 return (
  <div>
    <div className="item-count" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <button className="btn btn-danger" onClick={restar}>-</button>
      <span style={{ color: 'black', fontSize: '1.5rem' }}>{count}</span>
      <button className="btn btn-success" onClick={sumar}>+</button>
    </div>
    <div style={{ marginTop: '10px' }}>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>
  )
}

//exportamos el componente
export default ItemCount