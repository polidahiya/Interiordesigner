"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-screen bg-white text-white font-sans antialiased overflow-hidden p-4 md:p-6">
      
      {/* Main Container mirroring the smooth rounded layout of the mockup */}
      <div className="relative w-full min-h-[calc(100vh-2rem)] rounded-[2.5rem] bg-[#121212] bg-cover bg-center overflow-hidden flex flex-col justify-between"
           style={{ 
            backgroundPositionY:"100%",
             // Replace with your high-res minimalist interior image path
             backgroundImage: `linear-gradient(to bottom, rgba(18,18,18,0.7), rgba(18,18,18,0.5)), url('https://img.freepik.com/free-photo/minimalist-black-interior-with-black-sofa_1268-31803.jpg?semt=ais_hybrid&w=740&q=80')` 
           }}>
        
        {/* --- NAVBAR --- */}
        <header className="w-full px-8 py-6 flex items-center justify-between z-10">
          {/* Logo Brand Area with custom inverted framing style */}
          <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-br-2xl absolute top-0 left-0">
            <span className="font-black text-xl tracking-tighter uppercase">Stylecraft</span>
            <span className="text-xs font-light tracking-widest text-neutral-500 uppercase">Design</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-12 mx-auto text-sm font-medium tracking-wide text-neutral-300">
            {['Shop', 'Browser', 'About Us', 'FAQ'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>

          {/* Connect Button */}
          <button className="group flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-sm font-medium py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 absolute top-4 right-4 md:right-8">
            Connect with us
            <span className="bg-neutral-800 p-1.5 rounded-full group-hover:bg-neutral-200 transition-colors">
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </header>

        {/* --- HERO CONTENT CENTER --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center justify-center flex-grow px-4 max-w-4xl mx-auto z-10"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Modern Furniture for <br />
            <span className="font-light italic text-neutral-200">Minimalist Lovers</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            variants={itemVariants}
            className="text-neutral-400 text-sm md:text-base max-w-md mx-auto mb-10 font-light leading-relaxed"
          >
            Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs.
          </motion.p>

          {/* Interactive Coral CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-[#FF4C4C] hover:bg-[#ff3333] text-white font-medium pl-8 pr-3 py-3 rounded-full shadow-lg shadow-red-500/10 transition-colors group"
            >
              <span className="text-sm tracking-wide">Explore More</span>
              <div className="bg-white text-black p-2 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <FiArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM VECTOR ACCENT (Mimicking the curved cutouts if desired) --- */}
        <div className="w-full h-12 bg-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}