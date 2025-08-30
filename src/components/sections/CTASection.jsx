import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-24 sm:py-32 px-6 bg-black text-white overflow-hidden dark-texture-overlay">
            <motion.div 
                className="absolute -top-16 -left-16 w-64 h-64 border-2 border-white/10 rounded-full animate-float"
            />
            <motion.div 
                className="absolute -bottom-24 -right-16 w-80 h-80 bg-white/5 rounded-full animate-float-delayed"
            />

            <div className="relative max-w-4xl mx-auto text-center z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Ready to Build the Future?
                </motion.h2>
                <motion.p
                    className="max-w-2xl mx-auto text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let's turn your ideas into reality. Partner with us to create powerful, scalable, and innovative solutions that set you apart.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={scrollToContact}
                        className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold tracking-wide overflow-hidden hover:bg-gray-200 transition-colors duration-300 rounded-md corner-accent text-black"
                    >
                        <span className="relative z-10">Start a Project</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
