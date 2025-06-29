    import React from "react";
import { Link } from "react-router-dom";
    const EmptyCart = () => {
        return (
            
             <div style={{padding:'2rem'}}>
                <h2>Tu carrito está vacío😢</h2>
                <h4>¡Te invitamos a explorar nuestro sitio!</h4>
                <Link className='btn btn-dark' to="/" >Explorar y comprar👀</Link>
            </div>
        );
    }
export default EmptyCart;