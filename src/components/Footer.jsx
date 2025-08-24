import React from "react";

const Footer = () => {
  const navItems = ["Home", "About", "Services", "Why Us", "Contact"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ElevenTech Solutions</h2>
          <p className="text-sm">
            Delivering innovative IT solutions with a focus on reliability,
            efficiency, and customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={#${item.toLowerCase().replace(" ", "")}'}
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
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>Plot No. 45, Hi-Tech City,</p>
          <p>Madhapur, Hyderabad,</p>
          <p>Telangana</p>
          <p className="mt-2">Email: info@eleventechsolutions.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2020 ElevenTech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;