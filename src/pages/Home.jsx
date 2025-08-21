import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Eleventech Solutions - Innovating the Digital Future</title>
        <meta name="description" content="Welcome to Eleventech Solutions, Hyderabad’s trusted partner in digital transformation. We specialize in providing innovative technology services that empower businesses to grow, scale, and adapt." />
        <meta property="og:title" content="Eleventech Solutions - Innovating the Digital Future" />
        <meta property="og:description" content="Welcome to Eleventech Solutions, Hyderabad’s trusted partner in digital transformation. We specialize in providing innovative technology services that empower businesses to grow, scale, and adapt." />
      </Helmet>

      <div className="pt-20">
        <section className="relative bg-gray-50 section-padding min-h-screen flex items-center">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="font-poppins font-extrabold text-5xl lg:text-7xl leading-tight">
                    <span className="text-blue-gradient">Eleventech</span>
                    <br />
                    <span className="text-gray-800">Solutions</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Innovating the Digital Future, One Solution at a Time.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                    Welcome to Eleventech Solutions, Hyderabad’s trusted partner in digital transformation. We specialize in providing innovative technology services that empower businesses to grow, scale, and adapt in today’s fast-paced digital economy.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ScrollLink to="services" smooth={true} offset={-80} duration={500}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </ScrollLink>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <img 
                  alt="A modern office with a team collaborating on a project"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
