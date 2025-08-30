import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gray-50/50">
          <div className="absolute inset-0 architectural-grid opacity-50"></div>
          
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-200/50 rounded-full filter blur-xl animate-float"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-gray-200 rounded-full animate-float-delayed"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          <div className="relative max-w-5xl mx-auto text-center z-10">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="block font-light text-gray-500">Shaping</span>
              <span className="block font-black text-black -mt-2 md:-mt-4">The Digital Future</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg font-normal tracking-wide text-gray-600 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We deliver cutting-edge solutions in Cloud, AI/ML, Cyber Security, and Web3.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={scrollToServices}
                className="group relative px-8 py-4 bg-black text-white font-medium tracking-wide overflow-hidden hover:bg-gray-800 transition-colors duration-300 rounded-md corner-accent text-white"
              >
                <span className="relative z-10">Explore Our Services</span>
              </button>
            </motion.div>
          </div>
            
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            onClick={scrollToServices}
          >
            <div className="scroll-indicator">
              SCROLL
            </div>
          </motion.div>
        </section>
    );
};

export default Hero;
