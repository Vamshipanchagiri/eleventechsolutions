import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Cloud, Shield, Smartphone, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden radial-gradient-bg">
      <div className="absolute inset-0 z-0">
        <img  class="w-full h-full object-cover opacity-20" alt="Abstract futuristic technology background with glowing lines and circuits" src="https://images.unsplash.com/photo-1560510368-611be7ca72cd" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center section-container"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
        >
          <span className="block">Elevate Your</span>
          <span className="block gradient-text">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          We craft bespoke IT solutions that fuse innovation with strategy, driving your business into the future.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-7 text-lg font-semibold rounded-full shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;