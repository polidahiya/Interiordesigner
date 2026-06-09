"use client"
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function Hero() {
  // Animation variants for staggered text and elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F9F9F9] text-[#1A1A1A] overflow-hidden font-sans">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white rounded-full border border-neutral-200 shadow-sm hover:scale-105 transition-transform">
            <FiMenu className="text-lg" />
          </button>
          <span className="text-xs tracking-wider uppercase font-semibold text-neutral-500">
            Seiko • Surface Solutions
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-neutral-600">
            <a href="#" className="hover:text-black transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-black transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-black transition-colors"><FaXTwitter /></a>
          </div>
          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-black text-white text-xs font-medium uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-md group">
            Contact Us
            <FiArrowUpRight className="text-sm group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT CONTAINER --- */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Side: Headline & Intro Card */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* Main Typography Header */}
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] font-serif text-neutral-900"
            variants={fadeInUp}
          >
            Premium <span className="italic font-normal">Interior</span> <br />
            Surface for Design <br />
            Driven Projects
          </motion.h1>

          {/* Inline Information Card */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-6 rounded-3xl border border-neutral-150 max-w-2xl shadow-sm"
            variants={fadeInUp}
          >
            {/* Explore Button */}
            <button className="relative shrink-0 w-24 h-24 rounded-full bg-[#2F2119] text-white flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform shadow-lg group">
              <span className="text-[10px] uppercase tracking-wider leading-tight font-medium">Explore All</span>
              <span className="text-[10px] uppercase tracking-wider leading-tight font-medium">Collections</span>
              <FiArrowUpRight className="mt-1 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Micro-thumbnails */}
            <div className="flex gap-2">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200&q=80" alt="Texture 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <img src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=200&q=80" alt="Texture 2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Description Text */}
            <div className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              <span className="block font-semibold text-neutral-800 mb-1">Decorative laminated collections</span>
              Curated decorative laminate and surface finishes for architects, interior designers, and high-end residential spaces.
            </div>
          </motion.div>
        </div>

        {/* Right Side: Immersive Feature Showcase */}
        <motion.div 
          className="lg:col-span-5 relative w-full h-[450px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl group border border-neutral-200"
          variants={fadeInUp}
        >
          {/* Background Imagery with smooth zoom on load */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-neutral-900"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Lounge with wood surface finishes" 
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Soft Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Floating Minimal HUD Overlay Element */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center justify-between text-white">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-300">Featured Space</p>
              <h3 className="font-serif text-lg font-light mt-0.5">Walnut Veneer Library Lounge</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm shadow-md">
              01
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Optional Subtle Section Divider Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200/60 mx-auto max-w-7xl px-6" />
    </section>
  );
}