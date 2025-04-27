/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import bgimage from '../assets/image.png';
import I4 from '../assets/I4.png';
import I5 from '../assets/I5.png';
import I6 from '../assets/I6.png';
import I7 from '../assets/I7.png';
import './GreenerTomorrow.css';

const GreenerTomorrow = () => {
  return (
    <section className="greener-section" id="greener">
      {/* Background Image */}
        <div className="bg-image">
            <img src={bgimage} alt="" />
        </div>

      <div className="greener-background">
        <motion.div 
          className="greener-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >           
          <div className="greener-columns">
            <div className="column">
              <div className="icon-text">
                <img src={I4} alt="I4" />
                <div>
                  <h4>Energy-Efficient Recycling</h4>
                  <p>Minimizing emissions, our recycling cuts carbon footprint through efficient energy use.</p>
                </div>
              </div>

              <div className="icon-text">
                <img src={I5} alt="I5" />
              <div>
                  <h4>Circular Economy in Action</h4>
                  <p>Recycled materials significantly lower greenhouse gases, promoting circular sustainability.</p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="icon-text">
                <img src={I6} alt="I6" />

                <div>
                  <h4>Sustainable Sourcing and Transport</h4>
                  <p>Eco–friendly practices cut emissions, ensuring responsible, sustainable business operations.</p>
                </div>
              </div>

              <div className="icon-text">
                <img src={I7} alt="I7" />

                <div>
                  <h4>Landfill Avoidance</h4>
                  <p>Diverting scrap lessens emissions, reducing environmental impact and carbon footprint.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Heading */}
          <div className="greener-bottom-text">
            <h5>CONTRIBUTING TO A</h5>
            <h1>GREENER TOMORROW</h1>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default GreenerTomorrow;
