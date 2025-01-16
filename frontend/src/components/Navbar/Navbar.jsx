import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Recipe<span>Book</span>
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-link" onClick={toggleMenu}>
              Favorites
            </Link>
          </li>
          <li className="nav-button">
            <Link to="/login" className="btn login-btn">
              Login
            </Link>
          </li>
          <li className="nav-button">
            <Link to="/signup" className="btn signup-btn">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
