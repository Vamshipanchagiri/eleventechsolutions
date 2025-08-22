import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster.jsx';
import Navbar from '@/components/Navbar.jsx';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Services from '@/pages/Services.jsx';
import WhyUs from '@/pages/WhyUs.jsx';
import Contact from '@/pages/Contact.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Eleventech Solutions - Premier IT Services & Technology Solutions</title>
        <meta name="description" content="Eleventech Solutions offers top-tier IT services including custom software development, AI-powered solutions, cloud infrastructure, and robust cybersecurity. Partner with us to elevate your business technology." />
        <meta property="og:title" content="Eleventech Solutions - Premier IT Services & Technology Solutions" />
        <meta property="og:description" content="Eleventech Solutions offers top-tier IT services including custom software development, AI-powered solutions, cloud infrastructure, and robust cybersecurity. Partner with us to elevate your business technology." />
      </Helmet>
      <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans">
        <Navbar />
        <main>
          <Home />
          <About />
          <Services />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;