import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Wedgewood
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={toggleMenu}>About</Link>
          <Link to="/programs" className="navbar-link" onClick={toggleMenu}>Programs</Link>
          <Link to="/testimonials" className="navbar-link" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/contact" className="navbar-link" onClick={toggleMenu}>Contact</Link>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="navbar-apply-btn" onClick={toggleMenu}>Apply</a>
        </div>
        
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
