import React from 'react';
import { Mail, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-16 pb-12 z-10">
      {/* Neon Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4C8BFF]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <span className="text-lg font-semibold tracking-tight text-slate-900">LeoTheTechGuy</span>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              I create intelligent, scalable tools for innovators and teams ready to grow. Bridging the gap between imagination and engineering.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400">© 2025 LeoTheTechGuy. All rights reserved.</span>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-1">Explore</h3>
            <Link href="/" className="text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors w-max">Home</Link>
            <Link href="/services" className="text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors w-max">Services</Link>
            <Link href="/portfolio" className="text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors w-max">Portfolio</Link>
            <Link href="/about" className="text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors w-max">About</Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors w-max">Contact</Link>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-1">Get in Touch</h3>
            
            <a href="mailto:admin@LeoTheTechGuy.com" className="flex items-center text-sm text-slate-500 hover:text-[#4C8BFF] transition-colors group">
              <Mail className="w-4 h-4 mr-2 text-slate-400 group-hover:text-[#4C8BFF] transition-colors stroke-width-1.5" />
              admin@LeoTheTechGuy.com
            </a>
            
            <div className="flex items-center text-sm text-slate-500">
              <MapPin className="w-4 h-4 mr-2 text-slate-400 stroke-width-1.5" />
              Binary 1010
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-[#0077B5] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 stroke-width-1.5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-black transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5 stroke-width-1.5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5 stroke-width-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
