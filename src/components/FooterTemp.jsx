import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Why Us', to: 'why-us' },
    { name: 'Clients', to: 'clients' },
    { name: 'Contact Us', to: 'contact' }
  ];

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5 mr-3 text-blue-400" />, text: "Gachibowli, Hyderabad, India" },
    { icon: <Mail className="h-5 w-5 mr-3 text-blue-400" />, text: "info@eleventechsolutions.com" },
    { icon: <Phone className="h-5 w-5 mr-3 text-blue-400" />, text: "+91 8977897877" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <RouterLink to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-2xl text-white">
                Eleventech
              </span>
            </RouterLink>
            <p className="text-gray-400 text-sm">
              Innovating the Digital Future, One Solution at a Time. Your trusted partner in digital transformation.
            </p>
          </div>

          <div>
            <p className="font-poppins font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.name}>
                   <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-white transition-colors duration-300 cursor-pointer">
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-poppins font-semibold text-white mb-4">Contact Info</p>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-poppins font-semibold text-white mb-4">Newsletter</p>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-l-md bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container-custom text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Eleventech Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;