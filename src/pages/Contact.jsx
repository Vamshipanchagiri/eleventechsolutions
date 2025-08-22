import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qj9mn8b",   // ✅ Your Service ID
        "template_i9d7btn",  // ✅ Your Template ID
        form.current,
        "o5-Ex7Owap4zrChOM"  // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Our Address",
      details: "Gachibowli, Hyderabad, Telangana, India",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Us",
      details: "hr@eleventechsolutions.in",
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

        {/* Contact Info Cards */}
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
              <h3 className="mb-3">{info.title}</h3>
              <p className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
                {info.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
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

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {success === true && (
              <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-600 mt-4">❌ Failed to send. Try again later.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;