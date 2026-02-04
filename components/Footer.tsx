
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 flex items-center justify-center rounded-sm">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className="text-white font-industrial font-bold text-xl tracking-tighter">POLYMOLDING</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading industrial plastic solution provider for 25 years. We specialize in high-precision injection molding and heavy-duty logistics products.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-industrial font-bold mb-6 tracking-widest">DEPARTMENTS</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Industrial Logistics</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Garment Accessories</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Custom Mold Engineering</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Quality Labs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-industrial font-bold mb-6 tracking-widest">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/products" className="hover:text-orange-500">Product Catalog</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Custom Molding</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-industrial font-bold mb-6 tracking-widest">CONTACT INFO</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span>Plot 42, Industrial Zone 2, Gazipur, Bangladesh</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span>sales@polymolding-bd.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-zinc-900 text-center text-[10px] uppercase tracking-[0.3em]">
        &copy; 2024 POLYMOLDING INDUSTRIAL HQ. ALL RIGHTS RESERVED. PRECISION ENGINEERING AT SCALE.
      </div>
    </footer>
  );
};

export default Footer;
