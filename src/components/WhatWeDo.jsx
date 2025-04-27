/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';  // <--- Important
import Slider from 'react-slick';
import scrap1 from '../assets/scrap1.png';
import scrap2 from '../assets/scrap2.png';

import scrap3 from '../assets/scrap3.png';
import scrap4 from '../assets/scrap4.png';

import './WhatWeDo.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Plate and Structural Steel",
    desc: "Plate and Structural steel scrap (PNS) is a premium...",
    image: scrap1,
  },
  {
    title: "Plate and Structural Steel",
    desc: "Plate and Structural steel scrap (PNS) is a premium...",
    image: scrap2,
  },
  {
    title: "Plate and Structural Steel",
    desc: "Plate and Structural steel scrap (PNS) is a premium...",
    image: scrap3,
  },
  {
    title: "Plate and Structural Steel",
    desc: "Plate and Structural steel scrap (PNS) is a premium...",
    image: scrap4,
  },
];

const WhatWeDo = () => {

  const settings = {
    dots: true,
    infinite:true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: { 
          slidesToShow: 1 ,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="whatwedo-section" id="whatwedo">
      <div className="whatwedo-heading1">
      <motion.h2 
        className="whatwedo-heading"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        WHAT WE DO
      </motion.h2>
      <motion.p 
        className="whatwedo-subtext"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        We mainly deal in Metallurgical Byproducts such as cast iron skulls, steel skulls, tyre wire scraps, and incinerator scraps. We are also dealing in typical grades of scraps such as heavy melting scrap, pns scrap, low alloy steel scrap, steel turnings, and much more.
      </motion.p>
      </div>

      {/* Slick Carousel */}
      <Slider {...settings} className="whatwedo-slider">
        {items.map((item, index) => (
          <div className="whatwedo-card" key={index}>
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title || "Scrap"} />
              {item.title && (
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button>READ MORE</button>
                </div>
              )}
            </div>
          </div>
        ))}
        </Slider>

      
    </section>
  );
};

export default WhatWeDo;
