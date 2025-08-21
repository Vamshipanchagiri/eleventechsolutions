import React from 'react';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import WhyUs from '@/pages/WhyUs';
import Clients from '@/pages/Clients';
import Contact from '@/pages/Contact';

const HomePage = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;