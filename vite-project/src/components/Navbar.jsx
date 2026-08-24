import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">GestorApp</span>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/empleados">Empleados</Link>
        <Link to="/nuevo">Nuevo Empleado</Link>
      </div>
    </nav>
  );
}

export default Navbar;
