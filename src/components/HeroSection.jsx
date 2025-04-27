import React from 'react';
import './HeroSection.css';
import vid from '../assets/vid.mp4';



const HeroSection = () => {
  return (
    <section className="hero-container">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1>
          SUPPLIER OF FERROUS &<br />
          NON FERROUS SCRAP FOR<br />
          METALLURGICAL INDUSTRIES
        </h1>
        <p>
          Leading exporter of metallurgical byproducts, ferrous scrap,<br />
          and non–ferrous scraps
        </p>
        <button className="hero-btn">CONTACT US</button>
      </div>
      
    </section>
  );
};

export default HeroSection;
