import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Lightbulb, Users, RefreshCw } from 'lucide-react';

const WhyUs = () => {
  
  const reasons = [
    {
      title: "Proven Client Satisfaction",
      description: "With a 95% client retention rate, our track record speaks for itself. We build lasting partnerships.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Agile & Adaptive Model",
      description: "Our development process is flexible and iterative, ensuring we can adapt to changes and deliver results quickly.",
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "24/7 Support",
      description: "We provide round-the-clock support with dedicated project managers to ensure your operations run smoothly.",
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Commitment to Innovation",
      description: "We are dedicated to exploring new technologies and innovative approaches for your long-term success.",
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Why Choose Us?</h2>
          <p className="max-w-3xl mx-auto">
            Choosing Eleventech Solutions means choosing a technology partner who values innovation, quality, and trust. With over 150+ satisfied clients and 200+ successful projects, our expertise spans across industries and technologies. We prioritize transparency, on-time delivery, and scalable solutions.
          </p>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
          <h2 className="text-blue-gradient">Our Core Strengths</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-style p-8 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="mb-3">
                {reason.title}
              </h3>
              <p className="text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
