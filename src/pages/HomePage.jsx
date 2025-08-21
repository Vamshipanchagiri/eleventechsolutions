import React from "react";
import Home from "./home.jsx";
import About from "./about.jsx";
import Clients from "./clients.jsx";
import Contact from "./contact.jsx";
import Services from "./services.jsx";
import WhyUs from "./whyus.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <Home />
      <About />
      <Services />
      <Clients />
      <WhyUs />
      <Contact />
    </div>
  );
}

export default HomePage;
