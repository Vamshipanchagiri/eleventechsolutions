import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'About', 'Services', 'Why Us', 'Contact'];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-gray-800 text-gray-400">
      <div className="section-container section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-2xl font-bold text-white mb-4">
              Eleventech Solutions
            </p>
            <p className="max-w-xs">
              Pioneering the future of technology with innovative and reliable IT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-4 text-lg">Quick Links</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="hover:text-violet-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-white mb-4 text-lg">Contact Us</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-violet-400" />
                <a href="mailto:info@eleventechsolutions.in" className="hover:text-violet-400">info@eleventechsolutions.in</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-violet-400" />
                <a href="tel:8977897877" className="hover:text-violet-400">8977897877</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-violet-400" />
                <span>Road No. 10, Jubilee Hills, Hyderabad, Telangana, 500033</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (placeholder) */}
          <div>
            <p className="font-semibold text-white mb-4 text-lg">Stay Updated</p>
            <p className="mb-4">Subscribe to our newsletter for the latest tech news and insights.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="w-full bg-gray-800 border-gray-700 rounded-l-md px-4 py-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none"/>
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Eleventech Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;