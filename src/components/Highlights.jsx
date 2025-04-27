import React from 'react';
import './Highlights.css';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
const highlights = [
    {
      icon: l1,
      title: 'ENVIRONMENTAL',
      text: `Importer & Exporter of various commodities between Europe & Asia`,
    },
    {
      icon: l2,
      title: 'ENVIRONMENTAL',
      text: `Importer & Exporter of various commodities between Europe & Asia`,
    },
    {
      icon: l3,
      title: 'ENVIRONMENTAL',
      text: `Importer & Exporter of various commodities between Europe & Asia`,
    },
  ];
  
  const Highlights = () => {
    return (
      <section className="highlights-section">
        <div className="highlight-wrapper">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="icon-text-wrapper">
                <img src={item.icon} alt="highlight-icon"/>
                <div className="text-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>       
              </div>
              {index !==highlights.length - 1 && <div className="divider"/>}  
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Highlights;
  