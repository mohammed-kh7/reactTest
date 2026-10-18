import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');
    } else {
      navigate('/products');
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h2 className="navbar-brand">React Store</h2>
        <nav className="navbar-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </nav>
        <form className="navbar-search" onSubmit={handleSearch}>
          <div className="search-wrapper-inline">
            <svg className="search-icon-inline" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="navbar-search-input"
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch(e);
                }
              }}
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
