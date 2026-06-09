"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll depth to add a beautiful backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Projects", href: "#projects" },
    { title: "Studio", href: "#studio" },
    { title: "Journal", href: "#journal" },
    { title: "Contact", href: "#contact" },
  ];

  // Full screen menu animation variants
  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-24 py-6 ${
          isScrolled 
            ? "bg-[#0F0F0F]/70 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Studio Brand/Logo */}
          <a href="#" className="z-50 text-xl font-light tracking-[0.2em] uppercase text-[#F5F5F3]">
            AURA<span className="font-serif italic font-normal tracking-normal text-stone-400">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="relative text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300 font-medium group"
              >
                {link.title}
                {/* Animated underline indicator */}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call to Action & Menu Toggle Button */}
          <div className="flex items-center gap-6 z-50">
            <button className="hidden sm:flex items-center gap-2 border border-stone-800 hover:border-stone-500 bg-[#0F0F0F]/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-xs uppercase tracking-widest text-stone-300 hover:text-white transition-all duration-300">
              <span>Inquire</span>
              <FiArrowUpRight className="text-sm" />
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 border border-stone-800 hover:border-stone-600 text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#141414] z-40 origin-top flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 lg:px-24"
          >
            {/* Overlay background text texture */}
            <div className="absolute right-0 bottom-0 text-[20vw] font-serif italic text-stone-900/30 select-none pointer-events-none tracking-tighter leading-none pr-6">
              Studio
            </div>

            <motion.div 
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 md:gap-8 max-w-4xl"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-stone-600 font-semibold mb-2 block">Navigation</span>
              {navLinks.map((link) => (
                <motion.div key={link.title} variants={linkVariants}>
                  <a
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    className="inline-block text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-400 hover:text-white hover:font-serif hover:italic transition-all duration-300"
                  >
                    {link.title}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Overlay Footer Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-800/60 text-xs tracking-widest uppercase text-stone-500 z-10">
              <div>
                <p className="text-stone-400 font-medium mb-1">General Inquiries</p>
                <p className="lowercase text-stone-500">hello@aurastudio.com</p>
              </div>
              <div>
                <p className="text-stone-400 font-medium mb-1">Follow Us</p>
                <p className="lowercase text-stone-500">@aura.interiors</p>
              </div>
              <div className="md:text-right">
                <p className="text-stone-400 font-medium mb-1">Current Studio Time</p>
                <p className="normal-case text-stone-500">Milan, IT — 14:12 CET</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}