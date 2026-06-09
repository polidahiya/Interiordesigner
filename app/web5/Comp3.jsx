"use client"
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function MaterialConsultation() {
  // Animation presets for modular cards
  const cardHover = {
    hover: { 
      y: -8, 
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-[#1C1510] text-[#EADED2] py-24 px-6 overflow-hidden">
      
      {/* Subtle background texture overlay to mimic the dark wood grain from image_430805.jpg */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover'
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER CONTROLS HUD --- */}
        <div className="flex flex-wrap items-center justify-between border-b border-neutral-700/40 pb-6 mb-16 gap-4">
          <span className="text-xs font-medium uppercase tracking-widest px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[#CBB9A8]">
            Our Services
          </span>
          <div className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-xs font-mono text-neutral-400 bg-white/5">
            02
          </div>
          <span className="text-xs font-medium uppercase tracking-widest px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[#CBB9A8] hidden md:block">
            Material Consultation & Selection
          </span>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Container: Title & Step 01 Card */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-[1.2] text-white tracking-tight">
              Material Consultation <br />
              <span className="italic text-[#CBB9A8]">and Selection</span>
            </h2>

            {/* Step 01: Micro Card */}
            <motion.div 
              className="w-full max-w-md bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 flex gap-5 items-center group cursor-pointer"
              whileHover="hover"
              variants={cardHover}
            >
              <div className="w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-neutral-800 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=300&q=80" 
                  alt="Veneer sampling process" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between h-full py-1">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#CBB9A8]">01</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">Project quantity planning</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed mt-2">
                  When used as non-structural wall finishes, Jabarana Surface Laminate guarantees absolute stability...
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Container: Main Showcase Tall Frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <motion.div 
              className="w-full bg-white text-black rounded-[36px] p-4 shadow-2xl relative group cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer visual capsule border frame from mockup layout */}
              <div className="rounded-[28px] overflow-hidden bg-neutral-100 aspect-[3/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                  alt="Architectural modern bar feature wall" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              
              {/* Floating Meta Tag Below Image but inside White Frame */}
              <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Cost alignment</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Budget compliance without visual compromise</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  <FiArrowRight className="rotate-45" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Container: Step 02 Stacked Frame */}
          <div className="lg:col-span-3 flex flex-col justify-end h-full lg:pt-24">
            <motion.div 
              className="w-full bg-white/[0.02] border border-white/10 rounded-[28px] p-4 flex flex-col gap-4 group"
              whileHover="hover"
              variants={cardHover}
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-neutral-800 border border-white/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80" 
                  alt="Clean warm color coordinates" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              
              <div className="px-1 pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#CBB9A8]">02 Color coordination</span>
                    <h4 className="text-sm font-medium text-white mt-0.5">Curated decorative laminate finishes</h4>
                  </div>
                  <button className="w-8 h-8 shrink-0 rounded-full bg-white text-black flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                    <FiArrowUpRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}