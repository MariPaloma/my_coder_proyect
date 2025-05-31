import {useState} from 'react'
//importaciones

const ItemCount = ({stock}) => {
    //logicas, funciones, hooks

    //DECLARACIÓN DEL HOOK
    const [count, setCount] = useState(1);

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
        <div className="item-count">
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span style={{color: 'white' }}>{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
        <button className="btn btn-primary">Agregar al carrito</button>

    </div>
  )
}

//exportamos el componente
export default ItemCount