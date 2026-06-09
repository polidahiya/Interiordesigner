"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiCpu, FiShield, FiSliders } from 'react-icons/fi';

const SWATCHES = [
  {
    id: 'walnut-fluted',
    name: 'Fluted Smoked Walnut',
    code: 'SK-9942X',
    type: 'Premium Timber Finish',
    texture: 'Deep Tactile Grain',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80',
    desc: 'Engineered with a micro-ribbed core for dramatic architectural light-play and shadows.'
  },
  {
    id: 'boreal-oak',
    name: 'Boreal Matte Oak',
    code: 'SK-2104M',
    type: 'Natural Surface Solution',
    texture: 'Ultra-Matte Anti-Fingerprint',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80',
    desc: 'A pale, raw texture designed to endure high-traffic commercial spaces without structural warping.'
  },
  {
    id: 'charcoal-ash',
    name: 'Carbonized Black Ash',
    code: 'SK-7711S',
    type: 'Shou Sugi Ban Inspired',
    texture: 'Satin Charred Texture',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80',
    desc: 'Deeply saturated dark surface offering premium scratch-healing properties and chemical resistance.'
  }
];

export default function MaterialSliderview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SWATCHES[activeIdx];

  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Header HUD */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase mb-2">( Live Material Deck )</span>
            <h2 className="text-2xl md:text-4xl font-serif font-light text-neutral-900">Tactile Fine-Tuning</h2>
          </div>
          <div className="flex gap-2">
            {SWATCHES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-12 h-1 transition-all rounded-full ${idx === activeIdx ? 'bg-black w-16' : 'bg-neutral-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Master Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Dynamic Spec HUD */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 bg-neutral-200/60 rounded text-neutral-600">{current.code}</span>
              <h3 className="text-3xl font-serif mt-4 text-neutral-900">{current.name}</h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{current.desc}</p>
            </div>

            <div className="divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80 text-xs">
              <div className="py-3 flex justify-between"><span className="text-neutral-400">Classification</span><span className="font-medium">{current.type}</span></div>
              <div className="py-3 flex justify-between"><span className="text-neutral-400">Finish Depth</span><span className="font-medium">{current.texture}</span></div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                <FiCpu className="mx-auto text-neutral-700 mb-1" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 block">Self Healing</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                <FiShield className="mx-auto text-neutral-700 mb-1" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 block">UV Shield</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                <FiSliders className="mx-auto text-neutral-700 mb-1" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 block">Fire Rated</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Large Window Zoom Image */}
          <div className="lg:col-span-8 relative order-1 lg:order-2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl bg-neutral-200 border border-neutral-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <button className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-colors shadow-lg">
                <FiMaximize2 className="text-sm" />
              </button>
            </div>

            {/* Micro Quick Selection Deck underneath the view */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white border border-neutral-200 p-3 rounded-2xl flex gap-3 shadow-md max-w-sm mx-auto justify-center">
              {SWATCHES.map((swatch, idx) => (
                <button
                  key={swatch.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${idx === activeIdx ? 'border-black scale-105 shadow' : 'border-transparent opacity-60'}`}
                >
                  <img src={swatch.image} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}