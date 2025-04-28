import React from "react";
import "./Footer.css";
import fb from '../assets/fb.png';
import ld from '../assets/ld.png';
import tw from '../assets/tw.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column contact-form">
          <h3>Let's Connect</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Telephone" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Comment"></textarea>
            <button type="submit" className="contact-button">CONTACT US</button>
          </form>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ferrous Scrap</h3>
          <ul>
            <li>Cast Iron Skull Scrap</li>
            <li>Steel Skull Scrap</li>
            <li>Heavy Melting Scrap</li>
            <li>Plate and Structural Steel Scrap</li>
            <li>Steel Turnings</li>
            <li>Low Alloy Scrap with Ni, Mo & Cr</li>
            <li>Tyre Wire Scrap</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Non Ferrous Scrap</h3>
          <ul>
            <li>Motors Scrap</li>
            <li>Compressor Scrap</li>
            <li>Aluminium Scrap</li>
            <li>Electronic Scrap</li>
          </ul>
        </div>

      </div>

      <div className="social-icons">
        <a href="#"><img className={fb}></img></a>
        <a href="#"><img className={tw}></img></a>
        <a href="#"><img className={ld}></img></a>
      </div>
    </footer>
  );
};

export default Footer;
