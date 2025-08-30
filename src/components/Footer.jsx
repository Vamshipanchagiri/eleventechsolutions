import React from 'react'; 
import { businessDetails } from '@/config';

const Footer = () => {

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="py-20 px-6 bg-black text-white dark-texture-overlay">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <a href="/" onClick={handleHomeClick} className="text-2xl font-light tracking-wider uppercase mb-4 inline-block">
                            <span className="font-light">Eleven</span>
                            <span className="font-extrabold">Tech</span>
                        </a>
                        <p className="text-base font-light text-gray-400 leading-relaxed max-w-md">
                            {businessDetails.tagline}
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase mb-4 block">
                            Menu
                        </span>
                        <div className="space-y-3">
                            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">About Us</a>
                            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">Services</a>
                            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">Why Us</a>
                            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">Contact</a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase mb-4 block">
                            Contact
                        </span>
                        <div className="space-y-3">
                            <a href={`mailto:${businessDetails.email}`} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">{businessDetails.email}</a>
                            <a href={`tel:${businessDetails.phone.replace(/\s/g, '')}`} className="block text-sm font-light text-gray-400 sophisticated-underline hover:text-white transition-colors duration-300">{businessDetails.phone}</a>
                            <p className="text-sm font-light text-gray-400">{businessDetails.address}</p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-xs font-light text-gray-500 tracking-wide">
                        © 2019 {businessDetails.name}. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <button className="text-xs font-light text-gray-500 sophisticated-underline hover:text-gray-300 transition-colors duration-300">
                            Privacy Policy
                        </button>
                        <button className="text-xs font-light text-gray-500 sophisticated-underline hover:text-gray-300 transition-colors duration-300">
                            Terms of Service
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
