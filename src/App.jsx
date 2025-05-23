import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import AboutUs from './components/About';
import WhatWeDo from './components/WhatWeDo';
import GreenerTomorrow from './components/GreenerTomorrow';
import WorkWithUs from './components/WorkWithUs';
import EventsUpdates from './components/EventsUpdates';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Highlights />
      <AboutUs/>
      <WhatWeDo/>
      <GreenerTomorrow/>
      <WorkWithUs/>
      <EventsUpdates/>
      <Footer/>
    
      
    </>
  );
}

export default App;
