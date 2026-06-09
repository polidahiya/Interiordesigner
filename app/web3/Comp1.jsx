"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

export default function Hero() {
  // Animation variants for staggered editorial text reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0F0F0F] text-[#F5F5F3] overflow-hidden flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 lg:px-24">
      {/* Background Ambient Glow for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10"
      >
        {/* Left Side: Bold Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.span
            variants={fadeInUp}
            className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6 font-medium"
          >
            Architecture & Interior Studio
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8">
            <motion.span
              variants={fadeInUp}
              className="block font-serif italic text-stone-300"
            >
              Crafting
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="block font-sans font-normal"
            >
              Silent Luxury.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeInUp}
            className="text-stone-400 text-lg max-w-md font-light leading-relaxed mb-10"
          >
            We transform raw spaces into deeply personal, functional
            sanctuaries. Where minimalist Japanese philosophy meets warm
            European mid-century design.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-5 items-center"
          >
            <button className="group relative flex items-center gap-3 bg-[#F5F5F3] text-[#0F0F0F] px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:pr-10">
              <span>Explore Projects</span>
              <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:rotate-45" />
            </button>

            <button className="group flex items-center gap-3 border border-stone-700 hover:border-stone-400 px-6 py-4 rounded-full font-medium transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                <FiPlay className="text-xs translate-x-[1px]" />
              </span>
              <span className="text-stone-300 group-hover:text-white transition-colors">
                Watch Film
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Immersive Cinematic Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full bg-stone-900 overflow-hidden rounded-2xl group"
        >
          {/* Subtle parallax/scale effect on hover */}
          <motion.img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
            alt="Minimalist luxury living room"
            className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay Tag */}
          <div className="absolute bottom-6 left-6 right-6 bg-[#0F0F0F]/60 backdrop-blur-md p-4 rounded-xl border border-white/5 flex justify-between items-center">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider">
                Latest Work
              </p>
              <p className="text-sm font-medium text-white">
                The Concrete Oasis, Kyoto
              </p>
            </div>
            <span className="text-xs text-stone-400 border border-stone-700 px-2.5 py-1 rounded-md">
              2026
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Meta Section (Classic Award-Winning Website Layout) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full border-t border-stone-800/60 pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-500 uppercase tracking-widest z-10"
      >
        <div>
          <p className="text-stone-300 font-medium mb-1">01 / Concepts</p>
          <p className="lowercase text-stone-500">Bespoke Curation</p>
        </div>
        <div>
          <p className="text-stone-300 font-medium mb-1">02 / Execution</p>
          <p className="lowercase text-stone-500">Master Craftsmanship</p>
        </div>
        <div>
          <p className="text-stone-300 font-medium mb-1">Milan, Italy</p>
          <p className="lowercase text-stone-500">HQ Studio</p>
        </div>
        <div className="text-right flex flex-col justify-end items-end">
          <p className="text-stone-400 normal-case italic font-serif text-sm">
            Scroll to submerge
          </p>
        </div>
      </motion.div>
    </section>
  );
}
