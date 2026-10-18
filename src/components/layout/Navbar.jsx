import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h2 className="navbar-brand">React Store</h2>
        <nav className="navbar-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </nav>
        <button
          className="search-toggle"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
        {searchOpen && (
          <div className="search-overlay">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search products..."
                className="search-input"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <button className="search-close" onClick={() => setSearchOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
