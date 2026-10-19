import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue('');
      setMobileMenuOpen(false);
    } else {
      navigate('/products');
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <h2 className="navbar-brand">React Store</h2>

          {/* Desktop Nav */}
          <nav className="navbar-nav-desktop">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
              Products
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
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

          {/* Mobile: Search icon + Hamburger */}
          <div className="mobile-actions">
            <button
              className="mobile-search-icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Search"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button className="close-button" onClick={closeMobileMenu} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Mobile Search */}
            <form className="mobile-search-form" onSubmit={handleSearch}>
              <div className="mobile-search-wrapper">
                <svg className="mobile-search-icon-input" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search products..."
                  className="mobile-search-input"
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
            <nav className="mobile-nav-links">
              <Link
                to="/"
                className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Home</span>
              </Link>
              <Link
                to="/products"
                className={`mobile-nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span>Products</span>
              </Link>
              <Link
                to="/about"
                className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>About</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
