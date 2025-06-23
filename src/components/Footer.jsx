import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    'Professional Detectors',
    'Standard Models',
    'Portable Units',
    'Accessories',
    'Spare Parts'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600' },
    { icon: Twitter, href: '#', color: 'text-blue-400' },
    { icon: Instagram, href: '#', color: 'text-pink-600' },
    { icon: Linkedin, href: '#', color: 'text-blue-700' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
               <img  
                src="/img/logo2.png" 
                alt="Geosync Detectors Logo" 
                className="h-10 w-auto"
                />
              <div>
                <span className="text-xl font-bold text-gradient">Geosync Detectors</span>
                <p className="text-xs text-gray-300">Private Limited</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading supplier of gold detector machines and accessories across Africa. Discover hidden treasures with our cutting-edge technology and exceptional service.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">+263774679132</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">geosyncinvestments@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Harare, Zimbabwe</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-6 block">Our Products</span>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{category}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold mb-6 block">Connect With Us</span>
            
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-300">Business Hours:</span>
                <p className="text-sm text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-300">Service Areas:</span>
                <p className="text-sm text-gray-400">Zimbabwe, Zambia, Mozambique, Botswana & More</p>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Geosync Detectors (Pvt) Ltd. All rights reserved.</p>
              <p className="mt-1">Registration No: 33332A0222025 | TIN: 2002119959</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;