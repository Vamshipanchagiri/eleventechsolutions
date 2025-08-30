import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '@/config';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';

const ServiceModal = ({ service, onClose, onPrev, onNext }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl bg-white text-black rounded-lg shadow-2xl overflow-hidden texture-overlay"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12 relative corner-accent text-black">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors">
              <X size={24} />
            </button>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{service.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.details}</p>

            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
              <button onClick={onPrev} className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Prev</span>
              </button>
              <button onClick={onNext} className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors group">
                <span className="text-sm font-medium">Next</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


const ServicesSection = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

    const openServiceModal = (index) => setSelectedServiceIndex(index);
    const closeServiceModal = () => setSelectedServiceIndex(null);
    const nextService = () => setSelectedServiceIndex((prev) => (prev + 1) % services.length);
    const prevService = () => setSelectedServiceIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <>
    <section id="services" className="py-24 sm:py-32 px-6 bg-white geometric-pattern">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Our Core Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Solutions designed to elevate your business in the digital age.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onClick={() => openServiceModal(index)}
                  className="cursor-pointer h-full"
                >
                  <div className="relative h-full p-8 bg-gray-50/50 border border-gray-200/80 rounded-lg shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-300 overflow-hidden corner-accent text-black card-border-glow">
                    <h3 className="text-2xl font-bold tracking-tight mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="absolute bottom-4 right-4 text-gray-300 group-hover:text-black transition-colors duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <AnimatePresence>
        {selectedServiceIndex !== null && (
            <ServiceModal 
                service={services[selectedServiceIndex]} 
                onClose={closeServiceModal}
                onNext={nextService}
                onPrev={prevService}
            />
        )}
    </AnimatePresence>
    </>
  );
};

export default ServicesSection;