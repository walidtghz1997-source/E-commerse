import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiShoppingBag,
  FiX,
  FiMenu,
} from 'react-icons/fi';

import './Header.css';

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span>TGHZLUX</span>
        <small>ELEVATE YOUR STYLE . PREMIUM FASHION</small>
      </Link>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/order" onClick={closeMenu}>Order</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>

      <div className="navbar-actions">
        <Link to="/order" className="navbar-bag">
          <FiShoppingBag />
          <span>({props.cartCount})</span>
          <span className="navbar-cart-total">
            {props.cartTotal} MAD
          </span>
        </Link>

        <button
          type="button"
          className="navbar-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
