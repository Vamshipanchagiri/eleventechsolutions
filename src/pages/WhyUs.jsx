import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, Trophy, Zap, Heart } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    { icon: Star, title: 'Proven Expertise', description: 'Years of experience and deep technical knowledge across multiple domains.' },
    { icon: Zap, title: 'Cutting-Edge Tech', description: 'We leverage the latest technology trends to deliver innovative and future-proof solutions.' },
    { icon: Users, title: 'Client-Focused', description: 'Your success is our priority. We work closely with you to exceed expectations.' },
    { icon: Clock, title: 'Timely Delivery', description: 'We deliver projects on time without compromising quality, respecting your schedule.' },
    { icon: Heart, title: 'Passionate Team', description: 'Our dedicated professionals love what they do, and it shows in our work.' },
    { icon: Trophy, title: 'Tangible Results', description: 'We are committed to delivering solutions that provide measurable business value.' },
  ];

  return (
    <section id="whyus" className="section-padding bg-[#0A0A0A]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Partner With <span className="gradient-text">Eleventech?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our commitment to innovation, quality, and client success makes us the ideal technology partner for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <reason.icon className="h-10 w-10 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;