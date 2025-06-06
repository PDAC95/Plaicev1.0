import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './Header.css';

const Header = () => {
  const { favoritesCount } = useFavorites();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1><Link to="/">Place</Link></h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/favorites" className="favorites-link">
                <span className="favorites-icon">❤️</span>
                Favorites
                {favoritesCount > 0 && (
                  <span className="favorites-count">{favoritesCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;