/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import scrapImage from '../assets/scrap.png';  

const AboutUs = () => {
  return (
    <section className="aboutus-section" id="about">
      <div className="aboutus-content">
        <motion.div
          className="aboutus-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className="aboutus-div">
          <h2>ABOUT US</h2>
          <div className="aboutus-div1">
          <p>
            Our company is based out of Warsaw, Poland and is mainly involved in the purchase and trade of different types of Ferrous scrap products for exporting to Asian markets since 2020.
            We are continuously collaborating with various companies in Europe such as Germany, Netherlands, Italy, Poland, UK, Denmark, Bulgaria, etc.
          </p>
          <button className="know-more-btn">KNOW MORE</button>
          </div>
          </div>
        </motion.div>
      </div>

      <motion.img
        src={scrapImage}
        alt="Scrap"
        className="scrap-background"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      />
    </section>
  );
};

export default AboutUs;
