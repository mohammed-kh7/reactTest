import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h2 className="navbar-brand">React Store</h2>
        <nav className="navbar-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;