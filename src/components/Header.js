import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🎸</span>
          <span className="logo-text">Setlist Hub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header; 