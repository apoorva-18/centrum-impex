/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


import event1 from '../assets/event1.png';
import './EventsUpdates.css';

const events = [
  { title: "Name of the event", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { title: "Name of the event 2", description: "Short description for event 2." },
  { title: "Name of the event 3", description: "Short description for event 3." },
  { title: "Name of the event 4", description: "Short description for event 4." },
];

const images = [
  event1,
  event1,
  event1,
];
const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </div>
  );
  
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowLeft} size="1x" />
    </div>
  );

const EventsUpdates = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setSlideIndex(next),

  };

  return (
    <section className="events-section">
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false}}

      >
        <div className="update-head">
        <h2 className="events-heading">
          EVENTS <span className="highlight">&</span> UPDATES
        </h2>
        <p className="para">With knowledge of Polish as well as Indian markets, we are able to supply the right quality of products at right prices to our customers. With knowledge of Polish as well as Indian markets, we are able to supply the right quality of products at right prices to our customers</p>
        </div>
      </motion.div>

      <div className="events-container">
        {/* Left Accordion */}
        <motion.div 
          className="events-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {events.map((event, index) => (
            <div 
              key={index}
              className={`event-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="event-title">
                <h3>{event.title}</h3>
                <span>{index === activeIndex ? '-' : '+'}</span>
              </div>
              {index === activeIndex && (
                <>
                  <p className="event-description">{event.description}</p>
                  <a href="#" className="learn-more">Learn More</a>
                </>
              )}
            </div>
          ))}
        </motion.div>

        {/* Right Image Slider */}
        <motion.div 
          className="events-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          
          <Slider {...sliderSettings} className="event-slider">
            {images.map((img, idx) => (
              <div key={idx} className="slide">
                <img src={img} alt={`event-${idx}`} />
              </div>
            ))}
          </Slider>

          <div className="slider-bottom">
          <div className="slider-page">
            {String(slideIndex + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsUpdates;
