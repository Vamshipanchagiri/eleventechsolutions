import React from "react";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import WhyUs from "./WhyUs.jsx";
import Clients from "./Clients.jsx";
import Contact from "./Contact.jsx";

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

