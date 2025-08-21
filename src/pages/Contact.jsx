import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Our Address",
      details: "Gachibowli, Hyderabad, Telangana, India",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Us",
      details: "info@eleventechsolutions.com",
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Call Us",
      details: "+91 8977897877",
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
          <h2 className="mb-4">Get In Touch</h2>
          <p className="max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you. Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-style p-8 text-center"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {info.icon}
              </div>
              <h3 className="mb-3">
                {info.title}
              </h3>
              <p className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
                {info.details}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200"
        >
          <h2 className="text-center text-blue-gradient mb-8">
            Send Us a Message
          </h2>
          <div className="w-full">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-F5SwhgF8N7g-zAFaCXHw2jJZsQ_9Ea_1A8A_j1o1X8qI2w/viewform?embedded=true" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="rounded-lg"
              title="Eleventech Solutions Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
