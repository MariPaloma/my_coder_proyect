import CartWidget from "./CartWidget";
import Logo from '../assets/GatoPlata.jpg';

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo">MiTienda
    <img src={Logo} alt="Logo" className="logo-image" />

    </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
