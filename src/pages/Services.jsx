import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    { icon: Code, title: 'Web Development', description: 'Custom web apps built with modern frameworks to engage users and drive growth.', color: 'from-blue-500 to-cyan-400', iconBg: 'bg-blue-500/20', iconColor: 'text-cyan-300' },
    { icon: Brain, title: 'AI Solutions', description: 'Harness AI to automate processes, gain insights, and create intelligent applications.', color: 'from-violet-500 to-purple-400', iconBg: 'bg-violet-500/20', iconColor: 'text-purple-300' },
    { icon: Cloud, title: 'Cloud Services', description: 'Scalable, secure, and reliable cloud infrastructure to support your business growth.', color: 'from-green-500 to-emerald-400', iconBg: 'bg-green-500/20', iconColor: 'text-emerald-300' },
    { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security to protect your digital assets from evolving cyber threats.', color: 'from-red-500 to-rose-400', iconBg: 'bg-red-500/20', iconColor: 'text-rose-300' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', color: 'from-orange-500 to-amber-400', iconBg: 'bg-orange-500/20', iconColor: 'text-amber-300' },
    { icon: Code, title: 'DevOps', description: 'Streamlining development and operations for faster, more reliable software delivery.', color: 'from-gray-500 to-slate-400', iconBg: 'bg-gray-500/20', iconColor: 'text-slate-300' },
  ];

  return (
    <section id="services" className="section-padding radial-gradient-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive suite of IT solutions designed to transform your business and drive sustainable innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 group transition-all duration-300 hover:border-violet-500/50 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                      {service.title}
                  </h3>
              </div>
              <p className="text-gray-400 mb-6 min-h-[72px]">
                {service.description}
              </p>
              <Button variant="ghost" className="text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;