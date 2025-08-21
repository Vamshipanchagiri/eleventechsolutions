import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Brain, Cloud, Smartphone, Shield, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      shortDesc: "Modern, responsive, and scalable websites.",
      fullDesc: "We design and develop modern, responsive, and scalable websites that help businesses build a strong online identity. Our web solutions integrate speed, SEO, and functionality with creative UI/UX design. Whether it’s a corporate website, e-commerce platform, or custom web app, we ensure your digital presence aligns with your business goals."
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      shortDesc: "Intuitive, cross-platform apps to enhance customer engagement.",
      fullDesc: "Our mobile app team delivers intuitive, cross-platform apps that enhance customer engagement. From concept to launch, we focus on creating user-friendly apps optimized for performance, security, and scalability."
    },
    {
      id: 3,
      title: "Artificial Intelligence Solutions",
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      shortDesc: "Embrace the future with AI-driven automation and insights.",
      fullDesc: "AI is the future, and we help businesses embrace it today. From chatbots and predictive analytics to computer vision and NLP, our AI solutions automate processes and unlock insights that drive smarter decisions."
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      shortDesc: "Seamless cloud migration and streamlined operations.",
      fullDesc: "We enable seamless migration to the cloud, build resilient infrastructures, and streamline operations with DevOps practices. Our cloud-first strategies reduce costs and boost efficiency while ensuring security and scalability."
    },
    {
      id: 5,
      title: "Cybersecurity & Data Protection",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      shortDesc: "Enterprise-grade security to safeguard your digital assets.",
      fullDesc: "Security is at the core of everything we do. We provide enterprise-grade cybersecurity services, including threat detection, vulnerability assessments, and compliance-driven protection strategies to safeguard digital assets."
    },
    {
      id: 6,
      title: "Digital Marketing & Branding",
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      shortDesc: "Strategic campaigns for visibility, credibility, and results.",
      fullDesc: "We help businesses grow with strategic digital marketing campaigns, SEO, social media engagement, and creative branding. Our approach ensures visibility, credibility, and measurable results."
    }
  ];

  const handleServiceClick = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleGetQuote = (serviceName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Quote request for ${serviceName} will be available soon.`,
    });
  };

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
            <h2 className="mb-4">Our Services</h2>
            <p className="max-w-3xl mx-auto">
              At Eleventech Solutions, we combine technical expertise with innovative strategies to provide end-to-end services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200/80"
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="bg-blue-100 p-4 rounded-xl">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-base">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-gray-600 mb-6">
                              {service.fullDesc}
                            </p>
                            <Button 
                              onClick={(e) => { e.stopPropagation(); handleGetQuote(service.title); }}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                            >
                              Get Quote
                            </Button>
                          </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
