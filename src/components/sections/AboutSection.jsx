import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-white texture-overlay">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-16">
            About ElevenTech Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3"><Target size={28}/>Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses with transformative technology and innovative software solutions that solve complex challenges, drive growth, and create sustainable value. We are committed to delivering excellence and building long-term partnerships based on trust and mutual success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3"><Eye size={28}/>Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a globally recognized leader in technology and digital innovation, known for our engineering prowess, client-centric approach, and our positive impact on the businesses and communities we serve. We aspire to be at the forefront of the next technological revolution.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3"><Gem size={28}/>Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Agility'].map(value => (
              <div key={value} className="bg-gray-50/50 p-6 rounded-lg border border-gray-200/80 corner-accent text-black">
                <h4 className="font-bold text-xl">{value}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3"><Users size={28}/>Our History</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in Hyderabad, the heart of India's tech hub, ElevenTech Solutions began with a small team of dedicated engineers who shared a common goal: to build exceptional software. From our humble beginnings, we have grown into a dynamic technology partner for businesses of all sizes, expanding our expertise across a wide range of services. Our journey is a testament to our relentless pursuit of innovation and our unwavering commitment to our clients' success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3"><TrendingUp size={28}/>Achievements</h3>
            <div className="space-y-4">
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-200/80">
                <span className="text-4xl font-black text-black">50+</span>
                <p className="text-gray-600">Successfully Delivered Projects</p>
              </div>
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-200/80">
                <span className="text-4xl font-black text-black">98%</span>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-200/80">
                <span className="text-4xl font-black text-black">5</span>
                <p className="text-gray-600">Years of Industry Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;