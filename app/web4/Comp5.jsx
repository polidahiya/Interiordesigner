"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll smoothly back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white p-4 md:p-6 text-white overflow-hidden">
      
      {/* Outer wrapper mimicking the inverted corner framing design pattern */}
      <div className="w-full bg-[#121212] rounded-[2.5rem] px-8 pt-16 pb-8 md:px-16 md:pt-24 flex flex-col justify-between relative">
        
        {/* --- TOP ROW: NEWSLETTER & LINKS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900">
          
          {/* Newsletter Input Box */}
          <div className="lg:col-span-6 max-w-md">
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 block mb-4">
              Join the Collective
            </span>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight mb-6 text-neutral-200">
              Subscribe to receive exclusive collection updates, archival releases, and studio design insights.
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-neutral-800 focus:border-[#FF4C4C] text-sm py-3 pr-12 text-white placeholder-neutral-600 outline-none transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-0 p-2 text-neutral-400 group-hover:text-white transition-colors"
                aria-label="Submit newsletter form"
              >
                <FiArrowUpRight className="w-5 h-5 transition-transform group-focus-within:rotate-45" />
              </button>
            </form>
          </div>

          {/* Navigation Directory Link Matrices */}
          <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                {['Shop', 'Browser', 'About Us', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">Collections</h4>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                {['Living Room', 'Workspaces', 'Lighting', 'Architectural'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">Socials</h4>
              <ul className="space-y-2 text-sm text-neutral-400 font-light">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FiInstagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FiTwitter className="w-3.5 h-3.5" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FiLinkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* --- BOTTOM ROW: LEGAL & HUGE MARQUEE --- */}
        <div className="pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>© {currentYear} STYLECRAFT DESIGN.</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group self-start md:self-auto"
          >
            BACK TO TOP 
            <span className="border border-neutral-800 p-1 rounded-full group-hover:bg-neutral-900 transition-colors">
              <FiArrowUpRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform" />
            </span>
          </button>
        </div>

        {/* Huge Stylized Giant Watermark Text acting as a graphical structural background base */}
        <div className="w-full overflow-hidden select-none pointer-events-none mt-12 opacity-[0.02]">
          <h2 className="text-[12vw] font-black uppercase text-center tracking-tighter leading-none whitespace-nowrap">
            STYLECRAFT
          </h2>
        </div>

      </div>
    </footer>
  );
}