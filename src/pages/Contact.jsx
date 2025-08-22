import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_qj9mn8b', 'template_i9d7btn', {
        from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message,
      }, 'o5-Ex7Owap4zrChOM');
      toast({ title: 'Message Sent Successfully! 🎉', description: "Thank you for reaching out. We'll get back to you shortly.", duration: 5000 });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({ title: 'Error Sending Message', description: 'Something went wrong. Please try again or contact us directly.', variant: 'destructive', duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', details: 'info@eleventechsolutions.in', href: 'mailto:info@eleventechsolutions.in' },
    { icon: Phone, title: 'Phone', details: '8977897877', href: 'tel:8977897877' },
    { icon: MapPin, title: 'Address', details: 'Road No. 10, Jubilee Hills, Hyderabad', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding radial-gradient-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-black/30 border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full bg-black/30 border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full bg-black/30 border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition" />
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your Message..." className="w-full bg-black/30 border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none" />
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-lg shadow-violet-500/20 hover:shadow-xl transition-all disabled:opacity-50">
                {isSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <a key={info.title} href={info.href} className="flex items-center p-6 glass-card rounded-2xl group hover:border-white/20 transition-all duration-300">
                <div className="bg-violet-500/20 text-violet-400 p-4 rounded-lg mr-5">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                  <p className="text-gray-400 group-hover:text-violet-300 transition-colors">{info.details}</p>
                </div>
              </a>
            ))}
             <div className="mt-8 rounded-2xl overflow-hidden glass-card">
              <img  class="w-full h-48 object-cover" alt="Map showing location in Hyderabad" src="https://images.unsplash.com/photo-1561653978-a526ddcfda79" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;