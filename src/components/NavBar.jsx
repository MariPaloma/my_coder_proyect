/*import CartWidget from "./CartWidget";
import Logo from '../assets/GatoPlata.png';

function NavBar() {
  return (
    <nav className="navbar">
   <div className="logo">
  <img src={Logo} alt="Logo" className="logo-image" />
  <p className="logo-text">Gato Platense</p>
</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
/*/

import Logo from '../assets/GatoPlata.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </NavLink>
        <p className="logo-text">Gato Platense</p>
      </div>
<ul className="nav-links">
    <li><NavLink to="/category/más-vendidos">+ Vendidos✨</NavLink></li>
  <li><NavLink to="/category/libreria">Librería</NavLink></li>
  <li><NavLink to="/category/bazar">Bazar</NavLink></li>
  <li><NavLink to="/category/ofertas">Ofertas</NavLink></li>
    <li><NavLink to="/category/productos">Ver Todo</NavLink></li>

</ul>


      <CartWidget />
    </nav>
  );
}

export default NavBar;
