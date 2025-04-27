import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link">HOME</a></li>
          <li><a href="#about" className="nav-link">ABOUT</a></li>
          <li><a href="#product" className="nav-link">PRODUCT</a></li>
        </ul>
        <img src={logo} alt="Centrum Impex" className="logo" />

      </div>

      <button className="contact-btn">CONTACT</button>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
