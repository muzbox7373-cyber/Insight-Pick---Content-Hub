import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            © 2024 Insight Pick. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Curated for the builders of tomorrow.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;