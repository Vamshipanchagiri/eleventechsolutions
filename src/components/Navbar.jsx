import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'whyus' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#0A0A0A]/80 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            <span className="text-3xl font-bold text-white tracking-tight">
              Eleventech Solutions
              <span className="text-violet-500">.</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white transition-all duration-300">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-center py-2 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white text-lg py-3">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;