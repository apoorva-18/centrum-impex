/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './WorkWithUs.css'; // we'll create this

const workItems = [
  {
    title: "KNOWLEDGE OF LOCAL MARKETS & LARGE NETWORK BASE",
    description: "With knowledge of Polish as well as Indian markets, we are able to supply the right quality of products at right prices to our customers",
  },
  {
    title: "SMOOTHER DELIVERY OF PRODUCTS",
    description: "Our sales team ensures that your consignments are dispatched in a timely manner",
  },
  {
    title: "CUSTOMER SUPPORT",
    description: "Our customer service team is available 24*7 to help you with your doubt and queries",
  },
];

const WorkWithUs = () => {
  return (
    <section className="workwithus-section">
        <motion.div
         className="workwithus-div"
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: false }}>
        <h2 className="workwithus-heading">WORK WITH US</h2>
        </motion.div>
      
      <motion.div className="work-cards"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}>
        {workItems.map((item, index) => (
          <div key={index} className="work-card">
            <div className="yellow-line"></div>
            <div className="work-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="contact-btn-wrapper">
        <button className="contact-btn">CONTACT US</button>
      </div>
    </section>
  );
};

export default WorkWithUs;
