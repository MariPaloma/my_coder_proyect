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

import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from '../assets/GatoPlata.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <p className="logo-text">Gato Platense</p>
      </div>
<ul className="nav-links">
  <li><Link to="/"></Link></li>
    <li><Link to="/más-vendidos">+ Vendidos✨</Link></li>
  <li><Link to="/categoria/libreria">Librería</Link></li>
  <li><Link to="/categoria/bazar">Bazar</Link></li>
  <li><Link to="/ofertas">Ofertas</Link></li>
    <li><Link to="/productos">Ver Todo</Link></li>

</ul>


      <CartWidget />
    </nav>
  );
}

export default NavBar;
