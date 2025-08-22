import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const values = [
    { icon: Target, title: 'Mission-Driven', description: 'Delivering exceptional IT solutions that drive real business value and digital transformation.' },
    { icon: Lightbulb, title: 'Innovation First', description: 'Embracing cutting-edge tech and innovative approaches to solve complex challenges.' },
    { icon: Users, title: 'Client-Centric', description: 'Your success is our success. We build lasting partnerships based on trust and mutual growth.' },
    { icon: Award, title: 'Commitment to Excellence', description: 'Maintaining the highest standards of quality and professionalism in everything we do.' },
  ];

  return (
    <section id="about" className="section-padding bg-[#0A0A0A]">
      <div className="section-container">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded to bridge the gap between technology and business success, Eleventech has grown from a passionate team of technologists into a leading IT services provider.
            </p>
            <p className="text-lg text-gray-300">
              We believe technology should empower, not complicate. Our journey began with a mission: to make advanced technology accessible and beneficial for organizations of all sizes, pushing boundaries to deliver transformative solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  class="rounded-2xl shadow-2xl shadow-black/30 w-full h-96 object-cover" alt="Diverse team of tech professionals collaborating in a modern office" src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Principles We <span className="gradient-text">Live By</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These core values guide our actions and define our commitment to our clients and our craft.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 mb-6 text-white">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;