import {useState} from 'react'
//importaciones

const ItemCount = ({stock, onAdd}) => {
    //logicas, funciones, hooks

    //DECLARACIÓN DEL HOOK
    const [cantidad, setCount] = useState(0);

    const restar = () => {
if (cantidad > 0) {
    

        setCount(cantidad - 1);
        }
    }
    const sumar = () => {
        if (cantidad < stock) {
            setCount(cantidad + 1);
        }
            
 
   
    }
    
    const comprar = () => {
onAdd(cantidad);
    }
 return (
  <div>
    <div className="item-count" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <button className="btn btn-danger" onClick={restar}>-</button>
      <span style={{ color: 'black', fontSize: '1.5rem' }}>{cantidad}</span>
      <button className="btn btn-success" onClick={sumar}>+</button>
    </div>
    <div style={{ marginTop: '10px' }}>
      <button className="btn btn-primary" onClick={comprar}>Agregar al carrito</button>
    </div>
  </div>
  )
}

//exportamos el componente
export default ItemCount