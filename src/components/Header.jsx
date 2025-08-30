import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Why Us', path: '#why-us' },
    { name: 'Contact', path: '#contact' },
  ];
  
  const scrollToSection = (e, path) => {
    e.preventDefault();
    const sectionId = path.substring(1);
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 sm:px-8 py-6 text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" onClick={handleHomeClick} className="text-xl tracking-wider uppercase">
            <span className="font-light">ElevenTech</span>
            <span className="font-extrabold">Solutions</span>
          </a>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-10">
           {navLinks.map((item) => (
             <a
                key={item.name}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path)}
                className="relative text-sm font-medium tracking-wider sophisticated-underline hover:text-gray-600 transition-colors duration-300"
              >
                {item.name}
              </a>
          ))}
        </nav>

        <motion.button
          className="md:hidden relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isMenuOpen ? 'x' : 'menu'}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-10 pt-20">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                    <a
                      href={item.path}
                      onClick={(e) => scrollToSection(e, item.path)}
                      className="text-3xl font-light tracking-widest sophisticated-underline"
                    >
                      {item.name}
                    </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
