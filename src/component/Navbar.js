import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">ImpressMe</h1>
      <div className="nav-links">
        <NavLink to="/" className="link" activeclassname="active">Home</NavLink>
        <NavLink to="/about" className="link" activeclassname="active">About</NavLink>
        <NavLink to="/contact" className="link" activeclassname="active">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

