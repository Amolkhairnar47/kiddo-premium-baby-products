import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    // 
    <footer className="bg-kiddo-dark text-white py-5 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    
    {/* Mobile: centered logo + social, Desktop: 4 column grid */}
    <div className="mb-16">
      
      {/* Brand Info - centered on mobile, left on desktop */}
      <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
        <div className="flex items-center gap-2 mb-6">
          <div className="relative w-30 h-30">
            <img 
              src="/images/logo.png" 
              alt="Kiddo Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight font-heading md:block hidden">Kiddo</span>
        </div>
        <p className="text-white-400 mb-8 leading-relaxed text-center md:text-left max-w-xs">
          Premium baby essentials trusted by 50,000+ parents across India.
        </p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-kiddo-dark transition-all duration-300">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Links Grid - 2 col on mobile, 3 col on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 md:mt-0">
        
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6">Categories</h4>
          <ul className="space-y-4 text-white-400">
            <li><a href="#" className="hover:text-white transition-colors">Clothing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Toys</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Feeding</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Daily Care</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <p className="text-white-400 mb-4">
            Have questions? Email us at:<br />
            <span className="text-white font-medium">hello@kiddo.com</span>
          </p>
          <p className="text-white-400">
            Call us:<br />
            <span className="text-white font-medium">+91 12345 67890</span>
          </p>
        </div>

      </div>
    </div>

    <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Kiddo Baby Products. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}
