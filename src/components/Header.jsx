import { useState } from "react";
import './Header.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <h1>nullBrains.</h1>
          </div>
          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="btn-text">Sign In</button>
            <button className="btn-primary">Join</button>
          </div>
          <button className="mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
