import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Percent, Star } from 'lucide-react';

const Clients = () => {
  const stats = [
    { number: "150+", label: "Clients Served", icon: <Users className="h-10 w-10 text-blue-600" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-10 w-10 text-blue-600" /> },
    { number: "95%", label: "Retention Rate", icon: <Percent className="h-10 w-10 text-blue-600" /> }
  ];

  const testimonials = [
    {
      name: "CEO, Startup Co.",
      text: "Eleventech Solutions helped us scale our platform with world-class technology.",
      rating: 5
    },
    {
      name: "CTO, IT Firm",
      text: "Professional, reliable, and innovative at every stage of our project.",
      rating: 5
    },
    {
      name: "Marketing Director, E-commerce Brand",
      text: "Their digital marketing strategies doubled our online visibility and sales within six months. Truly remarkable results!",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Client Success Stories</h2>
            <p className="max-w-3xl mx-auto">
              Our success is measured by our clients' success. We are proud of the partnerships we've built and the results we've achieved together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-poppins font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-blue-gradient">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-style p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-poppins font-semibold text-gray-800 text-md">
                    {testimonial.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
