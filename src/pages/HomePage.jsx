import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import WhyUs from "./WhyUs.jsx";
import Clients from "./Clients.jsx";

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
      <div id="contact" className="bg-gray-100 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="flex items-center justify-center gap-2 mb-2">
          <HiOutlineMail className="text-blue-600" /> 
          <a href="mailto:Info@eleventechsolutions.in" className="text-blue-600">
            Info@eleventechsolutions.in
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <HiOutlineLocationMarker className="text-red-500" />
          Road No. 12, Banjara Hills, Hyderabad, Telangana, India
        </p>
      </div>
    </div>
  );
};

export default HomePage;